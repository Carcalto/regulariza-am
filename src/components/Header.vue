<!--
  Componente Header: Responsável pelo cabeçalho da aplicação.
  Inclui a logo, navegação principal e um menu responsivo (hambúrguer).
-->
<template>
  <header class="main-header">
    <!-- Contêiner para alinhar e limitar a largura do conteúdo do cabeçalho -->
    <div class="container">
      <!-- Seção da logomarca -->
      <div class="logo-container">
        <img src="@/assets/Exportação_LogoRAM.svg" alt="Regulariza Amazonas Logo" class="logo" />
      </div>
      <!-- Navegação principal. A classe 'open' é aplicada dinamicamente para o menu responsivo. -->
      <nav :class="['main-nav', { 'open': isMenuOpen }]">
        <ul>
          <li><a href="#participar">Quem pode participar</a></li>
          <li><a href="#porque-regularizar">Porque regularizar</a></li>
          <li><a href="#como-funciona">Como funciona</a></li>
          <li><a href="#duvidas">Dúvidas</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <!-- Botão para alternar a visibilidade do menu em telas menores (menu hambúrguer) -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="isMenuOpen">
        ☰ <!-- Ícone do menu hambúrguer -->
      </button>
    </div>
  </header>
</template>

<!--
  Script setup para a lógica do componente Header.
  Utiliza a Composition API do Vue 3 com TypeScript.
-->
<script setup lang="ts">
import { ref } from 'vue'; // Importa a função ref para criar variáveis reativas

// Variável reativa para controlar o estado (aberto/fechado) do menu responsivo.
const isMenuOpen = ref(false);

// Função para alternar o estado do menu responsivo.
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<!--
  Estilos escopados para o componente Header.
  O atributo 'scoped' garante que estes estilos se apliquem apenas a este componente,
  evitando conflitos com estilos globais ou de outros componentes.
-->
<style scoped>
/* Estilo principal do cabeçalho */
.main-header {
  background-image: url('@/assets/Exportação_FundoAzulOndas.png');
  /* background-color: red; */ /* Comentário de teste, pode ser removido */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1rem 0;
  color: white; /* Cor do texto padrão para o cabeçalho */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil para dar profundidade */
  position: sticky; /* Mantém o cabeçalho fixo no topo durante o scroll */
  top: 0;
  z-index: 1000; /* Garante que o cabeçalho fique acima de outros elementos na página */
  width: 100%;
  font-family: 'Montserrat', sans-serif; /* Fonte específica para o cabeçalho */
}

/* Contêiner interno para limitar a largura e alinhar o conteúdo do cabeçalho */
.container {
  max-width: 1200px; /* Largura máxima do conteúdo */
  margin: 0 auto; /* Centraliza o contêiner */
  padding: 0 1rem; /* Espaçamento interno horizontal */
  display: flex; /* Habilita Flexbox para alinhar logo e navegação */
  justify-content: space-between; /* Distribui espaço entre logo/navegação e o botão de menu (se visível) */
  align-items: center; /* Alinha verticalmente os itens no centro */
}

/* Contêiner da logomarca */
.logo-container {
  display: flex;
  align-items: center;
}

/* Estilo da logomarca */
.logo {
  height: 100px; /* Tamanho da logo aumentado */
  width: auto; /* Mantém a proporção */
}

/* Estilos para a navegação principal */
.main-nav ul {
  list-style: none; /* Remove marcadores de lista */
  padding: 0;
  margin: 0;
  display: flex; /* Alinha os itens da lista horizontalmente */
  align-items: center;
}

.main-nav li {
  margin-left: 1.5rem; /* Espaçamento entre os itens da navegação */
}

.main-nav a {
  color: white;
  text-decoration: none; /* Remove sublinhado padrão */
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem 0; /* Espaçamento vertical para melhor área de clique */
  transition: color 0.3s ease; /* Transição suave para a cor no hover */
  position: relative; /* Necessário para o posicionamento do pseudo-elemento ::after (sublinhado animado) */
  font-family: 'Montserrat', sans-serif;
}

.main-nav a:hover {
  color: #a0d4ff; /* Cor do link no hover */
}

/* Efeito de sublinhado animado para os links da navegação em telas maiores */
.main-nav a::after {
  content: '';
  position: absolute;
  width: 0; /* Começa sem largura, para animar a expansão */
  height: 2px; /* Altura do sublinhado */
  bottom: -2px; /* Posiciona o sublinhado levemente abaixo do texto */
  left: 0;
  background-color: #a0d4ff; /* Cor do sublinhado */
  transition: width 0.3s ease; /* Anima a propriedade 'width' */
}

.main-nav a:hover::after {
  width: 100%; /* Expande o sublinhado para 100% da largura no hover */
}

/* Botão de menu hambúrguer (visível em telas menores) */
.menu-toggle {
  display: none; /* Oculto por padrão em telas maiores */
  background: none; /* Sem fundo */
  border: none; /* Sem borda */
  color: white;
  font-size: 1.8rem; /* Tamanho do ícone */
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

/*
  Ajustes Responsivos
  Media queries para adaptar o layout do cabeçalho em diferentes tamanhos de tela.
*/

/* Estilos para telas menores (tablets e celulares em paisagem) - breakpoint: 992px */
@media (max-width: 992px) {
  /* Navegação principal em modo dropdown */
  .main-nav {
    position: absolute; /* Posicionamento absoluto para o menu dropdown abaixo do cabeçalho */
    top: 100%; /* Alinha o topo do menu com a parte inferior do .main-header */
    left: 0;
    width: 100%;
    background-color: rgba(0, 42, 84, 0.95); /* Fundo do menu dropdown com leve transparência */
    backdrop-filter: blur(5px); /* Efeito de desfoque no fundo (suporte variado em navegadores) */
    box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Sombra para o menu dropdown */
    border-top: 1px solid #004080; /* Linha separadora no topo */
    max-height: 0; /* Começa fechado (altura zero) */
    overflow: hidden; /* Esconde o conteúdo que excede max-height durante a animação */
    transition: max-height 0.3s ease-out; /* Animação suave para abrir/fechar o menu */
  }

  /* Estilo para o menu quando está aberto (classe .open é adicionada via JavaScript) */
  .main-nav.open {
    max-height: 500px; /* Altura máxima para o menu aberto (ajustar conforme o conteúdo) */
    padding: 1rem 0; /* Espaçamento interno vertical quando aberto */
  }

  .main-nav ul {
    flex-direction: column; /* Itens do menu empilhados verticalmente */
    width: 100%;
  }

  .main-nav li {
    margin: 0; /* Remove margens laterais dos itens */
    width: 100%;
  }

  .main-nav a {
    padding: 0.75rem 1rem; /* Maior espaçamento para facilitar o toque */
    display: block; /* Links ocupam toda a largura disponível */
    width: 100%;
    text-align: center; /* Centraliza o texto dos links */
    border-bottom: 1px solid rgba(0, 63, 122, 0.5); /* Linha separadora entre os itens */
  }
  /* Remove a borda inferior do último item do menu */
  .main-nav li:last-child a {
    border-bottom: none;
  }

  /* Remove o efeito de sublinhado animado em telas menores */
  .main-nav a::after {
    display: none;
  }

  /* Torna o botão de menu hambúrguer visível */
  .menu-toggle {
    display: block;
  }
}

/* Estilos para telas ainda menores (celulares em retrato) - breakpoint: 768px */
@media (max-width: 768px) {
  .logo {
    height: 50px; /* Reduz o tamanho da logo para telas muito pequenas */
  }
  .main-nav a {
    font-size: 1rem; /* Mantém um bom tamanho de fonte para leitura e toque */
  }
}
</style>
