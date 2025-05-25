<template>
  <section class="cta-section">
    <div class="container cta-content">
      <h2 class="cta-title">ESTÁ PRONTO PARA REGULARIZAR?</h2>
      <button class="cta-button">QUERO REGULARIZAR!</button>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for this component
</script>

<style scoped>
.cta-section {
  background-image: url('@/assets/Exportação_FundoAzulOndas.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 1rem; /* Ajustar padding para altura desejada */
  text-align: center;
}

.container.cta-content {
  max-width: 800px; /* Limitar largura do conteúdo para melhor leitura */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem; /* Espaço entre o título e o botão */
}

.cta-title {
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-weight: 700; /* Negrito */
  text-transform: uppercase;
  font-size: 2.5rem; /* Ajustar conforme a imagem modelo */
  line-height: 1.3;
}

.cta-button {
  font-family: 'Montserrat', sans-serif;
  background-color: #13e559; /* Verde dos botões do fluxograma */
  color: white;
  font-weight: 700; /* Negrito */
  text-transform: uppercase;
  font-size: 1.25rem; /* Ajustar conforme a imagem modelo */
  padding: 1rem 2.5rem; /* Padding generoso para um botão de CTA */
  border: none;
  border-radius: 50px; /* Forma de pílula */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2); /* Sombra suave */
}

.cta-button:hover {
  background-color: #10c04f; /* Verde um pouco mais escuro no hover */
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 768px) {
  .cta-title {
    font-size: 2rem;
  }
  .cta-button {
    font-size: 1.1rem;
    padding: 0.8rem 2rem;
  }
  .cta-section {
    padding: 3rem 1rem;
  }
}

@media (max-width: 480px) {
  .cta-title {
    font-size: 1.75rem;
  }
  .cta-button {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>