<template>
    <div class="input-task">
        <form @submit.prevent="onSubmit">
            <input v-model="task">
            <my-button class="task-btn" :disabled="!task"> <!-- ////add//// -->
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10l5 5 5-5H7z"/></svg>
            </my-button>
            
        </form>
        <my-button class="input-close" @click="$emit('create-task-close')">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        </my-button>
        <!-- <div class="input-close" @click="$emit('create-task-close')">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        </div> -->
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
// import MyButton from './UI/MyButton.vue'
export default {
  components: { MyButton },
  name:'enter-form',
    props:{
        todoArray: {
            type: Array
        },
        listTask: {
            type: Array
        }
    },
    data() {
        return{
           task: null,
           id: null,

        }
    },
    methods:{
        onSubmit(){
            
            const newTask = {
                    task: this.task,
                    id: this.listTask.length,
                    child : []
                }
            this.$emit('submit-newtask', newTask)
            this.task = null
            this.id = null
        
        },
    },
    
}
</script>

<style lang="scss" >
.input-task{
    display: flex;
    height: 36px;
    form{
        display: flex;
    }
}
.task-btn{
    width: 30px;
    height: 30px;
    padding: 0;
    background: #0b8a5c;
    svg{
        width: 30px;
        height: 30px;
    }
    &:hover{
        box-shadow: 2px 2px 3px #142a41, -1px -1px 3px #10443179;
    }
}
.input-close{
    cursor: pointer;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    background: #0e655d7d;
    svg{
        width: 20px;
        height: 30px;
        fill: #fff;
    }
    &:hover{
        box-shadow: 2px 2px 3px #142a41, -1px -1px 3px #10443179;
    }
}
</style>