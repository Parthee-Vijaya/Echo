import { useState, useRef } from 'react';
import Hero from '../components/common/Hero';
import ChatInterface from '../components/chat/ChatInterface';
import DocumentSection from '../components/document/DocumentSection';
import NewsSection from '../components/news/NewsSection';
import VideoSection from '../components/video/VideoSection';
import MeetingsSection from '../components/meetings/MeetingsSection';

const BorgerView = () => {
  const [selectedDocumentId, setSelectedDocumentId] = useState('klimaplan');
  const documentSectionRef = useRef(null);

  const handleSourceClick = (documentId) => {
    setSelectedDocumentId(documentId);
    // Scroll to document section smoothly
    if (documentSectionRef.current) {
      documentSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(180deg, #1E4469 0%, #2C5F96 30%, #4A7FB8 100%)',
      minHeight: '100vh'
    }}>
      <Hero />

      {/* Integrated Chat & Document Section */}
      <section style={{
        padding: 'var(--space-8) 0',
        position: 'relative'
      }}>
        <div className="container" style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-4)',
            '@media (max-width: 968px)': {
              gridTemplateColumns: '1fr'
            }
          }}>
            <ChatInterface onSourceClick={handleSourceClick} />
            <div ref={documentSectionRef}>
              <DocumentSection selectedDocumentId={selectedDocumentId} onDocumentChange={setSelectedDocumentId} />
            </div>
          </div>
        </div>
      </section>

      <NewsSection />
      <VideoSection />
      <MeetingsSection />
    </div>
  );
};

export default BorgerView;
