import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFflttj1FRwdl-8TvwwlCb4yZv9-Pt1xE",
  authDomain: "booketeers-771a1.firebaseapp.com",
  projectId: "booketeers-771a1",

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);