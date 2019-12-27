// 接口
const getUsername = (user: User) => {
  user.say = function (words: string){
    return 'hello world'
  }  
}


interface User{
  name: string,
  age?: number,
  readonly isMale: boolean,
  // say: (words: string) => string
  say: Say
}

interface Say {
  (words: string): string
}

interface Config {
  width?: number,
  [propName: string]: any
}
function CalculateAreas(config: Config): {area: number} {
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square}
}
// 调用 CalculateAreas方法 {width:5} 只能接受Config含有的类型
let mySquare1 = CalculateAreas({widdth:5} as Config)

//一、 类型断言 {widdth:5} as Config  强制认为widdth为Config接口类型
//二、 添加字符串索引签名  [propName: string]: any
let mySquare2 = CalculateAreas({widdth:5})
//三、 讲字面量赋值给另外一个变量(可能不稳定 不建议使用 )
let options = {widdth:5}
let mySquare3 = CalculateAreas(options)

// 继承接口
interface VIPUser extends User, SupperUser{
  broadcast: () => void
}
interface SupperUser {
  getGrade: () => void
}