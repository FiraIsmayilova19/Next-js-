'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '@/public/styles/auth.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id);
      router.push('/dashboard');
    } else {
      setError(data.error || 'Daxil olmaq mümkün olmadı');
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Daxil ol</h2>
        <input
          type="text"
          placeholder="İstifadəçi adı"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifrə"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Daxil ol</button>
        {error && <p className="error-text">{error}</p>}
        <p>Hesabın yoxdur? <a href="/register">Qeydiyyat</a></p>
      </form>
    </div>
  );
}
