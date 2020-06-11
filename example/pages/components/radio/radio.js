//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    value: '',
    code: {
      label: `<r-radio label="label" checked value="label"></r-radio>`,
      slot: `<r-radio value="slot">slot</r-radio>`,
      disabled: `<r-radio disabled value="disabled">disabled</r-radio>`,
      reverse: `<r-radio reverse value="reverse">reverse</r-radio>`,
      group: `<r-radio-group bind:change="radioChange" value="{{value}}">
  <r-radio label="flex-start" value="flex-start"></r-radio>
  <r-radio label="center" value="center"></r-radio>
  <r-radio label="flex-end" value="flex-end"></r-radio>
  <r-radio label="stretch" value="stretch"></r-radio>
  <r-radio label="baseline" value="baseline"></r-radio>
</r-radio-group>`,
    }
  },
  radioChange(e){
    console.log(e.detail.value)
    this.setData({
      value: e.detail.value
    })
  },
})
