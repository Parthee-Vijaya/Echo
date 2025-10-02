import { useState } from 'react';

const VideoSection = () => {
  const [selectedTimestamp, setSelectedTimestamp] = useState(null);

  const videoData = {
    title: 'Byrådsmøde - 15. december 2024',
    duration: '2:45:30',
    date: '2024-12-15',
    committee: 'Byrådet',
    timestamps: [
      { id: 1, time: '00:00', title: 'Velkomst og godkendelse af dagsorden', duration: '5 min' },
      { id: 2, time: '05:30', title: 'Klimaplan 2030 - præsentation', duration: '25 min', highlight: true },
      { id: 3, time: '30:45', title: 'Debat om klimaplan', duration: '45 min', highlight: true },
      { id: 4, time: '1:15:20', title: 'Budget 2025 - første behandling', duration: '35 min' },
      { id: 5, time: '1:50:15', title: 'Østhavn byplan - behandling', duration: '30 min' },
      { id: 6, time: '2:20:00', title: 'Spørgsmål fra borgere', duration: '15 min' },
      { id: 7, time: '2:35:30', title: 'Meddelelser og lukn ing', duration: '10 min' }
    ]
  };

  const jumpToTimestamp = (timestamp) => {
    setSelectedTimestamp(timestamp);
    // In real implementation, this would control video playback
  };

  return (
    <section
      id="videoSection"
      className="section-wrapper"
      style={{
        padding: 'var(--space-10) 0',
        background: 'rgba(255,255,255,0.02)'
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
            Video fra møder
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Se optagelser fra byrådsmøder med AI-genererede timestamps
          </p>
        </div>

        {/* Video Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: 'var(--space-4)'
        }}>
          {/* Video Player */}
          <div className="glass-card" style={{ padding: 'var(--space-4)' }}>
            {/* Video Header */}
            <div style={{ marginBottom: 'var(--space-3)' }}>
              <h3 style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 600,
                color: 'var(--text-dark)',
                marginBottom: 'var(--space-2)'
              }}>
                {videoData.title}
              </h3>
              <div style={{
                display: 'flex',
                gap: 'var(--space-3)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-medium)'
              }}>
                <span>📅 {videoData.date}</span>
                <span>🕐 {videoData.duration}</span>
                <span className="badge badge-info">{videoData.committee}</span>
              </div>
            </div>

            {/* Video Player Placeholder */}
            <div style={{
              background: '#000',
              borderRadius: 'var(--radius-md)',
              aspectRatio: '16/9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--space-3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Play Button */}
              <button style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--font-size-3xl)',
                cursor: 'pointer',
                transition: 'all var(--transition-base)'
              }}>
                ▶️
              </button>

              {/* Current Timestamp Indicator */}
              {selectedTimestamp && (
                <div style={{
                  position: 'absolute',
                  bottom: 'var(--space-2)',
                  left: 'var(--space-2)',
                  background: 'rgba(0,0,0,0.8)',
                  color: 'white',
                  padding: 'var(--space-1) var(--space-2)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--font-size-sm)'
                }}>
                  {selectedTimestamp.time} - {selectedTimestamp.title}
                </div>
              )}
            </div>

            {/* Video Controls */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'var(--space-2)',
              background: '#F3F4F6',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <button className="icon-btn">⏮️</button>
                <button className="icon-btn">▶️</button>
                <button className="icon-btn">⏭️</button>
                <button className="icon-btn">🔊</button>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                <button className="icon-btn">⚙️</button>
                <button className="icon-btn">📺</button>
                <button className="icon-btn">⛶</button>
              </div>
            </div>

            {/* AI Insight */}
            <div style={{
              marginTop: 'var(--space-3)',
              padding: 'var(--space-3)',
              background: 'rgba(107, 165, 57, 0.1)',
              borderLeft: '3px solid var(--secondary-green)',
              borderRadius: 'var(--radius-md)'
            }}>
              <h4 style={{
                fontSize: 'var(--font-size-base)',
                fontWeight: 600,
                color: 'var(--text-dark)',
                marginBottom: 'var(--space-1)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-1)'
              }}>
                🤖 AI Indsigt
              </h4>
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-medium)',
                lineHeight: 'var(--line-height-relaxed)'
              }}>
                Dette møde fokuserede primært på Klimaplan 2030, med en længere debat (45 min) om konkrete tiltag.
                Budgetbehandlingen introducerede investeringsplanen for 2025-2028.
              </p>
            </div>
          </div>

          {/* Timestamps Sidebar */}
          <div className="glass-card" style={{ padding: 'var(--space-4)' }}>
            <h4 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 600,
              color: 'var(--text-dark)',
              marginBottom: 'var(--space-3)'
            }}>
              📑 Kapitler
            </h4>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              maxHeight: '600px',
              overflowY: 'auto'
            }}>
              {videoData.timestamps.map((timestamp) => (
                <button
                  key={timestamp.id}
                  onClick={() => jumpToTimestamp(timestamp)}
                  style={{
                    padding: 'var(--space-2)',
                    borderRadius: 'var(--radius-md)',
                    border: timestamp.highlight ? '2px solid var(--secondary-green)' : '1px solid #E5E7EB',
                    background: selectedTimestamp?.id === timestamp.id ? '#F3F4F6' : 'white',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all var(--transition-base)',
                    position: 'relative'
                  }}
                  className="card-hover"
                >
                  {/* Highlight Badge */}
                  {timestamp.highlight && (
                    <div style={{
                      position: 'absolute',
                      top: 'var(--space-1)',
                      right: 'var(--space-1)',
                      background: 'var(--secondary-green)',
                      color: 'white',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 600
                    }}>
                      ⭐ Vigtig
                    </div>
                  )}

                  {/* Time */}
                  <div style={{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 600,
                    color: 'var(--primary-blue)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    🕐 {timestamp.time}
                  </div>

                  {/* Title */}
                  <div style={{
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 500,
                    color: 'var(--text-dark)',
                    marginBottom: 'var(--space-1)',
                    lineHeight: 'var(--line-height-tight)'
                  }}>
                    {timestamp.title}
                  </div>

                  {/* Duration */}
                  <div style={{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-medium)'
                  }}>
                    Varighed: {timestamp.duration}
                  </div>
                </button>
              ))}
            </div>

            {/* Download Transcript */}
            <button className="btn btn-outline" style={{
              width: '100%',
              marginTop: 'var(--space-3)'
            }}>
              📥 Download transskription
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
