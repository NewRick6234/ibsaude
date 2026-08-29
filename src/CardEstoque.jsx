  import React from 'react';


export default function CardEstoque({ titulo, valor, descricao, icone: Icone, corBorda = '#cbd5e1' }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      borderLeft: `6px solid ${corBorda}`,    /* Borda lateral colorida */
      borderTop: '1px solid #e2e8f0',         /* Borda superior visível */
      borderRight: '1px solid #e2e8f0',       /* Borda direita visível */
      borderBottom: '1px solid #e2e8f0',      /* Borda inferior visível */
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', /* Sombra para dar profundidade */
      flex: '1 1 250px',                      /* Flexibilidade ajustada */
      maxWidth: '320px',
      boxSizing: 'border-box'
    }}>
      {/* Topo do Card: Título e Ícone */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase' }}>
          {titulo}
        </span>
        {Icone && <Icone size={22} color={corBorda} />}
      </div>

      {/* Valor */}
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>
        {valor}
      </div>

      {/* Descrição */}
      {descricao && (
        <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>
          {descricao}
        </span>
      )}
    </div>
  );
}