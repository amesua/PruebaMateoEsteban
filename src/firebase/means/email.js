import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { credentials } from "../credentials";

const mainCredentials = getAuth(credentials);
const enterWithEmail = (user, password, approved, onError) => {
  createUserWithEmailAndPassword(mainCredentials, user, password)
    .then((userCredential) => approved && approved(userCredential))
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        signInWithEmailAndPassword(mainCredentials, user, password)
          .then((userCredential) => approved && approved(userCredential))
          .catch((error) => onError && onError(error));
      } else {
        onError && onError(error);
      }
    });
};
export default enterWithEmail;
