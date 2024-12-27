import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CityDetails from './pages/CityDetails'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:slug" element={<CityDetails />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}
