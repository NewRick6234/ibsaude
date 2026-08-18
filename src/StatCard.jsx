import React from 'react';

export function StatCard({ title, value, change, icon: Icon, isPositive }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
        <p className={`text-xs font-semibold mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '↑' : '↓'} {change} <span className="text-gray-400 font-normal">vs mês anterior</span>
        </p>
      </div>
      <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
        <Icon size={24} />
      </div>
    </div>
  );
}