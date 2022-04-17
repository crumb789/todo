<template>
    <div class="task" 
        :class="{menuActive: menuShow}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'list-task',
    props: {
        menuShow:{
            type: Boolean,
            required: true
        }
    },
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
.menuActive{
    display: block;
    position: fixed;
    z-index: 20;
    background: #11405f;
    border: 2px solid #000;
}
</style>