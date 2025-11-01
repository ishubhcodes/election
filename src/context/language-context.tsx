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
    "steps.hero.tag": "Your Guide To",
    "steps.hero.title": "Election Process",
    "steps.hero.subtitle": "What to do before and after voting?",
    "steps.beforeElection": "Before Election Day",
    "steps.afterElection": "After Election Day",

    // --- Pre-election steps ---
    "steps.pre.1.title": "Register to Vote",
    "steps.pre.1.desc": "Complete your voter registration at least 30 days before the election. Click here to register.",
    "steps.pre.2.title": "Research Candidates",
    "steps.pre.2.desc": "Learn about each candidate's agenda, platform, experience, and positions on issues.",
    "steps.pre.3.title": "Know Your Polling Location",
    "steps.pre.3.desc": "Find out where you can vote - check for early voting options with voting starting at 7am and ending at 5pm.",
    "steps.pre.4.title": "Prepare Required Documents",
    "steps.pre.4.desc": "Gather your voter ID and/or citizenship ahead of time.",

    // --- Post-election steps ---
    "steps.post.1.title": "Vote Counting Begins",
    "steps.post.1.desc": "Polls close and election officials begin counting ballots from all sources.",
    "steps.post.2.title": "Initial Results Published",
    "steps.post.2.desc": "Preliminary results are shared, though not all votes may be counted yet.",
    "steps.post.3.title": "Official Certification",
    "steps.post.3.desc": "Election results are officially verified and certified by election authorities.",
    "steps.post.4.title": "Winners Take Office",
    "steps.post.4.desc": "Elected officials are sworn in and begin their terms in office.",


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
    "quiz.submit": "Submit Answer",


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

        // Vote Info
    "voteInfo.title": "Practice Voting in the Ballot Paper",
    "voteInfo.subtitle": "Your complete guide to casting your ballot and making your voice heard.",

    "voteInfo.section.ballot": "Ballot Paper Description",
    "voteInfo.ballot.desc": "Ballot Paper consists of:",
    "voteInfo.ballot.point1": "The column represents the post to be allocated to the party.",
    "voteInfo.ballot.point2": "The row represents the political party.",
    "voteInfo.ballot.point3": "Fold the ballot paper carefully.",

    "voteInfo.section.fill": "Fill the Ballot Paper",
    "voteInfo.fill.desc": "Take the stamp from the side and click inside the cell where you want to cast your vote.",

    "voteInfo.section.errors": "Errors to Avoid",
    "voteInfo.errors.desc": "Failing to follow these rules may result in an invalid vote:",
    "voteInfo.errors.point1": "Ensure the stamp stays fully inside the chosen cell.",
    "voteInfo.errors.point2": "Do not overlap the stamp across multiple cells.",
    "voteInfo.errors.point3": "Only select one cell per column.",

    "voteInfo.practiceButton": "Practice Voting",

    // Election Rules Page
"rules.title": "Election Guidelines",
"rules.subtitle": "Understand the basic rules and requirements for voting",
"rules.guideTag": "Your Guide To",

"rules.whoCanVote.title": "Who Can Vote?",
"rules.whoCanVote.point1": "Must be 18 years or older on election day",
"rules.whoCanVote.point2": "Must be a citizen of the country",
"rules.whoCanVote.point3": "Must be registered to vote in your district",
"rules.whoCanVote.point4": "Must have a valid form of identification",

"rules.dates.title": "Important Dates",
"rules.dates.registration": "Voter Registration Deadline",
"rules.dates.early": "Early Voting Period",
"rules.dates.election": "Election Day",
"rules.dates.registration.value": "November 16, 2025",
"rules.dates.early.value": "To be determined",
"rules.dates.election.value": "March 5, 2026",

"rules.faq.title": "Frequently Asked Questions",
"rules.faq.q1": "What do I need to bring to vote?",
"rules.faq.a1": "You must bring your voter id along with a valid form of identification such as a driver's license, passport, state ID card, or other government-issued ID.",

"rules.faq.q2": "Can I vote by mail?",
"rules.faq.a2": "No, currently you can only vote physically. Visit the nearest polling station to cast your vote.",

"rules.faq.q3": "Where do I vote?",
"rules.faq.a3": "Your polling location is based on your registered address. Check your official election office website for details.",

"rules.faq.q4": "What if I make a mistake on my ballot?",
"rules.faq.a4": "Ask a poll worker for a new ballot. Do not try to correct mistakes yourself.",

"rules.help": "Help",


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
    "steps.hero.tag": "तपाईंको मार्गदर्शक",
    "steps.hero.title": "मतदान प्रक्रिया",
    "steps.hero.subtitle": "मतदान अघि र पछि के गर्ने?",
    "steps.pre.1.title": "मतदाता दर्ता गर्नुहोस्",
    "steps.beforeElection": "निर्वाचन अघि",
    "steps.afterElection": "निर्वाचन पछि",
    "steps.pre.1.desc": "निर्वाचन मितिभन्दा कम्तिमा ३० दिन अघि आफ्नो मतदाता दर्ता पूरा गर्नुहोस्। दर्ता गर्न यहाँ क्लिक गर्नुहोस्।",
    "steps.pre.2.title": "उम्मेदवारहरूको अध्ययन गर्नुहोस्",
    "steps.pre.2.desc": "प्रत्येक उम्मेदवारको एजेन्डा, योजना, अनुभव र मुद्दाहरूमा उनीहरूको धारणा बुझ्नुहोस्।",
    "steps.pre.3.title": "मतदान स्थल जान्नुहोस्",
    "steps.pre.3.desc": "तपाईंले कहाँ मतदान गर्न सक्नुहुन्छ थाहा पाउनुहोस् - बिहान ७ बजेदेखि बेलुकी ५ बजेसम्मको प्रारम्भिक मतदान विकल्प पनि जाँच गर्नुहोस्।",
    "steps.pre.4.title": "आवश्यक कागजात तयारी गर्नुहोस्",
    "steps.pre.4.desc": "आफ्नो नागरिकता वा मतदाता परिचयपत्र पहिले नै संकलन गर्नुहोस्।",

    // --- Post-election steps ---
    "steps.post.1.title": "मतगणना सुरु हुन्छ",
    "steps.post.1.desc": "मतदान समाप्त भएपछि निर्वाचन अधिकृतहरूले सबै स्रोतबाट मतपत्रहरू गणना गर्न सुरु गर्छन्।",
    "steps.post.2.title": "प्रारम्भिक नतिजा प्रकाशित",
    "steps.post.2.desc": "प्रारम्भिक नतिजा साझा गरिन्छ, यद्यपि सबै मतहरू गणना भइसकेको नहुन सक्छ।",
    "steps.post.3.title": "औपचारिक प्रमाणिकरण",
    "steps.post.3.desc": "निर्वाचन नतिजा आधिकारिक रूपमा प्रमाणीकरण र प्रमाणित गरिन्छ।",
    "steps.post.4.title": "विजेताहरूले पदभार ग्रहण गर्छन्",
    "steps.post.4.desc": "निर्वाचित अधिकारीहरूले पद ग्रहण गरी आफ्नो कार्यकाल सुरु गर्छन्।",

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
    "quiz.submit": "पेश गर्नुहोस्",

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

        // Vote Info
    "voteInfo.title": "मतपत्रमा अभ्यास मतदान",
    "voteInfo.subtitle": "आपको मत कसरी दिनु, र आफ्नो आवाज कसरी सुनिश्चित गर्ने भन्ने पूर्ण मार्गदर्शन।",

    "voteInfo.section.ballot": "मतपत्रको विवरण",
    "voteInfo.ballot.desc": "मतपत्रमा निम्न कुरा हुन्छन्:",
    "voteInfo.ballot.point1": "स्तम्भले पार्टीलाई दिइने पद दर्शाउँछ।",
    "voteInfo.ballot.point2": "पङ्क्तिले राजनीतिक पार्टीलाई दर्शाउँछ।",
    "voteInfo.ballot.point3": "मतपत्र सचेत रूपमा भाँच्चिनुहोस्।",

    "voteInfo.section.fill": "मतपत्र भर्ने तरिका",
    "voteInfo.fill.desc": "बाहिरको तर्फ रहेको छाप लिई आफ्नो चाहेको कोषमा क्लिक गर्नुहोस्।",

    "voteInfo.section.errors": "कुनै गल्ती नगरौं",
    "voteInfo.errors.desc": "यी नियमहरू नमान्दा तपाईँको मत अमान्य हुन सक्छ:",
    "voteInfo.errors.point1": "छाप पूरै चयन गरिएको कोषभित्र मात्र रहनु पर्छ।",
    "voteInfo.errors.point2": "छाप धेरै कोषमा नफैलियोस्।",
    "voteInfo.errors.point3": "प्रत्येक स्तम्भमा केवल एक कोष मात्र चयन गर्नुहोस्।",

    "voteInfo.practiceButton": "अभ्यास मतदान",

    // Election Rules Page
"rules.title": "निर्वाचन मार्गदर्शन",
"rules.subtitle": "मतदानका आधारभूत नियम र आवश्यकताहरू बुझ्नुहोस्",
"rules.guideTag": "तपाईंको मार्गदर्शक",

"rules.whoCanVote.title": "कसले मत दिन सक्छ?",
"rules.whoCanVote.point1": "मतदानको दिन १८ वर्ष वा सोभन्दा माथि हुनु पर्ने",
"rules.whoCanVote.point2": "देशको नागरिक हुनु पर्ने",
"rules.whoCanVote.point3": "आफ्नो क्षेत्रमा मतदाता दर्ता भएको हुनु पर्ने",
"rules.whoCanVote.point4": "मान्य परिचय पत्र हुनु पर्ने",

"rules.dates.title": "महत्वपूर्ण मिति",
"rules.dates.registration": "मतदाता दर्ता गर्ने अन्तिम मिति",
"rules.dates.early": "पहिले मतदान अवधि",
"rules.dates.election": "मतदानको दिन",
"rules.dates.registration.value": "नोभेम्बर १६, २०२५",
"rules.dates.early.value": "निर्धारित हुन बाँकी",
"rules.dates.election.value": "मार्च ५, २०२६",

"rules.faq.title": "धेरै सोधिने प्रश्नहरू",
"rules.faq.q1": "मत दिन के लिए ल्याउनुपर्छ?",
"rules.faq.a1": "मतदाता परिचयपत्र साथमा मान्य सरकारी परिचयपत्र (जस्तै नागरिकता, राहदानी वा सरकारी आईडी) ल्याउनुहोस्।",

"rules.faq.q2": "के म हुलाकमार्फत मत दिन सक्छु?",
"rules.faq.a2": "अहिले हुलाकमार्फत मतदान उपलब्ध छैन। नजिकको मतदान केन्द्रमा गएर मत दिनुहोस्।",

"rules.faq.q3": "म कहाँ मत दिन्छु?",
"rules.faq.a3": "तपाईंको दर्ता ठेगानाको आधारमा मतदान केन्द्र निर्धारण हुन्छ। निर्वाचन कार्यालय वा आधिकारिक वेबसाइटमा हेर्नुहोस्।",

"rules.faq.q4": "यदि मैले मतपत्रमा गल्ती गरें भने?",
"rules.faq.a4": "मतदान कर्मचारीलाई भन्नुहोस् र नयाँ मतपत्र लिनुहोस्। आफैले काटछाँट नगर्नुहोस्।",

"rules.help": "सहायता",


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
