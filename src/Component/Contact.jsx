import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <section className="min-h-screen bg-cover " style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
            }}>
                <div className="flex flex-col min-h-screen bg-black/60">
                    <div className="container flex flex-col flex-1 px-6 mx-auto">
                        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div className="text-white lg:w-1/2 lg:mx-6">
                                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Ultimate design solution</h1>

                                <p className="max-w-xl mt-6">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo
                                    aliquid molestiae hic incidunt beatae placeat accusantium! Alias ex quisquam ab tempora. Ratione
                                    autem doloremque ducimus numquam doloribus, error sed.
                                </p>


                                <h1 className="text-2xl font-semibold capitalize lg:text-3xl mt-5">Calcula tu sistema fotovoltaico</h1>

                                <p className="max-w-xl mt-6">
                                    Esta calculadora fotovoltaica maneja precios y variables aproximanda <br />
                                    que estan sujetas a un estudio especializado de ingeneria
                                </p>

                                <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                    <a href="/precio-paneles">Presione aqui para calcular 📊</a>
                                </button>


                            </div>

                            <div className="mt-8 lg:w-1/2 lg:mx-6">
                                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                    <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

                                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                                        Ask us everything and we would love
                                        to hear from you
                                    </p>

                                    <form className="mt-6">
                                        <div className="flex-1">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                            <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div className="w-full mt-6">
                                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                                        </div>

                                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                            get in touch
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" bg-black/60 mx-auto flex justify-center items-center ">
                    <div className="relative bottom-10">
                        <div className="flex mt-4 gap-10">
                            <a className=" text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                                <BsTwitterX className="size-6" />
                            </a>

                            <a className=" text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                                <FaFacebookF className="size-6" />
                            </a>

                            <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                                <FaLinkedinIn  className="size-7"/>
                            </a>

                            <a className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                                <FaInstagram className="size-7" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact