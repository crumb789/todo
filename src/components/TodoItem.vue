<template>
    <div class="item" 
        v-if="item.task === selectedTask.id"
        :class="{done: item.done === true}"
        @mouseover="remove = true"
        @mouseleave="remove = false">

        <div class="check" 
            @click="doneCheck"
            :class="{checkdone: item.done === true}">
        </div>
                {{item.todo}}
        <div class="remove"
            v-if="remove"
            @click="$emit('remove-todo', item)"
             title="Удалить">
            
        </div>
    </div>
</template>


<script>
export default {
    name: 'todo-item',
    props: {
        item: {
            type: Object,
            requared: true
        },
        selectedTask: {
            type: Object
        }
     },
    data() {
        return{
            done: false,
            remove: false
        }
    },
    methods:{
        doneCheck(){
            this.$emit('done-submit', this.item)
        }
    },

}
</script>

<style lang="scss">
.item{
    position: relative;
    border: 1px solid #0b8b5c61;
    border-radius: 2px;
    // width: 450px;
    color: #fff;
    margin: 15px;
    min-height: 30px;
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 15px;
    padding: 5px 15px ;
    background-color: #0e655d7d;
    text-shadow: 6px 4px 3px #123d60;
    // animation: createTodo  1s ease 1;
}

// @keyframes createTodo{
//     1%{
//         width: 0px;
//     }
//     100%{
//         min-width: 450px;
//     }
// }

.check{
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #123d60;
    border-radius: 100%;
    left: -28px;
    cursor: pointer;
}
.checkdone{
    position: absolute;
     &::before{
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background: #0b8a5c;
        transform: rotate(310deg);
        left: 30%;
        top: 22%;
    }
    &::after{
        content: '';
        position: absolute;
        width: 14px;
        height: 2px;
        background: #0b8a5c;
        transform: rotate(45deg);
        left: -15%;
        top: 37%;
    }
}

.done{
    text-decoration: line-through #fff;
    color: #0b8a5c;
}
.remove{
    position: absolute;
    right: 5px;
    width: 25px;
    height: 5px;
    background: #123d60;
    cursor: pointer;
}
</style>