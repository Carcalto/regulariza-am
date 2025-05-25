<template>
  <Header />
  <HeroSection />
  <DarkBlueBanner />
  <ParticipationSection />
  <WhyRegularizeSection />
  <HowItWorksBanner />
  <TransactionModalitiesSection />
  <CallToActionSection />
  <FaqSection />
  <ContactSupportSection />
  <FooterSection />
  <!-- <main>
    <div>
      <h1>Conteúdo Principal Após Header</h1>
      <p>Se o Header carregar sem erros, o problema não está nele.</p>
    </div>
  </main> -->
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import DarkBlueBanner from './components/DarkBlueBanner.vue';
import ParticipationSection from './components/ParticipationSection.vue';
import WhyRegularizeSection from './components/WhyRegularizeSection.vue';
import HowItWorksBanner from './components/HowItWorksBanner.vue';
import TransactionModalitiesSection from './components/TransactionModalitiesSection.vue';
import CallToActionSection from './components/CallToActionSection.vue';
import FaqSection from './components/FaqSection.vue';
import ContactSupportSection from './components/ContactSupportSection.vue';
import FooterSection from './components/FooterSection.vue';

console.log('App.vue com todos os componentes da landing page carregados.');
</script>

<style>
/* Estilos globais ou específicos do App.vue podem ser adicionados aqui se necessário */
body {
  font-family: 'Arial', sans-serif; /* Exemplo de fonte global */
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

main {
  padding: 20px;
  text-align: center;
}
</style>
