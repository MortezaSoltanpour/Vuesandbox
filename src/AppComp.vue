<template>
    <div class="row text-center">
        <div class="col-12">
            <h1>Welcome to composition API</h1>
        </div>
        <div class="col-12">
            <h2>{{ name }}</h2>
            <h2>{{ info.name }} {{ info.lastname }}</h2>
        </div>
        <div class="col-12 mt-4">
            <button class="btn btn-success" @click="updateName">Update name</button>
        </div>
    </div>
    <div ref="myDiv" class="row mt-4 text-center">
        <div class="col-12">
            <SayGoodby :name="name" @changeName="changeName" />
        </div>
    </div>
</template>

<script>
import { onBeforeMount, onMounted, provide, ref } from "vue"
import useUpdater from "./composables/useUpdateName.js"
import SayGoodby from "./components/SayGoodby.vue"
export default {
    components: {
        SayGoodby
    },

    setup() {
        const middleName = ref("تهرانی")
        const { name, info, updateName } = useUpdater(middleName.value);
        const myDiv = ref(null);

        provide("message", "salam man morteza hastam")

        function changeName(p) {
            name.value = p
        }

        onMounted(() => {
            console.log('Mounted')
            console.log(myDiv.value)


        })

        onBeforeMount(() => {
            console.log('BeforeMount')
        })

        return { name, info, updateName, changeName, myDiv }
    }
}
</script>


<!-- <script setup>
import { ref } from "vue"

const name = ref("morteza soltanpour")

</script> -->

<style></style>