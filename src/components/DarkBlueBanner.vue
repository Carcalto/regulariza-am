<template>
  <section class="dark-blue-banner">
    <div class="container">
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ref } from 'vue'; // Removido pois não está sendo utilizado

// Defina como true se houver conteúdo a ser adicionado dinamicamente ou via slots
// const hasContent = ref(false); // Comentado para remover o erro TS6133, pode ser reativado se necessário
</script>

<style scoped>
.dark-blue-banner {
  background-color: #1865a7; /* Azul escuro, conforme a imagem e nome do componente */
  padding: 1rem 1rem; /* Preenchimento para dar espaço ao conteúdo */
  color: white;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.dark-blue-banner p {
  margin: 0;
  font-size: 1.2rem;
}
</style>
