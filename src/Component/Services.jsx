import foto from '../img/ambientelimpio.jpg'
import { SlEnergy } from "react-icons/sl";
import { LiaUsersCogSolid } from "react-icons/lia";
import { PiBlueprint } from "react-icons/pi";

const Services = () => {
  return (
    <div>
 
      <section className="bg-gray-100 dark:bg-gray-700 ">

        <div className="flex flex-col w-full py-10 mb-4 ">
          <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
              Nuestro
            </span>

            <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-200 via-orange-500 to-red-500 dark:from-sky-300 dark:via-orange-300 dark:to-red-500">
              Servicios
            </span>
          </h1>
        </div>


        <div className="lg:flex">
          <div className="flex items-center justify-center w-full  py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl  p-5">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Estudios de <span className="text-orange-600 dark:text-blue-500">Conexion</span></h2>

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-200 lg:text- text-justify">
                Elaboramos los estudios eléctricos solicitados por Operadores de Red, Transportadores y la
                UPME para realizar la conexión de un nuevo proyecto que se desee conectar al Sistema
                Interconectado Nacional. El proyecto puede ser la conexión de un generador, una carga, una
                línea, etc. <br /> <br />
                Elaboramos los estudios de conexión simplificados solicitados por la CREG en su Resolución
                CREG 174 de 2021 para permitir la conexión de los proyectos de autogeneración a pequeña
                escala y generación distribuida
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row ml-10">
                <ul className="text-gray-500 dark:text-gray-200" style={{ listStyleType: 'disc' }}>
                  <li>Análisis de estado estable y contingencias.</li>
                  <li>Análisis de corto circuito</li>
                  <li>Análisis de estabilidad transitoria y dinámica</li>
                  <li>Información de demanda</li>
                  <li>Parámetros técnicos y eléctricos</li>
                  <li>Información de fallas e indisponibilidades</li>
                  <li> Estudio de disponibilidad de espacio físico</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <img className="w-full h-full bg-cover" src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80" alt="foto" />
          </div>
        </div>
      </section>



      <section className="bg-white dark:bg-gray-600">
        <div className="h-[32rem] bg-gray-100 dark:bg-gray-700">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">DISEÑO DE LÍNEAS AT Y REDES MT/BT</h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
              <span className="inline-block w-10 h-1 mx-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
              <span className="inline-block w-5 h-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
            </div>

            <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
              Determinamos por medio de la ingeniería básica y/o detallada, las características específicas que
              debe tener un proyecto orientadas a su óptima construcción.
            </p>
          </div>
        </div>

        <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col  p-4 border sm:p-6 rounded-xl dark:border-gray-500">
              <img className="object-cover w-full rounded-xl aspect-square size-72" src={foto} alt="" />

              <div className="flex mt-3 -mx-2">
                <ul className="text-gray-500 dark:text-gray-200 mx-10" style={{ listStyleType: 'disc' }}>
                  <li>Ingeniería de oferta para proyectos.</li>
                  <li>Prediseño.</li>
                  <li>Ingeniería básica y/o detalle</li>
                  <li>Selección de la ruta.</li>
                  <li>Selección de los conductores de fase y cables de guarda.</li>
                </ul>

              </div>
            </div>

            <div className="flex flex-col  p-4 border sm:p-6 rounded-xl dark:border-gray-500">
              <img className="object-cover w-full rounded-xl aspect-square size-72" src={foto} alt="" />

              <div className="flex mt-3 -mx-2">
                <ul className="text-gray-500 dark:text-gray-200 mx-10" style={{ listStyleType: 'disc' }}>
                  <li>Coordinación de aislamiento.</li>
                  <li> Diseño de puesta a tierra.</li>
                  <li>Plantillado y trazado.</li>
                  <li>Cálculo de árboles de carga.</li>
                  <li>Levantamiento topográfico.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col  p-4 border sm:p-6 rounded-xl dark:border-gray-500">
              <img className="object-cover w-full rounded-xl aspect-square size-72" src={foto} alt="" />

              <div className="flex mt-3 -mx-2">
                <ul className="text-gray-500 dark:text-gray-200 mx-10" style={{ listStyleType: 'disc' }}>
                  <li>Análisis de restricciones ambientales –ARA.</li>
                  <li>Diagnóstico ambiental de alternativas –DAA.</li>
                  <li>Estudios de impacton ambiental – EIA.</li>
                  <li>Estudios eléctricos.</li>
                  <li>Diseño de redes de distribución.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white dark:bg-gray-600">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-4 lg:w-1/2 ">

              <div>
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Desarollo de proyectos de energías renovable</h1>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4 border rounded-lg p-4 border-dashed">
                <span className="p-2 text-orange-500 dark:text-blue-500 bg-orange-100 dark:bg-blue-100 rounded-xl md:mx-4 md:mt-10 flex justify-center items-center">
                  <SlEnergy className='size-6' />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">

                  <ul className="text-gray-500 dark:text-gray-200 mx-10" style={{ listStyleType: 'disc' }}>
                    <li>Análisis de restricciones ambientales –ARA.</li>
                    <li>Diagnóstico ambiental de alternativas –DAA.</li>
                    <li>Estudios de impacton ambiental – EIA.</li>
                    <li>Estudios eléctricos.</li>
                    <li>Diseño de redes de distribución.</li>
                  </ul>

                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4 border rounded-lg p-4 border-dashed">
                <span className="p-2 text-orange-500 dark:text-blue-500 bg-orange-100 dark:bg-blue-100 rounded-xl md:mx-4 md:mt-10 flex justify-center items-center">
                  <SlEnergy className='size-6' />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">

                  <ul className="text-gray-500 dark:text-gray-200 mx-10" style={{ listStyleType: 'disc' }}>
                    <li>Análisis de restricciones ambientales –ARA.</li>
                    <li>Diagnóstico ambiental de alternativas –DAA.</li>
                    <li>Estudios de impacton ambiental – EIA.</li>
                    <li>Estudios eléctricos.</li>
                    <li>Diseño de redes de distribución.</li>
                  </ul>

                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4 border rounded-lg p-4 border-dashed">
                <span className="p-2 text-orange-500 dark:text-blue-500 bg-orange-100 dark:bg-blue-100 rounded-xl md:mx-4 md:mt-10 flex justify-center items-center">
                  <SlEnergy className='size-6' />
                </span>

                <div className="mt-2 md:mx-4 md:mt-0">

                  <ul className="text-gray-500 dark:text-gray-200 mx-10" style={{ listStyleType: 'disc' }}>
                    <li>Análisis de restricciones ambientales –ARA.</li>
                    <li>Diagnóstico ambiental de alternativas –DAA.</li>
                    <li>Estudios de impacton ambiental – EIA.</li>
                    <li>Estudios eléctricos.</li>
                    <li>Diseño de redes de distribución.</li>
                  </ul>

                </div>
              </div>
            </div>

            <div className="relative hidden lg:flex lg:items-center ml-20 lg:justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[32rem] h-[32rem] xl:w-[38rem] xl:h-[38rem] border-4 border-dashed border-orange-500 dark:border-blue-500 rounded-full animate-spin"></div>
              </div>
              <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full border-dashed" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt="" />
            </div>

          </div>

        </div>
      </section>

      <hr />

      <section className="bg-gradient-to-t from-gray-100 dark:bg-gray-600 dark:bg-gradient-to-t dark:from-gray-700">
        <div className="container px-6 pt-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">MEDICIONES Y OTROS SERVICIOS</h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-orange-500 dark:bg-blue-500  rounded-full"></span>
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
            <span className="inline-block w-5 h-1 bg-orange-500 dark:bg-blue-500 rounded-full"></span>
          </div>

        </div>

        <div className="container grid grid-cols-1 gap-4 px-4 py-12 mx-auto lg:grid-cols-2">

          <div className="w-full lg:w-[30rem] mx-auto">
            <div className=" md:items-start md:-mx-4 border rounded-lg p-4 border-dashed">
              <span className="p-2 text-orange-500 dark:text-blue-500 bg-orange-100 dark:bg-blue-100 rounded-xl md:mx-4 flex justify-center items-center">
                <LiaUsersCogSolid className='size-10' />
              </span>

              <div className="mt-2 md:mx-4 md:mt-0">

                <ul className="text-gray-500 dark:text-gray-200 mx-10" style={{ listStyleType: 'disc' }}>
                  <li>Resistividad del terreno</li>
                  <li>Resistencia de puesta a tierra</li>
                  <li>Termografía  -  Fotogrametría  -  Aislamiento</li>
                </ul>

              </div>
            </div>
          </div>

          <div className="w-full lg:w-[30rem] mx-auto">
            <div className=" md:items-start md:-mx-4 border rounded-lg p-4 border-dashed">
              <span className="p-2 text-orange-500 dark:text-blue-500 bg-orange-100 dark:bg-blue-100 rounded-xl md:mx-4  flex justify-center items-center">
                <PiBlueprint className='size-10 ' />
              </span>

              <div className="mt-2 md:mx-4 md:mt-0">

                <ul className="text-gray-500 dark:text-gray-200 mx-10" style={{ listStyleType: 'disc' }}>
                  <li>Revisión de la ingeniería básica.</li>
                  <li>Planos de disposición de equipos e instrumentos.</li>
                  <li>Sistemas eléctricos y sistemas de iluminación.</li>
                </ul>

              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="bg-gradient-to-b from-gray-100 dark:bg-gray-600 dark:bg-gradient-to-b dark:from-gray-700">
        <div className="container px-6 py-10 mx-auto">
          <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
              <h1 className="text-2xl text-orange-500 dark:text-blue-500 capitalize lg:text-3xl font-bold">DD&C S.A.S</h1>

              <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                Development, desing and construction, 
                sostenibilidad para el mundo, a través de procesos
              </p>
              <p className='bg-orange-200 w-[15rem] border border-orange-500 dark:bg-blue-200 dark:border-blue-500 rounded-2xl text-center mt-3 '>
              Barranquilla - Atlántico, {new Date().getFullYear()}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
              <div>
                <img className="object-cover rounded-xl aspect-square shadow-xl shadow-orange-200 dark:shadow-blue-200" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Ing. Andrés Noguera Silvera</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Gerente tecnico</p>
              </div>

              <div>
                <img className="object-cover rounded-xl aspect-square shadow-xl shadow-orange-200 dark:shadow-blue-200" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Ing. Kevin Gomez Sandoval</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Gerente comercial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services