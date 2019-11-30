Page({
  data: {
    // json server
    navData: [],
    currentTab: 0, //默认第一个
    navScrollLeft: 0,
    address: '江西财经大学（麦庐园校园）',
    destination:'双杠东大街',
    isLoading: true
  },
  onLoad() {
    //拿到窗口宽度
    var w = wx.getSystemInfoSync().windowWidth;
    this.setData({
      windowWidth: w
    })
    this.requestCart();
  },
  // 一个请求一个函数
  requestCart() {
    wx.request({
      url: 'http://localhost:3000/indexPage',
      success: (res) => {
        // console.log(this)
        // // console.log(res.data)
        // console.log(res);
        const navData = res.data.navData;
        const imgUrls = res.data.imgUrls;
        // const cost = res.data.data.cost
        // console.log(navData)
        this.setData({
          navData,
          imgUrls,
          // cost
        })
      }
    })
  },
  switchNav (event){
    const cart = event.currentTarget.dataset.name;
    const cur = event.currentTarget.dataset.current;
    let text = this.data.navData;
    var singleNavWidth = this.data.windowWidth / 6;
    this.setData({
      cart,
      currentTab: cur,
      navScrollLeft: (cur-1)*singleNavWidth
    })
  }
})