import './tailwind.css'
import React from 'react';
import { Briefcase, Cloud, Shield, Code, Rocket, Award } from 'lucide-react'; // Importing icons from lucide-react
import ContactSection from './Contanct';


// Main App component
function App() {
  // Dummy data for projects
  const projects = [
    {
      id: 1,
      name: 'Enterprise CRM System',
      description: 'Developed a highly customizable CRM solution to streamline sales processes and enhance customer relations for a large enterprise client.',
      image: 'https://miro.medium.com/v2/resize:fit:1200/0*BmLKgrU_qFtakYsB.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 2,
      name: 'AI-Powered Analytics Dashboard',
      description: 'Built an intuitive dashboard with AI-driven insights to help a retail company understand customer behavior and optimize marketing campaigns.',
      image: 'https://media.licdn.com/dms/image/v2/D5612AQGz_l-aYY_nlg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1706850719554?e=2147483647&v=beta&t=RvOo7oRffcinanTxc8rLeHyS4Kx39XyYxEw6gA0z1mM',
      technologies: ['Python', 'TensorFlow', 'Vue.js'],
      link: '#',
    },
    {
      id: 3,
      name: 'Secure Blockchain Integration',
      description: 'Implemented a secure blockchain solution for a logistics company to enhance supply chain transparency and traceability.',
      image: 'https://coincentral.com/wp-content/uploads/2017/08/ethereum.png',
      technologies: ['Solidity', 'Ethereum', 'Web3.js'],
      link: '#',
    },
    {
      id: 4,
      name: 'Mobile App Development',
      description: 'Designed and developed a cross-platform mobile application for a fitness startup, featuring personalized workout plans.',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*Y1CtTk-L-6TG8oY495BDqA.png',
      technologies: ['Flutter', 'Firebase'],
      link: '#',
    },
    {
      id: 5,
      name: 'E-commerce Platform Revamp',
      description: 'Revitalized an existing e-commerce platform, improving user experience, performance, and integrating new payment gateways.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Q74avUHxrEE_IrqCZhxT5aC0xj3RJuejjQ&s',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 6,
      name: 'Data Migration & Cloud Setup',
      description: 'Assisted a financial institution in migrating legacy data to a secure cloud infrastructure, ensuring minimal downtime and data integrity.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMG6QtFiFWPugbhk_Exio8BSEfzAdjulSwlg&s',
      technologies: ['AWS', 'SQL', 'Terraform'],
      link: '#',
    },
  ];

  return (
    <div className="font-inter antialiased text-gray-800 bg-gray-100 min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50 rounded-b-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-extrabold text-blue-700 rounded-md p-2">InfitechLLC</a>
          <nav>
            <ul className="hidden md:flex space-x-6">
              <li><a href="#home" className="text-gray-600 hover:text-blue-700 font-semibold transition duration-300 rounded-md p-2 hover:bg-blue-50">Home</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-blue-700 font-semibold transition duration-300 rounded-md p-2 hover:bg-blue-50">Services</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-blue-700 font-semibold transition duration-300 rounded-md p-2 hover:bg-blue-50">Projects</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-blue-700 font-semibold transition duration-300 rounded-md p-2 hover:bg-blue-50">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-700 font-semibold transition duration-300 rounded-md p-2 hover:bg-blue-50">Contact</a></li>
            </ul>
            {/* Mobile menu button (for responsiveness) */}
            <button className="md:hidden text-gray-600 hover:text-blue-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 text-center rounded-b-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">Innovate. Transform. Succeed.</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">Your trusted partner for cutting-edge technology solutions.</p>
          <a href="#contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300 transform hover:scale-105 shadow-lg">Get a Free Consultation</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">Cloud Solutions</h3>
              <p className="text-gray-600">Leverage the power of cloud computing for scalability, efficiency, and robust infrastructure.</p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <Code className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">Software Development</h3>
              <p className="text-gray-600">Custom software tailored to your unique business needs, from web apps to complex enterprise systems.</p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">Cybersecurity Consulting</h3>
              <p className="text-gray-600">Protect your digital assets with comprehensive security strategies and threat mitigation.</p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <Rocket className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">DevOps & Automation</h3>
              <p className="text-gray-600">Streamline your development lifecycle with efficient DevOps practices and automation tools.</p>
            </div>
            {/* Service Card 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <Briefcase className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">IT Strategy & Consulting</h3>
              <p className="text-gray-600">Strategic guidance to align your IT initiatives with your business goals for maximum impact.</p>
            </div>
            {/* Service Card 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-blue-800">Digital Transformation</h3>
              <p className="text-gray-600">Guide your organization through successful digital transformation journeys.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (CORE) */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Recent Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-gray-200"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/CCCCCC/666666?text=Image+Error"; }} // Fallback for broken images
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-800">{project.name}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-16 text-center rounded-t-xl shadow-lg mt-auto">
        <div className="container mx-auto px-4">
            <ContactSection/>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 rounded-t-lg">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2025 InfitechLLC. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
  
