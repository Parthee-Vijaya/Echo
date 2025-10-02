import { useState, useEffect, useMemo } from 'react';
import useUserStore from '../../store/userStore';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { user } = useUserStore();

  const sections = useMemo(() => {
    if (user.role === 'politiker') {
      return [
        { id: 'hero', label: 'Dashboard', icon: '📊' },
        { id: 'topicInterest', label: 'Emner', icon: '🔥' },
        { id: 'priorityFocus', label: 'Handling', icon: '⚠️' },
        { id: 'recentQuestions', label: 'Spørgsmål', icon: '💬' }
      ];
    }

    return [
      { id: 'hero', label: 'Forside', icon: '🏠' },
      { id: 'chatSection', label: 'AI Chat', icon: '💬' },
      { id: 'newsSection', label: 'Nyheder', icon: '📰' },
      { id: 'dagsordenSection', label: 'Dagsordener', icon: '📅' },
      { id: 'pdfSection', label: 'Dokumenter', icon: '📄' },
      { id: 'videoSection', label: 'Video', icon: '🎥' }
    ];
  }, [user.role]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      right: 'var(--space-4)',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }}>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          title={section.label}
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            border: '2px solid white',
            background: activeSection === section.id ? 'white' : 'transparent',
            cursor: 'pointer',
            transition: 'all var(--transition-base)',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            const tooltip = e.currentTarget.querySelector('.tooltip');
            if (tooltip) tooltip.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            const tooltip = e.currentTarget.querySelector('.tooltip');
            if (tooltip) tooltip.style.opacity = '0';
          }}
        >
          <span
            className="tooltip"
            style={{
              position: 'absolute',
              right: 'calc(100% + var(--space-2))',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.9)',
              color: 'white',
              padding: 'var(--space-1) var(--space-2)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-sm)',
              whiteSpace: 'nowrap',
              opacity: 0,
              transition: 'opacity var(--transition-base)',
              pointerEvents: 'none'
            }}
          >
            {section.icon} {section.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FloatingNav;
