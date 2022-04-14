<template>
    <div class="task-item" 
        @click="$emit('choice-task', item)" 
        :class="{ active: selectedTask === item }"
        @mouseover="removeTask = true"
        @mouseleave="removeTask = false">       
            {{item.task}}
            <div class="task-itemchild" 
                v-if="selectedTask && selectedTask.child.length != 0 && selectedTask === item" 
                :class="{ active: selectedTask.child === item.child }">
                {{item.child}}
            </div>
            
            <div class="box" v-if="removeTask"
                    @click="quest = true"
                    @mouseover=" removeTaskChange = true"
                    @mouseleave="removeTaskChange = false">
                <div class="remove-task" 
                    :class="{activeRemove: removeTaskChange === true}"
                    
                >

                </div>
            </div>

            <alert v-if="quest" 
                @qust-close="quest = false"
                @qust-delete="questDelete(item)">
                
            </alert>
            
            <slot></slot>
    </div>
</template>

<script>

import Alert from '@/components/UI/Alert.vue'

export default {
  components: { Alert},
    name:'task-item',
    props: {
        item:{
            type: Object,
            requared: true
        },
        selectedTask: {
            type: Object,
            requared: true
        }
    },
    data(){
        return{
           child: null,
           id: null,
           removeTask: false,
           removeTaskChange: false,
           quest: false
        }
    },
    methods: {
        questDelete(item){
            console.log('fdsfsdfs')
            this.$emit('remove-task',item)
            this.quest = false
        }
    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>
.task-item{
    position: relative;
    margin-top: 15px;
    cursor: pointer;
    text-align: left;
    text-transform: uppercase;
    padding-left: 20px;

}
.active{
    color: #0b8a5c;
    padding-left: 40px;
    text-shadow: 2px 1px 1px #123d60;
}
// .input-child{

// }
.task-itemchild{
    padding-left: 25px;
    margin-top: 8px;
}
.box{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0%;
    left: 0px;
}
.remove-task{
    position: absolute;
    height: 2px;
    width: 14px;
    background: #fff;
    top: 40%;
    left: 0px;
}
.activeRemove{
    transform: rotateZ(45deg);
    transition: 0.7s all;
    &:before{
        content: '';
        position: absolute;
        height: 2px;
        width: 14px;
        background: #fff;
        transform: rotateZ(-90deg);
        transition: 0.7s all;
    }
}
</style>
