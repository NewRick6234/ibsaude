import Input from "./componentes/Input";
import Botao from "./componentes/Botao";
import Container from "./componentes/Container";
import { Link, Outlet } from 'react-router-dom';

function LoteRastreabilidade() {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-4">
          <h1>Lote Rastreabilidade</h1>

          <div className="flex min-w-5xl justify-between w-full border-b h-20 items-center">
            <h1>Amoxicillin 500mg - Standard Issue</h1>
            <div className="flex max-w-full gap-4 items-end">
              <Botao>Print</Botao>
              <Botao>Export Data</Botao>
            </div>
          </div>

          {/* Div principal */}
          <div className="flex gap-4">
            {/* Coluna da esquerda */}
            <div className="flex flex-col flex-1 gap-4">
              
              <div className="border rounded-xl p-4">
                <div className="flex flex-col items-center rounded-xl">
                  <p className="border-b w-full text-center pb-2 font-semibold">Batch Details</p>
                  <table className="w-full text-left">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-2">Product</td>
                        <td className="py-2 px-2">Amoxicillin Trihydrate</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-2">Product</td>
                        <td className="py-2 px-2">Amoxicillin Trihydrate</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-2">Product</td>
                        <td className="py-2 px-2">Amoxicillin Trihydrate</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-2">Product</td>
                        <td className="py-2 px-2">Amoxicillin Trihydrate</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">Product</td>
                        <td className="py-2 px-2">Amoxicillin Trihydrate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <p className="font-semibold mb-2">Batch Details</p>
                  <table className="w-full text-left">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-2">Product</td>
                        <td className="py-2 px-2">Amoxicillin Trihydrate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border rounded-xl p-4">
                <div className="flex flex-col items-center">
                  <p className="font-semibold mb-2">Batch Details</p>
                  <table className="w-full text-left">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-2">Product</td>
                        <td className="py-2 px-2">Amoxicillin Trihydrate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Coluna da direita (Audit Timeline) */}
            <div className="flex flex-2 flex-col border rounded-lg overflow-hidden h-fit">
              {/* Cabeçalho com fundo azul e padding lateral/vertical */}
              <div className="flex items-center justify-between w-full bg-blue-50 px-4 py-3">
                <h2>Audit Timeline</h2>
                <div>
                  <Botao>filtro</Botao>
                </div>
              </div>

              {/* Corpo inferior com padding */}
              <div className="p-4">
                <div>asdf</div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </>
  );
}

export default LoteRastreabilidade;