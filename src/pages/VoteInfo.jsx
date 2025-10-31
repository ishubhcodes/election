import { Shield, FileCheck, Calendar, MapPin } from "lucide-react";

export default function VoteInfo() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 text-left">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">
            Practice Voting in the Ballot Paper
          </h1>
          <p className="text-gray-600 text-base font-normal">
            Your complete guide to casting your ballot and making your voice heard.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* Ballot Paper Description */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-gray-700" />
              <h2 className="text-lg font-medium text-gray-800">Ballot Paper Description</h2>
            </div>
            <p className="text-gray-700 text-base font-normal mb-2">Ballot Paper consists of:</p>
            <ul className="list-disc list-inside text-base text-gray-700 font-normal space-y-1">
              <li>The column represents the post to be allocated to the party.</li>
              <li>The row represents the political party.</li>
              <li>Fold the ballot paper carefully.</li>
            </ul>
          </div>

          {/* Fill Instruction */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-gray-700" />
              <h2 className="text-lg font-medium text-gray-800">Fill the Ballot Paper</h2>
            </div>
            <p className="text-gray-700 text-base font-normal">
              Take the stamp from the side and click inside the cell where you want to cast your vote.
            </p>
          </div>

          {/* Errors */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-gray-700" />
              <h2 className="text-lg font-medium text-gray-800">Errors to Avoid</h2>
            </div>
            <p className="text-gray-700 text-base font-normal mb-2">
              Failing to follow these rules may result in an invalid vote:
            </p>
            <ul className="list-disc list-inside text-base text-gray-700 font-normal space-y-1">
              <li>Ensure the stamp stays fully inside the chosen cell.</li>
              <li>Do not overlap the stamp across multiple cells.</li>
              <li>Only select one cell per column.</li>
            </ul>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-red-700 text-white text-center py-4 rounded-lg text-base font-medium hover:bg-red-800 transition-colors">
          Practice Voting
        </button>
      </div>
    </div>
  );
}
