import { credentials } from "../credentials";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const dataBase = getFirestore(credentials);

const getDataFireStore = async (userId) => {
  try {
    const docInfo = await getDocs(collection(dataBase, userId));
    const dataFirestore = [];
    docInfo.forEach((doc) => {
      const itemData = doc.data();
      dataFirestore.push({ ...itemData, firestoreId: doc.id });
    });
    return dataFirestore;
  } catch (e) {
    return e;
  }
};

export default getDataFireStore;
