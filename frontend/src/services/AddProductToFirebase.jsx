import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

class AddProductToFirebase {
  constructor(product) {
    this.product = product;
  }

  /*
  async uploadImage(imageFile) {
    const imageRef = ref(storage, `products/${imageFile.name}`);
    await uploadBytes(imageRef, imageFile);
    return await getDownloadURL(imageRef);
  }
  */

  async addProduct() {
    try {
      // let imageUrl = null;

      /*if (this.product.imagemProduto) {
        imageUrl = await this.uploadImage(this.product.imagemProduto);
      }*/

      const productData = {
        ...this.product,
        // imagemProduto: imageUrl,
        timestamp: new Date(),
      };

      const docRef = await addDoc(collection(db, "products"), productData);
      console.log("Produto adicionado com sucesso! Documento ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Erro ao adicionar o produto: ", e.message);
      return null;
    }
  }
}

export default AddProductToFirebase;
