import Navigation from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";
import React from "react";
import nepal from "../assets/nepal.jpg"
import { Link } from "react-router-dom";
export default function Home() {
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
          Your Voice, Your Vote: Get Ready for 2024
        </h1>
        <p className="max-w-2xl text-lg mb-8">
          Find everything you need to know about candidates, voting procedures, and key election dates.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
          Get Started
        </button>
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
              <Link to='/candidate' className="text-blue-600 font-medium hover:underline">View Candidates</Link>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-8">
              <div className="text-blue-600 mb-4 text-4xl">📰</div>
              <h3 className="text-xl font-semibold mb-2">Rules</h3>
              <p className="text-gray-600 mb-4">
               Stay informed with the rules and regulations of the election voting system.
              </p>
              <Link to='/rules' className="text-blue-600 font-medium hover:underline">Read Rules</Link>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-8">
              <div className="text-blue-600 mb-4 text-4xl">📍</div>
              <h3 className="text-xl font-semibold mb-2">Practice Voting</h3>
              <p className="text-gray-600 mb-4">
                Use our sample ballot paper to simulate real world election system.
              </p>
              <Link to="/VoteInfo" className="text-blue-600 font-medium hover:underline">Practice</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 text-center text-sm text-gray-600">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <p>© 2024 Election Commission. All Rights Reserved. This is a non-partisan resource.</p>
      </footer>
    </div>
  );
}
