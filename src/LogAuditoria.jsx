import { Link } from 'react-router-dom'
import Botao from './componentes/Botao'
import Input from './componentes/Input'
import { Download, FileText, FileSpreadsheet, ListFilter } from 'lucide-react'
function LogAuditoria(){

   
    return(
        <><div className='w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 mb-8 items-center justify-center'>
                            <div className="bg-surface-container-lowest p-4 rounded-lg">
                                            <p className="p-10 uppercase">Logs de Auditoria</p>
                                            <p className="text-gray-600">Gravação imutavel de todos os eventos do sistemas</p>
                                    
                            </div>
                             
                            <div className="w-full bg-surface-container-lowest justify-end items-center flex gap-5 p-4 rounded-lg">
                                <Botao
                                className='flex justify-center items-center gap-4 border'
                                style={{backgroundColor:"#fff",color:"#000"}}
                                >
                                    <Download className="flex w-4" />
                                    Export CSV
                                </Botao>
                                <Botao
                                className='flex justify-center items-center gap-4 border'
                                style={{backgroundColor:"#fff",color:"#000"}}
                                >
                                    <FileText className="flex w-4 " />
                                    Export PDF
                                </Botao>
                                     
                            </div>
                             
            </div>

            <div className='w-full flex flex-col gap-4 items-center justify-center'>
                <div className='w-full border rounded-lg grid grid-cols-1 md:grid-cols-4 gap-4 mb-32 h-20'>
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
                    <div className="bg-surface-container-lowest flex items-center p-4 rounded-lg">
                        <Botao style={{padding:0 , Width:"8px",margin:5,height:50, }}
                        className='flex justify-center items-center gap-4'
                        >
                            <ListFilter className="flex w-4 justify-center items-center" />
                            Aplicar <br /> Filtros
                        </Botao>
                        <Botao style={{padding:0 , Width:"8px",margin:5,height:50,backgroundColor:"#fff",color:"#000"}}
                        className='flex justify-center items-center gap-4 border'
                        >
                            Limpar
                        </Botao>


                    </div>


                </div>

            </div>

            <div className='w-full flex flex-col gap-4 items-center border rounded-lg justify-center'>
             <table className="w-full ">
                <thead className="divide-y divide-black text-center border-b border-black">
                 
                    <tr>
                    <th className="py-2 uppercase">hora</th>
                    <th className="py-2 uppercase">ação</th>
                    <th className="py-2 uppercase">usuário / sistema</th>
                    <th className="py-2 uppercase">detalhes</th>
                    <th className="py-2 uppercase">hash de verificação</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black text-center">
                    <tr>
                        <td className="py-2">2023-10-25 14:32:01</td>
                        <td className="py-2">AUTH_SUCCESS</td>
                        <td className="py-2">SYS_ADMIN_01</td>
                        <td className="py-2">Login via MFA successful <br /> from IP 192.168.1.42</td>
                        <td className="py-2">0x7f8a...3b4c</td>
                    </tr>
                    <tr>
                        <td className="py-2">2023-10-25 14:35:12</td>
                        <td className="py-2">BATCH_UPDATE</td>
                        <td className="py-2">SYS_ADMIN_01</td>
                        <td className="py-2">Updated status for Batch <br /> #B-4092 to IN_TRANSIT</td>
                        <td className="py-2">0x1a2b...5c6d</td>
                    </tr>
                    <tr>
                        <td className="py-2">2023-10-25 14:40:05</td>
                        <td className="py-2">TEMP_ALERT</td>
                        <td className="py-2">SENSOR_T_09</td>
                        <td className="py-2">Temperature excursion <br /> detected (8.2°C) <br /> - Duration 5m</td>
                        <td className="py-2">0x9d8c...5b4a</td>
                    </tr>
                    <tr>
                        <td className="py-2">2023-10-25 14:42:10</td>
                        <td className="py-2">ALERT_ACK</td>
                        <td className="py-2">MGR_OPERATIONS</td>
                        <td className="py-2">Alert TEMP_ALERT <br /> acknowledged. <br /> Note: "Investigating sensor."</td>
                        <td className="py-2">0x4a5b...8c9d</td>
                    </tr>
                    <tr>
                        <td className="py-2">2023-10-25 15:01:22</td>
                        <td className="py-2">DATA_EXPORT</td>
                        <td className="py-2">SYS_ADMIN_01</td>
                        <td className="py-2">Exported Audit Log (CSV) <br /> - Date range: 2023-10-01 <br /> to 2023-10-25</td>
                        <td className="py-2">0x2f3e...ef01</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <h1>Log Auditoria</h1>
        </>
    )

}
export default LogAuditoria 