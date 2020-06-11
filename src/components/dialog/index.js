Component({
    properties: {
        overlay: {
            type: Boolean,
            value: true
        },
        overlayClose: {
            type: Boolean,
            value: false
        },
        transition: {
            type: String,
            value: 'r-fadeIn r-fadeOut'
        },
        show: {
            type: Boolean,
        },
        width: null,
        // title: String,
        // asyncClose: Boolean,
        // confirmButtonText: {
        //     type: String,
        //     value: '确认',
        // },
        // cancelButtonText: {
        //     type: String,
        //     value: '取消',
        // },
        // confirmButtonStyle: {
        //     type: String,
        //     value: '',
        // },
        // cancelButtonStyle: {
        //     type: String,
        //     value: '',
        // },
        // showConfirmButton: {
        //     type: Boolean,
        //     value: true,
        // },
        // showCancelButton: {
        //     type: Boolean,
        //     value: false,
        // },
    },
    data: {
        transitionIn: null,
        transitionOut: null,
        closing: false,
    },
    ready() {
        const transition = this.properties.transition || this.data.transition || ''
        const [transitionIn = '', transitionOut = ''] = transition.split(' ');
        this.setData({
            transitionIn: transitionIn,
            transitionOut: transitionOut
        })
    },
    externalClasses: ['custom-class'],
    methods: {
        $open() {
            this.setData({
                show: true,
            });
            this.triggerEvent('open', {}, { bubbles: true });
        },
        $close(e) {
            this.setData({
                closing: true,
            });
        },
        $animationend(e) {
            if (this.data.closing) {
                this.setData({
                    closing: false,
                    show: false
                });
                this.triggerEvent('close', {}, { bubbles: true });
            }
        },
        $queryNodes: function (e) {
            return new Promise(resolve => {
                const query = wx.createSelectorQuery().in(this);
                query.select(e).boundingClientRect();
                query.exec(function (res) {
                    resolve(res);
                });
            })
        },
    }
});