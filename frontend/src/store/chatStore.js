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
      content: 'Hej! Jeg er Echo, din AI demokrati-assistent. Jeg kan hjælpe dig med at forstå kommunale beslutninger, finde relevante dokumenter og besvare spørgsmål om lokalpolitik. Hvad vil du gerne vide?',
      timestamp: new Date().toISOString(),
    }
  ],

  isTyping: false,
  currentInput: '',

  // Example questions for better UX
  exampleQuestions: [
    {
      id: 1,
      icon: '🌱',
      text: 'Hvad indeholder Klimaplan 2030?',
      category: 'klima',
      documentId: 'klimaplan'
    },
    {
      id: 2,
      icon: '💰',
      text: 'Hvad er hovedpunkterne i Budget 2025?',
      category: 'økonomi',
      documentId: 'budget'
    },
    {
      id: 3,
      icon: '🏘️',
      text: 'Hvad planlægges i Østhavn området?',
      category: 'byplan',
      documentId: 'byplan'
    },
    {
      id: 4,
      icon: '🏫',
      text: 'Hvor meget investeres i folkeskoler?',
      category: 'uddannelse',
      documentId: 'budget'
    },
    {
      id: 5,
      icon: '♻️',
      text: 'Hvilke grønne tiltag er der planlagt?',
      category: 'miljø',
      documentId: 'klimaplan'
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

  addAIMessage: (content, sources = null) => {
    get().addMessage({
      type: 'ai',
      content,
      sources
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
      // Intelligent response based on question content
      let aiResponse = '';
      let sources = [];
      const messageLower = userMessage.toLowerCase();

      if (messageLower.includes('klimaplan') || messageLower.includes('klima') || messageLower.includes('grønne tiltag')) {
        aiResponse = `Ifølge Klimaplan 2030 investerer Kalundborg Kommune 2,4 milliarder kr. i grøn omstilling over perioden 2025-2030. Investeringerne omfatter energieffektivisering af offentlige bygninger (450 mio. kr.), etablering af vindmølleparker (850 mio. kr.), samt omlægning af den kollektive trafik til el-drift (380 mio. kr.). Målet er CO2-neutralitet inden 2030.`;
        sources = [
          {
            title: 'Klimaplan 2030',
            page: 12,
            category: 'Byråd',
            highlight: 'Kommunen investerer 2,4 milliarder kr. i grøn omstilling',
            documentId: 'klimaplan'
          }
        ];
      } else if (messageLower.includes('budget') || messageLower.includes('økonomi')) {
        aiResponse = `Budget 2025 har et totalbudget på 5,2 milliarder kr. Hovedprioriteringer inkluderer: Folkeskoler (342 mio. kr. - en stigning på 4,2%), sundhed og ældre (850 mio. kr.), klimainvesteringer (480 mio. kr.), og infrastruktur (125 mio. kr.). Budgettet er godkendt med fokus på grøn omstilling og velfærd.`;
        sources = [
          {
            title: 'Budget 2025',
            page: 8,
            category: 'Økonomiudvalg',
            highlight: 'Totalbudget 5,2 milliarder kr. med fokus på skoler og klima',
            documentId: 'budget'
          }
        ];
      } else if (messageLower.includes('østhavn') || messageLower.includes('byplan') || messageLower.includes('bolig')) {
        aiResponse = `Byplan Østhavn omfatter udviklingen af et nyt boligområde med 450 nye boliger fordelt på rækkehuse, lejligheder og seniorboliger. Planen sikrer at 30% af området udgøres af grønne fællesarealer, parker og legepladser. Derudover etableres cykelstier, offentlig transport og nærbutikker. Første spadestik forventes i 2026.`;
        sources = [
          {
            title: 'Byplan Østhavn',
            page: 5,
            category: 'Plan og Byg',
            highlight: '450 nye boliger med 30% grønne områder',
            documentId: 'byplan'
          }
        ];
      } else if (messageLower.includes('skole') || messageLower.includes('folkeskole') || messageLower.includes('uddannelse')) {
        aiResponse = `I Budget 2025 afsættes 342 mio. kr. til folkeskoler - en stigning på 4,2% fra sidste år. Pengene går til ansættelse af flere lærere (reducerer klassekvotienter), nyt IT-udstyr og digitale læremidler, renovering af skolebygninger, og styrket specialundervisning. Målet er at forbedre læringsudbyttet og skabe bedre rammer for eleverne.`;
        sources = [
          {
            title: 'Budget 2025',
            page: 34,
            category: 'Børn & Unge',
            highlight: '342 mio. kr. til folkeskoler - stigning på 4,2%',
            documentId: 'budget'
          }
        ];
      } else if (messageLower.includes('miljø') || messageLower.includes('bæredygtighed')) {
        aiResponse = `Kalundborg Kommune prioriterer miljø og bæredygtighed højt. Ud over Klimaplan 2030's investeringer, arbejdes der med affaldshåndtering (70% genanvendelse), beskyttelse af natur (1.850 ha beskyttet areal), regnvandshåndtering (8 nye bassiner), og biodiversitet. Kommunen samarbejder også med lokale virksomheder om industrial symbiose - et unikt bæredygtighedsprojekt.`;
        sources = [
          {
            title: 'Klimaplan 2030',
            page: 45,
            category: 'Teknik & Miljø',
            highlight: 'Omfattende miljøtiltag og bæredygtighedsinitiativer',
            documentId: 'klimaplan'
          }
        ];
      } else {
        // Default response
        aiResponse = `Tak for dit spørgsmål! Jeg har adgang til kommunens beslutninger, budgetter og planer. Du kan spørge mig om Klimaplan 2030, Budget 2025, Byplan Østhavn, skoleinvesteringer, eller miljøtiltag. Hvad vil du gerne vide mere om?`;
        sources = [];
      }

      addAIMessage(aiResponse, sources.length > 0 ? sources : null);
      setIsTyping(false);
    }, 1500);
  },
}));

export default useChatStore;
