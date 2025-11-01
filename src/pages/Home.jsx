import React from "react";
import { Link } from "react-router-dom";
import nepal from "../assets/nepal.jpg";
import { CheckCircle, Users, BookOpen } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const stats = [
    {
      icon: CheckCircle,
      value: "12,450+",
      label: "Invalid Votes Prevented"
    },
    {
      icon: Users,
      value: "28,900",
      label: "Citizens Educated"
    },
    {
      icon: BookOpen,
      value: "3500",
      label: "Quiz Completions"
    }
  ];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center text-white py-24 px-6 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${nepal})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Voice, Your Vote: Get Ready for 2026
        </h1>
        <p className="max-w-2xl text-lg mb-8">
          Find everything you need to know about candidates, voting procedures, and key election dates.
        </p>
        <Link to="/steps">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
            Get Started
          </button>
        </Link>
      </section>

          <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Why Digital Literacy Matters</h2>
              <p className="text-black-600 text-muted-foreground mb-6">
                In Nepal's democratic journey, informed citizens are the foundation of fair elections. Digital literacy
                helps voters understand the voting process, identify candidates, and make informed decisions.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>Reduce invalid votes through proper education</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>Empower all citizens regardless of age</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>Strengthen democratic participation</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted rounded-lg p-8 flex items-center justify-center min-h-80">
              <div className="text-center">
                <div className="text-5xl mb-4">🗳️</div>
                <p className="text-muted-foreground">Voting is your right, your voice, your responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">Our Impact</h2>
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

  {/* Key Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Key Information</h2>
          <p className="text-gray-600 mb-12">
            Stay informed and prepared for the upcoming election.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-8">
              <div className="text-blue-600 mb-4 text-4xl">💡</div>
              <h3 className="text-xl font-semibold mb-2">Candidates Information</h3>
              <p className="text-gray-600 mb-4">
                The details regarding candidates who are standing in the elections.
              </p>
              <Link to="/candidates" className="text-blue-600 font-medium hover:underline">
                View Candidates
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-8">
              <div className="text-blue-600 mb-4 text-4xl">📰</div>
              <h3 className="text-xl font-semibold mb-2">Rules</h3>
              <p className="text-gray-600 mb-4">
                Stay informed with the rules and regulations of the election voting system.
              </p>
              <Link to="/rules" className="text-blue-600 font-medium hover:underline">
                Read Rules
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-8">
              <div className="text-blue-600 mb-4 text-4xl">📍</div>
              <h3 className="text-xl font-semibold mb-2">Practice Voting</h3>
              <p className="text-gray-600 mb-4">
                Use our sample ballot paper to simulate real world election system.
              </p>
              <Link to="/demo" className="text-blue-600 font-medium hover:underline">
                Practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold mb-4">NepalVotes</h3>
              <p className="text-sm opacity-90">
                Empowering citizens through digital literacy and election awareness.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/steps" className="hover:underline">
                    Election Steps
                  </Link>
                </li>
                <li>
                  <Link to="/demo" className="hover:underline">
                    Practice
                  </Link>
                </li>
                <li>
                  <Link to="/voteinfo" className="hover:underline">
                    Vote Info
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/candidates" className="hover:underline">
                    Candidates
                  </Link>
                </li>
                <li>
                  <Link to="/rules" className="hover:underline">
                    Rules
                  </Link>
                </li>
                <li>
                  <a href="mailto:info@smartvote.np" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-center opacity-90">
              &copy; {currentYear} NepalVotes. All rights reserved. Designed for civic awareness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}