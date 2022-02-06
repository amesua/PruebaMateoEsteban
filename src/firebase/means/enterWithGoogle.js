import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { credentials } from "../credentials";

const mainCredentials = getAuth(credentials);
const googleProvider = new GoogleAuthProvider();

const googleEnter = (onSubmit, onError) => {
  signInWithPopup(mainCredentials, googleProvider)
    .then((result) => {
      const userCredential = GoogleAuthProvider.credentialFromResult(result);
      const userToken = userCredential.accessToken;
      const user = result.user;
      onSubmit && onSubmit({ userCredential, userToken, user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      onError && onError({ errorCode, errorMessage, email, credential });
    });
};

export default googleEnter;
