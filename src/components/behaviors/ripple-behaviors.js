/**
 * background transparent  时候，会溢出border-raduis边界
 */
module.exports = Behavior({
  properties: {
    ripple: {
      type: Boolean,
      value: true
    }
  },
  data: {
    rippleData:{
      list: [],
      selector: '.ripple',
      count: 0,
      timer: null,
      longPress: false,
    }
  },
  methods: {
    /**
     * 获取 view 节点信息
     * @param event
     */
    $createSelectorQuery(e) {
      return new Promise((resolve, reject) => {
        this.createSelectorQuery().select(e).fields({
          size: true, // 是否返回节点尺寸（width height）	
          rect: true, // 是否返回节点布局位置（left right top bottom）	
          computedStyle: ['backgroundColor'], // 指定样式名列表，返回节点对应样式名的当前值
        }).selectViewport().scrollOffset().exec((res)=>{
          resolve(res)
        })
      })
    },
    $handleAddRipple(e, hold) {
      this.$createSelectorQuery(this.data.rippleData.selector).then(res=>{
        const { width, height, left, top, backgroundColor = 'rgba(255,255,255,1)'} = res[0]
        const { scrollLeft, scrollTop } = res[1]
        const { x:tapX, y:tapY } = e.detail // tap点 坐标
        const widthInt = ~~ width //取整
        const heightInt = ~~ width //取整
        const regexp = /(\b[0-9]{1,3}\b)/g;
        const [r,g,b,o=1] = backgroundColor.match(regexp); // 取出颜色
        const diameter = widthInt > heightInt ? widthInt : heightInt; // 圆直径
        const radius = diameter / 2 // 半径
        const rippleX = (tapX - (left + scrollLeft)) - radius;
        const rippleY = (tapY - (top + scrollTop)) - radius;
        this.setData({
          'rippleData.longPress': hold || false,
          'rippleData.list': [...this.data.rippleData.list,{
            width: diameter,
            height: diameter,
            left: rippleX,
            top: rippleY,
            backgroundColor:this.$isLight(r,g,b,o)?'rgb(0,0,0)':'rgb(255,255,255)', //可以改为根据颜色 调整相应色值
            start: true,
            hold: hold || false
          }]
        })
        // hold&&wx.vibrateShort()// 震动
      })
    },
    $handleRippleAnimationEnd() {
      this.setData({
        'rippleData.count':  this.data.rippleData.count+=1
      })
      // 定期去除已经生成的多余view
      if (this.data.rippleData.timer) {
        clearTimeout(this.data.rippleData.timer)
      }
      const timer = setTimeout(()=>{
        if(this.data.rippleData.longPress){
          return
        }
        clearTimeout(this.data.rippleData.timer)
        this.setData({
          'rippleData.timer': null,
          'rippleData.count': 0,
          'rippleData.list': this.data.rippleData.list.slice(this.data.rippleData.count)
        })
      }, 300)
      this.setData({
        'rippleData.timer': timer,
      })
    },
    $ripplelongPress(e) {
      this.$handleAddRipple(e, true);
    },
    $handleRippleTouchEnd() {
      // 存在hold时  TouchEnd 清除一切
      const list = this.data.rippleData.list
      const holdItem = list[list.length-1]
      if(holdItem&&holdItem.hold){
        // 先触发 hold TouchEnd 动画
        this.setData({
          'rippleData.list': [{...holdItem,start:false}],
        });
        // 然后清空
        setTimeout(() => {
          clearTimeout(this.data.rippleData.timer)
          this.setData({
            'rippleData.longPress': false,
            'rippleData.list': [],
            'rippleData.timer': null,
            'rippleData.count': 0,
          });
        }, 300);
      }
    },
    $isLight(r, g, b, a) {
      return parseInt(r) * 0.299 + parseInt(g) * 0.578 + parseInt(b) * 0.114 >= 192 * a;
    }
  }
});