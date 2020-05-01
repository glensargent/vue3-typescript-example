<template>
  <div>
    <h1>Hello Vue 3</h1>
    <button @click="increase">increment</button>
    <button @click="decrease">decrement</button>
    <h2>{{ state.count }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({
      count: 0
    })
    const increase = () => {
      state.count++
    }

    const decrease = () => {
      state.count--
    }

    return {
      state,
      increase,
      decrease
    }
  }
});
</script>