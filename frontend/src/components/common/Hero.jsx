import { useState, useEffect } from 'react';
import { getRandomStats } from '../../data/statsData';

const Hero = () => {
  const [currentStats, setCurrentStats] = useState(getRandomStats(3));

  // Rotate stats every minute (60000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStats(getRandomStats(3));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="gradient-bg section-wrapper" style={{
      background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 50%, var(--secondary-green) 100%)',
      color: 'white',
      padding: 'var(--space-10) 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          width: '288px',
          height: '288px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          width: '384px',
          height: '384px',
          background: 'rgba(138, 43, 226, 0.2)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: var(--z-base) }}>
        {/* Main Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
          <h1 style={{
            fontSize: 'var(--font-size-5xl)',
            lineHeight: 'var(--line-height-tight)',
            marginBottom: 'var(--space-3)',
            fontWeight: 700
          }}>
            Velkommen til dit Nærdemokrati
          </h1>
          <p style={{
            fontSize: 'var(--font-size-xl)',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--space-4)',
            color: 'rgba(255,255,255,0.9)'
          }}>
            Få svar på dine spørgsmål om kommunalpolitik med AI-drevet indsigt
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-2)',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => scrollToSection('chatSection')}
              className="btn btn-secondary btn-lg"
            >
              Stil et spørgsmål
            </button>
            <button
              onClick={() => scrollToSection('dagsordenSection')}
              className="btn btn-primary btn-lg"
            >
              Se dagsordener
            </button>
          </div>
        </div>

        {/* Stats Cards - Rotating every minute */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-4)',
          marginTop: 'var(--space-8)'
        }}>
          {currentStats.map((stat, index) => (
            <div
              key={`${stat.value}-${index}`}
              className="glass-dark card-hover"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-3)',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
                animation: 'fadeIn 0.6s ease-in-out'
              }}
            >
              <div style={{
                fontSize: 'var(--font-size-5xl)',
                fontWeight: 700,
                marginBottom: 'var(--space-1)'
              }}>
                {stat.value}
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: 'var(--font-size-base)',
                lineHeight: 'var(--line-height-relaxed)'
              }}>
                {stat.label}
              </div>
              <div style={{
                marginTop: 'var(--space-1)',
                fontSize: 'var(--font-size-xs)',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {stat.category}
              </div>
            </div>
          ))}
        </div>

        {/* Next update indicator */}
        <div style={{
          textAlign: 'center',
          marginTop: 'var(--space-2)',
          fontSize: 'var(--font-size-xs)',
          color: 'rgba(255,255,255,0.6)'
        }}>
          ↻ Opdateres automatisk hvert minut
        </div>
      </div>
    </section>
  );
};

export default Hero;
