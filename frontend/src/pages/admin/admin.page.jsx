import { Package, Settings, ShoppingCart, Users } from "lucide-react";
import { useState } from "react";
import { AddProduct } from "../../components/forms/AddProduct";
import { ListProducts } from "../../components/forms/ListProducts";
import { ManageUsers } from "../../components/forms/ManageUsers";
import { SettingsPage } from "../../components/forms/SettingsPage";
import { Dashboard } from "../../components/dashboard/Dashboard";

export const AdminPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const renderContent = () => {
        switch (selectedItem) {
            case 'Adicionar Produto':
                return <AddProduct />;
            case 'Listar Produtos':
                return <ListProducts />;
            case 'Gerenciar Usuários':
                return <ManageUsers />;
            case 'Configurações':
                return <SettingsPage />;
            default:
                return <Dashboard/>
        }
    };

    return (
        <div className="h-screen flex">
            <div className="bg-blue-900 text-white h-full p-4 w-[200px]">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Menu</h2>

                    {/* Itens do menu */}
                    <div>
                        <button
                            onClick={() => setSelectedItem('Adicionar Produto')}
                            className="flex items-center space-x-2 w-full text-left py-2 px-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            <ShoppingCart size={20} />
                            <span>Adicionar Produto</span>
                        </button>

                        <button
                            onClick={() => setSelectedItem('Listar Produtos')}
                            className="flex items-center space-x-2 w-full text-left py-2 px-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            <Package size={20} />
                            <span>Listar Produtos</span>
                        </button>

                        <button
                            onClick={() => setSelectedItem('Gerenciar Usuários')}
                            className="flex items-center space-x-2 w-full text-left py-2 px-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            <Users size={20} />
                            <span>Gerenciar Usuários</span>
                        </button>

                        <button
                            onClick={() => setSelectedItem('Configurações')}
                            className="flex items-center space-x-2 w-full text-left py-2 px-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            <Settings size={20} />
                            <span>Configurações</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 p-6">
                {/* Topo */}
                <div className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Acesso Administrativo</h1>
                    <div className="space-x-4">
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                            Sair
                        </button>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
                            Perfil
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};
