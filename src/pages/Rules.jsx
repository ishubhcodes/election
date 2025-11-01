import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Navigation from "../components/Navbar.jsx";
import { useLanguage } from "../context/language-context";

export default function ElectionRules() {
  const [openFaq, setOpenFaq] = useState(null);
  const { t } = useLanguage();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: t("rules.faq.q1"),
      answer: t("rules.faq.a1"),
    },
    {
      question: t("rules.faq.q2"),
      answer: t("rules.faq.a2"),
    },
    {
      question: t("rules.faq.q3"),
      answer: t("rules.faq.a3"),
    },
    {
      question: t("rules.faq.q4"),
      answer: t("rules.faq.a4"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="mb-12">

        {/* Main Content */}
        <main className="bg-gradient-to-b from-blue-50 to-white">

          {/* Header Section */}
          <div className="bg-gradient-to-b from-white to-blue-50 text-center mb-12 pt-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider block mb-3">
              {t("rules.guideTag")}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t("rules.title")}
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t("rules.subtitle")}
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 px-12">

            {/* Who Can Vote */}
            <div className="bg-blue-50 rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {t("rules.whoCanVote.title")}
              </h2>
              <div className="space-y-4">

                {[ 
                  t("rules.whoCanVote.point1"),
                  t("rules.whoCanVote.point2"),
                  t("rules.whoCanVote.point3"),
                  t("rules.whoCanVote.point4")
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}

              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-green-45 rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {t("rules.dates.title")}
              </h2>
              <div className="space-y-6">

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {t("rules.dates.registration")}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {t("rules.dates.registration.value")}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {t("rules.dates.early")}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {t("rules.dates.early.value")}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {t("rules.dates.election")}
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {t("rules.dates.election.value")}
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 py-8 px-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {t("rules.faq.title")}
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-4 text-left hover:text-blue-600 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </main>

        {/* Help Button */}
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors flex items-center justify-center mb-12">
          <span className="text-xl">?</span>
        </button>
      </div>

      <Footer />
    </div>
  );
}
