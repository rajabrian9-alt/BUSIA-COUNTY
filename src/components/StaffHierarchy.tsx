import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface StaffHierarchyProps {
  position: string;
  name: string;
  email: string;
  phone: string;
  level?: string;
}

export default function StaffHierarchy({ position, name, email, phone, level }: StaffHierarchyProps) {
  // Determine badge color and styling based on hierarchy level
  const getBadgeColor = (pos: string) => {
    const p = pos.toLowerCase();
    if (p.includes('governor') || p.includes('cecm') || p.includes('executive committee')) {
      return {
        bg: 'bg-red-50 text-red-700 border-red-200',
        dot: 'bg-kenya-red',
        rank: 'Executive Cabinet (Grade 1)'
      };
    }
    if (p.includes('chief officer')) {
      return {
        bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        dot: 'bg-kenya-green',
        rank: 'Accounting Officer (Grade 2)'
      };
    }
    if (p.includes('director') && !p.includes('deputy') && !p.includes('assistant')) {
      return {
        bg: 'bg-blue-50 text-blue-700 border-blue-200',
        dot: 'bg-blue-600',
        rank: 'Technical Directorate Head (Grade 3)'
      };
    }
    if (p.includes('deputy director') || p.includes('assistant director')) {
      return {
        bg: 'bg-amber-50 text-amber-700 border-amber-200',
        dot: 'bg-amber-600',
        rank: 'Directorate Leadership (Grade 4)'
      };
    }
    if (p.includes('senior') || p.includes('principal') || p.includes('engineer') || p.includes('surveyor') || p.includes('planner') || p.includes('auditor')) {
      return {
        bg: 'bg-purple-50 text-purple-700 border-purple-200',
        dot: 'bg-purple-600',
        rank: 'Senior Technical Officer (Grade 5)'
      };
    }
    if (p.includes('officer i') || p.includes('officer ii') || p.includes('officer iii') || p.includes('instructor')) {
      return {
        bg: 'bg-slate-50 text-slate-700 border-slate-200',
        dot: 'bg-slate-600',
        rank: 'Technical Officer (Grade 6)'
      };
    }
    return {
      bg: 'bg-gray-50 text-gray-600 border-gray-100',
      dot: 'bg-gray-400',
      rank: 'Support & Operations (Grade 7)'
    };
  };

  const style = getBadgeColor(position);

  return (
    <div 
      id={`staff-${name.toLowerCase().replace(/\s+/g, '-')}`}
      className="p-4 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden group"
    >
      {/* Visual Accent corresponding to Kenya flags */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
        position.toLowerCase().includes('governor') || position.toLowerCase().includes('cecm') 
          ? 'bg-kenya-red' 
          : position.toLowerCase().includes('chief officer')
            ? 'bg-kenya-green'
            : 'bg-slate-200 group-hover:bg-slate-300'
      }`} />

      {/* Profile & Info */}
      <div className="flex items-start gap-3.5 pl-2">
        <div className="hidden sm:flex h-11 w-11 shrink-0 rounded-full bg-slate-50 items-center justify-center border border-slate-100 font-semibold text-slate-700 group-hover:bg-slate-100 transition-colors">
          {name.split(' ').filter(n => !n.includes('.')).map(n => n[0]).slice(0, 2).join('')}
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-sm font-bold text-slate-800 tracking-tight">{name}</h4>
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${style.bg}`}>
              <span className={`h-1.5 w-1.5 rounded-full mr-1.5 ${style.dot}`} />
              {style.rank}
            </span>
          </div>
          <p className="text-xs font-medium text-slate-500">{position}</p>
        </div>
      </div>

      {/* Official Contacts Info & Direct Actions */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs font-mono text-slate-600 shrink-0 self-stretch sm:self-center items-start sm:items-center">
        {/* Email with {REPLACE_DEPT_EMAILS} standard comment */}
        <a 
          href={`mailto:${email}`} 
          className="flex items-center gap-1.5 hover:text-kenya-red transition-colors whitespace-nowrap py-1 px-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100"
          title="Send official email"
        >
          {/* REPLACE_DEPT_EMAILS */}
          <Mail className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          <span>{email}</span>
        </a>
        <a 
          href={`tel:${phone}`} 
          className="flex items-center gap-1.5 hover:text-kenya-green transition-colors whitespace-nowrap py-1 px-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100"
          title="Call official line"
        >
          <Phone className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          <span>{phone}</span>
        </a>
      </div>
    </div>
  );
}
