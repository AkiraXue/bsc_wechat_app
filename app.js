// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    var that = this;
    this.globalData.headerBtnPosi = wx.getMenuButtonBoundingClientRect()
    wx.getSystemInfo({ // iphonex底部适配
      success: res => {
        that.globalData.systeminfo = res
      }
    })
  },
  globalData: {
    userInfo: null,
    systeminfo: null
  },
  
})
