import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Printer } from 'lucide-react';
import { cvData } from './constants/cvData';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 print:py-0 print:bg-white">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
        {/* Floating Print Button - Hidden on print */}
        <button 
          onClick={handlePrint}
          className="print-hide fixed bottom-8 right-8 bg-vnptBlue hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center z-50"
          title="In CV (Print to PDF)"
        >
          <Printer size={24} />
        </button>

        <Header data={cvData.personalInfo} />
        
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 space-y-10">
            <About data={cvData.objective} />
            <Skills data={cvData.skills} />
            <Experience data={{ 
              education: cvData.education, 
              activities: cvData.activities, 
              certificates: cvData.certificates 
            }} />
          </div>
          
          <div className="md:col-span-2">
            <Projects data={cvData.projects} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
