export interface QuizQuestion {
  id: string
  question: string
  questionNe: string
  options: string[]
  optionsNe: string[]
  correctAnswer: number
  explanation: string
  explanationNe: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "1",
    question: "What is the minimum age requirement to vote in Nepal?",
    questionNe: "नेपालमा मत दिनको लागि न्यूनतम उमेर कति हो?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    optionsNe: ["१६ वर्ष", "१८ वर्ष", "२१ वर्ष", "२५ वर्ष"],
    correctAnswer: 1,
    explanation: "According to Nepali law, citizens must be at least 18 years old to vote.",
    explanationNe: "नेपाली कानून अनुसार, नागरिकले मत दिनको लागि कम से कम १८ वर्ष पूरा गरिसकेको हुनुपर्छ।",
  },
  {
    id: "2",
    question: "Who conducts elections in Nepal?",
    questionNe: "नेपालमा निर्वाचन कसले संचालन गर्छ?",
    options: ["Prime Minister", "Election Commission", "Congress", "Supreme Court"],
    optionsNe: ["प्रधानमन्त्री", "निर्वाचन आयोग", "कांग्रेस", "सर्वोच्च अदालत"],
    correctAnswer: 1,
    explanation: "The Election Commission of Nepal is an independent body responsible for conducting all elections.",
    explanationNe: "नेपालको निर्वाचन आयोग एक स्वतन्त्र निकाय हो जो सबै निर्वाचन संचालन गर्न जिम्मेवार हो।",
  },
  {
    id: "3",
    question: "What document is required to vote in Nepal?",
    questionNe: "नेपालमा मत दिनको लागि कुन कागजपत्र आवश्यक हो?",
    options: ["Passport", "Driving License", "Voter ID", "Bank Statement"],
    optionsNe: ["पासपोर्ट", "चलाइबस रक्षा पत्र", "मतदाता पहिचान पत्र", "बैंक विवरण"],
    correctAnswer: 2,
    explanation: "A voter ID card, national ID, or passport is required to vote in Nepal.",
    explanationNe: "नेपालमा मत दिनको लागि मतदाता पहिचान पत्र, राष्ट्रिय पहिचान पत्र वा पासपोर्ट आवश्यक हो।",
  },
  {
    id: "4",
    question: "How often are general elections held in Nepal?",
    questionNe: "नेपालमा साधारण निर्वाचन कति वर्षमा अनिवार्य हुन्छ?",
    options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
    optionsNe: ["प्रत्येक २ वर्षमा", "प्रत्येक ३ वर्षमा", "प्रत्येक ४ वर्षमा", "प्रत्येक ५ वर्षमा"],
    correctAnswer: 3,
    explanation: "General elections in Nepal are held every 5 years.",
    explanationNe: "नेपालमा साधारण निर्वाचन प्रत्येक ५ वर्षमा आयोजित हुन्छ।",
  },
  {
    id: "5",
    question: "What is the purpose of voting?",
    questionNe: "मत दिनको उद्देश्य के हो?",
    options: [
      "To entertain yourself",
      "To elect representatives who will make decisions on your behalf",
      "To get a holiday",
      "To meet new people",
    ],
    optionsNe: ["आपनलाई मनोरञ्जन गर्न", "आपनो तर्फबाट निर्णय गर्ने प्रतिनिधि चुन्न", "छुट्टी पाउन", "नयाँ मानिसहरुसँग भेट्न"],
    correctAnswer: 1,
    explanation: "Voting is a fundamental right that allows citizens to choose their representatives in government.",
    explanationNe: "मत दिनु एक मौलिक अधिकार हो जो नागरिकलाई सरकारमा उनका प्रतिनिधि छान्न अनुमति दिन्छ।",
  },
  {
    id: "6",
    question: "What happens if you vote for the wrong candidate by mistake?",
    questionNe: "यदि तपाईले गलतबाट गलत उम्मेदवारलाई मत दिनुभयो भने के हुन्छ?",
    options: ["Your vote is still counted", "You can request a new ballot", "Your vote is discarded", "You are fined"],
    optionsNe: ["आपनको मत अझै गनिन्छ", "तपाईले नयाँ मतपत्र माग्न सक्नुहुन्छ", "आपनको मत खारेज गरिन्छ", "तपाईलाई जरिवाना गरिन्छ"],
    correctAnswer: 1,
    explanation:
      "If you make a mistake while marking your ballot, you can request a replacement ballot from the polling station officials.",
    explanationNe:
      "यदि तपाईले आपनो मतपत्र चिन्हित गर्दा गलती गर्नुभयो भने, तपाईले मतदान केन्द्रका अधिकारीहरुबाट प्रतिस्थापन मतपत्र माग्न सक्नुहुन्छ।",
  },
  {
    id: "7",
    question: "Is voting mandatory in Nepal?",
    questionNe: "नेपालमा मत दिनु अनिवार्य हो?",
    options: ["Yes, voting is mandatory", "No, voting is optional", "Only for government employees", "Only for men"],
    optionsNe: ["हो, मत दिनु अनिवार्य हो", "होइन, मत दिनु ऐच्छिक हो", "केवल सरकारी कर्मचारीहरुको लागि", "केवल पुरुषहरुको लागि"],
    correctAnswer: 1,
    explanation:
      "Voting in Nepal is not mandatory. It is a right and responsibility of every citizen, but not legally required.",
    explanationNe: "नेपालमा मत दिनु अनिवार्य छैन। यो प्रत्येक नागरिकको अधिकार र जिम्मेवारी हो, तर कानुनी रूपमा आवश्यक छैन।",
  },
  {
    id: "8",
    question: "What should you bring to the polling station?",
    questionNe: "तपाईले मतदान केन्द्रमा के ल्याउनुपर्छ?",
    options: ["Your phone", "A valid ID", "Money", "A friend"],
    optionsNe: ["आपनको फोन", "वैध पहिचान पत्र", "पैसा", "एक साथी"],
    correctAnswer: 1,
    explanation: "You must bring a valid form of identification such as a voter ID, national ID, or passport.",
    explanationNe: "तपाईले मतदाता पहिचान पत्र, राष्ट्रिय पहिचान पत्र वा पासपोर्ट जस्तो वैध पहिचान पत्र ल्याउनु हुँदछ।",
  },
  {
    id: "9",
    question: "What is voter registration?",
    questionNe: "मतदाता दर्ता के हो?",
    options: [
      "A process to register your house",
      "A process to officially record your eligibility to vote",
      "A process to get a job",
      "A process to get a loan",
    ],
    optionsNe: [
      "आपनको घर दर्ता गर्ने प्रक्रिया",
      "आपनो मत दिनको लागि योग्यता आधिकारिक रूपमा रिकर्ड गर्ने प्रक्रिया",
      "काम पाउने प्रक्रिया",
      "ऋण पाउने प्रक्रिया",
    ],
    correctAnswer: 1,
    explanation:
      "Voter registration is a process where eligible citizens register themselves to be able to vote in elections.",
    explanationNe: "मतदाता दर्ता एक प्रक्रिया हो जहाँ योग्य नागरिकले निर्वाचनमा मत दिन सक्षम हुनको लागि आपनलाई दर्ता गराउँछन्।",
  },
  {
    id: "10",
    question: "Can you vote if you are not registered?",
    questionNe: "यदि तपाई दर्ता नगरिसकेको हुनुहुन्छ भने तपाई मत दिन सक्नुहुन्छ?",
    options: ["Yes, anyone can vote", "No, you must be registered first", "Yes, but you pay a fee", "No, never"],
    optionsNe: [
      "हो, कोई पनि मत दिन सक्छ",
      "होइन, तपाईले पहिले दर्ता गराउनु हुँदछ",
      "हो, तर तपाईले शुल्क तिर्नु हुँदछ",
      "होइन, कहिले पनि होइन",
    ],
    correctAnswer: 1,
    explanation: "You must be registered as a voter before you can cast your vote in an election.",
    explanationNe: "तपाई निर्वाचनमा मत दिन सक्नु अघि मतदातामा दर्ता हुनु हुँदछ।",
  },
]
