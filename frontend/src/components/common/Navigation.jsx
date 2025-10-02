import { Link } from 'react-router-dom';
import useUserStore from '../../store/userStore';

const Navigation = () => {
  const { user, setUserRole } = useUserStore();

  const switchView = (role) => {
    setUserRole(role);
  };

  return (
    <nav className="top-nav" style={{
      background: 'linear-gradient(135deg, var(--primary-terracotta-dark) 0%, var(--primary-terracotta) 100%)',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 12px rgba(193,85,77,0.2)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        {/* Logo & Title */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          color: 'white',
          textDecoration: 'none'
        }}>
          <img
            src="/kalundborg-logo.jpg"
            alt="Kalundborg Kommune"
            style={{
              height: '50px',
              width: 'auto',
              filter: 'brightness(0) invert(1)'
            }}
          />
          <div>
            <h1 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, marginBottom: '2px' }}>
              Nærdemokrati
            </h1>
            <p style={{ fontSize: 'var(--font-size-sm)', opacity: 0.9, marginBottom: 0 }}>
              Digital Borgerportal
            </p>
          </div>
        </Link>

        {/* Right Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          {/* Role Switcher */}
          <div className="glass-dark" style={{
            display: 'flex',
            borderRadius: 'var(--radius-md)',
            padding: '4px'
          }}>
            <button
              onClick={() => switchView('borger')}
              className={user.role === 'borger' ? 'glass-dark' : ''}
              style={{
                padding: 'var(--space-1) var(--space-2)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 500,
                color: user.role === 'borger' ? 'white' : 'rgba(255,255,255,0.7)',
                background: user.role === 'borger' ? 'rgba(255,255,255,0.1)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
                boxShadow: user.role === 'borger' ? 'var(--shadow-sm)' : 'none'
              }}
            >
              👤 Borger
            </button>
            <button
              onClick={() => switchView('politiker')}
              className={user.role === 'politiker' ? 'glass-dark' : ''}
              style={{
                padding: 'var(--space-1) var(--space-2)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 500,
                color: user.role === 'politiker' ? 'white' : 'rgba(255,255,255,0.7)',
                background: user.role === 'politiker' ? 'rgba(255,255,255,0.1)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-base)',
                boxShadow: user.role === 'politiker' ? 'var(--shadow-sm)' : 'none'
              }}
            >
              🏛️ Politiker
            </button>
          </div>

          {/* User Avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <div style={{
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              color: 'var(--primary-blue)',
              fontWeight: 600,
              fontSize: 'var(--font-size-sm)'
            }}>
              {user.initials}
            </div>
            <div style={{ display: 'none' }} className="md:block">
              <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, marginBottom: 0 }}>
                {user.name}
              </p>
              <p style={{ fontSize: 'var(--font-size-xs)', opacity: 0.7, marginBottom: 0 }}>
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
