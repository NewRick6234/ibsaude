import Input from "../Input"
import Botao from "./Botao"
import imagens from "./imagens/ib_saude.png"
function CadastroUnidadeSaude(){

    let lista = ["1","2"]
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
       <div className="flex justify-center">
        <div className="bg-blue-300 w-1/4 flex flex-col items-center">
         <img style={imagem} src={imagens} className="w-1/4" />
        <p className="font-semibold">Bem vindo ao IBSaúde</p>  {/*descricao ou introducao */}

        <p>______________</p>

        <form className="flex flex-col items-center" style={form} method="post">
        
        {/* criar componente da área onde estará o label e o input */}

        <Input name="Nome da Unidade:"
                >Nome da Unidade

                </Input>
                <Input name="Código:">
                 Código
                </Input>

               
                
                <Input name="Endereço:"                         options={['Comprimido', 'Cápsula', 'Drágea', 'Ampola', 'Frasco-ampola', 'Xarope', 'Suspensão', 'Pomada', 'Gel', 'Spray']}
>
                    Endereço
                </Input>
               
                
                <Input name="Contato/responsável:">
                    Contato/responsavel
                </Input>

                <Input name="tele" options={lista}>
                tele
                </Input>

                <Botao></Botao>
        
        <div className="link" style={link}>
             <a href="#">Já tenho conta</a>
        </div>
        </form>
        </div>
        </div>
    )

}
export default CadastroUnidadeSaude