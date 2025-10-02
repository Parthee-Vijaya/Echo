import { useState } from 'react';

const DocumentViewer = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const documentsData = [
    {
      id: 1,
      title: 'Klimaplan 2030',
      type: 'beslutning',
      date: '2024-12-15',
      category: 'Miljø & Klima',
      pages: 45,
      relevance: 98,
      description: 'Ambitiøs klimaplan med mål om CO2-neutralitet'
    },
    {
      id: 2,
      title: 'Budget 2025',
      type: 'dagsorden',
      date: '2024-12-10',
      category: 'Økonomi',
      pages: 128,
      relevance: 95,
      description: 'Budgetforslag med fokus på skoler og grøn omstilling'
    },
    {
      id: 3,
      title: 'Byplan Østhavn',
      type: 'dagsorden',
      date: '2024-12-05',
      category: 'Plan & Byg',
      pages: 67,
      relevance: 92,
      description: '450 nye boliger med 30% grønne områder'
    },
    {
      id: 4,
      title: 'Cykelinfrastruktur 2025',
      type: 'beslutning',
      date: '2024-12-01',
      category: 'Trafik',
      pages: 32,
      relevance: 88,
      description: '15 mio. kr. til ny cykelsti langs Ringvejen'
    },
    {
      id: 5,
      title: 'Skolereform 2025',
      type: 'beslutning',
      date: '2024-11-28',
      category: 'Uddannelse',
      pages: 54,
      relevance: 90,
      description: '342 mio. kr. til folkeskoler - stigning på 4,2%'
    }
  ];

  const filteredDocs = documentsData.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(documentsData.map(doc => doc.category))];

  return (
    <section
      id="pdfSection"
      className="section-wrapper"
      style={{
        padding: 'var(--space-10) 0',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%)'
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
            Dokumenter og beslutninger
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Søg og gennemse kommunale dokumenter med AI-assisteret indsigt
          </p>
        </div>

        {/* Split Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: selectedDoc ? '400px 1fr' : '1fr',
          gap: 'var(--space-4)',
          minHeight: '600px'
        }}>
          {/* Document List */}
          <div className="glass-card" style={{ padding: 'var(--space-4)' }}>
            {/* Search & Filter */}
            <div style={{ marginBottom: 'var(--space-3)' }}>
              <input
                type="text"
                placeholder="🔍 Søg i dokumenter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: 'var(--space-2)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #E5E7EB',
                  fontSize: 'var(--font-size-base)',
                  marginBottom: 'var(--space-2)'
                }}
              />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: 'var(--space-2)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #E5E7EB',
                  fontSize: 'var(--font-size-base)'
                }}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'Alle kategorier' : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Document List Items */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              maxHeight: '500px',
              overflowY: 'auto'
            }}>
              {filteredDocs.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc)}
                  className="doc-list-item"
                  style={{
                    background: selectedDoc?.id === doc.id ? '#F3F4F6' : 'white',
                    borderColor: selectedDoc?.id === doc.id ? 'var(--primary-blue)' : '#E5E7EB'
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
                      flex: 1,
                      textAlign: 'left'
                    }}>
                      {doc.title}
                    </h4>
                    <span className={`badge badge-${doc.type === 'beslutning' ? 'success' : 'info'}`}>
                      {doc.type}
                    </span>
                  </div>
                  <p style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-medium)',
                    marginBottom: 'var(--space-1)',
                    textAlign: 'left'
                  }}>
                    {doc.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--text-medium)'
                  }}>
                    <span>{doc.pages} sider</span>
                    <span>Relevans: {doc.relevance}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* PDF Viewer */}
          {selectedDoc && (
            <div className="glass-card" style={{ padding: 'var(--space-4)' }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 'var(--space-3)',
                paddingBottom: 'var(--space-3)',
                borderBottom: '1px solid #E5E7EB'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    {selectedDoc.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: 'var(--space-2)',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-medium)'
                  }}>
                    <span>📅 {selectedDoc.date}</span>
                    <span>📄 {selectedDoc.pages} sider</span>
                    <span className={`badge badge-${selectedDoc.type === 'beslutning' ? 'success' : 'info'}`}>
                      {selectedDoc.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="icon-btn"
                  style={{ fontSize: 'var(--font-size-xl)' }}
                >
                  ✕
                </button>
              </div>

              {/* PDF Viewer Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-3)'
              }}>
                <button className="btn btn-outline btn-sm">← Forrige</button>
                <span style={{
                  padding: 'var(--space-1) var(--space-2)',
                  background: '#F3F4F6',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)'
                }}>
                  Side 1 af {selectedDoc.pages}
                </span>
                <button className="btn btn-outline btn-sm">Næste →</button>
                <button className="btn btn-outline btn-sm">🔍 Zoom</button>
                <button className="btn btn-outline btn-sm">💾 Download</button>
              </div>

              {/* PDF Content Placeholder */}
              <div style={{
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: 'var(--radius-md)',
                minHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-6)',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: 'var(--font-size-5xl)',
                  marginBottom: 'var(--space-2)'
                }}>
                  📄
                </div>
                <h4 style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  marginBottom: 'var(--space-2)'
                }}>
                  {selectedDoc.title}
                </h4>
                <p style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--text-medium)',
                  textAlign: 'center',
                  maxWidth: '500px',
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  {selectedDoc.description}
                </p>

                {/* AI Source Citations */}
                <div style={{
                  marginTop: 'var(--space-4)',
                  width: '100%',
                  maxWidth: '600px'
                }}>
                  <h5 style={{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    marginBottom: 'var(--space-2)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    🤖 AI-citater fra dokumentet:
                  </h5>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}>
                    <div style={{
                      padding: 'var(--space-2)',
                      background: 'rgba(0, 85, 164, 0.05)',
                      borderLeft: '3px solid var(--primary-blue)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--font-size-sm)'
                    }}>
                      <p style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-1)' }}>
                        "Målet er CO2-neutralitet i 2030 gennem investeringer i vedvarende energi..."
                      </p>
                      <span style={{ color: 'var(--text-medium)', fontSize: 'var(--font-size-xs)' }}>
                        📄 Side 12 • Relevans: 98%
                      </span>
                    </div>
                    <div style={{
                      padding: 'var(--space-2)',
                      background: 'rgba(0, 85, 164, 0.05)',
                      borderLeft: '3px solid var(--primary-blue)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--font-size-sm)'
                    }}>
                      <p style={{ color: 'var(--text-dark)', marginBottom: 'var(--space-1)' }}>
                        "Investeringer på 2,4 milliarder kr. over 6 år til klimaomstilling..."
                      </p>
                      <span style={{ color: 'var(--text-medium)', fontSize: 'var(--font-size-xs)' }}>
                        📄 Side 8 • Relevans: 95%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocumentViewer;
