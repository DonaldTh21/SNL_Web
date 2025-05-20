import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
     <section id="home" className="py-12 md:py-20">
	    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
	      <div className="order-2 md:order-1">
	        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Harness the <span  className="text-yellow-500">Power of the Sun</span> for Your Home</h1>
	        <p  className="text-gray-600 mb-8">SNL Energy Solution provides cutting-edge solar solutions that help you save money while protecting our planet. Join thousands of satisfied customers who have made the switch to clean energy.</p>
	        <div className="flex flex-col sm:flex-row gap-4">
	          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105">
	            Get Started
	          </button>
	          <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center">
	            <span className="material-symbols-outlined mr-2">play_circle</span>
	            Watch Video
	          </button>
	        </div>
	      </div>
	      <div className="order-1 md:order-2">
	        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Solar panels on modern home roof" className="rounded-xl shadow-lg w-full h-auto transform hover:scale-[1.02] transition-transform duration-300" keywords="solar panels, home solar installation, renewable energy, green energy" />
	      </div>
	    </div>
	    {/* Next: "Add animated statistics counter section" */}
	  </section>
  )
}

export default Home