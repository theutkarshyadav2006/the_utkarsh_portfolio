import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe style={{color: '#8b0000'}} size={24} />,
      skills: [
        { name: 'HTML', level: 100 },
        { name: 'CSS', level: 100 },
        { name: 'JavaScript', level: 95 },
      ]
    },
    {
      title: 'Backend',
      icon: <Database style={{color: '#8b0000'}} size={24} />,
      skills: [
        { name: 'Python', level: 100 },
        { name: 'MySQL', level: 100 },
        { name: 'C', level: 100 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Code style={{color: '#8b0000'}} size={24} />,
      skills: [
        { name: 'Git', level: 97 },
        { name: 'VS Code', level: 100 },
        { name: 'Linux', level: 90 },
      ]
    }
  ];

  return (
    <section className="min-h-screen py-20" style={{backgroundColor: '#1a1a1a'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span style={{color: '#8b0000'}}>Skills</span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{backgroundColor: '#8b0000'}}></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="group rounded-2xl p-8 shadow-xl border transition-all duration-300 hover:shadow-red-500/40 hover:shadow-2xl hover:border-red-500/60 hover:scale-105" style={{backgroundColor: '#2e2e2e', borderColor: '#404040'}}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
                        <span className="font-bold" style={{color: '#8b0000'}}>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-red-500/50"
                          style={{background: `linear-gradient(to right, #8b0000, #a00000)`, width: `${skill.level}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="group mt-16 rounded-2xl p-8 shadow-xl border transition-all duration-300 hover:shadow-red-500/30 hover:shadow-2xl hover:border-red-500/50" style={{backgroundColor: '#2e2e2e', borderColor: '#404040'}}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Problem Solving', 'Team Collaboration', 'Project Management', 'Quick Learning'].map((skill, index) => (
                <div key={index} className="rounded-lg p-4 text-center transition-all duration-300 hover:bg-red-900/30 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 cursor-pointer" style={{backgroundColor: '#1a1a1a'}}>
                  <div className="font-semibold" style={{color: '#8b0000'}}>{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;