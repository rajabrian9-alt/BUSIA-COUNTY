import React, { useState } from 'react';
import { HelpCircle, MessageSquare, Clipboard, Search, AlertCircle, CheckCircle2, ShieldAlert, Loader2, ArrowRight } from 'lucide-react';

interface FeedbackProps {
  language: 'en' | 'sw';
  departments: any[];
}

export default function CitizenFeedback({ language, departments }: FeedbackProps) {
  const [formData, setFormData] = useState<any>({});
  const [fileDetails, setFileDetails] = useState<any | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [issuedTicket, setIssuedTicket] = useState<string | null>(null);

  // Ticket status check
  const [lookupTicket, setLookupTicket] = useState<string>('');
  const [lookedUpData, setLookedUpData] = useState<any | null>(null);
  const [lookupError, setLookupError] = useState<string | null>(null);

  // Wards listed per Busia county
  const wardsList = [
    'Matayos Central', 'Bukhayo West', 'Nambale Township', 'Malaba Central', 'Amukura Central', 'Malaba South', 'Bunyala Central', 'Bunyala South', 'Funyula West'
  ];

  const issueTypes = [
    { id: 'water-shortage', label: 'Water Supply Pipelink Outage (Kutofanya kazi kwa Maji)' },
    { id: 'potholes', label: 'Road Structural Failures & Potholes (Barabara na Mashimo)' },
    { id: 'waste-dumping', label: 'Illegal Solid Waste & Garbage Accumulation (Uchafu na Taka)' },
    { id: 'permit-delays', label: 'E-Service Trade Permit Processing Delays (Ucheleweshaji wa Vibali)' },
    { id: 'medical-shortage', label: 'County Health Center Service Outages (Uhaba wa Dawa)' },
    { id: 'other', label: 'General Administration Complaint (Malalamiko mengineyo)' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Security Constraint: File upload size <= 5MB
    // Security specifications: Contact forms with validation, no file uploads > 5MB
    const limitBytes = 5 * 1024 * 1024; // 5MB
    if (file.size > limitBytes) {
      setFileError(language === 'en' ? 'File upload exceeds security limit of 5MB.' : 'Faili inazidi kikomo cha usalama cha 5MB.');
      setFileDetails(null);
      e.target.value = ''; // Clear input
    } else {
      setFileError(null);
      setFileDetails({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        type: file.type
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission to CRM
    setTimeout(() => {
      setIsSubmitting(false);
      const newTicket = 'BSC-GRV-' + Math.floor(10000 + Math.random() * 90000);
      setIssuedTicket(newTicket);
      
      // Save to mock database in localStorage for checking
      const ticketPayload = {
        id: newTicket,
        name: formData.fullName,
        department: departments.find(d => d.id === formData.department)?.name || 'General Devolution',
        issue: issueTypes.find(i => i.id === formData.issueType)?.label || 'General Issue',
        description: formData.description,
        ward: formData.ward,
        date: new Date().toLocaleDateString('en-KE'),
        status: 'In Review (Inashughulikiwa)',
        eta: 'Within 5 Working Days'
      };
      localStorage.setItem(newTicket, JSON.stringify(ticketPayload));
      
      // Clear form
      setFormData({});
      setFileDetails(null);
    }, 2000);
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupError(null);
    setLookedUpData(null);

    const saved = localStorage.getItem(lookupTicket.trim().toUpperCase());
    if (saved) {
      setLookedUpData(JSON.parse(saved));
    } else {
      // Return a simulated structured ticket if not found to verify ticket lookup
      if (lookupTicket.trim().toUpperCase().startsWith('BSC-')) {
        setLookedUpData({
          id: lookupTicket.trim().toUpperCase(),
          name: 'Citizen Client',
          department: 'Health & Sanitation',
          issue: 'County Health Center Service Outages',
          description: 'Insufficiency of pharmaceutical supplies reported at clinical station.',
          ward: 'Nambale Township',
          date: '2026-06-12',
          status: 'Resolved (Ilikamilika)',
          eta: 'Completed'
        });
      } else {
        setLookupError(language === 'en' ? 'Invalid ticket number. Please try entering BSC-GRV-84950' : 'Nambari isiyofaa. Tafadhali hakikisha format, mfano BSC-GRV-84950');
      }
    }
  };

  return (
    <section id="feedback-section" className="py-16 bg-slate-50 scroll-mt-12 border-b border-slate-100 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-kenya-red bg-red-50 py-1 px-3 rounded-full border border-red-100">
            {language === 'en' ? 'Citizen Ombudsperson & Grievances' : 'Ofisi ya Malalamiko ya Wananchi'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            {language === 'en' ? 'Grievance Redressal & Support' : 'Wasilisha Malalamiko na Maoni'}
          </h2>
          <div className="w-16 h-1 bg-kenya-green mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-slate-200/80 rounded-2xl space-y-6">
            
            <div className="space-y-1.5 border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                {language === 'en' ? 'Lodge Official Complaint Statement' : 'Wasilisha Taarifa Kamili ya Malalamiko'}
              </h3>
              <p className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-100 py-2 px-3.5 rounded-xl font-mono">
                {language === 'en' 
                  ? '✉ Your complaint will be addressed within 7 working days per County Service Charter guidelines.'
                  : '✉ Malalamiko yako yatashughulikiwa kwa muda usiozidi siku 7 za kazi kulingana na Mkataba wa Huduma.'}
              </p>
            </div>

            {issuedTicket ? (
              <div className="p-6 bg-[#fffdf5] rounded-2xl border border-dashed border-slate-200 text-center space-y-4 max-w-md mx-auto">
                <CheckCircle2 className="h-10 w-10 text-kenya-green mx-auto" />
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-800">Statement Lodged Successfully</h4>
                  <p className="text-xs text-slate-500">
                    Your complaint has been recorded in the central CRM database. Write down or copy the tracking ticket code below.
                  </p>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl max-w-xs mx-auto text-center border border-slate-800">
                  <p className="text-[10px] font-mono text-[#D4AF37] leading-none">GRG TICKET CODE</p>
                  <p className="text-lg font-mono font-extrabold text-white mt-1.5">{issuedTicket}</p>
                </div>
                <button 
                  onClick={() => setIssuedTicket(null)}
                  className="py-1.5 px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg transition-all cursor-pointer"
                >
                  Lodge Another Concern
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-slate-600">Full Official Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required
                      value={formData.fullName || ''}
                      onChange={handleInputChange}
                      placeholder="e.g. Emily Omuse Achiengo"
                      className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden focus:border-kenya-red"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-slate-600">Contact Telephone *</label>
                    <input 
                      type="text" 
                      name="phone" 
                      required
                      value={formData.phone || ''}
                      onChange={handleInputChange}
                      placeholder="e.g. 0722000123"
                      className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden focus:border-kenya-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-slate-600">Representative Ward *</label>
                    <select 
                      name="ward" 
                      required
                      value={formData.ward || ''}
                      onChange={handleInputChange}
                      className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg bg-white"
                    >
                      <option value="">-- Choose Ward --</option>
                      {wardsList.map(w => <option key={w} value={w}>{w}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="block text-xs font-semibold text-slate-600">Concerned Department *</label>
                    <select 
                      name="department" 
                      required
                      value={formData.department || ''}
                      onChange={handleInputChange}
                      className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg bg-white"
                    >
                      <option value="">-- Choose Department --</option>
                      {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-xs font-semibold text-slate-600">Issue Classification *</label>
                  <select 
                    name="issueType" 
                    required
                    value={formData.issueType || ''}
                    onChange={handleInputChange}
                    className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg bg-white"
                  >
                    <option value="">-- Choose Subject Classification --</option>
                    {issueTypes.map(i => <option key={i.id} value={i.id}>{i.label}</option>)}
                  </select>
                </div>

                <div className="space-y-1 text-left">
                  <label className="block text-xs font-semibold text-slate-600">Detailed Issue Description *</label>
                  <textarea 
                    name="description" 
                    required
                    rows={4}
                    value={formData.description || ''}
                    onChange={handleInputChange}
                    placeholder="Provide a chronological description of the event, locations, and previous reports..."
                    className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden focus:border-kenya-red font-sans"
                  />
                </div>

                {/* File Upload with Security Validator <= 5MB */}
                <div className="space-y-1.5 text-left border border-slate-100 p-4 rounded-xl">
                  <label className="block text-xs font-semibold text-slate-705">Attachment Reference (Max 5MB PDF, JPEG, PNG)</label>
                  <input 
                    type="file" 
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                    className="w-full text-[11px] text-slate-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-[11px] file:font-bold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 file:transition-colors"
                  />
                  {fileError ? (
                    <p className="text-[10px] text-kenya-red font-semibold flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" /> {fileError}</p>
                  ) : fileDetails ? (
                    <p className="text-[10px] text-emerald-700 font-semibold">✓ {fileDetails.name} ({fileDetails.size}) validated.</p>
                  ) : (
                    <p className="text-[9px] text-slate-400">Attach supporting document photos of the structural/pavement failure.</p>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-kenya-red hover:bg-[#a00000] text-white rounded-xl text-xs font-bold transition-all inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Broadcasting Statement to County Ombuds...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Grievance to County Ombudsperson</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Ticket LookUp Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="space-y-2 border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-bold uppercase">TRACK COMPLAINT PROCESS</span>
              <h3 className="text-base font-bold text-white tracking-tight">{language === 'en' ? 'Grievance Query Status' : 'Ufuatiliaji Hali ya Malalamiko'}</h3>
              <p className="text-xs text-slate-400">
                Enter your ticket code (e.g., <strong>BSC-GRV-84950</strong>) received upon lodging to view investigatory milestones and scheduled resolution.
              </p>
            </div>

            <form onSubmit={handleLookup} className="space-y-3.5">
              <div className="space-y-1">
                <input 
                  type="text" 
                  required
                  placeholder="e.g. BSC-GRV-84950"
                  value={lookupTicket}
                  onChange={(e) => setLookupTicket(e.target.value)}
                  className="w-full text-xs py-2.5 px-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-hidden focus:border-red-500 font-mono focus:bg-slate-800 placeholder-slate-500 uppercase"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-950 rounded-xl text-xs font-bold transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Resolution Progress</span>
                <Search className="h-4 w-4" />
              </button>
            </form>

            {lookupError && (
              <div className="p-3 bg-red-950/40 border border-red-900 rounded-xl text-xs text-red-300 flex items-start gap-2 text-left animate-in fade-in duration-150">
                <ShieldAlert className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
                <p>{lookupError}</p>
              </div>
            )}

            {lookedUpData && (
              <div className="bg-slate-800 border border-slate-700/80 rounded-xl p-4 space-y-3.5 text-left animate-in border-l-4 border-l-kenya-green fade-in duration-200">
                <div className="flex justify-between items-start border-b border-slate-700 pb-2">
                  <div>
                    <p className="text-[9px] font-mono text-slate-400">TICKET DETAILS</p>
                    <p className="text-xs font-mono font-bold text-white">{lookedUpData.id}</p>
                  </div>
                  <span className="text-[10px] font-bold text-kenya-green bg-emerald-900/30 px-2 py-0.5 rounded-full border border-emerald-800">
                    {lookedUpData.status}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <p><strong>Department:</strong> {lookedUpData.department}</p>
                  <p><strong>Issue Category:</strong> {lookedUpData.issue}</p>
                  <p className="text-slate-400 italic">"{lookedUpData.description}"</p>
                  <p><strong>Lodged Location:</strong> Ward {lookedUpData.ward}</p>
                </div>

                <div className="pt-2 border-t border-slate-700 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>File Date: {lookedUpData.date}</span>
                  <span className="text-[#D4AF37]">ETA: {lookedUpData.eta}</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
