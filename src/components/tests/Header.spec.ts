// Importa as funções de teste (describe, it, expect) do Vitest.
import { describe, it, expect } from 'vitest';
// Importa a função 'mount' do Vue Test Utils para montar componentes Vue em testes.
import { mount } from '@vue/test-utils';
// Importa o componente Header que será testado.
import Header from '../Header.vue';

// Bloco 'describe' agrupa testes relacionados ao componente Header.vue.
describe('Header.vue', () => {
  // Teste individual ('it') para verificar a renderização da logomarca.
  it('deve renderizar a logomarca corretamente', () => {
    // Monta o componente Header. 'wrapper' é um objeto que contém o componente montado e métodos para interagir e inspecioná-lo.
    const wrapper = mount(Header);

    // Procura por um elemento <img> com a classe 'logo' dentro do componente montado.
    const logo = wrapper.find('img.logo');

    // Asserção: Verifica se o elemento da logomarca existe no DOM.
    expect(logo.exists()).toBe(true);

    // Asserção: Verifica se o atributo 'alt' da logomarca corresponde ao texto esperado.
    expect(logo.attributes('alt')).toBe('Regulariza Amazonas Logo');
  });

  // Teste individual ('it') para verificar a funcionalidade de alternância do menu responsivo.
  // O teste é 'async' porque a simulação de eventos (trigger) pode ser assíncrona.
  it('deve alternar o menu ao clicar no botão de toggle em telas menores', async () => {
    // Monta o componente Header.
    const wrapper = mount(Header);

    // Encontra o botão de toggle do menu (geralmente o ícone de hambúrguer).
    const menuToggleButton = wrapper.find('button.menu-toggle');
    // Encontra o elemento de navegação principal.
    const navElement = wrapper.find('nav.main-nav');

    // Estado inicial: Verifica se o menu de navegação NÃO possui a classe 'open'.
    // A classe 'open' é usada para controlar a visibilidade do menu em telas menores.
    expect(navElement.classes().includes('open')).toBe(false);

    // Simula um evento de clique no botão de toggle do menu.
    // Nota: A visibilidade real do botão de toggle é controlada por CSS (@media queries).
    // Este teste foca na lógica de alternância da classe 'open', assumindo que o botão está interativo.
    await menuToggleButton.trigger('click');

    // Após o primeiro clique: Verifica se o menu de navegação AGORA POSSUI a classe 'open'.
    expect(navElement.classes().includes('open')).toBe(true);

    // Simula um segundo evento de clique no botão de toggle do menu.
    await menuToggleButton.trigger('click');

    // Após o segundo clique: Verifica se o menu de navegação NÃO POSSUI MAIS a classe 'open'.
    expect(navElement.classes().includes('open')).toBe(false);
  });
});