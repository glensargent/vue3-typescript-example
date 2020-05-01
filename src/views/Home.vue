<template>
  <div>
    <h1>Hello Vue 3</h1>
    <button @click="increase">increment</button>
    <button @click="decrease">decrement</button>
    <h2>{{ count }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  setup() {
    const count = ref(0)
    const increase = () => {
      count.value++
    }

    const decrease = () => {
      count.value--
    }

    return {
      count,
      increase,
      decrease
    }
  }
});
</script>