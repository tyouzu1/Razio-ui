Component({
  behaviors: [],
  properties: {
    span: Number,
    offset: Number,
    gutter: Number
  },
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  methods: {},
  externalClasses: ['custom-class'],
  relations: {
    '../row/index': {
      type: 'ancestor'
    }
  },
})