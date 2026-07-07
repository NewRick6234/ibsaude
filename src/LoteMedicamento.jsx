import Input from "../Input";
function LoteMedicamento() {
    return (
        <form style={fundo} className='flex flex-col items-center' method='post'>
        <Input name="Nome do Medicamento">Nome do medicamento</Input>

        <Input name="Apresentacao">Apresentação</Input>
        options={['Comprimido', 'Cápsula', 'Drágea', 'Ampola', 'Frasco-ampola', 'Xarope', 'Suspensão', 'Pomada', 'Gel', 'Spray']}
        <Input name="Fabricante">Fabricante</Input>
        <Input name="Lote">Lote</Input>
        <Input name="Data de validade">Data de validade</Input>



        


</form>
    )
}
export default LoteMedicamento;