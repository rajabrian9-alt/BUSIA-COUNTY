import React, { useState } from 'react';
import { 
  Briefcase, Landmark, Hammer, HeartPulse, Store, Map, Sparkles, 
  Wine, Car, Sprout, Droplet, Scale, GraduationCap, ArrowRight, CheckCircle2,
  Lock, ArrowLeft, Loader2, Coins, Receipt, ArrowUpDown
} from 'lucide-react';

interface EServicesProps {
  language: 'en' | 'sw';
}

export default function EServicesHub({ language }: EServicesProps) {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<any | null>(null);
  
  // Quick filters
  const [searchQuery, setSearchQuery] = useState('');

  // Top 12 statutory Busia E-Services
  const servicesList = [
    {
      id: 'single-business-permit',
      name: 'Single Business Permit (SBP)',
      nameKiswahili: 'Kibali cha Biashara Moja',
      icon: Briefcase,
      color: 'bg-blue-50 text-blue-700 border-blue-100',
      description: 'Apply for or renew your annual trade license for retail, wholesale, or professional services.',
      descriptionKiswahili: 'Sajili au urekebishe kibali chako cha mwaka cha biashara ya rejareja au huduma.',
      baseFee: 'From KES 5,000 / year',
      category: 'Trade'
    },
    {
      id: 'land-rates',
      name: 'Land Rates Payments',
      nameKiswahili: 'Malipo ya Kodi ya Ardhi',
      icon: Landmark,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      description: 'Clear annual land rates and obtain official clearance certificates for land transactions.',
      descriptionKiswahili: 'Lipa kodi ya ardhi ya mwaka na upate cheti rasmi cha idhini ya uuzaji.',
      baseFee: 'Calculated per acreage',
      category: 'Finance'
    },
    {
      id: 'building-approvals',
      name: 'Building Plan Approvals',
      nameKiswahili: 'Kibali cha Mipango ya Ujenzi',
      icon: Hammer,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
      description: 'Submit structural drawings for commercial or residential properties for physical planning review.',
      descriptionKiswahili: 'Wasilisha ramani ya ujenzi wa ghorofa au makazi kwa ajili ya kibali cha ujenzi.',
      baseFee: '0.5% of estimated cost',
      category: 'Lands'
    },
    {
      id: 'health-certificates',
      name: 'Food Handler Health Certificates',
      nameKiswahili: 'Cheti cha Afya cha Kushughulikia Chakula',
      icon: HeartPulse,
      color: 'bg-red-50 text-red-700 border-red-100',
      description: 'Register for medical testing, assessment, and certification to operate food establishments.',
      descriptionKiswahili: 'Sajili vipimo vya afya na upate cheti cha mhudumu wa mikahawa.',
      baseFee: 'KES 1,000',
      category: 'Health'
    },
    {
      id: 'market-stalls',
      name: 'Market Stall Allocations',
      nameKiswahili: 'Ukodishaji wa Vibanda vya Soko',
      icon: Store,
      color: 'bg-purple-50 text-purple-700 border-purple-100',
      description: 'Lease trading spaces, stalls, or yards in municipal, sub-county, and ward markets.',
      descriptionKiswahili: 'Kodi nafasi ya biashara au kibanda katika masoko rasmi ya kaunti.',
      baseFee: 'KES 500 / month',
      category: 'Trade'
    },
    {
      id: 'plot-search',
      name: 'Plot Search & Registration',
      nameKiswahili: 'Utafutaji na Usajili wa Ploti',
      icon: Map,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      description: 'Conduct searches on physical boundaries, registration status, and ownership listings.',
      descriptionKiswahili: 'Kagua mipaka ya ardhi, usajili na hati miliki katika jalada la kaunti.',
      baseFee: 'KES 1,500',
      category: 'Lands'
    },
    {
      id: 'liquor-license',
      name: 'Liquor license inspection',
      nameKiswahili: 'Kibali cha Pombe na Ukaguzi',
      icon: Wine,
      color: 'bg-rose-50 text-rose-700 border-rose-100',
      description: 'Apply for retail or wholesale liquor sales license subject to control acts.',
      descriptionKiswahili: 'Tuma maombi ya uuzaji wa vinywaji vikali kulingana na sheria.',
      baseFee: 'KES 15,000 / year',
      category: 'Trade'
    },
    {
      id: 'cess-parking',
      name: 'Cess & Parking Stickers',
      nameKiswahili: 'Stika za Kuegesha Magari & Ushuru',
      icon: Car,
      color: 'bg-pink-50 text-pink-700 border-pink-100',
      description: 'Pre-pay seasonal transport parking or commodity cess charges for trade vehicles.',
      descriptionKiswahili: 'Lipa mapema ada za kuegesha magari na ushuru wa bidhaa za biashara.',
      baseFee: 'From KES 200 / day',
      category: 'Roads'
    },
    {
      id: 'machinery-hire',
      name: 'Agricultural Tractor Hire',
      nameKiswahili: 'Kukodisha Matrekta ya Kilimo',
      icon: Sprout,
      color: 'bg-emerald-150 text-emerald-900 border-emerald-200',
      description: 'Reserve county grading machinery or tractors for plowing, weeding, and farm prep.',
      descriptionKiswahili: 'Kodisha matrekta ya utendaji ya kaunti kwa kulima mimea.',
      baseFee: 'KES 2,500 / acre',
      category: 'Agriculture'
    },
    {
      id: 'water-connect',
      name: 'Borehole Water Connection',
      nameKiswahili: 'Uunganishaji wa Maji ya Kisima',
      icon: Droplet,
      color: 'bg-sky-50 text-sky-700 border-sky-100',
      description: 'Apply for residential water linkage from municipal piped lines or solar-powered boreholes.',
      descriptionKiswahili: 'Tuma maombi ya kuunganishwa kwa maji safi ya bomba nyumbani.',
      baseFee: 'KES 4,000 installation',
      category: 'Water'
    },
    {
      id: 'scales-measure',
      name: 'Weights & Measures Calibration',
      nameKiswahili: 'Vipimo na Mizani',
      icon: Scale,
      color: 'bg-teal-50 text-teal-700 border-teal-100',
      description: 'Schedule verification and official stamp for commercial scales and pumps to ensure fair trade.',
      descriptionKiswahili: 'Lipa huduma ya kupima na kugonga chapa mizani yako ya kibiashara.',
      baseFee: 'KES 1,200',
      category: 'Trade'
    },
    {
      id: 'vtc-admission',
      name: 'Vocational College Admission',
      nameKiswahili: 'Usajili wa Chuo cha Ufundi',
      icon: GraduationCap,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-100',
      description: 'Apply online for certificate and diploma courses at any of our Youth Polytechnics.',
      descriptionKiswahili: 'Sajili mafunzo ya chuo cha ufundi cha vijana katika kaunti.',
      baseFee: 'Subsidized Tuition',
      category: 'Education'
    }
  ];

  const filteredServices = servicesList.filter(s => {
    const term = searchQuery.toLowerCase();
    const matchesKeyword = s.name.toLowerCase().includes(term) || 
                           s.nameKiswahili.toLowerCase().includes(term) ||
                           s.category.toLowerCase().includes(term) ||
                           s.description.toLowerCase().includes(term);
    return matchesKeyword;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateFee = () => {
    if (!selectedService) return 0;
    if (selectedService.id === 'single-business-permit') {
      const type = formData.businessType || 'retail';
      if (type === 'retail') return 7500;
      if (type === 'wholesale') return 18500;
      return 35000; // industrial
    }
    if (selectedService.id === 'land-rates') {
      const acreage = parseFloat(formData.acreage || '1');
      return acreage * 4500;
    }
    if (selectedService.id === 'building-approvals') {
      const budget = parseFloat(formData.costEstimation || '500000');
      return Math.max(2500, Math.round(budget * 0.005));
    }
    if (selectedService.id === 'health-certificates') return 1000;
    if (selectedService.id === 'market-stalls') return 500;
    if (selectedService.id === 'plot-search') return 1500;
    if (selectedService.id === 'liquor-license') return 15000;
    if (selectedService.id === 'cess-parking') {
      const days = parseInt(formData.days || '1');
      return days * 200;
    }
    if (selectedService.id === 'machinery-hire') {
      const acres = parseFloat(formData.acres || '1');
      return acres * 2500;
    }
    if (selectedService.id === 'water-connect') return 4000;
    if (selectedService.id === 'scales-measure') return 1200;
    if (selectedService.id === 'vtc-admission') return 0; // highly subsidized
    return 0;
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment / registration STK push countdown
    setTimeout(() => {
      setIsSubmitting(false);
      const ticketNum = 'BUSIA-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionReceipt({
        ticketNumber: ticketNum,
        applicantName: formData.fullName || 'Citizen Client',
        phone: formData.phone || '+254 700 000 000',
        amount: calculateFee(),
        serviceApplied: selectedService.name,
        date: new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' }),
        mPesaRef: 'RKE' + Math.floor(10000000 + Math.random() * 90000000)
      });
      setStep(3);
    }, 2000);
  };

  const resetForm = () => {
    setSelectedService(null);
    setFormData({});
    setStep(1);
    setSubmissionReceipt(null);
  };

  return (
    <section id="eservices-section" className="py-16 bg-slate-50 scroll-mt-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-kenya-red bg-red-50 py-1 px-3 rounded-full border border-red-100">
              {language === 'en' ? 'Busia Revenue & Service Systems' : 'Mifumo ya Mapato na Huduma Busia'}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              {language === 'en' ? 'Citizen E-Services Hub' : 'Malango ya E-Huduma'}
            </h2>
            <p className="text-xs text-slate-500 mt-2 max-w-xl leading-relaxed">
              {language === 'en' 
                ? 'Avoid long queues at the County offices. Clear payments, request permits, check registers, and access official documents with full SSL encryption and instant M-Pesa clearance.'
                : 'Epuka foleni ndefu katika ofisi za Kaunti. Lipa ada, kagua ploti, pokea vibali, na upate nyaraka kwa usalama na upesi kupitia M-Pesa.'}
            </p>
          </div>

          {/* Search bar */}
          <div className="shrink-0 w-full md:w-80">
            <label className="sr-only">Search services</label>
            <div className="relative">
              <input 
                type="text"
                placeholder={language === 'en' ? "Search permit, land, rates..." : "Tafuta huduma, ploti, kodi..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs py-2.5 pl-3 pr-10 bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:border-kenya-red font-sans"
              />
              <span className="absolute right-3.5 top-3 text-[10px] font-mono font-bold text-slate-400">BUSIA</span>
            </div>
          </div>
        </div>

        {/* E-Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                id={`eservice-card-${service.id}`}
                key={service.id}
                className="bg-white rounded-xl border border-slate-150 p-5 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-2.5 rounded-lg border ${service.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] font-mono tracking-wider font-bold text-slate-400 bg-slate-50 py-0.5 px-2 rounded-full uppercase">
                      {service.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-slate-800 tracking-tight leading-tight">
                      {language === 'en' ? service.name : service.nameKiswahili}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">
                      {language === 'en' ? service.description : service.descriptionKiswahili}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-slate-400 leading-none">REVENUE FEE</p>
                    <p className="text-xs font-bold text-slate-700 mt-1">{service.baseFee}</p>
                  </div>
                  
                  {/* Apply CTA with {E_SERVICE_PORTAL_LINK} comment */}
                  <button 
                    onClick={() => {
                      setSelectedService(service);
                      setStep(1);
                    }}
                    className="py-1.5 px-3 bg-kenya-red hover:bg-[#a00000] text-white rounded-lg text-xs font-medium inline-flex items-center gap-1 transition-colors group cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Apply Now' : 'Tuma Ombi'}</span>
                    <ArrowRight className="h-3.5 w-3.5 tracking-normal group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}

          {filteredServices.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500 text-xs">
              {language === 'en' ? 'No county e-services found matching your search.' : 'Hakuna huduma inayolingana na tafutaji wako.'}
            </div>
          )}
        </div>

      </div>

      {/* Embedded High-Fidelity Multi-Step Application Prompt Simulator */}
      {selectedService && (
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

            {/* Back button and Close */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-150">
              <div className="flex items-center gap-2">
                {step === 2 && (
                  <button onClick={() => setStep(1)} className="p-1 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer">
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                )}
                <div>
                  <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400">
                    {language === 'en' ? 'OFFICIAL PORTAL SIMULATOR' : 'KIGI-GEU CHA LANGO LA KAUNTI'}
                  </h3>
                  <h4 className="text-sm font-bold text-slate-800 tracking-tight">
                    {language === 'en' ? selectedService.name : selectedService.nameKiswahili}
                  </h4>
                </div>
              </div>
              <button onClick={resetForm} className="py-1 px-2.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 text-xs font-medium transition-colors cursor-pointer">
                {language === 'en' ? 'Cancel' : 'Ghairi'}
              </button>
            </div>

            {/* STEP 1: Capture Details */}
            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4 pt-4 text-left">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-600">Full Official Name (Kama ilivyo kwa Kitambulisho) *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. Cleophas Onyango Juma"
                    className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden focus:border-kenya-red"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-600">Identity Doc / ID Card Number *</label>
                    <input 
                      type="text" 
                      name="idNumber"
                      required
                      value={formData.idNumber || ''}
                      onChange={handleInputChange}
                      placeholder="e.g. 32442991"
                      className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden focus:border-kenya-red"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-600">M-Pesa Mobile Number *</label>
                    <input 
                      type="text" 
                      name="phone"
                      required
                      value={formData.phone || ''}
                      onChange={handleInputChange}
                      placeholder="e.g. 0712345678"
                      className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg focus:outline-hidden focus:border-kenya-red"
                    />
                  </div>
                </div>

                {/* Service tailored variables */}
                {selectedService.id === 'single-business-permit' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Business Sector *</label>
                      <select 
                        name="businessType" 
                        value={formData.businessType || 'retail'} 
                        onChange={handleInputChange}
                        className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg bg-white"
                      >
                        <option value="retail">General Retail (KES 7,500/yr)</option>
                        <option value="wholesale">Large Wholesale Warehouse (KES 18,500/yr)</option>
                        <option value="industry">Heavy Manufacturing / Factory (KES 35,000/yr)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Ward Location *</label>
                      <select 
                        name="ward" 
                        value={formData.ward || 'Matayos Central'} 
                        onChange={handleInputChange}
                        className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg bg-white"
                      >
                        <option value="Matayos Central">Matayos Central</option>
                        <option value="Malaba Central">Malaba Central</option>
                        <option value="Nambale Township">Nambale Township</option>
                        <option value="Bunyala West">Bunyala West</option>
                      </select>
                    </div>
                  </div>
                )}

                {selectedService.id === 'land-rates' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Land Acreage (Size) *</label>
                      <input 
                        type="number" 
                        name="acreage"
                        required
                        min="0.1"
                        step="0.1"
                        value={formData.acreage || '1'}
                        onChange={handleInputChange}
                        className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Block / Parcel Number *</label>
                      <input 
                        type="text" 
                        name="parcelNumber"
                        required
                        value={formData.parcelNumber || ''}
                        onChange={handleInputChange}
                        placeholder="e.g. BUKHALALIRE/210"
                        className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg"
                      />
                    </div>
                  </div>
                )}

                {selectedService.id === 'building-approvals' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Construction Type *</label>
                      <select 
                        name="constructionType" 
                        value={formData.constructionType || 'residential'} 
                        onChange={handleInputChange}
                        className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg bg-white"
                      >
                        <option value="residential">Residential Bungalow</option>
                        <option value="commercial">Commercial Storey G+2</option>
                        <option value="industrial">Warehousing / Shed</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Est. Structural Cost (KES) *</label>
                      <input 
                        type="number" 
                        name="costEstimation"
                        required
                        value={formData.costEstimation || '1500000'}
                        onChange={handleInputChange}
                        className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg"
                      />
                    </div>
                  </div>
                )}

                {selectedService.id === 'cess-parking' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Vehicle Type *</label>
                      <select name="vehicleType" onChange={handleInputChange} className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg bg-white">
                        <option value="bobi">Motorbike / Boda Boda</option>
                        <option value="saloon">Saloon Car</option>
                        <option value="truck">Lorry/Canter</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Days Coverage *</label>
                      <input type="number" name="days" onChange={handleInputChange} value={formData.days || '1'} min="1" max="30" className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg" />
                    </div>
                  </div>
                )}

                {selectedService.id === 'machinery-hire' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Plowing Acres *</label>
                      <input type="number" name="acres" onChange={handleInputChange} value={formData.acres || '1'} min="1" className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg" />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-slate-600">Preferred Hire Date *</label>
                      <input type="date" name="hireDate" required className="w-full text-xs py-2 px-3 border border-slate-200 rounded-lg" />
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-150 flex justify-between items-center bg-slate-50 -mx-6 -mb-6 p-6">
                  <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[10px]">
                    <Lock className="h-3.5 w-3.5 text-slate-400" />
                    <span>SECURE CHROME SSL ENCRYPTION</span>
                  </div>
                  <button 
                    type="submit"
                    className="py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Review Fee & Pay' : 'Kagua Malipo'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Review Fees & Pay secure */}
            {step === 2 && (
              <form onSubmit={handleApplySubmit} className="space-y-5 pt-4 text-left">
                <div className="p-4 bg-red-50/60 rounded-xl border border-red-100 flex items-start gap-3">
                  <Coins className="h-5 w-5 text-kenya-red shrink-0 mt-0.5" />
                  <div className="text-left space-y-1">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-tight">Revenue Clearance Bill Summary</h5>
                    <p className="text-xs text-slate-600 leading-normal">
                      The statutory county revenue clearance invoice is formulated below. Submit to trigger an automated M-Pesa push directly to your handset.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-150 divide-y divide-slate-200/80 font-mono text-xs text-slate-600 space-y-3">
                  <div className="flex justify-between pb-2">
                    <span>Applicant Client</span>
                    <span className="font-bold text-slate-800">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Target Service</span>
                    <span className="font-bold text-slate-800 truncate max-w-[200px]">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Phone Bill Line</span>
                    <span className="font-bold text-orange-600">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-800 font-bold">TOTAL COUNTY DUE</span>
                    <span className="font-extrabold text-sm text-kenya-red">KES {calculateFee().toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-emerald-50 text-emerald-800 text-[11px] font-sans rounded-xl border border-emerald-100 flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping mt-1" />
                    <p>
                      <strong>Standard Portal clearance:</strong> On click, your phone will prompt for your M-Pesa PIN for exact invoice sum <strong>KES {calculateFee().toLocaleString()}</strong> to County Treasury Paybill.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-150 flex justify-between items-center bg-slate-50 -mx-6 -mb-6 p-6">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-2 px-3 border border-slate-200 hover:bg-slate-100 text-slate-600 rounded-lg text-xs font-bold transition-all cursor-pointer"
                  >
                    Modify
                  </button>
                  {/* E_SERVICE_PORTAL_LINK */}
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 px-5 bg-kenya-red hover:bg-[#a00000] text-white rounded-lg text-xs font-bold transition-all inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Authorized... Pushing PIN Prompt...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit & Authorize Payment</span>
                        <Receipt className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Submission Receipt Confirmation */}
            {step === 3 && submissionReceipt && (
              <div className="space-y-5 pt-6 text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-200 text-kenya-green flex items-center justify-center mx-auto text-lg hover:bg-emerald-100">
                  <CheckCircle2 className="h-6 w-6" />
                </div>

                <div className="space-y-2 max-w-sm mx-auto">
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight">Revenue Invoice Paid Successfully!</h3>
                  <p className="text-xs text-slate-600">
                    Your official county clearance permit application is processed into our corporate database. A transaction receipt is dispatched via SMS.
                  </p>
                </div>

                {/* Simulated Certificate Display */}
                <div className="border border-dashed border-slate-200 rounded-2xl p-5 bg-[#fffdf5] relative overflow-hidden text-left max-w-sm mx-auto">
                  {/* National stripe */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kenya-black via-kenya-red to-kenya-green" />
                  
                  <div className="flex justify-between items-start pb-3 border-b border-slate-200/80">
                    <div>
                      <p className="text-[10px] font-mono text-[#D4AF37] tracking-wider font-bold">COUNTY TREASURY, BUSIA</p>
                      <p className="text-xs font-bold text-slate-800">{selectedService.name}</p>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400">OFFICIAL RECEIPT</span>
                  </div>

                  <div className="py-4 space-y-2 text-xs font-mono text-slate-600">
                    <p className="flex justify-between"><span>Permit Number:</span> <span className="font-bold text-slate-800">{submissionReceipt.ticketNumber}</span></p>
                    <p className="flex justify-between"><span>Receipt Name:</span> <span className="font-bold text-slate-800">{submissionReceipt.applicantName}</span></p>
                    <p className="flex justify-between"><span>Paid Sum:</span> <span className="font-bold text-slate-800">KES {submissionReceipt.amount.toLocaleString()}</span></p>
                    <p className="flex justify-between"><span>M-Pesa Ref ID:</span> <span className="font-bold text-indigo-700">{submissionReceipt.mPesaRef}</span></p>
                    <p className="flex justify-between"><span>Payment Date:</span> <span className="font-bold text-slate-600">{submissionReceipt.date}</span></p>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex justify-center text-[10px] font-mono text-slate-400">
                    <span>★ VALID PORTAL SUBMISSION CERTIFICATE ★</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-150 flex justify-center bg-slate-50 -mx-6 -mb-6 p-6">
                  <button 
                    onClick={resetForm}
                    className="py-2 px-6 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Done & Return to Hub
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
