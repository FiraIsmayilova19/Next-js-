export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f2f2f2' }}>
        {children}
      </body>
    </html>
  );
}
