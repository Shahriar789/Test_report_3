import React, { createContext, useContext, useState } from 'react'

const translations = {
  en: {
    // Navbar
    main: 'Main',
    testing: 'Testing',
    newCase: 'New Case',
    preQueryQuotation: 'Pre Query Quotation',
    login: 'Login',
    signUp: 'Sign Up',
    langButtonLabel: '中文',
    langName: 'English',
    // Page
    verifyTestingReport: 'Verify Testing Report',
    abstractOfTestingReport: 'Abstract of Testing Report',
    reportNo: 'Report No.',
    testReportStatus: 'Test report status',
    reportTitle: 'Report Title',
    version: 'Version',
    dateOfIssue: 'Date of Issue',
    dateOfReceipt: 'Date of Receipt',
    item: 'Item',
    quantity: 'Quantity',
    testResults: 'Test Results',
    testResultsText: 'Initial pressure drop：112.2 Pa　Dust holding capacity：1256.4 g　ISO class：ISO T9',
    testResultsNote: 'This test report has a lot of information. If you need to confirm the data, please contact the Textile Institute by e.mail.',
    // Footer
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    deptName: 'Department Of Testing And Certification',
    contactPerson: 'Ms. Yi-Hua Pan',
    testProgressQuery: 'Test Progress Query',
    modifyInformation: 'Modify Information',
    forgetPassword: 'Forget Password',
    address: 'No.6, Chengtian Rd., Tucheng Dist., New Taipei City 23674, Taiwan (R.O.C.)',
    phone: '+886 2-2267-0321 Ext. 7028',
    email: 'yhpan.0276@ttri.org.tw',
    copyright: 'Taiwan Textile Research Institute. All rights Reserved.',
    filter: 'Filter',
  },
  zh: {
    // Navbar
    main: '首頁',
    testing: '測試',
    newCase: '新案件',
    preQueryQuotation: '預先查詢報價',
    login: '登入',
    signUp: '註冊',
    langButtonLabel: 'English',
    langName: '中文',
    // Page
    verifyTestingReport: '驗證試驗報告',
    abstractOfTestingReport: '試驗報告摘要',
    reportNo: '報告編號',
    testReportStatus: '試驗報告狀態',
    reportTitle: '報告名稱',
    version: '版本',
    dateOfIssue: '發行日期',
    dateOfReceipt: '收件日期',
    item: '品項',
    quantity: '數量',
    testResults: '測試結果',
    testResultsText: '初始壓降：112.2 Pa　容塵量：1256.4 g　ISO等級：ISO T9',
    testResultsNote: '此測試報告包含大量資訊。如需確認數據，請透過電子郵件聯繫紡織研究院。',
    // Footer
    quickLinks: '快速連結',
    contactUs: '聯絡我們',
    deptName: '測試與認證部門',
    contactPerson: '潘怡華 女士',
    testProgressQuery: '測試進度查詢',
    modifyInformation: '修改資料',
    forgetPassword: '忘記密碼',
    address: '新北市土城區承天路6號，郵遞區號23674，台灣（中華民國）',
    phone: '+886 2-2267-0321 分機 7028',
    email: 'yhpan.0276@ttri.org.tw',
    copyright: '財團法人紡織產業綜合研究所 版權所有',
    filter: '過濾器',
  }
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en')

  const t = (key) => translations[lang][key] || key

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
