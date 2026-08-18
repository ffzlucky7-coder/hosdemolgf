import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ClipboardList,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertTriangle,
  User,
  Plus,
  ArrowRight,
  ChevronRight,
  Wrench,
  Search,
  PackageCheck,
  CheckSquare,
  X
} from 'lucide-react';

export default function HousekeepingKanban() {
  const {
    housekeepingTasks,
    setHousekeepingTasks,
    moveHousekeepingTask,
    rooms,
    updateRoomStatus,
    lostAndFoundItems,
    setLostAndFoundItems,
    maintenanceTickets,
    setMaintenanceTickets,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState('kanban'); // 'kanban' | 'lost-found' | 'maintenance'
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [selectedRoomToClean, setSelectedRoomToClean] = useState('103');
  const [selectedAssignee, setSelectedAssignee] = useState('Ramesh Kumar');
  const [selectedPriority, setSelectedPriority] = useState('High');

  // Inspection Checklist Modal
  const [isInspectModalOpen, setIsInspectModalOpen] = useState(false);
  const [inspectingTask, setInspectingTask] = useState(null);
  const [checklist, setChecklist] = useState({
    linen: true,
    jacuzzi: true,
    minibar: true,
    ac: true,
    toiletries: true
  });

  const columns = [
    { id: 'to-clean', title: 'To Clean & Sanitize', color: 'border-t-rose-500 bg-rose-50/20' },
    { id: 'in-progress', title: 'Cleaning In-Progress', color: 'border-t-amber-500 bg-amber-50/20' },
    { id: 'inspected', title: 'Supervisor Inspected', color: 'border-t-blue-500 bg-blue-50/20' },
    { id: 'completed', title: 'Ready for Arrival', color: 'border-t-emerald-500 bg-emerald-50/20' }
  ];

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return <span className="custom-badge badge-dirty text-[10px]">High Priority</span>;
      case 'Medium':
        return <span className="custom-badge badge-pending text-[10px]">Medium</span>;
      default:
        return <span className="custom-badge badge-starter text-[10px]">Standard</span>;
    }
  };

  const getNextStatus = (current) => {
    if (current === 'to-clean') return 'in-progress';
    if (current === 'in-progress') return 'inspected';
    if (current === 'inspected') return 'completed';
    return null;
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: `HK-${Date.now().toString().slice(-4)}`,
      room: `Villa/Room ${selectedRoomToClean}`,
      type: 'Routine Deep Clean & Sanitization',
      floor: parseInt(selectedRoomToClean[0]) || 1,
      priority: selectedPriority,
      status: 'to-clean',
      assignee: selectedAssignee
    };
    setHousekeepingTasks(prev => [newTask, ...prev]);
    updateRoomStatus(selectedRoomToClean, 'dirty');
    showToast(`Cleaning task assigned to ${selectedAssignee} for Villa ${selectedRoomToClean}!`);
    setIsAddTaskModalOpen(false);
  };

  const handleOpenInspection = (task) => {
    setInspectingTask(task);
    setIsInspectModalOpen(true);
  };

  const handleConfirmInspection = () => {
    if (inspectingTask) {
      moveHousekeepingTask(inspectingTask.id, 'completed');
      showToast(`Inspection passed! ${inspectingTask.room} is now 100% Clean & Ready.`);
      setIsInspectModalOpen(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Header & Sub-Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Housekeeping Operations & Turnover</h1>
          <p className="text-sm text-slate-500 mt-1">Villa sanitation, 5-point inspection checklist, lost & found registry, and engineering tickets.</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          <button
            onClick={() => setActiveTab('kanban')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'kanban' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🧹 Room Turnover Kanban
          </button>
          <button
            onClick={() => setActiveTab('lost-found')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'lost-found' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📦 Lost & Found ({lostAndFoundItems.length})
          </button>
          <button
            onClick={() => setActiveTab('maintenance')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'maintenance' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🔧 Maintenance Tickets ({maintenanceTickets.length})
          </button>
        </div>
      </div>

      {/* 1. KANBAN BOARD VIEW */}
      {activeTab === 'kanban' && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsAddTaskModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>+ Dispatch Housekeeper</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {columns.map((col) => {
              const tasks = housekeepingTasks.filter(t => t.status === col.id);
              return (
                <div
                  key={col.id}
                  className={`custom-card p-4 border-t-4 ${col.color} space-y-3 min-h-[580px] flex flex-col justify-between`}
                >
                  <div>
                    {/* Column Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                      <span className="font-bold text-sm text-slate-900">{col.title}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700 font-black text-xs">
                        {tasks.length}
                      </span>
                    </div>

                    {/* Cards List */}
                    <div className="space-y-3">
                      {tasks.map((task) => {
                        const next = getNextStatus(task.status);
                        return (
                          <div
                            key={task.id}
                            className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-black text-base text-slate-900">{task.room}</span>
                              {getPriorityBadge(task.priority)}
                            </div>

                            <div className="text-xs text-slate-500 font-medium">
                              {task.type} • Floor {task.floor}
                            </div>

                            {/* Assignee & Next action */}
                            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold flex items-center justify-center">
                                  {task.assignee.slice(0, 2).toUpperCase()}
                                </div>
                                <span className="truncate max-w-[80px]">{task.assignee}</span>
                              </div>

                              {task.status === 'inspected' ? (
                                <button
                                  onClick={() => handleOpenInspection(task)}
                                  className="flex items-center gap-1 px-3 py-1 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-bold rounded-xl text-xs transition-colors shadow-2xs border border-emerald-200"
                                >
                                  <CheckSquare className="w-3.5 h-3.5" />
                                  <span>Inspect ✓</span>
                                </button>
                              ) : next ? (
                                <button
                                  onClick={() => moveHousekeepingTask(task.id, next)}
                                  className="flex items-center gap-1 px-3 py-1 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-bold rounded-xl text-xs transition-colors shadow-2xs"
                                >
                                  <span>Next</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              ) : null}

                              {task.status === 'completed' && (
                                <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 border border-emerald-200">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Clean
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsAddTaskModalOpen(true)}
                    className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold rounded-xl border border-dashed border-slate-300 transition-colors"
                  >
                    + Assign Room
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. LOST & FOUND REGISTRY VIEW */}
      {activeTab === 'lost-found' && (
        <div className="custom-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-base text-slate-900">Lost & Found Property Registry</h3>
              <p className="text-xs text-slate-400">Track guest belongings left in treehouses, villas, or lawn banquets.</p>
            </div>
            <button
              onClick={() => showToast('New Lost & Found item logged in secure vault')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs"
            >
              + Log Found Item
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3 pl-4">Tag ID</th>
                  <th className="p-3">Item Description</th>
                  <th className="p-3">Found Location</th>
                  <th className="p-3">Found By</th>
                  <th className="p-3">Guest / Owner</th>
                  <th className="p-3 text-right pr-4">Locker Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {lostAndFoundItems.map((lf) => (
                  <tr key={lf.id} className="hover:bg-slate-50/70">
                    <td className="p-3 pl-4 font-mono font-bold text-indigo-600">{lf.id}</td>
                    <td className="p-3 font-bold text-slate-900">{lf.item}</td>
                    <td className="p-3 text-slate-600">{lf.room}</td>
                    <td className="p-3 text-slate-600">{lf.foundBy}</td>
                    <td className="p-3 font-semibold text-slate-700">{lf.guestName}</td>
                    <td className="p-3 text-right pr-4">
                      <span className={`custom-badge ${lf.status.includes('Claimed') ? 'badge-clean' : 'badge-pending'}`}>
                        {lf.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 3. MAINTENANCE & ENGINEERING TICKETS */}
      {activeTab === 'maintenance' && (
        <div className="custom-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-base text-slate-900">Resort Engineering & Maintenance Tickets</h3>
              <p className="text-xs text-slate-400">Track pool pumps, jacuzzi heaters, and HVAC preventive maintenance.</p>
            </div>
            <button
              onClick={() => showToast('New Engineering maintenance ticket dispatched')}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs"
            >
              + Raise Maintenance Ticket
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {maintenanceTickets.map((mt) => (
              <div key={mt.id} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-500">{mt.id}</span>
                  <span className={`custom-badge ${mt.status === 'Resolved' ? 'badge-clean' : 'badge-dirty'}`}>
                    {mt.status}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-slate-900">{mt.room}</h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium">{mt.issue}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Tech: <strong>{mt.technician}</strong></span>
                  <span>{mt.reportedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5-Point Inspection Checklist Modal */}
      {isInspectModalOpen && inspectingTask && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-base text-slate-900">5-Point Villa Inspection Checklist</h3>
                <p className="text-xs text-slate-400">{inspectingTask.room} • Ready Approval</p>
              </div>
              <button onClick={() => setIsInspectModalOpen(false)} className="p-1 rounded-lg text-slate-400 hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              {[
                { key: 'linen', label: '1. Fresh 400 TC Linen & Rajasthani Quilts Swapped' },
                { key: 'jacuzzi', label: '2. Private Pool & Balcony Jacuzzi Water pH & Sanitized' },
                { key: 'minibar', label: '3. In-Villa Refreshments & Mini-Bar Restocked' },
                { key: 'ac', label: '4. Climate Control AC Pre-set to 22°C' },
                { key: 'toiletries', label: '5. Forest Essentials Luxury Toiletries Restocked' },
              ].map(item => (
                <label key={item.key} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checklist[item.key]}
                    onChange={(e) => setChecklist({ ...checklist, [item.key]: e.target.checked })}
                    className="w-4 h-4 text-indigo-600 rounded"
                  />
                  <span className="font-bold text-slate-800">{item.label}</span>
                </label>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsInspectModalOpen(false)}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl text-xs"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmInspection}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md text-xs"
              >
                ✓ Pass Inspection & Mark Ready
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Task Dispatch Modal */}
      {isAddTaskModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900">Dispatch Housekeeping Turnover</h3>
              <button onClick={() => setIsAddTaskModalOpen(false)} className="p-1 rounded-lg text-slate-400 hover:bg-slate-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTask} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-600 font-bold mb-1">Select Villa / Room</label>
                <select
                  value={selectedRoomToClean}
                  onChange={(e) => setSelectedRoomToClean(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-bold"
                >
                  {rooms.map(r => (
                    <option key={r.id} value={r.number}>
                      Villa {r.number} ({r.type} • Status: {r.status.toUpperCase()})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">Assign Staff Member</label>
                <select
                  value={selectedAssignee}
                  onChange={(e) => setSelectedAssignee(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-bold"
                >
                  <option value="Ramesh Kumar">Ramesh Kumar (Lead Supervisor)</option>
                  <option value="Sunita Devi">Sunita Devi (Senior Villa Attendant)</option>
                  <option value="Mohan Lal">Mohan Lal (Pool & Linen Specialist)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">Priority Level</label>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-bold"
                >
                  <option value="High">High (Immediate Turnover for VIP Arrival)</option>
                  <option value="Medium">Medium (Regular Check-Out)</option>
                  <option value="Normal">Normal (Stayover Cleaning)</option>
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddTaskModalOpen(false)}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md"
                >
                  Dispatch Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
