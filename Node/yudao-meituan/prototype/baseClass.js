export default class BaseClass{
  async locationSearch(keyword){
    return({
      city: '南昌',
      area: [
        '东华理工',
        '东光'
      ]
    })
  }
  async fetch(url='', data ={},
  type = 'GET',
  resType = 'JSON'){
    return({
      city: '南昌',
      area: [
        '东华理工',
        '东光'
      ]
    })
  }
}