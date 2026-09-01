import Input from './componentes/Input'
import Botao from './componentes/Botao'
import { useState } from 'react'
import imagem from './imagens/att.png'
function ViewRegistro(){
    return(<>
    <div className='max-w-6xl w-full mx-auto p-4 flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
            <div>
                <h1><strong>Registro de Compra</strong></h1>
            </div>
            <div className='flex gap-1.5 justify-end w-full'>
                <Botao>Imprimir PDF</Botao>
                <Botao>Baixar XML</Botao>
                <Botao>Enviar por Email</Botao>
            </div>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
            <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">Data da Entrada</p>
                <p className="font-data-mono text-data-mono text-on-surface">15 / 10 / 2024</p>
            </div>
            <div className='bg-surface-container-lowest border border-outline-variant p-4 rounded-lg'>
                <p className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Fornecedor</p>
                <p className="font-body-md text-body-md text-on-surface font-semibold">PharmaCorp Distribuidora S.A.</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">CNPJ: 12.345.678/0001-90</p>
            </div>
                <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                <p className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Número da Nota Fiscal</p>
                <p className="font-data-mono text-data-mono text-on-surface">NF-e 000.987.654</p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                <p className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Responsável Recebimento</p>
                <p className="font-body-md text-body-md text-on-surface font-semibold">João Silva (Farmacêutico)</p>
            </div>
        </div>

        <div className=' bg-surface-container-lowest border border-outline-variant rounded-lg p-6 mb-8 flex items-center justify-between gap-110'>
            <div className='h-30 w-100 flex items-center gap-3'>
                <div className='p-4'>
                    <img className='h-20 p-2' src={imagem} alt="imagem" />
                </div>
                <div>
                    <h1 className='text-sm'><strong>Anexos(PDF/XML)</strong></h1>
                    <p className='text-sm'>NFE_000987654_PharmaCorp.pdf,<br /> XML_NFE_000987654.xml</p>
                </div>
            </div>
            <div>
                <a className='p-4' href="">Visualizar arquivo</a>
            </div>
        </div>
        <div>
            <table className='w-full text-left border border-collapse'>
                <thead className='border-b-2 '>
                    <tr className='border-b border-outline-variant'>
                        <th className='uppercase p-table-cell text-left p-5'>CODIGO INTERNO/OFICIAL</th>
                        <th className='uppercase p-table-cell text-left p-5'>Nome do Medicamento</th>
                        <th className='uppercase p-table-cell text-left p-5'>Uso</th>
                        <th className='uppercase p-table-cell text-left p-5'>Qtd Adquirida</th>
                        <th className='uppercase p-table-cell text-left p-5'>Valor Unitário (R$)</th>
                        <th className='uppercase p-table-cell text-left p-5'>Total (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-outline-variant'>
                        <td className='p-table-cell text-left p-5'>MED-012</td>
                        <td className='p-table-cell text-left p-5'>Fluoxetina</td>
                        <td className='p-table-cell text-left p-5'>Antidepressivo</td>
                        <td className='p-table-cell text-left p-5'>2,00</td>
                        <td className='p-table-cell text-left p-5'>3,00</td>
                        <td className='p-table-cell text-left p-5'>6,00</td>
                    </tr>
                    <tr className='border-b border-outline-variant'>
                        <td className='p-table-cell text-left p-5'>MED-012</td>
                        <td className='p-table-cell text-left p-5'>Fluoxetina</td>
                        <td className='p-table-cell text-left p-5'>Antidepressivo</td>
                        <td className='p-table-cell text-left p-5'>2,00</td>
                        <td className='p-table-cell text-left p-5'>3,00</td>
                        <td className='p-table-cell text-left p-5'>6,00</td>
                    </tr>
                    <tr className='border-b border-outline-variant'>
                        <td className='p-table-cell text-left p-5'></td>
                        <td className='p-table-cell text-left p-5'></td>
                        <td className='p-table-cell text-left p-5'></td>
                        <td className='p-table-cell text-left p-5'></td>
                        <td className='p-table-cell text-left p-5'>TOTAL GERAL</td>
                        <td className='p-table-cell text-left p-5'>R$ 10,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    </>)

}
export default ViewRegistro