import { useState } from "react";
import AddProductToFirebase from "../../services/AddProductToFirebase";

export const AddProduct = () => {
  const [quantityProducts, setQuantityProducts] = useState(1);
  const [product, setProduct] = useState({
    productName: "",
    imagemProduto: null,
    description: "",
    price: "",
    promotion: "",
    productType: "",
    promotionValue: "",
    promotionEndDate: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setProduct((prev) => ({
      ...prev,
      [id]: files ? files[0] : value,
    }));
  };

  const handleNumberChange = (e) => {
    const { id, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [id]: value.replace(/\D/g, "") || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let i;
    let formErrors = {};

    if (!product.productName)
      formErrors.productName = "Nome do produto é obrigatório.";
    if (!product.price) formErrors.price = "Preço é obrigatório.";
    if (product.promotion === "Sim" && !product.promotionValue)
      formErrors.promotionValue = "Valor da promoção é obrigatório.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const pr = new AddProductToFirebase(product);
      await pr.addOrUpdateProduct(quantityProducts);
    }
  };

  return (
    <div className="p-6 w-full bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Adicionar Produto <span>➕</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <div className="w-[90%]">
            <label htmlFor="productName" className="block text-sm font-medium">
              Nome do Produto
            </label>
            <input
              type="text"
              id="productName"
              value={product.productName}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.productName ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.productName && (
              <p className="text-red-500 text-xs mt-1">{errors.productName}</p>
            )}
          </div>

          <div className="w-[10%]">
            <label
              htmlFor="quantityProduct"
              className="block text-sm font-medium"
            >
              Quantidade
            </label>
            <input
              type="number"
              id="quantityProducts"
              value={quantityProducts}
              onChange={(e) => setQuantityProducts(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Imagem do Produto */}
        <div className="mb-4">
          <label htmlFor="imagemProduto" className="block text-sm font-medium">
            Imagem do Produto
          </label>
          <input type="file" id="imagemProduto" onChange={handleChange} />
          {product.imagemProduto && (
            <img
              src={URL.createObjectURL(product.imagemProduto)}
              alt="Imagem do Produto"
              className="mt-2 w-24 h-24 object-cover rounded"
            />
          )}
        </div>

        {/* Descrição */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Descrição
          </label>
          <textarea
            id="description"
            value={product.description}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            rows={4}
          />
        </div>

        {/* Preço e Promoção */}
        <div className="mb-4 w-full flex gap-5">
          <div className="w-full">
            <label htmlFor="price" className="block text-sm font-medium">
              Preço
            </label>
            <input
              type="number"
              id="price"
              value={product.price}
              onChange={handleNumberChange}
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.price ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
            {errors.price && (
              <p className="text-red-500 text-xs mt-1">{errors.price}</p>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="promotion" className="block text-sm font-medium">
              Promoção
            </label>
            <select
              id="promotion"
              value={product.promotion}
              onChange={handleChange}
              className="w-full h-10"
            >
              <option value="" disabled hidden>
                Selecione
              </option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
        </div>

        {/* Campos de Promoção */}
        {product.promotion === "Sim" && (
          <div className="mb-4 flex gap-4 w-full">
            <div className="flex-1">
              <label
                htmlFor="promotionValue"
                className="block text-sm font-medium"
              >
                Valor da Promoção
              </label>
              <input
                type="number"
                id="promotionValue"
                value={product.promotionValue}
                onChange={handleNumberChange}
                className={`mt-1 block w-full px-4 py-2 border ${
                  errors.promotionValue ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
              {errors.promotionValue && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.promotionValue}
                </p>
              )}
            </div>

            <div className="flex-1">
              <label
                htmlFor="promotionEndDate"
                className="block text-sm font-medium"
              >
                Data de Validade
              </label>
              <input
                type="date"
                id="promotionEndDate"
                value={product.promotionEndDate}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}

        {/* Tipo de Produto */}
        <div className="mb-4">
          <label htmlFor="productType" className="block text-sm font-medium">
            Tipo de Produto
          </label>
          <select
            id="productType"
            value={product.productType}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled hidden>
              Selecione
            </option>
            <option value="Tech">Tech</option>
            <option value="Comida">Comida</option>
            <option value="Roupa">Roupa</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        {/* Botão de Submissão */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Adicionar Produto
          </button>
        </div>
      </form>
    </div>
  );
};
