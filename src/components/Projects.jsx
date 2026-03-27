import React from 'react';
import { Briefcase, Github, ExternalLink } from 'lucide-react';

const Projects = ({ data }) => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-2">
        <Briefcase className="text-vnptBlue" size={28} />
        <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Dự Án Đã Thực Hiện</h3>
      </div>
      
      <div className="space-y-6">
        {data.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-white border border-slate-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-vnptBlue/30 print:shadow-none print:border-b print:border-slate-300 print:rounded-none print:p-0 print:mb-6 print:pb-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h4 className="font-bold text-xl text-slate-800 group-hover:text-vnptBlue transition-colors">
                  {project.name}
                </h4>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="bg-blue-50 text-vnptBlue text-xs font-bold px-2.5 py-1 rounded-full border border-blue-100 print:border-slate-300 print:text-slate-800 print:bg-transparent print:px-0 print:py-0">
                    {project.role}
                  </span>
                  <span className="text-slate-500 text-sm font-medium print:text-slate-600">
                    {project.time}
                  </span>
                </div>
              </div>
              
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="print-hide inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors shrink-0"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={14} className="ml-0.5" />
                </a>
              )}
            </div>

            <ul className="space-y-2 mt-4">
              {project.descriptions.map((desc, i) => (
                <li key={i} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0 print:bg-slate-800"></span>
                  <span className="flex-1">{desc}</span>
                </li>
              ))}
            </ul>
            
            {project.github && (
              <div className="hidden print:block mt-2 text-xs text-slate-500">
                Link: {project.github}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
