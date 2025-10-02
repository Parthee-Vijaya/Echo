const Hero = () => {
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

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-4)',
          marginTop: 'var(--space-8)'
        }}>
          <div className="glass-dark card-hover" style={{
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-3)',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-1)'
            }}>
              2,847
            </div>
            <div style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 'var(--font-size-base)'
            }}>
              Dokumenter tilgængelige
            </div>
          </div>

          <div className="glass-dark card-hover" style={{
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-3)',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-1)'
            }}>
              15,392
            </div>
            <div style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 'var(--font-size-base)'
            }}>
              Spørgsmål besvaret
            </div>
          </div>

          <div className="glass-dark card-hover" style={{
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-3)',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-5xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-1)'
            }}>
              98%
            </div>
            <div style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 'var(--font-size-base)'
            }}>
              Tilfredshed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
