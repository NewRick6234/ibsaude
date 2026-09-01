import Titulo from "./Titulo";
import CardEstoque from "./CardEstoque";
import { Package, AlertTriangle, DollarSign } from "lucide-react";
import  PainelAdministrativo from "./PainelAdministrativo";
export default function Dashboard() {
  return (
    <div style={{  display:'flex', flexDirection:'column', backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'sans-serif'}}>
      
      {/* Título Centralizado */}
    
      <Titulo style={{ display: 'flex', color: '#0f172a', textAlign: 'center', marginBottom: '24px', fontSize: '1.5rem',backgroundColor: '#e0f2fe', padding: '32px', borderRadius: '18px' }}>
        
        Painel Administrativo
      </Titulo>
      
      {/* Cards de Indicadores */}
      
      <div style={{
        position: 'relative',
        display: 'flex',
        gap: '20px',
        zIndex: 1000,
        // flexWrap: 'wrap',
        justifyContent: 'space-around', /* Centraliza os cards caso a tela diminua */
     
        // maxWidth: '1000px',
        marginTop: '-30px',
      
        paddingLeft:'20px'

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
      <PainelAdministrativo />
      
     </div>
  );
}