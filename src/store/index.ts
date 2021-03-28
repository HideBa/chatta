// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import { auth } from "@/auth/firebase";
import { inject, InjectionKey, reactive, watch } from "vue";
import firebase from "firebase/app";
import router from "@/router";

export type CurrentUser = firebase.User | null | undefined;

type UserStore = {
  user: CurrentUser;
};

export const authStore = () => {
  const userState = reactive<UserStore>({
    user: undefined,
  });

  const logOut = async () => {
    try {
      await auth.signOut();
      router.push("/sign");
    } catch (err) {
      console.error(err);
    }
  };

  const setUser = (user: CurrentUser) => {
    userState.user = user;
  };

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });
  return {
    userState,
    logOut,
  };
};

export type AuthStore = ReturnType<typeof authStore>;

export const authStoreKey: InjectionKey<AuthStore> = Symbol("authStore");

export const useAuthStore = () => {
  const store = inject(authStoreKey);
  if (!store) {
    throw new Error(`${authStoreKey} is not provided`);
  }
  return store;
};

export default useAuthStore;
