import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Bot,
  Send,
  Sparkles,
  User,
  Phone,
  BedDouble,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  MessageSquare,
  Wifi,
  UtensilsCrossed,
  Car
} from 'lucide-react';

export default function AiReceptionistChat() {
  const { chatThreads, activeChatId, setActiveChatId, sendChatMessage, showToast } = useApp();
  const [inputText, setInputText] = useState('');
  const [isHumanTakeover, setIsHumanTakeover] = useState(false);

  const activeThread = chatThreads.find(t => t.id === activeChatId) || chatThreads[0];

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendChatMessage(activeThread.id, inputText);
    setInputText('');
  };

  const quickPrompts = [
    { label: "Send Wi-Fi Credentials", icon: Wifi, query: "Please share the Wi-Fi credentials for my villa." },
    { label: "Approve 1:30 PM Late Checkout", icon: Clock, query: "Can I get a late checkout until 1:30 PM today?" },
    { label: "Send In-Villa Dining Menu", icon: UtensilsCrossed, query: "Can you send the in-villa dining room service menu?" },
    { label: "Schedule Airport Cab", icon: Car, query: "Please schedule an airport transfer cab for tomorrow 9 AM." }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">Module 15 • AI Receptionist</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight">AI Virtual Receptionist & Guest Desk</h1>
          <p className="text-xs text-slate-500 mt-0.5">24x7 automated guest queries, room services, and smart escalation.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold shadow-2xs">
            <Bot className="w-4 h-4 text-indigo-600" />
            <span>AI Response Latency: <strong className="font-mono text-emerald-600">~0.4s</strong></span>
          </div>
        </div>
      </div>

      {/* Main Grid: Threads List (4 cols) + Active Chat Box (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-[640px]">
        {/* Left: Chat Threads List */}
        <div className="lg:col-span-4 custom-card h-full flex flex-col justify-between overflow-hidden">
          <div>
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <span className="font-display font-bold text-sm text-slate-900">Active Guest Messages</span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold">
                {chatThreads.length} Live
              </span>
            </div>

            <div className="divide-y divide-slate-100 overflow-y-auto max-h-[550px]">
              {chatThreads.map((thread) => {
                const isActive = thread.id === activeChatId;
                return (
                  <div
                    key={thread.id}
                    onClick={() => setActiveChatId(thread.id)}
                    className={`p-4 cursor-pointer transition-colors flex items-start gap-3 ${
                      isActive ? 'bg-indigo-50/70 border-l-4 border-l-indigo-600' : 'hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {thread.guestName.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-xs text-slate-900 truncate">{thread.guestName}</div>
                        <span className="text-[10px] font-mono text-slate-400">{thread.time}</span>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 mt-0.5">
                        Room {thread.room}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate mt-1">
                        {thread.preview}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Active Chat Stream */}
        <div className="lg:col-span-8 custom-card h-full flex flex-col justify-between overflow-hidden shadow-lg border border-slate-200">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-100 bg-slate-50/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                {activeThread.guestName.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm text-slate-900">{activeThread.guestName}</span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold font-mono">
                    Room {activeThread.room}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Checking out: May 18, 2025 • VIP Royal Club Member
                </div>
              </div>
            </div>

            {/* Toggle AI autopilot vs human takeover */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
              <Zap className={`w-3.5 h-3.5 ${isHumanTakeover ? 'text-amber-500' : 'text-emerald-500'}`} />
              <span className="text-xs font-semibold text-slate-700">
                {isHumanTakeover ? 'Human Mode' : 'AI Autopilot'}
              </span>
              <button
                onClick={() => {
                  setIsHumanTakeover(prev => !prev);
                  showToast(isHumanTakeover ? 'AI Autopilot resumed' : 'Staff takeover enabled');
                }}
                className="text-[10px] font-bold text-indigo-600 underline ml-1 cursor-pointer"
              >
                Toggle
              </button>
            </div>
          </div>

          {/* Messages Bubble Area */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4 bg-slate-50/30">
            {activeThread.messages.map((msg) => {
              const isGuest = msg.sender === 'guest';
              return (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2.5 ${isGuest ? 'justify-end' : 'justify-start'}`}
                >
                  {!isGuest && (
                    <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shrink-0 shadow-2xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-md rounded-2xl px-4 py-2.5 text-xs shadow-xs ${
                    isGuest
                      ? 'bg-indigo-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                  }`}>
                    <p className="leading-relaxed whitespace-pre-line font-medium">{msg.text}</p>
                    <div className={`text-[9px] mt-1 text-right font-mono ${isGuest ? 'text-indigo-200' : 'text-slate-400'}`}>
                      {msg.time}
                    </div>
                  </div>

                  {isGuest && (
                    <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-[10px] shrink-0">
                      {activeThread.guestName.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Smart Action Chips */}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center gap-2 overflow-x-auto">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Quick Actions:</span>
            {quickPrompts.map((p, idx) => {
              const Icon = p.icon;
              return (
                <button
                  key={idx}
                  onClick={() => sendChatMessage(activeThread.id, p.query)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-700 rounded-xl text-[11px] font-bold transition-colors shrink-0 shadow-2xs"
                >
                  <Icon className="w-3 h-3 text-indigo-600" />
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder={`Reply to ${activeThread.guestName} (or type 'wifi password', 'jacuzzi heat', 'food menu')...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            <button
              type="submit"
              className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-xs transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
