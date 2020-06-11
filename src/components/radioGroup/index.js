/**
 * 需要增加  默认值、和受控value
 */
Component({
  properties: {
    name: {
      type: String,
    },
    row: {
      type: Boolean,
      value: false
    }
  },
  data: {
    value: null
  },
  relations: {
    '../radio/index': {
      type: 'child',
    },
    // '../Form/-form': {
    //     type: 'parent',
    // }
  },
  externalClasses: ['coustom-class'],
  ready() {
    this.items = this.$getAllRadioNode();
    // form需要的name
    this.setData({
      name: this.properties.name || 'radio-group-' + new Date().getTime()
    });
    // 找出当前选中的，保存起来
    for (let i of this.items) {
      if (i.data.checked) {
        this.setData({
          value: i.data.value
        })
      }
    }
  },
  methods: {
    $getAllRadioNode() {
      return this.getRelationNodes('../radio/index');
    },
    $radioChange(e) {
      const select = this.items.filter(item=>item.data.checked&&item.data.value!==this.data.value)[0]
      // 如果有选中的。先取消其他的。然后选中，并且保存起来
      if(select){
        const other = this.items.filter(item=>item.data.value!==select.data.value)
        other.forEach(item=>{
          item.setData({
            checked: false,
          })
        })
        this.setData({
          value: select.data.value
        })
        this.triggerEvent(`change`, {
          value: select.data.value
        })
      }
    }
  }
});