import React, { useState } from 'react';
import { 
  Menu, X, Globe, Landmark, Phone, Mail, FileText, CheckCircle2, 
  HelpCircle, ShieldCheck, HeartPulse, ChevronRight, MessageSquare 
} from 'lucide-react';
import CountyHero from './components/CountyHero';
import GovernorMessage from './components/GovernorMessage';
import EServicesHub from './components/EServicesHub';
import ProjectsMap from './components/ProjectsMap';
import CitizenFeedback from './components/CitizenFeedback';
import NewsTendersCareers from './components/NewsTendersCareers';
import TransparencyPortal from './components/TransparencyPortal';
import DepartmentPortal from './components/DepartmentPortal';

// Import local structured department database JSON
import departmentsData from './data/departments.json';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'sw'>('en');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quick Action Alerts / Notices
  const [alertOpen, setAlertOpen] = useState(true);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sw' : 'en');
  };

  const departments = departmentsData;

  const appNavKeys = [
    { id: 'home', label: 'Home (Nyumbani)' },
    { id: 'departments', label: 'Departments (Idara)' },
    { id: 'eservices', label: 'E-Services (E-Huduma)' },
    { id: 'projects', label: 'County Projects (Miradi)' },
    { id: 'news', label: 'News & Tenders (Kazi/Zabuni)' },
    { id: 'feedback', label: 'Submit Complaint (Malalamiko)' },
    { id: 'transparency', label: 'Transparency (Uwazi)' }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-slate-900 flex flex flex-col font-sans selection:bg-[#BB0000] selection:text-white">
      
      {/* Topmost Compliance Notification Banner */}
      {alertOpen && (
        <div className="bg-slate-950 text-white font-mono text-[10px] sm:text-xs py-1.5 px-4 text-center relative z-50 flex items-center justify-center gap-1.5 border-b border-slate-800">
          <div className="flex gap-1 shrink-0">
            <span className="w-2 h-2 rounded-full bg-kenya-red animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-kenya-green" />
          </div>
          <p className="truncate max-w-lg sm:max-w-none">
            {language === 'en'
              ? '★ PUBLIC NOTICE: Submit Single Business Permit (SBP) and Land Rates clearance before target deadlines for waiver benefits!'
              : '★ TANGAZO: Wasilisha malipo ya SBP na kodi ya ardhi upokee msamaha wa faini kabla ya tarehe ya mwisho!'}
          </p>
          <button 
            onClick={() => setAlertOpen(false)}
            className="p-1 rounded-sm hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-3 grow-0 shrink-0"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Main Corporate Header with Flag Accents */}
      <header className="bg-white border-b border-slate-150 sticky top-0 z-40 shadow-xs">
        {/* National Flag Color Bands */}
        <div className="h-1 flex">
          <div className="flex-1 bg-kenya-black" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-kenya-red" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-kenya-green" />
        </div>

        {/* Info contact row */}
        <div className="bg-slate-50 border-b border-slate-100 py-1.5 font-mono text-[9px] sm:text-[10px] text-slate-500 hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Phone className="h-3 w-3 text-slate-400" /> +254 792 000 000</span>
              <span className="flex items-center gap-1"><Mail className="h-3 w-3 text-slate-400" /> info@busiacounty.go.ke</span>
            </div>
            <div className="flex items-center gap-3">
              <span>County Assembly & Executive HQ, Matayos, Busia</span>
              <span className="text-emerald-800 font-bold">● PUBLIC CHARTER CONNECTED</span>
            </div>
          </div>
        </div>

        {/* Navigation & Branding Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Branding Logo Area */}
            <div 
              onClick={() => { setActiveTab('home'); setSelectedDeptId(null); }}
              className="flex items-center gap-3 cursor-pointer select-none group focus:outline-hidden"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') { setActiveTab('home'); setSelectedDeptId(null); } }}
            >
              {/* National Crest Graphic */}
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold relative border-2 border-slate-800 shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                {/* Visual Shield layout */}
                <span className="text-stone-300 font-serif text-sm">COB</span>
                {/* Kenya colors strip inside */}
                <div className="absolute right-0 top-0 bottom-0 w-1 rounded-r-lg bg-kenya-red" />
              </div>

              <div className="text-left">
                <p className="text-xs font-mono font-bold tracking-widest text-slate-400 leading-none">REPUBLIC OF KENYA</p>
                <h2 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-tight mt-1">
                  {language === 'en' ? 'County Government of Busia' : 'Serikali ya Kaunti ya Busia'}
                </h2>
                <p className="text-[9px] sm:text-[10px] font-mono tracking-wider font-semibold text-emerald-800 uppercase leading-none mt-0.5">
                  ★ Gateway to East Africa / Lango la Mashariki ★
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {appNavKeys.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    id={`nav-link-${item.id}`}
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSelectedDeptId(null);
                    }}
                    className={`py-1.5 px-3 rounded-lg text-xs font-semibold font-sans transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-red-50 text-[#BB0000] border border-red-200' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    {language === 'en' ? item.label.split('(')[0].trim() : (item.label.includes('(') ? item.label.split('(')[1].replace(')', '').trim() : item.label)}
                  </button>
                );
              })}
            </nav>

            {/* Right Tools: Bilingual Toggle & Mobile trigger */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <button
                id="language-toggle"
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors border border-slate-200 cursor-pointer"
                title="Badilisha lugha hadi Kiswahili / Toggle to English"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{language === 'en' ? 'Kiswahili (SW)' : 'English (EN)'}</span>
              </button>

              {/* Mobile Menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 lg:hidden cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown Panels */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-150 bg-white shadow-xl max-h-[80vh] overflow-y-auto w-full absolute left-0 right-0 z-50 p-4 border-b-4 border-kenya-red text-left">
            <div className="flex flex-col gap-2">
              {appNavKeys.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setSelectedDeptId(null);
                      setMobileMenuOpen(false);
                    }}
                    className={`p-3.5 rounded-xl text-xs font-semibold text-left transition-all ${
                      isActive 
                        ? 'bg-red-50 text-[#BB0000] border border-red-200' 
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-150'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Body Layout and Routing */}
      <main className="flex-1">
        
        {/* TAB 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div className="space-y-0">
            {/* 1. Hero banner section with CTAs */}
            <CountyHero 
              language={language} 
              setActiveTab={setActiveTab} 
              setSelectedDeptId={setSelectedDeptId} 
            />

            {/* 2. Messages from Governor & Leadership */}
            <GovernorMessage 
              language={language} 
              departments={departments} 
            />

            {/* 3. Embedded Departments directory section */}
            <section className="py-16 bg-slate-50 border-b border-slate-100 scroll-mt-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-kenya-red bg-red-50 py-1 px-3 rounded-full border border-red-100">
                    {language === 'en' ? 'County Administrative Organs' : 'Vipengele vya Utawala'}
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
                    {language === 'en' ? 'County Executive Cabinet Departments' : 'Idara Kumi za kisheria Kamati ya Utendaji'}
                  </h2>
                  <div className="w-16 h-1 bg-kenya-green mx-auto mt-4 rounded-full" />
                </div>

                <DepartmentPortal 
                  language={language}
                  departments={departments}
                  selectedDeptId={selectedDeptId}
                  setSelectedDeptId={setSelectedDeptId}
                  setActiveTab={setActiveTab}
                />
              </div>
            </section>

            {/* 4. top e-services hub */}
            <EServicesHub language={language} />

            {/* 5. County developments trackers & subcounties map */}
            <ProjectsMap language={language} />

            {/* 6. Legal PDF Documents Transparency paper library */}
            <TransparencyPortal language={language} />

            {/* 7. Citizen grievance lodge ombudsperson */}
            <CitizenFeedback language={language} departments={departments} />
          </div>
        )}

        {/* TAB 2: DEPARTMENTS CORE AREA */}
        {activeTab === 'departments' && (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DepartmentPortal 
              language={language}
              departments={departments}
              selectedDeptId={selectedDeptId}
              setSelectedDeptId={setSelectedDeptId}
              setActiveTab={setActiveTab}
            />
          </section>
        )}

        {/* TAB 3: ESERVICES PORTAL DIRECT LINK */}
        {activeTab === 'eservices' && (
          <EServicesHub language={language} />
        )}

        {/* TAB 4: PROJECTS TRACKER DIRECT */}
        {activeTab === 'projects' && (
          <ProjectsMap language={language} />
        )}

        {/* TAB 5: PROCUREMENT AND VACANCY ANNOUNCEMENTS */}
        {activeTab === 'news' && (
          <NewsTendersCareers language={language} />
        )}

        {/* TAB 6: GRIEVANCE LODGER COMPLAINTS */}
        {activeTab === 'feedback' && (
          <CitizenFeedback language={language} departments={departments} />
        )}

        {/* TAB 7: LEGISLATIVE PAPER DOWNLOADS TRANSPARENCY */}
        {activeTab === 'transparency' && (
          <TransparencyPortal language={language} />
        )}

      </main>

      {/* Corporate Compliance Legal Footer */}
      <footer className="bg-slate-950 text-white border-t-4 border-kenya-green pt-16 pb-8 font-sans text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10">
          
          {/* Logo & Address info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 bg-white text-slate-950 font-bold rounded-lg flex items-center justify-center text-xs">
                CG
              </div>
              <h3 className="text-sm font-extrabold tracking-tight uppercase">
                {language === 'en' ? 'County Government of Busia' : 'Serikali ya Kaunti ya Busia'}
              </h3>
            </div>
            
            <p className="text-xs text-slate-400 font-mono italic">
              "Deliver services to the people with transparency and accountability."
            </p>

            <div className="text-xs text-slate-400 font-mono space-y-2">
              <p><strong>PO Box Address:</strong> County Government of Busia, P.O. Box 468-50400, Busia, Kenya</p>
              <p><strong>Main Telephone Line:</strong> +254 792 000 000 / +254 733 000 000</p>
              <p><strong>Official E-Mail:</strong> info@busiacounty.go.ke / complaints@busiacounty.go.ke</p>
            </div>
          </div>

          {/* Quick links to departments */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#D4AF37] font-mono uppercase tracking-wider">PSC COUNTY EXECUTIVE SECTORS</h4>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-400">
              {departments.slice(0, 5).map(d => (
                <button 
                  key={d.id} 
                  onClick={() => { setActiveTab('departments'); setSelectedDeptId(d.id); document.getElementById('active-department-portal')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  › {d.name}
                </button>
              ))}
              <span className="text-[10px] text-slate-500 font-mono uppercase mt-1">And 5 other PSC directories</span>
            </div>
          </div>

          {/* E-services direct portals links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#D4AF37] font-mono uppercase tracking-wider">POPULAR PORTAL LINKS</h4>
            <div className="flex flex-col gap-1.5 text-xs text-slate-400">
              <button onClick={() => { setActiveTab('eservices'); }} className="hover:text-white transition-colors cursor-pointer text-left">› Single Business Permits</button>
              <button onClick={() => { setActiveTab('eservices'); }} className="hover:text-white transition-colors cursor-pointer text-left">› Clear Land Rates</button>
              <button onClick={() => { setActiveTab('news'); }} className="hover:text-white transition-colors cursor-pointer text-left">› Supply Bids & Tenders</button>
              <button onClick={() => { setActiveTab('news'); }} className="hover:text-white transition-colors cursor-pointer text-left">› CPSB Careers Recruitment</button>
              <button onClick={() => { setActiveTab('feedback'); }} className="hover:text-white transition-colors cursor-pointer text-left">› Submit Grievance Record</button>
            </div>
          </div>

          {/* Constitutional Rights Declarations */}
          <div className="md:col-span-3 space-y-4 text-xs text-slate-405">
            <h4 className="text-xs font-bold text-kenya-red font-mono uppercase tracking-wider">CONSTITUTIONAL ALERTS</h4>
            <p className="text-slate-400 leading-normal font-sans">
              All processes correspond fully to the <strong>Constitution of Kenya, 2010</strong>, the Public Finance Management Act, and county specific bylaws. Certified with full privacy compliance and physical administrative records.
            </p>
            <div className="flex gap-2">
              <div className="w-6 h-4 bg-kenya-black shrink-0 border border-slate-700" title="Kenya Colors - Black" />
              <div className="w-6 h-4 bg-white shrink-0" title="Kenya Colors - White" />
              <div className="w-6 h-4 bg-kenya-red shrink-0" title="Kenya Colors - Red" />
              <div className="w-6 h-4 bg-kenya-green shrink-0" title="Kenya Colors - Green" />
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} County Government of Busia, Republic of Kenya. All Statutory Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">County Service Charter</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors font-semibold text-kenya-red">Report Corruption</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
