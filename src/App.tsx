import { BrowserRouter, Outlet } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GitHubProvider } from "./context/GitHubContext"
import { Router } from "./router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitHubProvider>
          <Router />
        </GitHubProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
