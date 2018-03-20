// pages/myindex/myindex.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    loadingHidden: false
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({ title: '拼命加载中...' })
    var that = this;           
  

    //swiper
    wx.request({
        url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=829',   
      method: 'get',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) { 
        //   console.log(res.data)
                     
        var img = res.data.movies.map(item => {
            // console.log(item.movieId)
           return item.img
        })
        // console.log(res.data)
        that.setData({
          imgUrls:img.slice(0, 5)
        }) 
        // wx.hideLoading() 
      }
      
    })

    //hot
    wx.request({
        url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=829',
      method: 'get',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        //   console.log(res.data)
        // console.log(res.data.movies)
          
        that.setData({
          movies: res.data.movies,
          type: "/PageSubArea/HotPlayMovies.api"
        })
        
        
      }
    })
   
    //coming
    wx.request({
        url: 'https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=829',
        method: 'get',
        data: {},
        header: {
            'Accept': 'application/json'
        },
        success: function (res) {
            // console.log(res.data)
            
            that.setData({
                comingmovies: res.data.attention,
                type1: "/Movie/MovieComingNew.api"
            })
            
        }
    })

    //online
    wx.request({
        url: 'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=829',
        method: 'get',
        data: {},
        header: {
            'Accept': 'application/json'
        },
        success: function (res) {
            // console.log(res.data)
            that.setData({
                onlinemovies: res.data.ms,
                type2: "/Showtime/LocationMovies.api"
            })
            setTimeout(function () {
                that.setData({
                    loadingHidden: true
                })
            }, 1500)

        }
    })

    wx.getSetting({
        success(res) {
            // that.getLocation()
            if (!res.authSetting['scope.userLocation']) {
                wx.authorize({
                    scope: 'scope.userLocation',
                    success() {
                        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                        wx.getLocation()
                        console.log(1)
                    }
                })
            }
        }
    })
     
  },

  

//   getLocation: function () {
//       var page = this
//       wx.getLocation({
//           type: 'wgs84',    
//           success: function (res) {
//               // success    
//               var longitude = res.longitude
//               var latitude = res.latitude              
//               return page.loadCity(longitude, latitude);
//           }
//       })
//   },

//   loadCity: function (longitude, latitude) {
//       var page = this
//       wx.request({
//           url:'https://api.map.baidu.com/geocoder/v2/?ak=4zxaFL8hbMldwkjIcADVYUyosBSVkLPe&location='+ latitude + ',' + longitude + '&output=json',
//           method: "get",
//           data: {          
//           },
//           header: {
//               'Content-Type': 'application/json'
//           },
//           success: function (res) {
//               // success    
              
//               var city = res.data.result.addressComponent.city.slice(0, 2);
              
//               wx.request({
//                   url: 'https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api',
//                   method: 'get',
//                   data: {},
//                   success: function (res) {
//                       console.log(res.data.p)
//                       // console.log(city)
                    
//                       //   console.log(city)
//                       var cityId = res.data.p.map(item => {
//                           //   console.log(item.id)
//                           if (city === item.n) {
//                               return item.id
//                           }
//                       })
//                       var cId = cityId.filter(item => {
//                           if (item != "undefined") {
//                               return item
//                           }
//                       })
//                       console.log(cId)
//                   }
//               })
//             //   return currentCity
//                 // return page.getMovie(city);
//             //   console.log(city)
//             //   return city;                          
//             //   page.setData({ currentCity: city });
//           },
//           fail: function () {
//               page.setData({ currentCity: "获取定位失败" });
//           },
        
//       })
//     //   return 'aa';
//   },

//   getMovie: function () {
//       var that = this;
     
//   },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    console.log('加载完成')
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