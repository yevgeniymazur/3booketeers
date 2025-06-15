import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdTM6mlx5jKVjs6aRGbL_S0zlgWmF4gFg",
  authDomain: "booketeers-ec353.firebaseapp.com",
  projectId: "booketeers-ec353",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);