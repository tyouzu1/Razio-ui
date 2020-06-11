Page({
  data: {
    code: {
      contained: `<r-button variant="contained" color="default">default</r-button>
<r-button variant="contained" color="primary">primary</r-button>
<r-button variant="contained" color="secondary">secondary</r-button>
<r-button variant="contained" disabled>disabled</r-button>`,
      disableElevation: `<r-button variant="contained" disableElevation >default</r-button>
<r-button variant="contained" disableElevation color="primary">primary</r-button>
<r-button variant="contained" disableElevation color="secondary">secondary</r-button>`,
      text: `<r-button variant="text" >default</r-button>
<r-button variant="text" color="primary">primary</r-button>
<r-button variant="text" color="secondary">secondary</r-button>`,
      arc: `<r-button arc variant="contained" >Button</r-button>
<r-button arc variant="outlined" >Button</r-button>
<r-button arc variant="text" >Button</r-button>`,
outlined: `<r-button variant="outlined" >default</r-button>
<r-button variant="outlined" color="primary">primary</r-button>
<r-button variant="outlined" color="secondary">secondary</r-button>`,
size: `<view class="demo-content">
<r-button size="small" variant="text" color="primary">small</r-button>
<r-button variant="text" color="primary">medium</r-button>
<r-button size="large" variant="text" color="primary">large</r-button>
</view>
<view class="demo-content">
<r-button size="small" variant="outlined" color="primary">small</r-button>
<r-button variant="outlined" color="primary">medium</r-button>
<r-button size="large" variant="outlined" color="primary">large</r-button>
</view>
<view class="demo-content">
<r-button size="small" variant="contained" color="primary">small</r-button>
<r-button variant="contained" color="primary">medium</r-button>
<r-button size="large" variant="contained" color="primary">large</r-button>
</view>`,
icon:`<view class="demo-content">
<r-button size="small" icon="face" variant="contained" ></r-button>
<r-button icon="face" variant="contained" ></r-button>
<r-button size="large" icon="face" variant="contained" ></r-button>
</view>
<view class="demo-content">
<r-button size="small" left-icon="face" variant="contained" >face</r-button>
<r-button left-icon="face" variant="contained" >face</r-button>
<r-button size="large" left-icon="face" variant="contained" >face</r-button>
</view>
<view class="demo-content">
<r-button size="small" right-icon="face" variant="contained" >face</r-button>
<r-button right-icon="face" variant="contained" >face</r-button>
<r-button size="large" right-icon="face" variant="contained" >face</r-button>
</view>`
    },
  },
})