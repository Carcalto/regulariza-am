<!--
  Template principal da aplicação.
  Este componente orquestra a renderização das principais seções da landing page.
  Cada tag aqui representa um componente Vue dedicado a uma seção específica.
-->
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
</template>

<!--
  Script setup para a lógica do componente App.vue.
  Utiliza a Composition API do Vue 3 com TypeScript.
  Principalmente importa os componentes que formam a estrutura da página.
-->
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

</script>

<!--
  Estilos para o componente App.vue.
  Como a maioria dos estilos globais e de layout está em src/style.css,
  esta seção é reservada para estilos que são verdadeiramente específicos
  apenas para o encapsulamento ou layout direto do App.vue, se houver.
-->
<style>
/* Estilos específicos do App.vue podem ser adicionados aqui se necessário */
</style>
