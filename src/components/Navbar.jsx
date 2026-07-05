import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import logo from "./../Assets/ttri-home.png"

// Taiwan flag SVG inline
const TaiwanFlag = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="16" fill="#FE0000"/>
    <rect width="11" height="8" fill="#000095"/>
    <circle cx="5.5" cy="4" r="2.2" fill="white"/>
    <circle cx="5.5" cy="4" r="1.5" fill="#000095"/>
    {/* Sun rays simplified */}
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
      <line
        key={i}
        x1="5.5"
        y1="4"
        x2={5.5 + 2.6 * Math.cos((angle * Math.PI) / 180)}
        y2={4 + 2.6 * Math.sin((angle * Math.PI) / 180)}
        stroke="white"
        strokeWidth="0.6"
      />
    ))}
  </svg>
)

// US/English flag
const USFlag = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="16" fill="#fff"/>
    {[0,2,4,6,8,10,12].map(y => (
      <rect key={y} width="22" height="1.23" y={y * 1.23} fill="#B22234"/>
    ))}
    <rect width="9" height="8.6" fill="#3C3B6E"/>
    {/* Stars simplified as dots */}
    {[...Array(5)].map((_, r) =>
      [...Array(r % 2 === 0 ? 6 : 5)].map((_, c) => (
        <circle
          key={`${r}-${c}`}
          cx={r % 2 === 0 ? 0.9 + c * 1.5 : 1.65 + c * 1.5}
          cy={0.85 + r * 1.65}
          r="0.4"
          fill="white"
        />
      ))
    )}
  </svg>
)

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage()
  const [testingOpen, setTestingOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const testingRef = useRef(null)
  const langRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (testingRef.current && !testingRef.current.contains(e.target)) setTestingOpen(false)
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-[90%] mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="">
            <img src={logo} alt="logo" className='h-11'/>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {/* Main */}
            <a
              // href="https://test3.ttri.org.tw/"

              rel="noopener noreferrer"
              className="nav-link"
            >
              {t('main')}
            </a>
            {/* Testing Dropdown */}
            <div className="relative" ref={testingRef}>
              <button
                className="flex items-center gap-1 nav-link"
                onClick={() => setTestingOpen(o => !o)}
              >
                {t('testing')}
                <ChevronDown size={14} className={`transition-transform duration-200 ${testingOpen ? 'rotate-180' : ''}`} />
              </button>
              {testingOpen && (
                <div className="absolute left-0 top-full mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                  <a
                    // href="https://test3.ttri.org.tw/Forms/Application"

                    rel="noopener noreferrer"
                    className="dropdown-item"
                    onClick={() => setTestingOpen(false)}
                  >
                    {t('newCase')}
                  </a>
                  <a
                    // href="https://test3.ttri.org.tw/Forms/Quotation"

                    rel="noopener noreferrer"
                    className="dropdown-item"
                    onClick={() => setTestingOpen(false)}
                  >
                    {t('preQueryQuotation')}
                  </a>
                </div>
              )}
            </div>

            {/* Login */}
            <button className="nav-link">{t('login')}</button>

            {/* Sign Up */}
            <a
              // href="https://test3.ttri.org.tw/Home/Register"

              rel="noopener noreferrer"
              className="nav-link"
            >
              {t('signUp')}
            </a>

            {/* Language Dropdown */}
            <div className="relative pl-5" ref={langRef}>
              <button
                className="flex items-center gap-1.5 nav-link transition-all"
                onClick={() => setLangOpen(o => !o)}
              >
                <USFlag />
                <span className="text-sm font-medium">{t('langName')}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white shadow-lg overflow-hidden z-50">
                  <button
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => { toggleLang(); setLangOpen(false) }}
                  >
                    <TaiwanFlag />
                    <span>{lang === 'en' ? '中文' : 'English'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* New Case Button */}
          <a
            // href="https://test3.ttri.org.tw/Forms/Application"
            rel="noopener noreferrer"
            className="bg-[#38A4FF] hover:bg-white border hover:border-[#38A4FF] hover:text-[#38A4FF] text-white font-medium px-5 py-2 rounded-[4px] text-base transition-colors duration-200 shadow-sm"
          >
            {t('newCase')}
          </a>
        </div>
      </div>
    </nav>
  )
}
