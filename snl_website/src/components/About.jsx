import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
     <section id="about" className="py-12 bg-gray-50 rounded-2xl my-8 p-8">
	    <div className="text-center mb-12">
	      <h2 className="text-3xl font-bold mb-4">Why Choose <span className="text-primary-600">SNL</span>?</h2>
	      <p className="text-gray-600 max-w-3xl mx-auto">With over 6 years of experience in the solar industry, we deliver reliable and efficient renewable energy solutions that meet your specific needs.</p>
	    </div>
	    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
	      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
	        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
	          <span className="material-symbols-outlined text-yellow-500 text-2xl">landscape</span>
	        </div>
	        <h3 className="text-xl font-semibold mb-2">Eco-Friendly Solutions</h3>
	        <p className="text-gray-600">Reduce your carbon footprint and contribute to a greener planet with our sustainable energy solutions.</p>
	      </div>
	      <div  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
	        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
	          <span className="material-symbols-outlined text-green-500 text-2xl">savings</span>
	        </div>
	        <h3 className="text-xl font-semibold mb-2">Save on Energy Bills</h3>
	        <p className="text-gray-600">Significantly reduce your monthly energy costs with efficient solar panels that pay for themselves over time.</p>
	      </div>
	      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
	        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
	          <span className="material-symbols-outlined text-blue-500 text-2xl">support_agent</span>
	        </div>
	        <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
	        <p className="text-gray-600">Our team of certified professionals provides ongoing support and maintenance for all our installations.</p>
	      </div>
	    </div>
	    {/* Next: "Add company history timeline" */}
	  </section>
  )
}

export default About