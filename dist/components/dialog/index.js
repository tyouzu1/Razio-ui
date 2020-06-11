"use strict";function _slicedToArray(t,r){return _arrayWithHoles(t)||_iterableToArrayLimit(t,r)||_unsupportedIterableToArray(t,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,r):void 0}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function _iterableToArrayLimit(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return e}}function _arrayWithHoles(t){if(Array.isArray(t))return t}Component({properties:{overlay:{type:Boolean,value:!0},overlayClose:{type:Boolean,value:!1},transition:{type:String,value:"r-fadeIn r-fadeOut"},show:{type:Boolean},width:null},data:{transitionIn:null,transitionOut:null,closing:!1},ready:function(){var t=_slicedToArray((this.properties.transition||this.data.transition||"").split(" "),2),r=t[0],e=void 0===r?"":r,n=t[1],o=void 0===n?"":n;this.setData({transitionIn:e,transitionOut:o})},externalClasses:["custom-class"],methods:{$open:function(){this.setData({show:!0}),this.triggerEvent("open",{},{bubbles:!0})},$close:function(){this.setData({closing:!0})},$animationend:function(){this.data.closing&&(this.setData({closing:!1,show:!1}),this.triggerEvent("close",{},{bubbles:!0}))},$queryNodes:function(e){var n=this;return new Promise(function(r){var t=wx.createSelectorQuery().in(n);t.select(e).boundingClientRect(),t.exec(function(t){r(t)})})}}});