import { useState } from 'react';
import Input from './componentes/Input';
import Botao from './componentes/Botao';

function CadastroMedicamento() {
  const [nome, setNome] = useState('');
  const [classificacao, setClassificacao] = useState('Venda Livre');
  const [codigo, setCodigo] = useState('');
  const [uso, setUso] = useState('');

  const [listaRemedios, setListaRemedios] = useState([]);
  
  // Lista de opções da classificação (pode ser expandida dinamicamente)
  const [opcoesClassificacao, setOpcoesClassificacao] = useState([
    'Venda Livre',
    'Antibiótico',
    'Controlado (Receita Especial)',
    'Uso Hospitalar'
  ]);

  // Função para preencher todos os campos
  const preencherCampos = (remedio) => {
    setNome(remedio.nomeProduto);
    setCodigo(remedio.codigoRegistro || '');
    setUso(remedio.principioAtivo || '');

    const tipoAnvisa = remedio.tipo?.toUpperCase() || '';

    // Mapeamento das respostas da ANVISA para as suas opções
    let novaClassificacao = 'Venda Livre';

    if (tipoAnvisa.includes('CONTROLADO')) {
      novaClassificacao = 'Controlado (Receita Especial)';
    } else if (tipoAnvisa.includes('HOSPITALAR')) {
      novaClassificacao = 'Uso Hospitalar';
    } else if (tipoAnvisa.includes('ANTIBIOTICO') || tipoAnvisa.includes('ANTIMICROBIANO')) {
      novaClassificacao = 'Antibiótico';
    } else if (remedio.tipo && remedio.tipo !== 'N/A') {
      // Se for uma categoria da ANVISA como "MEDICAMENTO SIMILAR" ou "GENÉRICO",
      // adiciona a opção ao dropdown para não quebrar a seleção no HTML
      novaClassificacao = remedio.tipo;
      if (!opcoesClassificacao.includes(remedio.tipo)) {
        setOpcoesClassificacao((prev) => [...prev, remedio.tipo]);
      }
    }

    setClassificacao(novaClassificacao);
  };

  const handleNomeChange = async (e) => {
    const valorDigitado = e.target.value;
    setNome(valorDigitado);

    if (valorDigitado.trim().length >= 3) {
      try {
        const response = await fetch(`http://localhost:3000/api/medicamentos/buscar?nome=${encodeURIComponent(valorDigitado)}`);
        const data = await response.json();

        if (data.medicamentos && data.medicamentos.length > 0) {
          setListaRemedios(data.medicamentos);

          const remedioEncontrado = data.medicamentos.find(
            (r) => r.nomeProduto.toLowerCase() === valorDigitado.toLowerCase()
          );

          if (remedioEncontrado) {
            preencherCampos(remedioEncontrado);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar medicamento:', error);
      }
    } else {
      setListaRemedios([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !codigo) {
      alert('Preencha pelo menos o Nome e o Código.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, classificacao, codigo, uso }),
      });

      if (response.ok) {
        alert('Medicamento cadastrado com sucesso!');
        setNome('');
        setCodigo('');
        setUso('');
        setClassificacao('Venda Livre');
        setListaRemedios([]);
      } else {
        const data = await response.json();
        alert(`Erro: ${data.erro}`);
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Falha na comunicação com o servidor.');
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center w-full h-full">
      <h1 className="text-3xl font-bold tracking-tight text-black sm:text-3xl">
        Cadastro de Medicamentos
      </h1>

      <form className="flex flex-col gap-4 items-center h-full" onSubmit={handleSubmit}>
        <Input
          name="nome"
          isAutocomplete={true}
          value={nome}
          onChange={handleNomeChange}
          options={listaRemedios.map((r) => r.nomeProduto)}
        >
          Nome do Medicamento
        </Input>

        <Input
          name="classificacao"
          value={classificacao}
          onChange={(e) => setClassificacao(e.target.value)}
          options={opcoesClassificacao}
        >
          Classificação
        </Input>

        <Input
          name="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        >
          Código interno e/ou Código oficial
        </Input>

        <Input
          name="uso"
          value={uso}
          onChange={(e) => setUso(e.target.value)}
        >
          Uso Específico
        </Input>

        <Botao type="submit" onClick={handleSubmit}>Enviar</Botao>
      </form>
    </div>
  );
}

export default CadastroMedicamento;