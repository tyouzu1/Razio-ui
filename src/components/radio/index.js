Component({
  properties: {
    checked: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    label: {
      type: String,
    },
    value: {
      type: null
    },
    color: {
      type: String,
      value: '#FF0050'
    },
    reverse: {
      type: Boolean,
      value: false
    },
    ripple: {
      type: Boolean,
      value: true
    }
  },
  data: {
    checked: false,
    showRipple: false,
    disabled: false,
    value: null,
  },
  ready() {
    this.setData({
      checked: this.properties.checked,
      disabled: this.properties.disabled,
      value: this.properties.value
    });
  },
  relations: {
    '../radioGroup/index': {
      type: 'parent',
    }
  },
  externalClasses: ['custom-class'],
  methods: {
    $tap() {
      this.setData({
        showRipple: true,
      });
    },
    $touchEnd() {
      this.setData({
        checked: true,
        showRipple: false,
      })
      this.triggerEvent(`radiochange`, {
        value: true
      }, {
        bubbles: true,
        composed: true
      });
    },
    $handleAnimationend() {
      setTimeout(()=>{
        this.setData({
          showRipple: false,
        })
      })
    }
  }
});