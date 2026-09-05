import { useState } from "react"
import Botao from "./componentes/Botao"
import Input from "./componentes/Input"
import Container from "./componentes/container"
import imagens from "./imagens/ib_saude.png"


function CadastroUnidadeSaude(){


    const[nomeSaude, setNomeSaude] = useState('')
    const [codigo, setCodigo] = useState('')
    const [endereco, setEndereco] = useState('')
    const [contato, setContato] = useState('')
    const [email, setEmail] = useState('') 
    const [telefone, setTelefone] = useState(0)
  
 let form = {
        marginTop: "20px"
    }
    
    let link = {
        marginTop: "10px",
        marginBottom: "10px",
        color: "red"
    }

    let botao = {
        border: "1px solid black",
        backgroundColor: "rgba(229, 231, 235)"
    }

    let inputar = {
        border: "1px solid black",
        backgroundColor: "white",
        height: "20px"
    }

    let campoForm = {
        marginTop: "10px",
        marginBottom: "10px"
    }

    let label = {
        marginRight: "5px"
    }
    
    let imagem = {
        marginTop: "5px"
     }

    return(
        <Container>
       <div className='flex flex-col gap-5 items-center h-full w-full' border="1" cellPadding="8" cellSpacing="0"> 
        
        <h1 className="font-semibold sm:text-3xl">Cadastro de Unidade de Saúde</h1>  {/*descricao ou introducao */}

        

        <form className="flex flex-col items-center gap-4 h-full" style={form} method="post">
        
        {/* criar componente da área onde estará o label e o input */}

        <Input name="Nome da Unidade:"
                >Nome da Unidade

                </Input>
                <Input name="Codigo:">
                 Código
                </Input>

               
                
                <Input name="Endereco:" >
                Endereço                      
                </Input>
               
                
                <Input name="Contato/responsavel:">
                    Contato/responsável
                </Input>

                <Input name="email" type="email">
                E-mail
                </Input>

                <Botao>Cadastrar</Botao>
        
         
        </form>
       </div>
       </Container>
    )

}
export default CadastroUnidadeSaude