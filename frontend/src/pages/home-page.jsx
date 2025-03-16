import { collection, getDocs, getFirestore } from "firebase/firestore";
import { HeaderComponent } from "../components/_header";
import { MainProducts } from "./main-products";
import app from "../firebaseConfig";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };
    fetchProducts();
  }, [db]);

  const navigation_header = [
    { name: "Home" },
    { name: "Produtos" },
    { name: "Contatos" },
    { name: "Sobre nós" },
  ];

  const buttons_header = [
    {
      name: "Login",
      onClick: () => alert("Login"),
      className: "bg-blue-500 text-white p-2 rounded-md",
    },
    {
      name: "Cadastrar",
      onClick: () => alert("Cadastrar"),
      className: "bg-green-500 text-white p-2 rounded-md",
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsList);
    };
    fetchProducts();
  }, [db]);

  return (
    <div>
      <HeaderComponent
        navigation={navigation_header}
        buttons={buttons_header}
      />

      <div className="flex justify-center place-items-center w-full border h-[450px] bg-gray-200">
        Carrosel de imagens
      </div>

      <MainProducts product_data={products} />
    </div>
  );
};
