import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { credentials } from "../credentials";

const mainCredentials = getAuth(credentials);
const facebookProvider = new FacebookAuthProvider();

const facebookEnter = (onSubmit, onError) => {
  signInWithPopup(mainCredentials, facebookProvider)
    .then((result) => {
      const user = result.user;
      const userCredential = FacebookAuthProvider.credentialFromResult(result);
      const userToken = userCredential.accessToken;
      onSubmit && onSubmit({ userCredential, userToken, user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
      onError && onError({ errorCode, errorMessage, email, credential });
    });
};

export default facebookEnter;
