function Botao({children}){

let botao = {
  backgroundColor: "#0480e6"
}

    return(
     
        <button style={botao} type="submit" className="flex w-full m-8 justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
      )

    }
export default Botao