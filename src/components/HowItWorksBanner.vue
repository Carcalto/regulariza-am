<template>
  <section id="como-funciona" class="how-it-works-banner">
    <div class="container">
      <h2 class="banner-text">COMO FUNCIONA O REGULARIZA AMAZONAS?</h2>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for this component
</script>

<style scoped>
.how-it-works-banner {
  background-image: url('@/assets/Exportação_FundoAzulOndas.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 1rem; /* Ajustar padding conforme necessário para altura do banner */
  text-align: center;
}

/* .container é definido globalmente em src/style.css */

.banner-text {
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-weight: 700; /* Bold */
  text-transform: uppercase;
  font-size: 2.25rem; /* Ajustar tamanho da fonte conforme a imagem modelo */
  line-height: 1.3;
}

/* Responsividade para o texto do banner */
@media (max-width: 992px) {
  .banner-text {
    font-size: 2rem;
  }
  .how-it-works-banner {
    padding: 2.5rem 1rem;
  }
}

@media (max-width: 768px) {
  .banner-text {
    font-size: 1.75rem;
  }
  .how-it-works-banner {
    padding: 2rem 1rem;
  }
}

@media (max-width: 480px) {
  .banner-text {
    font-size: 1.5rem;
  }
}
</style>