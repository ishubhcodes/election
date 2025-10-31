import { Vote } from "lucide-react";

export default function Header() {
return(
<header className="bg-white border-b border-blue-900 shadow-sm">
        <div className=" px-4 py-6">
          <div className="flex items-center gap-3">
            <Vote className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-blue-900">Election Learning Center</h1>
              <p className="text-sm text-gray-600">Learn how democracy works</p>
            </div>
          </div>
        </div>
      </header>
);
}