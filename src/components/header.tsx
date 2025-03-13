import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button } from "./ui/button";

export const Header = ({ title, navigation = [], social_medias = [] }) => {
    return (
        <header className="bg-blue-950 flex justify-between pb-10">
            <div className="flex place-items-center ml-10">
                <h2>{title}</h2>
            </div>

            <div>
                <div className="pb-1">
                    <div className="flex gap-4"> 
                        {social_medias.map((social, index) => (
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                className="text-black hover:text-white"
                            >
                                {social.name === 'facebook' && <FaFacebook size={24} />}
                                {social.name === 'twitter' && <FaTwitter size={24} />}
                                {social.name === 'instagram' && <FaInstagram size={24} />}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <nav className="flex gap-10 place-items-center pr-5">
                        <ul className="flex gap-5">
                            {navigation.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-zinc-300 hover:text-white font-bold">
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
