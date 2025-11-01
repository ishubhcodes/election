import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

export type Language = "en" | "ne"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.election": "Election Steps",
    "nav.candidates": "Candidates",
    "nav.practice": "Practice Election",
    "nav.quiz": "Quiz",
    "nav.about": "About",

    // Home
    "home.title": "SmartVote Nepal",
    "home.subtitle": "Digital Literacy for Elections",
    "home.description":
      "Learn how to vote, understand the voting process, and participate in democracy with confidence.",
    "home.cta": "Get Started",
    "home.stats.voters": "Potential Voters",
    "home.stats.regions": "Regions Covered",
    "home.stats.resources": "Learning Resources",

    // Election Steps
    "steps.title": "How to Vote in Nepal",
    "steps.step1": "Verify Your Registration",
    "steps.step1.desc": "Check if you are registered as a voter. Visit your local election office or check online.",
    "steps.step2": "Get Your Voter ID",
    "steps.step2.desc": "Collect your voter ID card from the designated center on or before election day.",
    "steps.step3": "Locate Your Polling Station",
    "steps.step3.desc":
      "Find the polling station nearest to you. Check the official list provided by the election commission.",
    "steps.step4": "Cast Your Vote",
    "steps.step4.desc":
      "Go to your polling station, verify your identity, and mark your ballot for your chosen candidate.",
    "steps.step5": "Confirm Your Vote",
    "steps.step5.desc": "Drop your ballot in the ballot box. Your vote is now securely cast and counted.",

    // Candidates
    "candidates.title": "Browse Candidates",
    "candidates.search": "Search candidates by name or party...",
    "candidates.filter": "Filter by District",
    "candidates.party": "Party",
    "candidates.district": "District",
    "candidates.platform": "Platform",
    "candidates.all": "All Districts",

    // Practice Election
    "practice.title": "Practice Election",
    "practice.desc": "Get familiar with the voting process by participating in a mock election.",
    "practice.start": "Start Mock Election",
    "practice.selected": "You selected:",
    "practice.submit": "Submit Vote",
    "practice.results": "Election Results",
    "practice.votes": "Total Votes",
    "practice.percentage": "Percentage",

    // Quiz
    "quiz.title": "Election Awareness Quiz",
    "quiz.desc": "Test your knowledge about the election process and voting system.",
    "quiz.question": "Question",
    "quiz.of": "of",
    "quiz.next": "Next",
    "quiz.finish": "Finish Quiz",
    "quiz.result": "Your Score",
    "quiz.retake": "Retake Quiz",
    "quiz.answer": "Your Answer",
    "quiz.correct": "Correct Answer",
    "quiz.explanation": "Explanation",

    // About
    "about.title": "About SmartVote Nepal",
    "about.mission": "Mission",
    "about.mission.desc":
      "To empower Nepali citizens with knowledge about the electoral process and encourage informed participation in democracy.",
    "about.contact": "Contact Us",
    "about.email": "Email",
    "about.phone": "Phone",
    "about.address": "Address",
    "about.message": "Message",
    "about.send": "Send Message",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.back": "Back",
    "common.submit": "Submit",
    "common.cancel": "Cancel",
    "common.yes": "Yes",
    "common.no": "No",
  },
  ne: {
    // Navigation
    "nav.home": "होम",
    "nav.election": "मतदानको चरण",
    "nav.candidates": "उम्मेदवारहरु",
    "nav.practice": "अभ्यास मतदान",
    "nav.quiz": "प्रश्नोत्तरी",
    "nav.about": "बारे",

    // Home
    "home.title": "स्मार्टभोट नेपाल",
    "home.subtitle": "चुनावका लागि डिजिटल साक्षरता",
    "home.description": "कसरी मत दिने, मतदान प्रक्रिया बुझ्नुहोस्, र आत्मविश्वासका साथ लोकतन्त्रमा भाग लिनुहोस्।",
    "home.cta": "सुरु गर्नुहोस्",
    "home.stats.voters": "सम्भावित मतदाता",
    "home.stats.regions": "कभर गरिएको क्षेत्र",
    "home.stats.resources": "शिक्षण संसाधन",

    // Election Steps
    "steps.title": "नेपालमा कसरी मत दिने",
    "steps.step1": "आपनो दर्ता प्रमाणित गर्नुहोस्",
    "steps.step1.desc":
      "जाँच गर्नुहोस् कि आप मतदातको रूपमा दर्ता हुनुभएको छ। आपनो स्थानीय निर्वाचन कार्यालयमा गएर वा अनलाइनमा जाँच गर्नुहोस्।",
    "steps.step2": "आपनो मतदाता पहिचान पत्र प्राप्त गर्नुहोस्",
    "steps.step2.desc": "निर्दिष्ट केन्द्रबाट मतदाता पहिचान पत्र संकलन गर्नुहोस् वा मतदानको दिन पहिले।",
    "steps.step3": "आपनो मतदान केन्द्र खोज्नुहोस्",
    "steps.step3.desc": "आपनो नजिकको मतदान केन्द्र खोज्नुहोस्। निर्वाचन आयोगद्वारा प्रदान गरिएको आधिकारिक सूची जाँच गर्नुहोस्।",
    "steps.step4": "आपनो मत दिनुहोस्",
    "steps.step4.desc": "आपनो मतदान केन्द्रमा जानुहोस्, आपनो पहिचान प्रमाणित गर्नुहोस्, र आपनो पसंदको उम्मेदवारलाई मत दिनुहोस्।",
    "steps.step5": "आपनो मत पुष्टि गर्नुहोस्",
    "steps.step5.desc": "आपनो मतपत्र मत पेटीमा डाल्नुहोस्। आपनो मत अब सुरक्षित रूपमा दिइएको छ र गणना गरिनेछ।",

    // Candidates
    "candidates.title": "उम्मेदवारहरु ब्राउज गर्नुहोस्",
    "candidates.search": "नाम वा पार्टीद्वारा उम्मेदवार खोज्नुहोस्...",
    "candidates.filter": "जिल्लाद्वारा फिल्टर गर्नुहोस्",
    "candidates.party": "पार्टी",
    "candidates.district": "जिल्ला",
    "candidates.platform": "मञ्च",
    "candidates.all": "सबै जिल्ला",

    // Practice Election
    "practice.title": "अभ्यास मतदान",
    "practice.desc": "नकली मतदानमा भाग लिएर मतदान प्रक्रिया सीख्नुहोस्।",
    "practice.start": "नकली मतदान सुरु गर्नुहोस्",
    "practice.selected": "आपनले चयन गर्नुभयो:",
    "practice.submit": "मत पेश गर्नुहोस्",
    "practice.results": "मतदानका परिणाम",
    "practice.votes": "कुल मतहरु",
    "practice.percentage": "प्रतिशत",

    // Quiz
    "quiz.title": "मतदान सचेतना प्रश्नोत्तरी",
    "quiz.desc": "मतदान प्रक्रिया र मतदान प्रणालीको बारेमा आपनको ज्ञान परीक्षा गर्नुहोस्।",
    "quiz.question": "प्रश्न",
    "quiz.of": "को",
    "quiz.next": "अगाडि",
    "quiz.finish": "प्रश्नोत्तरी समाप्त गर्नुहोस्",
    "quiz.result": "आपनको अंक",
    "quiz.retake": "प्रश्नोत्तरी दोहोर्याउनुहोस्",
    "quiz.answer": "आपनको जवाफ",
    "quiz.correct": "सही उत्तर",
    "quiz.explanation": "व्याख्या",

    // About
    "about.title": "स्मार्टभोट नेपालको बारेमा",
    "about.mission": "लक्ष्य",
    "about.mission.desc": "नेपाली नागरिकलाई निर्वाचन प्रक्रियाको ज्ञान प्रदान गरी लोकतन्त्रमा सचेत भागीदारिता प्रोत्साहित गर्नुहोस्।",
    "about.contact": "हामीलाई सम्पर्क गर्नुहोस्",
    "about.email": "ईमेल",
    "about.phone": "फोन",
    "about.address": "पता",
    "about.message": "सन्देश",
    "about.send": "सन्देश पठाउनुहोस्",

    // Common
    "common.loading": "लोड हुदैछ...",
    "common.error": "केहि गलत भयो",
    "common.back": "पछाडि",
    "common.submit": "पेश गर्नुहोस्",
    "common.cancel": "रद्द गर्नुहोस्",
    "common.yes": "हो",
    "common.no": "होइन",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageLang] = useState<Language>("en")

  const t = useCallback(
    (key: string) => {
      return translations[language][key as keyof (typeof translations)[Language]] || key
    },
    [language],
  )

  const setLanguage = useCallback((lang: Language) => {
    setLanguageLang(lang)
    localStorage.setItem("smartvote-language", lang)
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
