import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';

const Mission = () => {
  return (
     <section id="mission" className="py-12 bg-gray-50 rounded-2xl my-8 p-8">
	    <div className="text-center mb-12">
	      <h2 className="text-3xl font-bold mb-4">Our <span className="text-green-600">Mission</span></h2>
			<p className="text-gray-600 font-semibold max-w-3xl mx-auto">
				At SNL Energy Solutions, we empower underserved communities in Northeast India by integrating clean, decentralized renewable energy into essential services. From powering rural health centers to enabling sustainable livelihoods, we co-create long-lasting impact by placing people, resilience, and local innovation at the heart of our solutions.
			</p>
	    </div>
	    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
	      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
	        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
	          <span className="material-symbols-outlined text-yellow-500 text-2xl">emoji_objects</span>
	        </div>
	        <h3 className="text-xl font-semibold mb-2">Sustainable Livelihoods</h3>
	        <p className="text-gray-600">Enabling economic opportunities through reliable energy access for local businesses and artisans.</p>
	      </div>
	      <div  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
	        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
	          <span className="material-symbols-outlined text-green-500 text-2xl">ecg_heart</span>
	        </div>
	        <h3 className="text-xl font-semibold mb-2">Healthcare Access</h3>
	        <p className="text-gray-600">Powering rural health centers to ensure essential medical services are available 24/7.</p>
	      </div>
	      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
	        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
	          <span className="material-symbols-outlined text-blue-500 text-2xl">eco</span>
	        </div>
	        <h3 className="text-xl font-semibold mb-2">Clean Energy</h3>
	        <p className="text-gray-600">Implementing decentralized renewable energy solutions that are sustainable and environmentally friendly.</p>
	      </div>
	    </div>
	    {/* Next: "Add company history timeline" */}
	  </section>
  )
}

export default Mission