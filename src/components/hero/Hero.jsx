import { ArrowRight } from 'lucide-react'
import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className="hero p-5 md:p-20 mt-8 min-h-screen flex flex-column items-center justify-center text-center">
        <div className="row">
            <div className="col-md-8">
                <h1 className="text-3xl sm:text-4xl md:text-6xl leading-[1.5] text-white font-bold">Transform Complex Material Data into Reliable Intelligence</h1>
                <h2 className="text-xl/8 md:text-2xl/8 mt-3 text-gray-300"> Trusted partner in data enrichment, classification, and governance for global supply chains, hospitals, and manufacturers.</h2>
               <div className="flex justify-center gap-1 md:gap-4 flex-wrap mt-4 md:mt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-4 md:w-auto w-full">
               Request a Demo
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
               <button className="bg-gray-100 hover:bg-gray-700 text-gray-900 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-4 md:w-auto w-full">
                Send Sample Data
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Hero