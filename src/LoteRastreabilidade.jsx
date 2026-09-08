import Input  from "./componentes/Input"
import Botao from "./componentes/Botao"
import Container from "./componentes/Container"
import { Link, Outlet } from 'react-router-dom'
import * as LucideIcons from 'lucide-react'
import House from "./imagens/house.webp"
import Strange from "./imagens/strange.jpg"

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
        <div className="border border-gray-300 w-full rounded-xl">
            <div className="flex flex-col justify-between w-full rounded-xl px-4">
            <p className="border-b border-gray-300 font-extrabold pt-4">Batch Details</p>
            <table>
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-300">
                        <td className="pt-4 text-gray-600">Product</td>
                        <td className="pt-4 text-right"><strong>Amoxicillin Trihydrate</strong></td>
                    </tr>
                     <tr className="border-b border-gray-300">
                        <td className="pt-4 text-gray-600">Quantity</td>
                        <td className="pt-4 text-right"><strong>15,000 Vials</strong></td>
                    </tr>
                     <tr className="border-b border-gray-300">
                        <td className="pt-4 text-gray-600">Production Date</td>
                        <td className="pt-4 text-right"><strong>Oct 12, 2023</strong></td>
                    </tr>
                     <tr className="border-b border-gray-300">
                        <td className="pt-4 text-gray-600">Expiry Date</td>
                        <td className="pt-4 text-right"><strong>Oct 12, 2025</strong></td>
                    </tr>
                     <tr>
                        <td className="py-4 border-gray-300 text-gray-600">Est. Value</td>
                        <td className=" text-right"><strong>$45,000.00 USD</strong></td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
         <div className="border border-gray-300 rounded-xl w-full">
            <div className="flex flex-col p-6 justify-baseline w-full">
            <p className="border-b border-gray-300 font-extrabold">Key Personnel</p>
                <div className="flex justify-baseline items-center w-full">
                    <div className="h-10 w-10 rounded-lg flex justify-center items-center">
                        <img className="h-full w-full" src={House} alt="Dr. House" />
                    </div>
                    <div className="p-4">
                        <p className="text-gray-600">Registed by</p>
                        <h3>Dr.House</h3>
                    </div>
                </div>

                <div className="flex justify-baseline items-center w-full">
                    <div className=" h-10 w-10 rounded-lg flex justify-center items-center">
                        <img src={Strange} alt="Dr. Strange" />
                    </div>
                    <div className="px-4">
                        <p className="text-gray-600">Registed by</p>
                        <h3>Dr.Strange</h3>
                    </div>
                </div>
             
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
            
            <div className="flex h-15 items-center justify-between w-full bg-blue-50 rounded-t-lg p-4">
                <div>
                    <h2 className="font-bold">Audit Timeline</h2>
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
                        <p className="font-bold text-blue-800">In Transit to Regional Hub</p>
                        <p className="bg-blue-100 px-1 font-bold text-gray-500 uppercase">current</p>
                    </div>
                    <div className="flex">
                        <LucideIcons.Clock className="w-3"/>
                        <p className="flex text-gray-600 px-2"> 14:30 EST, Oct 15, 2023</p>
                    </div>
                    
                    <p>Batch signed out by logistics carrier TransMed Global. GPS tracking active. Cold chain monitoring devices nominal</p>
                    <div className="flex gap-4">
                        <p className="bg-white border border-gray-300 text-gray-600 px-2">VEH: TRK-992-A</p>
                        <p className="bg-white border border-gray-300 text-gray-600 px-2">LOC: I-95 N, MM 112</p>
                        
                    </div>

                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <p className="font-bold">In Transit to Regional Hub</p>
                        
                    </div>
                    
                    <div className="flex">
                        <LucideIcons.Calendar className="w-3"/>
                        <p className="flex text-gray-600 px-2"> 09:15 EST, Oct 14, 2023 </p>
                    </div>
                    <p>Batch signed out by logistics carrier TransMed Global. GPS tracking active. Cold chain monitoring devices nominal</p>
                    <div className="flex text-blue-900 font-bold">
                         <LucideIcons.BadgeCheck className="w-5"/>
                         <p className="px-2">Certificate of Analysis Attached</p>
                        
                    </div>

                </div>

                 <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                        <p className="font-bold">Manufacturing Complete</p>
                        
                    </div>
                    <div className="flex">
                        <LucideIcons.Calendar className="w-3"/>
                        <p className="flex text-gray-600 px-2"> 09:15 EST, Oct 14, 2023 </p>
                    </div>
                    <p>Batch signed out by logistics carrier TransMed Global. GPS tracking active. Cold chain monitoring devices nominal</p>
                    <div className="flex gap-4">
                        <p className="bg-white border border-gray-300 text-gray-600 px-2">VEH: TRK-992-A</p>
                        <p className="bg-white border border-gray-300 text-gray-600 px-2">LOC: I-95 N, MM 112</p>
                        
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