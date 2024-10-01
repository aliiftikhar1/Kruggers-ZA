import React from "react"
import Header from "./components/header"
import Hero from "./components/herosection"
import About from "./components/abouts"
import Services from "./components/services"
import WhyChooseUs from "./components/whychooseus"
import Testimonials from "./components/testimonial"
import Contact from "./components/contactus"
export default function Home(){
  return(
    <>
    <Header/>
    <div className="h-20"></div>
    <Hero/>
    <About/>
    <Services/>
    <WhyChooseUs/>
    <Testimonials/>
    <Contact/>
    </>
  )
}