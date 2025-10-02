import { useState, useRef, useEffect } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hej! Jeg er din demokrati-assistent. Jeg kan hjælpe dig med at forstå kommunale beslutninger, finde relevante dokumenter og besvare spørgsmål om lokalpolitik. Hvad vil du gerne vide?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const askQuestion = (question) => {
    setInputValue(question);
    sendMessage(question);
  };

  const sendMessage = async (customMessage) => {
    const messageText = customMessage || inputValue;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageText
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: `Jeg har modtaget dit spørgsmål: "${messageText}". Dette er en demo-respons. I produktion ville jeg søge i kommunens dokumenter og give dig et præcist svar baseret på de seneste beslutninger og dagsordener.`
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
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
            <button
              onClick={() => askQuestion('Hvad blev besluttet om klimaplan 2030?')}
              className="btn btn-outline btn-sm"
            >
              💡 Klimaplan 2030?
            </button>
            <button
              onClick={() => askQuestion('Hvornår er næste byrådsmøde?')}
              className="btn btn-outline btn-sm"
            >
              📅 Næste møde?
            </button>
            <button
              onClick={() => askQuestion('Hvad er budgettet til skoler i år?')}
              className="btn btn-outline btn-sm"
            >
              🏫 Skolebudget?
            </button>
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
                onClick={() => sendMessage()}
                className="btn btn-primary"
                disabled={!inputValue.trim()}
                style={{
                  opacity: inputValue.trim() ? 1 : 0.5,
                  cursor: inputValue.trim() ? 'pointer' : 'not-allowed'
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
