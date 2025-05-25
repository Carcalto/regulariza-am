<template>
  <header class="main-header">
    <div class="container">
      <div class="logo-container">
        <img src="@/assets/Exportação_LogoRAM.svg" alt="Regulariza Amazonas Logo" class="logo" />
      </div>
      <nav :class="['main-nav', { 'open': isMenuOpen }]">
        <ul>
          <li><a href="#participar">Quem pode participar</a></li>
          <li><a href="#porque-regularizar">Porque regularizar</a></li>
          <li><a href="#como-funciona">Como funciona</a></li>
          <li><a href="#duvidas">Dúvidas</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="isMenuOpen">
        ☰
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.main-header {
  background-image: url('../assets/Exportação_FundoAzulOndas.png'); /* TESTE: Caminho relativo */
  /* background-color: red; */ /* Remover teste de cor */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1rem 0;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  font-family: 'Montserrat', sans-serif; /* Added Montserrat font */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 100px; /* Increased logo size */
  width: auto;
}

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.main-nav li {
  margin-left: 1.5rem; /* Spacing between nav items */
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: bold; /* Changed from 500 to bold */
  font-size: 1rem; /* Aumentado de 0.9rem */
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  position: relative;
  font-family: 'Montserrat', sans-serif; /* Added Montserrat font */
}

.main-nav a:hover {
  color: #a0d4ff; /* Lighter blue for hover */
}

.main-nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px; /* Position underline slightly below text */
  left: 0;
  background-color: #a0d4ff;
  transition: width 0.3s ease;
}

.main-nav a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none; /* Hidden on larger screens */
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif; /* Added Montserrat font for consistency */
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .main-nav {
    position: absolute;
    top: 100%; /* Position below the header */
    left: 0;
    width: 100%;
    background-color: rgba(0, 42, 84, 0.95); /* Slightly darker blue for dropdown, with slight transparency to show background */
    backdrop-filter: blur(5px); /* Optional: adds a blur effect to the dropdown background */
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    border-top: 1px solid #004080; /* Separator line */
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .main-nav.open {
    max-height: 500px; /* Adjust as needed for content */
    padding: 1rem 0;
  }

  .main-nav ul {
    flex-direction: column;
    width: 100%;
  }

  .main-nav li {
    margin: 0;
    width: 100%;
  }

  .main-nav a {
    padding: 0.75rem 1rem;
    display: block;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(0, 63, 122, 0.5); /* Separator between items */
  }
  .main-nav li:last-child a {
    border-bottom: none;
  }

  .main-nav a::after {
    display: none; /* Remove underline effect on mobile */
  }

  .menu-toggle {
    display: block; /* Show hamburger menu */
  }
}

@media (max-width: 768px) {
  .logo {
    height: 50px; /* Increased logo size for smaller screens */
  }
  .main-nav a {
    font-size: 1rem; /* Slightly larger for better touch on mobile */
  }
}
</style>
