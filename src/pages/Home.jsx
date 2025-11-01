import React from "react";
import { Link } from "react-router-dom";
import nepal from "../assets/nepal.jpg";
import { CheckCircle, Users, BookOpen } from "lucide-react";
import { useLanguage } from "../context/language-context";

export default function Home() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear();
  console.log(language)
  const stats = [
    {
      icon: CheckCircle,
      value: language === "en" ? "12450+" : "१२४५०+",
      label: language === "en" ? "Invalid Votes Prevent" : "अवैध भोट रोकिने",
    },
    {
      icon: Users,
      value: language === "en" ? "2800+" : "२८००+",
      label: language === "en" ? "Educate Citizens" : "नागरिक शिक्षित",
    },
    {
      icon: BookOpen,
      value: language === "en" ? "2000+" : "२०००+",
      label: language === "en" ? "Quiz Completions" : "क्विज पूरा गर्ने",
    },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-blur bg-black/40 bg-center text-white py-24 px-6 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${nepal})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("home.hero.title")}</h1>
        <p className="max-w-2xl text-lg mb-8">{t("home.hero.desc")}</p>
        <Link to="/steps">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
            {t("home.hero.cta")}
          </button>
        </Link>
      </section>

      {/* Key Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">{t("home.keyInfo.title")}</h2>
          <p className="text-gray-600 mb-12">{t("home.keyInfo.desc")}</p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-8">
              <div className="text-blue-600 mb-4 text-4xl">💡</div>
              <h3 className="text-xl font-semibold mb-2">{t("home.card.candidates.title")}</h3>
              <p className="text-gray-600 mb-4">{t("home.card.candidates.desc")}</p>
              <Link to="/candidates" className="text-blue-600 font-medium hover:underline">
                {t("home.card.candidates.cta")}
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-8">
              <div className="text-blue-600 mb-4 text-4xl">📰</div>
              <h3 className="text-xl font-semibold mb-2">{t("home.card.rules.title")}</h3>
              <p className="text-gray-600 mb-4">{t("home.card.rules.desc")}</p>
              <Link to="/rules" className="text-blue-600 font-medium hover:underline">
                {t("home.card.rules.cta")}
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-8">
              <div className="text-blue-600 mb-4 text-4xl">📍</div>
              <h3 className="text-xl font-semibold mb-2">{t("home.card.practice.title")}</h3>
              <p className="text-gray-600 mb-4">{t("home.card.practice.desc")}</p>
              <Link to="/demo" className="text-blue-600 font-medium hover:underline">
                {t("home.card.practice.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>


          <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">{t("home.digitalLit.title")}</h2>
              <p className="text-black-600 text-muted-foreground mb-6">{t("home.digitalLit.desc")}</p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>{t("home.digitalLit.point1")}</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>{t("home.digitalLit.point2")}</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>{t("home.digitalLit.point3")}</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-8 flex items-center justify-center min-h-80">
              <div className="text-center">
                <div className="text-5xl mb-4">🗳️</div>
                <p className="text-muted-foreground">{t("home.digitalLit.rights")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">{t("home.impact.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className="bg-white rounded-3xl p-12 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon className="w-16 h-16 text-green-700 mx-auto mb-6 stroke-[2.5]" />
                  <p className="text-3xl font-bold mb-3 text-gray-900">{stat.value}</p>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}