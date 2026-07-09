function Botao({children,...props}){

    return(
        
        <button {...props} type="button" className="flex w-full m-8 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
      )

    }
export default Botao