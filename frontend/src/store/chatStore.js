import { create } from 'zustand';

/**
 * Chat Store - Manages chat state and messages
 *
 * UX/UI Considerations:
 * - Message history management
 * - Typing indicators for better feedback
 * - Auto-scroll to latest message
 * - Example questions for better onboarding
 */
const useChatStore = create((set, get) => ({
  // State
  messages: [
    {
      id: 1,
      type: 'ai',
      content: 'Hej! Jeg er din demokrati-assistent. Jeg kan hjælpe dig med at forstå kommunale beslutninger, finde relevante dokumenter og besvare spørgsmål om lokalpolitik. Hvad vil du gerne vide?',
      timestamp: new Date().toISOString(),
    }
  ],

  isTyping: false,
  currentInput: '',

  // Example questions for better UX
  exampleQuestions: [
    {
      id: 1,
      icon: '💡',
      text: 'Hvad blev besluttet om klimaplan 2030?',
      category: 'beslutning'
    },
    {
      id: 2,
      icon: '📅',
      text: 'Hvornår er næste byrådsmøde?',
      category: 'møde'
    },
    {
      id: 3,
      icon: '🏫',
      text: 'Hvad er budgettet til skoler i år?',
      category: 'budget'
    }
  ],

  // Actions
  addMessage: (message) => {
    const newMessage = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...message
    };

    set((state) => ({
      messages: [...state.messages, newMessage]
    }));
  },

  addUserMessage: (content) => {
    get().addMessage({
      type: 'user',
      content
    });
  },

  addAIMessage: (content) => {
    get().addMessage({
      type: 'ai',
      content
    });
  },

  setIsTyping: (isTyping) => {
    set({ isTyping });
  },

  setCurrentInput: (input) => {
    set({ currentInput: input });
  },

  clearMessages: () => {
    set({
      messages: [get().messages[0]] // Keep welcome message
    });
  },

  // Simulate AI response (will be replaced with API call)
  sendMessage: async (userMessage) => {
    const { addUserMessage, addAIMessage, setIsTyping } = get();

    // Add user message
    addUserMessage(userMessage);

    // Show typing indicator for better UX
    setIsTyping(true);

    // Simulate API delay (replace with actual API call)
    setTimeout(() => {
      const aiResponse = `Jeg har modtaget dit spørgsmål: "${userMessage}". Dette er en demo-respons. I produktion ville jeg søge i kommunens dokumenter og give dig et præcist svar baseret på de seneste beslutninger og dagsordener.`;

      addAIMessage(aiResponse);
      setIsTyping(false);
    }, 1500);
  },
}));

export default useChatStore;
