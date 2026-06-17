import React from 'react';
import { FileText, Download, CheckCircle2, ShieldCheck, Landmark } from 'lucide-react';

interface TransparencyProps {
  language: 'en' | 'sw';
}

export default function TransparencyPortal({ language }: TransparencyProps) {
  const docsList = [
    {
      id: 'fa-25-26',
      title: 'Busia County Finance Act, 2025/2026',
      titleKiswahili: 'Sheria ya Fedha ya Kaunti ya Busia, 2025/2026',
      date: 'November 30, 2025',
      size: '3.4 MB',
      type: 'PDF Booklet',
      class: 'Revenue Legislation'
    },
    {
      id: 'cfsp-26',
      title: 'County Fiscal Strategy Paper (CFSP), 2026',
      titleKiswahili: 'Karatasi ya Mkakati wa Kifedha wa Kaunti, 2026',
      date: 'February 28, 2026',
      size: '2.8 MB',
      type: 'PDF Document',
      class: 'Treasury Budgeting'
    },
    {
      id: 'cidp-23-27',
      title: 'County Integrated Development Plan (CIDP), 2023 - 2027',
      titleKiswahili: 'Mpango Unganishi wa Maendeleo ya Kaunti, 2023 - 2027',
      date: 'April 15, 2023',
      size: '6.5 MB',
      type: 'PDF Volume',
      class: 'Strategic Policy'
    },
    {
      id: 'app-25-26',
      title: 'Annual Procurement Plan, Financial Year 2025/2026',
      titleKiswahili: 'Mpango wa Ununuzi wa Mwaka, 2025/2026',
      date: 'July 10, 2025',
      size: '1.9 MB',
      type: 'PDF Worksheet',
      class: 'Procurement Strategy'
    }
  ];

  const handleDownload = (docTitle: string) => {
    // Elegant simulation showing a compliant download message across modern frameworks
    alert(`"${docTitle}" downloaded successfully from official County Government archives.`);
  };

  return (
    <section id="transparency-section" className="py-16 bg-slate-50 border-b border-slate-100 scroll-mt-24 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-kenya-red bg-red-50 py-1 px-3 rounded-full border border-red-100 font-sans">
            {language === 'en' ? 'Public Audits & Transparency' : 'Uwazi na Ukaguzi wa Umma'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            {language === 'en' ? 'Regulatory & Financial Library' : 'Maktaba ya Nyaraka za Kaunti'}
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            {language === 'en'
              ? 'Pursuant to Article 201 of the Constitution of Kenya on Public Finance Principles, we provide public access to all statutory financial budgets, county development papers, and treasury acts.'
              : 'Kwa mujibu wa Kifungu cha 201 cha Katiba ya Kenya kuhusu Kanuni za Fedha za Umma, tunatoa fursa kwa umma kufikia bajeti za fedha, ripoti na sheria zote za kisheria.'}
          </p>
          <div className="w-16 h-1 bg-kenya-green mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick Guidance Card */}
          <div className="lg:col-span-4 bg-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-b-4 border-kenya-red">
            <div className="space-y-4">
              <Landmark className="h-8 w-8 text-yellow-500" />
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">COUNTY SERVICE CHARTER</h3>
                <h4 className="text-base font-bold text-slate-200">{language === 'en' ? 'Access to Public Information' : 'Haki ya Kupokea Taarifa'}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Every Kenyan citizen has a constitutional right under Article 35 to view public documents held by the County Government. If a document is missing or requires further explanation, lodge an official request with the County Ombudsperson Central Register.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>COUNCIL OF GOVERNORS VERIFIED</span>
            </div>
          </div>

          {/* Documents Download Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {docsList.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white border border-slate-150 p-5 rounded-2xl hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between gap-5 relative group text-left"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase bg-slate-50 text-slate-500 font-bold tracking-wider py-0.5 px-2.5 rounded border border-slate-200">
                      {doc.class}
                    </span>
                    <span className="text-[10px] font-mono text-[#D4AF37] font-bold">★ FY BOARD</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-snug group-hover:text-kenya-red transition-colors">
                      {language === 'en' ? doc.title : doc.titleKiswahili}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-mono">{language === 'en' ? 'Published date:' : 'Ilichapishwa mnamo:'} {doc.date}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">{doc.type} • {doc.size}</span>
                  
                  <button 
                    onClick={() => handleDownload(doc.title)}
                    className="p-1.5 bg-slate-100 group-hover:bg-[#BB0000] rounded-lg text-slate-600 group-hover:text-white transition-all cursor-pointer"
                    title="Download booklet PDF"
                  >
                    <Download className="h-4 w-4 text-inherit" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
