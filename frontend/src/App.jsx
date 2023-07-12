import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ShowPost from './pages/ShowPost'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/show-post/:id' element={<ShowPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App