export const MainProducts = ({product_data = []}) => {
    return(
        <div className="grid grid-cols-4"> 
            {product_data.map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-4 p-4">
                    <div className="w-1/2">
                        <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-lg font-semibold text-gray-800">R$ {item.price}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Comprar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}