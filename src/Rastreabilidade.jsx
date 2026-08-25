import Input  from "./componentes/Input"
import Botao from "./componentes/Botao"

function Rastreabilidade(){

   
    return(
        <><div className='min-w-5xl w-full flex flex-col gap-4 items-center'>
             <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
                            <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                                            <p className="p-10 uppercase">entries (24)</p>
                                            <p><strong>1,248</strong> up 12%</p>
                                    
                            </div>
                            <div className='bg-surface-container-lowest border border-outline-variant p-4 rounded-lg'>
                                   <p className=" uppercase">exits (24)</p>
                                    <p><strong>948</strong> down 3%</p>
                            </div>

                            <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg max-w-100">
                                <Botao className="bg-amber-400">
                                    Scan Batch
                                </Botao>
                                <Botao>
                                    New Entry
                                </Botao>
                                     
                            </div>
                             
            </div>
            <div className='w-full flex flex-col items-center'>
            <table className="gap-2 w-full">
                <thead>
                    <tr className="border h-2">
                        <th className="border px-3">batch</th>
                        <th className="border px-3">timestamp</th>
                        <th className="border px-3">location</th>
                        <th className="border px-3">handler</th>
                        <th className="border px-3">status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border text-center">test</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                    </tr>
                    <tr>
                        <td className="border text-center">test</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                    </tr>
                    <tr>
                        <td className="border text-center">test</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                    </tr>
                    <tr>
                        <td className="border text-center">test</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                        <td className="border text-center">teste</td>
                    </tr>
                </tbody>
            </table>
            </div>

        </div>
        
        
        </>
    )

}
export default Rastreabilidade