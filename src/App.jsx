import React from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import VerifyReport from './components/VerifyReport'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen no-scrollbar">
        <Navbar />
        <VerifyReport />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
