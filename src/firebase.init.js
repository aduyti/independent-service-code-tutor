// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxNhcUEL_URlbAxdJdFf2ODDlb4ury37w",
    authDomain: "code-tutor-c47b1.firebaseapp.com",
    projectId: "code-tutor-c47b1",
    storageBucket: "code-tutor-c47b1.appspot.com",
    messagingSenderId: "1049161253367",
    appId: "1:1049161253367:web:560ac969377ded8ccc6ef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;