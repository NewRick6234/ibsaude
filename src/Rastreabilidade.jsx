import Input  from "./componentes/Input"
import Botao from "./componentes/Botao"

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
            <div className='w-full flex flex-col items-center border-separate border-spacing-0 border border-black rounded-t-lg overflow-hidden'>
                <div className="w-full flex items-center justify-between border-b h-15 font-bold">
                    <p >fdsafds</p>
                    <p>fsdfdfsda</p>
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
                    <td className="py-2">test</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    </tr>
                    <tr>
                    <td className="py-2">test</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    </tr>
                    <tr>
                    <td className="py-2">test</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    </tr>
                    <tr>
                    <td className="py-2">test</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    <td className="py-2">teste</td>
                    </tr>
                </tbody>
                </table>
            </div>

        </div>
        
        
        </>
    )

}
export default Rastreabilidade