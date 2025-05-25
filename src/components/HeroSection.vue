<template>
  <section class="hero-section">
    <div class="container hero-content">
      <div class="hero-text">
        <h1>Mais crédito para você,<br />Mais força para o Amazonas</h1>
        <p>Confira as condições e regularize já!</p>
        <div class="hero-buttons">
          <button class="btn btn-primary">Aderir</button>
          <button class="btn btn-secondary">Saiba mais</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this simple component
</script>

<style scoped>
.hero-section {
  background-image: url('../assets/Exportação_Banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 15rem 1rem; /* Increased vertical padding */
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center; /* Center the .hero-content container */
  position: relative;
  overflow: hidden;
}

.container.hero-content {
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 1rem; /* Crucial for alignment with header logo's container */
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Aligns .hero-text to the left of this container */
  width: 100%;
}

.hero-text {
  flex: 0 0 auto; 
  max-width: 50%; 
  text-align: left;
  animation: fadeIn 1s ease-out;
  margin-left: 1%; /* Adjusted: Pushes text block to the right */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 2.8rem; 
  color: #000000;
  font-weight: 700 !important; /* Forçar negrito */
  margin-bottom: 1rem; 
  line-height: 1.2;
}

.hero-text p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem; 
  color: #000000;
  margin-bottom: 2rem; 
  line-height: 1.6;
  font-weight: 700; /* Changed to bold */
}

.hero-buttons {
  display: flex;
  gap: 1rem; 
  justify-content: flex-start; 
}

.btn {
  padding: 0.75rem 2.75rem; 
  border-radius: 15px; 
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif; /* Changed to Montserrat */
  font-weight: 700; /* Changed to bold */
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: none; 
  letter-spacing: normal; 
  border: 2px solid transparent; 
  text-align: center;
}

.btn-primary {
  background-color: #1FE272; 
  color: white;
  border-color: #1FE272;
}

.btn-primary:hover {
  background-color: #13e559; 
  border-color: #1BD36A;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: white;
  color: #1865a7; 
  border: 2px solid #1865a7;
}

.btn-secondary:hover {
  background-color: #f0f4f8; 
  color: #002244; 
  border-color: #002244;
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .hero-text {
    max-width: 65%;
    margin-left: 3%; /* Adjusted for medium screens */
  }
  .hero-text h1 {
    font-size: 2.25rem;
  }
  .hero-text p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1rem; 
    text-align: center; 
  }
  .container.hero-content {
    justify-content: center; 
  }
  .hero-text {
    max-width: 90%; 
    text-align: center; 
    margin-left: 0; /* Centered on small screens, so margin-left is reset */
  }
  .hero-text h1 {
    font-size: 2rem;
  }
  .hero-buttons {
    justify-content: center; 
    flex-direction: column; 
    align-items: center; 
    gap: 1rem;
  }
  .btn {
    width: 80%;
    max-width: 280px;
    padding: 0.8rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 1.8rem;
  }
  .hero-text p {
    font-size: 0.9rem;
  }
  .btn {
    width: 90%;
  }
}
</style>
