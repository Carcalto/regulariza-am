// Importa as funções de teste (describe, it, expect) do Vitest.
import { describe, it, expect } from 'vitest';
// Importa a função 'mount' do Vue Test Utils para montar componentes Vue em testes.
import { mount } from '@vue/test-utils';
// Importa o componente ContactSupportSection que será testado.
import ContactSupportSection from '../ContactSupportSection.vue';

// Bloco 'describe' agrupa testes relacionados ao componente ContactSupportSection.vue.
describe('ContactSupportSection.vue', () => {
  // Teste individual ('it') para verificar se o componente pode ser montado sem erros.
  // Este é um "smoke test" básico.
  it('deve ser montado corretamente', () => {
    // Monta o componente ContactSupportSection.
    const wrapper = mount(ContactSupportSection);
    // Asserção: Verifica se o componente montado existe no DOM simulado.
    expect(wrapper.exists()).toBe(true);
  });
  // TODO: Adicionar mais testes para verificar o conteúdo específico da ContactSupportSection,
  // como a presença de informações de contato, links para redes sociais ou formulário de contato.
});