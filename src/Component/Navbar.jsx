import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Contributions', href: '#contributions' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-[#41403f]/90 p-5 z-50">
            <div className="container mx-auto flex flex-row flex-wrap justify-between items-center gap-4">
                <a href="#home"
                    className="text-xl md:text-2xl font-extrabold text-yellow-600 hover:text-gray-50 transition-colors"
                >
                    NUTTAWIPHA's Portfolio
                </a>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="lg:hidden text-yellow-600 focus:outline-none z-[60] hover:text-gray-50 transition-colors"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
                <div className={`
                    fixed h-full top-0 right-0 w-[60%] max-w-[300px] md:max-w-none bg-neutral-800 z-20 lg:bg-transparent lg:static lg:flex lg:flex-row md:gap-4 lg:items-center lg:justify-end p-4 lg:p-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
                `}>
                    <div className="flex flex-col flex-wrap md:flex-row md:gap-4 md:justify-between items-center list-none my-10 md:my-0">
                        <a href="/resume-Nuttawipha-Tangroe.pdf"
                            download="Resume_NuttawiphaTangroe_Developer.pdf"
                            className="border-2 border-yellow-700 text-yellow-700 text-sm rounded-full p-2 hover:bg-[#41403f] hover:text-white hover:border-white transition-all mb-4 md:mb-0"
                        >
                            Download Resume
                        </a>
                        {navLinks.map((link) => (
                            <a href={link.href} 
                                onClick={() => setIsOpen(false)}
                                className="text-2xl md:text-base text-yellow-600
                                font-bold hover:text-gray-50 hover:underline transition-all block py-4 md:py-0"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;