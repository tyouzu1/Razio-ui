"use strict";Component({properties:{checked:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},label:{type:String},value:{type:null},color:{type:String,value:"#FF0050"},reverse:{type:Boolean,value:!1},ripple:{type:Boolean,value:!0}},data:{checked:!1,showRipple:!1,disabled:!1,value:null},ready:function(){this.setData({checked:this.properties.checked,disabled:this.properties.disabled,value:this.properties.value})},relations:{"../radioGroup/index":{type:"parent"}},externalClasses:["custom-class"],methods:{$tap:function(){this.setData({showRipple:!0})},$touchEnd:function(){this.setData({checked:!0,showRipple:!1}),this.triggerEvent("radiochange",{value:!0},{bubbles:!0,composed:!0})},$handleAnimationend:function(){var e=this;setTimeout(function(){e.setData({showRipple:!1})})}}});