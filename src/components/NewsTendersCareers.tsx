import React, { useState } from 'react';
import { Newspaper, FileClock, ShieldCheck, Mail, Phone, Calendar, ArrowRight, Hourglass, CheckCircle2, Loader2 } from 'lucide-react';

interface NewsProps {
  language: 'en' | 'sw';
}

export default function NewsTendersCareers({ language }: NewsProps) {
  const [activeTab, setActiveTab] = useState<'news' | 'tenders' | 'careers'>('news');
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [isSubmittingJob, setIsSubmittingJob] = useState(false);
  const [jobApplied, setJobApplied] = useState(false);
  const [jobFormData, setJobFormData] = useState<any>({});

  const newsList = [
    {
      id: 1,
      title: 'Busia Cross-Border Trade Terminal Solar Expansion Launches',
      titleKiswahili: 'Upanuzi wa Umeme wa Jua Katika Kituo cha Biashara Mipakani Busia Waanzishwa',
      date: 'June 15, 2026',
      summary: 'His Excellency Governor Paul Otuoma launches the new solar street lighting and cargo warehouse backup arrays at the main border terminal to support 24/7 commercial activities.',
      summaryKiswahili: 'Mheshimiwa Gavana Paul Otuoma azindua taa mpya za barabarani za sola na maghala mipakani kuruhusu biashara kuendelea usiku na mchana.',
      category: 'Press Release'
    },
    {
      id: 2,
      title: 'FLLoCA Disburses KES 45M for Climate Change Resilience Projects',
      titleKiswahili: 'FLLoCA Yatoa KES Milioni 45 kwa Miradi ya Kukabiliana na Mabadiliko ya Tabianchi',
      date: 'June 10, 2026',
      summary: 'Under the Financing Locally-Led Climate Action (FLLoCA) framework, Busia County releases funding to support community reforestation and water pans construction in Teso South and Bunyala wards.',
      summaryKiswahili: 'Kupitia mfumo wa kifedha wa FLLoCA, Kaunti ya Busia imetoa fedha kusaidia misitu ya kijamii na mabwawa ya maji katika wadi za Teso Kusini na Bunyala.',
      category: 'Announcements'
    },
    {
      id: 3,
      title: 'Department of Health Dispatches Essential Supplies to Level 4 Hospitals',
      titleKiswahili: 'Idara ya Afya Yasambaza Dawa na Vifaa vya Tiba kwa Hospitali za Kiwango cha 4',
      date: 'June 02, 2026',
      summary: 'Busia County Medical Depot flag-off event sees over 42 metric tons of pharmaceuticals and laboratory reagents distributed to clinical facilities across Butula, Nambale, and Port Victoria.',
      summaryKiswahili: 'Gari la kwanza la kusambaza dawa na kemikali za maabara limegawiwa kwa hospitali katika maeneo ya Butula, Nambale na Port Victoria.',
      category: 'Health News'
    }
  ];

  // Open Tenders list
  const tendersList = [
    {
      number: 'CGOB/R&PW/T/048/2025-2026',
      title: 'Proposed Grading & Culvert Installation for Amukura-Alupe Link Road',
      department: 'Roads, Public Works & Transport',
      budget: 'KES 28,000,000',
      deadline: 'July 14, 2026',
      daysLeft: 27,
      category: 'Open National Tender'
    },
    {
      number: 'CGOB/W&E/T/012/2025-2026',
      title: 'Supply and Installation of Solar Water Pump Arrays on 15 Community Boreholes',
      department: 'Water, Environment & Climate Change',
      budget: 'KES 14,500,000',
      deadline: 'July 05, 2026',
      daysLeft: 18,
      category: 'Open National Tender (Youth/Women AGPO)'
    },
    {
      number: 'CGOB/ED/HP/004/2025-2026',
      title: 'Provision of Fortified Porridge Flours and ECDE School Equalizer Feeds',
      department: 'Education, Youth, Sports & Social Services',
      budget: 'KES 8,100,000',
      deadline: 'June 28, 2026',
      daysLeft: 11,
      category: 'Open Local Tender'
    }
  ];

  // Open county careers
  const careersList = [
    {
      code: 'CGOB/CPSB/2026-08',
      title: 'Registered Clinical Officer III (Grade JG "H")',
      positions: 12,
      department: 'Health & Sanitation',
      contract: 'Permanent & Pensionable (P&P)',
      deadline: 'June 30, 2026',
      specs: 'Diploma in Clinical Medicine and Surgery from a recognized training institution, valid practicing license from Clinical Officers Council.'
    },
    {
      code: 'CGOB/CPSB/2026-09',
      title: 'ECDE Caregivers & Nutrition Teachers (Grade JG "F")',
      positions: 35,
      department: 'Education, Youth & Sports',
      contract: 'Three (3) Year Contract',
      deadline: 'June 30, 2026',
      specs: 'Certificate or Diploma in Early Childhood Development Education (ECDE) from KNEC, registered with TSC (Teachers Service Commission).'
    },
    {
      code: 'CGOB/CPSB/2026-10',
      title: 'Co-operative Society Auditor II (Grade JG "J")',
      positions: 4,
      department: 'Trade, Tourism, Industry & Co-operatives',
      contract: 'Permanent & Pensionable (P&P)',
      deadline: 'June 30, 2026',
      specs: 'Bachelor’s degree in Commerce (Accounting Option), Business Administration or Cooperative Management from a recognized University.'
    }
  ];

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingJob(true);
    setTimeout(() => {
      setIsSubmittingJob(false);
      setJobApplied(true);
    }, 1500);
  };

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setJobApplied(false);
    setJobFormData({});
  };

  return (
    <section id="news-careers-section" className="py-16 bg-white scroll-mt-12 border-b border-slate-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs for News, Tenders, Careers */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-4 mb-8 gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-kenya-red bg-red-50 py-1 px-3 rounded-full border border-red-100">
              {language === 'en' ? 'Announcements & Opportunities' : 'Tangazo na Fursa za Kazi'}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-3">
              {activeTab === 'news' && (language === 'en' ? 'Latest Press Releases & County News' : 'Habari za Hivi Punde')}
              {activeTab === 'tenders' && (language === 'en' ? 'County Procurement & Open Tenders' : 'Zabuni za Ununuzi za Kaunti')}
              {activeTab === 'careers' && (language === 'en' ? 'Public Service Board Vacancies & Careers' : 'Fursa Elimu na Kazi')}
            </h2>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl shrink-0 self-start md:self-center">
            <button
              id="tab-news-news"
              onClick={() => setActiveTab('news')}
              className={`py-2 px-4 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'news' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {language === 'en' ? 'Latest News' : 'Habari za Kaunti'}
            </button>
            <button
              id="tab-news-tenders"
              onClick={() => setActiveTab('tenders')}
              className={`py-2 px-4 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'tenders' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {language === 'en' ? 'Open Tenders' : 'Zabuni wazi'}
            </button>
            <button
              id="tab-news-careers"
              onClick={() => setActiveTab('careers')}
              className={`py-2 px-4 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'careers' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {language === 'en' ? 'Public Careers' : 'Fursa za Kazi'}
            </button>
          </div>
        </div>

        {/* Tab content renderer */}
        <div className="space-y-6">
          
          {/* LATEST NEWS */}
          {activeTab === 'news' && (
            <div className="grid md:grid-cols-3 gap-6">
              {newsList.map((news) => (
                <div 
                  key={news.id} 
                  className="bg-slate-50 border border-slate-150 rounded-xl p-5 hover:border-slate-300 hover:bg-white transition-all flex flex-col justify-between text-left group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="bg-red-50 text-kenya-red font-bold px-2 py-0.5 rounded border border-red-100 uppercase">
                        {news.category}
                      </span>
                      <span>{news.date}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-800 leading-snug tracking-tight group-hover:text-kenya-red transition-colors">
                        {language === 'en' ? news.title : news.titleKiswahili}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans mt-0.5">
                        {language === 'en' ? news.summary : news.summaryKiswahili}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 mt-5 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-kenya-red transition-colors">
                    <span>{language === 'en' ? 'Read full release' : 'Soma taarifa kamili'}</span>
                    <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* OPEN TENDERS WITH LIVE COUNTDOWNS */}
          {activeTab === 'tenders' && (
            <div className="space-y-5">
              <div className="p-4 bg-[#fffdf5] rounded-xl border border-yellow-250 flex items-start gap-3">
                <FileClock className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5 animate-pulse" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Procurement Compliance Guideline</h4>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    All listed tenders are subjected to the Public Procurement and Asset Disposal Act (PPADA), 2015. Supplier registration or submission of filled bids should reach the County Head of Procurement, Finance Dept before set deadlines. Special provisions apply for AGPO opportunities.
                  </p>
                </div>
              </div>

              <div className="divide-y divide-slate-150 border border-slate-150 rounded-xl bg-slate-50 overflow-hidden">
                {tendersList.map((tender) => (
                  <div 
                    key={tender.number}
                    className="p-5 bg-white hover:bg-slate-50/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
                  >
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">TENDER NO: {tender.number}</span>
                        <span className="text-[9px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold uppercase">{tender.category}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-snug">{tender.title}</h4>
                        <p className="text-xs text-slate-500 leading-none mt-1">{tender.department}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-xs font-mono shrink-0">
                      <div className="text-left sm:text-right">
                        <p className="text-[10px] text-slate-400 leading-none">EST. ALLOCATION</p>
                        <p className="text-xs font-bold text-slate-800 mt-1 leading-none">{tender.budget}</p>
                      </div>

                      <div className="text-left sm:text-right">
                        <p className="text-[10px] text-slate-400 leading-none">SUBMISSION WINDOW</p>
                        <p className="text-xs font-bold text-red-600 mt-1 flex items-center gap-1 leading-none">
                          <Hourglass className="h-3.5 w-3.5" />
                          <span>{tender.deadline} ({tender.daysLeft} days)</span>
                        </p>
                      </div>

                      <div className="shrink-0">
                        <a 
                          href="#"
                          onClick={(e) => { e.preventDefault(); alert('Standard Tender Document downloaded successfully.'); }}
                          className="py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition-all cursor-pointer"
                        >
                          <span>Get Bid Doc</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CAREERS / JOBS VIA PSC-FORM INTERACTIVE LINK */}
          {activeTab === 'careers' && (
            <div className="space-y-4">
              <div className="divide-y divide-slate-100 border border-slate-150 rounded-xl overflow-hidden">
                {careersList.map((job) => (
                  <div 
                    key={job.code}
                    className="p-5 bg-white hover:bg-slate-50/50 transition-all flex flex-col md:flex-row md:items-start justify-between gap-5 text-left"
                  >
                    <div className="space-y-2.5 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wide">REF NO: {job.code}</span>
                        <span className="text-[9px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase">{job.contract}</span>
                        <span className="text-[9px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded uppercase">{job.positions} Vacancy</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-snug">{job.title}</h4>
                        <p className="text-[11px] text-slate-500 font-mono mt-0.5">{job.department}</p>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans mt-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <strong>Requirements:</strong> {job.specs}
                      </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-3 shrink-0 self-stretch md:self-start">
                      <div className="text-left md:text-right font-mono text-xs">
                        <p className="text-[10px] text-slate-400">BOARD CLOSING</p>
                        <p className="text-xs font-bold text-red-600 mt-0.5">{job.deadline}</p>
                      </div>
                      
                      <button 
                        onClick={() => handleApplyClick(job)}
                        className="py-1.5 px-4 bg-[#BB0000] hover:bg-[#a00000] text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition-all cursor-pointer"
                      >
                        Apply Online
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Embedded Job Applicant Modal Form */}
      {selectedJob && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* National stripe decoration */}
            <div className="absolute top-0 right-0 left-0 h-1.5 flex">
              <div className="flex-1 bg-kenya-black" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-kenya-red" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-kenya-green" />
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-slate-150">
              <div>
                <p className="text-[10px] font-mono tracking-wider text-slate-400">COMMISSION VACANCY INTAKE</p>
                <h4 className="text-sm font-bold text-slate-800 truncate max-w-[300px]">{selectedJob.title}</h4>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="py-1 px-2.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 text-xs font-medium cursor-pointer"
              >
                Close
              </button>
            </div>

            {jobApplied ? (
              <div className="space-y-4 pt-6 text-center max-w-sm mx-auto">
                <CheckCircle2 className="h-10 w-10 text-kenya-green mx-auto" />
                <div className="space-y-1">
                  <h4 className="text-base font-extrabold text-slate-900 tracking-tight">Form PSC-2 Dispatched</h4>
                  <p className="text-xs text-slate-500 leading-normal">
                    Your digital job application portfolio has been validated and synced with the County Public Service Board (CPSB) recruiting registers.
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="py-1.5 px-6 bg-slate-900 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Return to Vacancy Board
                </button>
              </div>
            ) : (
              <form onSubmit={handleJobSubmit} className="space-y-4 pt-4 text-left">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-600">Full Official Applicant Name *</label>
                  <input 
                    type="text" 
                    required 
                    onChange={(e) => setJobFormData({ ...jobFormData, name: e.target.value })}
                    placeholder="e.g. Cleophas Wafula Simiyu" 
                    className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden" 
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-600">Identity ID Number *</label>
                    <input 
                      type="text" 
                      required 
                      onChange={(e) => setJobFormData({ ...jobFormData, idNumber: e.target.value })}
                      placeholder="e.g. 29339029" 
                      className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-600">Safaricom Mobile No. *</label>
                    <input 
                      type="text" 
                      required 
                      onChange={(e) => setJobFormData({ ...jobFormData, phone: e.target.value })}
                      placeholder="e.g. 0722222111" 
                      className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-600">Highest Certificate *</label>
                    <select className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg bg-white bg-no-repeat focus:outline-hidden">
                      <option>Undergraduate Bachelor’s Degree</option>
                      <option>Technical College Diploma</option>
                      <option>Postgraduate Master’s degree</option>
                      <option>KNEC Craft Certificate</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-600">TSC / Board Reg. No *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. TSC-495009 or KCO-12" 
                      className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden" 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-600">Employment Board Resume Summary *</label>
                  <textarea 
                    rows={3}
                    placeholder="Briefly state your relevant practicing years, medical/ECDE licensing boards, or accounting specializations in 1-2 sentences..."
                    className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden font-sans"
                  />
                </div>

                <div className="pt-4 border-t border-slate-150 flex justify-between items-center bg-slate-50 -mx-6 -mb-6 p-6">
                  <span className="text-[10px] font-mono text-slate-400">PSC REGISTER BOARD COMPLIANCE</span>
                  <button 
                    type="submit"
                    disabled={isSubmittingJob}
                    className="py-2 px-5 bg-kenya-red hover:bg-[#a00000] text-white rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmittingJob ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Applying...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Form PSC-2</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
