// Função para calcular os dias restantes
const calculateDaysLeft = (promotionEndDate) => {
  const today = new Date();
  const endDate = new Date(promotionEndDate);
  const timeDifference = endDate - today;
  const daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));

  return daysLeft;
};

export const MainProducts = ({ product_data = [] }) => {
  const applyDiscount = (price, discount) => {
    return price - price * (discount / 100);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {product_data.map((item, index) => {
        const price = parseFloat(item.price);
        const discountedPrice =
          item.promotion === "Sim" && item.promotionValue
            ? applyDiscount(price, parseFloat(item.promotionValue))
            : price;

        // Calculando os dias restantes para a promoção
        const daysLeft = item.promotionEndDate
          ? calculateDaysLeft(item.promotionEndDate)
          : null;

        return (
          <div
            key={index}
            className="flex items-center justify-center gap-4 p-10 w-full border"
          >
            <div className="w-full border pl-5">
              <h1 className="text-lg font-semibold text-gray-800">
                {item.productName}
              </h1>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex flex-col items-start">
                {/* Se houver desconto, exibe o preço com desconto */}
                {item.promotion === "Sim" && item.promotionValue ? (
                  <p className="text-lg font-semibold text-gray-800">
                    R$ {discountedPrice.toFixed(2)}
                  </p>
                ) : (
                  <p className="text-lg font-semibold text-gray-800">
                    R$ {price.toFixed(2)}{" "}
                    {/* Caso contrário, exibe o preço normal */}
                  </p>
                )}

                {/* Se houver desconto, exibe o preço original riscado */}
                {item.promotion === "Sim" && item.promotionValue && (
                  <p className="line-through text-red-500 text-sm">
                    R$ {price.toFixed(2)}
                  </p>
                )}
              </div>

              {/* Exibindo a quantidade de dias restantes para a promoção */}
              {item.promotion === "Sim" && daysLeft !== null && (
                <p className="text-sm text-red-500 mt-2">
                  A promoção termina em {daysLeft}{" "}
                  {daysLeft === 1 ? "dia" : "dias"}.
                </p>
              )}

              <p>Estoque: {item.quantity}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                Comprar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
