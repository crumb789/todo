<template>
    <div class="input-child">
        <form @submit.prevent="addChild">
            <input v-model="child">
        </form>
        
    </div>
</template>

<script>
export default {
    name:'create-child-task',
    props: {
        selectedTask: {
            type: Object,
            requared: true
        },
    },
    data() {
        return{
            child: null,
            a: undefined
        }
    },
    methods: {
        addChild(){
            // let  newchild = [Object]
            let id 
            
            (this.selectedTask.child) ? id = this.selectedTask.child.length  : 
                id = 0
                const newchild = {
                    id,
                    task: this.child
                }
                // newchild.push(Object)
                this.$emit('submit-child', newchild)
                this.child = null

// this.$emit('push-child-arr', newchild)
        }
    }
}
</script>

