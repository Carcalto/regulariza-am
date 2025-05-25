// Importa as funções de teste (describe, it, expect) do Vitest.
import { describe, it, expect } from 'vitest';
// Importa a função 'mount' do Vue Test Utils para montar componentes Vue em testes.
import { mount } from '@vue/test-utils';
// Importa o componente ParticipationSection que será testado.
import ParticipationSection from '../ParticipationSection.vue';

// Bloco 'describe' agrupa testes relacionados ao componente ParticipationSection.vue.
describe('ParticipationSection.vue', () => {
  // Teste individual ('it') para verificar se o componente pode ser montado sem erros.
  // Este é um "smoke test" básico.
  it('deve ser montado corretamente', () => {
    // Monta o componente ParticipationSection.
    const wrapper = mount(ParticipationSection);
    // Asserção: Verifica se o componente montado existe no DOM simulado.
    expect(wrapper.exists()).toBe(true);
  });
  // TODO: Adicionar mais testes para verificar o conteúdo específico da ParticipationSection,
  // como títulos, listas de participantes, ou outros elementos relevantes.
});