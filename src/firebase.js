import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD97WcijjPk16SkPpyk_JP64z8RLkcwmQ4",
    authDomain: "crud-f478f.firebaseapp.com",
    projectId: "crud-f478f",
    storageBucket: "crud-f478f.appspot.com",
    messagingSenderId: "708047695475",
    appId: "1:708047695475:web:5066d56e5e1cbef4aa0406"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)