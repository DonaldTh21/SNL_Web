import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
     <section id="contact" className="py-12">
	    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
	      <div>
	        <h2 className="text-3xl font-bold mb-4">Get in <span className="text-primary-600">Touch</span></h2>
	        <p className="text-gray-600 mb-6">Ready to start your solar journey? Contact us today for a free consultation and quote.</p>
	        <div className="space-y-4">
	          <div className="flex items-center">
	            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
	              <span className="material-symbols-outlined text-primary-600">location_on</span>
	            </div>
	            <p>Thoubal, IN 795138</p>
	          </div>
	          <div className="flex items-center">
	            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
	              <span className="material-symbols-outlined text-primary-600">phone</span>
	            </div>
	            <p>7005615168</p>
	          </div>
	          <div className="flex items-center">
	            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
	              <span className="material-symbols-outlined text-primary-600">email</span>
	            </div>
	            <p>info@snlenergysolutions.com</p>
	          </div>
	        </div>
	        <div className="mt-8 flex space-x-4">
	          <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
	            <i className="fa-brands fa-facebook-f"></i>
	          </a>
	          <a href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
	            <i className="fa-brands fa-twitter"></i>
	          </a>
	          <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors">
	            <i className="fa-brands fa-instagram"></i>
	          </a>
	          <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
	            <i  className="fa-brands fa-linkedin-in"></i>
	          </a>
	        </div>
	      </div>
	      <div className="bg-white rounded-xl shadow-sm p-6">
	        <h3 className="text-xl font-semibold mb-4">Request a Free Quote</h3>
	        <form>
	          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
	            <div>
	              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
	              <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
	            </div>
	            <div>
	              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
	              <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
	            </div>
	          </div>
	          <div className="mb-4">
	            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
	            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
	          </div>
	          <div className="mb-4">
	            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
	            <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" />
	          </div>
	          <div className="mb-4">
	            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
	            <select id="projectType" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all">
	              <option value="">Select an option</option>
	              <option value="residential">Residential Solar</option>
	              <option value="commercial">Commercial Solar</option>
	              <option value="battery">Battery Storage</option>
	              <option value="maintenance">Maintenance & Repair</option>
	            </select>
	          </div>
	          <div className="mb-4">
	            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
	            <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"></textarea>
	          </div>
	          <button type="submit" className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-[1.02]">
	            Submit Request
	          </button>
	        </form>
	      </div>
	    </div>
	    {/* Next: "Add live chat support widget" */}
	  </section>
  )
}

export default Contact