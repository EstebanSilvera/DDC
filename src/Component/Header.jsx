import { useState, useRef, useEffect } from 'react';
import logo from '../img/DDC-name.png'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const [isOpen2, setIsOpen2] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen2(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    //scroll - behaior
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <nav className="relative bg-white shadow-inner dark:bg-gray-600">
            <div className="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <img className="size-32 h-14 sm:h-14" src={logo} alt="Logo" />
                    </a>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-600 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-orange-400 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/">Home</a>
                        <a onClick={() => setIsOpen2(!isOpen)} className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-orange-400 dark:text-gray-200 dark:hover:text-blue-400  md:mx-4 md:my-0" href="#">Informacion</a>
                        <div className="relative inline-block" ref={dropdownRef}>

                            {/* Dropdown menu */}
                            {isOpen2 && (
                                <div
                                    className="absolute top-6 -right-10 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-500 border-gray-200"
                                >
                                    <div onClick={() => scrollToSection('section1')} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        Quienes somos
                                    </div>
                                    <div onClick={() =>scrollToSection('section2')} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        Mision
                                    </div>
                                    <div onClick={() =>scrollToSection('section3')} className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                        Vision
                                    </div>

                                </div>
                            )}
                        </div>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-orange-400 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/servicios">Servicios</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-orange-400 dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/contactanos">Contactanos</a>
                    </div>

                    <div className="flex justify-center md:block">
                        <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header