import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">Contact Us</h2>
        <p className="text-lg mb-8 text-gray-700">Got a question or need assistance? We are here to help.</p>

        {/* 3-Column Layout with Stylish, Glassy Cards */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Email Section */}
          <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-8 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4 justify-center">
              <FaEnvelope className="text-5xl text-red-600" />
            </div>
            <h3 className="text-3xl font-semibold text-center text-gray-900 mb-4">Email Us</h3>
            <p className="text-center text-lg font-semibold text-gray-700">info@krugersza.co.za</p>
            <p className="text-center text-lg font-semibold text-gray-700">krugerszatrading@webmail.co.za</p>
          </div>

          {/* Phone Section */}
          <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-8 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4 justify-center">
              <FaPhone className="text-5xl text-red-600" />
            </div>
            <h3 className="text-3xl font-semibold text-center text-gray-900 mb-4">Call Us</h3>
            <p className="text-center text-lg font-semibold text-gray-700">Mobile: +27 84 2222 031</p>
            <p className="text-center text-lg font-semibold text-gray-700">Mobile: +27 78 9000 000</p>
            <p className="text-center text-lg font-semibold text-gray-700">Landline: +27 (11) 412-1768</p>
          </div>

          {/* Location Section */}
          <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-md p-8 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4 justify-center">
              <FaMapMarkerAlt className="text-5xl text-red-600" />
            </div>
            <h3 className="text-3xl font-semibold text-center text-gray-900 mb-4">Visit Our Office</h3>
            <p className="text-center text-lg font-semibold text-gray-700">Shop 3, Southern Circle,</p>
            <p className="text-center text-lg font-semibold text-gray-700">Greenhills, Gauteng, RSA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
