<template>
  <section id="participar" class="participation-section">
    <div class="container">
      <h2 class="section-title">QUEM PODE PARTICIPAR?</h2>
      <div class="title-underline"></div>
      <div class="content-wrapper">
        <img src="@/assets/Exportação_IconePJ.png" alt="Ícone Pessoa Física" class="icon icon-left">
        <p class="description-text">
          Qualquer pessoa física ou jurídica que possua débito com o Estado, 
          independente do porte ou valor do débito.
        </p>
        <img src="@/assets/Exportação_IconePF.png" alt="Ícone Pessoa Jurídica" class="icon icon-right">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for this component
</script>

<style scoped>
.participation-section {
  background-color: #ffffff;
  padding: 4rem 1rem;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900; /* Bold */
  color: #1865a7;
  font-size: 2.75rem; /* Adjust size as needed */
  margin-bottom: -0.5rem;
  text-transform: uppercase;
}

.title-underline {
  width: 250px; /* Adjust width as needed */
  height: 10px;   /* Adjust height as needed */
  background-color: #13e559;
  margin: 0 auto 2.5rem auto; /* Center the underline and add bottom margin */
  border-radius: 2px;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem; /* Space between icons and text */
}

.icon {
  width: 130px;  /* Definir largura fixa */
  height: 130px; /* Definir altura fixa */
  object-fit: contain; /* Ajustar imagem dentro das dimensões, mantendo proporção */
  flex-shrink: 0; /* Prevent icons from shrinking */
}

.description-text {
  font-family: 'Montserrat', sans-serif;
  color: #1865a7; /* Using the same blue as the title for consistency */
  font-size: 2.25rem; /* Adjust size as needed */
  line-height: 1.5;
  max-width: 600px; /* Limit width of the text for better readability */
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .section-title {
    font-size: 2rem;
  }
  .description-text {
    font-size: 1.15rem;
    max-width: 500px;
  }
  .icon {
    max-width: 80px;
  }
  .content-wrapper {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .participation-section {
    padding: 3rem 1rem;
  }
  .content-wrapper {
    flex-direction: column;
    gap: 1.5rem;
  }
  .icon {
    max-width: 70px;
  }
  .icon-left {
    order: 1; /* Icon PF */
  }
  .description-text {
    order: 2; /* Text */
    font-size: 1.1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .icon-right {
    order: 3; /* Icon PJ */
  }
  .section-title {
    font-size: 1.75rem;
  }
  .title-underline {
    width: 100px;
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.6rem;
  }
  .description-text {
    font-size: 1rem;
  }
  .icon {
    max-width: 60px;
  }
}
</style>
