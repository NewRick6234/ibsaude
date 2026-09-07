import Input  from "./componentes/Input"
import Botao from "./componentes/Botao"
import Container from "./componentes/Container"
import { Link, Outlet } from 'react-router-dom'

function LoteRastreabilidade(){

   
    return(
        <> 
        <Container>
        <div className="flex flex-col gap-4">    
        <h1>Lote Rastreabilidade</h1>
        <div className="flex min-w-5xl justify-between w-full border-b-1 h-20 items-center">
            <h1>Amoxicillin 500mg - Standard Issue</h1>
            <div className="flex max-w-full gap-4 items-end">
                <Botao>Print</Botao>
                <Botao>Export Data</Botao>
            </div>
        </div>
        --div principal
        <div className="flex gap-4">
        <div className="flex flex-col flex-1 gap-4">
        <div className="border">
            <div className="flex flex-col items-center">
            <p className="border-b-1">Batch Details</p>
            <table>
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-1">
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                     <tr className="border-b-1">
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                     <tr className="border-b-1">
                        <td>Product</td>
                        <td>Amoxicillin Trihydrate</td>
                    </tr>
                     <tr className="border-b-1">
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
         <div className="border ">
            <div>
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
        <div className="border">
            <div>
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

        <div className="flex flex-2 flex-col border">
            <div className="flex justify-between w-full bg-amber-300">
                <div>
                    <h2>Audit Timeline</h2>
                </div>
                <div>
                    <Botao>filtro</Botao>
                </div>
            </div>
            <div>
                <div>asdf</div>
            </div>
        </div>


        </div>
        </div>
        </Container>
        </>
    )

}
export default LoteRastreabilidade