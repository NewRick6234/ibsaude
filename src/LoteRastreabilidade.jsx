import Input  from "./componentes/Input"
import Botao from "./componentes/Botao"
import Container from "./componentes/Container"
import { Link, Outlet } from 'react-router-dom'
import * as LucideIcons from 'lucide-react'

function LoteRastreabilidade(){

   
    return(
        <> 
        <Container>
        <div className="flex flex-col gap-4">    
        <h1>Lote Rastreabilidade</h1>
        <div className="flex min-w-5xl justify-between w-full border-b h-20 items-center">
            <h1>Amoxicillin 500mg - Standard Issue</h1>
            <div className="flex max-w-full gap-4 items-end">
                <Botao
                            className='flex justify-center items-center gap-4 border'
                             style={{backgroundColor:"#fff",color:"#000"}}
                                >
                                    <LucideIcons.Printer className="flex w-4" />
                                    Print Report
                </Botao>

                <Botao
                            className='flex justify-center items-center gap-4 border'
                             
                                >
                                    <LucideIcons.Download className="flex w-4" />
                                    Export Data
                </Botao>
            </div>
        </div>
        --div principal
        <div className="flex min-w-5xl gap-4 justify-between">
        <div className="flex flex-col w-full flex-1 gap-4">
        <div className="border rounded-xl">
            <div className="flex flex-col items-center rounded-xl">
            <p className="border-b">Batch Details</p>
            <table>
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                     <tr className="border-b">
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                     <tr className="border-b">
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                     <tr className="border-b">
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                     <tr>
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
         <div className="border rounded-xl ">
            <div className="flex flex-col items-center">
            <p>Batch Details</p>
            <table>
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div className="border rounded-xl">
            <div className="flex flex-col items-center">
            <p>Batch Details</p>
            <table>
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>

        <div className="flex flex-2 flex-col w-full border border-gray-300 rounded-lg">
            
            <div className="flex h-15 items-center justify-between w-full bg-blue-50 rounded-t-2xl p-4">
                <div>
                    <h2>Audit Timeline</h2>
                </div>
                <div>
                    <Botao
                            className='flex justify-center items-center gap-4 border'
                             style={{backgroundColor:"#fff",color:"#000"}}
                                >
                                    <LucideIcons.ListFilter className="flex w-4" />
                                    Filter
                    </Botao>
                                
                </div>
            </div>
            <div className="p-4 flex flex-col gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <p>In Transit to Regional Hub</p>
                        <p className="bg-blue-100 px-1">current</p>
                    </div>
                    <p className="flex"><LucideIcons.Clock className="w-3"/> 14:30 EST, Oct 15, 2023</p>
                    <p>Batch signed out by logistics carrier TransMed Global. GPS tracking active. Cold chain monitoring devices nominal</p>
                    <div className="flex gap-4">
                        <p className="bg-white border border-gray-300 px-2">VEH: TRK-992-A</p>
                        <p className="bg-white border border-gray-300 px-2">LOC: I-95 N, MM 112</p>
                        
                    </div>

                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <p>In Transit to Regional Hub</p>
                        <p className="bg-blue-100 px-1">current</p>
                    </div>
                    <p className="flex"><LucideIcons.Clock className="w-3"/> 14:30 EST, Oct 15, 2023</p>
                    <p>Batch signed out by logistics carrier TransMed Global. GPS tracking active. Cold chain monitoring devices nominal</p>
                    <div className="flex gap-4">
                        <p className="bg-white border border-gray-300 px-2">VEH: TRK-992-A</p>
                        <p className="bg-white border border-gray-300 px-2">LOC: I-95 N, MM 112</p>
                        
                    </div>

                </div>

                 <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <p>In Transit to Regional Hub</p>
                        <p className="bg-blue-100 px-1">current</p>
                    </div>
                    <p className="flex"><LucideIcons.Clock className="w-3"/> 14:30 EST, Oct 15, 2023</p>
                    <p>Batch signed out by logistics carrier TransMed Global. GPS tracking active. Cold chain monitoring devices nominal</p>
                    <div className="flex gap-4">
                        <p className="bg-white border border-gray-300 px-2">VEH: TRK-992-A</p>
                        <p className="bg-white border border-gray-300 px-2">LOC: I-95 N, MM 112</p>
                        
                    </div>

                </div>
            </div>
        </div>


        </div>
        </div>
        </Container>
        </>
    )

}
export default LoteRastreabilidade