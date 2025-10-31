import ElectionStepsSection  from "../components/ElectionSteps.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Navigation from "../components/Navbar.jsx";
import { BookOpen, CheckCircle, Users } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white w-full" style={{ margin: 0, padding: 0 }}>
  <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Header />
            <Navigation />
          </div>
        </div>
      </div>

  {/* Hero Section - Full width */}
  <div class="bg-gradient-to-b from-white to-blue-50 py-12 px-4 text-center border-b border-gray-100">
  <span class="text-blue-600 text-sm font-semibold uppercase tracking-wider block mb-3">
    Your Guide To
  </span>
  <h1 class="text-4xl font-bold text-gray-900 mb-4">
    Election Process
  </h1>
  <p class="text-gray-600 text-lg max-w-2xl mx-auto">
    What to do before and after voting?
  </p>
</div>

  {/* Election Steps - Full width */}
  <ElectionStepsSection />
  
  <Footer/>
</div>

  );
}
