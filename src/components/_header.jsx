import { useState } from "react";
import logo from "../public/img/logo.png";
import { Menu, X } from "lucide-react"; 

export const HeaderComponent = ({ navigation = [], buttons = [] }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex w-full justify-between items-center p-4 border-b bg-white shadow-sm">
            <div className="flex items-center">
                <img
                    src={logo}
                    className="w-[100px] sm:w-[120px] hover:scale-105 transition-all duration-200"
                    alt="Logo"
                />

                <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600 ml-6">
                    {navigation.map((item, index) => (
                        <ul key={index} className="cursor-pointer hover:text-blue-500 transition-colors duration-200">
                            <li>{item.name}</li>
                        </ul>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-4">
                    {buttons.map((item, index) => (
                        <button
                            key={index}
                            className={`${item.className} px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-opacity-80`}
                            onClick={item.onClick}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center p-4 md:hidden">
                    {navigation.map((item, index) => (
                        <ul key={index} className="w-full text-center py-2 border-b cursor-pointer hover:text-blue-500 transition-colors duration-200">
                            <li>{item.name}</li>
                        </ul>
                    ))}
                    
                    <div className="mt-4 flex items-center flex-col gap-2 w-full">
                        {buttons.map((item, index) => (
                            <button
                                key={index}
                                className={`${item.className} w-52 px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-opacity-80`}
                                onClick={item.onClick}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
