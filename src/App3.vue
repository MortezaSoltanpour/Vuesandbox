<script>

export default {
    data() {
        return {
            title: 'third div'
        }
    },
    methods: {
        getevent() {
            console.log(this.$refs)
            console.log(this.$refs.h1div.childElementCount)
            console.log(this.$refs.h1div.localName)
            console.log(this.$refs.h1div.namespaceURI)
            console.log(this.$refs.h1div.innerHTML)
            console.log(this.$refs.h1div.innerText)
            console.log(this.$refs.h1div.children[3])
            // this.$refs.h1div.children[3].style.direction = 'rtl'
            // this.$refs.h1div.children[3].style.textAlign = 'left'

            // this.$refs.lastdiv.style.direction = 'rtl'
            // this.$refs.lastdiv.style.textAlign = 'left'
            const div = this.$refs.h1div

            console.clear();
            console.log(div.children)

            for (let i = 0; i < div.children.length; i++) {
                const r = Math.random() * 256
                const g = Math.random() * 256
                const b = Math.random() * 256
                div.children[i].style.color = `rgb(${r},${g},${b})`
                console.log(div.children[i])
            }

            //console.table(div.children)
            // this.$refs.h1div.innerText = 'این یک تست است'
        }
    }
}

</script>

<template>
    <h1 ref="h1div">
        {{ title }}
        <div>salam</div>
        <div>man</div>
        <div>morTeza</div>
        <div ref="lastdiv" id="last">من morteza هستم</div>
    </h1>
    <button @click="getevent">Click here</button>
</template>