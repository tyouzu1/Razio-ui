Page({
      data: {
            code: {
                  group: `<r-cell-group bind:tap="handleGo">
      <r-cell right-icon="keyboard_arrow_right" data-url="/pages/components/grid/grid">
            grid
      </r-cell>
      <r-cell right-icon="keyboard_arrow_right" data-url="/pages/components/radio/radio">
            radio
      </r-cell>
      <r-cell right-icon="keyboard_arrow_right" data-url="/pages/components/button/button">
            button
      </r-cell>
</r-cell-group>`,
                  icon: `<r-cell right-icon="keyboard_arrow_right">右边有icon</r-cell>`,
                  cell: `<r-cell >cell</r-cell>`,
                  slot: `<r-cell right-icon="keyboard_arrow_right">
      <view>left</view>
      <view slot="right">right</view>
</r-cell>`
            },
      },
      handleGo(e) {
            console.log(e)
            wx.navigateTo({
                  url: e.target.dataset.url
            })
      }
})