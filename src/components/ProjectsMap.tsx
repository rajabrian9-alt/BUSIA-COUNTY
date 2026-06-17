import React, { useState } from 'react';
import { MapPin, CheckCircle2, RefreshCw, Calendar, Folder, Target, Award, ListFilter } from 'lucide-react';

interface ProjectsProps {
  language: 'en' | 'sw';
}

export default function ProjectsMap({ language }: ProjectsProps) {
  const [selectedSubCounty, setSelectedSubCounty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const subCounties = [
    { id: 'all', name: 'All Sub-Counties (Kaunti Ndogo Zote)', seats: 'Busia HQ' },
    { id: 'matayos', name: 'Matayos Sub-County', seats: 'Matayos Market' },
    { id: 'butula', name: 'Butula Sub-County', seats: 'Butula Town' },
    { id: 'nambale', name: 'Nambale Sub-County', seats: 'Nambale Urban' },
    { id: 'teso-north', name: 'Teso North Sub-County', seats: 'Amagoro' },
    { id: 'teso-south', name: 'Teso South Sub-County', seats: 'Amukura' },
    { id: 'funyula', name: 'Funyula (Samia) Sub-County', seats: 'Funyula Town' },
    { id: 'bunyala', name: 'Bunyala (Budalangi) Sub-County', seats: 'Port Victoria' }
  ];

  const categories = [
    { id: 'all', name: 'All Sectors' },
    { id: 'Infrastructure', name: 'Roads & Infrastructure' },
    { id: 'Health', name: 'Health Services' },
    { id: 'Water', name: 'Water & Environment' },
    { id: 'Agriculture', name: 'Agriculture & Fisheries' },
    { id: 'Education', name: 'Education & ECDE' }
  ];

  const statusOptions = [
    { id: 'all', name: 'All Statuses' },
    { id: 'Completed', name: 'Completed (Yaliyokamilika)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    { id: 'Ongoing', name: 'Ongoing (Yanovayoendelea)', color: 'text-blue-700 bg-blue-50 border-blue-200' },
    { id: 'Planned', name: 'Planned (Yaliyopangwa)', color: 'text-amber-700 bg-amber-50 border-amber-200' }
  ];

  // Statutory developments representation for complete transparency
  const rawProjects = [
    {
      id: 1,
      name: 'County Referral Hospital Surgical Suite Upgrade',
      subCounty: 'matayos',
      category: 'Health',
      status: 'Completed',
      cost: 'KES 45,000,000',
      description: 'Construction and equipping of a Level-5 dual theater sterile surgical suite, boosting inpatient emergency capability.',
      completionPct: 100
    },
    {
      id: 2,
      name: 'Malaba Urban Bypass Dual-Carriageway Grading',
      subCounty: 'teso-north',
      category: 'Infrastructure',
      status: 'Ongoing',
      cost: 'KES 120,000,000',
      description: 'Physical grading and tarmac installation on the border cargo transit bypass, easing municipal traffic congestion.',
      completionPct: 75
    },
    {
      id: 3,
      name: 'Lake Victoria Riparian Dykes Construction',
      subCounty: 'bunyala',
      category: 'Water',
      status: 'Completed',
      cost: 'KES 85,000,000',
      description: 'Mitigation walls and flood barrier installation along Bunyala West shorelines to shield local communities at Port Victoria.',
      completionPct: 100
    },
    {
      id: 4,
      name: 'Bunyala Fish Cold-Storage Infrastructure',
      subCounty: 'bunyala',
      category: 'Agriculture',
      status: 'Completed',
      cost: 'KES 24,000,000',
      description: 'Implementation of solar-refrigerated containment facilities for local fish cooperatives at Port Victoria border channels.',
      completionPct: 100
    },
    {
      id: 5,
      name: 'Nambale Community Boreholes Solarization',
      subCounty: 'nambale',
      category: 'Water',
      status: 'Completed',
      cost: 'KES 18,500,000',
      description: 'Converting diesel pumps to hybrid solar arrays across 12 high-capacity deep wells in rural Nambale Central.',
      completionPct: 100
    },
    {
      id: 6,
      name: 'Butula Youth Polytechnic Workshop Upgrades',
      subCounty: 'butula',
      category: 'Education',
      status: 'Ongoing',
      cost: 'KES 14,000,000',
      description: 'Re-tooling engineering and wood joinery centers with professional electrical machinery and solar backup.',
      completionPct: 40
    },
    {
      id: 7,
      name: 'Teso South Rural Water Pipe Pumping Networks',
      subCounty: 'teso-south',
      category: 'Water',
      status: 'Planned',
      cost: 'KES 32,000,000',
      description: 'Extending water pipelines from the high-pressure Amukura boreholes to supply up to 4,500 local households.',
      completionPct: 5
    },
    {
      id: 8,
      name: 'Funyula (Sio Port) Modern Market Hall Construction',
      subCounty: 'funyula',
      category: 'Infrastructure',
      status: 'Ongoing',
      cost: 'KES 29,800,000',
      description: 'Construction of a twin sectoral trading center complete with sanitation points and 180 structured merchant stalls.',
      completionPct: 60
    },
    {
      id: 9,
      name: 'Alupe University Medical Center Joint Clinic',
      subCounty: 'teso-south',
      category: 'Health',
      status: 'Planned',
      cost: 'KES 65,000,000',
      description: 'Collaborative development of a regional referral and research auxiliary clinic specializing in tropical diagnostics.',
      completionPct: 0
    },
    {
      id: 10,
      name: 'Matayos Ward Crop Storehouses',
      subCounty: 'matayos',
      category: 'Agriculture',
      status: 'Completed',
      cost: 'KES 9,500,000',
      description: 'Establishment of 2 ventilated grain silos for local cooperatives to minimize post-harvest maize storage deterioration.',
      completionPct: 100
    }
  ];

  const filteredProjects = rawProjects.filter(p => {
    const scMatch = selectedSubCounty === 'all' || p.subCounty === selectedSubCounty;
    const catMatch = selectedCategory === 'all' || p.category === selectedCategory;
    const statMatch = selectedStatus === 'all' || p.status === selectedStatus;
    return scMatch && catMatch && statMatch;
  });

  const getStatusStyle = (status: string) => {
    if (status === 'Completed') return 'text-emerald-700 bg-emerald-50 border-emerald-200';
    if (status === 'Ongoing') return 'text-blue-700 bg-blue-50 border-blue-200';
    return 'text-amber-700 bg-amber-50 border-amber-200';
  };

  const getStatusIcon = (status: string) => {
    if (status === 'Completed') return <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />;
    if (status === 'Ongoing') return <RefreshCw className="h-3.5 w-3.5 text-blue-500 animate-spin" style={{ animationDuration: '3s' }} />;
    return <Calendar className="h-3.5 w-3.5 text-amber-500" />;
  };

  return (
    <section id="projects-section" className="py-16 bg-white scroll-mt-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-kenya-red bg-red-50 py-1 px-3 rounded-full border border-red-100">
            {language === 'en' ? 'Busia Development & FLLoCA Track' : 'Ufuatiliaji Maendeleo Busia'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            {language === 'en' ? 'Interactive Projects Map & Logs' : 'Kadi na Ramani ya Maendeleo'}
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            {language === 'en' 
              ? 'Complete transparency in our budget execution. Clean local project dashboard showing completed, ongoing, and planned county developments across seven sub-counties.'
              : 'Uwazi kamili katika utekelezaji wa bajeti zetu. Kagua maendeleo yaliyopangwa, yanayoendelea au kukamilika katika kaunti ndogo sote saba.'}
          </p>
          <div className="w-16 h-1 bg-kenya-green mx-auto mt-4 rounded-full" />
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Map representation & filter switches */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-150 rounded-2xl p-5 space-y-6">
            
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">MAP NAVIGATION</h3>
              <h4 className="text-sm font-bold text-slate-800">{language === 'en' ? 'Select Sub-County Area' : 'Chagua Kaunti Ndogo'}</h4>
            </div>

            {/* List of Clickable Subcounty Anchors representing visual map coordinates */}
            <div className="flex flex-row flex-wrap lg:flex-col gap-2">
              {subCounties.map((sub) => {
                const isSelected = selectedSubCounty === sub.id;
                // Count corresponding projects
                const count = rawProjects.filter(p => sub.id === 'all' || p.subCounty === sub.id).length;

                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubCounty(sub.id)}
                    className={`flex-1 min-w-[140px] flex items-center justify-between p-3.5 rounded-xl border transition-all text-xs font-sans text-left cursor-pointer ${
                      isSelected 
                        ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-md' 
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className={`h-4 w-4 shrink-0 ${isSelected ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
                      <div>
                        <p className="font-bold leading-none">{sub.name.split(' ')[0]}</p>
                        <p className={`text-[10px] mt-0.5 leading-none ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>{sub.seats}</p>
                      </div>
                    </div>
                    <span className={`inline-flex items-center justify-center h-5 w-5 rounded-full text-[10px] font-mono font-bold ${
                      isSelected ? 'bg-kenya-red text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Total summary visualization badges */}
            <div className="p-4 bg-slate-900 rounded-xl text-left border border-slate-800 space-y-2.5">
              <p className="text-[10px] font-mono text-[#D4AF37] tracking-wider font-bold">DEVELOPMENT CUMULATIVES</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-1.5 bg-slate-800 rounded-lg">
                  <p className="text-xs font-bold text-white">5 (50%)</p>
                  <p className="text-[9px] text-slate-400">Completed</p>
                </div>
                <div className="p-1.5 bg-slate-800 rounded-lg">
                  <p className="text-xs font-bold text-white">3 (30%)</p>
                  <p className="text-[9px] text-slate-400">Ongoing</p>
                </div>
                <div className="p-1.5 bg-slate-800 rounded-lg">
                  <p className="text-xs font-bold text-white">2 (20%)</p>
                  <p className="text-[9px] text-slate-400">Planned</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Search filters and results */}
          <div className="lg:col-span-8 space-y-5">
            
            {/* Sector / Status selectors toolbars */}
            <div className="bg-slate-50 p-4 border border-slate-150 rounded-xl flex flex-wrap gap-4 items-center justify-between">
              
              {/* Sector Filters */}
              <div className="flex items-center gap-2">
                <ListFilter className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">{language === 'en' ? 'Sector:' : 'Sekta:'}</span>
                <div className="flex gap-1.5 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`py-1 px-2.5 rounded-lg text-[10px] font-semibold border transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-kenya-green text-white border-kenya-green'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filters */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">{language === 'en' ? 'Status:' : 'Hali:'}</span>
                <div className="flex gap-1.5 flex-wrap">
                  {statusOptions.map((stat) => (
                    <button
                      key={stat.id}
                      onClick={() => setSelectedStatus(stat.id)}
                      className={`py-1 px-2.5 rounded-lg text-[10px] font-semibold border transition-all cursor-pointer ${
                        selectedStatus === stat.id
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {stat.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* List of projects logs */}
            <div className="space-y-4">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white border border-slate-150 rounded-xl p-5 hover:border-slate-200 transition-all text-left flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase bg-slate-100 py-0.5 px-2 rounded-lg text-slate-500 font-bold">
                          {project.category}
                        </span>
                        <span className="text-[10px] font-mono text-[#D4AF37] font-bold">
                          ● {subCounties.find(s => s.id === project.subCounty)?.name}
                        </span>
                      </div>

                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getStatusStyle(project.status)}`}>
                        {getStatusIcon(project.status)}
                        <span>{project.status}</span>
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-800 tracking-tight leading-snug">
                      {project.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-normal font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Completion bar with Cost details */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                    
                    {/* Progress tracking line */}
                    <div className="flex-1 max-w-xs space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Project Milestone</span>
                        <span className="font-bold text-slate-600">{project.completionPct}% Completed</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            project.status === 'Completed' 
                              ? 'bg-kenya-green' 
                              : project.status === 'Ongoing'
                                ? 'bg-blue-600'
                                : 'bg-amber-500'
                          }`} 
                          style={{ width: `${project.completionPct}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <p className="text-[10px] font-mono text-slate-400 leading-none">APPROVED COST</p>
                      <p className="text-xs font-bold text-slate-800 leading-none mt-1">{project.cost}</p>
                    </div>

                  </div>
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-xl text-xs font-sans">
                  No developments found corresponding to current active filters.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
