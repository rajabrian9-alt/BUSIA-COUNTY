import React from 'react';
import { Shield, Coins, HelpCircle, FileText, ArrowRight, ExternalLink } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'sw';
  setActiveTab: (tab: string) => void;
  setSelectedDeptId: (id: string | null) => void;
}

export default function CountyHero({ language, setActiveTab, setSelectedDeptId }: HeroProps) {
  const content = {
    en: {
      title: "County Government of Busia",
      subTitle: "Delivering Services to the People",
      tagline: "Transparency. Accountability. Development.",
      desc: "Welcome to the official web portal of the County Government of Busia. Find information on county administration, download essential public documents, check open tenders, apply for jobs, and pay your bills securely online.",
      ctas: {
        eservices: "E-Services Portal",
        payfees: "Pay County Fees",
        complaint: "Submit Complaint",
        tenders: "View Tenders"
      },
      stats: {
        population: "Estimated Population",
        subcounties: "Sub-Counties",
        wards: "Representative Wards"
      }
    },
    sw: {
      title: "Serikali ya Kaunti ya Busia",
      subTitle: "Kutoa Huduma Bora kwa Wananchi",
      tagline: "Uwazi. Uwajibikaji. Maendeleo.",
      desc: "Karibu kwenye lango rasmi la Serikali ya Kaunti ya Busia. Pata taarifa kuhusu utawala wa kaunti, pakua nyaraka muhimu za umma, kagua zabuni zilizo wazi, tuma maombi ya kazi, na ulipe ada zako kwa usalama mtandaoni.",
      ctas: {
        eservices: "Malango ya E-Huduma",
        payfees: "Lipa Ada za Kaunti",
        complaint: "Wasilisha Malalamiko",
        tenders: "Tazama Zabuni"
      },
      stats: {
        population: "Idadi ya Watu",
        subcounties: "Kaunti Ndogo",
        wards: "Wadi za Uwakilishi"
      }
    }
  }[language];

  return (
    <div id="hero" className="relative bg-slate-900 border-b-4 border-kenya-red overflow-hidden pt-12">
      {/* Background Graphic representing Kenyan standard aesthetics */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 right-0 h-1 bg-kenya-black" />
        <div className="absolute top-1 left-0 right-0 h-1 bg-white" />
        <div className="absolute top-2 left-0 right-0 h-1 bg-kenya-red" />
        <div className="absolute top-3 left-0 right-0 h-1 bg-white" />
        <div className="absolute top-4 left-0 right-0 h-1 bg-kenya-green" />
        
        {/* Abstract pattern grid */}
        <div className="w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-kenya-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-kenya-green"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider">
                {language === 'en' ? 'OFFICIAL COUNTY ASSEMBLY & EXECUTIVE PORTAL' : 'TOVUTI RASMI YA UTENDAJI NA BUNGE LA KAUNTI'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans leading-tight">
              <span className="block text-slate-400 font-normal text-xl sm:text-2xl tracking-normal mb-1">
                {content.title}
              </span>
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {content.subTitle}
              </span>
            </h1>

            <p className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase font-mono">
              ★ {content.tagline} ★
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans font-light">
              {content.desc}
            </p>

            {/* Core Action CTAs with Kenya colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 max-w-xl">
              {/* E-Services Portal */}
              <button 
                id="cta-e-services"
                onClick={() => {
                  setActiveTab('eservices');
                  setSelectedDeptId(null);
                  document.getElementById('eservices-section')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="group flex items-center justify-between p-4 bg-kenya-red hover:bg-[#a00000] text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-red-950/20 hover:scale-[1.02] border border-red-500/30 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-mono text-red-200 leading-none">E-SERVICES LINK</p>
                    <p className="text-sm leading-tight mt-0.5">{content.ctas.eservices}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 tracking-normal group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Pay County Fees */}
              <button 
                id="cta-pay-fees"
                onClick={() => {
                  setActiveTab('eservices');
                  setSelectedDeptId(null);
                  setTimeout(() => {
                    const el = document.getElementById('eservice-card-single-business-permit') || document.getElementById('eservices-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all duration-300 font-semibold border border-slate-700/80 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors">
                    <Coins className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-mono text-slate-400 leading-none">SECURE PAYMENTS</p>
                    <p className="text-sm leading-tight mt-0.5">{content.ctas.payfees}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Submit Complaints */}
              <button 
                id="cta-complaints"
                onClick={() => {
                  setActiveTab('feedback');
                  document.getElementById('feedback-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all duration-300 font-semibold border border-slate-700/80 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors">
                    <HelpCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-mono text-slate-400 leading-none">CITIZEN CHARTER</p>
                    <p className="text-sm leading-tight mt-0.5">{content.ctas.complaint}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* View Tenders */}
              <button 
                id="cta-tenders"
                onClick={() => {
                  setActiveTab('news');
                  setTimeout(() => {
                    document.getElementById('news-careers-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="group flex items-center justify-between p-4 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl transition-all duration-300 font-semibold border border-emerald-700/50 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-700/50 rounded-lg group-hover:bg-emerald-600/50 transition-colors">
                    <FileText className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-mono text-emerald-300 leading-none">SUPPLY PROCUREMENT</p>
                    <p className="text-sm leading-tight mt-0.5">{content.ctas.tenders}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hero Right Visuals representing the Busia County Flag/HQ/Governor */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Visual Frame mimicking modern governmental banners */}
            <div className="w-full max-w-sm aspect-[4/5] bg-slate-800 border-4 border-slate-700 rounded-2xl relative overflow-hidden shadow-2xl shadow-slate-950/80">
              {/* Overlay with County Crest Colors */}
              <div className="absolute top-0 right-0 left-0 bg-gradient-to-b from-black/80 to-transparent p-4 z-20 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-kenya-red animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold">BUSIA COUNTY HQ</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-3 h-1 bg-kenya-black" />
                  <div className="w-3 h-1 bg-white" />
                  <div className="w-3 h-1 bg-kenya-red" />
                  <div className="w-3 h-1 bg-kenya-green" />
                </div>
              </div>

              {/* Placeholder image representation with high fidelity styling */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 flex flex-col justify-between p-6 pt-16">
                
                {/* Visual Graphics representing Busia Gateway border trade */}
                <div className="relative space-y-4">
                  {/* Decorative Arch signifying the Busia Gate */}
                  <div className="w-48 h-32 border-4 border-dashed border-slate-700/60 rounded-t-full mx-auto relative flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-3xl font-extrabold text-slate-600 font-mono tracking-wider">GATEWAY</p>
                      <p className="text-[10px] text-slate-500 tracking-widest font-mono">KENYA - UGANDA BORDER</p>
                    </div>
                    {/* Tiny moving flags */}
                    <div className="absolute -bottom-2 flex gap-4 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                      <span className="text-xs">🇰🇪</span>
                      <span className="text-xs">🇺🇬</span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <p className="text-xs font-mono text-emerald-400">Hub of East African Cross-Border Trade</p>
                    <h3 className="text-base font-bold text-white tracking-tight">County Assembly & Executive HQ, Busia</h3>
                    <p className="text-[11px] text-slate-400">Serving 7 Sub-counties and over 900,000 residents with transparency & integrity.</p>
                  </div>
                </div>

                {/* Governor visual tag */}
                <div className="bg-slate-900/95 border border-slate-700/70 p-3.5 rounded-xl flex items-center gap-3 z-10">
                  <div className="h-10 w-10 rounded-full bg-slate-700 shrink-0 flex items-center justify-center font-bold text-white border-2 border-slate-600 text-sm">
                    PO
                  </div>
                  <div className="text-left">
                    {/* REPLACE_WITH_REAL_GOVERNOR_NAME */}
                    <p className="text-[10px] font-mono tracking-wider text-[#D4AF37] font-bold">GOVERNOR'S OFFICE</p>
                    <p className="text-xs font-bold text-white">H.E. Dr. Paul Nyongesa Otuoma</p>
                    <p className="text-[9px] text-slate-400 leading-none mt-0.5">2nd Governor of Busia County, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Absolute badge decor */}
            <div className="absolute -bottom-4 right-4 bg-[#D4AF37] text-slate-950 font-bold font-mono text-[10px] tracking-wider py-1.5 px-3 rounded-full border border-yellow-300 shadow-lg hidden sm:block">
              {language === 'en' ? '7 SUB-COUNTIES CONNECTED' : 'KAUNTI NDOGO 7 ZIMEUNGANISHWA'}
            </div>
          </div>

        </div>

        {/* Fact Sheet stats bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <p className="text-xs text-slate-400 font-mono">{content.stats.population}</p>
            <p className="text-xl sm:text-2xl font-bold text-white font-sans">996,289 <span className="text-xs font-normal text-slate-500">2026 Proj</span></p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-slate-400 font-mono">{content.stats.subcounties}</p>
            <p className="text-xl sm:text-2xl font-bold text-white font-sans">07 <span className="text-xs font-normal text-slate-500">Admins</span></p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-slate-400 font-mono">{content.stats.wards}</p>
            <p className="text-xl sm:text-2xl font-bold text-white font-sans">35 <span className="text-xs text-slate-500 font-normal">Wards</span></p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-slate-400 font-mono">{language === 'en' ? 'County Area' : 'Eneo la Kaunti'}</p>
            <p className="text-xl sm:text-2xl font-bold text-white font-sans">1,694.5 <span className="text-xs font-normal text-slate-500">km²</span></p>
          </div>
        </div>

      </div>
    </div>
  );
}
