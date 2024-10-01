// components/About.js
export default function About() {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">About Us</h2>
  
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              Krugers ZA is dedicated to delivering cutting-edge technology services with a customer-first approach.
              We make technology accessible by simplifying complex solutions and offering expert repairs for gadgets,
              IT solutions, and communications services.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold text-red-600 mb-4">Our Vision</h3>
              <p className="italic text-lg text-gray-700">
                "Better solutions, for better client experiences. At all times."
              </p>
            </div>
  
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold text-red-600 mb-4">Our Mission</h3>
              <p className="italic text-lg text-gray-700">
                "Serving each and every client, each and every time, satisfactorily."
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  