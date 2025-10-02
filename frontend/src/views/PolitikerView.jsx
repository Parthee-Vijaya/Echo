import { useState, useEffect } from 'react';
import {
  politikerStats,
  topicInterests,
  priorityItems,
  recentQuestions,
} from '../data/politikerData';
import { getRandomPolitikerInsights } from '../data/politikerInsights';

const PoliticianHero = () => {
  const [currentInsights, setCurrentInsights] = useState(getRandomPolitikerInsights(4));

  // Rotate insights every minute (60000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsights(getRandomPolitikerInsights(4));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="section-wrapper"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--space-12) 0 var(--space-10) 0',
        background: 'linear-gradient(180deg, rgba(30, 68, 105, 0.5) 0%, transparent 100%)',
        color: 'white',
      }}
    >
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
          top: '60px',
          right: '80px',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(74, 127, 184, 0.4), transparent)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '100px',
          left: '100px',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent)',
          borderRadius: '50%',
          filter: 'blur(70px)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            background: 'rgba(74, 127, 184, 0.2)',
            padding: '10px 24px',
            borderRadius: 'var(--radius-full)',
            marginBottom: 'var(--space-4)',
            border: '1px solid rgba(74, 127, 184, 0.4)'
          }}>
            <span style={{ fontSize: 'var(--font-size-xl)' }}>🏛️</span>
            <span style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.95)'
            }}>
              Politik Dashboard
            </span>
          </div>

          <h1 style={{
            fontSize: '4rem',
            lineHeight: '1.1',
            marginBottom: 'var(--space-4)',
            fontWeight: 800,
            color: 'white',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            letterSpacing: '-0.02em'
          }}>
            Echo Insights for Politikere
          </h1>
          <p style={{
            fontSize: 'var(--font-size-2xl)',
            lineHeight: 'var(--line-height-relaxed)',
            color: 'rgba(255,255,255,0.9)',
            textShadow: '0 2px 12px rgba(0,0,0,0.25)',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            Real-time indsigt i borgerengagement, trends og handlingskrævende emner
          </p>
        </div>

        {/* Quick Stats Overview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-3)',
          marginBottom: 'var(--space-8)'
        }}>
          {politikerStats.map((stat) => (
            <div
              key={stat.id}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
                backdropFilter: 'blur(16px)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-4)',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.12))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))';
              }}
            >
              <div style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 800, color: 'white', marginBottom: '8px' }}>{stat.value}</div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: stat.deltaColor, marginTop: '6px', fontWeight: 700 }}>
                {stat.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Rotating Insights Cards - Main Feature */}
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 700,
            color: 'white',
            marginBottom: 'var(--space-1)',
            textShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}>
            📊 Vigtige Indsigter (Opdateres Automatisk)
          </h2>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: 'var(--space-4)'
          }}>
            Nøgletrends og handlingskrævende områder baseret på borgerinput og data
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-3)'
        }}>
          {currentInsights.map((insight, index) => {
            // Dynamic styling based on trend
            let trendColor = 'rgba(156, 163, 175, 0.8)'; // neutral gray
            let trendBg = 'rgba(156, 163, 175, 0.15)';
            if (insight.trend === 'up' || insight.trend === 'positive') {
              trendColor = '#22c55e';
              trendBg = 'rgba(34, 197, 94, 0.15)';
            } else if (insight.trend === 'urgent') {
              trendColor = '#ef4444';
              trendBg = 'rgba(239, 68, 68, 0.15)';
            }

            return (
              <div
                key={`${insight.title}-${index}`}
                style={{
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06))',
                  backdropFilter: 'blur(30px)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-4)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                  animation: 'fadeIn 0.6s ease-in-out',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '380px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.35)';
                  e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.10))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06))';
                }}
              >
                {/* Category Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '5px 10px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    {insight.category}
                  </div>
                  <span style={{ fontSize: 'var(--font-size-xl)' }}>{insight.icon}</span>
                </div>

                {/* Metric - Large and Bold */}
                <div style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: 'var(--space-1)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                }}>
                  {insight.metric}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: 'var(--space-2)',
                  lineHeight: 'var(--line-height-snug)'
                }}>
                  {insight.title}
                </h3>

                {/* Description - 4-5 lines detailed */}
                <p style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: 'rgba(255,255,255,0.85)',
                  flex: 1,
                  marginBottom: 'var(--space-2)'
                }}>
                  {insight.description}
                </p>

                {/* Trend Indicator */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  background: trendBg,
                  borderRadius: 'var(--radius-full)',
                  border: `1px solid ${trendColor}`,
                  alignSelf: 'flex-start'
                }}>
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: trendColor,
                    boxShadow: `0 0 6px ${trendColor}`
                  }} />
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    color: trendColor,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {insight.trend === 'up' ? 'Stigende' : insight.trend === 'positive' ? 'Positivt' : insight.trend === 'urgent' ? 'Kræver Handling' : 'Stabilt'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Auto-update indicator */}
        <div style={{
          textAlign: 'center',
          fontSize: 'var(--font-size-xs)',
          color: 'rgba(255,255,255,0.6)',
          fontWeight: 500
        }}>
          ↻ Insights opdateres automatisk hvert minut
        </div>
      </div>
    </section>
  );
};

const TopicInterestSection = () => {
  return (
    <section id="topicInterest" className="section-wrapper" style={{ padding: 'var(--space-10) 0' }}>
      <div className="container">
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            📈 Emneinteresse & Trends
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: 'var(--space-2)', fontSize: 'var(--font-size-lg)' }}>
            Mest diskuterede emner baseret på borgerspørgsmål - seneste 7 dage
          </p>
        </div>

        <div style={{ display: 'grid', gap: 'var(--space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {topicInterests.map((topic) => (
            <div
              key={topic.id}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06))',
                backdropFilter: 'blur(24px)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-5)',
                border: '1px solid rgba(255,255,255,0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 16px 50px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'white' }}>{topic.title}</h3>
                <span className={`topic-tag ${topic.tagVariant}`} style={{
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)'
                }}>{topic.tag}</span>
              </div>
              <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
                {topic.metrics.map((metric) => (
                  <div key={metric.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-sm)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>{metric.label}:</span>
                    <span style={{ fontWeight: 700, color: metric.accent }}>{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PrioritySection = () => {
  return (
    <section
      id="priorityFocus"
      className="section-wrapper"
      style={{
        padding: 'var(--space-10) 0',
      }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
          <span role="img" aria-hidden="true" style={{ fontSize: 'var(--font-size-3xl)' }}>
            🚨
          </span>
          <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            Kræver Handling
          </h2>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-6)', fontSize: 'var(--font-size-lg)' }}>
          Emner med høj borgerinteresse som mangler svar eller opfølgning
        </p>

        <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
          {priorityItems.map((item) => (
            <div
              key={item.id}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.08))',
                backdropFilter: 'blur(30px)',
                borderLeft: `5px solid ${item.borderColor}`,
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-2xl)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderLeftWidth: '5px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(8px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 16px 60px rgba(0, 0, 0, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.25)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-4)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: 1 }}>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{
                      background: item.levelBg,
                      color: item.levelText,
                      padding: '6px 16px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}>
                      {item.level}
                    </span>
                    <span style={{ fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{item.unanswered}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'white', marginBottom: 'var(--space-2)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 'var(--font-size-base)', color: 'rgba(255,255,255,0.9)', lineHeight: 'var(--line-height-relaxed)' }}>{item.description}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.8)' }}>
                    {item.stats.map((stat) => (
                      <span key={stat} style={{ fontWeight: 600 }}>• {stat}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                paddingTop: 'var(--space-4)',
                gap: 'var(--space-3)',
                flexWrap: 'wrap',
              }}>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{item.lastReviewed}</span>
                <button
                  type="button"
                  style={{
                    background: item.ctaBg,
                    color: 'white',
                    padding: 'var(--space-3) var(--space-5)',
                    borderRadius: 'var(--radius-lg)',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: 'var(--font-size-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
                  }}
                >
                  {item.ctaLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecentQuestionsSection = () => {
  return (
    <section id="recentQuestions" className="section-wrapper" style={{ padding: 'var(--space-10) 0 var(--space-12) 0' }}>
      <div className="container">
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.2)', marginBottom: 'var(--space-2)' }}>
            💬 Seneste Borgerspørgsmål
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'var(--font-size-lg)' }}>
            Anonyme spørgsmål med Echo AI-linkede dokumenter og beslutninger
          </p>
        </div>

        <div style={{ display: 'grid', gap: 'var(--space-5)' }}>
          {recentQuestions.map((question) => (
            <div
              key={question.id}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06))',
                backdropFilter: 'blur(30px)',
                padding: 'var(--space-6)',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid rgba(255,255,255,0.25)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 16px 60px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{
                    background: question.topicBg,
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}>
                    {question.topicLabel}
                  </span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{question.timeAgo}</span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: question.statusColor, fontWeight: 700 }}>{question.status}</span>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-4)' }}>
                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'white', marginBottom: 'var(--space-2)' }}>
                  {question.question}
                </h3>
                <p style={{ fontSize: 'var(--font-size-base)', color: 'rgba(255,255,255,0.85)', lineHeight: 'var(--line-height-relaxed)' }}>{question.summary}</p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 'var(--space-4)', display: 'grid', gap: 'var(--space-3)' }}>
                <h4 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📄</span> Relaterede dokumenter & beslutninger
                </h4>
                <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
                  {question.documents.map((doc, index) => {
                    const bgColor = doc.highlight === 'green' ? 'rgba(34,197,94,0.20)' : 'rgba(59,130,246,0.20)';
                    const borderColor = doc.highlight === 'green' ? 'rgba(34,197,94,0.6)' : 'rgba(59,130,246,0.6)';
                    return (
                      <div
                        key={`${question.id}-${index}`}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 'var(--space-3)',
                          padding: 'var(--space-3)',
                          borderRadius: 'var(--radius-lg)',
                          background: bgColor,
                          border: `2px solid ${borderColor}`,
                          flexWrap: 'wrap',
                          backdropFilter: 'blur(12px)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateX(8px)';
                          e.currentTarget.style.borderWidth = '3px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.borderWidth = '2px';
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: 'white', marginBottom: '6px' }}>
                            {doc.title}
                          </p>
                          <p style={{ fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.85)' }}>{doc.meta}</p>
                        </div>
                        <button
                          type="button"
                          style={{
                            color: 'white',
                            background: doc.buttonColor,
                            padding: 'var(--space-2) var(--space-4)',
                            borderRadius: 'var(--radius-md)',
                            border: 'none',
                            fontWeight: 700,
                            fontSize: 'var(--font-size-sm)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.08)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                          }}
                        >
                          {doc.buttonLabel}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <button
            type="button"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))',
              backdropFilter: 'blur(24px)',
              padding: 'var(--space-4) var(--space-8)',
              borderRadius: 'var(--radius-xl)',
              color: 'white',
              fontWeight: 700,
              fontSize: 'var(--font-size-base)',
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.12))';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08))';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.2)';
            }}
          >
            Vis Alle 47 Spørgsmål →
          </button>
        </div>
      </div>
    </section>
  );
};

const PolitikerView = () => {
  return (
    <div id="politikerView" style={{
      background: 'linear-gradient(180deg, #1E4469 0%, #2C5F96 30%, #4A7FB8 100%)',
      minHeight: '100vh'
    }}>
      <PoliticianHero />
      <TopicInterestSection />
      <PrioritySection />
      <RecentQuestionsSection />
    </div>
  );
};

export default PolitikerView;
