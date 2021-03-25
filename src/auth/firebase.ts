import "firebase/auth";
import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: (authResult: any, redirectUrl: any) => {
      console.log(authResult);
      console.log(redirectUrl);
      return true;
    },
    uiShown: () => {
      const loader = document.getElementById("loader");
      if (!loader) return;
      loader.style.display = "none";
    },
  },
  signInFlow: "popup",
  signInSuccessUrl: process.env.BASE_URL,
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const auth = firebase.auth();

export const ui = new firebaseui.auth.AuthUI(auth);

export default firebase;
