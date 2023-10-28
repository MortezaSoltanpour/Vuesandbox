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

import{ref} from 'vue'

var author= ref('مرتضی سلطانپور')

function changeName(){
    author.value='Morteza Soltanpour'
}
</script>

<template>
    <div>
        salam man morteza hastam
    </div>
    <div>
        Author is {{author}}
    </div>
    <button @click="changeName">Change Name</button>
</template>
 