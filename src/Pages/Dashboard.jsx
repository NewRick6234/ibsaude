import Titulo from "../Titulo";
import CardEstoque from "../CardEstoque";
import { Package, AlertTriangle, DollarSign } from "lucide-react";
import  PainelAdministrativo from "../PainelAdministrativo";
export default function Dashboard() {
  return (
    <div style={{ padding: '24px', backgroundColor: '##e0f2fe', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Título Centralizado */}
      <Titulo style={{ color: '#0f172a', textAlign: 'center', marginBottom: '24px', fontSize: '1.0rem' }}>
        Painel Administrativo
      </Titulo>
      
    <div className="p-8 space-y-6 bg-gray-50 min-h-screen">
      
      <Titulo texto="Painel Administrativo"  />
      </div>
      {/* Cards de Indicadores */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center', /* Centraliza os cards caso a tela diminua */
        width: '100%',
        maxWidth: '1000px',
        justifyContent: 'flex-end',
        marginTop: '-15px',
      
        paddingLeft:'194px'

      }}>
        <CardEstoque 
          titulo="Estoque Geral" 
          valor="1.250 un." 
          descricao="Total de itens cadastrados"
          icone={Package}
          corBorda="#0284c7"
          
         
        />
        <CardEstoque 
          titulo="Alertas Críticos" 
          valor="8 itens" 
          descricao="Necessitam de reposição urgente"
          icone={AlertTriangle}
          corBorda="#ef4444"
        />
        <CardEstoque 
          titulo="Total Investimento" 
          valor="R$ 45.800,00" 
          descricao="Valor total retido em estoque"
          icone={DollarSign}
          corBorda="#10b981"
        />
      </div>
      </div>
     </div>
  );
}