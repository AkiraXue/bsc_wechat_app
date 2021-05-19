// pages/toHeader/toHeader.js
Page({
  data: {
    swiperList: [
      { img: '../../img/topUp/1@2x.png', title: '冲顶答题', link: '../kOverview/kOverview'}
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    imgheights: [],
    current: 0,
    rankList: [
      { portrait: '../../img/topUp/portrait@2x.png', title: 'Jo-Vaughn Scott', subTitle: '+5k'},
      { portrait: '../../img/topUp/portrait@2x.png', title: 'Jo-Vaughn Scott', subTitle: '+5k'},
      { portrait: '../../img/topUp/portrait@2x.png', title: 'Jo-Vaughn Scott', subTitle: '+5k'}
    ]
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