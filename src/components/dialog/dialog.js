// let DialogTaskQueue = [];
function getContext() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}
const DefaultProps = {
    show: false,
    overlay: true,
    overlayClose: true,
    transition: 'r-fadeIn r-fadeOut',
    // title: '',
    // width: null,
    // asyncClose: false,
    // confirmButtonText: '确认',
    // cancelButtonText: '取消',
    // showConfirmButton: true,
    // showCancelButton: false,
};
class Dialog {
    constructor(selector = '#r-dialog', options = DefaultProps) {
        this.selector = selector;
        if (this.selector) {
            const context = options.content || getContext()
            this.dialog = context.selectComponent(this.selector);
            delete options.content
            if (this.dialog) {
                this.dialog.setData({ ...options });
                return this;
            } else {
                throw new Error("can't find dom " + this.selector);
            }
        }
    }
    open() {
        this.dialog.$open();
        return this;
    }
    close() {
        this.dialog.$close();
        return this;
    }
    toggle() {
        return this.dialog.data.show ? this.close() : this.open();
    }
}
module.exports =  Dialog;