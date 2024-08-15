import { useState } from 'react';
import price from '../img/price-project.gif'
import imagen from '../img/DDC.png'

import { FaQuestion } from "react-icons/fa";

const SolarCalculator = () => {

    const [location, setLocation] = useState('');
    const [consumption, setConsumption] = useState('');
    const [panels, setPanels] = useState(0);
    const [cost, setCost] = useState(0);

    const handleCalculate = () => {
        // Ejemplo de factor de eficiencia basado en la ubicación
        const efficiencyFactor = location === 'desert' ? 1.2 : location === 'city' ? 1.0 : 0.8;
        const panelPower = 300; // Potencia por panel en watts
        const panelCost = 1000000; // Costo por panel en pesos colombianos

        const panelsNeeded = Math.ceil((consumption / 30) / (panelPower * efficiencyFactor));
        const totalCost = panelsNeeded * panelCost;

        setPanels(panelsNeeded);
        setCost(totalCost);
    };

    const [showTooltip, setShowTooltip] = useState(false);


    const regionesDeColombia = [
        'Amazonas' + '25.24',
        'Antioquia',
        'Arauca',
        'Atlántico',
        'Bolívar',
        'Boyacá',
        'Caldas',
        'Caquetá',
        'Casanare',
        'Cauca',
        'Cesar',
        'Chocó',
        'Córdoba',
        'Cundinamarca',
        'Guainía',
        'Guaviare',
        'Huila',
        'La Guajira',
        'Magdalena',
        'Meta',
        'Nariño',
        'Norte de Santander',
        'Putumayo',
        'Quindío',
        'Risaralda',
        'San Andrés y Providencia',
        'Santander',
        'Sucre',
        'Tolima',
        'Valle del Cauca',
        'Vaupés',
        'Vichada',
    ];


    return (

        <div className="lg:flex">

            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <div className='absolute lg:ml-12 lg:mt-64 w-[60vh] backdrop-blur-[3px] p-2'>

                    <h2 className="text-4xl font-bold text-black mb-2">
                        Hola <span className="text-orange-500">cliente 👋</span>
                    </h2>

                    <p className="text-black w-full rounded-3xl font-semibold text-justify text-lg">¿Estas igual que la imagen? <br /> Tranquilo, aqui tenemos una calculadora la cual se encargara de darnos valores fijos y precios accesibles para que cumplas tu deseo de instalar paneles solares en tu casa, trabajo o tierras.</p>
                </div>
                <img className="w-full h-full bg-cover shadow-2xl" src={price} alt="foto" />
            </div>


            <div className="flex items-center justify-center w-full  py-8 lg:h-[32rem] lg:w-1/2 bg-gray-600">
                <div className="w-full  p-5">
                    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl shadow-orange-200">
                        <h2 className="text-2xl font-bold mb-4">Calculadora de Paneles Solares</h2>
                        <div className="mb-4">
                            <label htmlFor="regiones" className="block text-sm font-medium text-gray-700">
                                Seleccione una región
                            </label>
                            <select
                                id="regiones"
                                name="regiones"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                {regionesDeColombia.map((region, index) => (
                                    <option key={index} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <div className='flex'>
                                <label className="block text-gray-700 mb-2" htmlFor="consumption">Consumo mensual (kWh) mes</label>
                                <button
                                    className="text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                >
                                    <FaQuestion className='size-5' />
                                </button>
                            </div>
                            {showTooltip &&
                                <>
                                    <p className="absolute py-3 px-3 text-center text-gray-600 translate-x-3/4 bg-white rounded-lg shadow-lg  left-2/4 dark:shadow-none shadow-gray-200 dark:bg-gray-800 dark:text-white">
                                        Aqui se explica lo que dijo wistin y el es cagasten
                                        <img src={imagen} alt="foto" className='h-40 w-full' />
                                    </p>
                                </>
                            }
                            <input
                                type="number"
                                id="consumption"
                                value={consumption}
                                onChange={(e) => setConsumption(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <button
                            onClick={handleCalculate}
                            className="w-full bg-blue-500 text-white p-2 rounded-md"
                        >
                            Calcular
                        </button>
                        {panels > 0 && (
                            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                                <p>Necesitarás aproximadamente {panels} paneles solares.</p>
                                <p>Costo estimado: COP {cost.toLocaleString()}.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SolarCalculator