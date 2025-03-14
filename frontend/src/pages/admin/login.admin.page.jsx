import { Link } from "react-router";

export const AdminLoginPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-[450px] bg-white shadow-lg rounded-xl p-6 border border-gray-200">
                <h4 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Acesso Administrativo
                </h4>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="login" className="block text-gray-600 font-medium mb-1">
                            Usuário
                        </label>
                        <input 
                            type="text" 
                            id="login" 
                            placeholder="Digite seu usuário"
                            className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="senha" className="block text-gray-600 font-medium mb-1">
                            Senha
                        </label>
                        <input 
                            type="password" 
                            id="senha" 
                            placeholder="Digite sua senha"
                            className="p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                        />
                    </div>

                    <Link 
                        to="/admin"
                        className="block text-center bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Entrar
                    </Link>

                    <p className="text-center text-sm text-gray-500">
                        Esqueceu sua senha? <Link to="/admin" className="text-indigo-600 hover:underline">Recuperar acesso</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
