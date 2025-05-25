// Importa as funções de teste (describe, it, expect) do Vitest.
import { describe, it, expect } from 'vitest';
// Importa a função 'mount' do Vue Test Utils para montar componentes Vue em testes.
import { mount } from '@vue/test-utils';
// Importa o componente TransactionModalitiesSection que será testado.
import TransactionModalitiesSection from '../TransactionModalitiesSection.vue';

// Bloco 'describe' agrupa testes relacionados ao componente TransactionModalitiesSection.vue.
describe('TransactionModalitiesSection.vue', () => {
  // Teste individual ('it') para verificar se o componente pode ser montado sem erros.
  // Este é um "smoke test" básico.
  it('deve ser montado corretamente', () => {
    // Monta o componente TransactionModalitiesSection.
    const wrapper = mount(TransactionModalitiesSection);
    // Asserção: Verifica se o componente montado existe no DOM simulado.
    expect(wrapper.exists()).toBe(true);
  });
  // TODO: Adicionar mais testes para verificar o conteúdo específico da TransactionModalitiesSection,
  // como as diferentes modalidades de transação, seus detalhes e links.
});