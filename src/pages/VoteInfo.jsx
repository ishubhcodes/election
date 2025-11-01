import { FileCheck, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/language-context";

export default function VoteInfo() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 text-left">
      <div className="max-w-5xl mx-auto space-y-10">

        <div className="space-y-2">
          <span class="text-gray-600 text-center text-sm font-semibold uppercase tracking-wider block mb-3">
    Your guide to
  </span>
          <h1 className="text-4xl font-semibold text-center text-red-900 tracking-tight">
            {t("voteInfo.title")}
          </h1>
          <p className="text-gray-600 text-center text-base font-normal">
            {t("voteInfo.subtitle")}
          </p>
        </div>

        <div className="space-y-6">

          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-red-800" />
              <h2 className="text-lg font-medium text-red-800">{t("voteInfo.section.ballot")}</h2>
            </div>
            <p className="text-gray-700 text-base font-normal mb-2">{t("voteInfo.ballot.desc")}</p>
            <ul className="list-disc list-inside text-base text-gray-700 font-normal space-y-1">
              <li>{t("voteInfo.ballot.point1")}</li>
              <li>{t("voteInfo.ballot.point2")}</li>
              <li>{t("voteInfo.ballot.point3")}</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileCheck className="w-5 h-5 text-red-700" />
              <h2 className="text-lg font-medium text-red-800">{t("voteInfo.section.fill")}</h2>
            </div>
            <p className="text-gray-700 text-base font-normal">{t("voteInfo.fill.desc")}</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-red-700" />
              <h2 className="text-lg font-medium text-red-800">{t("voteInfo.section.errors")}</h2>
            </div>
            <p className="text-gray-700 text-base font-normal mb-2">{t("voteInfo.errors.desc")}</p>
            <ul className="list-disc list-inside text-base text-gray-700 font-normal space-y-1">
              <li>{t("voteInfo.errors.point1")}</li>
              <li>{t("voteInfo.errors.point2")}</li>
              <li>{t("voteInfo.errors.point3")}</li>
            </ul>
          </div>
        </div>

        <Link
          to="/demo"
          className="w-full bg-sky-700 text-white text-center py-4 rounded-lg text-base font-medium hover:bg-sky-800 transition-colors block"
        >
          {t("voteInfo.practiceButton")}
        </Link>
      </div>
    </div>
  );
}
