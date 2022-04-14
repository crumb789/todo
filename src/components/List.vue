<template>
    <div class="task">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'list-task',
    data() {
        return{

        }
    },
}
</script>


<style lang="scss" scoped>
.task{
    margin: 50px 0 0;
    padding: 50px 20px 20px 20px;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 1px 1px 0 #000;
    height: 500px;
    overflow: auto;
    // &:hover{
    //     overflow: scroll;
    // }
}
</style>