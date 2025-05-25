// Importa as funções de teste (describe, it, expect) do Vitest.
import { describe, it, expect } from 'vitest';
// Importa a função 'mount' do Vue Test Utils para montar componentes Vue em testes.
import { mount } from '@vue/test-utils';
// Importa o componente HowItWorksBanner que será testado.
import HowItWorksBanner from '../HowItWorksBanner.vue';

// Bloco 'describe' agrupa testes relacionados ao componente HowItWorksBanner.vue.
describe('HowItWorksBanner.vue', () => {
  // Teste individual ('it') para verificar se o componente pode ser montado sem erros.
  // Este é um "smoke test" básico.
  it('deve ser montado corretamente', () => {
    // Monta o componente HowItWorksBanner.
    const wrapper = mount(HowItWorksBanner);
    // Asserção: Verifica se o componente montado existe no DOM simulado.
    expect(wrapper.exists()).toBe(true);
  });
  // TODO: Adicionar mais testes para verificar o conteúdo específico do HowItWorksBanner,
  // como os passos descritos, ícones ou textos.
});