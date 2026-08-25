  export default function CardEstoque({ titulo, children }) {
       const [estoque, setEstoque] = useState("")
        const estilo = {
    borderRadius: '5px',
    backgroundColor: 'white',
    height: '60px',
    width: '12%',
    fontSize: '10pt',
    paddingTop: '10px',
    paddingLeft: '10px', 
    boxShadow: '6px 6px 5px 0px rgba(0,0,0,0.49)',
    justifyContent: 'flex-end',
        }
        return (
          <>
    <div className="card" style={estilo}>
      <div className="card-container">
        <h3>{titulo}</h3>
     
          {children}
          </div>
          </div>
        
         <Titulo> Painel Administrativo </Titulo>
          
        <CardArea>
         <div className="flex flex-col gap-5 items-center h-full">
         <CardEstoque titulo="Estoque Geral (Itens)"  />
         
         <CardEstoque titulo="Alertas Ativos" 
        />
         <CardEstoque titulo="Total Investido" 
        />
       </div>

       </CardArea>
      
    
       </>
       
       )
     }