Component({
    properties: {
        // 绑定未冒泡的事件手动触发到上一层
    },
    data:{
        value:[]
    },
    relations: {
        '../cell/index': {
            type: 'child', // 关联的目标节点应为子节点
        }
    },
    externalClasses: ['custom-class'],
    ready(){
        this.items = this.$getAllCheckboxs();
    },
    methods: {
        $getAllCheckboxs: function(){
            // 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
            return this.getRelationNodes('../cell/index');
        }
    },
});