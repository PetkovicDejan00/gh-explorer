import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from './components/buttons/Nav'
import Framework from './pages/Framework/Framework'
import Repository from './pages/Repository/Repository'
import {QueryClient, QueryClientProvider} from 'react-query'
import {GlobalStyle} from './globalCSS/globalStyle'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {

  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, keepPreviousData: true, retry: 0 }}
  })

  return (
      <div className="App">
        <GlobalStyle />
        <Router>
          <QueryClientProvider client={queryClient}>
            <Nav />
            <Routes>
              <Route path="/" element={<Navigate to='/react' />} />
              <Route path="/:framework" element={<Framework />} />
              <Route path="/repository/*" element={<Repository />} />
            </Routes>
          </QueryClientProvider>
        </Router>
      </div>
  )
}

export default App
