import Input from './componentes/Input';
import Botao from './componentes/Botao';
function LoteMedicamento() {
    
    
    return (
        <form  className='flex flex-col items-center' method='post'>
        <Input name="Nome do Medicamento" options={['Paracetamol 500 mg','Dipirona 500 mg','Ibuprofeno 600 mg','Amoxicilina 500 mg','Azitromicina 500 mg','Losartana Potássica 50 mg','Nebacetin®','Cataflam Emulgel®','Sorine Spray','Ambroxol Xarope']}>Nome do medicamento</Input>

        <Input name="Apresentacao" options={['Comprimido', 'Cápsula', 'Drágea', 'Ampola', 'Frasco-ampola', 'Xarope', 'Suspensão', 'Pomada', 'Gel', 'Spray']}>Apresentação</Input>
        
        <Input name="Fabricante" options={['EMS', 'Biolab','Medley','Teuto','Neo Química']}>Fabricante</Input>
        <Input name="Lote" options={['4H5210','3K1045','5A8762', ' BL240815A','24A5678',' BLA250301',' C123456',]}>Lote</Input>
        <Input type="date" name="Data de validade">Data de validade</Input>



         <Botao></Botao>


</form>
    )
}
export default LoteMedicamento;