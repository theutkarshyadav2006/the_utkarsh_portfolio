import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#1a1a1a'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span style={{color: '#8b0000'}}>Touch</span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{backgroundColor: '#8b0000'}}></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group rounded-2xl p-8 shadow-xl border transition-all duration-300 hover:shadow-red-500/30 hover:shadow-2xl hover:border-red-500/50" style={{backgroundColor: '#2e2e2e', borderColor: '#404040'}}>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 cursor-pointer" style={{backgroundColor: '#1a1a1a'}}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#8b0000'}}>
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Email</div>
                      <div className="text-white font-semibold">utkarshyadav092006@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 cursor-pointer" style={{backgroundColor: '#1a1a1a'}}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#8b0000'}}>
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Phone</div>
                      <div className="text-white font-semibold">+91 7017309539</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 cursor-pointer" style={{backgroundColor: '#1a1a1a'}}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#8b0000'}}>
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-gray-300 text-sm">Location</div>
                      <div className="text-white font-semibold">Noida, India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="group rounded-2xl p-8 shadow-xl border transition-all duration-300 hover:shadow-red-500/30 hover:shadow-2xl hover:border-red-500/50" style={{backgroundColor: '#2e2e2e', borderColor: '#404040'}}>
                <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com" 
                    className="group/social w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:bg-red-800 hover:shadow-lg hover:shadow-red-500/50" style={{backgroundColor: '#1a1a1a'}}
                  >
                    <Linkedin className="text-white group-hover/social:animate-pulse" size={20} />
                  </a>
                  <a 
                    href="https://github.com" 
                    className="group/social w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:bg-red-800 hover:shadow-lg hover:shadow-red-500/50" style={{backgroundColor: '#1a1a1a'}}
                  >
                    <Github className="text-white group-hover/social:animate-pulse" size={20} />
                  </a>
                  <a 
                    href="mailto:utkarshyadav092006@gmail.com" 
                    className="group/social w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:bg-red-800 hover:shadow-lg hover:shadow-red-500/50" style={{backgroundColor: '#1a1a1a'}}
                  >
                    <Mail className="text-white group-hover/social:animate-pulse" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="group rounded-2xl p-8 shadow-xl border transition-all duration-300 hover:shadow-red-500/30 hover:shadow-2xl hover:border-red-500/50" style={{backgroundColor: '#2e2e2e', borderColor: '#404040'}}>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors duration-300" style={{backgroundColor: '#1a1a1a', borderColor: '#404040'}} onFocus={(e) => e.currentTarget.style.borderColor = '#8b0000'} onBlur={(e) => e.currentTarget.style.borderColor = '#404040'}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors duration-300" style={{backgroundColor: '#1a1a1a', borderColor: '#404040'}} onFocus={(e) => e.currentTarget.style.borderColor = '#8b0000'} onBlur={(e) => e.currentTarget.style.borderColor = '#404040'}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors duration-300 resize-none" style={{backgroundColor: '#1a1a1a', borderColor: '#404040'}} onFocus={(e) => e.currentTarget.style.borderColor = '#8b0000'} onBlur={(e) => e.currentTarget.style.borderColor = '#404040'}
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group/btn relative w-full text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 overflow-hidden" style={{backgroundColor: '#8b0000'}}
                >
                  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center gap-2">
                    <Send size={20} className="group-hover/btn:animate-pulse" />
                  Send Message
                  </div>
                  <div className="absolute inset-0 rounded-lg border-2 border-red-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;