Page({
    data: {
        code: {
            label: `<r-input label="standard"></r-input>
<r-input variant="filled" label="filled"></r-input>
<r-input variant="outlined" label="outlined"></r-input>
`,
            shrink: `<r-input shrink="{{true}}" custom-class="input-margin" label="standard"></r-input>
<r-input shrink="{{true}}" custom-class="input-margin" variant="filled" label="filled"></r-input>
<r-input shrink="{{true}}" custom-class="input-margin" variant="outlined" label="outlined"></r-input>`,
            disabled: `<r-input label="禁用" disabled="{{true}}"></r-input>`,
            regexp: "<r-input label='邮箱' error-message='邮箱号格式错误' regexp='^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'></r-input>",
            rule: `<r-input label="手机号" rule="phone"></r-input>`,
            icon: `<r-input label="icon" icon="face"></r-input>`,
            placeholder: `<r-input placeholder="没有浮动标签"></r-input>`,
            labelWithPlaceholder: ` <r-input label="label" placeholder="placeholder"></r-input>`,

        },
    },
    onLoad: function () {
    },
    onReady() {
    }
});
