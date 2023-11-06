<script setup>

import { ref, onMounted } from 'vue'

// reactive state
const count = ref(220)

const people = [
  { name: "morteza", lastname: 'soltanpour' },
  { name: "ali", lastname: 'mirzaei' },
  { name: "masoud", lastname: 'hamidi' },
  { name: "amir", lastname: 'alavi' },
  { name: "hasan", lastname: 'rezaei' }

]

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<!-- <script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 220
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script> -->
 
<template>
  <header>

    <div class="wrapper">

      {{ count }}
      <button @click="increment">Click here</button>
      <button @click="count--">Click for minus</button>
    </div>
  </header>
  <main>
    <div>
      <ul>
        <li v-for="(person, index) in people" :key="person.name">
          <span style="font-weight: 700;" v-if="person.name == 'morteza'">
            {{ index }} ) {{ person.name.toUpperCase() }} {{ person.lastname }}
          </span>
          <span v-else>{{ index }} ) {{ person.name }} {{ person.lastname }}
          </span>
        </li>


      </ul>
    </div>
  </main>

  <div v-pre>
    {{ count }}
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
