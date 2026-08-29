import Input  from "./componentes/Input"
import Botao from "./componentes/Botao"
import { Link, Outlet } from 'react-router-dom'

function Rastreabilidade(){

   
    return(
        <><div className='min-w-5xl w-full flex flex-col gap-4 items-center'>
             <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
                            <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                                            <p className="p-10 uppercase">entradas (24)</p>
                                            <p className="text-blue-600"><strong className="text-4xl text-black">1,248</strong> ↑ 12%</p>
                                    
                            </div>
                            <div className='bg-surface-container-lowest border border-outline-variant p-4 rounded-lg'>
                                   <p className=" uppercase">saídas (24)</p>
                                    <p className="text-red-600"><strong className="text-4xl text-black">948</strong> ↓ 3%</p>
                            </div>

                            <div className="bg-surface-container-lowest justify-center items-center flex flex-col border border-outline-variant p-4 rounded-lg max-w-100">
                                <Botao className="mb-1 mt-1 w-75">
                                    Escanear Lote
                                </Botao>
                                <Botao className="mb-1 mt-1 w-75">
                                    Nova entrada
                                </Botao>
                                     
                            </div>
                             
            </div>
            <div className='w-full flex flex-col border border-black rounded-t-lg overflow-hidden'>
                <div className="w-full flex items-center justify-between border-b h-12 font-bold box-border"
                style={{ paddingLeft: '16px', paddingRight: '16px' }}
                >
                    <p className="pl-4">Eventos de Rastreamento Recentes</p>
                    <p className="text-blue-400 pr-4">
                        <Link to='LogAuditoria'>Cadastro de Medicamentos →</Link>
                    </p>
                </div>
            <table className="w-full ">
                <thead className="divide-y divide-black text-center border-b border-black">
                 
                    <tr>
                    <th className="py-2 uppercase">Lote</th>
                    <th className="py-2 uppercase">hora</th>
                    <th className="py-2 uppercase">localização</th>
                    <th className="py-2 uppercase">responsavel</th>
                    <th className="py-2 uppercase">status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black text-center">
                   <tr>
                        <td className="py-2">B-992-XYZ</td>
                        <td className="py-2">2023-10-27 14:32:01</td>
                        <td className="py-2">Instalação de Armazenamento Alfa</td>
                        <td className="py-2">Dr. André Silva</td>
                        <td className="py-2">Armazenado</td>
                        </tr>
                        <tr>
                        <td className="py-2">B-881-ABC</td>
                        <td className="py-2">2023-10-27 14:15:44</td>
                        <td className="py-2">Centro de Trânsito Beta</td>
                        <td className="py-2">Thiago Santos</td>
                        <td className="py-2">Em Trânsito</td>
                        </tr>
                        <tr>
                        <td className="py-2">B-774-DEF</td>
                        <td className="py-2">2023-10-27 13:50:12</td>
                        <td className="py-2">Doca de Recebimento Gama</td>
                        <td className="py-2">Karine Lima</td>
                        <td className="py-2">Sinalizado</td>
                        </tr>
                        <tr>
                        <td className="py-2">B-665-GHI</td>
                        <td className="py-2">2023-10-27 13:22:05</td>
                        <td className="py-2">Instalação de Armazenamento Alfa</td>
                        <td className="py-2">Sistema Automatizado</td>
                        <td className="py-2">Armazenado</td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>
        
        
        </>
    )

}
export default Rastreabilidade