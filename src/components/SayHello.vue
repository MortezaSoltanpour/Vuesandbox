 


<template>
    <h1>Hello Dear user, {{ userdata.name }}</h1>
    <h2>message: {{ userdata.message }}</h2>
    <h3>lang: {{ userdata.lang }}</h3>
    <h3>Injected : {{ data }}</h3>
    <h3>Injected 2 : {{ data2 }}</h3>
    <button @click="senddata">Click here</button>
    <div class="row">
        <slot name="ul"></slot>
    </div>
</template>

<script>

export default {
    emits: ["sendData"],
    props: ['userdata'],
    methods: {
        senddata() {
            this.$emit('sendData', this.userdata.name)
        }
    },
    inject: ['data', 'data2']
}

</script>

<style scoped>
h1 {
    margin: 20px
}
</style>