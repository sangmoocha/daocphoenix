import Vue from "vue";
import firebase from "firebase/app";
import firebaseConfig from "../../firebase.config";

import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();

Vue.prototype.$firebase = firebase;

export default firebase;