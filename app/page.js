'use client';

import { useState } from 'react';

const quotes = [
  {
    id: 1,
    text: "Për njëzet vjet kam qarë duke u përpjekur të rikthej lotët që i kisha dikur. Tani që ato u rikthyen, për njëzet vjet të tjera kam qarë nga frika se mos më largohen përsëri.",
    category: "Pendimi"
  },
  {
    id: 2,
    text: "Nëse nuk mund të qash, atëherë përpiquni të bëni veten sikur jeni duke qarë, sepse zemra e fortë është larg nga Allahu.",
    category: "Përpjekja"
  },
  {
    id: 3,
    text: "Lotët që rrjedhin nga frika e Allahut janë më të çmuar se çdo gjë në dynja.",
    category: "Frika e Allahut"
  },
  {
    id: 4,
    text: "Kur zemra ngurtësohet, lyeje atë me kujtimet e vdekjes dhe qarjen e natës.",
    category: "Butësia e Zemrës"
  },
  {
    id: 5,
    text: "Një pikë lot që bie nga sytë në privatësinë e natës është më e rëndësishme se mijëra fjalë të shqiptuara përpara njerëzve.",
    category: "Namazi i Natës"
  },
  {
    id: 6,
    text: "Sa herë që hyja në namaz, dëshira ime ishte të qaja derisa të mos më mbetej asnjë pikë lot.",
    category: "Namazi"
  },
  {
    id: 7,
    text: "Qarjen për hir të Allahut është një bekim, dhe mungesa e saj është një provë që zemra ka nevojë për pastrim.",
    category: "Bekimi"
  },
  {
    id: 8,
    text: "Njerëzit më të mirë janë ata që qajnë kur janë vetëm dhe buzëqeshin me vëllezërit e tyre.",
    category: "Sinqeriteti"
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Të gjitha');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const categories = ['Të gjitha', ...new Set(quotes.map(q => q.category))];

  const filteredQuotes = selectedCategory === 'Të gjitha'
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  const currentQuote = filteredQuotes[currentQuoteIndex % filteredQuotes.length];

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % filteredQuotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + filteredQuotes.length) % filteredQuotes.length);
  };

  return (
    <div style={styles.container}>
      <div style={styles.background}></div>

      <div style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.title}>
            <span style={styles.icon}>💧</span>
            Fjalë të Abdullah ibn Mubarak
          </h1>
          <p style={styles.subtitle}>Mençuria rreth lotit dhe qarjes</p>
        </header>

        <div style={styles.filterContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentQuoteIndex(0);
              }}
              style={{
                ...styles.filterButton,
                ...(selectedCategory === cat ? styles.filterButtonActive : {})
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={styles.quoteCard}>
          <div style={styles.quoteIcon}>"</div>
          <p style={styles.quoteText}>{currentQuote.text}</p>
          <div style={styles.categoryBadge}>{currentQuote.category}</div>

          <div style={styles.navigation}>
            <button onClick={prevQuote} style={styles.navButton}>
              ← Mëparshme
            </button>
            <span style={styles.counter}>
              {currentQuoteIndex + 1} / {filteredQuotes.length}
            </span>
            <button onClick={nextQuote} style={styles.navButton}>
              Tjetra →
            </button>
          </div>
        </div>

        <footer style={styles.footer}>
          <p style={styles.footerText}>
            Abdullah ibn Mubarak (736-797 M) ishte një dijetar i madh,
            muhaddith dhe shembull për shumë gjenerata myslimanësh.
          </p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    position: 'relative',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    overflow: 'hidden',
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    zIndex: -1,
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    color: 'white',
    marginBottom: '30px',
    paddingTop: '40px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
  },
  icon: {
    fontSize: '2rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    margin: 0,
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  filterButton: {
    padding: '10px 20px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: '25px',
    background: 'rgba(255,255,255,0.1)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  filterButtonActive: {
    background: 'rgba(255,255,255,0.3)',
    borderColor: 'white',
    fontWeight: 'bold',
  },
  quoteCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    position: 'relative',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  quoteIcon: {
    fontSize: '5rem',
    color: '#667eea',
    opacity: 0.2,
    position: 'absolute',
    top: '10px',
    left: '20px',
    fontFamily: 'Georgia, serif',
  },
  quoteText: {
    fontSize: '1.4rem',
    lineHeight: '1.8',
    color: '#333',
    margin: '40px 0 20px 0',
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  categoryBadge: {
    display: 'inline-block',
    padding: '8px 16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: '20px',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '2px solid #f0f0f0',
  },
  navButton: {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease',
  },
  counter: {
    fontSize: '1rem',
    color: '#666',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    marginTop: '30px',
    padding: '20px',
  },
  footerText: {
    color: 'white',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    opacity: 0.9,
    margin: 0,
  },
};
