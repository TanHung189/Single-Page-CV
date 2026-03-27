import React from 'react';
import { Target } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
        <Target className="text-vnptBlue" size={24} />
        <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Mục Tiêu</h3>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm text-justify">
        {data}
      </p>
    </section>
  );
};

export default About;
