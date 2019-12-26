const shell = require('shelljs')//引入shelljs
const moment = require('moment')
//安装依赖 npm i node-schedule -S
const schedule = require('node-schedule')

// node定时任务模块 node-schedule
function copy() {
  const current = moment().format('YYYYMMDDhhmmss') //20191226102330
  const folder = `src_${current}`
  // 先创建一个时间信息的文件夹,防止覆盖同一个文件
  shell.mkdir('-p', './bak/' + folder) //在node-script 下生成一个带folder的bak文件夹
  // shell 复制文件或者文件夹
  shell.cp('-rf', './test', './bak/' + folder)
}

// 左->右 秒->分->时 ->日 ->月 ->年
schedule.scheduleJob('00 00 00 * * *', () => {
  copy()
})

// 自动执行命令
// shell.exec('cls') // 执行windows下的清空显示命令
// shell.exec('npm run bak')
shell.exec('node --version', {
  silent: true, // 执行过程中命令提示符不会显示过程信息
  async: false, //不要异步执行

}, (code, stdout, stderr) => {
  // 执行完毕后继续执行这里的回调函数
  //自动修改内容
  //-i表示不创建备份, version需要替换的内容, aa替换的新内容, 最后一个参数表示文件路径
  // shell.sed('-i','version', 'v', './version.js')
  //
  // shell.sed('-i', /version\s=/, 'v =', './version.js') 
  shell.sed('-i', /version\s=/, 'v =', './version.js')
  const content = shell.cat('./version.js')

  //最后一位每次打包自动+1
  const rep = content.stdout.split('.') 
  //接受控制台输入
  process.stdout.write("需要变更版本号吗?(y/n)");
  //拿到用户输入的内容
  process.stdin.on('data', (input) => {
    input = input.toString().trim()
    if(['Y', 'y', 'yes', 'YES'].indexOf(input) > -1){
      rep[rep.length-1] = parseInt(rep[rep.length - 1]) + 1 + "'"
      shell.sed('-i', content, rep.join('.'), './version.js')
    }
    if(['N', 'n', 'NO', 'no'].indexOf(input) > -1){
      process.exit(0)
    }
  })
})

