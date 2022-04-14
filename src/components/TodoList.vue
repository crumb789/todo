<template>
    <div class="list">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'todo-list',
    data() {
        return{

        }
    }    
}
</script>


<style lang="scss">
.list{
    margin-top: 50px;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 1px 1px 0px #000, 0px -1px 6px #0d765d;
    
}

</style>