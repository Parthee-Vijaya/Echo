import { Link } from 'react-router-dom';
import useUserStore from '../../store/userStore';

const Navigation = () => {
  const { user, setUserRole } = useUserStore();

  const switchView = (role) => {
    setUserRole(role);
  };

  return (
    <nav className="top-nav" style={{
      background: 'rgba(30, 68, 105, 0.95)',
      backdropFilter: 'blur(20px)',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '72px',
        padding: '0 var(--space-4)'
      }}>
        {/* Logo & Title */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          color: 'white',
          textDecoration: 'none',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <img
            src="/kalundborg-logo.jpg"
            alt="Kalundborg Kommune"
            style={{
              height: '42px',
              width: 'auto',
              filter: 'brightness(0) invert(1)',
              opacity: 0.95
            }}
          />
          <div>
            <h1 style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 700,
              marginBottom: '0px',
              letterSpacing: '-0.01em',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}>
              Nærdemokrati
            </h1>
            <p style={{
              fontSize: 'var(--font-size-xs)',
              opacity: 0.8,
              marginBottom: 0,
              fontWeight: 500
            }}>
              Kalundborg Kommune
            </p>
          </div>
        </Link>

        {/* Right Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          {/* Role Switcher */}
          <div style={{
            display: 'flex',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 'var(--radius-full)',
            padding: '4px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <button
              onClick={() => switchView('borger')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'white',
                background: user.role === 'borger' ? 'rgba(255,255,255,0.25)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: user.role === 'borger' ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              👤 Borger
            </button>
            <button
              onClick={() => switchView('politiker')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'white',
                background: user.role === 'politiker' ? 'rgba(255,255,255,0.25)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: user.role === 'politiker' ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              🏛️ Politiker
            </button>
          </div>

          {/* User Avatar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: '8px 12px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          >
            <div style={{
              height: '32px',
              width: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #4A7FB8, #2C5F96)',
              color: 'white',
              fontWeight: 700,
              fontSize: 'var(--font-size-xs)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
              {user.initials}
            </div>
            <div style={{ display: 'none' }} className="md:block">
              <p style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                marginBottom: 0,
                lineHeight: '1.2'
              }}>
                {user.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
