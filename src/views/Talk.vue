<template>
  <nav-header />
  <div>talk</div>
  <text-field />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import NavHeader from "@/components/NavHeader.vue";
import firebase from "firebase/app";
import TextField from "@/components/TextField.vue";

export default defineComponent({
  components: {
    NavHeader,
    TextField,
  },
  setup() {
    const chat = reactive([]);
    const messages = firebase.database().ref("message");
  },
});
</script>
