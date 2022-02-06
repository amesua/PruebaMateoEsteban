import { credentials } from "../credentials";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const dataBase = getFirestore(credentials);

const addDataFireStore = async (userId, params) => {
  try {
    const docRef = await addDoc(collection(dataBase, userId), {
      ...params,
    });
    return { ...params, firestoreId: docRef.id };
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default addDataFireStore;
