// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRr7OEhf8txI7z-onG_rWrVkQCN8ITH80",
  authDomain: "first-project-1d4ee.firebaseapp.com",
  projectId: "first-project-1d4ee",
  storageBucket: "first-project-1d4ee.appspot.com",
  messagingSenderId: "660678282857",
  appId: "1:660678282857:web:85dbac54fb28ee039edcf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;