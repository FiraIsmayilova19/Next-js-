'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function QuizDetail() {
  const { id } = useParams()
  const [quiz, setQuiz] = useState(null)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetch('/api/quizzes')
      .then(res => res.json())
      .then(data => {
        const q = data.find(q => q.id == id)
        if (q) {
          // Parse all options
          q.questions = q.questions.map(qn => ({
            ...qn,
            options: JSON.parse(qn.options)
          }))
          setQuiz(q)
          setAnswers(Array(q.questions.length).fill(-1))
        }
      })
  }, [id])

  const handleChange = (qIdx, aIdx) => {
    const copy = [...answers]
    copy[qIdx] = aIdx
    setAnswers(copy)
  }

  const handleSubmit = () => {
    let correct = 0
    answers.forEach((ans, i) => {
      if (ans === quiz.questions[i].answer) correct++
    })
    setScore(correct)
    setShowResult(true)
  }

  if (!quiz) return <p>Loading...</p>

  return (
    <div style={{ padding: 20 }}>
      <h2>{quiz.title}</h2>
      {quiz.questions.map((q, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <p><strong>{q.question}</strong></p>
          {q.options.map((opt, j) => {
            const isCorrect = q.answer === j
            const isUserSelected = answers[i] === j
            const wrong = showResult && isUserSelected && !isCorrect
            const correct = showResult && isCorrect

            return (
              <div key={j} style={{ color: wrong ? 'red' : correct ? 'green' : 'black' }}>
                <input
                  type="radio"
                  name={`q-${i}`}
                  disabled={showResult}
                  checked={answers[i] === j}
                  onChange={() => handleChange(i, j)}
                />
                {opt}
                {wrong && ' ❌'}
                {correct && ' ✔️'}
              </div>
            )
          })}
        </div>
      ))}

      {!showResult ? (
        <button onClick={handleSubmit}>Finish Quiz</button>
      ) : (
        <p>Nəticə: {score}/{quiz.questions.length}</p>
      )}
    </div>
  )
}
