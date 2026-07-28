function DistribuicaoUnidade(){

return(
<>
 <div className="flex justify-center">
        <div className="bg-blue-300 w-1/4 flex flex-col items-center">
         <img style={imagem} src="/ib_saude.png" className="w-1/4" />
        <p className="font-semibold">Bem vindo ao IBSaúde</p>  {/*descricao ou introducao */}

        <p>______________</p>

        <form className="flex flex-col items-center" style={form} method="post">
        
        {/* criar componente da área onde estará o label e o input */}

        <div style={campoForm}>    
        <label style={label}></label>
        <input style={inputar} type="text" id="nome" required/>
        </div>

    <div style={campoForm}>
        <label style={label}>Email</label>
        <input style={inputar} type="email" id="email"  required/>
    </div>
    

    <div style={campoForm}>   
        <label style={label}>Senha</label>
        <input style={inputar} type="password" id="password" required minlength="6"/>
    </div>

    <div style={campoForm}>  
    <label style={label}>Confirmar Senha</label>
    <input style={inputar} type="password" id="confirm-password" required minlength="6"/>
    </div> 
         <div style={campoForm}>    
        <label style={label}>Telefone (opcional)</label>
        <input style={inputar} type="tel" id="phone"/>
        </div>

        <button type="submit" style={botao}>Cadastrar</button>
        <div class="link" style={link}>
            <a href="#"><Link to="/login">Já tenho conta</Link></a> 
        </div>
        </form>
        </div>
        </div>

</>
)


}
export default DistribuicaoUnidade