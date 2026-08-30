function Botao({children,type="submit",className = "", style, ...props}){

let botaoDefaultStyle = {
  backgroundColor: "#0480e6"
}
const classesCombinadas = `flex min-w-30 justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`.trim();
    return(
     
        <button
          type={type}
          style={{ ...botaoDefaultStyle, ...style }}  
          className={classesCombinadas}
          {...props} // Eventos como onClick e propriedades como disabled passam aqui safely
    >
      {children}
    </button>
      )

    }
export default Botao