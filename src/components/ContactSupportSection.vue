<template>
  <section id="contato" class="contact-support-section">
    <div class="container">
      <h2 class="section-title">CONTATO E SUPORTE</h2>
      <div class="contact-info-card">
        <div class="contact-details">
        <a href="https://wa.me/5592994034980" target="_blank" rel="noopener noreferrer" class="contact-item whatsapp-link">
          <img src="@/assets/Exportação_IconeWhats.png" alt="WhatsApp" class="contact-icon">
          <span class="contact-text">(92) 99403-4980</span>
        </a>
        <div class="contact-item">
          <img src="@/assets/Exportação_IconeEmail.png" alt="Email" class="contact-icon">
          <span class="contact-text">parcelamento@pge.am.gov.br</span>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rua+Emílio+Moreira,+nº+1308,+Praça+14+de+janeiro,+Manaus,+AM"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-item address-link"
        >
          <img src="@/assets/Exportação_IconeLocalização.png" alt="Endereço" class="contact-icon">
          <div class="address-text">
            <span>Rua Emílio Moreira, nº 1308</span>
            <span>Praça 14 de janeiro</span>
          </div>
        </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for this component
</script>

<style scoped>
.contact-support-section {
  background-color: #1b509a; /* Azul escuro de referência */
  padding: 2rem 1rem;
  font-family: 'Montserrat', sans-serif;
}

/* .container é definido globalmente em src/style.css */

.section-title {
  font-family: 'Montserrat', sans-serif;
  color: #13e559; /* Verde especificado */
  font-weight: 700; /* Negrito */
  text-transform: uppercase;
  font-size: 2.2rem; /* Ajustar conforme imagem */
  margin-bottom: 1rem;
  text-align: left;
}

.contact-info-card {
  background-color: #263a66; /* Novo fundo especificado */
  padding: 2rem;
  border-radius: 10px; /* Bordas arredondadas para o card */
  position: relative; /* Para que z-index funcione */
  z-index: 10;      /* Para ficar na frente do footer */
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Espaço entre os itens de contato */
  max-width: 500px; /* Limita a largura do bloco de contatos */
  margin-left: auto; /* Tenta empurrar para a direita/centro */
  margin-right: auto; /* Tenta empurrar para a esquerda/centro */
  /* Para um deslocamento mais para a direita, pode-se usar apenas margin-left com um valor específico, */
  /* ou ajustar o padding do .contact-info-card se o objetivo é mais espaço à esquerda dentro do card. */
  /* Exemplo para empurrar mais para a direita dentro do card, se o card tiver padding: */
  /* margin-left: 5%; ou um valor em rem/px */
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem; /* Espaço entre ícone e texto */
}

.contact-icon {
  width: 50px; /* Aumentado */
  height: 50px; /* Aumentado */
  object-fit: contain;
}

.contact-text {
  font-family: 'Montserrat', sans-serif;
  color: white; /* Estilo do link herdará a cor do .contact-text */
  font-weight: 700; /* Negrito */
  font-size: 1.7rem; /* Aumentado */
  line-height: 1;
  overflow-wrap: break-word; /* Permite que palavras longas (como emails) quebrem */
  word-break: break-word; /* Garante a quebra em diversos navegadores */
}

.address-text {
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  color: white; /* Estilo do link herdará a cor do .address-text */
  font-weight: 700; /* Negrito */
  font-size: 1.7rem; /* Aumentado */
  line-height: 1;
  overflow-wrap: break-word; /* Aplica também ao texto do endereço por segurança */
  word-break: break-word;
}

.address-text span {
  display: block;
}

/* Responsividade */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
    text-align: center; /* Centralizar título em telas menores */
  }
  .contact-item { /* Aplicar também ao link para manter o comportamento flex */
    align-items: flex-start; /* Alinhar ícone com topo do texto se o texto quebrar linha */
  }
  .whatsapp-link,
  .address-link { /* Garante que os links não tenham sublinhado padrão e herdem estilos */
    text-decoration: none;
  }
  .contact-text,
  .address-text {
    font-size: 1rem;
  }
  .contact-icon {
    width: 28px;
    height: 28px;
    margin-top: 0.1em; /* Pequeno ajuste para alinhar melhor com texto maior */
  }
}
</style>