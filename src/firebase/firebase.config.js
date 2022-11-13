import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBrAyTYaRZTQVg6lH1MWkXlpsSePWuX7SA",
  authDomain: "doctors-portal-react-project.firebaseapp.com",
  projectId: "doctors-portal-react-project",
  storageBucket: "doctors-portal-react-project.appspot.com",
  messagingSenderId: "692913392105",
  appId: "1:692913392105:web:dc0ec7e71a519274372378",
};

const app = initializeApp(firebaseConfig);

export default app;
