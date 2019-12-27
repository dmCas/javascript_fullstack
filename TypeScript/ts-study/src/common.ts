//一、any
let value: any
value = true
value = 1
value = 'hello'
value = Symbol('type')
value = []
value = {}
// -------------
value.foo.bar
value()
new value()
value[0][1]

/*=========================*/

//二、unknown
let val: unknown
val = true
val = 1
val = 'hello'
val = Symbol('type')
val = []
val = {}
// ------------------
// val.foo.bar
// val()
// new val()
// val[0][1]


//三、never 可以取代void 类型是任何类型的子类型， 也可以赋值给任何类型
// 然而没有类型是nerver的子类型或赋值给nerver类型
function error(message: string) : never{
  throw new Error(message)
}

const empty: never[] = []
empty.push(1)


//四、 Array
const list: number[] = [1, 2, 3, 4]

const list2: Array<number> = [1, 2, 3, 4] // 泛型——>一种定义数组的形式
const list3: Array<string | number> {
  0: string
}


// Tuple 元组
let x: [string, number, boolean]

//x = [']