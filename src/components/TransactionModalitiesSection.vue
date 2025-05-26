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
  background-image: url('@/assets/Exportação_FundoOndas.png');
  background-size: cover;
  background-position: center;
  padding: 4rem 1rem;
  font-family: 'Roboto', sans-serif;
  color: #333; /* Cor de texto padrão para a seção */
}

/* .container é definido globalmente em src/style.css */

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  /* margin-bottom: 1rem; /* Será tratado pelos estilos do card */
  text-align: center; /* Centralizado como na imagem */
  font-weight: 700; /* Negrito */
}

/* Estilos para o card dos textos introdutórios */
.transaction-modalities-section .container > .intro-text {
  background-color: #13e559; /* Fundo totalmente transparente */
  border-color: #000000; /* Cinza escuro sutil para a borda */
  border-style: solid;
  border-left-width: 1px;
  border-right-width: 1px;
  max-width: 680px; /* Largura do card */
  margin-left: auto;
  margin-right: auto;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.1); /* Sombra suave */
  padding-left: 2rem;
  padding-right: 2rem;
}

.transaction-modalities-section .container > .intro-text:first-of-type {
  border-top-width: 1px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 1.5rem;
  margin-bottom: 0; /* Remove margem para conectar com o próximo */
  border-bottom-width: 0; /* Remove a borda inferior para um visual contínuo */
}

.transaction-modalities-section .container > .intro-text:first-of-type + .intro-text {
  /* Este é o segundo parágrafo do card */
  border-bottom-width: 1px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom: 1.5rem;
  margin-top: 0; /* Remove margem superior para conectar com o anterior */
  border-top-width: 0; /* Remove a borda superior para um visual contínuo */
  margin-bottom: 3rem; /* Espaçamento antes das modalidades */
}

/* Remove o margin-bottom: 1rem geral do .intro-text se ele for parte do card */
.transaction-modalities-section .container > .intro-text.intro-text {
    margin-bottom: 0; /* Controlado pelo :first-of-type e :first-of-type + .intro-text */
}
/* Garante que o último parágrafo do card tenha a margem correta para as modalidades */
.transaction-modalities-section .container > .intro-text:first-of-type + .intro-text {
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

.flowchart { /* Estilo base para AMBOS os fluxogramas */
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 0.5rem; /* Movido para ser específico abaixo */
  margin-bottom: 1rem;
  position: relative;
  /* flex-wrap: wrap; /* Removido daqui para ser específico abaixo */
}

.flowchart:not(.individual-flowchart) { /* Específico para POR ADESÃO */
  flex-wrap: nowrap; /* Impede a quebra de linha */
  overflow-x: auto; /* Adiciona scroll horizontal se o conteúdo não couber */
  overflow-y: visible; /* Tenta permitir que a sombra vertical não seja cortada */
  padding-bottom: 20px; /* Aumentado para dar mais espaço para a sombra inferior */
  padding-left: 10px; /* Reduzido padding lateral */
  padding-right: 10px; /* Reduzido padding lateral */
  gap: 0.3rem; /* Reduzido o gap entre itens */
}
.flowchart:not(.individual-flowchart) .flow-item {
  flex-shrink: 1; /* Permite encolher */
  min-width: 100px; /* Reduzido o min-width para permitir mais encolhimento */
}
.flowchart:not(.individual-flowchart) .flow-arrow {
  flex-shrink: 0; /* Setas não devem encolher tanto */
  font-size: 2rem; /* Levemente menor para economizar espaço */
}


/* Estilos para o layout da transação individual */
.individual-flowchart {
  justify-content: flex-start; /* Alinhar o conteúdo à esquerda */
  flex-wrap: wrap; /* Mantém o wrap para o layout desktop complexo do individual */
  gap: 0.5rem; /* Gap original para este fluxograma */
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
  gap: 1rem; /* Espaço entre os dois paths (Estado e Contribuinte) */
  flex-grow: 1;
}

.flow-path {
  display: flex;
  align-items: center; /* Alinha itens e seta horizontalmente por padrão */
  gap: 0.5rem;
}

/* Estilos unificados para todas as setas (Base) */
.flow-arrow,
.diagonal-arrow-up,
.diagonal-arrow-down,
.diagonal-arrow-up-to-acordo,
.diagonal-arrow-down-to-acordo {
  font-size: 2.2rem; /* Default/Desktop size */
  color: black;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  position: relative; /* Para pseudo-elementos se necessário */
}

/* Estilos específicos para setas diagonais no desktop */
.diagonal-arrow-up, /* &#8599; ↙ */
.diagonal-arrow-down { /* &#8600; ↘ */
  padding: 0 0.5rem; /* Desktop */
}
.diagonal-arrow-up-to-acordo, /* &#8599; ↙ */
.diagonal-arrow-down-to-acordo { /* &#8600; ↘ */
  margin-left: 0.5rem; /* Desktop */
}

.acordo-button {
  align-self: center; /* Desktop */
  margin-left: 1rem; /* Desktop: para layout horizontal */
  position: relative; /* Para pseudo-elementos das setas de convergência no mobile */
}

.flow-item {
  padding: 0.8rem 1.5rem; /* Desktop padding */
  font-weight: 700;
  text-align: center;
  box-shadow: -10px 10px 0px #000000; /* Desktop shadow */
  font-size: 0.9rem; /* Desktop font size */
  line-height: 1.2;
  position: relative; /* Para pseudo-elementos de setas se necessário */
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


@media (max-width: 915px) {
  /* --- Ajustes Gerais para este Breakpoint --- */
  .modality-title {
    font-size: 1.4rem; /* Um pouco menor */
    text-align: center;
    justify-content: center !important; /* Força centralização */
    width: 100%;
    margin-bottom: 0.8rem;
  }
  .modality-align-right .modality-title {
    justify-content: center !important;
  }
  .modality-description {
    font-size: 0.85rem; /* Um pouco menor */
    text-align: center !important; /* Força centralização */
    margin-bottom: 1.5rem;
    max-width: 90%; /* Limita largura da descrição */
    margin-left: auto;
    margin-right: auto;
  }
  .flow-item { /* Estilo base para todos os itens de fluxo neste breakpoint */
    font-size: 0.8rem;
    padding: 0.5rem 0.9rem;
    box-shadow: -4px 4px 0px #000000;
    max-width: 280px; /* Limite para não esticar demais */
    width: auto;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }

  /* --- Fluxograma POR ADESÃO (Vertical Simples) --- */
  .flowchart:not(.individual-flowchart) {
    flex-direction: column;
    align-items: center;
    gap: 0.1rem; /* Espaço mínimo entre item e seta */
  }
  .flowchart:not(.individual-flowchart) .flow-item {
     margin-bottom: 0.1rem;
  }
  .flowchart:not(.individual-flowchart) .flow-arrow {
    font-size: 0; /* Esconde o caractere original &rarr; */
    height: 22px; width: 22px;
    margin: 0.2rem 0; /* Margem vertical pequena */
  }
  .flowchart:not(.individual-flowchart) .flow-arrow::before {
    content: "↓"; font-size: 1.8rem; color: black; font-weight: bold; line-height: 1;
    position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  }
  .flowchart:not(.individual-flowchart) .yellow-button {
    min-width: 180px; padding: 0.7rem 1rem; margin-top: 0.2rem;
  }

  /* --- Fluxograma POR TRANSAÇÃO INDIVIDUAL (Layout da Imagem) --- */
  .individual-flowchart {
     padding: 0 5px; /* Evita que cole nas bordas */
  }
  .individual-flow-layout {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza .quem-propoe, .flow-branch, .acordo-button */
    width: 100%;
    gap: 0px; /* Sem gap extra entre os blocos principais, o espaçamento virá das setas */
  }
  .quem-propoe {
    margin-bottom: 35px; /* Aumentado para mais espaço para as setas de bifurcação abaixo */
    /* max-width: 200px; /* Já coberto pelo .flow-item geral */
  }
  .quem-propoe::before, .quem-propoe::after { /* Setas de Bifurcação */
    position: absolute;
    bottom: -33px; /* Ajustado para descer mais as setas */
    font-size: 1.8rem; font-weight: bold; color: black;
  }
  .quem-propoe::before { /* Seta para Contribuinte (esquerda) ↙ */
    content: "↙"; left: 25%; /* Ajustado para colunas mais próximas */ transform: translateX(-50%);
  }
  .quem-propoe::after { /* Seta para Estado (direita) ↘ */
    content: "↘"; right: 25%; /* Ajustado para colunas mais próximas */ transform: translateX(50%);
  }

  .flow-branch {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Afasta as colunas Contribuinte e Estado */
    align-items: flex-start; /* Alinha o topo das colunas */
    width: 100%;
    max-width: 490px; /* Para simular visualização de ~510px */
    margin-left: auto; /* Centraliza o .flow-branch */
    margin-right: auto; /* Centraliza o .flow-branch */
    padding: 0 1%; /* Padding menor pois o container é mais estreito */
    box-sizing: border-box;
    margin-bottom: 25px; /* Espaço para as setas de convergência abaixo */
  }
  .individual-flow-layout .flow-path { /* Coluna Contribuinte ou Estado */
    flex-direction: column;
    align-items: center; /* Centraliza itens na coluna */
    flex-basis: 48%; /* Cada coluna ocupa quase metade */
    gap: 0.1rem; /* Espaço entre item e seta na coluna */
  }
  .individual-flow-layout .flow-path .flow-item {
    /* width: 100%; */ /* Removido para usar o max-width do .flow-item geral */
    width: auto; /* Para que o max-width funcione corretamente com padding */
    /* max-width é herdado de .flow-item (280px neste breakpoint) */
    margin-left: auto; /* Centraliza se for menor que a coluna do path */
    margin-right: auto; /* Centraliza se for menor que a coluna do path */
    margin-bottom: 0.1rem;
  }
  .individual-flow-layout .custom-blue-box {
    padding: 0.6rem 0.8rem;
    font-size: 0.75rem;
    /* clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); */ /* Removido para manter formato original */
    min-height: 40px; /* Para dar alguma altura */
    display: flex; align-items: center; justify-content: center; /* Centralizar texto */
    border-radius: 8px; /* Garantir o border-radius padrão dos flow-items */
  }
  .individual-flow-layout .flow-path > .flow-arrow { /* Setas verticais DENTRO das colunas */
    font-size: 0; /* Esconde o caractere original */
    height: 22px; width: 22px; margin: 0.2rem auto;
  }
  .individual-flow-layout .flow-path > .flow-arrow::before {
    content: "↓"; font-size: 1.8rem; color: black; font-weight: bold; line-height: 1;
    position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
  }
  /* Ocultar a última seta .flow-arrow dentro de cada .flow-path da transação individual,
     pois a convergência é feita pelas setas do .acordo-button */
  .individual-flow-layout .flow-path > .flow-item + .flow-arrow:last-of-type {
    display: none !important;
  }
  /* Se a estrutura for item -> seta -> item -> seta (e a última seta é a que queremos remover): */
  /* 
    .individual-flow-layout .flow-path > .flow-item:nth-last-child(2) + .flow-arrow {
       Este seletor pode ser mais específico se a última seta for sempre depois do penúltimo item.
       No entanto, a estrutura do HTML é [item, seta, item, seta, item, seta-diagonal].
       A seta a ser removida é a última .flow-arrow que NÃO é diagonal.
       O HTML do path do contribuinte é:
       <div class="flow-arrow diagonal-arrow-down">&#8600;</div>
       <div class="flow-item custom-blue-box">Contribuinte</div>
       <div class="flow-arrow">&rarr;</div>
       <div class="flow-item green-box">Acesse o protocolo virtual da PGE</div>
       <div class="flow-arrow">&rarr;</div>
       <div class="flow-item green-box">Propõe Negociação</div>
       <div class="flow-arrow">&rarr;</div> <--- ESTA É A SETA A SER REMOVIDA NO MOBILE
       A última seta diagonal já está oculta por '.diagonal-arrow-down { display: none !important; }'
    }
  */
   .individual-flow-layout .flow-path:nth-child(2) > .flow-item.green-box:last-of-type + .flow-arrow {
    /* Específico para o path do Contribuinte (segundo .flow-path)
       Oculta a seta que vem DEPOIS do último .flow-item.green-box */
    display: none !important;
  }
   /* Para o path do Estado, a última seta é uma diagonal, já oculta.
      Se houver uma .flow-arrow normal antes dela, e depois do último green-box,
      o seletor acima pode precisar de ajuste ou um similar para o primeiro .flow-path.
      No HTML do Estado: ... Sugere Proposta ... <div class="flow-arrow diagonal-arrow-down-to-acordo">
      Não há uma .flow-arrow normal no final do path do Estado.
   */


  /* Esconder TODAS as setas diagonais originais do HTML no mobile */
  .diagonal-arrow-up, .diagonal-arrow-down,
  .diagonal-arrow-up-to-acordo, .diagonal-arrow-down-to-acordo {
    display: none !important;
  }

  .acordo-button {
    margin-top: 10px; /* Ajustado pelo margin-bottom do flow-branch */
    min-width: 160px; padding: 0.7rem 1rem;
  }
  .acordo-button::before, .acordo-button::after { /* Setas de Convergência */
    position: absolute;
    top: -35px; /* Posiciona acima do "Acordo" */
    font-size: 1.8rem; font-weight: bold; color: black;
  }
  .acordo-button::before { /* Seta do Contribuinte (esquerda) para Acordo ↘ */
    content: "↘"; left: 25%; /* Ajustado para colunas mais próximas */ transform: translateX(-50%);
  }
  .acordo-button::after { /* Seta do Estado (direita) para Acordo ↙ */
    content: "↙"; right: 25%; /* Ajustado para colunas mais próximas */ transform: translateX(50%);
  }
}

/* Ajustes para telas ainda menores, herdando o layout de 915px */
@media (max-width: 500px) { /* Ajustando breakpoint para quando o flow-branch deve expandir */
  .individual-flow-layout .flow-branch {
    max-width: 100%; /* Permite que o flow-branch use mais largura */
    padding: 0 2%; /* Pode voltar ao padding original se necessário */
  }
   /* Reajustar posições das setas se o .flow-branch expandir */
  .quem-propoe::before { left: 30%;}
  .quem-propoe::after { right: 30%;}
  .acordo-button::before { left: 30%;}
  .acordo-button::after { right: 30%;}

  /* Os demais estilos de 480px podem ser movidos para cá ou mantidos separados */
}

@media (max-width: 480px) {
  .flow-item { /* Aplica-se a todos os flow-items */
    max-width: 90%;
    font-size: 0.75rem;
    padding: 0.4rem 0.7rem;
    box-shadow: -3px 3px 0px #000000;
  }
  .modality-title { font-size: 1.2rem; }
  .modality-description { font-size: 0.78rem; }
  
  .quem-propoe::before, .quem-propoe::after,
  .acordo-button::before, .acordo-button::after { font-size: 1.6rem; } /* Setas diagonais menores */
  
  .flowchart:not(.individual-flowchart) .flow-arrow::before,
  .individual-flow-layout .flow-path > .flow-arrow::before { font-size: 1.6rem; } /* Setas '↓' menores */

  .individual-flow-layout .custom-blue-box { font-size: 0.7rem; min-height: 35px; border-radius: 8px; } /* Garantir border-radius também aqui */
  
  .flowchart:not(.individual-flowchart) .yellow-button,
  .acordo-button { min-width: 140px; padding: 0.6rem 0.8rem; }
}
</style>