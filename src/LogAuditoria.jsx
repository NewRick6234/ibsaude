import { Link } from 'react-router-dom'
import Botao from './componentes/Botao'
import Input from './componentes/Input'
import { Download, FileText, FileSpreadsheet } from 'lucide-react'
function LogAuditoria(){

   
    return(
        <><div className='w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 mb-8 items-center justify-center'>
                            <div className="bg-surface-container-lowest p-4 rounded-lg">
                                            <p className="p-10 uppercase">Logs de Auditoria</p>
                                            <p className="text-gray-600">Gravação imutavel de todos os eventos do sistemas</p>
                                    
                            </div>
                             
                            <div className="w-full bg-surface-container-lowest justify-center items-center flex gap-5 p-4 rounded-lg">
                                <Botao className="w-full">
                                    <Download className="flex w-4" />
                                    Export CSV
                                </Botao>
                                <Botao className="w-full">
                                    <FileText className="flex w-4 " />
                                    Export CSV
                                </Botao>
                                     
                            </div>
                             
            </div>

            <div className='w-full flex flex-col gap-4 items-center justify-center'>
                <div className='w-full border rounded-lg grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
                    <Input
                        type="date"
                    >
                        Data
                    </Input>
                    <Input
                    >
                        Usuário ID do sistema
                    </Input>
                   <Input
                             options={["Todas ações","Autentificação","Atualização","Alerta de Sistema"]}
                           >
                             Tipos de Açôes
                    </Input>
                    <div className="bg-surface-container-lowest flex p-4 rounded-lg">
                        <Botao style={{padding:0 , Width:"8px",margin:5}}>
                            Aplicar <br /> Filtros
                        </Botao>
                        <Botao style={{padding:0 , Width:"8px",margin:5}}>
                            Limpar
                        </Botao>


                    </div>


                </div>

            </div>

        </div>
        <h1>Log Auditoria</h1>
        </>
    )

}
export default LogAuditoria 