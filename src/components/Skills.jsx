import React from 'react';
import { Code2 } from 'lucide-react';

const Skills = ({ data }) => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
        <Code2 className="text-vnptBlue" size={24} />
        <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Kỹ Năng</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md border border-slate-200 hover:border-vnptBlue hover:text-vnptBlue hover:bg-blue-50 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
