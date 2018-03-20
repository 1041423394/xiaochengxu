// pages/detail/detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
//   console.log(options.id)
    var that = this;
    wx.request({
        url: 'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=829&movieId='+ options.id,
      method: 'get',
      data: {},
      header: {
          'Accept': 'application/json'
      },
      success: function(res){
        // console.log(res.data.data.basic)
        var movie = res.data.data.basic
        that.setData({
            actors: movie.actors,
            img: movie.img,
            director: movie.director.name,
            average: movie.overallRating,
            story: movie.story,
            releaseDate: movie.releaseDate,
            name: movie.name
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})