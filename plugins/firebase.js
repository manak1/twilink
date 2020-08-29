import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.mesurementId,
  })
}

export default (context, inject) => {
  const $fb = {
    app: Firebase.app,
    firestore: Firebase.firestore,
    auth: Firebase.auth,
  }
  inject('fb', $fb)
}
