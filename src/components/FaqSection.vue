<template>
  <section id="duvidas" class="faq-section">
    <div class="container">
      <h2 class="section-title">DÚVIDAS FREQUENTES</h2>
      <div class="info-card">
        <h3 class="info-card-title">Quais dívidas posso negociar no programa?</h3>
        <p class="info-card-text">Todos os débitos estaduais, sejam eles de natureza tributária (IPVA, ICMS, ITCMD, taxas, etc.) ou não tributária (multas administrativas e demais débitos estaduais, conforme edital.)</p>
      </div>
      <div class="faq-list">
        <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
          <button class="faq-question" @click="toggleItem(index)" :aria-expanded="item.open.toString()">
            <span>{{ item.question }}</span>
            <span class="faq-icon">{{ item.open ? '-' : '+' }}</span>
          </button>
          <div v-show="item.open" class="faq-answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const faqItems = ref([
  { question: 'Tenho uma empresa em recuperação judicial. Posso participar?', open: false },
  { question: 'Se eu pagar à vista, tenho mais desconto?', open: false },
  { question: 'Como sei se meu débitos estão dentro das regras?', open: false },
  { question: 'Se eu parcelar, perco algum desconto?', open: false },
  { question: 'Preciso de advogado ou contador pra participar?', open: false },
  { question: 'Preciso oferecer algum bem de garantia?', open: false },
  { question: 'Posso negociar tudo online ou preciso ir até a PGE ou SEFAZ?', open: false },
  { question: 'O que acontece se eu atrasar uma parcela? Perco os benefícios?', open: false },
  { question: 'Preciso fazer algum cadastro antes de começar?', open: false },
  { question: 'Como são calculados os descontos de juros e multas?', open: false },
  { question: 'Quanto preciso pagar de entrada pra fechar o acordo?', open: false },
  { question: 'O Programa tem data para acabar? Até quando posso aderir?', open: false },
]);

const toggleItem = (selectedIndex: number) => {
  const currentlyOpen = faqItems.value[selectedIndex].open;
  // Fecha todos os itens primeiro
  faqItems.value.forEach(item => {
    item.open = false;
  });
  // Se o item clicado não estava aberto, abre-o
  if (!currentlyOpen) {
    faqItems.value[selectedIndex].open = true;
  }
};
</script>

<style scoped>
.faq-section {
  background-image: url('../assets/Exportação_FundoOndas.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 1rem;
  font-family: 'Montserrat', sans-serif;
  color: #333333; /* Cor padrão do texto, mas a maioria dos elementos internos define a sua */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.container {
  max-width: 1000px; /* Aumentada a largura máxima do container */
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  color: #13e559; /* Verde especificado */
  font-weight: 700; /* Negrito */
  text-transform: uppercase;
  font-size: 2.5rem; /* Ajustar conforme necessário */
  text-align: center;
  margin-bottom: 1rem;
}

.info-card {
  background-color: #1b509a;
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  margin-bottom: 2.5rem; /* Espaço antes da lista de FAQ */
  text-align: left;
}

.info-card-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700; /* Negrito */
  font-size: 1.4rem; /* Ajustar conforme imagem */
  margin-bottom: 0.75rem;
}

.info-card-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400; /* Regular */
  font-size: 1rem; /* Ajustar conforme imagem */
  line-height: 1.6;
}

.faq-list {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas */
  gap: 1.5rem; /* Espaçamento entre os itens do FAQ */
  align-items: start; /* Reintroduzido para impedir que itens estiquem */
}

.faq-item {
  background-color: #1b509a; /* Mesmo fundo azul do info-card */
  border-radius: 8px;
  border: none; /* Removida a borda clara, pois o fundo é escuro */
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: transparent;
  border: none;
  color: white; /* Cor da pergunta alterada para branca */
  font-family: 'Montserrat', sans-serif;
  font-weight: 700; /* Negrito */
  font-size: 1.1rem; /* Ajustar */
  text-align: left;
  cursor: pointer;
  border-radius: 8px; /* Para que o foco/hover cubra bem */
  min-height: 4rem; /* Altura mínima para perguntas fechadas, ajustar conforme necessário */
}

.faq-question:hover,
.faq-question:focus {
  background-color: rgba(255, 255, 255, 0.1); /* Hover/focus sutil em fundo azul */
}

.faq-icon { /* Ícone +/- */
  font-size: 1.5rem;
  font-weight: 700;
  color: white; /* Cor do ícone alterada para branca */
}

.faq-answer {
  padding: 0 1.5rem 1.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400; /* Peso regular para respostas */
  color: rgba(255, 255, 255, 0.9); /* Cor da resposta (branco suave) */
}

.faq-answer p {
  margin: 0;
}

@media (max-width: 768px) { /* Ajustado para 768px para melhor responsividade */
  .faq-list {
    grid-template-columns: 1fr; /* Uma coluna em telas menores */
  }
}
</style>