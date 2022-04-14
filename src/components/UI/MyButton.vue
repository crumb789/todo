<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',
    data() {
        return{

        }
    },
}
</script>

<style lang="scss">
button{
    cursor: pointer;
    margin: 0 6px;
    background: #dddded;
    border: none;
    padding: 7px;
    color: #000;
    font-size: 16px;
    border-radius: 3px;
    transition: 0.2s all;
    &:hover{
        box-shadow: 3px 3px 3px #708090, -1px -1px 3px #e4e4e4;
    }
}
.create{
    background:  #3477DB;
    color: #fff;
}
.login{
    background: #008B8B;
    color: #fff;

}
.close{
    background: #10101e;
    color: #fff;
    // border: 1px solid #fff;
    height: 32px;

}
.enter{
    height: 32px;
    background:  #008040;
    border: 1px solid #000;
}
.exit{
    margin-left: 40px;
}
.registration{
    background: #3477DB;
    color: #fff;
}
</style>
