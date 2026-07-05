import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function VerifyReport() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <main className="min-h-screen no-scrollbar pt-5 pb-10 px-4">
      <div className="max-w-[85%] mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl text-gray-800 mb-1">
          {t("verifyTestingReport")}
        </h1>
        <hr className="border-gray-200 mb-6 mt-2 w-[80%] mx-auto" />

        {/* Language Toggle Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={toggleLang}
            className="bg-[#38A4FF] hover:bg-white border hover:border-[#38A4FF] hover:text-[#38A4FF] text-white font-medium px-8 py-2.5 rounded-[4px] text-base transition-colors duration-200 shadow-sm min-w-[100px]"
          >
            {t("langButtonLabel")}
          </button>
        </div>

        {/* Report Card */}
        <div className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.10)] overflow-hidden">
          <div className="px-6 py-4 ">
            <h2 className="text-gray-500">
              {t("abstractOfTestingReport")}
            </h2>
          </div>

          <div className="py-6 px-12 text-gray-700">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              {/* Report No. */}
              <div className="flex items-start gap-4">
                <span className="report-label w-28 flex-shrink-0">
                  {t("reportNo")}
                </span>
                <span className="report-value">
                  TF14100344
                </span>
              </div>

              {/* Test Report Status */}
              <div className="flex items-start gap-4">
                <span className="report-label w-36 flex-shrink-0">
                  {t("testReportStatus")}
                </span>
                <span className="report-value"></span>
              </div>

              {/* Report Title */}
              <div className="flex items-start gap-4">
                <span className="report-label w-28 flex-shrink-0">
                  {t("reportTitle")}
                </span>
                <span className="report-value">Shij(CN565)</span>
              </div>

              {/* Version */}
              <div className="flex items-start gap-4">
                <span className="report-label w-36 flex-shrink-0">
                  {t("version")}
                </span>
                <span className="report-value"></span>
              </div>

              {/* Date of Issue */}
              <div className="flex items-start gap-4">
                <span className="report-label w-28 flex-shrink-0">
                  {t("dateOfIssue")}
                </span>
                <span className="report-value">2025/11/25</span>
              </div>

              {/* Date of Receipt */}
              <div className="flex items-start gap-4">
                <span className="report-label w-36 flex-shrink-0">
                  {t("dateOfReceipt")}
                </span>
                <span className="report-value">2025/10/28</span>
              </div>

              {/* Item */}
              <div className="flex items-start gap-4">
                <span className="report-label w-28 flex-shrink-0">
                  {t("item")}
                </span>
                <span className="report-value">{t("filter")}</span>
              </div>

              {/* Quantity */}
              <div className="flex items-start gap-4">
                <span className="report-label w-36 flex-shrink-0">
                  {t("quantity")}
                </span>
                <span className="report-value">1</span>
              </div>
            </div>

            {/* Test Results */}
            <div className="mt-8 pt-6 border-t font-light border-gray-100">
              <h3 className="text-gray-700 mb-8">
                {t("testResults")}
              </h3>
              <p className="mb-4">{t("testResultsText")}</p>
              <p className="">{t("testResultsNote")}</p>
            </div>
          </div>
        </div>
        <hr className="border-gray-200 w-full mt-4" />
      </div>
    </main>
  );
}
