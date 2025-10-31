import { CheckCircle, Clock, Vote, BarChart3, Tally5 } from "lucide-react";

const preElectionSteps = [
  {
    number: 1,
    title: "Register to Vote",
    description: "Complete your voter registration at least 30 days before the election. Click here to register",
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Research Candidates",
    description: "Learn about each candidate's agenda, platform, experience, and positions on issues",
    icon: Vote
  },
  {
    number: 3,
    title: "Know Your Polling Location",
    description: "Find out where you can vote - check for early voting options with voting starting at 7am and ending at 5pm",
    icon: Clock
  },
  {
    number: 4,
    title: "Prepare Required Documents",
    description: "Gather your voter ID and/or citizenship ahead of time",
    icon: CheckCircle
  }
];

const postElectionSteps = [
  {
    number: 1,
    title: "Vote Counting Begins",
    description: "Polls close and election officials begin counting ballots from all sources",
    icon: Tally5
  },
  {
    number: 2,
    title: "Initial Results Published",
    description: "Preliminary results are shared, though not all votes may be counted yet",
    icon: BarChart3
  },
  {
    number: 3,
    title: "Official Certification",
    description: "Election results are officially verified and certified by election authorities",
    icon: CheckCircle
  },
  {
    number: 4,
    title: "Winners Take Office",
    description: "Elected officials are sworn in and begin their terms in office",
    icon: Vote
  }
];

export default function ElectionSteps() {
  return (
    <div className="space-y-12 px-4 py-8 max-w-4xl mx-auto">
      {/* Section Header */}
      {/* <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-2">Election Process</h2>
        <p className="text-gray-600">Follow these steps to participate in the democratic process</p>
      </div> */}

      {/* Pre-Election Steps */}
      <div className="bg-blue-50 p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800 mb-5">Before Election Day</h3>
        </div>
        {/* <p className="text-blue-700 mb-4 pl-2 text-left">Steps to take before you vote</p> */}
        <div className="space-y-6">
          {preElectionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700 font-bold">
                    {step.number}
                  </div>
                  {index < preElectionSteps.length - 1 && <div className="w-0.5 h-12 bg-blue-200 my-2" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  </div>
                  <p className="text-gray-600 text-left">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Separator */}
      <hr className="border-t border-gray-300" />

      {/* Post-Election Steps */}
      <div className="bg-green-50 p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-6 h-6 text-green-600" />
          <h3 className="text-lg font-semibold text-green-900 mb-5">After Election Day</h3>
        </div>
        {/* <p className="text-green-700 mb-4 text-left">What happens after votes are cast</p> */}
        <div className="space-y-6">
          {postElectionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-700 font-bold">
                    {step.number}
                  </div>
                  {index < postElectionSteps.length - 1 && <div className="w-0.5 h-12 bg-green-200 my-2" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  </div>
                  <p className="text-gray-600 text-left">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

