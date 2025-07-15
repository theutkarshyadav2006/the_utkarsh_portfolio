import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

const MoreProjects = () => {
  const projects = [
    {
      title: 'Weather Dashboard',
      description: 'A comprehensive weather application with real-time data, forecasts, and interactive maps. Features location-based weather updates and detailed analytics.',
      tech: ['JavaScript', 'API Integration', 'CSS', 'HTML'],
      icon: <Globe style={{color: '#8b0000'}} size={24} />,
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure mobile banking interface with transaction history, account management, and real-time notifications. Built with modern security practices.',
      tech: ['Python', 'JavaScript', 'MySQL', 'Security'],
      icon: <Smartphone style={{color: '#8b0000'}} size={24} />,
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Inventory Management System',
      description: 'A complete inventory tracking system with barcode scanning, stock alerts, and comprehensive reporting for small to medium businesses.',
      tech: ['C', 'Database Design', 'HTML', 'CSS'],
      icon: <Database style={{color: '#8b0000'}} size={24} />,
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#1a1a1a'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              More <span style={{color: '#8b0000'}}>Projects</span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{backgroundColor: '#8b0000'}}></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Additional projects that demonstrate my versatility and problem-solving skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden shadow-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-red-500/40 hover:shadow-2xl hover:border-red-500/60" style={{backgroundColor: '#2e2e2e', borderColor: '#404040'}}>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#8b0000'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-red-800 hover:text-white hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 cursor-pointer">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      className="group/link flex items-center gap-2 text-gray-400 transition-all duration-300 transform hover:scale-110 hover:text-red-400 p-2 rounded-lg hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/20"
                    >
                      <Github size={20} className="group-hover/link:animate-pulse" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demo} 
                      className="group/link flex items-center gap-2 text-gray-400 transition-all duration-300 transform hover:scale-110 hover:text-red-400 p-2 rounded-lg hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/20"
                    >
                      <ExternalLink size={20} className="group-hover/link:animate-pulse" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="group relative text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden" style={{backgroundColor: '#8b0000'}}>
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                View GitHub Profile
              </div>
              <div className="absolute inset-0 rounded-lg border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;