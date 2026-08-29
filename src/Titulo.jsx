function Titulo({children}){


    let h1 = {
        color:'black',
        
        fontSize: '16pt',
        textAlign: 'center',
        paddingTop: '10px',
        paddingBottom: '30px'
    }


    return (
        <h1 
            style={h1} 
        >
            {children}
        </h1>
    )
}


export default Titulo

   
    