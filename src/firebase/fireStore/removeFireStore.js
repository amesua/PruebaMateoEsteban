import { credentials } from "../credentials";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";

const dataBase = getFirestore(credentials);

const removeDataFireStore = async (userId, firestoreId, currentPage) => {
  try {
    await deleteDoc(doc(dataBase, userId, firestoreId));
    return { firestoreId, currentPage };
  } catch (e) {
    return e;
  }
};

export default removeDataFireStore;
