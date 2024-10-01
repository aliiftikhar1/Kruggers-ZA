// components/Hero.js
export default function Hero() {
    return (
      <section className=" bg-gray-900 text-white py-20 flex h-[500px] items-center justify-center">
        {/* Red overlay shape or abstract element */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-red-600 opacity-50 skew-y-6 transform -rotate-6 -z-10"></div>
  
        <div className="container mx-auto text-center">
         
  
          <h1 className="text-6xl font-extrabold mb-4">
            Better Solutions for Better Experiences
          </h1>
          <p className="text-xl font-light mb-8 max-w-2xl mx-auto">
            High-quality gadget repairs, IT solutions, and accessories to meet your every need. Experience technology without the hassle.
          </p>
  
          <div className="space-x-4">
            <a
              href="#services"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-500 shadow-lg transition duration-300"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  }
  