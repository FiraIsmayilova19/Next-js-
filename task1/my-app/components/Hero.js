const heroStyle = {
  background: 'linear-gradient(to right, #4f46e5, #3b82f6)',
  color: 'white',
  padding: '4rem 2rem',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '3rem',
  marginBottom: '1rem',
};

const textStyle = {
  fontSize: '1.25rem',
  marginBottom: '2rem',
};

const buttonStyle = {
  backgroundColor: 'white',
  color: '#3b82f6',
  border: 'none',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  borderRadius: '8px',
  cursor: 'pointer',
};

export default function Hero() {
  return (
    <section style={heroStyle}>
      <h1 style={headingStyle}>Xoş Gəldiniz!</h1>
      <p style={textStyle}>Bu gozəl bir saytdır</p>
      <button style={buttonStyle}>Ətraflı</button>
    </section>
  );
}
