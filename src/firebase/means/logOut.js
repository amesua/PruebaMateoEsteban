import { getAuth, signOut } from "firebase/auth";
import { credentials } from "../credentials";

const mainCredentials = getAuth(credentials);

const logOut = () => {
  signOut(mainCredentials);
};
export default logOut;
