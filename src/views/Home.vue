<template>
  <div class="home">
    <nav-header />
    <router-link to="/talks">Talk</router-link>
  </div>
</template>

<script lang="ts">
import NavHeader from "@/components/NavHeader.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { NavHeader },
})
export default class Home extends Vue {}
</script>
