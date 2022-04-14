<template>
    <div class="input-todo">

        <my-button @click="showForm = true" title="Добавить заметку"
            class="todo-btn"
            v-if="!showForm">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z"/><path d="M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z"/><rect height="2" width="8" x="7" y="9"/><polygon points="7,12 7,14 15,14 15,12 12,12"/><rect height="2" width="8" x="7" y="15"/></g></g></svg>
                
                <span>Добавь заметку</span>
        </my-button>

        <form @submit.prevent="onSubmit" v-if="showForm">
            <input v-model="todo">
            <my-button class="task-btn" :disabled="!todo">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 10l5 5 5-5H7z"/></svg>
            </my-button>
        </form>
        <my-button class="input-close" 
            @click="showForm = false" 
            v-if="showForm">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        </my-button>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
export default {
  components: { MyButton },
  name:'enter-form',
    props:{
        selectedTask: {
            type: Object,
            requared: true
        },
        todoArray:{
            type: Array
        }
    },
    data() {
        return{
           todo: null,
           id: null,
           showForm: false
        }
    },
    methods:{
        onSubmit(){
            const newPost = {
                    todo: this.todo,
                    id: this.todoArray.length + 1,
                    task: this.selectedTask.id,
                    done: false
                }
            this.$emit('submit-newTodo', newPost)
            this.todo = null
        
        }
    }
}
</script>

<style lang="scss" >
input{
    height: 30px;
    color: #000;
}

form{
    display: flex;
}
.input-todo{
    display: flex;
    height: 30px;
}
.todo-btn{
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    column-gap: 15px;
    &:hover{
            box-shadow: none;
    }
    svg{
        fill: #fff;
        height: 30px;
        
    }
}
</style>