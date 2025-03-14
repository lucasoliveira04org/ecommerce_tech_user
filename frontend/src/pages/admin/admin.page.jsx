import { Package, Settings, ShoppingCart, Users } from "lucide-react";
import { useState } from "react";
import { AddProduct } from "../../components/forms/AddProduct";
import { ListProducts } from "../../components/forms/ListProducts";
import { ManageUsers } from "../../components/forms/ManageUsers";
import { SettingsPage } from "../../components/forms/SettingsPage";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { Link } from "react-router";

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

    const items_sidebar = [
        {label: 'Adicionar Produto', icon: <ShoppingCart size={20} />, onClick: () => setSelectedItem('Adicionar Produto')},
        {label: 'Listar Produtos', icon: <Package size={20} />, onClick: () => setSelectedItem('Listar Produtos')},
        {label: 'Gerenciar Usuários', icon: <Users size={20} />, onClick: () => setSelectedItem('Gerenciar Usuários')},
        {label: 'Configurações', icon: <Settings size={20} />, onClick: () => setSelectedItem('Configurações')},
    ]

    return (
        <div className="h-screen flex">
            {/* Sidebar fixo */}
            <div className="bg-blue-900 text-white h-full p-4 w-[200px] fixed top-0 left-0 bottom-0">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Menu</h2>

                    {/* Itens do menu */}
                    <div>
                        {items_sidebar.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 cursor-pointer hover:bg-blue-800 p-2 rounded-lg transition" onClick={item.onClick}>
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 p-6 ml-[200px]">
                {/* Topo fixo */}
                <div className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center mb-6 fixed top-0 left-[200px] right-0 z-10">
                    <h1 className="text-2xl font-bold text-gray-800">Acesso Administrativo</h1>
                    <div className="space-x-4">
                        <Link to={"/"} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                            Sair
                        </Link>
                        <Link className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
                            Perfil
                        </Link>
                    </div>
                </div>

                {/* Conteúdo rola normalmente */}
                <div className="grid grid-cols-1 gap-6 mt-[100px]">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};
