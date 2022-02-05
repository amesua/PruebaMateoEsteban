import { getAuth, onAuthStateChanged } from "firebase/auth";
import { credentials } from "../credentials";

const mainCredentials = getAuth(credentials);
const userInfo = async () => {
  try {
    let userState;
    await onAuthStateChanged(mainCredentials, (user) => {
      userState = user ?? "false";
    });
    return userState;
  } catch {
    return "false";
  }
};
export default userInfo;
