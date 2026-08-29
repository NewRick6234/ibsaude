import Botao from './componentes/Botao'

function Titulo({children, style}){


    let h1 = {
        color:'black',
        backgroundColor: '#e0f2fe',
        fontSize: '32pt',
        textAlign: 'center',
        paddingTop: '10px',
        paddingBottom: '30px'
    }

    let alinharBotao = {
       position: 'absolute',
       top: '35px',
       right: '20px',
       backgroundColor: "#0480e6"
    }

    return (
        <>
            <div style={{position: 'relative', zIndex: 1}} >
                <button   className=" rounded-md px-3 py-1.5 text-sm/6 font-semibold 
                     text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2
                      focus-visible:outline-indigo-600" style={alinharBotao}>Imprimir</button>
        
                
                <h1 
                    style={{...h1, ...style}}
                    >
                    {children}

                </h1>
        </div>
            
        </>
    )
}


export default Titulo

   
    