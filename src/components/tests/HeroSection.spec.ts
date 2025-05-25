// Importa as funções de teste (describe, it, expect) do Vitest.
import { describe, it, expect } from 'vitest';
// Importa a função 'mount' do Vue Test Utils para montar componentes Vue em testes.
import { mount } from '@vue/test-utils';
// Importa o componente HeroSection que será testado.
import HeroSection from '../HeroSection.vue';

// Bloco 'describe' agrupa testes relacionados ao componente HeroSection.vue.
describe('HeroSection.vue', () => {
  // Teste individual ('it') para verificar se o componente pode ser montado sem erros.
  // Este é um "smoke test" básico.
  it('deve ser montado corretamente', () => {
    // Monta o componente HeroSection.
    const wrapper = mount(HeroSection);
    // Asserção: Verifica se o componente montado existe no DOM simulado.
    expect(wrapper.exists()).toBe(true);
  });
  // TODO: Adicionar mais testes para verificar o conteúdo específico da HeroSection,
  // como a presença de títulos, textos e imagens esperados.
});