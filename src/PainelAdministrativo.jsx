import React from 'react';
import Dashboard from './Dashboard';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// 1. Total de Investimento por Categoria de Medicamento (Mensal)
const dadosMedicamentos = [
  { mes: 'Jan', oncologicos: 420000, biologicos: 310000, antibioticos: 180000 },
  { mes: 'Fev', oncologicos: 450000, biologicos: 340000, antibioticos: 195000 },
  { mes: 'Mar', oncologicos: 490000, biologicos: 380000, antibioticos: 210000 },
  { mes: 'Abr', oncologicos: 470000, biologicos: 360000, antibioticos: 200000 },
  { mes: 'Mai', oncologicos: 530000, biologicos: 410000, antibioticos: 230000 },
  { mes: 'Jun', oncologicos: 580000, biologicos: 450000, antibioticos: 240000 },
];

// 2. Relatório de Investimento por Região (Unidades: Norte, Sul, Leste, Oeste)
const dadosUnidades = [
  { unidade: 'Unidade Norte', investimento: 2100000, orcamento: 2500000 },
  { unidade: 'Unidade Sul', investimento: 3400000, orcamento: 3500000 },
  { unidade: 'Unidade Leste', investimento: 2800000, orcamento: 3000000 },
  { unidade: 'Unidade Oeste', investimento: 1900000, orcamento: 2000000 },
];

const formatarMoeda = (valor) => 
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(valor);

export default function PainelAdministrativo() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f8fafc' }}>
      <h2 style={{ color: '#0f172a', marginBottom: '40px' }}>
        Painel Administrativo - Controle de Investimentos
      </h2>
      

      {/* Gráfico 1: Investimento por Medicamentos */}
      <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ color: '#334155', fontSize: '1.1rem' }}>Total de Investimento por Medicamento</h3>
        <div style={{ width: '80%', height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dadosMedicamentos}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="mes" />
              <YAxis tickFormatter={(v) => `R$ ${v / 1000}k`} />
              <Tooltip formatter={(valor) => [formatarMoeda(valor), '']} />
              <Legend />
              <Line type="monotone" dataKey="oncologicos" name="Oncológicos" stroke="#2563eb" strokeWidth={2} />
              <Line type="monotone" dataKey="biologicos" name="Biológicos" stroke="#7c3aed" strokeWidth={2} />
              <Line type="monotone" dataKey="antibioticos" name="Antibióticos" stroke="#059669" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfico 2: Relatório por Unidade (Norte, Sul, Leste, Oeste) */}
      <div style={{ backgroundColor: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ color: '#334155', fontSize: '1.1rem' }}>Relatório de Investimento por Unidade</h3>
        <div style={{ width: '80%', height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dadosUnidades}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="unidade" />
              <YAxis tickFormatter={(v) => `R$ ${(v / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(valor) => [formatarMoeda(valor), '']} />
              <Legend />
              <Bar dataKey="investimento" name="Investimento Realizado" fill="#0284c7" radius={[4, 4, 0, 0]} />
              <Bar dataKey="orcamento" name="Orçamento Planejado" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          
        </div>
      </div>
    </div>
  );
}