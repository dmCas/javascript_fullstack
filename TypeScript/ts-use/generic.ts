let x: [number, string]
x = [1, '2']
// 泛型
const arr: Array<number | string> = [1, 2, 3, '4']

// 声明泛型变量 <T> 用来捕获传进来的数据类型， 我们就可以使用<T>做参数类型和返回值的类型
// function returnItem<T>(para : T): T {
//   return para
// }

function swap<T, U>(tuple:[T, U]){
  return [tuple[0], tuple[1]]
}

swap([7, 'seven'])

//泛型变量
function getArrayLength<T>(arg : Array<T>){
  console.log(arg.length)
  return arg
}
// function returnItem(foo:number) :number{
//   return foo
// }

//泛型接口
interface ReturnItem<T>{
  (para: T): T
}

const returnItem: ReturnItem<number> = para => para


// 泛型类


// 泛型约束
type Params = number | string
class Stack<T extends Params> {
  private arr: T[] = []
  public push(item: T) {
    this.arr.push(item)
  }

  public poo(){
    this.arr.pop()
  }
}

const app = new Stack()
app.push('123')

const stack1 = new Stack<number>()
const stack2 = new Stack<boolean>()

// 泛型的约束与索引类型 key 被约束成为object的一个属性值了
function getValue<T extends object, U extends keyof T>(obj: T, key:U){ // obj = {}
  return obj[key]
}

const a = {
  name:  'wn',
  id: 1
}

getValue(a, 'id')

// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomething(): number
}
interface SecondInterface {
  doSomethingElse(): string
}

//多个接口合并成超级接口
interface childInterface extends FirstInterface,SecondInterface{}

class Demo<T extends childInterface>{
  private genericProperty: T

  useT () {
    this.genericProperty.doSomething()
    this.genericProperty.doSomethingElse()
  }
}

// 泛型与new

// {new(): T} 泛型可被构造
function factory<T>(type: {new():T}): T{
  return new type()
}