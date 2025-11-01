import { CheckCircle, Clock, Vote, BarChart3, Tally5 } from "lucide-react";
import { useLanguage } from "../context/language-context";

export default function ElectionSteps() {
  const { t, language } = useLanguage();

  const preElectionSteps = [
    {
      number: 1,
      title: t("steps.pre.1.title"),
      description: t("steps.pre.1.desc"),
      icon: CheckCircle,
    },
    {
      number: 2,
      title: t("steps.pre.2.title"),
      description: t("steps.pre.2.desc"),
      icon: Vote,
    },
    {
      number: 3,
      title: t("steps.pre.3.title"),
      description: t("steps.pre.3.desc"),
      icon: Clock,
    },
    {
      number: 4,
      title: t("steps.pre.4.title"),
      description: t("steps.pre.4.desc"),
      icon: CheckCircle,
    },
  ];

  const postElectionSteps = [
    {
      number: 1,
      title: t("steps.post.1.title"),
      description: t("steps.post.1.desc"),
      icon: Tally5,
    },
    {
      number: 2,
      title: t("steps.post.2.title"),
      description: t("steps.post.2.desc"),
      icon: BarChart3,
    },
    {
      number: 3,
      title: t("steps.post.3.title"),
      description: t("steps.post.3.desc"),
      icon: CheckCircle,
    },
    {
      number: 4,
      title: t("steps.post.4.title"),
      description: t("steps.post.4.desc"),
      icon: Vote,
    },
  ];

  return (
    <div className="space-y-12 px-4 py-8 max-w-4xl mx-auto">
      {/* Pre-Election Steps */}
      <div className="bg-blue-50 p-6 rounded-lg shadow">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {t("steps.beforeElection")}
          </h3>
        </div>

        <div className="space-y-6">
          {preElectionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700 font-bold">
                    {step.number}
                  </div>
                  {index < preElectionSteps.length - 1 && (
                    <div className="w-0.5 h-12 bg-blue-200 my-2" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">
                      {step.title}
                    </h4>
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
          <h3 className="text-lg font-semibold text-green-900 mb-1">
            {t("steps.afterElection")}
          </h3>
        </div>

        <div className="space-y-6">
          {postElectionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-700 font-bold">
                    {step.number}
                  </div>
                  {index < postElectionSteps.length - 1 && (
                    <div className="w-0.5 h-12 bg-green-200 my-2" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-900">
                      {step.title}
                    </h4>
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
