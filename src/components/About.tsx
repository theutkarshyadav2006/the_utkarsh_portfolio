import React from 'react';
import { Award, Calendar, MapPin, User } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#2e2e2e'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span style={{color: '#8b0000'}}>Me</span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{backgroundColor: '#8b0000'}}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div className="group rounded-2xl p-8 shadow-xl border transition-all duration-300 hover:shadow-red-500/30 hover:shadow-2xl hover:border-red-500/50" style={{backgroundColor: '#1a1a1a', borderColor: '#404040'}}>
                <h3 className="text-2xl font-bold text-white mb-6">Personal Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/20">
                    <User style={{color: '#8b0000'}} size={20} />
                    <span className="text-gray-300">Full Name:</span>
                    <span className="text-white font-semibold">Utkarsh Yadav</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/20">
                    <Calendar style={{color: '#8b0000'}} size={20} />
                    <span className="text-gray-300">Current Year:</span>
                    <span className="text-white font-semibold">2nd Year B.Tech</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/20">
                    <MapPin style={{color: '#8b0000'}} size={20} />
                    <span className="text-gray-300">University:</span>
                    <span className="text-white font-semibold">GLA University, Noida</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/20">
                    <Award style={{color: '#8b0000'}} size={20} />
                    <span className="text-gray-300">Experience:</span>
                    <span className="text-white font-semibold">1 Year Development</span>
                  </div>
                </div>
              </div>

              {/* Professional Certifications */}
              <div className="group rounded-2xl p-8 shadow-xl border transition-all duration-300 hover:shadow-red-500/30 hover:shadow-2xl hover:border-red-500/50" style={{backgroundColor: '#1a1a1a', borderColor: '#404040'}}>
                <h3 className="text-2xl font-bold text-white mb-6">Professional Certifications</h3>
                
                <div className="space-y-4">
                  {/* Microsoft Certification */}
                  <div className="group/cert rounded-xl p-4 transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105 cursor-pointer" style={{background: `linear-gradient(45deg, #8b0000, #a00000, #8b0000)`}}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover/cert:scale-110 group-hover/cert:rotate-12">
                        <Award style={{color: '#8b0000'}} size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">Microsoft Certified</h4>
                        <p className="text-red-100 text-sm">Professional Developer</p>
                      </div>
                    </div>
                  </div>

                  {/* Infosys Certification */}
                  <div className="group/cert rounded-xl p-4 transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105 cursor-pointer" style={{backgroundColor: '#2e2e2e'}}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover/cert:scale-110 group-hover/cert:rotate-12" style={{backgroundColor: '#8b0000'}}>
                        <Award className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">Infosys Certified</h4>
                        <p className="text-gray-300 text-sm">Software Development</p>
                      </div>
                    </div>
                  </div>

                  {/* HackerRank Certification */}
                  <div className="group/cert rounded-xl p-4 transition-all duration-300 hover:bg-red-900/20 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105 cursor-pointer" style={{backgroundColor: '#2e2e2e'}}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover/cert:scale-110 group-hover/cert:rotate-12" style={{backgroundColor: '#8b0000'}}>
                        <Award className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">HackerRank Certified</h4>
                        <p className="text-gray-300 text-sm">Problem Solving & Algorithms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">
              <div className="group rounded-2xl p-8 shadow-xl border transition-all duration-300 hover:shadow-red-500/30 hover:shadow-2xl hover:border-red-500/50" style={{backgroundColor: '#1a1a1a', borderColor: '#404040'}}>
                <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate 2nd-year B.Tech student at GLA University, Noida, with a strong foundation in 
                  software development. Over the past year, I've been dedicated to mastering modern web technologies 
                  and building innovative solutions.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  My journey began with curiosity about how websites work, which led me to dive deep into 
                  programming languages and frameworks. I enjoy solving complex problems and creating 
                  user-friendly applications that make a difference.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4 text-center transition-all duration-300 hover:bg-red-900/30 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 cursor-pointer">
                    <div className="text-2xl font-bold" style={{color: '#8b0000'}}>15+</div>
                    <div className="text-gray-300 text-sm">Projects Completed</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4 text-center transition-all duration-300 hover:bg-red-900/30 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 cursor-pointer">
                    <div className="text-2xl font-bold" style={{color: '#8b0000'}}>6+</div>
                    <div className="text-gray-300 text-sm">Technologies Mastered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;