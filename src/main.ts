// Importa a função createApp do Vue para inicializar a aplicação.
import { createApp } from 'vue'

// Importa os estilos globais da aplicação.
// Estes estilos são aplicados a todos os componentes e elementos HTML.
import './style.css'

// Importa o componente raiz da aplicação (App.vue).
// Este componente é o ponto de partida para a renderização da interface do usuário.
import App from './App.vue'

// Cria a instância da aplicação Vue.
// O componente 'App' é passado como o componente raiz.
// Em seguida, a aplicação é montada ('.mount()') no elemento HTML com o id 'app'.
// Este elemento <div id="app"></div> deve existir no arquivo public/index.html.
createApp(App).mount('#app')
