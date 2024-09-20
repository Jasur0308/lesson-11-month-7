import RouteController from "./routes"
import Header from "./components/header/Header"
import { SearchProvider } from './components/search/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Header/>
      <RouteController/>
    </SearchProvider>
  )
}

export default App