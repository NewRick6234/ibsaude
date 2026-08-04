import Input from './componentes/Input'
import Botao from './Botao'
import { useState } from 'react'
function ViewRegistro(){
    return(<>
    <div className='flex flex-col items-center gap-40'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4'>
            <div className='flex-row min-w-100'>
                <h1><strong>Registro de Compra</strong></h1>
            </div>
            <div className='flex flex-row'>
                <Botao>Imprimir PDF</Botao>
                <Botao>Baixar XML</Botao>
                <Botao>Enviar por Email</Botao>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
            <div class="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                <p class="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Data da Entrada</p>
                <p class="font-data-mono text-data-mono text-on-surface">15 / 10 / 2024</p>
            </div>
            <div className='bg-surface-container-lowest border border-outline-variant p-4 rounded-lg'>
                <p class="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Fornecedor</p>
                <p class="font-body-md text-body-md text-on-surface font-semibold">PharmaCorp Distribuidora S.A.</p>
                <p class="font-body-sm text-body-sm text-on-surface-variant">CNPJ: 12.345.678/0001-90</p>
            </div>
                <div class="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                <p class="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Número da Nota Fiscal</p>
                <p class="font-data-mono text-data-mono text-on-surface">NF-e 000.987.654</p>
            </div>
            <div class="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                <p class="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Responsável Recebimento</p>
                <p class="font-body-md text-body-md text-on-surface font-semibold">João Silva (Farmacêutico)</p>
            </div>
        </div>

        <div className='bg-surface-container-lowest border border-outline-variant rounded-lg p-6 mb-8 flex items-center justify-between gap-110'>
            <div className='h-30 flex flex-col justify-center '>
                <h1><strong>Anexos(PDF/XML)</strong></h1>
                <p className='text-sm'>NFE_000987654_PharmaCorp.pdf, XML_NFE_000987654.xml</p>
            </div>
            <div>
                <a href="">Visualizar arquivo</a>
            </div>
        </div>
        <div>
            <table className='w-full text-left border-collapse '>
                <thead>
                    <tr classNames='border-b border-outline-variant'>
                        <th>CODIGO INTERNO/OFICIAL</th>
                        <th className='uppercase p-table-cell text-left p-5'>Nome do Medicamento</th>
                        <th className='uppercase p-table-cell text-left p-5'>Uso</th>
                        <th className='uppercase p-table-cell text-left p-5'>Uso</th>
                        <th className='uppercase p-table-cell text-left p-5'>Qtd Adquirida</th>
                        <th className='uppercase p-table-cell text-left p-5'>Valor Unitário (R$)</th>
                        <th className='uppercase p-table-cell text-left p-5'>Total (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-outline-variant'>
                        <td className='p-table-cell'>MED-012</td>
                        <td className='p-table-cell'>Fluoxetina</td>
                        <td className='p-table-cell'>Antidepressivo</td>
                        <td className='p-table-cell'>03</td>
                        <td className='p-table-cell'>2,00</td>
                        <td className='p-table-cell'>3,00</td>
                        <td className='p-table-cell'>6,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    </>)

}
export default ViewRegistro