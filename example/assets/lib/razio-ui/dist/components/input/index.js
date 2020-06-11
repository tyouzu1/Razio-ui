"use strict";var count=1,ruleObj={phone:{regexp:"^[1][0-9]{10}$",errorMessage:"请输入正确的手机号"}};Component({properties:{value:{type:String,observer:function(e){this.setData({value:e})}},type:{type:String,value:"text"},password:{type:Boolean,value:!1},placeholder:{type:String},placeholderStyle:{type:String},placeholderClass:{type:String,value:"input-placeholder"},disabled:{type:Boolean,value:!1},maxlength:{type:Number,value:140},cursorSpacing:{type:Number,value:0},autoFocus:{type:Boolean,value:!1},focus:{type:Boolean,value:!1},confirmType:{type:String,value:"done"},confirmHold:{type:Boolean,value:!1},cursor:{type:Number},selectionStart:{type:Number,value:-1},selectionEnd:{type:Number,value:-1},adjustPosition:{type:Boolean,value:!0},holdKeyboard:{type:Boolean,value:!1},label:{type:String},variant:{type:String,value:"standard"},name:{type:String,value:"input-"+count++},shrink:{type:Boolean,value:!1},rule:{type:String},errorMessage:{type:String},icon:{type:String},error:{type:Boolean},regexp:{type:RegExp}},data:{value:null},$regexp:null,$errorMessage:null,externalClasses:["custom-class","icon-class"],ready:function(){var e=this.properties,t=e.rule,r=e.regexp,a=e.errorMessage;if(r)this.$regexp=new RegExp(r),this.$errorMessage=a;else if(t){var s=ruleObj[t];if(!s)throw new Error("can't find this rule (".concat(t,")"));this.$regexp=new RegExp(s.regexp),this.$errorMessage=s.errorMessage}this.setData({errorMessage:this.$errorMessage})},methods:{$focus:function(e){this.properties.disabled||(this.setData({focus:!0}),this.triggerEvent("focus",e.detail))},$blur:function(e){this.properties.disabled||(this.setData({focus:!1}),this.triggerEvent("blur",e))},$input:function(e){if(!this.properties.disabled){var t=e.detail.value;this.$errorMessage&&this.$regexp?this.setData({error:!this.$regexp.test(t),errorMessage:this.$errorMessage,value:t}):this.setData({value:t}),this.triggerEvent("input",e.detail)}},$confirm:function(e){this.properties.disabled||this.triggerEvent("confirm",e.detail)},$keyboardheightchange:function(){this.properties.disabled||this.triggerEvent("keyboardheightchange",e.detail)}}});