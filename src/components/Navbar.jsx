import { Users, BookOpen, CheckCircle, User, Menu, X, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/language-context'; // your language context hook

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  // language context for toggle
  const { language, setLanguage } = useLanguage();

 const navItems = [
    { icon: Users, label: t("nav.candidates"), path: "/candidates" },
    { icon: BookOpen, label: t("nav.rules"), path: "/rules" },
    { icon: CheckCircle, label: t("nav.steps"), path: "/steps" },
    { icon: User, label: t("nav.practice"), path: "/voteinfo" },
    { icon: ClipboardCheck, label: t("nav.quiz"), path: "/quiz" },
  ];


  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  // Tailwind classes for active and inactive toggle buttons
  const baseBtnClasses =
    "w-12 px-2 py-1 rounded-md border text-sm font-semibold transition-colors";
  const activeBtnClasses = "bg-blue-600 border-blue-600 text-white";
  const inactiveBtnClasses = "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100";

  return (
    <>
      {/* Desktop Navigation + Language Toggle */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
                  isActive
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-300'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Language Toggle Buttons */}
        <div className="flex gap-2 ml-auto">
          <button
            onClick={() => setLanguage("en")}
            className={`${baseBtnClasses} ${
              language === "en" ? activeBtnClasses : inactiveBtnClasses
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ne")}
            className={`${baseBtnClasses} ${
              language === "ne" ? activeBtnClasses : inactiveBtnClasses
            }`}
            aria-label="Switch to Nepali"
          >
            NE
          </button>
        </div>
      </div>

      {/* Mobile Navigation + Language Toggle + Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4">
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage("en")}
            className={`${baseBtnClasses} ${
              language === "en" ? activeBtnClasses : inactiveBtnClasses
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("ne")}
            className={`${baseBtnClasses} ${
              language === "ne" ? activeBtnClasses : inactiveBtnClasses
            }`}
            aria-label="Switch to Nepali"
          >
            NE
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute right-4 top-16 bg-white shadow-lg rounded-lg p-4 space-y-1 z-50 md:hidden">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
