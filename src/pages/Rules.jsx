import { useState } from 'react';
import { Users, BookOpen, CheckCircle, User, ChevronDown } from 'lucide-react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Navigation from "../components/Navbar.jsx";

export default function ElectionRules() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What do I need to bring to vote?",
      answer: "You must bring a valid form of identification such as a driver's license, passport, state ID card, or other government-issued photo ID. Some locations may also accept utility bills or bank statements with your name and address."
    },
    {
      question: "Can I vote by mail?",
      answer: "No, currently you can only vote physically, You can visit your nearby voting poll to vote."
    },
    {
      question: "Where do I vote?",
      answer: "Your voting location (polling place) is determined by your registered address. You can find your assigned polling place by visiting your state's election website or contacting your local election office. The location is typically a school, community center, or government building in your district."
    },
    {
      question: "What if I make a mistake on my ballot?",
      answer: "If you make a mistake on your ballot, don't panic. Ask a poll worker for a replacement ballot. You're typically allowed to spoil your ballot and receive a new one. Never cross out or try to fix errors yourself, as this may invalidate your ballot."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
        <div className="mb-12">
     <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Header />
          <Navigation />
        </div>
      </div>
    </div>

      {/* Main Content */}
      <main className="bg-gradient-to-b from-blue-50 to-white  px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-b from-white to-blue-50 text-center mb-12 pt-12">
            <span class="text-blue-600 text-sm font-semibold uppercase tracking-wider block mb-3">
    Your Guide To
  </span>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Election Guidelines
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Understand the basic rules and requirements for voting
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Who Can Vote Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Who Can Vote?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Must be 18 years or older on election day</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Must be a citizen of the country</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Must be registered to vote in your district</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Must have a valid form of identification</p>
              </div>
            </div>
          </div>

          {/* Important Dates Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Important Dates
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Voter Registration Deadline
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  November 16, 2025
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Early Voting Period
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  To be determined
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Election Day
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  March 5, 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
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
                      openFaq === index ? 'rotate-180' : ''
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
      <Footer/>
    </div>

  );
}
