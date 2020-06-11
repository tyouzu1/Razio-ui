import Dialog from '../../../assets/lib/razio-ui/dist/components/dialog/dialog'
Page({
    data: {
        code: {
            normal: `wxml:
<r-dialog id="dialog" bind:open="onOpen" bind:close="onClose" bind:opened="onOpened" bind:closed="onClosed">
    <view style="padding: 16px" class="text-body2">
        <view>远方除了遥远一无所有</view>
        <view>遥远的青稞地</view>
        <view>除了青稞一无所有</view>
        <view>更远的地方更加孤独</view>
    </view>
</r-dialog>
js:
import Dialog from '*/razio-ui/dist/components/dialog/dialog'
this.dialog = new Dialog("#dialog", {
    overlayClose: true
});
this.dialog.toggle();`,
            props: `wxml:
<r-dialog id="dialog2" show="{{show}}" bind:open="onOpen" bind:close="onClose">
    <view class="container">
        <view>远方除了遥远一无所有</view>
        <view>遥远的青稞地</view>
        <view>除了青稞一无所有</view>
        <view>更远的地方更加孤独</view>
        <view bind:tap="handleToggle">关闭</view>
    </view>
</r-dialog>`
        },
        show: false,
    },
    onReady() {
        this.dialog = new Dialog("#dialog", {
            overlayClose: true
        });
    },
    handleOpen() {
        this.dialog.toggle();
    },
    onOpen() {
        console.log("dialog open");
    },
    onClose() {
        console.log("dialog close");
    },
    handleToggle() {
        this.setData({
            show: !this.data.show
        })
    }
});
