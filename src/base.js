import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdyiPWy60Cfj7uIdH_6AAH9N21SZ9l7i0",
  authDomain: "chatbox-app-43c3b.firebaseapp.com",
  databaseURL: "https://chatbox-app-43c3b.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
