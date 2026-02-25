import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import DespreNoi from './pages/DespreNoi'
import InformatiiUtile from './pages/InformatiiUtile'
import Organigrama from './pages/Organigrama'
import Regulament from './pages/Regulament'
import UnitatiArondate from './pages/UnitatiArondate'
import EleviInscrisi from './pages/EleviInscrisi'
import Anunturi from './pages/Anunturi'
import PortalElevi from './pages/PortalElevi'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import './index.css'

const StudioPage = lazy(() => import('./pages/StudioPage'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Studio — fără Navbar/Footer, încărcat lazy */}
        <Route path="/studio/*" element={
          <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Se încarcă Studio...</div>}>
            <StudioPage />
          </Suspense>
        } />

        {/* Restul site-ului */}
        <Route path="/*" element={
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/despre-noi" element={<DespreNoi />} />
                <Route path="/informatii-utile" element={<InformatiiUtile />} />
                <Route path="/organigrama" element={<Organigrama />} />
                <Route path="/regulament" element={<Regulament />} />
                <Route path="/unitati-arondate" element={<UnitatiArondate />} />
                <Route path="/elevi-inscrisi" element={<EleviInscrisi />} />
                <Route path="/anunturi" element={<Anunturi />} />
                <Route path="/portal-elevi" element={<PortalElevi />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
