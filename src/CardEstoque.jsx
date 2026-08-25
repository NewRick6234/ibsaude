  export default function CardEstoque({ titulo, children }) {
       const [estoque, setEstoque] = useState("")
      
       return (
  <>
    <Titulo> Painel Administrativo </Titulo>
    <CardArea>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-stretch">
        <CardEstoque titulo="Estoque Geral (Itens)" />
        <CardEstoque titulo="Alertas Ativos" />
        <CardEstoque titulo="Total Investido" />
      </div>
    </CardArea>
  </>
);
       
       
     }