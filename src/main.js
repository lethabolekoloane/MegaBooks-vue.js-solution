import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase"



var firebaseConfig = {
  apiKey: "AIzaSyCK0BapDZbrusXxF9nbSy_D0K0VhKcKfNU",
  authDomain: "megabooks-f5dc3.firebaseapp.com",
  projectId: "megabooks-f5dc3",
  storageBucket: "megabooks-f5dc3.appspot.com",
  messagingSenderId: "986441865140",
  appId: "1:986441865140:web:d15753bcc0de005bff04e1",
  measurementId: "G-K701JQF2JW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
