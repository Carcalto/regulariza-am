<template>
  <section class="transaction-modalities-section">
    <div class="container">
      <p class="intro-text">
        O Regulariza Amazonas é um programa do Governo do Estado que concede melhores condições de negociação como descontos e parcelamentos.
      </p>
      <p class="intro-text">Há duas modalidades de transação:</p>

      <!-- Modalidade por Adesão -->
      <div class="modality">
        <h3 class="modality-title">
          <img src="@/assets/Exportação_IconeCheck.png" alt="Check" class="check-icon">
          POR ADESÃO:
        </h3>
        <p class="modality-description">
          A transação por adesão é regulada por edital próprio (lançado pela Procuradoria Geral do Estado do Amazonas), o qual irá prever os débitos passíveis de negociação e as condições oferecidas, como descontos, parcelamentos e garantias.
        </p>
        <div class="flowchart">
          <div class="flow-item green-box rounded-pill">Acesse o portal do <br>Regulariza Amazonas</div>
          <div class="flow-arrow">&rarr;</div>
          <div class="flow-item green-box rounded-pill">Consulte se seu débito está <br>incluído nos editais vigentes</div>
          <div class="flow-arrow">&rarr;</div>
          <div class="flow-item green-box rounded-pill">Escolha a forma <br>de pagamento</div>
          <div class="flow-arrow">&rarr;</div>
          <div class="flow-item green-box rounded-pill">Gere o boleto</div>
          <div class="flow-arrow">&rarr;</div>
          <div class="flow-item yellow-button">
            <img src="@/assets/Exportação_Icone Sorriso.png" alt="Ícone Sorriso" class="button-icon">
            EFETUE O <br>PAGAMENTO <br>E SE REGULARIZE!
          </div>
        </div>
      </div>

      <!-- Modalidade por Transação Individual -->
      <div class="modality modality-align-right">
        <h3 class="modality-title">
          <img src="@/assets/Exportação_IconeCheck.png" alt="Check" class="check-icon">
          POR TRANSAÇÃO INDIVIDUAL:
        </h3>
        <p class="modality-description">
          Modalidade voltada para contribuintes que possuam débitos mais altos ou situações especiais, como recuperação judicial.
        </p>
        <div class="flowchart individual-flowchart">
          <div class="individual-flow-layout">
            <div class="flow-item green-box rounded-pill quem-propoe">Quem propõe</div>
            
            <div class="flow-branch">
              <div class="flow-path">
                <div class="flow-arrow diagonal-arrow-up">&#8599;</div>
                <div class="flow-item custom-blue-box">Estado</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-item green-box">Entra em contato com a empresa</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-item green-box">Sugere Proposta para Negociação</div>
                <div class="flow-arrow diagonal-arrow-down-to-acordo">&#8600;</div>
              </div>
              
              <div class="flow-path">
                <div class="flow-arrow diagonal-arrow-down">&#8600;</div>
                <div class="flow-item custom-blue-box">Contribuinte</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-item green-box">Acesse o protocolo virtual da PGE</div>
                <div class="flow-arrow">&rarr;</div>
                <div class="flow-item green-box">Propõe Negociação</div>
                <div class="flow-arrow">&rarr;</div>
              </div>
            </div>
            <div class="flow-item yellow-button acordo-button">
              <img src="@/assets/Exportação_Icone Sorriso.png" alt="Ícone Sorriso" class="button-icon">
              ACORDO
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic will go here
</script>

<style scoped>
.transaction-modalities-section {
  background-image: url('../assets/Exportação_FundoOndas.png');
  background-size: cover;
  background-position: center;
  padding: 4rem 1rem;
  font-family: 'Roboto', sans-serif;
  color: #333; /* Cor de texto padrão para a seção */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: center; /* Centralizado como na imagem */
  font-weight: 700; /* Negrito */
}
.intro-text:last-of-type {
  margin-bottom: 3rem;
}

.modality {
  margin-bottom: 4rem;
}

/* Estilos para alinhamento à direita da segunda modalidade */
.modality-align-right .modality-title {
  justify-content: flex-end;
}
.modality-align-right .modality-description {
  text-align: right;
}

.modality-title {
  font-size: 1.8rem; /* Ajustar */
  font-weight: 700; /* Negrito */
  text-transform: uppercase;
  font-style: italic; /* Itálico */
  color: #333; /* Cor escura para o título */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.check-icon {
  width: 24px; /* Ajustar tamanho */
  height: 24px;
}

.modality-description {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: #333; /* Alterado para preto mais escuro */
  font-weight: 700; /* Negrito */
}

.flowchart {
  display: flex;
  flex-wrap: wrap; /* Permite que os itens quebrem linha */
  align-items: center;
  justify-content: center; /* Centraliza o fluxograma se ele for menor que o container */
  gap: 0.5rem; /* Espaço entre os itens e setas */
  margin-bottom: 1rem; /* Espaço antes do próximo elemento */
  position: relative; /* Para posicionamento absoluto das setas se necessário */
}

/* Estilos para o layout da transação individual */
.individual-flowchart {
  justify-content: flex-start; /* Alinhar o conteúdo à esquerda */
}

.individual-flow-layout {
  display: flex;
  /* align-items: flex-start; /* Alinhar "Quem propõe" com o topo dos branches */
  /* A linha acima foi comentada para tentar um alinhamento diferente com o botão ACORDO */
  align-items: center; /* Tentar centralizar verticalmente o grupo "Quem propõe" e o "flow-branch + acordo-button" */
  gap: 0.5rem; /* Reduzido para aproximar "Quem propõe" do branch */
  position: relative; /* Para posicionamento das setas convergentes */
}

.quem-propoe {
  /* Estilos específicos se necessário, já é um flow-item */
  align-self: center; /* Centralizar verticalmente em relação aos dois branches */
  margin-right: -1.2rem; /* Mantido, mas pode precisar de ajuste com margin-left */
  margin-left: 3.5rem; /* Aumentado para afastar da borda esquerda */
}

.flow-branch {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Reduzido para aproximar os paths para o botão ACORDO */
  flex-grow: 1; /* Para que o branch ocupe espaço e o botão acordo fique ao lado */
}

.flow-path {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Estilos unificados para todas as setas */
.flow-arrow,
.diagonal-arrow-up,
.diagonal-arrow-down,
.diagonal-arrow-up-to-acordo,
.diagonal-arrow-down-to-acordo {
  font-size: 2.2rem; /* Tamanho padronizado */
  color: black;
  font-weight: bold;
  line-height: 1; /* Para melhor alinhamento vertical */
}

/* Ajustes específicos para setas diagonais */
.diagonal-arrow-up,
.diagonal-arrow-down {
  padding: 0 0.5rem; /* Ajustado */
}

.diagonal-arrow-up-to-acordo,
.diagonal-arrow-down-to-acordo {
  /* Estilos para as setas que convergem para o ACORDO */
  /* Posicionamento absoluto pode ser necessário aqui para um bom alinhamento */
  /* Exemplo simples por enquanto: */
  margin-left: 0.5rem;
}

.acordo-button {
  /* Estilos para o botão ACORDO */
  /* Já usa .flow-item e .yellow-button */
  align-self: center; /* Tenta centralizar verticalmente com o .flow-branch */
  margin-left: 1rem; /* Aumentado para afastar mais para a direita */
  /* padding, font-size, gap agora são definidos em .yellow-button para consistência */
  /* Mantém apenas estilos de layout específicos para .acordo-button */
}


/* Remover .flow-row pois a estrutura mudou */
/* .flow-row { ... } */


.flow-item {
  padding: 0.8rem 1.5rem;
  font-weight: 700; /* Negrito */
  text-align: center;
  box-shadow: -10px 10px 0px #000000; /* Sombra sólida destacada e engrossada */
  font-size: 0.9rem;
  line-height: 1.2;
}

.green-box {
  background-color: #13e559;
  color: black;
  border-radius: 8px; /* Bordas levemente arredondadas por padrão */
}

.rounded-pill {
  border-radius: 50px !important; /* Totalmente arredondado */
}

.custom-blue-box {
  background-color: #1b509a;
  color: white;
  border-radius: 8px; /* Mesmo arredondamento dos green-box */
  /* Herda padding, font-weight, text-align, box-shadow, etc. de .flow-item */
}

/* .blue-hexagon { ... } foi removido/substituído por custom-blue-box */

.yellow-burst {
  background-color: #FFEB3B; /* Amarelo placeholder */
  color: black;
  border-radius: 8px; /* Ou forma de explosão se tivermos SVG/CSS mais complexo */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  /* Estilo para parecer uma explosão - simplificado por enquanto */
  border: 2px dotted #DAA520; /* Borda pontilhada/tracejada amarela escura */
  min-width: 180px;
  box-shadow: -4px 4px 0px #000000; /* Sombra sólida destacada */
}
.centered-burst {
  margin-top: 1rem; /* Espaço acima do burst de acordo */
  /* Para centralizar o burst de acordo, pode precisar de um wrapper ou ajuste no flex do .flowchart */
}

.yellow-icon-placeholder {
  width: 24px; /* Tamanho menor para o ícone */
  height: 24px; /* Tamanho menor para o ícone */
}

.flow-arrow {
  /* Estilos movidos para o bloco unificado acima */
}

.yellow-button {
  background-color: #eee30e;
  color: black; /* Dizeres negros */
  /* Herda box-shadow, font-weight, text-align de .flow-item */
  text-transform: uppercase; /* Dizeres uppercase */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; /* Restaurado/Padrão para botões amarelos */
  padding: 0.8rem 1.5rem; /* Restaurado/Padrão para botões amarelos */
  border-radius: 8px; /* Bordas arredondadas como outros flow-items */
  font-size: 0.9rem; /* Restaurado/Padrão para botões amarelos (herdado de .flow-item se não especificado aqui) */
}

.button-icon {
  width: 24px; /* Ajustar tamanho do ícone sorriso */
  height: 24px;
  object-fit: contain;
}


@media (max-width: 992px) { /* Ajustar breakpoint se necessário */
  .individual-flow-layout {
    flex-direction: column;
    align-items: center; /* Centralizar tudo quando empilhado */
  }
  .quem-propoe {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  .flow-branch {
    align-items: center; /* Centralizar os paths quando o branch está em coluna */
  }
  .flow-path {
     flex-wrap: wrap; /* Permitir que os itens do path quebrem linha */
     justify-content: center;
  }
  .diagonal-arrow-up,
  .diagonal-arrow-down {
    /* Esconder ou ajustar setas diagonais em telas menores */
    display: none; /* Simplesmente esconder por enquanto */
  }
}

@media (max-width: 768px) {
  .flowchart { /* Estilo geral para todos os flowcharts em mobile */
    flex-direction: column;
    align-items: stretch;
  }
  .flow-item { /* Estilo geral para todos os flow-items em mobile */
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .flow-arrow { /* Estilo geral para todas as flow-arrows em mobile */
    transform: rotate(90deg);
    margin: 0.5rem 0;
  }
  /* .blue-hexagon foi substituído por .custom-blue-box, que herda de .flow-item */
  .custom-blue-box {
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .full-width-mobile {
     /* Classe para itens que devem ocupar toda a largura no mobile, como "Quem propõe" */
  }
  /* Ajustes específicos para o individual-flow-layout em mobile, se necessário, além do geral */
  .individual-flow-layout .flow-path {
     flex-direction: column; /* Empilhar itens dentro de cada path também */
     align-items: stretch;
  }
  .individual-flow-layout .flow-arrow { /* Setas horizontais dentro dos paths */
    transform: rotate(90deg);
    margin: 0.5rem auto; /* Centralizar a seta */
  }
}
</style>