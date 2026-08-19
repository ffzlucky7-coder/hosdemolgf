import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Building2,
  UploadCloud,
  Check,
  CreditCard
} from 'lucide-react';

export default function CreateOrgModal() {
  const { isCreateOrgModalOpen, setIsCreateOrgModalOpen, showToast, setOrganizations } = useApp();

  const [selectedPlan, setSelectedPlan] = useState('Pro');
  const [formData, setFormData] = useState({
    name: '',
    businessType: 'Hotel Chain / Multi-Property',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    taxId: '',
    hotelLimit: 50,
    userLimit: 100
  });

  if (!isCreateOrgModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrg = {
      id: `ORG-${Math.floor(100000 + Math.random() * 900000)}`,
      name: formData.name || 'New Heritage Hospitality',
      owner: { name: formData.contactPerson || 'New Administrator', email: formData.email || 'admin@neworg.com', avatar: 'NA' },
      hotelsCount: 1,
      usersCount: 5,
      plan: selectedPlan,
      status: 'Active',
      createdDate: 'May 18, 2025',
      nextBillingDate: 'May 18, 2026'
    };
    setOrganizations(prev => [newOrg, ...prev]);
    showToast(`Organization "${newOrg.name}" created successfully!`);
    setIsCreateOrgModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col justify-between">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-lg text-slate-900">Create Organization</h2>
            <p className="text-xs text-slate-400 font-medium">Enter the details to onboard a new client organization.</p>
          </div>
          <button
            onClick={() => setIsCreateOrgModalOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form id="create-org-form" onSubmit={handleSubmit} className="p-8 overflow-y-auto space-y-4 text-xs">
          <div>
            <label className="block text-slate-600 font-bold mb-1">Organization Name *</label>
            <input
              type="text"
              required
              placeholder="Enter organization name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20 font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 font-bold mb-1">Business Type</label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              >
                <option value="Hotel Chain / Multi-Property">Hotel Chain / Multi-Property</option>
                <option value="Individual Luxury Hotel">Individual Luxury Hotel</option>
                <option value="Resort & Spa Franchise">Resort & Spa Franchise</option>
                <option value="Boutique Stay Network">Boutique Stay Network</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-600 font-bold mb-1">Contact Person *</label>
              <input
                type="text"
                required
                placeholder="Enter contact person name"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 font-bold mb-1">Email *</label>
              <input
                type="email"
                required
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-bold mb-1">Phone</label>
              <input
                type="text"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-mono font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-600 font-bold mb-1">Address</label>
            <textarea
              rows={2}
              placeholder="Enter full address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-600 font-bold mb-1">GST / Tax ID</label>
              <input
                type="text"
                placeholder="Enter GST or Tax ID"
                value={formData.taxId}
                onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 outline-none font-mono font-medium"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-bold mb-1">Logo</label>
              <div className="border border-dashed border-slate-300 hover:border-indigo-400 bg-slate-50 rounded-xl p-2.5 text-center cursor-pointer flex items-center justify-center gap-2 text-slate-500">
                <UploadCloud className="w-4 h-4 text-indigo-600" />
                <span className="text-[11px] font-bold">Upload Logo (PNG, JPG)</span>
              </div>
            </div>
          </div>

          {/* Subscription Tier Cards */}
          <div className="pt-2">
            <label className="block text-slate-700 font-bold mb-2">Subscription Plan</label>
            <div className="grid grid-cols-3 gap-3">
              {/* Basic */}
              <div
                onClick={() => {
                  setSelectedPlan('Basic');
                  setFormData({ ...formData, hotelLimit: 10, userLimit: 20 });
                }}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPlan === 'Basic'
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="font-display font-bold text-slate-900">Basic</div>
                <div className="font-mono font-black text-sm text-slate-800 mt-1">₹2,999<span className="text-[10px] font-normal text-slate-400 font-sans">/mo</span></div>
                <div className="text-[10px] text-slate-500 mt-1 font-medium">Up to 10 hotels<br />Up to 20 users</div>
              </div>

              {/* Pro */}
              <div
                onClick={() => {
                  setSelectedPlan('Pro');
                  setFormData({ ...formData, hotelLimit: 50, userLimit: 100 });
                }}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all relative ${
                  selectedPlan === 'Pro'
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <span className="absolute -top-2.5 right-2 px-1.5 py-0.5 bg-indigo-600 text-white rounded text-[9px] font-bold">Popular</span>
                <div className="font-display font-bold text-indigo-700">Pro</div>
                <div className="font-mono font-black text-sm text-indigo-600 mt-1">₹6,999<span className="text-[10px] font-normal text-indigo-400 font-sans">/mo</span></div>
                <div className="text-[10px] text-slate-500 mt-1 font-medium">Up to 50 hotels<br />Up to 100 users</div>
              </div>

              {/* Enterprise */}
              <div
                onClick={() => {
                  setSelectedPlan('Enterprise');
                  setFormData({ ...formData, hotelLimit: 999, userLimit: 999 });
                }}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedPlan === 'Enterprise'
                    ? 'border-indigo-600 bg-indigo-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="font-display font-bold text-slate-900">Enterprise</div>
                <div className="font-display font-black text-sm text-slate-800 mt-1">Custom</div>
                <div className="text-[10px] text-slate-500 mt-1 font-medium">Unlimited hotels<br />Unlimited users</div>
              </div>
            </div>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setIsCreateOrgModalOpen(false)}
            className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100 cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="create-org-form"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer"
          >
            Create Organization
          </button>
        </div>
      </div>
    </div>
  );
}
