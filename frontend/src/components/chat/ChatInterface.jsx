import { useRef, useEffect } from 'react';
import useChatStore from '../../store/chatStore';

const ChatInterface = () => {
  const {
    messages,
    isTyping,
    currentInput,
    setCurrentInput,
    sendMessage,
    exampleQuestions
  } = useChatStore();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const askQuestion = (question) => {
    setCurrentInput('');
    sendMessage(question);
  };

  const handleSendMessage = () => {
    if (currentInput.trim()) {
      sendMessage(currentInput);
      setCurrentInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="chatSection" className="section-wrapper" style={{
      padding: 'var(--space-8) 0',
      background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.5) 100%)'
    }}>
      <div className="container-sm">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-6)'
        }}>
          <h2 style={{
            fontSize: 'var(--font-size-4xl)',
            lineHeight: 'var(--line-height-tight)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            marginBottom: 'var(--space-2)'
          }}>
            AI Demokrati-assistent
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--text-medium)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Stil spørgsmål om kommunale beslutninger, dagsordener og politiske emner
          </p>
        </div>

        {/* Chat Container */}
        <div className="glass-card" style={{
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden'
        }}>
          {/* Messages Area */}
          <div style={{
            height: '384px',
            overflowY: 'auto',
            padding: 'var(--space-3)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)'
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
                {/* Avatar */}
                <div style={{
                  flexShrink: 0,
                  height: '32px',
                  width: '32px',
                  borderRadius: '50%',
                  background: message.type === 'ai' ? 'var(--primary-blue)' : 'var(--secondary-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 600
                }}>
                  {message.type === 'ai' ? 'AI' : 'DU'}
                </div>

                {/* Message Bubble */}
                <div style={{
                  flex: 1,
                  background: message.type === 'ai' ? 'white' : 'var(--primary-blue)',
                  color: message.type === 'ai' ? 'var(--text-dark)' : 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-2)',
                  boxShadow: 'var(--shadow-sm)',
                  maxWidth: '80%'
                }}>
                  <p style={{
                    fontSize: 'var(--font-size-base)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginBottom: 0
                  }}>
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
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
                  background: 'var(--primary-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 600
                }}>
                  AI
                </div>
                <div className="typing-indicator" style={{
                  background: 'white',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-2)',
                  boxShadow: 'var(--shadow-sm)'
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
            borderTop: '1px solid var(--border-color)',
            background: 'rgba(255,255,255,0.5)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-1)'
          }}>
            {exampleQuestions.map((q) => (
              <button
                key={q.id}
                onClick={() => askQuestion(q.text)}
                className="btn btn-outline btn-sm"
              >
                {q.icon} {q.text.split(' ').slice(0, 3).join(' ')}...
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div style={{
            borderTop: '1px solid var(--border-color)',
            padding: 'var(--space-2)',
            background: 'white'
          }}>
            <div style={{
              display: 'flex',
              gap: 'var(--space-2)'
            }}>
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Stil et spørgsmål..."
                className="chat-input"
                style={{
                  flex: 1,
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--space-1) var(--space-2)',
                  fontSize: 'var(--font-size-base)',
                  outline: 'none'
                }}
              />
              <button
                onClick={handleSendMessage}
                className="btn btn-primary"
                disabled={!currentInput.trim()}
                style={{
                  opacity: currentInput.trim() ? 1 : 0.5,
                  cursor: currentInput.trim() ? 'pointer' : 'not-allowed'
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
