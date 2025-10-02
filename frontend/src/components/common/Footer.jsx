const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--primary-blue-dark) 0%, var(--primary-blue) 100%)',
      color: 'white',
      padding: 'var(--space-8) 0 var(--space-4) 0',
      marginTop: 'var(--space-10)'
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
              fontSize: 'var(--font-size-xl)',
              fontWeight: 700,
              marginBottom: 'var(--space-2)'
            }}>
              Nærdemokrati Platform
            </h3>
            <p style={{
              fontSize: 'var(--font-size-base)',
              lineHeight: 'var(--line-height-relaxed)',
              color: 'rgba(255,255,255,0.8)'
            }}>
              Din digitale indgang til Kalundborg Kommune's beslutninger, møder og dokumenter.
              AI-assisteret indsigt for bedre demokratisk deltagelse.
            </p>
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
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-lg)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)'
              }}>
                📘
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-lg)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)'
              }}>
                🐦
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-lg)',
                textDecoration: 'none',
                transition: 'all var(--transition-base)'
              }}>
                📷
              </a>
            </div>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'rgba(255,255,255,0.6)'
            }}>
              🤖 Powered by AI
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: 'var(--space-3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-2)',
          fontSize: 'var(--font-size-sm)',
          color: 'rgba(255,255,255,0.6)'
        }}>
          <div>
            © 2025 Kalundborg Kommune. Alle rettigheder forbeholdes.
          </div>
          <div style={{
            display: 'flex',
            gap: 'var(--space-3)'
          }}>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none'
            }}>
              Privatlivspolitik
            </a>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none'
            }}>
              Cookiepolitik
            </a>
            <a href="#" style={{
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none'
            }}>
              Tilgængelighed
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
