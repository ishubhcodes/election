import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Candidate = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState('all');
  const [expandedAgenda, setExpandedAgenda] = useState(null);

  const candidates = [
    {
      id: 1,
      name: 'Olivia Chen',
      party: 'Nepali Congress',
      partyColor: 'text-blue-600',
      district: 'Bagmat Provincei',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      agenda: ['Economic reform and job creation', 'Environmental sustainability initiatives', 'Education system modernization']
    },
    {
      id: 2,
      name: 'Ben Carter',
      party: 'Rastriya Prajatantra Party',
      partyColor: 'text-red-600',
      district: 'Bagmati Province',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      agenda: ['Healthcare access for all citizens', 'Infrastructure development', 'Small business support programs']
    },
    {
      id: 3,
      name: 'Isabella Rodriguez',
      party: 'CPN-UML',
      partyColor: 'text-gray-600',
      district: 'North District',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
      agenda: ['Transparent governance', 'Community-led development', 'Digital innovation']
    },
    {
      id: 4,
      name: 'Marcus Thompson',
      party: 'CPN-UML',
      partyColor: 'text-blue-600',
      district: 'Sudarpaschim',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      agenda: ['Public transportation expansion', 'Affordable housing initiatives', 'Youth employment programs']
    },
    {
      id: 5,
      name: 'Sarah Kim',
      party: 'Maoist',
      partyColor: 'text-red-600',
      district: 'Gandaki Province',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      agenda: ['Climate action policy', 'Mental health services', 'Technology sector growth']
    },
    {
      id: 6,
      name: 'James Mitchell',
      party: 'CPN-UML',
      partyColor: 'text-gray-600',
      district: 'Madhesh Province',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      agenda: ['Local business revitalization', 'Parks and recreation funding', 'Senior citizen programs']
    },
    {
      id: 7,
      name: 'Emily Zhang',
      party: 'Nepali Congress',
      partyColor: 'text-blue-600',
      district: 'Bagmati Province',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
      agenda: ['Arts and culture funding', 'Public safety reform', 'Green energy transition']
    },
    {
      id: 8,
      name: 'David Okonkwo',
      party: 'Rastriya Swatantra Party',
      partyColor: 'text-red-600',
      district: 'Karnali Province',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
      agenda: ['Immigration reform', 'Trade policy development', 'Veterans support services']
    },
    {
      id: 9,
      name: 'Rachel Foster',
      party: 'CPN-UML',
      partyColor: 'text-blue-600',
      district: 'Koshi Province',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
      agenda: ['Education technology integration', 'Community safety programs', 'Economic diversity']
    }
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesConstituency = selectedConstituency === 'all' || candidate.district.toLowerCase().includes(selectedConstituency.toLowerCase());
    return matchesSearch && matchesConstituency;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="text-sm text-gray-500 mb-2">Home / Candidates</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Meet Your Candidates</h1>
          <p className="text-gray-600">Filter by constituency or search by name to learn more about who is running.</p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filter */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Filter Candidates</h2>
                  <p className="text-sm text-gray-500">Refine your search</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Constituency</label>
                <select
                  value={selectedConstituency}
                  onChange={(e) => setSelectedConstituency(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                >
                  <option value="all">All Constituencies</option>
                  <option value="north">North District</option>
                  <option value="south">South District</option>
                  <option value="east">East District</option>
                  <option value="west">West District</option>
                  <option value="central">Central District</option>
                </select>
              </div>

              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedConstituency('all');
                }}
                className="w-full py-3 bg-red-700 text-white rounded-lg font-medium hover:bg-red-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Main Content - Grid Layout */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCandidates.map((candidate) => (
                <div key={candidate.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="p-6 text-center">
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                    />
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{candidate.name}</h3>
                    <p className={`text-base font-medium ${candidate.partyColor} mb-1`}>{candidate.party}</p>
                    <p className="text-gray-500 text-sm mb-4">{candidate.district}</p>

                    <button
                      onClick={() => setExpandedAgenda(expandedAgenda === candidate.id ? null : candidate.id)}
                      className="flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 mx-auto mb-3"
                    >
                      <span className="font-medium text-sm">Candidate's Agenda</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedAgenda === candidate.id ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedAgenda === candidate.id && (
                      <div className="mb-4 text-left">
                        <ul className="space-y-2 text-sm">
                          {candidate.agenda.map((item, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start">
                              <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <button className="w-full py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}

              {filteredCandidates.length === 0 && (
                <div className="col-span-full bg-white rounded-lg p-12 text-center">
                  <p className="text-gray-500 text-lg">No candidates found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
