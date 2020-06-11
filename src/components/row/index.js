Component({
  behaviors: [],
  properties: {
    gutter: Number
  },
  methods: {},
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  relations: {
    '../col/index': {
      type: 'descendant'
    }
  },
})