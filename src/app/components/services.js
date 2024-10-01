// components/Services.js
import { FaWrench, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10 px-10">
          {/* Gadget Repairs */}
          <div className="group relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg transition-all transform hover:rotate-6 hover:scale-105 duration-500 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 opacity-20 rounded-lg"></div>
            <div className="relative z-10">
              <FaWrench className="text-red-600 text-5xl mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-red-600">Gadget Repairs</h3>
              <p className="text-gray-700">
                From cellphones to laptops, we repair your gadgets quickly and efficiently.
              </p>
            </div>
          </div>

          {/* IT & Communication Solutions */}
          <div className="group relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg transition-all transform hover:rotate-6 hover:scale-105 duration-500 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-20 rounded-lg"></div>
            <div className="relative z-10">
              <FaLaptopCode className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-blue-600">IT & Communication Solutions</h3>
              <p className="text-gray-700">
                Get reliable software and hardware solutions tailored to your business needs.
              </p>
            </div>
          </div>

          {/* Accessories & Gadgets */}
          <div className="group relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg transition-all transform hover:rotate-6 hover:scale-105 duration-500 ease-in-out">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-20 rounded-lg"></div>
            <div className="relative z-10">
              <FaMobileAlt className="text-green-600 text-5xl mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-green-600">Accessories & Gadgets</h3>
              <p className="text-gray-700">
                We offer a variety of high-quality accessories and gadgets both onsite and offsite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
