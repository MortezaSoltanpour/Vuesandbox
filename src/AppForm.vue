<!-- <script setup>

import { ref } from 'vue'

const formdata = {
    name: '',
    message: ''
}

var checkforempty = 'aa'

function postform() {
    console.clear()


    console.table(formdata)



    if (formdata.name == '') {
        checkforempty = 'errorcolor'
    }
    else {
        checkforempty = ''
    }
    console.log(checkforempty)

}

</script> -->

<script>
import { provide, computed } from 'vue'

import SayHello from './components/SayHello.vue'
import { usernames222 } from './mixins.js'
export default {
    mixins: [usernames222],
    components: {
        SayHello
    },
    data() {
        return {
            langs: ['Persian', 'English', 'French'],

            formdata: {
                name: '',
                message: '',
                checkbox: [],
                radio: '',
                lang: 'Persian'

            },
            predata: 'salam'
        }
    },

    methods: {
        postform() {
            console.clear()
            console.table(this.formdata)
            provide('data', 'asdsadasd')
        },
        getData(data) {
            console.log(data)
        }
    },
    provide() {
        return {
            data: computed(() => this.formdata.name),
            data2: computed(() => 'salam')

        }
    }

}

</script>


<template>
    <SayHello :userdata="formdata" @send-data="getData($event)">
        <template v-slot:ul>
            <ul>
                <li>C#</li>
                <li>Asp.net</li>
                <li>Python</li>
                <li>Vue</li>
                <li>React</li>
            </ul>
        </template>
    </SayHello>
    <hr />
    <ul>
        <li v-for="(name, index) in usernamesAsli" :key="index">
            {{ name }}
        </li>
    </ul>
    <ul>
        <li v-for="(name, index) in languages" :key="index">
            {{ name }}
        </li>
    </ul>
    <hr />
    <div class="row">
        <div class="col-4">
            <label>Name : </label>
            <input class="form-control" v-model="formdata.name" type="text" :title="formdata.name" />
            {{ formdata.name }}
        </div>


    </div>

    <div class="row">
        <div class="col-4">
            <label>Message : </label>
            <textarea class="form-control" v-model="formdata.message" type="text"></textarea>
        </div>
    </div>

    <div class="row">
        <div class="col-4">
            <label for="chk1">Checkbox 1</label>
            <input value="chk1" v-model="formdata.checkbox" id="chk1" type="checkbox">
        </div>
    </div>

    <div class="row">
        <div class="col-4">
            <label for="chk2">Checkbox 2</label>
            <input value="chk2" v-model="formdata.checkbox" id="chk2" type="checkbox">
        </div>
    </div>

    <div class="row">
        <div class="col-4">
            <label for="rdo1">radio 1</label>
            <input value="rdo1" v-model="formdata.radio" id="rdo1" type="radio">
        </div>
    </div>

    <div class="row">
        <div class="col-4">
            <label for="rdo2">radio 2</label>
            <input value="rdo2" v-model="formdata.radio" id="rdo2" type="radio">
        </div>
    </div>

    <div class="row">
        <div class="col-4">
            <label>Languages</label>
            <select v-model="formdata.lang" class="form-control">
                <option v-for="(lang, index) in langs" :key="index">
                    {{ lang }}
                </option>
            </select>
        </div>
    </div>

    <div class="row">
        <div class="col-4">
            <button class="btn btn-success" @click.prevent="postform">
                Submit
            </button>
        </div>
    </div>
</template>

<style scoped>
.col-4 {
    margin: 10px 20px
}


.errorcolor {
    border: solid thin red !important
}
</style>