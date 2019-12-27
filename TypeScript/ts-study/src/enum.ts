// enum Direction {
//   Up = 'Up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }
// console.log(Direction['Down'])

// 异构枚举
enum yg {
  No = 0,
  Yes = 'Yes'
}

// 反向映射
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// console.log(Direction['Up']) // 0
// console.log(Direction[Direction['Up']]) // Up

// var obj = {
//   name: 'wn'
// }
// obj['name']

//联合枚举
enum Direction {
  Up = -1,
  Down,
  Left,
  Right
}
declare let aaa: Direction
// console.log(aaa === Direction['Down'])

// type c = 0
// declare let bbb: c
// // bbb = 1
// bbb = Direction.Up
// console.log(bbb)

enum Animal{
  Dog,
  Cat
}

aaa = Direction.Up
// aaa = Animal.Dog // 报错 aaa已是Direction类型了

//枚举合并
enum Direction{
  Center = 1
}