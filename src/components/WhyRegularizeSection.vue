<template>
  <section id="porque-regularizar" class="why-regularize-section">
    <div class="container">
      <h2 class="section-title">PORQUE REGULARIZAR?</h2>
      <div class="title-underline"></div>
      <div class="cards-container">
        <div class="card card-desburocratizacao">
          <img src="@/assets/Exportação_Icone dinheiro.png" alt="Ícone Desburocratização" class="card-icon">
          <h3 class="card-title">DESBUROCRATIZAÇÃO</h3>
          <p class="card-text">Processo on-line, rápido e seguro para você facilitar sua negociação e quitar dívidas!</p>
        </div>
        <div class="card card-parcelamento">
          <img src="@/assets/Exportação_IconeCartao.png" alt="Ícone Parcelamento" class="card-icon">
          <h3 class="card-title">PARCELAMENTO</h3>
          <p class="card-text">Possibilidade de parcelar em até 120x (empresas em recuperação judicial) ou 84x (MPE).</p>
        </div>
        <div class="card card-descontos">
          <img src="@/assets/Exportação_IconePorcentagem.png" alt="Ícone Descontos" class="card-icon">
          <h3 class="card-title">DESCONTOS</h3>
          <p class="card-text">Descontos progressivos de até 65% no valor da multa e isenção de juros SELIC, aplicado apenas correção monetária pelo IPCA.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for this component yet
</script>

<style scoped>
.why-regularize-section {
  background-color: #f0f4f8; /* Cor de fundo da seção, similar ao body do style.css */
  padding: 4rem 1rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Estilos do título principal e sublinhado (adaptado de ParticipationSection) */
.section-title {
  font-family: 'Montserrat', sans-serif; /* Especificado pelo usuário */
  font-weight: 700; /* Bold, como ParticipationSection */
  color: #1865a7; /* Azul, como ParticipationSection */
  font-size: 2.75rem; /* Como ParticipationSection */
  margin-bottom: -0.5rem;
  text-transform: uppercase; /* Como ParticipationSection */
}

.title-underline {
  width: 250px; /* Mesmo tamanho de ParticipationSection */
  height: 10px;   /* Mesmo tamanho de ParticipationSection */
  background-color: #FFEB3B; /* Amarelo, conforme especificado */
  margin: 0 auto 2.5rem auto;
  border-radius: 2px;
}

.cards-container {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap; /* Para responsividade */
}

.card {
  background-color: #1865a7; /* Cor de fundo padrão, será sobrescrita */
  color: white; /* Cor de texto padrão para cards com fundo escuro */
  padding: 1rem;
  border-radius: 15px;
  width: calc(33.333% - 2rem);
  min-width: 280px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhar conteúdo (ícone, título, texto) à esquerda */
  text-align: left; /* Alinhar texto à esquerda */
}

.card-icon {
  width: 80px; /* Tamanho inicial para os ícones amarelos */
  height: 80px;
  object-fit: contain;
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.5rem; /* Ajustar conforme necessário */
  font-weight: 700; /* Negrito */
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1.3rem; /* Ajustar conforme necessário */
  line-height: 1.6;
  font-weight: 400; /* Peso regular */
}

/* Estilos específicos para cada card */
.card-desburocratizacao,
.card-descontos {
  background-color: #1b509a;
  /* color: white; é herdado de .card */
}

.card-parcelamento {
  background-color: #ffffff;
  border: 3px solid #1b509a;
  color: #1b509a; /* Textos dentro deste card serão azuis */
}

/* Ajustar a cor do título e texto especificamente para o card de parcelamento se necessário */
.card-parcelamento .card-title,
.card-parcelamento .card-text {
  color: #1b509a;
}

/* Responsividade para os cards */
@media (max-width: 992px) {
  .card {
    width: calc(50% - 1.5rem); /* 2 cards por linha */
  }
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 80%;
    max-width: 400px; /* Limite para cards empilhados */
  }
  .section-title {
    font-size: 1.75rem;
  }
  .title-underline {
    width: 150px;
  }
}
</style>