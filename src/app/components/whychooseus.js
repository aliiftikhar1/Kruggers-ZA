import { FaTools, FaMapMarkerAlt, FaHandsHelping, FaCog } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white h-[550px]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-10 px-10">
          {/* Expertise */}
          <div className="group relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaTools className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-blue-500 mb-2">Expertise</h3>
            <p className="text-gray-700">
              Our experienced technicians ensure high-quality repairs and IT services.
            </p>
          </div>

          {/* Convenience */}
          <div className="group relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-blue-500 mb-2">Convenience</h3>
            <p className="text-gray-700">
              Our locations are spread across Gauteng, Mpumalanga, and North West.
            </p>
          </div>

          {/* Customer-First Approach */}
          <div className="group relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaHandsHelping className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-blue-500 mb-2">Customer-First Approach</h3>
            <p className="text-gray-700">
              Your satisfaction is our top priority; we aim to make every experience smooth.
            </p>
          </div>

          {/* Comprehensive Solutions */}
          <div className="group relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaCog className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-2xl font-bold text-blue-500 mb-2">Comprehensive Solutions</h3>
            <p className="text-gray-700">
              We cover all aspects of your technology needs, from repairs to IT solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
