import { Link } from "react-router";

export const NotFoundPage = () => {
    return (
      <div className="flex justify-center items-center bg-gradient-to-r from-green-900 via-green-200 to-green-900 w-full h-[99.999vh]">
        <div className="text-center p-10 md:p-20 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
          <h1 className="text-9xl font-extrabold text-red-500 cursor-default">4<span className="text-red-800 hover:text-red-500 transform duration-300">0</span>4</h1>
          <p className="text-lg text-gray-600 mt-4">Ops! A página que você está procurando não está disponível.</p>
          <p className="text-sm text-gray-500 mt-2">Não conseguimos encontrar a página que você procurou. Talvez ela tenha sido removida ou nunca tenha existido.</p>
          
          <div className="mt-6">
            <Link to={"/"} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Voltar para a Página Inicial
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  