import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8Rr5-8rQJpH0ISWw5EFZaM_8IboIcbl0",
  authDomain: "chatbox-app-54930.firebaseapp.com",
  databaseURL: "https://chatbox-app-54930.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
