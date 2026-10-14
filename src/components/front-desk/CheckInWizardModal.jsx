import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import {
  Check,
  UploadCloud,
  FileText,
  User,
  CreditCard,
  BedDouble,
  ShieldCheck,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles
} from 'lucide-react';

export default function CheckInWizardModal() {
  const {
    isCheckInModalOpen,
    setIsCheckInModalOpen,
    completeCheckIn,
    rooms
  } = useApp();

  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({
    guestName: 'Rohit Sharma',
    email: 'rohit.sharma@gmail.com',
    phone: '+91 98765 43210',
    idType: 'Aadhaar / National ID',
    idNumber: '9845 2314 9012',
    idUploaded: true,
    roomType: 'Presidential Sovereign Villa',
    roomId: '204',
    nights: 3,
    paymentMethod: 'Credit Card / UPI',
    advancePaid: '₹80,640'
  });

  if (!isCheckInModalOpen) return null;

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
      if (step === 4) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // ignore
        }
      }
    } else {
      completeCheckIn({
        name: formData.guestName,
        roomId: formData.roomId,
        roomType: formData.roomType
      });
      setStep(1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const steps = [
    { num: 1, label: 'Guest Info' },
    { num: 2, label: 'ID Verification' },
    { num: 3, label: 'Room Allocation' },
    { num: 4, label: 'Payment' },
    { num: 5, label: 'Confirm' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col justify-between max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-lg text-slate-900">Guest Check-In Wizard</h2>
            <p className="text-xs text-slate-400 font-medium">Step {step} of 5 — Fast Express Arrival & ID Capture</p>
          </div>
          <button
            onClick={() => setIsCheckInModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5-Step Stepper Header */}
        <div className="px-6 pt-5 pb-2 bg-slate-50/70 border-b border-slate-100">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            {steps.map((s) => {
              const isCompleted = step > s.num;
              const isCurrent = step === s.num;
              return (
                <div key={s.num} className="relative z-10 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold font-mono text-xs transition-all ${
                      isCompleted
                        ? 'bg-emerald-600 text-white'
                        : isCurrent
                        ? 'bg-indigo-600 text-white ring-4 ring-indigo-100'
                        : 'bg-white border-2 border-slate-300 text-slate-400'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : s.num}
                  </div>
                  <span className={`text-[11px] font-semibold ${isCurrent ? 'text-indigo-600' : 'text-slate-500'}`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Body */}
        <div className="p-8 overflow-y-auto space-y-6">
          {/* Step 1: Guest Info */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="font-display text-sm font-bold text-slate-800">Primary Guest Information</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-500 font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 font-semibold mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-mono font-medium"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-slate-500 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 font-medium"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: ID Verification */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-sm font-bold text-slate-900">Government ID & KYC Verification</h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-medium">Upload guest identity proof for regulatory Rajasthan Police compliance</p>
                </div>
                <span className="custom-badge badge-pending">Verification: Pending</span>
              </div>

              {/* Drag and Drop Uploader */}
              <div className="border-2 border-dashed border-indigo-200 hover:border-indigo-400 bg-indigo-50/30 rounded-2xl p-8 text-center cursor-pointer transition-colors">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mx-auto flex items-center justify-center mb-3">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-slate-800 font-mono">
                  {formData.idUploaded ? 'aadhaar_front_back_scanned.pdf' : 'Drag and drop ID document here'}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  Supports PNG, JPG, or PDF up to 10MB (Aadhaar, Passport, Driving License)
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, idUploaded: true })}
                  className="mt-3 px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-indigo-600 hover:bg-slate-50 shadow-2xs cursor-pointer"
                >
                  {formData.idUploaded ? '✓ Document Uploaded' : 'Browse Files'}
                </button>
              </div>

              {/* ID Number & ID Type inputs */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">Document Type</label>
                  <select
                    value={formData.idType}
                    onChange={(e) => setFormData({ ...formData, idType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium outline-none"
                  >
                    <option value="Aadhaar / National ID">Aadhaar Card (UIDAI)</option>
                    <option value="Passport">International Passport</option>
                    <option value="Driving License">Driving License</option>
                    <option value="Voter ID">Voter ID Card</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-bold mb-1">ID Number</label>
                  <input
                    type="text"
                    value={formData.idNumber}
                    onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-mono font-bold"
                    placeholder="Enter ID number"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Room Assignment */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="font-display text-sm font-bold text-slate-900">Select Villa / Room Allocation</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">Room Category</label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium"
                  >
                    <option value="Presidential Maharaja Fort Villa">Presidential Villa (₹24,000/night)</option>
                    <option value="Luxury Tree House with Jacuzzi">Treehouse with Jacuzzi (₹9,500/night)</option>
                    <option value="Private Pool Villa with Garden">Private Pool Villa (₹14,500/night)</option>
                    <option value="Maharaja Heritage Suite">Maharaja Suite (₹18,000/night)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-bold mb-1">Assign Clean Unit</label>
                  <select
                    value={formData.roomId}
                    onChange={(e) => setFormData({ ...formData, roomId: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium"
                  >
                    {rooms.filter(r => r.status === 'clean' || r.id === '204').map(r => (
                      <option key={r.id} value={r.id}>
                        Villa {r.number} — Floor {r.floor} ({r.type})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center gap-2 font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Villa {formData.roomId} has been inspected and sanitized by Housekeeping. Ready for RFID smart keycard delivery.</span>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in">
              <h3 className="font-display text-sm font-bold text-slate-900">Payment & Security Deposit</h3>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Villa Charges (3 Nights @ ₹24,000):</span>
                  <span className="font-mono font-bold text-slate-800">₹72,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Resort GST Tax (12%):</span>
                  <span className="font-mono font-bold text-slate-800">₹8,640.00</span>
                </div>
                <div className="flex justify-between text-indigo-700 font-bold pt-2 border-t border-slate-200 text-sm">
                  <span>Total Estimated Bill:</span>
                  <span className="font-mono font-black text-base">₹80,640.00</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  className="p-3 border-2 border-indigo-600 bg-indigo-50/50 rounded-xl font-bold text-indigo-900 text-left flex items-center justify-between cursor-pointer"
                >
                  <span>Credit / Debit Card</span>
                  <CreditCard className="w-4 h-4 text-indigo-600" />
                </button>
                <button
                  type="button"
                  className="p-3 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl font-medium text-slate-700 text-left flex items-center justify-between cursor-pointer"
                >
                  <span>UPI / QR Scan</span>
                  <Sparkles className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">Check-In Ready!</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Smart RFID Keycard for <strong>Villa {formData.roomId}</strong> programmed for {formData.guestName}.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Guest Name:</span>
                  <span className="font-display font-bold text-slate-800">{formData.guestName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Villa Allocated:</span>
                  <span className="font-mono font-bold text-indigo-600">Villa {formData.roomId} ({formData.roomType})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ID Verification:</span>
                  <span className="font-bold text-emerald-600">Verified ✓</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => setIsCheckInModalOpen(false)}
            className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            Cancel Check-In
          </button>

          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1 px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors cursor-pointer"
            >
              <span>{step === 5 ? 'Complete Check-In' : 'Next Step'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
