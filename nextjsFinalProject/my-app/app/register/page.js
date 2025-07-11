'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './register.css'; // CSS faylını əlavə edirik

export default function RegisterPage() {
  const router=useRouter();
  const [form, setForm] = useState({ username: '',  password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || 'Xəta baş verdi.');
      return;
    }

    localStorage.setItem('token', data.token);
    router.push('/login');
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Qeydiyyat</h2>
        <input
          type="text"
          name='username'
          placeholder="İstifadəçi adı"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name='password'
          placeholder="Şifrə"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Qeydiyyatdan keç</button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
}
