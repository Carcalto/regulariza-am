/// <reference types="vitest" />
// Importa a função defineConfig do Vite para fornecer intellisense e tipagem para a configuração.
import { defineConfig } from 'vite'
// Importa o plugin oficial do Vue para Vite, necessário para processar componentes Single File Components (.vue).
import vue from '@vitejs/plugin-vue'
// Importa o módulo 'path' do Node.js para auxiliar na resolução de caminhos de arquivos.
import path from 'path'

// Link para a documentação oficial de configuração do Vite.
// https://vitejs.dev/config/

export default defineConfig({
  // Array de plugins utilizados pelo Vite.
  plugins: [
    vue(), // Adiciona o plugin do Vue.
  ],
  // Configurações para a resolução de módulos.
  resolve: {
    // Define aliases para caminhos de importação, facilitando referências a diretórios comuns.
    alias: {
      // Cria um alias '@' que aponta para o diretório 'src'.
      // Isso permite importações como: import Componente from '@/components/Componente.vue'
      // em vez de caminhos relativos complexos como: import Componente from '../../components/Componente.vue'
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Configuração específica para o Vitest.
  test: {
    // Define o ambiente de teste para simular um DOM. 'happy-dom' é uma alternativa leve ao jsdom.
    environment: 'happy-dom',
    // Permite o uso de globais do Vitest (describe, test, expect, etc.) sem importação explícita nos arquivos de teste.
    globals: true,
    // Arquivos que o Vitest deve procurar para executar testes.
    // Por padrão, ele procura por arquivos .test.ts, .spec.ts, etc.
    // include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'], // Exemplo de configuração explícita (opcional)
  },
})
