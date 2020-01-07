import BaseClass from '../../prototype/baseClass'

class Cities extends BaseClass{
  constructor() {
    super();
    this.suggestion = this.suggestion.bind(this);
  }
  async suggestion(req, res, err){
    console.log('++++++++++++++++++++++++')
    let { keyword } = req.query;
    console.log(keyword);
    if (!keyword) {
      //参数校验
      res.send({
        status: -1,
        message:'参数错误'
      })
      return;
    }
    try {
      //数据库 网络 
      let data = await this.locationSearch(keyword);
      res.send({
        status:200,
        message:'获取位置信息成功',
        data
      })
    } catch(e){
      res.send({
        status:-1,
        message:'获取位置信息失败 请重试'
      })
    }
    // res.send({
    //   status: 200,
    //   message: keyword
    // })
  }
}

export default new Cities();