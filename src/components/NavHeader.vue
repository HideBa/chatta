<template>
  <div id="nav" class="nav-header">
    <router-link to="/">Home</router-link>
    <template v-if="isSignedIn">
      <div class="logout" @click="logOut">logout</div>
      <div>{{ userName }}さんこんにちは</div>
    </template>
    <template v-if="!isSignedIn">
      <router-link to="/login">Sign</router-link>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAuthStore from "../store";

export default defineComponent({
  setup() {
    const authStore = useAuthStore();
    const userName = authStore.userState.user?.displayName;

    const isSignedIn = !!authStore.userState;
    const logOut = () => {
      authStore.logOut();
    };
    return {
      logOut,
      isSignedIn,
      userName,
    };
  },
});
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.logout {
  cursor: pointer;
}
.nav-header {
  display: flex;
  gap: 20px;
}
</style>
