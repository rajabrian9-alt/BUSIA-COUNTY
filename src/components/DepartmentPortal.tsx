import React from 'react';
import { 
  Briefcase, Coins, HeartPulse, Sprout, GraduationCap, MapPin, 
  Hammer, Droplet, Users, ShieldAlert, ArrowRight, Download, Phone, Mail, HelpCircle, ArrowLeft
} from 'lucide-react';
import StaffHierarchy from './StaffHierarchy';

interface DeptPortalProps {
  language: 'en' | 'sw';
  departments: any[];
  selectedDeptId: string | null;
  setSelectedDeptId: (id: string | null) => void;
  setActiveTab: (tab: string) => void;
}

const iconMap: { [key: string]: React.ElementType } = {
  Briefcase: Briefcase,
  Coins: Coins,
  HeartPulse: HeartPulse,
  Sprout: Sprout,
  GraduationCap: GraduationCap,
  MapPin: MapPin,
  Hammer: Hammer,
  Droplet: Droplet,
  Users: Users,
  ShieldAlert: ShieldAlert
};

export default function DepartmentPortal({ language, departments, selectedDeptId, setSelectedDeptId, setActiveTab }: DeptPortalProps) {
  
  // Resolve icons dynamically
  const getIcon = (iconName: string) => {
    return iconMap[iconName] || ShieldAlert;
  };

  const handleDownload = (formName: string) => {
    alert(`"${formName}" downloaded successfully.`);
  };

  // If a department is selected, show its deep portal details
  if (selectedDeptId) {
    const dept = departments.find(d => d.id === selectedDeptId);
    if (!dept) return null;
    const IconComponent = getIcon(dept.icon);

    return (
      <div id="active-department-portal" className="bg-white rounded-2xl border border-slate-150 p-6 sm:p-8 space-y-8 text-left animate-in fade-in zoom-in-95 duration-200">
        
        {/* Back navigation and header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-150 pb-5 gap-4">
          <div className="flex items-start gap-4">
            <button 
              onClick={() => setSelectedDeptId(null)}
              className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-xl transition-all shrink-0 cursor-pointer"
              title="Go back to directory"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold uppercase">
                {language === 'en' ? 'CONSTITUTIONAL COUNTY EXECUTIVE DEPARTMENT' : 'IDARA YA KISHERIA YA UTENDAJI YA KAUNTI'}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                {language === 'en' ? dept.name : dept.nameKiswahili}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            {/* Direct action complaints link */}
            <button 
              onClick={() => {
                setActiveTab('feedback');
                setTimeout(() => {
                  document.getElementById('feedback-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="py-2 px-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <span>{language === 'en' ? 'Report Dept Issue' : 'Ripoti Tatizo la Idara'}</span>
              <HelpCircle className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Detailed Grid: Mandate, Services, and Downloads */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Staff hierarchical directory sidebar */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">OFFICIAL PUBLIC DIRECTORY</h4>
              <h5 className="text-base font-extrabold text-slate-800 tracking-tight">
                {language === 'en' ? 'Departmental Staff Hierarchy' : 'Orodha ya Ngazi za Watumishi'}
              </h5>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'en' 
                  ? 'Organized structure from the County Executive Committee Member (CECM) down to junior administrative officers as per public service circular regulations.'
                  : 'Muundo rasmi kulingana na miongozo ya utumishi wa umma, kuanzia CECM hadi watendaji wa ngazi za chini.'}
              </p>
            </div>

            {/* Hierarchical Staff Directory mapping StaffHierarchy.tsx */}
            <div className="space-y-3 max-h-[550px] overflow-y-auto pr-2 divide-y-2 divide-slate-50">
              {dept.staff.map((employee: any, idx: number) => (
                <div key={idx} className={idx !== 0 ? "pt-3" : ""}>
                  <StaffHierarchy 
                    position={employee.position}
                    name={employee.name}
                    /* REPLACE_DEPT_EMAILS */
                    email={employee.email}
                    phone={employee.phone}
                    level={employee.level}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Core mandates, services & downloads list */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Core Department Mandate */}
            <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl text-left space-y-3">
              <h4 className="text-xs font-mono font-bold text-kenya-red uppercase tracking-wider">CORE MANDATE & JURISDICTIONS</h4>
              <ul className="space-y-2 text-xs text-slate-600 font-sans list-disc pl-4 leading-relaxed">
                {dept.mandate.map((m: string, idx: number) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            {/* Top Services Offered */}
            <div className="border border-slate-150 p-5 rounded-2xl text-left space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">TOP SERVICES OFFERED</h4>
              <div className="divide-y divide-slate-100 font-sans text-xs">
                {dept.services.map((item: string, idx: number) => (
                  <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-2.5">
                    <span className="font-bold text-slate-800">{item}</span>
                    <button 
                      onClick={() => {
                        setActiveTab('eservices');
                        setTimeout(() => {
                          const container = document.getElementById('eservices-section');
                          container?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                      className="text-[10px] font-semibold text-kenya-red hover:underline flex items-center gap-0.5 cursor-pointer shrink-0"
                    >
                      <span>Apply</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Documents PDFs */}
            <div className="border border-slate-150 p-5 rounded-2xl text-left space-y-4 bg-slate-50">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">DOWNLOADABLE PUBLIC FORMS</h4>
              <div className="space-y-2.5">
                {dept.forms.map((form: any, idx: number) => (
                  <div 
                    key={idx}
                    className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs"
                  >
                    <div className="text-left space-y-0.5">
                      <p className="font-bold text-slate-800 leading-snug truncate max-w-[200px]">{form.name}</p>
                      <p className="text-[10px] text-slate-400 font-mono">{form.type} • {form.date}</p>
                    </div>
                    <button 
                      onClick={() => handleDownload(form.name)}
                      className="p-1.5 bg-slate-50 hover:bg-kenya-red hover:text-white rounded-lg text-slate-600 transition-colors cursor-pointer"
                      title="Download PDF Form"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }

  // Directory visual grid index cards
  return (
    <div id="departments-directory" className="space-y-8 text-left">
      <div className="max-w-3xl">
        <h3 className="text-base font-mono font-bold text-slate-400 uppercase tracking-widest">DEPARTMENTAL DIRECTORY SPECIAL</h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          {language === 'en'
            ? 'Access statutory structures, specific public service mandates, downloadable utility forms, and real official contact listings for the 10 constitutional county departments.'
            : 'Fikia muundo rasmi wa kiidara, majukumu ya kisheria ya kaunti, pakua fomu muhimu za huduma, na kagua orodha husika ya watumishi wa umma katika idara 10 zilizoainishwa.'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {departments.map((dept) => {
          const IconComponent = getIcon(dept.icon);
          return (
            <div 
              key={dept.id}
              onClick={() => {
                setSelectedDeptId(dept.id);
                document.getElementById('active-department-portal')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white border border-slate-150 p-5 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="p-2.5 shrink-0 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-red-50 group-hover:border-red-100 transition-colors w-11 h-11 flex items-center justify-center">
                  <IconComponent className="h-5 w-5 text-slate-600 group-hover:text-kenya-red transition-colors" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-800 leading-tight group-hover:text-kenya-red transition-all">
                    {language === 'en' ? dept.name : dept.nameKiswahili}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-mono">
                    {dept.staff.length} {language === 'en' ? 'REG STAFF LISTED' : 'WATUMISHI WALIOANDIKWA'}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between text-[11px] font-semibold text-slate-500 group-hover:text-kenya-red transition-colors">
                <span>{language === 'en' ? 'Enter Department' : 'Fungua Milango'}</span>
                <ArrowRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
