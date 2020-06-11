Component({
  behaviors: [],
  properties: {
    alignContent: {
      type: String,
      value: 'stretch'
    },
    alignItems: {
      type: String,
      value: 'stretch'
    },
    container: {
      type: Boolean,
      value: false
    },    
    direction: {
      type: String,
      value: 'row'
    },
    justify: {
      type: String,
      value: 'flex-start'
    },
    wrap: {
      type: String,
      value: 'wrap'
    },
    spacing: {
      type: Number,
      value: 0
    },
  },
  methods: {},
  externalClasses: ['custom-class'],
  relations: {}
})