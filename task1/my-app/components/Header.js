'use client';

import Link from 'next/link';

const headerStyle = {
  backgroundColor: 'pink',
  color: 'red',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const linkStyle = {
  marginLeft: '1rem',
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  backgroundColor: '#333',
};

const navStyle = {
  display: 'flex',
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>ModernSite</div>
      <nav style={navStyle}>
        <Link href="/" style={linkStyle}>Ana Səhifə</Link>
        <Link href="/about" style={linkStyle}>Haqqımızda</Link>
      </nav>
    </header>
  );
}
