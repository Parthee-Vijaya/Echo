import { useMemo, useEffect } from 'react';

const documents = [
  {
    id: 'klimaplan',
    title: 'Klimaplan 2030',
    date: '15. december 2024',
    pages: '132 sider',
    committee: 'Byrådet',
  },
  {
    id: 'budget',
    title: 'Budget 2025',
    date: '10. december 2024',
    pages: '248 sider',
    committee: 'Økonomiudvalg',
  },
  {
    id: 'byplan',
    title: 'Byplan Østhavn',
    date: '5. december 2024',
    pages: '94 sider',
    committee: 'Plan og Byg',
  },
];

const DocumentSection = ({ selectedDocumentId, onDocumentChange }) => {

  const selectedDocument = useMemo(
    () => documents.find((doc) => doc.id === selectedDocumentId) ?? documents[0],
    [selectedDocumentId],
  );

  return (
    <div id="pdfSection" style={{ width: '100%', height: '100%' }}>
      {/* Section Header */}
      <div style={{ marginBottom: 'var(--space-3)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-3xl)',
          lineHeight: 'var(--line-height-tight)',
          fontWeight: 700,
          color: 'white',
          marginBottom: 'var(--space-2)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          textShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}>
          <span style={{ fontSize: 'var(--font-size-2xl)' }}>📄</span>
          Dokumentviewer
        </h2>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 'var(--line-height-normal)',
          textShadow: '0 1px 4px rgba(0,0,0,0.15)'
        }}>
          Gennemse dagsordener med AI-højdepunkter
        </p>
      </div>

      {/* Document Container */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(24px)',
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        border: '1px solid rgba(255,255,255,0.25)',
        height: '650px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Document Tabs */}
        <div style={{
          padding: 'var(--space-2)',
          background: 'rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'flex', gap: 'var(--space-1)', overflowX: 'auto' }}>
            {documents.map((doc) => {
              const isActive = selectedDocumentId === doc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => onDocumentChange && onDocumentChange(doc.id)}
                  style={{
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-md)',
                    border: `1px solid ${isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}`,
                    background: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all var(--transition-base)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 500,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {doc.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Document Header - Compact */}
        <div style={{
          padding: 'var(--space-2)',
          background: 'rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 600,
            color: 'white',
            marginBottom: '4px'
          }}>
            {selectedDocument.title}
          </div>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            color: 'rgba(255,255,255,0.7)'
          }}>
            📅 {selectedDocument.date} • 📄 {selectedDocument.pages} • {selectedDocument.committee}
          </div>
        </div>

        {/* Document Preview */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: 'var(--space-3)',
          background: 'rgba(255,255,255,0.1)'
        }}>
          {/* PDF Preview Page */}
          <div style={{
            background: 'white',
            padding: 'var(--space-4)',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            fontFamily: 'Georgia, serif',
            lineHeight: 'var(--line-height-relaxed)',
            minHeight: '500px'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-xl)',
              marginBottom: 'var(--space-3)',
              color: 'var(--text-dark)',
              fontWeight: 700
            }}>
              {selectedDocument.title}
            </h3>

            <p style={{ marginBottom: 'var(--space-2)', color: 'var(--text-dark)' }}>
              Byrådet har ved mødet den 15. december 2024 vedtaget den ambitiøse klimaplan
              med målsætning om CO2-neutralitet inden 2030.
            </p>

            {/* Highlighted section */}
            <div style={{
              background: 'rgba(193, 85, 77, 0.15)',
              padding: 'var(--space-2)',
              borderLeft: '4px solid var(--primary-terracotta)',
              marginBottom: 'var(--space-2)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <p style={{ margin: 0, color: 'var(--text-dark)' }}>
                <strong>Kommunen investerer 2,4 milliarder kr. i grøn omstilling</strong> fordelt
                over perioden 2025-2030. Investeringerne omfatter energieffektivisering af offentlige
                bygninger (450 mio. kr.), etablering af vindmølleparker (850 mio. kr.), samt
                omlægning af den kollektive trafik til el-drift (380 mio. kr.).
              </p>
            </div>

            <p style={{ marginBottom: 'var(--space-2)', color: 'var(--text-dark)' }}>
              Planen er resultatet af en omfattende borgerinddragelsesproces med over 1.200
              deltagere fra hele kommunen. De konkrete tiltag er prioriteret ud fra både
              klimaeffekt og økonomisk bæredygtighed.
            </p>

            {/* AI Note */}
            <div style={{
              marginTop: 'var(--space-3)',
              padding: 'var(--space-2)',
              background: 'var(--neutral-gray)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-medium)'
            }}>
              💡 <strong>AI-fremhævning:</strong> Dette afsnit indeholder vigtige investeringsoplysninger
            </div>
          </div>
        </div>

        {/* Document Footer */}
        <div style={{
          padding: 'var(--space-2)',
          background: 'rgba(255,255,255,0.05)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: 'var(--font-size-xs)',
            color: 'rgba(255,255,255,0.7)'
          }}>
            Side 1 af 132
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
            <button style={{
              padding: 'var(--space-1) var(--space-2)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              fontSize: 'var(--font-size-xs)',
              cursor: 'pointer'
            }}>
              ← Forrige
            </button>
            <button style={{
              padding: 'var(--space-1) var(--space-2)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              fontSize: 'var(--font-size-xs)',
              cursor: 'pointer'
            }}>
              Næste →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentSection;
