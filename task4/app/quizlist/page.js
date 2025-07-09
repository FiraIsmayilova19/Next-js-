'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    fetch('/api/quizzes')
      .then(res => res.json())
      .then(setQuizzes)
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Quiz List</h1>
      <Link href="/create">Yeni quiz yarat</Link>
      <ul>
        {quizzes.map(q => (
          <li key={q.id}>
            <Link href={`/quizlist/${q.id}`}>{q.title}</Link>
            <Link href={`/quizlist/${q.id}/edit`} style={{ marginLeft: 10 }}>✏ Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
