// 云函数入口文件
const cloud = require('wx-server-sdk')
// 首先指明云函数环境
const env = 'bei-chen'

cloud.init()
// 获取数据库句柄
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  //拿到用户信息
  const openId = cloud.getWXContext().OPENID
  //指明库是否存在userId=openId字段
  let groupList = await db.collection('user-group')
  .where({
    userId: openId
  })
  .get() //拿到值返回给groupList
  let returnResult = []


  for (let item of groupList.data) {
    const oneGroup = await db.collection('group')
    .where({
      _id: item.groupId,
      delete: false
    })
    .get()

  if(oneGroup.data.length > 0){
    // const userInfo = await db.collection('user')
    // .where({
    //   openId: oneGroup.data[0].createBy
    // })
    // .get()
    // oneGroup.data[0].createBy = userInfo.data[0]
    // oneGroup.data[0].relateUserGroupId = item._id
    returnResult.push(oneGroup.data[0])
  }
  }
  return returnResult.sort((a,b) => a.createTime < b.createTime ? 1 : -1)
}