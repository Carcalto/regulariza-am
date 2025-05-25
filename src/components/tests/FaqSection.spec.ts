// Importa as funções de teste (describe, it, expect) do Vitest.
import { describe, it, expect } from 'vitest';
// Importa a função 'mount' do Vue Test Utils para montar componentes Vue em testes.
import { mount } from '@vue/test-utils';
// Importa o componente FaqSection que será testado.
import FaqSection from '../FaqSection.vue';

// Bloco 'describe' agrupa testes relacionados ao componente FaqSection.vue.
describe('FaqSection.vue', () => {
  // Teste individual ('it') para verificar se o componente pode ser montado sem erros.
  // Este é um "smoke test" básico.
  it('deve ser montado corretamente', () => {
    // Monta o componente FaqSection.
    const wrapper = mount(FaqSection);
    // Asserção: Verifica se o componente montado existe no DOM simulado.
    expect(wrapper.exists()).toBe(true);
  });
  // TODO: Adicionar mais testes para verificar o conteúdo específico da FaqSection,
  // como a renderização de perguntas e respostas, e a interatividade (ex: expandir/recolher respostas).
});