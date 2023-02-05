import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { MovieDetails } from './pages/MovieDetails/MovieDetails'
import { PageNotFound } from './pages/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
