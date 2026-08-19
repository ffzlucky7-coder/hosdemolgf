import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  MessageSquare,
  Smartphone,
  Mail,
  Bell,
  Send,
  CheckCircle2,
  Sparkles,
  CheckCheck,
  Plus,
  Hotel
} from 'lucide-react';

export default function NotificationEngineView() {
  const { showToast } = useApp();
  const [selectedTemplate, setSelectedTemplate] = useState('booking-confirm');
  const [customMsgInput, setCustomMsgInput] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('+91 80033 95964');
  const [recipientName, setRecipientName] = useState('Rohit Sharma');

  const [sentMessages, setSentMessages] = useState([
    {
      id: 1,
      text: 'LOHAGARH FORT RESORT & SPA, JAIPUR\n\nDear Rohit,\nYour reservation #BK-LOHAGARH-9921 is CONFIRMED!\n\nCheck-in: May 15, 2025 (02:00 PM)\nCheck-out: May 18, 2025 (11:00 AM)\nUnit: Presidential Maharaja Fort Villa (3 Nights)\nAmount: ₹80,640.00 (Secured via Razorpay UPI)\n\nLocation: NH-8 Kukas, Jaipur, Rajasthan\nhttps://maps.app/lohagarhfortresort\n\nReply "CONCIERGE" for in-villa dining & jacuzzi requests.',
      time: '15:40'
    },
    {
      id: 2,
      text: 'EXPRESS VILLA CHECK-IN & DIGITAL KEYCARD\n\nDear Rohit, we look forward to welcoming you at Lohagarh Fort Resort & Spa today.\n\nSkip the reception desk: Verify your ID online for instant smart keycard pickup:\nhttps://hos.lohagarhfortresort.in/checkin/9921\n\nWi-Fi: Lohagarh_Royal_Guest\nPass: RoyalLohagarh2025',
      time: '15:45'
    }
  ]);

  const templates = [
    {
      id: 'booking-confirm',
      name: 'Instant Booking Confirmation',
      channel: 'WhatsApp & Email',
      previewText: 'LOHAGARH FORT RESORT & SPA, JAIPUR\n\nDear Rohit,\nYour reservation #BK-LOHAGARH-9921 is CONFIRMED!\n\nCheck-in: May 15, 2025 (02:00 PM)\nCheck-out: May 18, 2025 (11:00 AM)\nUnit: Presidential Maharaja Fort Villa (3 Nights)\nAmount: ₹80,640.00 (Paid)\n\nLocation: https://maps.app/lohagarhfortresort',
      trigger: 'Triggered automatically upon direct or OTA reservation creation'
    },
    {
      id: 'checkin-reminder',
      name: 'Express Mobile Check-In & Wi-Fi Passcode',
      channel: 'WhatsApp & SMS',
      previewText: 'EXPRESS VILLA CHECK-IN & DIGITAL KEYCARD\n\nDear Rohit, we look forward to welcoming you at Lohagarh Fort Resort & Spa today.\n\nSkip the reception desk: Verify your ID online for instant smart keycard pickup:\nhttps://hos.lohagarhfortresort.in/checkin/9921\n\nWi-Fi: Lohagarh_Royal_Guest\nPass: RoyalLohagarh2025',
      trigger: 'Triggered 4 hours before guest scheduled arrival'
    },
    {
      id: 'invoice-sharing',
      name: 'Digital GST Invoice & Tax Folio Dispatch',
      channel: 'WhatsApp & Email',
      previewText: 'TAX INVOICE #INV-2025-0587\n\nDear Mr. Rohit Sharma,\nThank you for staying with us at Lohagarh Fort Resort & Spa, Jaipur!\n\nTotal Settled: ₹80,640.00 (Incl. 12% GST)\nGSTIN: 08AABCL9603R1Z8\n\nDownload Official PDF Invoice:\nhttps://hos.lohagarhfortresort.in/invoice/INV-2025-0587.pdf\n\nWe look forward to welcoming you back soon!',
      trigger: 'Triggered upon express checkout completion'
    },
    {
      id: 'staff-alert',
      name: 'Staff Housekeeping & Turnover Alert',
      channel: 'Internal Push & SMS',
      previewText: 'HOUSEKEEPING DISPATCH #HK-409\n\nPresidential Villa 204 has checked out. Priority: HIGH (New VIP arrival at 03:30 PM).\n\nAssigned to: Ramesh Kumar\nChecklist: Deep sanitization, pool pH check, linen swap, fresh fruit basket.',
      trigger: 'Triggered on guest checkout for immediate villa turnover'
    }
  ];

  const currentTpl = templates.find(t => t.id === selectedTemplate) || templates[0];

  const handleSendCustomMessage = (e) => {
    e.preventDefault();
    const msg = customMsgInput.trim() || currentTpl.previewText;
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setSentMessages(prev => [...prev, { id: Date.now(), text: msg, time: timeNow }]);
    showToast(`WhatsApp message dispatched to ${recipientName} (${recipientPhone})!`);
    setCustomMsgInput('');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 16 • Omni-Channel Notifications</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">WhatsApp, SMS & Email Notification Center</h1>
          <p className="text-xs text-slate-500 mt-0.5">Automated guest journey triggers, digital invoices, and staff operational alerts.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Open Rate</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-2">97.8%</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">vs 21% Email</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
            <MessageSquare className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Messages Sent (Today)</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-2">1,240</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">Confirmations & Invoices</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
            <Smartphone className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Delivery Success</div>
            <div className="text-3xl font-mono font-bold text-emerald-600 mt-2">99.9%</div>
            <div className="text-xs text-emerald-700 font-semibold mt-1">Official Meta Business API</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
            <CheckCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pre-Arrival Check-Ins</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-2">68%</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">Zero Front Desk Queue</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Template Catalog & Interactive Dispatcher */}
        <div className="lg:col-span-7 space-y-6">
          <div className="custom-card p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900">Select Automated Notification Template</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {templates.map((tpl) => {
                const isSelected = tpl.id === selectedTemplate;
                return (
                  <div
                    key={tpl.id}
                    onClick={() => {
                      setSelectedTemplate(tpl.id);
                      setCustomMsgInput(tpl.previewText);
                    }}
                    className={`p-4 rounded-2xl cursor-pointer transition-all border-2 flex flex-col justify-between h-32 ${
                      isSelected ? 'border-indigo-600 bg-indigo-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900 text-xs">{tpl.name}</h4>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {tpl.channel.split(' ')[0]}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 font-medium line-clamp-2">{tpl.trigger}</p>
                    </div>

                    <div className="text-[10px] font-bold text-indigo-600">
                      {isSelected ? '✓ Selected for Dispatch' : 'Click to Load'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Message Dispatch Form */}
          <form onSubmit={handleSendCustomMessage} className="custom-card p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900">Live WhatsApp Dispatcher</h3>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 font-bold mb-1">Guest Name</label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-bold outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-bold mb-1">WhatsApp Phone Number</label>
                <input
                  type="text"
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-mono font-bold outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1 text-xs">Message Body (Editable Template)</label>
              <textarea
                rows={4}
                value={customMsgInput || currentTpl.previewText}
                onChange={(e) => setCustomMsgInput(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium outline-none font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Dispatch Message to Guest WhatsApp Phone</span>
            </button>
          </form>
        </div>

        {/* Right: Realistic WhatsApp Mobile Preview Device */}
        <div className="lg:col-span-5 flex justify-center sticky top-20">
          <div className="w-80 bg-slate-900 rounded-[42px] p-3.5 shadow-2xl border-4 border-slate-800">
            {/* Phone Screen */}
            <div className="bg-[#EFEAE2] rounded-[32px] overflow-hidden flex flex-col h-[540px]">
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] text-white p-3.5 pt-4 flex items-center gap-2.5 shadow-md">
                <div className="w-9 h-9 rounded-full bg-white text-[#075E54] font-black text-sm flex items-center justify-center shadow-xs">
                  <Hotel className="w-4 h-4 text-[#075E54]" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Lohagarh Fort Resort ✓</div>
                  <div className="text-[10px] opacity-80 font-medium">Official Verified Business</div>
                </div>
              </div>

              {/* Chat Message Stream */}
              <div className="p-3 overflow-y-auto flex-1 space-y-3 text-xs">
                <div className="text-center">
                  <span className="px-2.5 py-0.5 bg-white/80 text-[9px] text-slate-500 font-bold rounded shadow-2xs">
                    Today
                  </span>
                </div>

                {sentMessages.map((m) => (
                  <div key={m.id} className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-xs text-slate-800 text-[11px] space-y-2 whitespace-pre-line leading-relaxed max-w-[92%] border border-black/5 animate-in zoom-in-95">
                    <div className="font-medium">{m.text}</div>
                    <div className="text-[9px] text-slate-400 text-right flex items-center justify-end gap-1 font-semibold">
                      <span className="font-mono">{m.time}</span>
                      <CheckCheck className="w-3.5 h-3.5 text-sky-500 inline" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Fake WhatsApp Input */}
              <div className="bg-[#F0F2F5] p-2.5 flex items-center gap-2 border-t border-slate-200">
                <div className="flex-1 bg-white px-3.5 py-2 rounded-full text-[11px] text-slate-400 font-medium">
                  Type a reply...
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00A884] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  <Send className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
