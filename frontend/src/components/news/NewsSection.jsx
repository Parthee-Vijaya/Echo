import { useState } from 'react';

const NewsSection = () => {
  const [filter, setFilter] = useState('all');

  const newsData = [
    {
      id: 1,
      title: 'Klimaplan 2030 godkendt',
      type: 'beslutning',
      date: '2024-12-15',
      category: 'Byråd',
      excerpt: 'Byrådet har godkendt den ambitiøse klimaplan med mål om CO2-neutralitet i 2030. Planen indeholder investeringer på 2,4 milliarder kr.',
      imageUrl: null
    },
    {
      id: 2,
      title: 'Byrådsmøde: Budget 2025',
      type: 'dagsorden',
      date: '2024-12-20',
      category: 'Økonomiudvalg',
      excerpt: 'Kommende byrådsmøde behandler budgetforslag for 2025 med særligt fokus på folkeskoler og grøn omstilling.',
      imageUrl: null
    },
    {
      id: 3,
      title: 'Ny cykelsti langs Ringvejen',
      type: 'nyhed',
      date: '2024-12-12',
      category: 'Teknik & Miljø',
      excerpt: 'Kommunen investerer 15 mio. kr. i ny cykelinfrastruktur for at gøre det mere sikkert og attraktivt at cykle i Kalundborg.',
      imageUrl: null
    },
    {
      id: 4,
      title: 'Modernisering af skoler',
      type: 'beslutning',
      date: '2024-12-08',
      category: 'Børn & Unge',
      excerpt: '342 mio. kr. afsat til folkeskoler i 2025 - en stigning på 4,2% til flere lærere og nyt IT-udstyr.',
      imageUrl: null
    },
    {
      id: 5,
      title: 'Byplan Østhavn til behandling',
      type: 'dagsorden',
      date: '2025-01-08',
      category: 'Plan og Byg',
      excerpt: 'Forslag til nyt boligområde med 450 boliger og 30% grønne områder kommer til behandling i Plan og Byg.',
      imageUrl: null
    },
    {
      id: 6,
      title: 'Borgerinddragelse om havneudvikling',
      type: 'nyhed',
      date: '2024-12-05',
      category: 'Borgerinddragelse',
      excerpt: 'Kom til åbent møde den 15. januar om fremtidens havneområde. Din mening tæller i udviklingen af Kalundborg Havn.',
      imageUrl: null
    }
  ];

  const filteredNews = filter === 'all'
    ? newsData
    : newsData.filter(item => item.type === filter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getTagLabel = (type) => {
    const labels = {
      'beslutning': 'Beslutning',
      'dagsorden': 'Dagsorden',
      'nyhed': 'Nyhed'
    };
    return labels[type] || type;
  };

  return (
    <section
      id="newsSection"
      className="section-wrapper"
      style={{
        padding: 'var(--space-10) 0',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-5xl)',
            fontWeight: 800,
            color: 'white',
            marginBottom: 'var(--space-3)',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)',
            letterSpacing: '-0.02em'
          }}>
            Seneste nyheder og beslutninger
          </h2>
          <p style={{
            fontSize: 'var(--font-size-xl)',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            margin: '0 auto',
            textShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}>
            Hold dig opdateret med de seneste nyheder, beslutninger og kommende møder
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-2)',
          marginBottom: 'var(--space-6)',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'btn btn-secondary' : 'btn btn-outline'}
            style={{
              background: filter === 'all' ? 'white' : 'rgba(255,255,255,0.1)',
              color: filter === 'all' ? 'var(--primary-blue)' : 'white',
              border: filter === 'all' ? '2px solid white' : '1px solid rgba(255,255,255,0.3)'
            }}
          >
            Alle
          </button>
          <button
            onClick={() => setFilter('beslutning')}
            className={filter === 'beslutning' ? 'btn btn-success' : 'btn btn-outline'}
            style={{
              background: filter === 'beslutning' ? 'var(--secondary-green)' : 'rgba(255,255,255,0.1)',
              color: 'white',
              border: filter === 'beslutning' ? '2px solid var(--secondary-green)' : '1px solid rgba(255,255,255,0.3)'
            }}
          >
            Beslutninger
          </button>
          <button
            onClick={() => setFilter('dagsorden')}
            className={filter === 'dagsorden' ? 'btn btn-primary' : 'btn btn-outline'}
            style={{
              background: filter === 'dagsorden' ? 'var(--primary-blue)' : 'rgba(255,255,255,0.1)',
              color: 'white',
              border: filter === 'dagsorden' ? '2px solid var(--primary-blue)' : '1px solid rgba(255,255,255,0.3)'
            }}
          >
            Dagsordener
          </button>
          <button
            onClick={() => setFilter('nyhed')}
            className={filter === 'nyhed' ? 'btn' : 'btn btn-outline'}
            style={{
              background: filter === 'nyhed' ? 'var(--accent-orange)' : 'rgba(255,255,255,0.1)',
              color: 'white',
              border: filter === 'nyhed' ? '2px solid var(--accent-orange)' : '1px solid rgba(255,255,255,0.3)'
            }}
          >
            Nyheder
          </button>
        </div>

        {/* News Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-4)'
        }}>
          {filteredNews.map((news) => (
            <div key={news.id} className="news-card card-hover">
              {/* Tag */}
              <div className={`news-card-tag ${news.type}`}>
                {getTagLabel(news.type)}
              </div>

              {/* PDF Preview Style */}
              <div style={{
                height: '200px',
                background: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 'var(--space-3)',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* PDF Header */}
                <div style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, var(--primary-terracotta) 0%, var(--primary-terracotta-dark) 100%)',
                  padding: 'var(--space-2)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: 'var(--space-2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}>
                  <div style={{
                    fontSize: 'var(--font-size-xl)',
                    color: 'white'
                  }}>
                    📄
                  </div>
                  <div style={{
                    flex: 1,
                    color: 'white',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 600,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {news.title}
                  </div>
                </div>

                {/* Mock PDF Content Lines */}
                <div style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-1)',
                  opacity: 0.6
                }}>
                  <div style={{
                    height: '8px',
                    background: 'linear-gradient(90deg, var(--text-dark) 0%, transparent 100%)',
                    borderRadius: '2px',
                    width: '90%'
                  }}></div>
                  <div style={{
                    height: '8px',
                    background: 'linear-gradient(90deg, var(--text-dark) 0%, transparent 100%)',
                    borderRadius: '2px',
                    width: '85%'
                  }}></div>
                  <div style={{
                    height: '8px',
                    background: 'linear-gradient(90deg, var(--text-dark) 0%, transparent 100%)',
                    borderRadius: '2px',
                    width: '95%'
                  }}></div>
                  <div style={{
                    height: '8px',
                    background: 'linear-gradient(90deg, var(--text-dark) 0%, transparent 100%)',
                    borderRadius: '2px',
                    width: '80%'
                  }}></div>
                  <div style={{
                    height: '8px',
                    background: 'linear-gradient(90deg, var(--text-dark) 0%, transparent 100%)',
                    borderRadius: '2px',
                    width: '88%'
                  }}></div>
                  <div style={{
                    height: '8px',
                    background: 'linear-gradient(90deg, var(--text-dark) 0%, transparent 100%)',
                    borderRadius: '2px',
                    width: '92%'
                  }}></div>
                </div>

                {/* Category watermark */}
                <div style={{
                  position: 'absolute',
                  bottom: 'var(--space-2)',
                  right: 'var(--space-2)',
                  fontSize: 'var(--font-size-3xl)',
                  opacity: 0.1,
                  fontWeight: 700
                }}>
                  {news.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 'var(--space-3)' }}>
                {/* Date & Category */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-2)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-medium)'
                }}>
                  <span>📅 {formatDate(news.date)}</span>
                  <span>•</span>
                  <span>{news.category}</span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  marginBottom: 'var(--space-2)',
                  lineHeight: 'var(--line-height-tight)'
                }}>
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-medium)',
                  lineHeight: 'var(--line-height-relaxed)',
                  marginBottom: 'var(--space-3)'
                }}>
                  {news.excerpt}
                </p>

                {/* Read More */}
                <button className="btn-link" style={{
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)'
                }}>
                  Læs mere →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
