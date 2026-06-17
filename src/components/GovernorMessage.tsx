import React, { useState } from 'react';
import { Quote, Phone, Mail, Award, Landmark, User, ShieldCheck, X } from 'lucide-react';

interface GovernorProps {
  language: 'en' | 'sw';
  departments: any[];
}

export default function GovernorMessage({ language, departments }: GovernorProps) {
  const [showBio, setShowBio] = useState(false);

  // Governor & Deputy Governor contact numbers
  const governorPhone = "+254 792 111 001";
  const governorEmail = "governor@busiacounty.go.ke";

  const content = {
    en: {
      govTitle: "Office of the Governor",
      govLabel: "Governor of Busia County",
      govMsgTitle: "A Message from His Excellency the Governor",
      govText: "My fellows, citizens of Busia, as your Governor, my administration is committed to implementing sustainable development programs, empowering youth and women, boosting cross-border trade, and promoting modern agri-business. Busia is the Gateway to East Africa, and we are working tirelessly to position our county as a premier commercial hub. Through transparency, public participation, and efficient county service delivery, we ensure that public resources directly benefit the people of Busia.",
      readBio: "Read Governor's Profile & Bio",
      deputyLabel: "Deputy Governor",
      secLabel: "County Secretary",
      cabinetTitle: "County Executive Committee Members (CECM)",
      cabinetDesc: "The County Cabinet provides executive leadership, formulates policy, and oversees performance implementation across the ten statutory PSC departments.",
      bioTitle: "H.E. Dr. Paul Nyongesa Otuoma, EGH",
      bioFullText: "H.E. Dr. Paul Nyongesa Otuoma is the second Governor of Busia County, elected in August 2022. He is a seasoned veterinarian, business administrator, and public policy leader. He previously served as Member of Parliament for Funyula Constituency and held Cabinet Secretary positions at the Ministries of Local Government, Youth & Sports, and Fisheries. His vision for Busia centers on building robust agricultural value chains, promoting industrialization via the Malaba and Busia cross-border trade corridors, improving Level 4 and Referral health infrastructure, and enhancing clean water access across the county.",
      close: "Close"
    },
    sw: {
      govTitle: "Ofisi ya Gavana",
      govLabel: "Gavana wa Kaunti ya Busia",
      govMsgTitle: "Ujumbe kutoka kwa Mheshimiwa Gavana",
      govText: "Wananchi wenzangu wa Busia, kama Gavana wenu, serikali yangu imejitolea kutekeleza mipango endelevu ya maendeleo, kuwawezesha vijana na wanawake, kukuza biashara ya mipakani, na kuendeleza kilimo-biashara cha kisasa. Busia ni Lango la Afrika Mashariki, na tunafanya kazi bila kuchoka kuweka kaunti yetu kama kitovu kikuu cha kibiashara. Kupitia uwazi, ushiriki wa umma, na utoaji wa huduma bora wa kaunti tunahakikisha rasilimali zinafaidisha watu wa Busia moja kwa moja.",
      readBio: "Soma Wasifu wa Gavana",
      deputyLabel: "Naibu Gavana",
      secLabel: "Katibu wa Kaunti",
      cabinetTitle: "Wanachama wa Kamati ya Utendaji ya Kaunti (CECM)",
      cabinetDesc: "Baraza la Mawaziri la Kaunti hutoa uongozi wa utendaji, hutunga sera, na kusimamia utekelezaji wa huduma katika idara kumi za kisheria za PSC.",
      bioTitle: "Mhe. Dkt. Paul Nyongesa Otuoma, EGH",
      bioFullText: "Mheshimiwa Dkt. Paul Nyongesa Otuoma ni Gavana wa pili wa Kaunti ya Busia, aliyechaguliwa mnamo Agosti 2022. Yeye ni daktari wa mifugo mzoefu, msimamizi wa biashara, na kiongozi wa sera za umma. Hapo awali alihudumu kama Mbunge wa Funyula na kushikilia nyadhifa za Waziri wa Serikali za Mitaa, Vijana na Michezo, na Uvuvi. Maono yake kwa Busia yanazingatia kujenga mnyororo thabiti wa kilimo, kukuza viwanda mipakani, kuboresha miundombinu ya afya, na kutoa maji safi kwa kila mwananchi.",
      close: "Funga"
    }
  }[language];

  return (
    <section id="leadership-section" className="py-16 bg-white scroll-mt-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-kenya-red bg-red-50 py-1 px-3 rounded-full border border-red-100">
            {language === 'en' ? 'Leadership & Cabinet' : 'Viongozi & Baraza la Mawaziri'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            {language === 'en' ? 'Executive Leadership of Busia' : 'Uongozi wa Utendaji wa Busia'}
          </h2>
          <div className="w-16 h-1 bg-kenya-green mx-auto mt-4 rounded-full" />
        </div>

        {/* Governor & Deputy Governor Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Governor's Card & Message */}
          <div className="md:col-span-8 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 flex flex-col justify-between relative overflow-hidden">
            {/* Background design */}
            <Quote className="absolute right-6 top-6 h-24 w-24 text-slate-100 transform rotate-180 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono tracking-wider text-kenya-red font-bold uppercase">
                    {content.govTitle}
                  </span>
                  {/* REPLACE_WITH_REAL_GOVERNOR_NAME */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                    H.E. Dr. Paul Nyongesa Otuoma, EGH
                  </h3>
                  <p className="text-xs font-medium text-slate-500">{content.govLabel}</p>
                </div>
                <div className="flex gap-1.5 font-mono text-xs text-slate-500 bg-white shadow-sm border border-slate-150 px-3 py-1.5 rounded-lg shrink-0">
                  <Landmark className="h-3.5 w-3.5 text-kenya-green" />
                  <span>HQ matayos</span>
                </div>
              </div>

              <div className="border-l-4 border-kenya-red pl-4 space-y-3">
                <h4 className="font-bold text-slate-800 text-sm tracking-tight">{content.govMsgTitle}</h4>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{content.govText}"
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
                <a href={`mailto:${governorEmail}`} className="flex items-center gap-1.5 hover:text-kenya-red transition-colors">
                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                  <span>{governorEmail}</span>
                </a>
                <a href={`tel:${governorPhone}`} className="flex items-center gap-1.5 hover:text-kenya-green transition-colors">
                  <Phone className="h-3.5 w-3.5 text-slate-400" />
                  <span>{governorPhone}</span>
                </a>
              </div>
              
              <button 
                onClick={() => setShowBio(true)}
                className="text-xs font-bold text-kenya-red hover:text-red-700 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>{content.readBio}</span>
                <Award className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Deputy Governor & County Secretary Grid Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* Deputy Governor */}
            <div className="flex-1 bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-emerald-700 font-bold uppercase">{content.deputyLabel}</span>
                <h4 className="text-base font-bold text-slate-900">H.E. Arthur Papa Odera</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'en' 
                    ? "Coordinating economic partnerships, public sector performance contracting, and community outreach programs."
                    : "Kuratibu ushirikiano wa kiuchumi, mkataba wa huduma na usimamizi wa nyanja za kijamii."}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">deputy.gov@busiacounty.go.ke</span>
                <span className="text-slate-400">#002</span>
              </div>
            </div>

            {/* County Secretary */}
            <div className="flex-1 bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-widest text-blue-700 font-bold uppercase">{content.secLabel}</span>
                <h4 className="text-base font-bold text-slate-900">Mr. Oscar B. Odyny</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'en'
                    ? "Head of County Civil Service, coordinating executive cabinet circulars and administrative integration."
                    : "Mkuu wa Utumishi wa Umma wa Kaunti, akiratibu nyaraka za baraza la mawaziri na kuratibu utawala."}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">county.sec@busiacounty.go.ke</span>
                <span className="text-slate-400">#003</span>
              </div>
            </div>

          </div>

        </div>

        {/* Cabinet / CECM Section info */}
        <div className="bg-[#fcfdfd] border border-slate-100 rounded-2xl p-6 md:p-8">
          <div className="max-w-3xl mb-8">
            <h3 className="text-lg font-bold text-slate-900">{content.cabinetTitle}</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
              {content.cabinetDesc}
            </p>
          </div>

          {/* Cabinet Grids - Dynamically fetched from departments JSON */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.slice(1).map((dept) => {
              // Get CECM detailed from staff array or standard CEC info
              const cecmStaff = dept.staff.find((s: any) => s.level === 'CECM');
              const name = cecmStaff ? cecmStaff.name : dept.cecm;
              const email = cecmStaff ? cecmStaff.email : `${dept.id}@busiacounty.go.ke`;
              const phone = cecmStaff ? cecmStaff.phone : dept.phone;

              return (
                <div 
                  key={dept.id}
                  className="p-4 bg-white rounded-xl border border-slate-100 hover:shadow-sm transition-all flex flex-col justify-between gap-3 align-start"
                >
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-kenya-green uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      <ShieldCheck className="h-3 w-3 text-kenya-green" />
                      {dept.name.split('&')[0].trim()}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{name}</h4>
                      <p className="text-[10px] font-medium text-slate-400 uppercase mt-0.5">CECM Portal</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span className="truncate max-w-[150px]">{email}</span>
                    <span className="text-[9px] text-[#D4AF37] font-bold">GRADE 1</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Governor Bio Modal popup for extreme completeness */}
      {showBio && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-250">
            {/* National stripe decoration */}
            <div className="absolute top-0 right-0 left-0 h-1.5 flex">
              <div className="flex-1 bg-kenya-black" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-kenya-red" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-kenya-green" />
            </div>

            <button 
              onClick={() => setShowBio(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
                  PO
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{content.bioTitle}</h3>
                  <p className="text-xs text-kenya-red font-semibold font-mono">{content.govLabel}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {content.bioFullText}
                </p>
              </div>

              <div className="text-[11px] font-mono text-slate-400 space-y-1">
                <p><strong>Official Residence:</strong> County HQ, Matayos, Busia, Kenya</p>
                <p><strong>Affiliation:</strong> Council of Governors Kenya (CoG)</p>
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  onClick={() => setShowBio(false)}
                  className="py-1.5 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                >
                  {content.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
