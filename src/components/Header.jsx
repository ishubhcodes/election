import { Vote } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Brand Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <Vote className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-lg font-semibold text-blue-900">
                Election Learning Center
              </h1>
              <p className="text-sm text-gray-600">
                Learn how democracy works
              </p>
            </div>
          </div>

          {/* Navigation */}
          <Navbar />
        </div>
      </div>
    </div>
  );
}