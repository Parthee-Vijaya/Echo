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
    <section id="hero" className="section-wrapper" style={{
      color: 'white',
      padding: 'var(--space-12) 0 var(--space-8) 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, rgba(30, 68, 105, 0.4) 0%, transparent 100%)'
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

      <div className="container" style={{ position: 'relative', zIndex: 'var(--z-base)' }}>
        {/* Main Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <h1 style={{
            fontSize: '3.5rem',
            lineHeight: '1.1',
            marginBottom: 'var(--space-3)',
            fontWeight: 800,
            color: 'white',
            textShadow: '0 4px 12px rgba(0,0,0,0.25)',
            letterSpacing: '-0.02em'
          }}>
            Velkommen til dit Nærdemokrati
          </h1>
          <p style={{
            fontSize: 'var(--font-size-2xl)',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--space-5)',
            color: 'rgba(255,255,255,0.95)',
            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            maxWidth: '800px',
            margin: '0 auto',
            marginBottom: 'var(--space-5)'
          }}>
            Få svar på dine spørgsmål om kommunalpolitik med AI-drevet indsigt
          </p>

          {/* News Ticker */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-full)',
            padding: 'var(--space-3) var(--space-4)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              overflow: 'hidden'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-terracotta), var(--primary-terracotta-dark))',
                color: 'white',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: '0 2px 8px rgba(193, 85, 77, 0.4)'
              }}>
                📰 Seneste
              </div>
              <div style={{
                flex: 1,
                overflow: 'hidden',
                position: 'relative',
                height: '24px'
              }}>
                <div style={{
                  display: 'flex',
                  animation: 'ticker 30s linear infinite',
                  whiteSpace: 'nowrap'
                }}>
                  <span style={{
                    color: 'white',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 500,
                    textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    paddingRight: 'var(--space-8)'
                  }}>
                    ✅ Klimaplan 2030 godkendt - 2,4 mia. kr. til grøn omstilling
                  </span>
                  <span style={{
                    color: 'white',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 500,
                    textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    paddingRight: 'var(--space-8)'
                  }}>
                    📊 Budget 2025 - 342 mio. kr. til folkeskoler (+4,2%)
                  </span>
                  <span style={{
                    color: 'white',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 500,
                    textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    paddingRight: 'var(--space-8)'
                  }}>
                    🏘️ Byplan Østhavn - 450 nye boliger med 30% grønne områder
                  </span>
                  <span style={{
                    color: 'white',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 500,
                    textShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    paddingRight: 'var(--space-8)'
                  }}>
                    🚴 15 mio. kr. til ny cykelsti langs Ringvejen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards - Rotating every minute with expanded content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-4)',
          marginTop: 'var(--space-10)'
        }}>
          {currentStats.map((stat, index) => (
            <div
              key={`${stat.value}-${index}`}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(24px)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-5)',
                textAlign: 'left',
                border: '1px solid rgba(255,255,255,0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                animation: 'fadeIn 0.6s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
                minHeight: '300px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              {/* Category badge */}
              <div style={{
                fontSize: 'var(--font-size-xs)',
                color: 'rgba(255,255,255,0.7)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontWeight: 600
              }}>
                {stat.category}
              </div>

              {/* Value - large and prominent */}
              <div style={{
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 700,
                color: 'white',
                lineHeight: '1.1'
              }}>
                {stat.value}
              </div>

              {/* Label - medium */}
              <div style={{
                color: 'rgba(255,255,255,0.95)',
                fontSize: 'var(--font-size-lg)',
                fontWeight: 600,
                lineHeight: 'var(--line-height-snug)',
                marginBottom: 'var(--space-1)'
              }}>
                {stat.label}
              </div>

              {/* Description - detailed content */}
              {stat.description && (
                <div style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: 'var(--font-size-sm)',
                  lineHeight: 'var(--line-height-relaxed)',
                  flex: 1
                }}>
                  {stat.description}
                </div>
              )}
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
