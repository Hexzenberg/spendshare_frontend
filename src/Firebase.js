import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKPXDM-bIk6i7ZBMcptX3NqydT9PEM3C8",
    authDomain: "spendshare-3e97d.firebaseapp.com",
    projectId: "spendshare-3e97d",
    storageBucket: "spendshare-3e97d.firebasestorage.app",
    messagingSenderId: "213904152772",
    appId: "1:213904152772:web:295908f3f5ee8ea4de9191"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };