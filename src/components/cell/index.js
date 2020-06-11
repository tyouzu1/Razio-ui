const behaviors = require('../behaviors/ripple-behaviors')
Component({
    options: {
        multipleSlots: true
    },
    behaviors: [behaviors],
    properties: {
        rightIcon:{
          type: String
        },
        leftIcon:{
          type: String
        },
    },
    relations: {
        '../cellGroup/index': {
            type: 'parent',
        }
    },
    externalClasses: ['custom-class','left-icon','right-icon'],
    methods: {
        $tap(e) {
            if(this.properties.ripple){
              this.$handleAddRipple(e);
            }
          },
          $longPress(e) {
            if(this.properties.ripple){
              this.$ripplelongPress(e);
            }
          },
          $touchEnd() {
            if(this.properties.ripple){
              this.$handleRippleTouchEnd();
             }
          },
          $animationEnd() {
            this.$handleRippleAnimationEnd();
          },
    }
});