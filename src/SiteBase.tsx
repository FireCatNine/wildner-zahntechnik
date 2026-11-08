// @ts-nocheck
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
//Subpage-Imports

export default function SiteBase() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*Subpage-Routes*/}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}