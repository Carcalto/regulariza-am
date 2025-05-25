// Importa as funções de teste (describe, it, expect) do Vitest.
import { describe, it, expect } from 'vitest';
// Importa a função 'mount' do Vue Test Utils para montar componentes Vue em testes.
import { mount } from '@vue/test-utils';
// Importa o componente CallToActionSection que será testado.
import CallToActionSection from '../CallToActionSection.vue';

// Bloco 'describe' agrupa testes relacionados ao componente CallToActionSection.vue.
describe('CallToActionSection.vue', () => {
  // Teste individual ('it') para verificar se o componente pode ser montado sem erros.
  // Este é um "smoke test" básico.
  it('deve ser montado corretamente', () => {
    // Monta o componente CallToActionSection.
    const wrapper = mount(CallToActionSection);
    // Asserção: Verifica se o componente montado existe no DOM simulado.
    expect(wrapper.exists()).toBe(true);
  });
  // TODO: Adicionar mais testes para verificar o conteúdo específico da CallToActionSection,
  // como a presença de botões, links e textos de chamada para ação.
});