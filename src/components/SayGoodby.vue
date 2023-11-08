

<template>
    <h1>Goodby {{ name }}</h1>
    <div class="col-12">
        <button @click="updateName" class="btn btn-info"> update </button>
    </div>
</template>

<script>
import { inject } from 'vue'

export default {
    props: ['name'],

    emits: ["changeName"],
    setup(props, context) {

        console.log(props)
        console.log(context)

        const message = inject("message")
        console.log(message)

        function updateName() {
            context.emit("changeName", "مرتضی")
        }

        return { updateName }
    }
}
</script>

<style></style>