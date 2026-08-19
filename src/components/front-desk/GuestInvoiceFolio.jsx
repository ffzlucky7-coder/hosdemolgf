import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Download,
  Send,
  Building2,
  CheckCircle2,
  Printer,
  Mail,
  Phone,
  Bed,
  Utensils,
  Wine,
  Shirt,
  Plus,
  Percent,
  CreditCard,
  Sparkles,
  Receipt,
  Calendar,
  Hotel
} from 'lucide-react';

export default function GuestInvoiceFolio() {
  const { folios, addFolioCharge, applyFolioDiscount, settleFolio, showToast, selectedHotel } = useApp();
  const [selectedRoomNumber, setSelectedRoomNumber] = useState('204');
  const [isAddChargeOpen, setIsAddChargeOpen] = useState(false);
  const [newChargeDesc, setNewChargeDesc] = useState('Ayurvedic Moksha Spa & Wellness');
  const [newChargeAmount, setNewChargeAmount] = useState(3500);

  const folio = folios[selectedRoomNumber] || {
    guestName: 'Rohit Sharma',
    guestEmail: 'rohit.sharma@gmail.com',
    guestPhone: '+91 98765 43210',
    roomType: 'Presidential Maharaja Fort Villa with Private Pool',
    roomNumber: selectedRoomNumber,
    checkIn: 'May 15, 2025',
    checkOut: 'May 18, 2025',
    invoiceNumber: 'INV-2025-0587',
    items: [],
    discountPercent: 0,
    isPaid: false,
    paymentMethod: 'Pending'
  };

  const subtotal = folio.items.reduce((sum, item) => sum + item.amount, 0);
  const discountAmount = subtotal * ((folio.discountPercent || 0) / 100);
  const taxableSubtotal = subtotal - discountAmount;
  const gst = taxableSubtotal * 0.12; // 12% GST
  const grandTotal = taxableSubtotal + gst;

  const handleDownload = () => {
    window.print();
    showToast('Invoice PDF generated for download & printing');
  };

  const handleSend = () => {
    showToast(`Invoice sent directly to ${folio.guestEmail} and WhatsApp (+91 98765 43210)!`);
  };

  const handleAddCustomCharge = (e) => {
    e.preventDefault();
    addFolioCharge(selectedRoomNumber, {
      desc: newChargeDesc,
      qty: 1,
      price: parseInt(newChargeAmount) || 1000,
      category: 'Incidental'
    });
    setIsAddChargeOpen(false);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Folio Selector & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 12 & 13 • Folio Management & GST Invoicing</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">Guest Billing Folio & Invoicing</h1>
          <p className="text-xs text-slate-500 mt-0.5">Live charges, F&B postings, automated GST calculation, and WhatsApp dispatch.</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Room Selector */}
          <select
            value={selectedRoomNumber}
            onChange={(e) => setSelectedRoomNumber(e.target.value)}
            className="text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-xs outline-none cursor-pointer"
          >
            <option value="204">Villa 204 — Rohit Sharma (Presidential Fort Villa)</option>
            <option value="101">Treehouse 101 — Amit Patel (Jacuzzi Tree House)</option>
          </select>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-xs transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={handleSend}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Send to Guest</span>
          </button>
        </div>
      </div>

      {/* Main Print-Ready Invoice Card */}
      <div className="custom-card p-10 bg-white shadow-xl space-y-8 print:border-none print:shadow-none relative">
        {/* Hotel Brand Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 font-black text-2xl shadow-2xs">
              <Hotel className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-display font-black text-slate-900 tracking-tight">Lohagarh Fort Resort & Spa</h2>
              <p className="text-xs text-slate-500 font-medium">NH-8, Kukas, Jaipur, Rajasthan - 302028 • GSTIN: 08AABCL9603R1Z8</p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Tax Invoice</div>
            <div className="text-sm font-mono font-extrabold text-slate-800 mt-0.5">{folio.invoiceNumber}</div>
            <div className="text-xs text-slate-500 font-medium">Date: May 18, 2025</div>
          </div>
        </div>

        {/* Guest & Stay Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50/70 p-5 rounded-2xl border border-slate-200">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Guest Information</div>
            <h3 className="text-base font-display font-bold text-slate-900 mt-1">{folio.guestName}</h3>
            <div className="text-xs text-slate-500 flex flex-col gap-0.5 mt-1 font-medium">
              <span>Email: {folio.guestEmail}</span>
              <span className="font-mono">Phone: {folio.guestPhone}</span>
            </div>
          </div>

          <div className="sm:text-right">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Villa Allocation & Stay</div>
            <div className="text-sm font-bold text-indigo-600 mt-1">Villa/Room {folio.roomNumber} ({folio.roomType})</div>
            <div className="text-xs text-slate-600 font-medium mt-1 flex items-center justify-start sm:justify-end gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{folio.checkIn} – {folio.checkOut}</span>
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3.5 pl-4">Description of Service / Goods</th>
                <th className="p-3.5 text-center">Qty</th>
                <th className="p-3.5 text-right">Rate (₹)</th>
                <th className="p-3.5 text-right pr-4">Amount (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {folio.items.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="p-3.5 pl-4 font-semibold text-slate-900">{item.desc}</td>
                  <td className="p-3.5 text-center text-slate-600 font-mono font-bold">{item.qty}</td>
                  <td className="p-3.5 text-right text-slate-600 font-mono font-semibold">{item.rate.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                  <td className="p-3.5 text-right pr-4 font-mono font-bold text-slate-900">{item.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Toolbar for Folio */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAddChargeOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl transition-colors shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Add Incidental / Spa Charge</span>
            </button>

            <button
              onClick={() => applyFolioDiscount(selectedRoomNumber, 10)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs rounded-xl transition-colors shadow-2xs"
            >
              <Percent className="w-3.5 h-3.5" />
              <span>Apply 10% Royal Privilege Discount</span>
            </button>
          </div>

          {!folio.isPaid ? (
            <button
              onClick={() => settleFolio(selectedRoomNumber, 'UPI / Card')}
              className="flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Settle & Mark as Paid (₹{grandTotal.toFixed(2)})</span>
            </button>
          ) : (
            <span className="custom-badge badge-paid text-xs py-1.5 px-4 font-black">
              ✓ PAID IN FULL ({folio.paymentMethod})
            </span>
          )}
        </div>

        {/* Add Charge Popup Box */}
        {isAddChargeOpen && (
          <form onSubmit={handleAddCustomCharge} className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl flex flex-wrap items-center gap-3 text-xs">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-indigo-950 font-bold mb-1">Service Description</label>
              <input
                type="text"
                value={newChargeDesc}
                onChange={(e) => setNewChargeDesc(e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-indigo-200 rounded-lg text-slate-800 outline-none"
              />
            </div>
            <div className="w-32">
              <label className="block text-indigo-950 font-bold mb-1">Amount (₹)</label>
              <input
                type="number"
                value={newChargeAmount}
                onChange={(e) => setNewChargeAmount(e.target.value)}
                className="w-full px-3 py-1.5 bg-white border border-indigo-200 rounded-lg text-slate-800 outline-none font-mono font-bold"
              />
            </div>
            <div className="flex items-end gap-2 pt-5">
              <button
                type="submit"
                className="px-4 py-1.5 bg-indigo-600 text-white font-bold rounded-lg shadow-xs"
              >
                Add Charge
              </button>
              <button
                type="button"
                onClick={() => setIsAddChargeOpen(false)}
                className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 font-bold rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Totals & Tax Calculation Breakdown */}
        <div className="flex flex-col items-end space-y-2 pt-4 border-t border-slate-200 text-xs">
          <div className="w-80 flex justify-between text-slate-600">
            <span>Subtotal:</span>
            <span className="font-mono font-semibold text-slate-800">₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          </div>

          {folio.discountPercent > 0 && (
            <div className="w-80 flex justify-between text-purple-600 font-semibold">
              <span>Royal Privilege Discount ({folio.discountPercent}%):</span>
              <span className="font-mono">-₹{discountAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
          )}

          <div className="w-80 flex justify-between text-slate-600">
            <span>GST (12% Resort Hospitality Tax):</span>
            <span className="font-mono font-semibold text-slate-800">₹{gst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          </div>

          <div className="w-80 flex justify-between items-center pt-3 border-t border-slate-200 text-base">
            <span className="font-display font-extrabold text-slate-900">Total Net Payable:</span>
            <span className="font-mono font-black text-2xl text-indigo-950 tracking-tight">
              ₹{grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
