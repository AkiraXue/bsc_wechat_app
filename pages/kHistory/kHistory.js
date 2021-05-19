// pages/kHistory/kHistory.js
Page({
  data: {
    bgImgSrc: '../../img/knowledge/k_history_bg.png',
    toggleArrow: '../../img/knowledge/arrow_down.png',
    toggleUpArrow: '../../img/knowledge/arrow_up.png',
    toggleList: [0, 0, 0]
  },
  onToggle(e) {
    var index = e.currentTarget.dataset.index;
    var status = this.data.toggleList[index];
    this.setData({
      ['toggleList['+ index +']']: status == 0 ? 1 : 0
    });
  }
})