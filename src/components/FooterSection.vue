<template>
  <footer class="footer-section">
    <div class="container footer-content">
      <div class="footer-top">
        <div class="footer-logo-area">
          <img src="@/assets/Exportação_LogoPGEam.svg" alt="PGE Amazonas Logo" class="footer-logo">
        </div>
        <div class="footer-links-area">
          <div class="links-column">
            <h4 class="footer-heading">Links úteis</h4>
            <ul class="footer-links-list">
              <li><a href="https://www.pge.am.gov.br/" target="_blank" rel="noopener noreferrer">PGE-AM</a></li>
              <li><a href="https://www.sefaz.am.gov.br/" target="_blank" rel="noopener noreferrer">Sefaz</a></li>
            </ul>
          </div>
          <div class="social-column">
            <h4 class="footer-heading">Redes Sociais</h4>
            <div class="social-icons">
              <a href="https://www.youtube.com/channel/UCKqZIBSsZnwh4syAJouTl-Q" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/Exportação_IconeYoutube.png" alt="YouTube PGE-AM" class="social-icon">
              </a>
              <a href="https://www.instagram.com/pge.am/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/Exportação_IconeInstagram.png" alt="Instagram PGE-AM" class="social-icon">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright-text">&copy; 2025 - Procuradoria Geral do Estado do Amazonas - CTI/NDTIC. Todos os direitos reservados</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No script logic needed for this component
</script>

<style scoped>
.footer-section {
  background-color: #ffffff;
  padding: 3rem 1rem 1.5rem 1rem; /* Padding original, a subida será com margin-top negativo */
  font-family: 'Montserrat', sans-serif;
  font-weight: 700; /* Negrito como padrão para a seção */
  border-top: 1px solid #e0e0e0; /* Linha sutil no topo */
  position: relative; /* Para z-index e margin-top negativo */
  z-index: 5;         /* Abaixo do card de contato */
  margin-top: -6rem;  /* Para "subir" a seção. Ajustar este valor conforme necessário. */
}


.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 0.5rem; /* Reduzido */
}

.footer-logo-area {
  display: flex;
  flex-direction: column;
  margin-top: 4rem; /* Adicionado para descer o logo */
}

.footer-logo {
  height: 100px; /* Aumentado para destaque */
  width: auto;
  margin-bottom: 2.5rem;
}

.logo-subtitle {
  font-size: 0.8rem;
  color: #555555; /* Cinza para o subtítulo do logo */
  font-weight: 400; /* Peso regular para o subtítulo */
}

.footer-links-area {
  display: flex;
  flex-direction: column; /* Para empilhar "Links úteis" e "Redes Sociais" */
  align-items: flex-end; /* Alinha o bloco das colunas à direita */
  gap: 0rem; /* Aumentado para dar espaço entre "Links úteis" e "Redes Sociais" */
  margin-top: 4rem; /* Adicionado para descer este bloco */
}

.links-column,
.social-column {
  text-align: right; /* Alinha o conteúdo interno das colunas à direita */
}

.footer-heading {
  font-size: 0.9rem;
  color: #1b509a; /* Azul escuro para os títulos */
  margin-bottom: 0.75rem;
  text-transform: none; /* A imagem não mostra uppercase para estes títulos */
  font-weight: 700;
}

.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links-list li {
  margin-bottom: 0rem;
}

.footer-links-list a {
  color: #1b509a; /* Azul escuro para os links */
  text-decoration: none;
  font-size: 1.4rem; /* Aumentado para destaque */
  font-weight: 700;
  line-height: 0; /* Aumentado para melhor espaçamento */
}

.footer-links-list a:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end; /* Alinha os ícones à direita */
}

.social-icon {
  width: 32px; /* Tamanho dos ícones sociais */
  height: 32px;
  object-fit: contain;
}

.footer-bottom {
  text-align: center;
  padding-top: 0.75rem; /* Reduzido */
  
}

.copyright-text {
  font-size: 1.2rem;
  color: #000000; /* Cinza para o texto de copyright */
  font-weight: 500; /* Peso regular */
  margin-bottom: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-logo-area {
    align-items: center;
  }
  .footer-links-area {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }
  .links-column,
  .social-column {
    text-align: center;
    width: 100%;
  }
  .social-icons {
    justify-content: center;
  }
  .section-title { /* Se houver um .section-title, para consistência */
    text-align: center;
  }
}
</style>