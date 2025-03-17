import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "../firebaseConfig";

const db = getFirestore(app);

class AddProductToFirebase {
  constructor(product) {
    this.product = product;
  }

  async addOrUpdateProduct(quantity) {
    const productRef = collection(db, "products");

    const q = query(
      productRef,
      where("productName", "==", this.product.productName),
      where("price", "==", this.product.price),
      where("description", "==", this.product.description)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const existingQuantity = parseInt(docSnap.data().quantity) || 0;
      const newQuantity = existingQuantity + parseInt(quantity);
      const productDocRef = doc(db, "products", docSnap.id);
      await updateDoc(productDocRef, { quantity: newQuantity });
    } else {
      await addDoc(productRef, {
        ...this.product,
        quantity: parseInt(quantity),
      });
    }
  }
}

export default AddProductToFirebase;
