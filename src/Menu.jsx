import { useState, useEffect, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import imagens from "./imagens/ib_saude.png"

function Menu() {
  const [menuAberto, setMenuAberto] = useState(null)
  const menuRef = useRef(null)

  const toggleMenu = (nomeMenu) => {
    setMenuAberto(prev => prev === nomeMenu ? null : nomeMenu)
  }

  const fecharMenus = () => {
    setMenuAberto(null)
  }

  useEffect(() => {
    function handleClickFora(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        fecharMenus()
      }
    }

    document.addEventListener('mousedown', handleClickFora)
    return () => {
      document.removeEventListener('mousedown', handleClickFora)
    }
  }, [])

  const rota = {
    fontWeight: "bold",
    cursor: "pointer"
  }

  const dropdownStyle = "absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-md py-2 w-52 z-50 flex flex-col gap-2 px-3 font-normal"

  return (
    <>
      {/* 
        Ajustes aplicados na div principal:
        - Removido h-28 fixo e adicionado py-3 (padding vertical limpo)
        - Substituído style={imagem} por classes Tailwind responsivas no <img>
      */}
      <div ref={menuRef} className='flex border-b-4 w-full border-blue-500 items-center justify-between px-6 py-3'>
        
        {/* LOGO: Altura controlada para não ultrapassar a linha azul */}
        <img className="h-14 w-auto object-contain" src={imagens} alt="Logo IBSaúde" />

        <ul className='flex gap-6 items-center justify-center'>
          
          {/* MENU CADASTRAR */}
          <li className="relative" style={rota}>
            <span onClick={() => toggleMenu('cadastro')}>Cadastrar ▾</span>
            {menuAberto === 'cadastro' && (
              <ul className={dropdownStyle}>
                <li><Link to='cadastroMedicamento' onClick={fecharMenus} className="hover:text-blue-600">Cadastro de Medicamentos</Link></li>
                <li><Link to='cadastroSaude' onClick={fecharMenus} className="hover:text-blue-600">Unidade de Saúde</Link></li>
                <li><Link to="LoteMedicamentos" onClick={fecharMenus} className="hover:text-blue-600">Cadastrar Lote</Link></li>
              </ul>
            )}
          </li>

          {/* MENU VER */}
          <li className="relative" style={rota}>
            <span onClick={() => toggleMenu('ver')}>Ver ▾</span>
            {menuAberto === 'ver' && (
              <ul className={dropdownStyle}>
                <li><Link to='verRemedios' onClick={fecharMenus} className="hover:text-blue-600">Medicamentos</Link></li>
                <li><Link to="verLote" onClick={fecharMenus} className="hover:text-blue-600">Lote de Medicamentos</Link></li>
              </ul>
            )}
          </li>

          {/* MENU REGISTRO */}
          <li className="relative" style={rota}>
            <span onClick={() => toggleMenu('registro')}>Registro ▾</span>
            {menuAberto === 'registro' && (
              <ul className={dropdownStyle}>
                <li><Link to='TelaDeRegistro' onClick={fecharMenus} className="hover:text-blue-600">Tela De Cadastro</Link></li>
                <li><Link to="ViewRegistro" onClick={fecharMenus} className="hover:text-blue-600">Visualizar Registro</Link></li>
              </ul>
            )}
          </li>

          {/* LINKS SIMPLES */}
          <li style={rota}>
            <Link to='ControleDeEstoque' onClick={fecharMenus}>Controle de Estoque</Link>
          </li>
          
          <li style={rota}>
            <Link to="DistribuicaoUnidade" onClick={fecharMenus}>Distribuição para unidades</Link>
          </li>

          {/* MENU RASTREABILIDADE */}
          <li className="relative" style={rota}>
            <span onClick={() => toggleMenu('rastreabilidade')}>Rastreabilidade ▾</span>
            {menuAberto === 'rastreabilidade' && (
              <ul className={dropdownStyle}>
                <li><Link to='Rastreabilidade' onClick={fecharMenus} className="hover:text-blue-600">Painel Rastreabilidade</Link></li>
                <li><Link to="LoteRastreabilidade" onClick={fecharMenus} className="hover:text-blue-600">Detalhes do Lote</Link></li>
                <li><Link to="LogAuditoria" onClick={fecharMenus} className="hover:text-blue-600">Log de Auditoria</Link></li>
              </ul>
            )}
          </li>

          <li style={rota}>
            <Link to="PainelAdministrativo" onClick={fecharMenus}>Painel Administrativo</Link>
          </li>
        </ul>

        {/* Espaçador do lado direito para manter o menu de links perfeitamente centralizado */}
        <div className="w-36"></div>
      </div>

      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </>
  )
}

export default Menu;