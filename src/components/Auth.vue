<script setup lang="ts">
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { useAuth } from '@vueuse/firebase/useAuth'

const app = initializeApp({
  apiKey: "AIzaSyApvEQolgJzTubpHWZ9-kOLue0dwkE0R0o",
  authDomain: "steam-patrol-380019.firebaseapp.com",
  projectId: "steam-patrol-380019",
  storageBucket: "steam-patrol-380019.appspot.com",
  messagingSenderId: "788462796246",
  appId: "1:788462796246:web:759132381ed23567d83877",
  measurementId: "G-CJFBEK6H8D"
})
const auth = getAuth(app);
const { isAuthenticated, user } = useAuth(auth)

const signIn = () => signInWithPopup(auth, new GoogleAuthProvider())
</script>
<template>
  <pre v-if="isAuthenticated">{{ user }}</pre>
  <div v-else>
    <button @click="signIn">
      Sign In with Google
    </button>
  </div>
</template>
