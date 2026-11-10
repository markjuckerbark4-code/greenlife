import React, { useState } from 'react';
import { Calculator, X, Check, Building, ArrowRight, ShieldCheck, Info } from 'lucide-react';

interface CostCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: (calculatedDetails: string) => void;
}

export const CostCalculatorModal: React.FC<CostCalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  const [landUnit, setLandUnit] = useState<'katha' | 'decimal' | 'sqft'>('katha');
  const [landValue, setLandValue] = useState<number>(3.5);
  const [floors, setFloors] = useState<number>(5);
  const [finishQuality, setFinishQuality] = useState<'standard' | 'premium' | 'luxury'>('standard');
  const [foundationType, setFoundationType] = useState<'pile' | 'footing'>('pile');

  if (!isOpen) return null;

  // 1 Katha = 720 Sqft
  // 1 Decimal = 435.6 Sqft
  let totalPlotSqft = 2520;
  if (landUnit === 'katha') {
    totalPlotSqft = landValue * 720;
  } else if (landUnit === 'decimal') {
    totalPlotSqft = landValue * 435.6;
  } else {
    totalPlotSqft = landValue;
  }

  // Setback deduction (typically ~65% built-up ground coverage per RAJUK rules)
  const groundFloorCoveredSqft = Math.round(totalPlotSqft * 0.65);
  const totalBuiltUpSqft = groundFloorCoveredSqft * floors;

  // Rate per sqft in BDT based on finishing quality & foundation
  let baseRatePerSqft = 2200;
  if (finishQuality === 'standard') baseRatePerSqft = 2250;
  if (finishQuality === 'premium') baseRatePerSqft = 2650;
  if (finishQuality === 'luxury') baseRatePerSqft = 3200;

  // Foundation adjustment
  const foundationExtraPerSqft = foundationType === 'pile' ? 200 : 0;
  const effectiveRate = baseRatePerSqft + foundationExtraPerSqft;

  const totalEstimatedCostBDT = totalBuiltUpSqft * effectiveRate;
  const totalCostCrore = (totalEstimatedCostBDT / 10000000).toFixed(2);
  const totalCostLakh = Math.round((totalEstimatedCostBDT % 10000000) / 100000);

  // Sub-breakdowns
  const civilCost = Math.round(totalEstimatedCostBDT * 0.45);
  const finishingCost = Math.round(totalEstimatedCostBDT * 0.35);
  const mepCost = Math.round(totalEstimatedCostBDT * 0.15); // Mechanical, Electrical, Plumbing
  const consultCost = Math.round(totalEstimatedCostBDT * 0.05); // Architectural & Structural design

  const formatBDT = (num: number) => {
    return '৳ ' + num.toLocaleString('en-IN');
  };

  const summaryString = `${floors}-Story Building on ${landValue} ${landUnit} (approx ${totalBuiltUpSqft.toLocaleString()} sq.ft, Estimated Budget: ৳ ${totalCostCrore} Crore)`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
        {/* Modal Header */}
        <div className="sticky top-0 bg-emerald-800 text-white p-5 sm:p-6 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 flex items-center justify-center text-emerald-200">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold leading-tight">
                Bangladesh Construction Cost Estimator
              </h3>
              <p className="text-xs text-emerald-200/90">
                Accurate budget calculation based on current BNBC 2020 materials &amp; labor rates
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Land Size */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Plot / Land Size
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="1"
                  step="0.5"
                  value={landValue}
                  onChange={(e) => setLandValue(parseFloat(e.target.value) || 1)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 font-bold text-slate-800 text-sm focus:ring-2 focus:ring-emerald-600 focus:outline-hidden"
                />
                <div className="flex rounded-lg border border-slate-300 overflow-hidden bg-slate-50">
                  {(['katha', 'decimal'] as const).map((unit) => (
                    <button
                      key={unit}
                      type="button"
                      onClick={() => setLandUnit(unit)}
                      className={`px-3 py-2 text-xs font-bold capitalize transition-colors ${
                        landUnit === unit
                          ? 'bg-emerald-700 text-white'
                          : 'text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {unit}
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                Ground Footprint: ~{Math.round(totalPlotSqft).toLocaleString()} Sq.ft (RAJUK Setback allowed: ~{groundFloorCoveredSqft.toLocaleString()} Sq.ft/floor)
              </p>
            </div>

            {/* Number of Stories */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Number of Stories (Floor Count)
              </label>
              <div className="grid grid-cols-5 gap-1.5">
                {[3, 4, 5, 6, 8].map((fl) => (
                  <button
                    key={fl}
                    type="button"
                    onClick={() => setFloors(fl)}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                      floors === fl
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {fl} তলা
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500">
                Total Built-up Area: <strong className="text-slate-800">{totalBuiltUpSqft.toLocaleString()} Sq.ft</strong>
              </p>
            </div>

            {/* Finishing Quality */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Finishing Quality
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', name: 'Standard', rate: '৳ 2,250' },
                  { id: 'premium', name: 'Premium', rate: '৳ 2,650' },
                  { id: 'luxury', name: 'Luxury Duplex', rate: '৳ 3,200' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFinishQuality(item.id as any)}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      finishQuality === item.id
                        ? 'border-emerald-600 bg-emerald-50/80 ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-800">{item.name}</div>
                    <div className="text-[10px] text-emerald-700 font-semibold">{item.rate}/sqft</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Foundation Type */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Soil &amp; Foundation Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFoundationType('pile')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    foundationType === 'pile'
                      ? 'border-emerald-600 bg-emerald-50/80 ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-800">Deep Pile Foundation</div>
                  <div className="text-[10px] text-slate-500">Soft clay / high-rise requirement</div>
                </button>
                <button
                  type="button"
                  onClick={() => setFoundationType('footing')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    foundationType === 'footing'
                      ? 'border-emerald-600 bg-emerald-50/80 ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-800">Shallow Isolated Footing</div>
                  <div className="text-[10px] text-slate-500">Hard soil / lower stories</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-7 shadow-lg space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Estimated Total Project Cost
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  ৳ {totalCostCrore} Crore{' '}
                  <span className="text-lg sm:text-xl font-semibold text-slate-300">
                    ({totalCostLakh} Lakh approx)
                  </span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs text-slate-400">Average Square Foot Rate</div>
                <div className="text-xl font-extrabold text-emerald-300">
                  ৳ {effectiveRate.toLocaleString()} / Sq.ft
                </div>
              </div>
            </div>

            {/* Substructure Itemized Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                <span className="text-slate-400 block text-[11px] mb-1">RCC Structure &amp; Civil (45%)</span>
                <span className="font-bold text-white text-sm">{formatBDT(civilCost)}</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                <span className="text-slate-400 block text-[11px] mb-1">Finishing &amp; Tiles (35%)</span>
                <span className="font-bold text-white text-sm">{formatBDT(finishingCost)}</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                <span className="text-slate-400 block text-[11px] mb-1">Electrical &amp; Plumbing (15%)</span>
                <span className="font-bold text-white text-sm">{formatBDT(mepCost)}</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                <span className="text-slate-400 block text-[11px] mb-1">Architectural Consultancy (5%)</span>
                <span className="font-bold text-emerald-400 text-sm">{formatBDT(consultCost)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Info className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>
                Rates reflect current standard Bangladesh market indices (BSRM/AKS rod, Holcim/Bashundhara cement, RAK tiles).
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero Over-Design Guarantee by Green Architect Engineers</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookConsultation(summaryString);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer"
            >
              <span>Book Strategy Call For This Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
