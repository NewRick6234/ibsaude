import Input from './componentes/Input'
import Botao from './componentes/Botao'
import { useState, useEffect,useMemo } from 'react'
import imagem from './imagens/att.png'
let contador=0

function TelaDeRegistro(){
        const [tabela, setTabela]  = useState([])
        const [codigo, setCodigo] = useState('')
        const [nome, setNome] = useState('')
        const [tipo, setTipo] = useState('')
        const [classific, setClasse] = useState('Venda Livre')
        const [quantidade, setQuantidade] = useState(0)
        const [preco, setPreco] = useState(0)

        const total= useMemo(
                () => tabela.reduce(
                        (accu , item) => accu +item.quantidade*item.preco, 0
                        )
        )
        
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
        <div className='max-w-6xl w-full flex flex-col gap-4 items-center'>
                <div className=' w-full flex items-center justify-center'>
                        <h1 className=''><strong>Registro de Compra</strong></h1>
                </div>
                 
                <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
                <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                                <Input name="Data da Entrada:"
                                type="date">
                        </Input>
                        
                </div>
                <div className='bg-surface-container-lowest border border-outline-variant p-4 rounded-lg'>
                        <Input>
                                Fornecedor:
                                
                        </Input>
                        <Input>
                                CNPJ:
                                
                        </Input>
                </div>
                        <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                        <Input>
                                Numero da Nota Fiscal:
                        </Input>
                </div>
                <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg">
                        <Input>
                                Nome do responsável pelo recebimento:
                        </Input>
                </div>
                </div>
                <div className='w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-6 mb-8 flex items-center justify-between gap-110'>
                    <div className='h-30 w-100 flex items-center gap-3'>
                        <div className='p-4'>
                            <img className='h-20 p-2' src={imagem} alt="imagem" />
                        </div>
                        <div>
                            <h1 className='text-sm'><strong>Anexos(PDF/XML)</strong></h1>
                            <p className='text-sm'>NFE_000987654_PharmaCorp.pdf,<br /> XML_NFE_000987654.xml</p>
                        </div>
                    </div>
                    <div>
                        <a className='p-4' href="">Visualizar arquivo</a>
                    </div>
                </div>              

                <div className='w-full flex'>
                        <Botao  onClick={acaoBotaoAdicionar}>Adicionar</Botao>
                </div>
                <div className='flex gap-4'>
         
                
        
                        <div className='w-full flex flex-col items-center'>

                                <table className="gap-2 w-full">
                                <thead>
                                <tr className='border-2 h-20'>
                                        <th><Input 
                                                value={codigo}
                                                onChange ={(e) => setCodigo(e.target.value)}

                                        >Codigo interno e/ ou código oficial:</Input> 
                                        </th>

                                        <th> 
                                        <Input
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
                                                
                                        >Nome do Medicamento:</Input>
                                        </th>

                                        <th><Input
                                                value={tipo}
                                                onChange ={(e) => setTipo(e.target.value)}

                                        >Uso:</Input> 
                                        </th>

                                        
                                        


                                        

                                        <th><Input
                                                type="number"
                                                value={quantidade}
                                                onChange ={(e) => setQuantidade(e.target.value)}
                                        >Quantidade Adquirida:</Input>
                                        </th>

                                        <th> <Input
                                                type="number"
                                                value={preco}
                                                onChange = { (e) => setPreco(e.target.value)}
                                        >Valor Unitário:</Input>
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
                                        <td className='border text-center'>{linha.quantidade}</td>
                                        <td className='border text-center'>{linha.preco}</td>
                                        <td className='border text-center'><p> Total: {linha.quantidade * linha.preco}</p></td>
                                        
                                </tr>
                                        )
                                )}
                                <tr className='border'>  
                                        <td className='text-center'><p></p></td>
                                        <td className='text-center'><p></p></td>
                                        <td className='text-center'><p></p></td>
                                        <td className='text-center'><p></p></td>
                                        <td className='border text-center'><p> Total Geral:</p></td>
                                        <td className='border text-center'><p> 
                                                {total}
                                                </p></td>
                                </tr>

                                
                                </tbody>
                        </table>

                                <Botao>Enviar Nota</Botao>
                        </div>
                        
                
                </div>
        
        </div>
        </>
    )
    
}
export default TelaDeRegistro