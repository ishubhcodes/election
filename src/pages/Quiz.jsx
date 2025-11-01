import { useLanguage } from "../context/language-context"
import { useState } from "react"
import { quizQuestions } from "../data/quiz"

export default function QuizPage() {
  const { t, language } = useLanguage()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [completed, setCompleted] = useState(false)

  const question = quizQuestions[currentQuestion]
  const isNepali = language === "ne"
  const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleSelectAnswer = (index) => {
    if (!answered) {
      setSelectedAnswer(index)
    }
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return
    setAnswered(true)
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setCompleted(true)
    }
  }

  const handleRetake = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setCompleted(false)
  }

  const scorePercentage = Math.round((score / quizQuestions.length) * 100)

  if (completed) {
    return (
      <div className="w-full">
        {/* Header */}
        <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("quiz.result")}</h1>
          </div>
        </section>
        {/* Results */}
        <section className="py-16 px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <span className="text-5xl text-primary font-bold">{scorePercentage}%</span>
                <div className="text-lg mt-2">
                  {score} out of {quizQuestions.length} correct
                </div>
              </div>
              <div>
                {scorePercentage >= 80 && (
                  <p className="text-lg font-semibold text-primary mb-2">
                    Excellent! You have great election knowledge!
                  </p>
                )}
                {scorePercentage >= 60 && scorePercentage < 80 && (
                  <p className="text-lg font-semibold text-primary mb-2">
                    Good job! You have solid election knowledge.
                  </p>
                )}
                {scorePercentage < 60 && (
                  <p className="text-lg font-semibold text-primary mb-2">
                    Keep learning! Try the quiz again to improve your score.
                  </p>
                )}
              </div>
              <button
                onClick={handleRetake}
                className="mt-6 w-full bg-primary text-white px-4 py-2 rounded-lg text-lg"
              >
                {t("quiz.retake")}
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("quiz.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("quiz.desc")}</p>
        </div>
      </section>
      {/* Quiz */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">
                {t("quiz.question")} {currentQuestion + 1} {t("quiz.of")} {quizQuestions.length}
              </span>
              <span className="text-sm font-medium">{scorePercentage}%</span>
            </div>
            {/* Progress Bar */}
            <div className="mb-6 h-2 w-full bg-gray-200 rounded">
              <div
                className="h-2 rounded bg-[grey]"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="text-2xl font-semibold mb-6">
              {isNepali ? question.questionNe : question.question}
            </div>
            {/* Options */}
            <form>
              <div className="space-y-4">
                {(isNepali ? question.optionsNe : question.options).map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = answered && index === question.correctAnswer
                  const isIncorrect = answered && isSelected && index !== question.correctAnswer
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-all
                        ${isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50"}
                        ${isCorrect ? "border-green-500 bg-green-50" : ""}
                        ${isIncorrect ? "border-red-500 bg-red-50" : ""}
                      `}
                      onClick={() => handleSelectAnswer(index)}
                    >
                      <input
                        type="radio"
                        name="quiz-option"
                        id={`option-${index}`}
                        checked={isSelected}
                        onChange={() => handleSelectAnswer(index)}
                        disabled={answered}
                        className="form-radio"
                      />
                      <label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </label>
                    </div>
                  )
                })}
              </div>
            </form>
            {/* Answer Feedback */}
            {answered && (
              <div className="mt-6 p-4 bg-gray-50 border rounded-lg">
                <p className="font-semibold mb-2">
                  {selectedAnswer === question.correctAnswer ? "Correct Answer" : "Incorrect Answer"}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {isNepali ? question.explanationNe : question.explanation}
                </p>
                {selectedAnswer !== question.correctAnswer && (
                  <p className="text-sm">
                    <span className="font-semibold text-green-600">{t("quiz.correct")}: </span>
                    {(isNepali ? question.optionsNe : question.options)[question.correctAnswer]}
                  </p>
                )}
              </div>
            )}
            <div className="mt-8 flex gap-4">
              {!answered ? (
                <button
                  onClick={e => {
                    e.preventDefault()
                    handleSubmitAnswer()
                  }}
                  disabled={selectedAnswer === null}
                  className="flex-1 bg-[grey] text-white px-4 py-2 rounded-lg text-lg disabled:opacity-50"
                >
                {t("quiz.submit")}
                </button>
              ) : (
                <button
                  onClick={e => {
                    e.preventDefault()
                    handleNext()
                  }}
                  className="flex-1 bg-[grey] text-white px-4 py-2 rounded-lg text-lg"
                >
                  {currentQuestion < quizQuestions.length - 1 ? t("quiz.next") : t("quiz.finish")}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
