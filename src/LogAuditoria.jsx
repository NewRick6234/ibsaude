import { Link } from 'react-router-dom'
import Botao from './componentes/Botao'
import Input from './componentes/Input'
import { Weight } from 'lucide-react'
function LogAuditoria(){

   
    return(
        <><div className='min-w-5xl w-full flex flex-col gap-4 items-center justify-center'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 mb-8 items-center justify-center'>
                            <div className="bg-surface-container-lowest p-4 rounded-lg">
                                            <p className="p-10 uppercase">Logs de Auditoria</p>
                                            <p className="text-gray-600">Gravação imutavel de todos os eventos do sistemas</p>
                                    
                            </div>
                             
                            <div className="w-full bg-surface-container-lowest justify-center items-center flex gap-5 p-4 rounded-lg max-w-100">
                                <Botao className="mb-1 mt-1 w-75">
                                    Escanear Lote
                                </Botao>
                                <Botao className="mb-1 mt-1 w-75">
                                    Nova entrada
                                </Botao>
                                     
                            </div>
                             
            </div>

            <div className='min-w-5xl w-full flex flex-col gap-4 items-center justify-center'>
                <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
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