function Login(){

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
         <img style={imagem} src="/ib_saude.png" className="w-1/4" />
        <p className="font-semibold">Bem vindo ao IBSaúde</p>  {/*descricao ou introducao */}

        <p>______________</p>

        <form className="flex flex-col items-center" style={form} method="post">
        
        {/* criar componente da área onde estará o label e o input */}


    <div style={campoForm}>
        <label style={label}>Email</label>
        <input style={inputar} type="email" id="email"  required/>
    </div>
    

    <div style={campoForm}>   
        <label style={label}>Senha</label>
        <input style={inputar} type="password" id="password" required minlength="6"/>
    </div>

        <button type="submit" style={botao}>Logar</button>
        <div class="link" style={link}>
            <a href="/cadastro">Criar conta</a>
        </div>
        </form>
        </div>
        </div>


)

}
export default Login;