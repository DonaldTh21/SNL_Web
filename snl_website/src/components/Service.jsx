import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';

const Service = () => {
  return (
   	  <section id="services" className="py-12">
	    <div  className="text-center mb-12">
	      <h2 className="text-3xl font-bold mb-4">Our <span className="text-primary-600">Services</span></h2>
	      <p className="text-gray-600 max-w-3xl mx-auto">We offer comprehensive solar solutions tailored to residential, commercial, and industrial needs.</p>
	    </div>
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
	        <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Residential solar installation" className="w-full h-48 object-cover" keywords="residential solar, home solar panels, solar energy home" />
	        <div className="p-6">
	          <h3 className="text-xl font-semibold mb-2">Residential Solar</h3>
	          <p className="text-gray-600 mb-4">Custom solar solutions for homes of all sizes, helping families reduce their energy bills while increasing property value.</p>
	          <a href="#residential" className="text-primary-600 font-medium flex items-center hover:underline">
	            Learn More
	            <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
	          </a>
	        </div>
	      </div>
	      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
	        <img src="https://images.unsplash.com/photo-1713544123580-12096cc9eb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc29sYXJ8ZW58MHx8fHwxNzQ3NzIxNzkzfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Commercial solar installation" className="w-full h-48 object-cover" keywords="commercial solar, business solar panels, commercial renewable energy" />
	        <div className="p-6">
	          <h3 className="text-xl font-semibold mb-2">Commercial Solar</h3>
	          <p  className="text-gray-600 mb-4">Powerful solar systems for businesses and commercial properties, designed to maximize energy efficiency and ROI.</p>
	          <a href="#commercial" className="text-primary-600 font-medium flex items-center hover:underline">
	            Learn More
	            <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
	          </a>
	        </div>
	      </div>
	      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
	        <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGJhdHRlcnl8ZW58MHx8fHwxNzQ3NzIxODA2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Solar battery storage system" className="w-full h-48 object-cover" keywords="solar battery, energy storage, solar power storage" />
	        <div className="p-6">
	          <h3 className="text-xl font-semibold mb-2">Battery Storage</h3>
	          <p className="text-gray-600 mb-4">Advanced battery systems that store excess solar energy for use during peak hours or power outages.</p>
	          <a href="#battery" className="text-primary-600 font-medium flex items-center hover:underline">
	            Learn More
	            <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
	          </a>
	        </div>
	      </div>
	    </div>
	    {/* Next: "Add service request form" */}
	  </section>
  )
}

export default Service