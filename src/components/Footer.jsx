import React from 'react'
import { useLanguage } from '../context/LanguageContext'

// TTRI Building placeholder (teal silhouette since we can't embed the actual photo)
const BuildingIcon = () => (
  <div className="w-full h-full bg-teal-600 rounded-lg overflow-hidden flex items-end justify-center relative">
    {/* Sky */}
    <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-sky-100"/>
    {/* Building */}
    <div className="relative z-10 flex items-end gap-1 pb-0">
      <div className="w-6 h-16 bg-gray-300 opacity-80"/>
      <div className="w-12 h-24 bg-white border border-gray-200"/>
      <div className="w-16 h-28 bg-white border border-gray-200 flex flex-col justify-start items-center pt-2">
        <div className="w-8 h-2 bg-red-500 mb-1"/>
        <div className="text-[6px] font-bold text-gray-700 text-center leading-tight">TTRI</div>
      </div>
      <div className="w-10 h-20 bg-white border border-gray-200"/>
      <div className="w-6 h-14 bg-gray-300 opacity-80"/>
    </div>
    {/* Trees */}
    <div className="absolute bottom-0 left-2 flex gap-1">
      {[16, 20, 14].map((h, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className={`w-4 bg-green-600 rounded-t-full`} style={{height: h}}/>
          <div className="w-1 h-3 bg-green-800"/>
        </div>
      ))}
    </div>
  </div>
)

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#089db4] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left: Building Image + Copyright */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-40 rounded-xl overflow-hidden shadow-md bg-gray-100">
              {/* Real building image reference */}
              <img 
                src="https://www.ttri.org.tw/images/about/building.jpg" 
                alt="TTRI Building"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }}
              />
              <div className="w-full h-full hidden">
                <BuildingIcon />
              </div>
            </div>
            <div className=" text-teal-100 leading-relaxed">
              <p className="font-medium text-white mb-0.5">財團法人紡織產業綜合研究所 版權所有</p>
              <p>{t('copyright')}</p>
              <p className="text-xs text-teal-200 mt-1">最佳瀏覽環境1280 x 1024視窗模式以上，Chrome 與 Firefox 及 IE10.0 以上版本瀏覽器</p>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide">{t('quickLinks')}</h3>
            <ul className="space-y-2.5">
              {[
                { label: t('newCase'), href: 'https://test3.ttri.org.tw/Forms/Application' },
                { label: t('testProgressQuery'), href: '#' },
                { label: t('modifyInformation'), href: '#' },
                { label: t('forgetPassword'), href: '#' },
                { label: t('login'), href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-teal-100 hover:text-white  transition-colors duration-150 hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Us */}
          <div>
            <h3 className="text-white font-bold text-base mb-1 tracking-wide">{t('contactUs')}</h3>
            <p className="text-teal-100 font-semibold  mb-1">{t('deptName')}</p>
            <p className="text-white font-bold text-base mb-4">
              {t('contactPerson')}
            </p>

            <div className="space-y-2  text-teal-100">
              <p>{t('address')}</p>
              <p>{t('phone')}</p>
              <p>
                Email：{' '}
                <a
                  href={`mailto:${t('email')}`}
                  className="text-white hover:underline"
                >
                  {t('email')}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="h-14"></div>
      </div>
      <div className='py-[30px] w-full bg-[#057A8D]'></div>
    </footer>
  )
}
