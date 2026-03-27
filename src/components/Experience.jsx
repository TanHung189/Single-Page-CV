import React from 'react';
import { GraduationCap, Award, HeartHandshake } from 'lucide-react';

const Experience = ({ data }) => {
  const { education, activities, certificates } = data;

  return (
    <div className="space-y-8">
      {/* Education */}
      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
          <GraduationCap className="text-vnptBlue" size={24} />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Học Vấn</h3>
        </div>
        <div className="relative pl-4 border-l-2 border-slate-200">
          <div className="absolute w-3 h-3 bg-vnptBlue rounded-full -left-[7px] top-1.5 ring-4 ring-slate-100 print:ring-white"></div>
          <h4 className="font-bold text-slate-800">{education.school}</h4>
          <p className="text-sm text-vnptBlue font-semibold mb-1 print:text-slate-700">{education.major}</p>
          <p className="text-xs text-slate-500">{education.time}</p>
        </div>
      </section>

      {/* Activities */}
      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
          <HeartHandshake className="text-vnptBlue" size={24} />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Hoạt Động</h3>
        </div>
        <div className="space-y-4">
          {activities.map((item, index) => (
            <div key={index} className="relative pl-4 border-l-2 border-slate-200">
              <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-100 print:ring-white print:bg-slate-400"></div>
              <h4 className="font-bold text-slate-800">{item.name}</h4>
              <p className="text-xs text-vnptBlue mb-1 font-medium print:text-slate-600">{item.time}</p>
              {item.role && <p className="text-sm font-semibold text-slate-700">{item.role}</p>}
              <p className="text-sm text-slate-600 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section>
        <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-2">
          <Award className="text-vnptBlue" size={24} />
          <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Chứng Chỉ</h3>
        </div>
        <ul className="space-y-2">
          {certificates.map((cert, index) => (
            <li key={index} className="flex gap-3 text-sm">
              <span className="font-bold text-slate-700 min-w-[40px]">{cert.year}</span>
              <span className="text-slate-600 px-2 border-l-2 border-slate-200">{cert.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Experience;
