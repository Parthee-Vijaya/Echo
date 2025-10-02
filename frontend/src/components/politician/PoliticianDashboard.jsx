import useUserStore from '../../store/userStore';

const PoliticianDashboard = () => {
  const { user } = useUserStore();

  // Only show for politicians
  if (user.role !== 'politiker') {
    return null;
  }

  const insightsData = {
    topTopics: [
      { topic: 'Klimaplan 2030', count: 342, sentiment: 'positive', trend: 'up' },
      { topic: 'Budget 2025', count: 287, sentiment: 'neutral', trend: 'up' },
      { topic: 'Cykelinfrastruktur', count: 156, sentiment: 'positive', trend: 'stable' },
      { topic: 'Østhavn byplan', count: 134, sentiment: 'mixed', trend: 'up' },
      { topic: 'Skolereform', count: 98, sentiment: 'positive', trend: 'down' }
    ],
    engagement: {
      totalQuestions: 1547,
      answeredQuestions: 1392,
      avgResponseTime: '2.3 timer',
      satisfactionRate: 94
    },
    recentQuestions: [
      { question: 'Hvornår starter byggeriet af cykelstien?', sentiment: 'neutral', category: 'Transport' },
      { question: 'Hvad er status på klimaplanen?', sentiment: 'positive', category: 'Klima' },
      { question: 'Hvordan påvirker budget skatteprocenten?', sentiment: 'concerned', category: 'Økonomi' }
    ]
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return '📈';
    if (trend === 'down') return '📉';
    return '➡️';
  };

  const getSentimentColor = (sentiment) => {
    if (sentiment === 'positive') return 'var(--secondary-green)';
    if (sentiment === 'negative' || sentiment === 'concerned') return '#dc2626';
    if (sentiment === 'mixed') return 'var(--accent-orange)';
    return 'var(--text-medium)';
  };

  return (
    <section
      id="politikerView"
      className="section-wrapper"
      style={{
        padding: 'var(--space-10) 0',
        background: 'linear-gradient(180deg, rgba(138, 43, 226, 0.1) 0%, rgba(107, 165, 57, 0.1) 100%)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: 700,
            color: 'white',
            marginBottom: 'var(--space-2)'
          }}>
            Politiker Dashboard
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Få indsigt i borgernes spørgsmål og interesser med AI-analyse
          </p>
        </div>

        {/* Key Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-4)',
          marginBottom: 'var(--space-6)'
        }}>
          <div className="glass-card card-hover" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
            <div style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 700,
              color: 'var(--primary-blue)',
              marginBottom: 'var(--space-1)'
            }}>
              {insightsData.engagement.totalQuestions}
            </div>
            <div style={{
              fontSize: 'var(--font-size-base)',
              color: 'var(--text-dark)',
              fontWeight: 500
            }}>
              Spørgsmål modtaget
            </div>
          </div>

          <div className="glass-card card-hover" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
            <div style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 700,
              color: 'var(--secondary-green)',
              marginBottom: 'var(--space-1)'
            }}>
              {insightsData.engagement.satisfactionRate}%
            </div>
            <div style={{
              fontSize: 'var(--font-size-base)',
              color: 'var(--text-dark)',
              fontWeight: 500
            }}>
              Tilfredshed
            </div>
          </div>

          <div className="glass-card card-hover" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
            <div style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 700,
              color: 'var(--accent-orange)',
              marginBottom: 'var(--space-1)'
            }}>
              {insightsData.engagement.avgResponseTime}
            </div>
            <div style={{
              fontSize: 'var(--font-size-base)',
              color: 'var(--text-dark)',
              fontWeight: 500
            }}>
              Gns. svartid
            </div>
          </div>

          <div className="glass-card card-hover" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
            <div style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 700,
              color: 'var(--primary-blue-dark)',
              marginBottom: 'var(--space-1)'
            }}>
              {insightsData.engagement.answeredQuestions}
            </div>
            <div style={{
              fontSize: 'var(--font-size-base)',
              color: 'var(--text-dark)',
              fontWeight: 500
            }}>
              Besvarede spørgsmål
            </div>
          </div>
        </div>

        {/* Top Topics and Recent Questions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-4)'
        }}>
          {/* Top Topics */}
          <div className="glass-card" style={{ padding: 'var(--space-4)' }}>
            <h3 style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 600,
              color: 'var(--text-dark)',
              marginBottom: 'var(--space-3)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-1)'
            }}>
              🔥 Mest diskuterede emner
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)'
            }}>
              {insightsData.topTopics.map((topic, index) => (
                <div
                  key={index}
                  style={{
                    padding: 'var(--space-3)',
                    background: index === 0 ? 'rgba(107, 165, 57, 0.1)' : 'white',
                    border: index === 0 ? '2px solid var(--secondary-green)' : '1px solid #E5E7EB',
                    borderRadius: 'var(--radius-md)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 'var(--space-1)'
                  }}>
                    <h4 style={{
                      fontSize: 'var(--font-size-base)',
                      fontWeight: 600,
                      color: 'var(--text-dark)',
                      flex: 1
                    }}>
                      {topic.topic}
                    </h4>
                    <span style={{ fontSize: 'var(--font-size-xl)' }}>
                      {getTrendIcon(topic.trend)}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-medium)'
                  }}>
                    <span>{topic.count} spørgsmål</span>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-sm)',
                      background: getSentimentColor(topic.sentiment),
                      color: 'white',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 600
                    }}>
                      {topic.sentiment === 'positive' && '😊 Positiv'}
                      {topic.sentiment === 'neutral' && '😐 Neutral'}
                      {topic.sentiment === 'mixed' && '🤔 Blandet'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Questions */}
          <div className="glass-card" style={{ padding: 'var(--space-4)' }}>
            <h3 style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 600,
              color: 'var(--text-dark)',
              marginBottom: 'var(--space-3)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-1)'
            }}>
              ❓ Seneste spørgsmål
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)'
            }}>
              {insightsData.recentQuestions.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: 'var(--space-3)',
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: `3px solid ${getSentimentColor(item.sentiment)}`
                  }}
                >
                  <div style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--text-dark)',
                    marginBottom: 'var(--space-2)',
                    lineHeight: 'var(--line-height-relaxed)'
                  }}>
                    "{item.question}"
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-medium)'
                  }}>
                    <span className="badge badge-info">{item.category}</span>
                    <button className="btn-link" style={{ fontSize: 'var(--font-size-sm)' }}>
                      Se detaljer →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary" style={{
              width: '100%',
              marginTop: 'var(--space-3)'
            }}>
              Se alle spørgsmål
            </button>
          </div>
        </div>

        {/* AI Insight Card */}
        <div
          className="glass-card"
          style={{
            padding: 'var(--space-4)',
            marginTop: 'var(--space-4)',
            background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1) 0%, rgba(107, 165, 57, 0.1) 100%)'
          }}
        >
          <h4 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 600,
            color: 'var(--text-dark)',
            marginBottom: 'var(--space-2)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-1)'
          }}>
            🤖 AI Analyse & Anbefalinger
          </h4>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--text-dark)',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--space-2)'
          }}>
            <strong>Trending:</strong> Klimaplan 2030 viser 48% stigning i interesse denne uge, primært positive spørgsmål
            om konkrete tiltag og tidsplan. Borgere ønsker mere information om vindmølleprojekter og cykelinfrastruktur.
          </p>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--text-dark)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            <strong>Anbefaling:</strong> Overvej at publicere en FAQ om klimaplanen og afholde et borgermøde for at
            adressere de hyppigste spørgsmål om implementering og finansiering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoliticianDashboard;
