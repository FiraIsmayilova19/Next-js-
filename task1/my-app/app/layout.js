import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Inline CSS Veb Sayt',
  description: 'Next.js 15 + inline CSS ilə sadə sayt',
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', color: '#222' }}>
        <Header />
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
