import Input from './componentes/Input'
import Botao from './Botao'
import { useState, useEffect } from 'react'
let contador=0
function TelaDeRegistro(){
        const [tabela, setTabela]  = useState([])
        const [codigo, setCodigo] = useState('')
        const [nome, setNome] = useState('')
        const [tipo, setTipo] = useState('')
        const [classific, setClasse] = useState('Venda Livre')
        const [quantidade, setQuantidade] = useState(0)
        const [preco, setPreco] = useState(0)


        const [remedios, setRemedios] = useState([])
        useEffect(
        () => {
            async function buscarDados(){
                const resposta = await fetch('http://localhost:5173/remedios.json')
                const dados = await resposta.json()
                setRemedios(dados)
                console.log(dados.tipo)
            }     
            buscarDados()
        }
    , [])
         
        

        const acaoBotaoAdicionar = () => {
        
                let objeto =  {
                id: contador++,
                codigo: codigo,
                nome: nome,
                tipo:tipo,
                classe:classific,
                quantidade:quantidade,
                preco:preco
                }
    setTabela((prevTabela) => [...prevTabela, objeto]);
  }
        return(
        <>
        <div className='flex gap-4'>
         <div className='flex flex-col gap-5 items-center h-full'>
        <h1 className='text-3xlfont-bold tracking-tight text-gray-900 sm:text-3xl '>Registro da Compra:</h1>
        <form className='flex flex-col gap-4 items-center h-full' method='post'>


                <Input name="Data da Entrada:"
                        type="date"
                >
                </Input>
                <Input name="Fornecedor:"
                        
                >
                        
                </Input>

               
                
                <Input name="Numero da Nota Fiscal:"
                
                >
                </Input>
                <Input name="Anexação de documentos (PDF/XML):"
                        type="file"
                >
                </Input>
                <Input name="Nome do responsável pelo recebimento:"
                        
                >
                </Input>
                <Botao  onClick={acaoBotaoAdicionar}></Botao>
        
         
         
        </form>
        </div>
        <div className='w-full'>

        <table className="border-2 w-full">
        <thead>
          <tr className='border-2 h-10'>
                <th><Input name="Codigo interno e/ ou código oficial:" 
                        value={codigo}
                        onChange ={(e) => setCodigo(e.target.value)}

                /> 
                </th>
                <th> 
                <Input name="Nome do Medicamento:"
                        value={nome}
                        onChange={(e) => {
                        const novoNome = e.target.value;
                        setNome(novoNome);
                        // Chama a função passando o novo nome selecionado
                        const remedioEncontrado = remedios.find(r => r.nome === novoNome);
                        if (remedioEncontrado) {
                                setCodigo(remedioEncontrado.codigoInterno);
                                setTipo(remedioEncontrado.classificacao)
                        }
                        }}
                        options={remedios.map(r => r.nome)}
                        
                />
                </th>

                 
                 


                

                <th><Input name="Quantidade Adquirida:"
                        type="number"
                        value={quantidade}
                        onChange ={(e) => setQuantidade(e.target.value)}
                />
                </th>

                <th> <Input name="Valor Unitário:"
                        type="number"
                        value={preco}
                        onChange = { (e) => setPreco(e.target.value)}
                />
                </th>
                <th><p> Total: {quantidade * preco}</p></th>

          </tr>
        </thead>
        <tbody>
          {tabela.map(
            (linha) => (
              <tr className='border h-10' key={linha.id}>
                <td className='border text-center'>{linha.codigo}</td>
                <td className='border text-center'>{linha.nome}</td>
                <td className='border text-center'>{linha.tipo}</td>
                <td className='border text-center'>{linha.classific}</td>
                <td className='border text-center'>{linha.quantidade}</td>
                <td className='border text-center'>{linha.preco}</td>
                <td className='border text-center'><p> Total: {linha.quantidade * linha.preco}</p></td>
                 
              </tr>
                )
          )}

           
        </tbody>
      </table>


        </div>
        <div>
                <Botao  onClick={acaoBotaoAdicionar}></Botao>
        </div>
        </div>
        </>
    )
    
}
export default TelaDeRegistro