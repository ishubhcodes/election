import ElectionStepsSection  from "../components/ElectionSteps.jsx";
import Header from "../components/Header.jsx";
import Navigation from "../components/Navbar.jsx";
import { BookOpen, CheckCircle, Users } from "lucide-react";
import { useLanguage } from "../context/language-context";

export default function App() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white w-full" style={{ margin: 0, padding: 0 }}>
  {/* Hero Section - Full width */}
    <div class="bg-gradient-to-b from-white to-blue-50 py-12 px-4 text-center border-b border-gray-100">
    <span class="text-blue-600 text-sm font-semibold uppercase tracking-wider block mb-3">
      {t("steps.hero.tag")}
    </span>
    <h1 class="text-4xl font-bold text-gray-900 mb-4">
      {t("steps.hero.title")}
    </h1>
    <p class="text-gray-600 text-lg max-w-2xl mx-auto">
      {t("steps.hero.subtitle")}
    </p>
  </div>

  {/* Election Steps - Full width */}
  <ElectionStepsSection />
</div>

  );
}
