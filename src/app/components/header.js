import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Header(){
    return(
        <>
        <div className="h-20 fixed z-20 bg-white w-full flex justify-between items-center px-8 text-lg border-b-2 ">
            <div className="flex space-x-4 justify-start items-center">
                <img src="/krugger_logo.jpg" className="w-16 h-16"></img>
                <h1 className="text-4xl font-extrabold">Krugers ZA</h1>
            </div>
            <div className="flex space-x-8 ">
                <a href="/" className="hover:scale-105">
                    Home
                </a>
                <a href="/pages/Services" className="hover:scale-105">
                    Services
                </a>
                <a href="/pages/ContactUs" className="hover:scale-105">
                    Contact Us
                </a>
                <a href="/pages/AboutUs" className="hover:scale-105">
                    About Us
                </a>
            </div>
            <div className="flex space-x-4 text-xl">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
        </div>
        </>
    )
}