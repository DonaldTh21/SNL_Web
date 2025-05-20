import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';

const Project = () => {
  return (
      <section id="projects" className="py-12 bg-gray-50 rounded-2xl my-8 p-8">
	    <div className="text-center mb-12">
	      <h2 className="text-3xl font-bold mb-4">Our <span className="text-primary-600">Projects</span></h2>
	      <p className="text-gray-600 max-w-3xl mx-auto">Explore some of our recent solar installations and success stories.</p>
	    </div>
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	      <div className="group relative overflow-hidden rounded-xl shadow-md">
	        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Modern home with solar panels" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" keywords="modern home solar, residential solar panels, luxury home solar" />
	        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
	          <h3 className="text-white text-xl font-semibold">Hillside Residence</h3>
	          <p className="text-gray-200">15kW system powering a modern family home</p>
	        </div>
	      </div>
	      <div className="group relative overflow-hidden rounded-xl shadow-md">
	        <img src="https://images.unsplash.com/photo-1481026469463-66327c86e544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhcnxlbnwwfHx8fDE3NDc3MjE4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Commercial building with solar array" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" keywords="commercial building solar, business solar installation, solar office building" />
	        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
	          <h3  className="text-white text-xl font-semibold">Metro Office Complex</h3>
	          <p className="text-gray-200">200kW commercial installation with battery storage</p>
	        </div>
	      </div>
	      <div className="group relative overflow-hidden rounded-xl shadow-md">
	        <img  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm18ZW58MHx8fHwxNzQ3NzIxODM4fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Solar farm installation" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" keywords="solar farm, solar power plant, large scale solar" />
	        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
	          <h3 className="text-white text-xl font-semibold">Sunvalley Solar Farm</h3>
	          <p className="text-gray-200">5MW utility-scale installation powering 1,200 homes</p>
	        </div>
	      </div>
	    </div>
	    <div className="text-center mt-10">
	      <button className="px-8 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all">
	        View All Projects
	      </button>
	    </div>
	    {/* Next: "Add project details modal popup" */}
	  </section>
  )
}

export default Project