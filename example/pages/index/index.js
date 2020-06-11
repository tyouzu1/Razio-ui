//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    code:{
     
    }
  },
  handleGo(e){
    console.log(e)
    wx.navigateTo({
      url: e.target.dataset.url
    })
  }
})
