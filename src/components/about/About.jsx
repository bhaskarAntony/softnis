import { ArrowRight } from 'lucide-react'
import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about p-5 md:p-20 mt-8 grid grid-cols-1">
       <div>
         <h1 className="text-3xl sm:text-2xl md:text-4xl leading-[1.5] text-blue-100 font-bold">About SoftNis </h1>
                <p className="text-xl/8 md:text-1xl mt-3 text-gray-300"> SoftNis is a trusted expert in Material Master Data Cleansing, Enrichment, and Classification. With over 12 years of experience, we help organizations streamline their eProcurement, ERP, and supply chain systems through accurate, standardized, and searchable data. </p>
               <div className="mt-6">
                 <Link to="/aboutus" className=" bg-gray-100 hover:bg-gray-700 text-gray-900 font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mt-10">
                Send Sample Data
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </Link>
               </div>
       </div>
    </section>
  )
}

export default About