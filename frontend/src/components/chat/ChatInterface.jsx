import { useRef, useEffect, useState } from 'react';
import useChatStore from '../../store/chatStore';

const ChatInterface = ({ onSourceClick }) => {
  const {
    messages,
    isTyping,
    currentInput,
    setCurrentInput,
    sendMessage,
    exampleQuestions
  } = useChatStore();

  const messagesEndRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Expand chat when there are messages
    if (messages.length > 1) {
      setIsExpanded(true);
    }
  }, [messages]);

  const askQuestion = (question) => {
    setCurrentInput('');
    sendMessage(question);
  };

  const handleSendMessage = () => {
    if (currentInput.trim()) {
      sendMessage(currentInput);
      setCurrentInput('');
      setIsExpanded(true);
    }
  };

  const openSourceDocument = (source) => {
    if (onSourceClick) {
      onSourceClick(source.documentId);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div id="chatSection" style={{
      width: '100%',
      height: '100%'
    }}>
        {/* Section Header */}
        <div style={{
          marginBottom: 'var(--space-3)'
        }}>
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
            <span style={{ fontSize: 'var(--font-size-2xl)' }}>🤖</span>
            Echo - AI Assistent
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 'var(--line-height-normal)',
            textShadow: '0 1px 4px rgba(0,0,0,0.15)'
          }}>
            Stil spørgsmål om kommunale beslutninger
          </p>
        </div>

        {/* Chat Container */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(24px)',
          borderRadius: 'var(--radius-2xl)',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255,255,255,0.25)'
        }}>
          {/* Messages Area */}
          <div style={{
            height: isExpanded ? '600px' : '450px',
            overflowY: 'auto',
            padding: 'var(--space-3)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
            background: 'rgba(255,255,255,0.1)',
            transition: 'height var(--transition-base)'
          }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className="chat-message"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-2)',
                  flexDirection: message.type === 'user' ? 'row-reverse' : 'row'
                }}
              >
                {/* Avatar - Compact */}
                <div style={{
                  flexShrink: 0,
                  height: '32px',
                  width: '32px',
                  borderRadius: '50%',
                  background: message.type === 'ai'
                    ? 'linear-gradient(135deg, var(--primary-terracotta), var(--secondary-blue))'
                    : 'linear-gradient(135deg, var(--secondary-blue), var(--primary-terracotta))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-xs)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                }}>
                  {message.type === 'ai' ? '🤖' : '👤'}
                </div>

                {/* Message Bubble - Compact */}
                <div style={{
                  flex: 1,
                  background: message.type === 'ai' ? 'white' : 'var(--primary-terracotta)',
                  color: message.type === 'ai' ? 'var(--text-dark)' : 'white',
                  borderRadius: message.type === 'ai'
                    ? '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)'
                    : 'var(--radius-lg) 0 var(--radius-lg) var(--radius-lg)',
                  padding: 'var(--space-2)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  maxWidth: '75%',
                  border: message.type === 'ai' ? '1px solid rgba(0,0,0,0.08)' : 'none'
                }}>
                  <p style={{
                    fontSize: 'var(--font-size-sm)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: message.sources ? 'var(--space-2)' : 0
                  }}>
                    {message.content}
                  </p>

                  {/* Sources - if AI message has sources */}
                  {message.type === 'ai' && message.sources && (
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-1)',
                      marginTop: 'var(--space-2)',
                      paddingTop: 'var(--space-2)',
                      borderTop: '1px solid rgba(0,0,0,0.08)'
                    }}>
                      {message.sources.map((source, idx) => (
                        <button
                          key={idx}
                          onClick={() => openSourceDocument(source)}
                          style={{
                            fontSize: 'var(--font-size-xs)',
                            padding: '4px 8px',
                            background: 'var(--primary-terracotta)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            transition: 'all var(--transition-fast)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'var(--primary-terracotta-dark)';
                            e.target.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'var(--primary-terracotta)';
                            e.target.style.transform = 'scale(1)';
                          }}
                        >
                          📄 {source.title} (s. {source.page})
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator - Compact */}
            {isTyping && (
              <div className="chat-message" style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-2)'
              }}>
                <div style={{
                  height: '32px',
                  width: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary-terracotta), var(--secondary-blue))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-xs)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                }}>
                  🤖
                </div>
                <div className="typing-indicator" style={{
                  background: 'white',
                  borderRadius: '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)',
                  padding: 'var(--space-2)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.08)'
                }}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Example Questions */}
          <div style={{
            padding: 'var(--space-2)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-1)'
          }}>
            {exampleQuestions.slice(0, 3).map((q) => (
              <button
                key={q.id}
                onClick={() => askQuestion(q.text)}
                className="btn btn-outline btn-sm"
                style={{
                  borderRadius: '50px',
                  padding: '4px 12px',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 500,
                  transition: 'all var(--transition-base)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white'
                }}
              >
                {q.icon} {q.text.split(' ').slice(0, 3).join(' ')}...
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: 'var(--space-2)',
            background: 'rgba(255,255,255,0.05)'
          }}>
            <div style={{
              display: 'flex',
              gap: 'var(--space-2)',
              alignItems: 'center'
            }}>
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Stil dit spørgsmål..."
                className="chat-input"
                style={{
                  flex: 1,
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '50px',
                  padding: 'var(--space-1) var(--space-3)',
                  fontSize: 'var(--font-size-sm)',
                  outline: 'none',
                  transition: 'all var(--transition-base)',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                  e.target.style.background = 'rgba(255,255,255,0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!currentInput.trim()}
                style={{
                  background: 'linear-gradient(135deg, var(--primary-terracotta), var(--primary-terracotta-dark))',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  padding: 'var(--space-1) var(--space-3)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 600,
                  opacity: currentInput.trim() ? 1 : 0.5,
                  cursor: currentInput.trim() ? 'pointer' : 'not-allowed',
                  transition: 'all var(--transition-base)',
                  boxShadow: currentInput.trim() ? '0 2px 8px rgba(193, 85, 77, 0.3)' : 'none'
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChatInterface;
