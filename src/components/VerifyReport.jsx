import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function VerifyReport() {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <main className="min-h-screen no-scrollbar py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-1">
          {t("verifyTestingReport")}
        </h1>
        <hr className="border-gray-200 mb-6 w-3xl " />

        {/* Language Toggle Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={toggleLang}
            className="bg-ttri-blue hover:bg-white border hover:border-ttri-blue hover:text-ttri-blue text-white font-semibold px-8 py-2.5 rounded-sm text-base transition-colors duration-200 shadow-sm min-w-[100px]"
          >
            {t("langButtonLabel")}
          </button>
        </div>

        {/* Report Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 ">
            <h2 className="text-gray-600 font-medium">
              {t("abstractOfTestingReport")}
            </h2>
          </div>

          <div className="p-6 text-gray-700">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              {/* Report No. */}
              <div className="flex items-start gap-4">
                <span className="report-label w-28 flex-shrink-0">
                  {t("reportNo")}
                </span>
                <span className="">
                  TF14100345
                </span>
              </div>

              {/* Test Report Status */}
              <div className="flex items-start gap-4">
                <span className="report-label w-36 flex-shrink-0">
                  {t("testReportStatus")}
                </span>
                <span className=""></span>
              </div>

              {/* Report Title */}
              <div className="flex items-start gap-4">
                <span className="report-label w-28 flex-shrink-0">
                  {t("reportTitle")}
                </span>
                <span className=" font-medium">Shij(CN565)</span>
              </div>

              {/* Version */}
              <div className="flex items-start gap-4">
                <span className="report-label w-36 flex-shrink-0">
                  {t("version")}
                </span>
                <span className=""></span>
              </div>

              {/* Date of Issue */}
              <div className="flex items-start gap-4">
                <span className="report-label w-28 flex-shrink-0">
                  {t("dateOfIssue")}
                </span>
                <span className="">2025/11/25</span>
              </div>

              {/* Date of Receipt */}
              <div className="flex items-start gap-4">
                <span className="report-label w-36 flex-shrink-0">
                  {t("dateOfReceipt")}
                </span>
                <span className="">2025/10/28</span>
              </div>

              {/* Item */}
              <div className="flex items-start gap-4">
                <span className="report-label w-28 flex-shrink-0">
                  {t("item")}
                </span>
                <span className="">{t("filter")}</span>
              </div>

              {/* Quantity */}
              <div className="flex items-start gap-4">
                <span className="report-label w-36 flex-shrink-0">
                  {t("quantity")}
                </span>
                <span className="">1</span>
              </div>
            </div>

            {/* Test Results */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-gray-700 font-semibold mb-3">
                {t("testResults")}
              </h3>
              <p className=" font-medium mb-2">{t("testResultsText")}</p>
              <p className="">{t("testResultsNote")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
