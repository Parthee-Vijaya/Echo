const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, rgba(30, 68, 105, 0.95) 0%, rgba(22, 52, 81, 1) 100%)',
      color: 'white',
      padding: 'var(--space-10) 0 var(--space-4) 0',
      marginTop: 'var(--space-12)',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-6)',
          marginBottom: 'var(--space-6)'
        }}>
          {/* About Section */}
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-3)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}>
              <span style={{ fontSize: 'var(--font-size-3xl)' }}>🏛️</span>
              Nærdemokrati
            </h3>
            <p style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 'var(--space-2)'
            }}>
              Din digitale indgang til Kalundborg Kommune's beslutninger, møder og dokumenter.
              AI-assisteret indsigt for bedre demokratisk deltagelse.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-1)',
              padding: '6px 12px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-sm)',
              marginTop: 'var(--space-2)'
            }}>
              🤖 <span style={{ opacity: 0.9 }}>Powered by Echo AI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 600,
              marginBottom: 'var(--space-2)'
            }}>
              Genveje
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-1)'
            }}>
              <li>
                <a href="#chatSection" style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-base)'
                }}>
                  💬 AI Chat
                </a>
              </li>
              <li>
                <a href="#newsSection" style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-base)'
                }}>
                  📰 Nyheder
                </a>
              </li>
              <li>
                <a href="#dagsordenSection" style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-base)'
                }}>
                  📅 Dagsordener
                </a>
              </li>
              <li>
                <a href="#pdfSection" style={{
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  transition: 'color var(--transition-base)'
                }}>
                  📄 Dokumenter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 600,
              marginBottom: 'var(--space-2)'
            }}>
              Kontakt
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-1)',
              fontSize: 'var(--font-size-base)',
              color: 'rgba(255,255,255,0.8)'
            }}>
              <div>📍 Kalundborg Kommune</div>
              <div>📧 info@kalundborg.dk</div>
              <div>📞 +45 59 50 50 50</div>
              <div>🕐 Man-Fre: 08:00-16:00</div>
            </div>
          </div>

          {/* Social & Tech */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 600,
              marginBottom: 'var(--space-2)'
            }}>
              Følg med
            </h4>
            <div style={{
              display: 'flex',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-3)'
            }}>
              <a href="#" style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-xl)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                📘
              </a>
              <a href="#" style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-xl)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                🐦
              </a>
              <a href="#" style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-xl)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          paddingTop: 'var(--space-4)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-3)',
          fontSize: 'var(--font-size-sm)'
        }}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
            © 2025 Kalundborg Kommune. Alle rettigheder forbeholdes.
          </div>
          <div style={{
            display: 'flex',
            gap: 'var(--space-4)'
          }}>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontWeight: 500
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              Privatlivspolitik
            </a>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontWeight: 500
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              Cookiepolitik
            </a>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              fontWeight: 500
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              Tilgængelighed
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
