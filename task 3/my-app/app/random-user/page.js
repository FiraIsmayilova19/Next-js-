'use client';

import { useEffect, useState } from 'react';

export default function RandomUserPage() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    setUser(data.results[0]);
  };

  useEffect(() => {
    fetchUser(); 
    const interval = setInterval(() => {
      fetchUser(); 
    }, 15000);
    return () => clearInterval(interval); 
  }, []);

  if (!user) return <p style={{ textAlign: 'center' }}>Yüklənir...</p>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>🔄 Hər 15 saniyəyə dəyişən istifadəçi</h1>
      <img src={user.picture.large} alt="User" style={{ borderRadius: '50%' }} />
      <h2>{user.name.first} {user.name.last}</h2>
      <p>Email: {user.email}</p>
      <p>Ölkə: {user.location.country}</p>
      <small>Bu məlumatlar hər 15 saniyədən bir yenilənir (Client-side fetch)</small>
    </div>
  );
}
