const behaviors = require('../behaviors/ripple-behaviors')
/**
 * TODO computed
 */
Component({
  behaviors: [behaviors],
  data: {
    computedClass: 'r-button-text shadow-none r-button-text-default',
    computedHoverClass: 'r-button-text-hover',
  }, 
  properties: {
    type: {
      type: String,
      value: 'default'
    },
    size: {
      type: String,
      value: 'default'
    },
    plain: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    formType: String,
    openType: String,
    hoverClass: String,
    hoverStopPropagation: {
      type: Boolean,
      value: false
    },
    hoverStartTime: {
      type: Number,
      value: 20
    },
    hoverStayTime: {
      type: Number,
      value: 70
    },
    appParameter: String,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: {
      type: Boolean,
      value: false
    },
    ariaLabel: String,
    lang: {
      type: String,
      value: 'en'
    },
    /**
     * material button
     */
    color: {
      type: String,
      value: 'default'
    },
    outlined: {
      type: Boolean,
      value: false
    },
    variant: {
      type: String,
      value: 'text'
    },
    disableElevation: {
      type: Boolean,
      value: false
    },
    arc: {
      type: Boolean,
      value: false
    },
    disableRipple: {
      type: Boolean,
      value: false
    },
    icon: {
      type: String,
    },
    rightIcon:{
      type: String
    },
    leftIcon:{
      type: String
    },
  },
  observers:{
    'variant,disableElevation,color':function(variant,disableElevation,color){
      //可以直接改为 css 类选择器  .contained .text .outlined
      switch(variant){
        case 'contained':
          this.setData({
            computedClass: disableElevation ? '' : 'shadow-3',
            computedHoverClass: `r-button-contained-${color||'default'}-hover ${disableElevation?'':'shadow-9'}`
          })
          break;
        case 'text':
          this.setData({
            computedClass: `r-button-text shadow-none r-button-text-${color||'default'}`,
            computedHoverClass: `r-button-text-${color||'default'}-hover`
          })
          break;
        case 'outlined':
          this.setData({
            computedClass: `r-button-outlined r-button-outlined-${color||'default'}  shadow-none`,
            computedHoverClass:  `r-button-outlined-${color||'default'}-hover`
          })
          break;
        default:
          break;
      }
    }
  },
  methods: {
    /**
     * 触发open-type的事件 参照 https://developers.weixin.qq.com/miniprogram/dev/component/button.html
     * @param  ( contact | share | getUserInfo | getPhoneNumber | launchApp | openSetting | feedback )
     *  */
    $triggerEvent(e) {
      if (!this.properties.disabled&&this.properties.openType) {
        const openType = this.properties.openType.toLocaleLowerCase()
        if(e.type==='error'&& openType === 'launchapp'){
          this.triggerEvent('error', e.detail, {})
        }else{
          this.triggerEvent(openType, e.detail, {})
        }
      }
    },
    $tap(e) {
      if((!this.properties.disableRipple)&&!this.properties.disabled){
        this.$handleAddRipple(e);
      }
    },
    $longPress(e) {
      if(!this.properties.disableRipple){
        this.$ripplelongPress(e);
      }
    },
    $touchEnd() {
      if(!this.properties.disableRipple){
        this.$handleRippleTouchEnd();
       }
    },
    $animationEnd() {
      this.$handleRippleAnimationEnd();
    },
  },
  externalClasses: ['custom-class', 'r-ripple-class', 'left-icon', 'right-icon'],
  relations: {}
})