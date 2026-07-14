import Input from './componentes/Input';
import Botao from './Botao';
function LoteMedicamento() {
    return (
        <form  className='flex flex-col items-center' method='post'>
        <Input name="Nome do Medicamento">Nome do medicamento</Input>

        <Input name="Apresentacao" options={['Comprimido', 'Cápsula', 'Drágea', 'Ampola', 'Frasco-ampola', 'Xarope', 'Suspensão', 'Pomada', 'Gel', 'Spray']}>Apresentação</Input>
        
        <Input name="Fabricante">Fabricante</Input>
        <Input name="Lote">Lote</Input>
        <Input name="Data de validade">Data de validade</Input>



         <Botao></Botao>


</form>
    )
}
export default LoteMedicamento;