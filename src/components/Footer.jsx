import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/language-context'; // your language context hook
import { Link } from "react-router-dom";

export default function Footer() {
    return(
      <footer className="bg-gray-900 text-white ">
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
              &copy; 2025 NepalVotes. All rights reserved. Designed for civic awareness.
            </p>
          </div>
        </div>
      </footer>
    );
}