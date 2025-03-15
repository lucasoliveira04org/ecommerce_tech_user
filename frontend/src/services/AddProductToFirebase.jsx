import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

class AddProductToFirebase {
    constructor(product){
        this.product = product
    }

    async addProduct(){
        try{
            const productData = {
                ...this.product,
                timestamp: new Date(),
            }

            const docRef = await addDoc(collection(db, 'products'), productData);
            console.log("Produto adicionado com sucesso! Documento ID: ", docRef.id);
        } catch(e){
            console.error("Erro ao adicionar o produto: ", e.message);
        }
    }
}

export default AddProductToFirebase;