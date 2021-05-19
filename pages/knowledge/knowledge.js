// pages/knowledge/knowledge.js
Page({
  data: {
    swiperList: [
      { img: '../../img/knowledge/k_overview_bg.png', title: '企业概览', link: '../kOverview/kOverview'},
      { img: '../../img/knowledge/k_history_bg.png', title: '发展历程', link: '../kHistory/kHistory'},
      { img: '../../img/knowledge/k_medal_bg.png', title: '荣誉奖项', link: '../kMedal/kMedal'},
      { img: '../../img/knowledge/k_product_bg.png', title: '产品简介', link: '../kProduct/kProduct'},
      { img: '../../img/knowledge/k_culture_bg.png', title: '企业文化', link: '../kCulture/kCulture'}
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    imgheights: [],
    current: 0
  },
  imageLoad: function (e) {//获取图片真实宽度  
    var imgwidth = e.detail.width,
        imgheight = e.detail.height,
        ratio = imgwidth / imgheight;//宽高比
    console.log(imgwidth, imgheight)
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    console.log(imgheights);
    this.setData({
      imgheights: imgheights
    })
  },
  bindchange: function (e) {
    // console.log(e.detail.current)
    this.setData({ 
      current: e.detail.current 
    })
  },
  toLinkPage() {
    wx.navigateTo({
      url: '../kLink/kLink'
    });
  },
  toPage(e) {
    var url = e.target.dataset.link;
    if (url) {
      wx.navigateTo({
        url: url
      });
    }
  }
})