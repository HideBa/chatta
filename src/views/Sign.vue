<template>
  <div>sign</div>
  <div id="firebaseui-auth-container"></div>
  <div id="loader">Loading...</div>
</template>

<script lang="ts">
import { ui, uiConfig } from "@/auth/firebase";
import { defineComponent } from "vue";

export default defineComponent({
  // setup() {},
  mounted() {
    ui.start("#firebaseui-auth-container", uiConfig);
  },
});
</script>
