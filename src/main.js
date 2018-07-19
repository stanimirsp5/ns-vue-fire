import Vue from 'nativescript-vue';

import router from './router';

import store from './store';
// import firebase from "nativescript-plugin-firebase/app";
import firebase from 'nativescript-plugin-firebase';

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;


// firebase.initializeApp({
//   persist: false
// });
new Vue({

  router,

  store,
}).$start();

firebase.init({
  persist: true
}).then(
  instance => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
);
// setTimeout(firebase.init(), 500);
