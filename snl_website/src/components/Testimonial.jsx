import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-12">
	    <div className="text-center mb-12">
	      <h2 className="text-3xl font-bold mb-4">What Our <span className="text-primary-600">Clients Say</span></h2>
	      <p className="text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. Hear from our satisfied customers about their solar journey with us.</p>
	    </div>
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
	        <div className="flex items-center mb-4">
	          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
	            <span className="material-symbols-outlined">person</span>
	          </div>
	          <div>
	            <h4 className="font-semibold">Sarah Johnson</h4>
	            <p className="text-gray-500 text-sm">Homeowner</p>
	          </div>
	        </div>
	        <div className="mb-4 flex">
	          {[...Array(5)].map((_, i) => (
	            <span key={i} className="text-yellow-400 material-symbols-outlined text-lg">star</span>
	          ))}
	        </div>
	        <p className="text-gray-600 italic">"SNL Energy Solution transformed our home's energy consumption. The installation was quick and professional, and we're saving over $200 per month on our electricity bills!"</p>
	      </div>
	      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
	        <div className="flex items-center mb-4">
	          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
	            <span className="material-symbols-outlined">person</span>
	          </div>
	          <div>
	            <h4  className="font-semibold">Michael Rodriguez</h4>
	            <p className="text-gray-500 text-sm">Business Owner</p>
	          </div>
	        </div>
	        <div className="mb-4 flex">
	          {[...Array(5)].map((_, i) => (
	            <span key={i} className="text-yellow-400 material-symbols-outlined text-lg">star</span>
	          ))}
	        </div>
	        <p className="text-gray-600 italic">"As a small business owner, I was skeptical about the investment, but SNL Energy Solution made the process seamless. The ROI has been fantastic, and the system paid for itself faster than expected."</p>
	      </div>
	      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
	        <div className="flex items-center mb-4">
	          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
	            <span className="material-symbols-outlined">person</span>
	          </div>
	          <div>
	            <h4 className="font-semibold">Emily Chen</h4>
	            <p className="text-gray-500 text-sm">Property Manager</p>
	          </div>
	        </div>
	        <div className="mb-4 flex">
	          {[...Array(4)].map((_, i) => (
	            <span key={i} className="text-yellow-400 material-symbols-outlined text-lg">star</span>
	          ))}
	          <span className="text-yellow-400 material-symbols-outlined text-lg">star_half</span>
	        </div>
	        <p className="text-gray-600 italic">"We installed solar panels on multiple properties in our portfolio, and SNL Energy Solution has been an excellent partner. Their maintenance team is responsive and keeps our systems running optimally."</p>
	      </div>
	    </div>
	    {/* Next: "Add testimonial slider with pagination" */}
	  </section>
  )
}

export default Testimonial