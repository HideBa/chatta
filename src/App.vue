<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <template v-if="isSignedIn">
      <div class="logout" @click="logOut">logout</div>
    </template>
    <template v-if="!isSignedIn">
      <router-link to="/login">Sign</router-link>
    </template>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAuth from "@/auth/auth";
import useAuthStore from "./store";

const { logOut: authLogOut } = useAuth();
export default defineComponent({
  setup() {
    const authStore = useAuthStore();

    const isSignedIn = !!authStore.userState;
    const logOut = () => {
      authLogOut();
    };
    return {
      logOut,
      isSignedIn,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
</style>
