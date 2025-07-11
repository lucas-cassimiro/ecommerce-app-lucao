import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./pages/routes"

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

// Rota
// - Caminho ou direção que vai levar a gente a algum lugar
// - Rotas seria mudar de página, navegar pra uma nova página "uma nova rota"

// React router dom

// Rotas dinâmicas
// Dinâmico => muda, se ajusta, se molda


// Eu já vou ter uma página pronta que seria a página do meu componente, então eu já vou ter o componente montado, a estrutura montada
// E eu mudo o conteúdo de acordo com a informação que tá vindo

