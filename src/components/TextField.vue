<template>
  <input placeholder="chatta" v-model="inputText" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const inputText = ref("");
    return {
      inputText,
    };
  },
});
</script>
