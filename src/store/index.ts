// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import { InjectionKey, reactive } from "vue";
import firebase from "firebase/app";

export type CurrentUser = firebase.User | null | undefined;

type UserStore = {
  user: CurrentUser;
};

const userState = reactive<UserStore>({
  user: undefined,
});

export const userStateKey: InjectionKey<UserStore> = Symbol("user");

export default userState;
