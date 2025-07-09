'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateQuiz() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], answer: 0 }
  ])

  const handleQuestionChange = (idx, field, value) => {
    const copy = [...questions]
    copy[idx][field] = value
    setQuestions(copy)
  }

  const handleOptionChange = (qIdx, oIdx, value) => {
    const copy = [...questions]
    copy[qIdx].options[oIdx] = value
    setQuestions(copy)
  }

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: 0 }])
  }

  const handleSubmit = async () => {
    const res = await fetch('/api/quizzes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, questions })
    })

    if (res.ok) {
      router.push('/quizlist')
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Yeni Quiz Yarat</h2>
      <input
        type="text"
        placeholder="Quiz Başlığı"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: 20 }}
      />

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: 30 }}>
          <input
            type="text"
            placeholder={`Sual ${i + 1}`}
            value={q.question}
            onChange={e => handleQuestionChange(i, 'question', e.target.value)}
            style={{ display: 'block', marginBottom: 10 }}
          />

          {q.options.map((opt, j) => (
            <div key={j}>
              <label>
                <input
                  type="radio"
                  name={`correct-${i}`}
                  checked={q.answer === j}
                  onChange={() => handleQuestionChange(i, 'answer', j)}
                />
                <input
                  type="text"
                  placeholder={`Variant ${j + 1}`}
                  value={opt}
                  onChange={e => handleOptionChange(i, j, e.target.value)}
                />
              </label>
            </div>
          ))}
        </div>
      ))}

      <button onClick={addQuestion}>+ Sual əlavə et</button>
      <br />
      <button onClick={handleSubmit} style={{ marginTop: 20, backgroundColor: 'green', color: 'white', padding: 10 }}>
        Quiz Yarat
      </button>
    </div>
  )
}
