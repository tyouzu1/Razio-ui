let count = 1;
const ruleObj = {
    phone: {
        regexp: '^[1][0-9]{10}$',
        errorMessage: '请输入正确的手机号'
    },
}
Component({
    properties: {
        value: {
            type: String,
            observer: function (newVal, oldVal) {
                this.setData({
                    value: newVal
                })
            }
        },
        type: {
            type: String,
            value: 'text'
        },
        password: {
            type: Boolean,
            value: false
        },
        placeholder: {
            type: String
        },
        placeholderStyle: {
            type: String
        },
        placeholderClass: {
            type: String,
            value: "input-placeholder"
        },
        disabled: {
            type: Boolean,
            value: false
        },
        maxlength: {
            type: Number,
            value: 140
        },
        cursorSpacing: {
            type: Number,
            value: 0
        },
        autoFocus: {
            type: Boolean,
            value: false
        },
        focus: {
            type: Boolean,
            value: false
        },
        confirmType: {
            type: String,
            value: "done"
        },
        confirmHold: {
            type: Boolean,
            value: false
        },
        cursor: {
            type: Number,
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        selectionEnd: {
            type: Number,
            value: -1
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        holdKeyboard: {
            type: Boolean,
            value: false
        },
        label: {
            type: String
        },
        variant: {
            type: String,
            value: "standard"
            // 'filled'| 'outlined'| 'standard'
        },
        name: { //form 用的
            type: String,
            value: 'input-' + (count++)
        },
        shrink: {
            type: Boolean,
            value: false
        },
        rule: {
            type: String
        },
        errorMessage: {
            type: String
        },
        icon: {
            type: String
        },
        error: {
            type: Boolean
        },
        regexp: {
            type: RegExp
        }
    },
    data: {
        value: null,
    },
    $regexp: null,
    $errorMessage: null,
    externalClasses: ['custom-class', 'icon-class'],
    ready() {
        const { rule, regexp, errorMessage } = this.properties;
        if (regexp) {
            this.$regexp = new RegExp(regexp)
            this.$errorMessage = errorMessage
        } else if (rule) {
            const currentRegexp = ruleObj[rule];
            if (!currentRegexp) {
                throw new Error(`can't find this rule (${rule})`);
            }
            this.$regexp = new RegExp(currentRegexp.regexp)
            this.$errorMessage = currentRegexp.errorMessage
        }
        this.setData({
            errorMessage: this.$errorMessage,
        });
    },
    methods: {
        $focus(e) {
            if (!this.properties.disabled) {
                this.setData({
                    focus: true
                });
                this.triggerEvent('focus', e.detail)
            }
        },
        $blur(e) {
            if (!this.properties.disabled) {
                this.setData({
                    focus: false
                });
                this.triggerEvent('blur', e)
            }
        },
        $input(e) {
            if (this.properties.disabled) {
                return
            }
            const value = e.detail.value;
            if (this.$errorMessage && this.$regexp) {
                this.setData({
                    error: !this.$regexp.test(value),
                    errorMessage: this.$errorMessage,
                    value: value
                });
            } else {
                this.setData({
                    value: value
                });
            }
            this.triggerEvent('input', e.detail)
        },
        $confirm(e) {
            if (!this.properties.disabled) {
                this.triggerEvent('confirm', e.detail)
            }
        },
        $keyboardheightchange() {
            if (!this.properties.disabled) {
                this.triggerEvent('keyboardheightchange', e.detail)
            }
        }
    },
});