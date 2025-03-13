import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";
import logo from "../public/image/logo/Sem título.png"

export const Header = ({ navigation = [], social_medias = [] }) => {
    return (
        <header className="bg-blue-950 flex justify-between pb-3">
            <div className="flex place-items-center ml-10">
                <img src={logo} width={"120px"} height={"120px"} alt="Imagem Logo" className="hover:scale-110 transition-transform duration-300" />
            </div>

            <div>
                <div className="pb-1 pt-3">
                    <div className="flex gap-4"> 
                        {social_medias.map((social, index) => (
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                className="text-zinc-400 hover:text-white transition-colors duration-300"
                            >
                                {social.name === 'facebook' && <FaFacebook size={20} />}
                                {social.name === 'twitter' && <FaTwitter size={20} />}
                                {social.name === 'instagram' && <FaInstagram size={20} />}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <nav className="flex gap-10 place-items-center pr-5">
                        <ul className="flex gap-5">
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-zinc-300 hover:text-white font-bold transition-colors duration-300">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-3">
                            <div>
                                <Button>
                                    Sign in
                                </Button>
                            </div>
                            <div>
                                <Button>
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
