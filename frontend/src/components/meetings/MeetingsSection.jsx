const MeetingsSection = () => {
  const meetingsData = [
    {
      id: 1,
      title: 'Byrådsmøde',
      date: '2025-01-15',
      time: '17:00',
      location: 'Rådhuset, Byrådssalen',
      committee: 'Byrådet',
      status: 'upcoming',
      agendaItems: [
        'Godkendelse af budget 2025',
        'Klimaplan 2030 - opfølgning',
        'Byplan Østhavn - behandling'
      ],
      documents: 3,
      liveStream: true
    },
    {
      id: 2,
      title: 'Økonomiudvalg',
      date: '2025-01-10',
      time: '15:30',
      location: 'Rådhuset, Mødelokale 2',
      committee: 'Økonomiudvalg',
      status: 'upcoming',
      agendaItems: [
        'Budget 2025 - forberedelse',
        'Investeringsplan 2025-2028',
        'Regnskab Q4 2024'
      ],
      documents: 5,
      liveStream: false
    },
    {
      id: 3,
      title: 'Plan og Byg',
      date: '2025-01-12',
      time: '16:00',
      location: 'Rådhuset, Mødelokale 1',
      committee: 'Plan og Byg',
      status: 'upcoming',
      agendaItems: [
        'Østhavn boligprojekt',
        'Cykelsti Ringvejen',
        'Lokalplan 145'
      ],
      documents: 4,
      liveStream: false
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section
      id="dagsordenSection"
      className="section-wrapper"
      style={{
        padding: 'var(--space-10) 0',
        background: 'rgba(255,255,255,0.03)'
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
            Kommende møder og dagsordener
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Se kommende møder og følg med i den politiske proces
          </p>
        </div>

        {/* Meetings Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 'var(--space-4)'
        }}>
          {meetingsData.map((meeting) => (
            <div
              key={meeting.id}
              className="glass-card card-hover"
              style={{
                padding: 'var(--space-4)',
                position: 'relative'
              }}
            >
              {/* Live Indicator */}
              {meeting.liveStream && (
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-2)',
                  right: 'var(--space-2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)',
                  padding: 'var(--space-1) var(--space-2)',
                  background: '#dc2626',
                  color: 'white',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    background: 'white',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite'
                  }}></span>
                  LIVE STREAM
                </div>
              )}

              {/* Committee Badge */}
              <div className="badge badge-info" style={{ marginBottom: 'var(--space-2)' }}>
                {meeting.committee}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 600,
                color: 'var(--text-dark)',
                marginBottom: 'var(--space-3)'
              }}>
                {meeting.title}
              </h3>

              {/* Meeting Details */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-3)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-medium)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                  <span>📅</span>
                  <span>{formatDate(meeting.date)}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                  <span>🕐</span>
                  <span>{meeting.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                  <span>📍</span>
                  <span>{meeting.location}</span>
                </div>
              </div>

              {/* Agenda Items */}
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <h4 style={{
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  marginBottom: 'var(--space-1)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Dagsordenspunkter:
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-1)'
                }}>
                  {meeting.agendaItems.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--text-medium)',
                        paddingLeft: 'var(--space-2)',
                        position: 'relative'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--primary-blue)'
                      }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents Count */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-1)',
                marginBottom: 'var(--space-3)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-medium)'
              }}>
                <span>📎</span>
                <span>{meeting.documents} vedhæftede dokumenter</span>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: 'var(--space-2)',
                flexWrap: 'wrap'
              }}>
                <button className="btn btn-primary" style={{ flex: 1 }}>
                  Se dagsorden
                </button>
                {meeting.liveStream && (
                  <button className="btn btn-success" style={{ flex: 1 }}>
                    Se live
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetingsSection;
