/**
 * Chat Controller
 * Handles AI chat interactions
 *
 * UX/UI Considerations:
 * - Fast response times (<2s ideal)
 * - Confidence scoring for transparency
 * - Source citations for trust
 */

// Simulated chat history storage (replace with database)
const chatHistory = new Map();

/**
 * Send a message to AI assistant
 */
export const sendChatMessage = async (req, res) => {
  try {
    const { message, userId = 'anonymous' } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({
        error: 'Message is required'
      });
    }

    // Simulate AI processing delay (replace with actual AI service)
    await new Promise(resolve => setTimeout(resolve, 800));

    // Generate demo response
    const response = generateDemoResponse(message);

    // Store in history
    if (!chatHistory.has(userId)) {
      chatHistory.set(userId, []);
    }

    chatHistory.get(userId).push({
      timestamp: new Date().toISOString(),
      userMessage: message,
      aiResponse: response.reply
    });

    res.json(response);
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      error: 'Failed to process message'
    });
  }
};

/**
 * Get chat history for a user
 */
export const getChatHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const history = chatHistory.get(userId) || [];

    res.json({
      messages: history,
      total: history.length
    });
  } catch (error) {
    console.error('History error:', error);
    res.status(500).json({
      error: 'Failed to fetch history'
    });
  }
};

/**
 * Generate demo AI response
 * TODO: Replace with actual AI service (OpenAI, Claude, etc.)
 */
function generateDemoResponse(message) {
  const lowerMessage = message.toLowerCase();

  // Context-aware responses based on keywords
  if (lowerMessage.includes('klimaplan') || lowerMessage.includes('co2')) {
    return {
      reply: 'Klimaplan 2030 blev godkendt den 15. december 2024 med ambitiøse mål om CO2-neutralitet. Planen indeholder investeringer på 2,4 milliarder kr. fordelt over følgende områder: vindenergi, solceller, grøn transport og energirenovering af kommunale bygninger.',
      confidence: 0.95,
      sources: [
        {
          title: 'Klimaplan 2030',
          type: 'beslutning',
          date: '2024-12-15'
        }
      ]
    };
  }

  if (lowerMessage.includes('byrådsmøde') || lowerMessage.includes('møde')) {
    return {
      reply: 'Næste byrådsmøde finder sted den 20. december 2024 kl. 17:00 i Rådhuset. På dagsordenen står Budget 2025 med særligt fokus på folkeskoler og grøn omstilling. Mødet er åbent for offentligheden.',
      confidence: 0.92,
      sources: [
        {
          title: 'Byrådsmøde: Budget 2025',
          type: 'dagsorden',
          date: '2024-12-20'
        }
      ]
    };
  }

  if (lowerMessage.includes('skole') || lowerMessage.includes('budget')) {
    return {
      reply: '342 millioner kr. er afsat til folkeskoler i 2025 - en stigning på 4,2% i forhold til 2024. Midlerne skal blandt andet gå til ansættelse af flere lærere, nyt IT-udstyr og modernisering af skolebyggninger.',
      confidence: 0.89,
      sources: [
        {
          title: 'Modernisering af skoler',
          type: 'beslutning',
          date: '2024-12-08'
        }
      ]
    };
  }

  // Default response
  return {
    reply: `Jeg har modtaget dit spørgsmål: "${message}". For at give dig det mest præcise svar, vil jeg søge i kommunens dokumenter og beslutninger. I denne demo-version kan jeg allerede svare på spørgsmål om klimaplan, byrådsmøder og skolebudget.`,
    confidence: 0.75,
    sources: []
  };
}
