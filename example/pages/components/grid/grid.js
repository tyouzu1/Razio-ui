//index.js
//获取应用实例
const app = getApp()
console.log(app)
Page({
  data: {
    container: true,
    directionList: [
      {
        value: 'row',
        name: 'row',
        checked: true,
      },
      {
        value: 'row-reverse',
        name: 'row-reverse',
      },
      {
        value: 'column',
        name: 'column',
      },
      {
        value: 'column-reverse',
        name: 'column-reverse',
      },
    ],
    justifyList: [
      {
        value: 'flex-start',
        name: 'flex-start',
      },
      {
        value: 'center',
        name: 'center',
        checked: true,
      },
      {
        value: 'flex-end',
        name: 'flex-end',
      },
      {
        value: 'space-between',
        name: 'space-between',
      },
      {
        value: 'space-around',
        name: 'space-around',
      },
      {
        value: 'space-evenly',
        name: 'space-evenly',
      },
    ],
    alignItemsList: [
      {
        value: 'flex-start',
        name: 'flex-start',
      },
      {
        value: 'center',
        name: 'center',
        checked: true,
      },
      {
        value: 'flex-end',
        name: 'flex-end',
      },
      {
        value: 'stretch',
        name: 'stretch',
      },
      {
        value: 'baseline',
        name: 'baseline',
      },
    ],
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
    radio1: false,
    code: {
      normal: `<r-grid custom-class="griddd" container="{{container}}" direction="{{direction}}" justify="{{justify}}" alignItems="{{alignItems}}">
  <view class="griddd-item-1">item 1</view>
  <view class="griddd-item-2">item 2</view>
  <view class="griddd-item-3">item 3</view>
</r-grid>`,
    },
  },
  handleChange(e) {
    this.setData({
      radio1: e.detail.value,
    })
    console.log(e.detail.value, this.data.radio1, 'handleChange')
  },
  radioChange1(e) {
    console.log(e.detail.value)
    this.setData({
      direction: e.detail.value
    })
  },
  radioChange2(e) {
    console.log(e.detail.value)
    this.setData({
      justify: e.detail.value
    })
  },
  radioChange3(e) {
    console.log(e.detail.value)
    this.setData({
      alignItems: e.detail.value
    })
  }
})
