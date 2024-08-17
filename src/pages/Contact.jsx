import React from 'react'
import ContactImage from '../assets/Contacto.jpg';
const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 mt-12">
      {/*<div className='py-20 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact</h2>
      </div>*/}

      {/* Imagen representativa */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={ContactImage} 
          alt="Contact Us"
          className="w-full max-w-md h-auto rounded-lg shadow-lg"
        />
      </div>
      
      {/* Formulario de contacto */}
      <div className="md:w-1/2 md:ml-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contáctanos</h2>
        <form className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe tu mensaje"
              rows="5"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact