import { useState, useEffect, useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import '../style/style.css'
// import gifPanel from '../img/paneles.gif'
import loopPanel from '../img/loobpanel.gif'
import beneficio from '../img/beneficios.jpg'
import fotocarousel from '../img/fotocarousel.jpg'
import fotocarousel2 from '../img/fotocarousel2.jpg'
import fotocarousel3 from '../img/fotocarousel3.jpg'
import vision from '../img/vision.jpg'
import ambiente from '../img/ambientelimpio.jpg'


const Home = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            url: fotocarousel,
            text: 'Sostenibilidad y ahorro: la combinación perfecta con energías renovables',
            titulo: 'Sostenibilidad y Ahorro'
        },
        {
            url: fotocarousel2,
            text: 'Energía limpia, aire limpio. Elige renovables',
            titulo: 'Energía Limpia'
        },
        {
            url: fotocarousel3,
            text: 'La energía renovable es el futuro. Protejamos nuestro planeta hoy.',
            titulo: 'Futuro Sostenible'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Cambia cada 2 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, [images.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const [meses] = useState([
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ])

    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    const textVerMas = {
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-out',
        maxHeight: expanded ? '1000px' : '100px', // Cambia aquí el maxHeight según el estado
    };
    const textVerMas2 = {
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-out',
        maxHeight: expanded2 ? '1000px' : '60px', // Cambia aquí el maxHeight según el estado
    };


    const [project, setProject] = useState(0);

    const proyectos = [
        {
            foto: 'https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            text: '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
            nombre: 'proyecto 1',
            titulo: 'proyecto 1',
            autor: 'Andres'
        },
        {
            foto: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            text: '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
            nombre: 'proyecto 2',
            titulo: 'proyecto 2',
            autor: 'Yustin'
        },
        {
            foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            text: '3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
            nombre: 'proyecto 3',
            titulo: 'proyecto 3',
            autor: 'Helmun'
        },
        {
            foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            text: '4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
            nombre: 'proyecto 4',
            titulo: 'proyecto 4',
            autor: 'Esteban'
        },
        {
            foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            text: '5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.',
            nombre: 'proyecto 5',
            titulo: 'proyecto 5',
            autor: 'Valeria'
        }
    ];

    const siguiente = () => {
        setProject((prevIndex) => (prevIndex === 0 ? proyectos.length - 1 : prevIndex - 1));
    };

    const anterior = () => {
        setProject((prevIndex) => (prevIndex === proyectos.length - 1 ? 0 : prevIndex + 1));
    };




    ///////////////////////////////////////////////////////////////////

    const divRef1 = useRef(null);
    const divRef2 = useRef(null);
    const divRef3 = useRef(null);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === divRef1.current) {
                            setIsVisible1(true);
                        } else if (entry.target === divRef2.current) {
                            setIsVisible2(true);
                        } else if (entry.target === divRef3.current) {
                            setIsVisible3(true);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (divRef1.current) observer.observe(divRef1.current);
        if (divRef2.current) observer.observe(divRef2.current);
        if (divRef3.current) observer.observe(divRef3.current);

        return () => {
            if (divRef1.current) observer.unobserve(divRef1.current);
            if (divRef2.current) observer.unobserve(divRef2.current);
            if (divRef3.current) observer.unobserve(divRef3.current);
        };
    }, []);


    return (
        <div>

            {/* carousel */}
            <div className="border-y-4 border-orange-500 dark:border-blue-500">
                <div className="relative w-full mx-auto overflow-hidden ">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <img src={image.url} alt={`Slide ${index + 1}`} className="w-full h-[35rem] object-cover brightness-50" />
                                <div className="inset-0 flex items-center">
                                    <p className="absolute w-[60vh] text-white text-3xl md:text-4xl lg:text-5xl lg:mb-[80vh] lg:ml-[20vh] font-bold mb-[80vh] ml-[6vh]">{image.titulo}</p>
                                    <p className="absolute w-[40vh] text-white text-2xl lg:mb-[60vh] lg:ml-[20vh] mb-[60vh] ml-[6vh]">{image.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2  text-orange-500 dark:text-blue-500"><SlArrowLeft className="size-8" /></button>
                    <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2  text-orange-500 dark:text-blue-500"><SlArrowRight className="size-8" /></button>
                </div>
            </div>



            <section className="bg-gray-100 dark:bg-gray-600">
                <div className="container px-6 py-24 mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-3xl dark:text-white ">Informacion de importancia</h1>

                        <p className="max-w-lg mx-auto mt-4 text-gray-500 dark:text-white">
                            Alguna vez te has hecho estas preguntas, pues aqui te las respondemos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                        <div>
                            <img className="carousel relative z-10 object-cover w-full rounded-md h-96" src={ambiente} alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-800">
                                <a href="#" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    ¿Por qué es importante la energía renovable?
                                </a>

                                <p style={textVerMas2} className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm text-justify">
                                    La energía renovable es crucial para el futuro sostenible de nuestro planeta por varias razones.
                                    En primer lugar, reduce nuestra dependencia de los combustibles fósiles, que son finitos y contribuyen significativamente
                                    al cambio climático debido a sus emisiones de gases de efecto invernadero. Al utilizar fuentes renovables como la solar,
                                    eólica, hidroeléctrica y biomasa, disminuimos la emisión de contaminantes y ayudamos a mitigar los efectos del calentamiento global. <br /><br />

                                    Además, las energías renovables son inagotables, lo que significa que siempre estarán disponibles.
                                    Esto asegura una fuente constante de energía que puede satisfacer nuestras necesidades a largo plazo sin riesgo de agotamiento.

                                </p>

                                <div className="flex justify-between items-center">
                                    <b className="mt-3 text-sm text-orange-500 dark:text-blue-500">{new Date().getDate()} de {meses[new Date().getMonth()]} de {new Date().getFullYear()}</b>
                                    <b className="mt-3 pt-0 text-orange-500 dark:text-blue-500" onClick={() => setExpanded2(!expanded2)}>
                                        {expanded2 ? <button className="flex">Ver menos <MdKeyboardArrowUp className="size-3     animate-ping" /></button> : <button className="flex">Ver mas<MdKeyboardArrowDown className="size-3 animate-ping" /></button>}
                                    </b>

                                </div>
                            </div>
                        </div>

                        <div>
                            <img className="carousel relative z-10 object-fill w-full rounded-md h-96" src={beneficio} alt="" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-800">

                                <div style={textVerMas} className=" text-sm text-gray-500 dark:text-gray-300 md:text-sm text-justify">
                                    <ol type="A">
                                        <li>
                                            <b className="text-orange-500 dark:text-blue-500">Reducción de Emisiones de CO2:</b> Las energías renovables generan electricidad sin emitir dióxido de carbono (CO2), lo que ayuda a reducir la huella de carbono y a combatir el cambio climático.
                                        </li><br />
                                        <li>
                                            <b className="text-orange-500 dark:text-blue-500">Sostenibilidad:</b> Al utilizar recursos naturales como el sol, el viento y el agua, se garantiza una fuente de energía sostenible que no se agota con el tiempo.
                                        </li><br />
                                        <li>
                                            <b className="text-orange-500 dark:text-blue-500">Independencia Energética:</b> Los países pueden reducir su dependencia de la importación de combustibles fósiles, aumentando su seguridad energética y estabilidad económica.
                                        </li><br />
                                        <li>
                                            <b className="text-orange-500 dark:text-blue-500">Creación de Empleos:</b> El sector de las energías renovables genera numerosos empleos en áreas como la investigación, desarrollo, instalación y mantenimiento de tecnologías limpias.
                                        </li><br />
                                        <li>
                                            <b className="text-orange-500 dark:text-blue-500">Menor Contaminación:</b> Las energías renovables producen menos contaminación del aire y del agua en comparación con los combustibles fósiles, mejorando la calidad del aire y la salud pública.
                                        </li><br />
                                        <li>
                                            <b className="text-orange-500 dark:text-blue-500">Costos a Largo Plazo Reducidos:</b> Aunque la inversión inicial puede ser alta, los costos de operación y mantenimiento de las energías renovables son generalmente más bajos, lo que resulta en ahorros significativos a largo plazo.
                                        </li><br />
                                        <li>
                                            <b className="text-orange-500 dark:text-blue-500">Innovación y Desarrollo Tecnológico:</b>La transición a energías renovables fomenta la investigación y el desarrollo de nuevas tecnologías, impulsando la innovación y el progreso en múltiples sectores.
                                        </li>
                                    </ol>
                                </div>
                                <div className="flex justify-between items-center">
                                    <b className="mt-3 text-sm text-orange-500 dark:text-blue-500"></b>
                                    <b className="mt-3 pt-0 text-orange-500 dark:text-blue-500" onClick={() => setExpanded(!expanded)}>
                                        {expanded ? <button className="flex">Ver menos <MdKeyboardArrowUp className="size-3     animate-ping" /></button> : <button className="flex">Ver mas<MdKeyboardArrowDown className="size-3 animate-ping" /></button>}
                                    </b>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* informacion creadores */}

            <section className="bg-gray-100 dark:bg-gray-600">
                <div className="container px-6 py-10 mx-auto">
                    <div
                        ref={divRef1}
                        className={`box ${isVisible1 ? 'visible' : ''}`}>

                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Nuestro <span className="text-orange-500 dark:text-blue-500">equipo ejecutivo</span></h1>

                        <p className="max-w-4xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                            Nuestro equipo ejecutivo está compuesto por ingenieros de primer nivel, comprometidos y apasionados por la innovación y el progreso.
                            Cada uno de ellos aporta una riqueza de conocimientos y experiencia en tecnología y energías renovables, lo que nos permite enfrentar
                            desafíos complejos con soluciones creativas y eficientes.
                        </p>

                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-500 dark:hover:bg-blue-500 dark:border-gray-500 dark:hover:border-transparent">
                                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                    <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                    <div className="mt-4 sm:mx-4 sm:mt-0">
                                        <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Andres Noguera Silvera</h1>

                                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">CEO</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-500 text-justify dark:text-gray-300 group-hover:text-gray-300">
                                    Ingeniero eléctrico destacado por su profundo conocimiento en electricidad, electrónica y electromagnetismo.
                                    Ha trabajado en la generación y distribución de energía eléctrica y en el diseño de sistemas electrónicos innovadores.
                                    Su trabajo en tecnologías sostenibles ha sido fundamental para el desarrollo de energías renovables,
                                    contribuyendo a la eficiencia energética y la mitigación del cambio climático.
                                </p>

                                <div className="flex mt-4 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-500 dark:hover:bg-blue-500 dark:border-gray-500 dark:hover:border-transparent">
                                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                    <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                    <div className="mt-4 sm:mx-4 sm:mt-0">
                                        <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Justin Imitola Llanos</h1>

                                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Ingeniero Industrial</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-500 text-justify dark:text-gray-300 group-hover:text-gray-300">
                                    Ingeniero industrial reconocida por su habilidad para optimizar sistemas de producción y servicios.
                                    Con una sólida formación en ingeniería, administración y economía, ha mejorado la eficiencia y la calidad de los procesos en diversas industrias.
                                    Su enfoque en la mejora continua y la reducción de costos ha ayudado a muchas empresas a ser más competitivas.
                                </p>

                                <div className="flex mt-4 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-500 dark:hover:bg-blue-500 dark:border-gray-500 dark:hover:border-transparent">
                                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                    <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                    <div className="mt-4 sm:mx-4 sm:mt-0">
                                        <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Helmun Utria blanco</h1>

                                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Contador Experto</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-500 text-justify dark:text-gray-300 group-hover:text-gray-300">
                                    Contador excelente, conocido por su precisión y meticulosidad en la administración financiera.
                                    Su capacidad para llevar la contabilidad, gestionar registros financieros y preparar estados financieros ha sido crucial
                                    para las empresas con las que ha trabajado. También brinda asesoría en planificación fiscal y control de costos, asegurando
                                    el cumplimiento de normativas fiscales y legales.
                                </p>

                                <div className="flex mt-4 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-orange-500 dark:hover:bg-blue-500 dark:border-gray-500 dark:hover:border-transparent">
                                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                    <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                    <div className="mt-4 sm:mx-4 sm:mt-0">
                                        <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Esteban Silvera Scaldaferro</h1>

                                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Ingeniero Telematico</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-500 text-justify dark:text-gray-300 group-hover:text-gray-300">
                                    Ingeniero en telecomunicaciones destacada por su experiencia en diseñar, implementar y mantener sistemas de comunicación.
                                    Ha trabajado en infraestructuras de redes avanzadas y en el desarrollo de software de comunicación.
                                </p>

                                <div className="flex mt-4 -mx-2">
                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section className="bg-gray-100 dark:bg-gray-600">
                <div
                    ref={divRef2}
                    className={`box ${isVisible2 ? 'visible' : ''}`}>


                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Por que <span className="underline decoration-orange-500 dark:decoration-blue-500">Elegirnos</span></h1>

                        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                        </p>

                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                            <div className="p-8 space-y-3 border-2 border-orange-400 dark:border-blue-300 rounded-xl">
                                <span className="inline-block text-orange-500 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                                <p className="text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>

                                <a href="#" className="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:bg-orange-300 dark:hover:bg-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>

                            <div className="p-8 space-y-3 border-2 border-orange-400 dark:border-blue-300 rounded-xl">
                                <span className="inline-block text-orange-500 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Easy to customiztions</h1>

                                <p className="text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>

                                <a href="#" className="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:bg-orange-300 dark:hover:bg-blue-600">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>

                            <div className="p-8 space-y-3 border-2 border-orange-400 dark:border-blue-300 rounded-xl">
                                <span className="inline-block text-orange-500 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </span>

                                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                                <p className="text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>

                                <a href="#" className="inline-flex p-2 text-orange-500 capitalize transition-colors duration-300 transform bg-orange-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:bg-orange-300 dark:hover:bg-blue-600">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="bg-white dark:bg-gray-800">
                <div className="relative flex">
                    <div className="min-h-screen lg:w-1/3 "></div>
                    <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-600 lg:block"></div>

                    <div
                        ref={divRef3}
                        className={`box ${isVisible3 ? 'visible' : ''}`}>

                        <div
                            className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                                Algunos de nuestros <br /><span className="text-orange-500 dark:text-blue-500">Proyectos</span>
                            </h1>

                            <div className="relative w-full mx-auto overflow-hidden ">
                                <div className="flex transition-transform duration-500 ease-in-out " style={{ transform: `translateX(-${project * 100}%)` }}>
                                    {proyectos.map((proyecto, index) => (

                                        <div key={index} className="mt-10 lg:mt-20 lg:flex lg:items-center w-full flex-shrink-0">
                                            <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src={proyecto.foto} alt="" />

                                            <div className="mt-8 lg:px-10 lg:mt-0">
                                                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                                                    {proyecto.titulo}
                                                </h1>

                                                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                                                    {proyecto.text}
                                                </p>

                                                <h3 className="mt-6 text-lg font-medium text-orange-500 dark:text-blue-500">{proyecto.nombre}</h3>
                                                <p className="text-gray-600 dark:text-gray-300">Hecho por: {proyecto.autor}</p>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-12 lg:justify-start">
                                <button onClick={siguiente} title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button onClick={anterior} title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* vision, mision, quienes somos */}

            <section className="bg-white dark:bg-gray-800">

                <div className="max-w-6xl px-6 py-10 mx-auto">
                    <p className="text-xl font-medium text-orange-400 dark:text-blue-400 ">Informacion de la empresa</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800  lg:text-3xl dark:text-white">
                        Nuestra Identidad
                    </h1>
                </div>

                <main id="section1" className="bg-white dark:bg-gray-900 max-w-full">
                    <div className=" px-6 py-10 mx-auto  bg-orange-400 dark:bg-blue-400 shadow-2xl">

                        <div className=" lg:-mx-6 lg:flex lg:items-center">

                            <div className="mt-6  lg:mt-0 lg:mx-6 ">

                                <div className="mt-2 md:mx-6 ">
                                    <div>
                                        <p className="text-2xl lg:mx-64 font-medium tracking-tight text-white">Quienes somos</p>
                                    </div>

                                    <p className="mt-4 lg:mx-64 text-lg leading-relaxed text-white md:text-xl text-justify md:mx-auto"> Somos una empresa especializada en Servicios Energéticos que utiliza Fuentes No Convencionales de Energía Renovable. Nos destacamos en la autogeneración de energía y la eficiencia energética para clientes industriales, comerciales e institucionales. Nuestro enfoque se centra en desarrollar soluciones que permiten a nuestros clientes lograr ahorros significativos en costos de energía, al mismo tiempo que reducen el impacto ambiental de sus operaciones. Estamos comprometidos con liderar el cambio hacia un futuro energético más sostenible y eficiente.</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </main>

                <div id="section2" className="max-w-6xl px-6 py-10 mx-auto">

                    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                        <div className="absolute w-full bg-orange-400 dark:bg-blue-400 -z-10 md:h-96 rounded-2xl shadow-2xl"></div>

                        <div className="w-full p-6 bg-orange-400 dark:bg-blue-400 md:flex md:items-center rounded-2xl md:bg-transparent dark:md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                            <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={loopPanel} alt="client photo" />

                            <div className="mt-2 md:mx-6">
                                <div>
                                    <p className="text-2xl font-medium tracking-tight text-white">Mision</p>
                                </div>

                                <p className="mt-4 text-lg leading-relaxed text-white md:text-xl text-justify">Nos dedicamos a proporcionar soluciones energéticas avanzadas y sostenibles mediante el uso de Fuentes No Convencionales de Energía Renovable. Nos enfocamos en mejorar la eficiencia energética y promover la autogeneración de energía para clientes en los sectores industrial, comercial e institucional. Nuestra misión es ayudar a nuestros clientes a reducir significativamente sus costos energéticos y minimizar el impacto ambiental de sus operaciones.</p>

                            </div>
                        </div>
                    </main>

                    <main id="section3" className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                        <div className="absolute w-full bg-orange-400 dark:bg-blue-400 -z-10 md:h-96 rounded-2xl shadow-2xl"></div>

                        <div className="w-full p-6 bg-orange-400 dark:bg-blue-400  md:flex md:items-center rounded-2xl md:bg-transparent dark:md:bg-transparent  md:p-0 lg:px-12 md:justify-evenly flex-row-reverse">

                            <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={vision} alt="client photo" />

                            <div className="mt-2 md:mx-6">
                                <div>
                                    <p className="text-2xl font-medium tracking-tight text-white">Vision</p>
                                </div>

                                <p className="mt-4 text-lg leading-relaxed text-white md:text-xl text-justify"> Nos vemos como líderes en la transformación del consumo energético empresarial hacia modelos más sostenibles. Aspiramos a ser reconocidos por nuestro impacto positivo en el medio ambiente y por contribuir a un futuro energético más limpio y seguro para las próximas generaciones.</p>

                            </div>
                        </div>
                    </main>
                </div>

            </section>


            <section className="bg-white dark:bg-gray-800">
                <div className="relative flex flex-row-reverse">
                    <div className="min-h-screen lg:w-1/3 "></div>
                    <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-600 lg:block"></div>

                    <div
                        className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0 ">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Quieres ponerte en <span className="text-orange-500 dark:text-blue-500">Contacto</span> <br /> con nosotros?
                            <div className="flex mx-auto mt-6">
                                <span className="inline-block w-40 h-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
                            </div>
                        </h1>

                        <div className="mt-10 lg:mt-20 lg:flex lg:justify-between lg:items-center flex-row-reverse mx-auto">
                            <section className="bg-white dark:bg-gray-800 rounded-3xl">
                                <div className="container px-6 py-12 mx-auto">
                                    <div className="text-center">

                                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Ponte en contacto 👀</h1>

                                        <p className="mt-3 text-gray-500 dark:text-gray-400">Estas son algunas de las maneras de contactarnos</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                                        <div className="flex flex-col items-center justify-center text-center">
                                            <span className="p-3 text-orange-500 dark:text-blue-500 rounded-full bg-orange-100/80 dark:bg-blue-100/80">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                            </span>

                                            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                                            <p className="mt-2 text-gray-500 dark:text-gray-400">Para colocarte en contacto via correo</p>
                                            <p className="mt-2 text-orange-500 dark:text-blue-500">contact@ddc.co</p>
                                        </div>

                                        <div className="flex flex-col items-center justify-center text-center">
                                            <span className="p-3 text-orange-500 dark:text-blue-500 rounded-full bg-orange-100/80 dark:bg-blue-100/80">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                            </span>

                                            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Oficina</h2>
                                            <p className="mt-2 text-gray-500 dark:text-gray-400">Si quieres contacto directo</p>
                                            <p className="mt-2 text-orange-500 dark:text-blue-500">Calle 13 #19c - 26</p>
                                        </div>

                                        <div className="flex flex-col items-center justify-center text-center">
                                            <span className="p-3 text-orange-500 dark:text-blue-500 rounded-full bg-orange-100/80 dark:bg-blue-100/80">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                            </span>

                                            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Celular</h2>
                                            <p className="mt-2 text-gray-500 dark:text-gray-400">Lunes-Domingos from 8am to 5pm.</p>
                                            <p className="mt-2 text-orange-500 dark:text-blue-500">+57 (301) 253-0802</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </section>




        </div>
    )
}

export default Home