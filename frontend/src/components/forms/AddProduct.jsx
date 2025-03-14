import { useState } from "react";

export const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [imagemProduto, setImagemProduto] = useState(null);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [promotion, setPromotion] = useState("");
    const [productType, setProductType] = useState("");
    const [promotionValue, setPromotionValue] = useState("");
    const [promotionEndDate, setPromotionEndDate] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        if (!productName) formErrors.productName = "Nome do produto é obrigatório.";
        if (!price) formErrors.price = "Preço é obrigatório.";
        if (promotion === "Sim" && !promotionValue) formErrors.promotionValue = "Valor da promoção é obrigatório.";

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            console.log({
                productName,
                description,
                price,
                promotion,
                productType,
                promotionValue,
                promotionEndDate,
            });
        }
    };

    return (
        <div className="p-6 w-full bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Adicionar Produto <span>➕</span></h2>
            <form onSubmit={handleSubmit}>
                {/* Nome do Produto */}
                <div className="mb-4">
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                        Nome do Produto
                    </label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className={`mt-1 block w-full px-4 py-2 border ${errors.productName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.productName && <p className="text-red-500 text-xs mt-1">{errors.productName}</p>}
                </div>

                {/* Imagem do Produto */}
                <div className="mb-4">
                    <label htmlFor="imagemProduto" className="block text-sm font-medium text-gray-700">
                        Imagem do Produto
                    </label>
                    <input
                        type="file"
                        id="imagemProduto"
                        onChange={(e) => setImagemProduto(e.target.files[0])}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {imagemProduto && <img src={URL.createObjectURL(imagemProduto)} alt="Imagem do Produto" className="mt-2 w-24 h-24 object-cover rounded" />}
                </div>

                {/* Descrição */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Descrição
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    />
                </div>

                {/* Preço */}
                <div className="mb-4 flex gap-5 justify-around">
                    <div className="w-full">
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Preço
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className={`mt-1 block w-full px-4 py-2 border ${errors.price ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
                    </div>

                    <div className="w-full">
                        <label htmlFor="promotion" className="block text-sm font-medium text-gray-700">
                            Promoção
                        </label>
                        <select
                            id="promotion"
                            value={promotion}
                            onChange={(e) => setPromotion(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Selecione</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </div>
                </div>

                {/* Campos de Promoção */}
                {promotion === "Sim" && (
                    <div className="mb-4 flex gap-4 w-full">
                        {/* Valor da Promoção */}
                        <div className="flex-1">
                            <label htmlFor="promotionValue" className="block text-sm font-medium text-gray-700">
                                Valor da Promoção
                            </label>
                            <input
                                type="number"
                                id="promotionValue"
                                value={promotionValue}
                                onChange={(e) => setPromotionValue(e.target.value)}
                                className={`mt-1 block w-full px-4 py-2 border ${errors.promotionValue ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {errors.promotionValue && <p className="text-red-500 text-xs mt-1">{errors.promotionValue}</p>}
                        </div>

                        {/* Data de Validade da Promoção */}
                        <div className="flex-1">
                            <label htmlFor="promotionEndDate" className="block text-sm font-medium text-gray-700">
                                Data de Validade da Promoção
                            </label>
                            <input
                                type="date"
                                id="promotionEndDate"
                                value={promotionEndDate}
                                onChange={(e) => setPromotionEndDate(e.target.value)}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                )}

                {/* Tipo de Produto */}
                <div className="mb-4">
                    <label htmlFor="productType" className="block text-sm font-medium text-gray-700">
                        Tipo de Produto
                    </label>
                    <select
                        id="productType"
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Selecione</option>
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
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Adicionar Produto
                    </button>
                </div>
            </form>
        </div>
    );
};
