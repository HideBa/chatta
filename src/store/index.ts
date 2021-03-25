// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import { inject, InjectionKey, reactive, watch } from "vue";
import firebase from "firebase/app";

export type CurrentUser = firebase.User | null | undefined;

type UserStore = {
  user: CurrentUser;
};

export const authStore = () => {
  const userState = reactive<UserStore>({
    user: undefined,
  });
  const setUser = (user: CurrentUser) => {
    userState.user = user;
  };
  firebase.auth().onAuthStateChanged((user) => {
    console.log("state -------");
    setUser(user);
  });
  return {
    userState,
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
