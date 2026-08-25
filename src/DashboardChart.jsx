import React, { useState } from 'react';

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid, 
  Legend 
} from 'recharts';

export default function DashboardChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Relatório por Unidade (Comparações e Indicadores)</h3>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="unidade" />
            
            {/* Eixo Esquerdo para Valores em R$ */}
            <YAxis yAxisId="left" orientation="left" stroke="#3498db" />
            
            {/* Eixo Direito para Quantidade de Itens */}
            <YAxis yAxisId="right" orientation="right" stroke="#e74c3c" />
            
            <Tooltip 
              formatter={(value, name) => [
                name === "valorTotal" ? `R$ ${value.toFixed(2)}` : `${value} un.`,
                name === "valorTotal" ? "Total Investido" : "Qtd Em Estoque"
              ]} 
            />
            <Legend />
            
            {/* Linha do Investimento */}
            <Line 
              yAxisId="left" 
              type="monotone" 
              dataKey="valorTotal" 
              name="Valor Investido (R$)" 
              stroke="#3498db" 
              strokeWidth={3}
              dot={{ r: 6 }} 
              activeDot={{ r: 8 }}
            />
            
            {/* Linha do Estoque */}
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="quantidadeTotal" 
              name="Quantidade Total (un)" 
              stroke="#e74c3c" 
              strokeWidth={3}
              dot={{ r: 6 }} 
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}