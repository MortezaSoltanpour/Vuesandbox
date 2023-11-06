 <!-- <script setup>
const author='مرتضی سلطانپور'

</script> -->
<!-- <script>
export default{
    data(){
        return{
            author:'آقا مرتضی'
        }
    }
}
</script> -->

<script setup>

import { ref } from 'vue'

var author = ref('مرتضی سلطانپور')
const image = "https://picsum.photos/500"
const imgtitle = "این یک تصویر است"

const atr = {
    id: "123",
    class: "classname",
    mm: "asasas"
}

const ss = {
    link: 'http://www.mehregansmart.com',
    title: "این یک لینک است"
}


function changeName() {
    author.value = 'Morteza Soltanpour'
}

function refevent() {
    console.log(this.$refs)
}
</script>

<template>
    <div ref="mydiv">
        salam man morteza hastam
    </div>
    <button @click="refevent">استفاده از ref</button>
    <div>
        Author is {{ author }}
    </div>
    <button @click="changeName">Change Name</button>
    <br>
    <br>
    <br>
    <br>
    <hr>
    <br>
    <br>
    کلیک کنید
    <img :src="image" :alt="imgtitle" v-bind="atr" :title="imgtitle" />
    <a :title="ss.title" :href="ss.link" target="_blank">
    </a>
</template>
 