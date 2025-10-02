import {
  politikerStats,
  topicInterests,
  priorityItems,
  recentQuestions,
} from '../data/politikerData';

const PoliticianHero = () => {
  return (
    <section
      id="hero"
      className="gradient-bg"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'var(--space-10) 0',
        background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 50%, var(--secondary-green) 100%)',
        color: 'white',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          width: '288px',
          height: '288px',
          background: 'rgba(255,255,255,0.12)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          width: '384px',
          height: '384px',
          background: 'rgba(34, 197, 94, 0.2)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <h1 style={{
            fontSize: 'var(--font-size-4xl)',
            fontWeight: 700,
            marginBottom: 'var(--space-2)',
          }}>
            Politik Insights Dashboard
          </h1>
          <p style={{ fontSize: 'var(--font-size-xl)', color: 'rgba(255,255,255,0.9)' }}>
            AI-drevet analyse af borgerengagement og emneinteresser
          </p>
        </div>

        <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {politikerStats.map((stat) => (
            <div
              key={stat.id}
              className="glass-dark"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-3)',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700 }}>{stat.value}</div>
              <div style={{ fontSize: 'var(--font-size-sm)', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: stat.deltaColor, marginTop: '4px' }}>
                {stat.delta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TopicInterestSection = () => {
  return (
    <section id="topicInterest" style={{ background: 'rgba(255,255,255,0.4)', padding: 'var(--space-10) 0' }}>
      <div className="container">
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: 'var(--primary-blue-dark)' }}>
            Emneinteresse
          </h2>
          <p style={{ color: 'var(--text-medium)', marginTop: 'var(--space-1)' }}>
            Mest diskuterede emner baseret på borgerspørgsmål - seneste 7 dage
          </p>
        </div>

        <div style={{ display: 'grid', gap: 'var(--space-3)', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {topicInterests.map((topic) => (
            <div key={topic.id} className="insight-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: '#111827' }}>{topic.title}</h3>
                <span className={`topic-tag ${topic.tagVariant}`}>{topic.tag}</span>
              </div>
              <div style={{ display: 'grid', gap: 'var(--space-1)' }}>
                {topic.metrics.map((metric) => (
                  <div key={metric.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-sm)' }}>
                    <span style={{ color: '#6b7280' }}>{metric.label}:</span>
                    <span style={{ fontWeight: 600, color: metric.accent }}>{metric.value}</span>
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
      style={{
      background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.85) 100%)',
      padding: 'var(--space-8) 0',
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
          <span role="img" aria-hidden="true" style={{ fontSize: 'var(--font-size-2xl)' }}>
            🚨
          </span>
          <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: '#111827' }}>
            Kræver handling
          </h2>
        </div>
        <p style={{ color: '#4b5563', marginBottom: 'var(--space-4)' }}>
          Emner med høj borgerinteresse som mangler svar eller opfølgning
        </p>

        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          {priorityItems.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                borderLeft: `4px solid ${item.borderColor}`,
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{
                      background: item.levelBg,
                      color: item.levelText,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}>
                      {item.level}
                    </span>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: '#6b7280' }}>{item.unanswered}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: '#111827', marginBottom: 'var(--space-1)' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', color: '#4b5563' }}>{item.description}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', fontSize: 'var(--font-size-sm)', color: '#4b5563' }}>
                    {item.stats.map((stat) => (
                      <span key={stat}>{stat}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #e5e7eb',
                paddingTop: 'var(--space-2)',
                gap: 'var(--space-2)',
                flexWrap: 'wrap',
              }}>
                <span style={{ fontSize: 'var(--font-size-xs)', color: '#6b7280' }}>{item.lastReviewed}</span>
                <button
                  type="button"
                  className="btn"
                  style={{
                    background: item.ctaBg,
                    color: 'white',
                    padding: 'var(--space-2) var(--space-3)',
                    borderRadius: 'var(--radius-md)',
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
    <section id="recentQuestions" style={{ padding: 'var(--space-10) 0', background: 'rgba(255,255,255,0.6)' }}>
      <div className="container">
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 700, color: '#111827', marginBottom: 'var(--space-1)' }}>
            Seneste borgerspørgsmål
          </h2>
          <p style={{ color: '#4b5563' }}>
            Anonyme spørgsmål med AI-linkede dokumenter og beslutninger
          </p>
        </div>

        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          {recentQuestions.map((question) => (
            <div key={question.id} className="glass-card" style={{ padding: 'var(--space-4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-3)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{
                    background: question.topicBg,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 700,
                  }}>
                    {question.topicLabel}
                  </span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: '#6b7280' }}>{question.timeAgo}</span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: question.statusColor }}>{question.status}</span>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-3)' }}>
                <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, color: '#111827', marginBottom: 'var(--space-1)' }}>
                  {question.question}
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: '#4b5563' }}>{question.summary}</p>
              </div>

              <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 'var(--space-3)', display: 'grid', gap: 'var(--space-2)' }}>
                <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: '#374151' }}>
                  📄 Relaterede dokumenter & beslutninger
                </h4>
                <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
                  {question.documents.map((doc, index) => {
                    const bgColor = doc.highlight === 'green' ? 'rgba(34,197,94,0.12)' : 'rgba(59,130,246,0.12)';
                    const borderColor = doc.highlight === 'green' ? 'rgba(34,197,94,0.3)' : 'rgba(59,130,246,0.3)';
                    return (
                      <div
                        key={`${question.id}-${index}`}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 'var(--space-2)',
                          padding: 'var(--space-2)',
                          borderRadius: 'var(--radius-md)',
                          background: bgColor,
                          border: `1px solid ${borderColor}`,
                          flexWrap: 'wrap',
                        }}
                      >
                        <div>
                          <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>
                            {doc.title}
                          </p>
                          <p style={{ fontSize: 'var(--font-size-xs)', color: '#6b7280' }}>{doc.meta}</p>
                        </div>
                        <button type="button" className="btn-link" style={{ color: doc.buttonColor }}>
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

        <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
          <button type="button" className="glass-card" style={{
            padding: 'var(--space-3) var(--space-5)',
            borderRadius: 'var(--radius-xl)',
            color: 'var(--primary-blue)',
            fontWeight: 600,
          }}>
            Vis flere spørgsmål (47 mere)
          </button>
        </div>
      </div>
    </section>
  );
};

const PolitikerView = () => {
  return (
    <div id="politikerView">
      <PoliticianHero />
      <TopicInterestSection />
      <PrioritySection />
      <RecentQuestionsSection />
    </div>
  );
};

export default PolitikerView;
