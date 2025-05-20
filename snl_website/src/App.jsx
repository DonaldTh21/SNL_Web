import React from 'react'
import icon from './assets/SNL_Logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
   <div id="webcrumbs"> 
        	<div className=" p-6 font-sans">
	  <header className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-gray-200">
	    <div className="flex items-center space-x-2">
        <img src={icon} alt="SNL" className="w-10 h-10" />
	      <span  className="text-green-500 text-3xl font-bold">SNL</span>
	      <h1 className="text-2xl text-green-900 font-semibold">Energy Solution</h1>
	    </div>
	    <nav className="mt-4 md:mt-0">
	      <ul className="flex flex-wrap justify-center space-x-1 md:space-x-6">
	        <li><a href="#home" className="px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all">Home</a></li>
	        <li ><a href="#about" className="px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all">About Us</a></li>
	        <li><a  href="#services" className="px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all">Services</a></li>
	        <li><a href="#projects" className="px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all">Projects</a></li>
	        <li><a href="#testimonials" className="px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all">Testimonials</a></li>
	        <li><a  href="#contact" className="px-3 py-2 rounded-lg hover:bg-yellow-50 transition-all">Contact</a></li>
	      </ul>
	    </nav>
	    <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-primary-700 transition-all transform hover:scale-105">
	      Get a Quote
	    </button>
	    {/* Next: "Add dropdown menu for mobile view" */}
	  </header>
	
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
	
	  <section id="contact" className="py-12 bg-gray-50 rounded-2xl my-8 p-8">
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
	            <p>info@snlenergysolution.com</p>
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
	
	  <footer className="py-8 border-t border-gray-200 mt-8">
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
	      <div>
	        <div className="flex items-center space-x-2 mb-4">
	          <img src={icon} alt="SNL" className="w-10 h-10" />
	          <h3 className="text-xl font-bold text-green-600">SNL <span className='text-xl font-bold text-green-900'>Energy</span></h3>
	        </div>
	        <p className="text-gray-600 mb-4">Powering a sustainable future with innovative solar solutions since 2019.</p>
	      </div>
	      <div>
	        <h4 className="font-semibold mb-4">Quick Links</h4>
	        <ul className="space-y-2">
	          <li><a  href="#home" className="text-gray-600 hover:text-primary-600 transition-colors">Home</a></li>
	          <li><a  href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About Us</a></li>
	          <li><a href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">Services</a></li>
	          <li><a href="#projects" className="text-gray-600 hover:text-primary-600 transition-colors">Projects</a></li>
	          <li><a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a></li>
	        </ul>
	      </div>
	      <div>
	        <h4 className="font-semibold mb-4">Services</h4>
	        <ul className="space-y-2">
	          <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Residential Solar</a></li>
	          <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Commercial Solar</a></li>
	          <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Battery Storage</a></li>
	          <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">System Maintenance</a></li>
	          <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Energy Consulting</a></li>
	        </ul>
	      </div>
	      <div>
	        <h4 className="font-semibold mb-4">Newsletter</h4>
	        <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
	        <form className="flex">
	          <input type="email" placeholder="Your email address" className="px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all flex-grow" />
	          <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 transition-all">
	            <span className="material-symbols-outlined">send</span>
	          </button>
	        </form>
	      </div>
	    </div>
	    <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
	      <p className="text-gray-600 text-sm">© 2025 SNL Energy Solution. All rights reserved.</p>
	      <div className="flex space-x-6 mt-4 md:mt-0">
	        <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</a>
	        <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</a>
	        <a  href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Sitemap</a>
	      </div>
	    </div>
	    {/* Next: "Add back to top button" */}
	  </footer>
	</div> 
        </div>
  )
}

export default App