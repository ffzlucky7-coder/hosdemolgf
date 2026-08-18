import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Boxes,
  AlertTriangle,
  TrendingDown,
  Plus,
  Search,
  Filter,
  PackageCheck,
  IndianRupee,
  RefreshCw
} from 'lucide-react';

export default function InventoryDashboard() {
  const { inventory, showToast } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = inventory.filter(item => {
    if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
    if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase()) && !item.id.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'In Stock':
        return <span className="custom-badge badge-active">In Stock</span>;
      case 'Low Stock':
        return <span className="custom-badge badge-lowstock">Low Stock</span>;
      case 'Critical':
        return <span className="custom-badge badge-dirty">Critical</span>;
      default:
        return <span className="custom-badge badge-starter">{status}</span>;
    }
  };

  const handleRestock = (item) => {
    showToast(`Purchase Order created for ${item.name} (+50 units) and routed to Area Manager for approval!`);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Hotel Inventory & Stock Control</h1>
          <p className="text-sm text-slate-500 mt-1">Real-time linen, toiletries, F&B consumables, and maintenance spares.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast('New inventory SKU item added!')}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Item</span>
          </button>
        </div>
      </div>

      {/* KPI Cards (Matches Pages 13 & 27) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total SKUs</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">1,450</div>
            <div className="text-xs text-indigo-600 font-semibold mt-1">Across 8 departments</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Boxes className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Low Stock Alerts</div>
            <div className="text-3xl font-bold text-amber-600 mt-2">18</div>
            <div className="text-xs text-amber-700 font-semibold mt-1">Requires immediate PO</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Stock Value</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">₹24.8L</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">Audited May 2025</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <IndianRupee className="w-6 h-6" />
          </div>
        </div>

        <div className="custom-card p-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Monthly Consumption</div>
            <div className="text-3xl font-bold text-slate-900 mt-2">₹3.4L</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">-3.1% waste reduction</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <TrendingDown className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Filter Toolbar (Pages 13 & 27) */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3 flex-1 min-w-[240px] max-w-md">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by item name or SKU code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="Housekeeping">Housekeeping & Linens</option>
            <option value="Toiletries">Toiletries & Amenities</option>
            <option value="F&B Kitchen">F&B Raw Supplies</option>
            <option value="Front Office">Front Office & Keycards</option>
          </select>
        </div>
      </div>

      {/* Inventory Table (Exact Pages 13 & 27) */}
      <div className="custom-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3.5 pl-4">SKU / Item</th>
                <th className="p-3.5">Category</th>
                <th className="p-3.5 text-center">In Stock</th>
                <th className="p-3.5 text-center">Min Threshold</th>
                <th className="p-3.5 text-right">Unit Price</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-right pr-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 pl-4">
                    <div className="font-bold text-slate-900">{item.name}</div>
                    <div className="font-mono text-[10px] text-slate-400">{item.id}</div>
                  </td>
                  <td className="p-3.5">
                    <span className="font-semibold text-slate-700">{item.category}</span>
                  </td>
                  <td className="p-3.5 text-center font-bold text-slate-900">
                    {item.inStock} {item.unit}
                  </td>
                  <td className="p-3.5 text-center text-slate-400">
                    {item.minThreshold} {item.unit}
                  </td>
                  <td className="p-3.5 text-right font-semibold text-slate-800">
                    ₹{item.price}
                  </td>
                  <td className="p-3.5">
                    {getStatusBadge(item.status)}
                  </td>
                  <td className="p-3.5 text-right pr-4">
                    <button
                      onClick={() => handleRestock(item)}
                      className="px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 ml-auto"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Restock</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
