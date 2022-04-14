<template>
    <div class="modal">
        <div class="alert">
            <div class="quest">
                {{question}}
            </div>
            <div class="alert-btn">
                <my-button class="btn-yes" @click="$emit('qust-delete')">
                    Да :)
                </my-button>
                <my-button class="btn-no" @click="$emit('qust-close')">
                    Нет
                </my-button>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
    name: 'my-alert',
    components:{MyButton},
    data() {
        return{
            question: 'Удалить задачу и заметки?'
        }
    },
}
</script>

<style lang="scss">
// .modal{
//     position: fixed;
//     top: 0;
//     left: 0;
//     background: #fdfffe4d;
//     height: 100vh;
//     width: 100vw;
//     z-index: 12;
// }
.alert{
    position: absolute;
    display: flex;
    flex-direction: column;
    // font-size: 43px;
    padding: 10px 15px;
    top: 0;
    width: 280px;
    height: 130px;
    background: #0b8b5c;
    border-radius: 6px;
    border: 1px solid #123d60;
    z-index: 10;
    justify-content: space-around;
    align-items: center;
}
.btn-yes {
    color: #fff;
    background: #10595f;
   &:hover{
        box-shadow: 1px 1px 3px #123d60;
   }
}
.btn-no {
    background: #10595f;
    color: #fff;
   &:hover{
        box-shadow: 1px 1px 3px #123d60;
   }
}
</style>