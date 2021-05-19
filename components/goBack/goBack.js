const app = getApp();
Component({
  properties: {
    imgsrc: { 
      type: String
    }
  },
  data: {
    haveBack: true, // 是否有返回按钮，true 有 false 没有 若从分享页进入则没有返回按钮
    navbarBtn: { // 胶囊位置信息
      height: 0,
      top: 0,
      right: 0
    }
  },
  attached() {
    let statusBarHeight = app.globalData.systeminfo.statusBarHeight // 状态栏高度
    let headerPosi = app.globalData.headerBtnPosi // 胶囊位置信息
    let btnPosi = { // 胶囊实际位置，坐标信息不是左上角原点
      height: headerPosi.height,
      top: statusBarHeight + 2, // 状态栏高度
      right: app.globalData.systeminfo.screenWidth - headerPosi.right // 屏幕宽度 - 胶囊right
    }
    let haveBack;
    if (getCurrentPages().length === 1) { // 当只有一个页面时，并且是从分享页进入
      haveBack = false;
    } else {
      haveBack = true;
    }
    this.setData({
      haveBack: haveBack, // 获取是否是通过分享进入的小程序
      navbarBtn: btnPosi
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _goBack() {
      if (this.data.haveBack) {
        wx.navigateBack({
          delta: 1
        });
      } else {
        wx.navigateTo({
          url: '/pages/index/index',
        });
      }
    }
  }
})
