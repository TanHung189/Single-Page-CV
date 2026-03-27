import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Header = ({ data }) => {
  return (
    <div className="bg-slate-800 text-white p-8 md:p-12 flex flex-col sm:flex-row items-center sm:items-start gap-8 border-b-8 border-vnptBlue print:border-b-4 print:bg-slate-800 print:text-white">
      <div className="w-40 h-40 shrink-0 border-4 border-vnptBlue shadow-md bg-slate-700 overflow-hidden relative">
        <img 
          src={data.avatar} 
          alt={data.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://ui-avatars.com/api/?name=" + data.name.replace(/ /g, '+') + "&background=0066cc&color=fff&size=200";
          }}
        />
      </div>
      <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
        <h2 className="text-vnptBlue font-bold tracking-widest text-sm mb-2 uppercase">{data.title}</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight uppercase print:text-5xl">{data.name}</h1>
        
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm text-slate-300">
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-slate-700/50 px-3 py-1.5 rounded-full print:bg-transparent print:px-0">
            <Phone size={16} className="text-vnptBlue" />
            <span>{data.phone}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-slate-700/50 px-3 py-1.5 rounded-full print:bg-transparent print:px-0">
            <Mail size={16} className="text-vnptBlue" />
            <span>{data.email}</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-slate-700/50 px-3 py-1.5 rounded-full print:bg-transparent print:px-0">
            <MapPin size={16} className="text-vnptBlue" />
            <span>{data.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
