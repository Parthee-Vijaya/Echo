import { create } from 'zustand';

/**
 * Document Store - Manages documents, news, and video state
 *
 * UX/UI Considerations:
 * - Document filtering and search
 * - Recent documents for quick access
 * - Loading states for better feedback
 * - Category-based organization
 */
const useDocumentStore = create((set, get) => ({
  // State
  documents: [
    {
      id: 1,
      title: 'Klimaplan 2030',
      type: 'beslutning',
      date: '2024-12-15',
      category: 'Miljø & Klima',
      description: 'Ambitiøs klimaplan med mål om CO2-neutralitet',
      pages: 45,
      relevance: 98
    },
    {
      id: 2,
      title: 'Budget 2025',
      type: 'dagsorden',
      date: '2024-12-10',
      category: 'Økonomi',
      description: 'Budgetforslag med fokus på skoler og grøn omstilling',
      pages: 128,
      relevance: 95
    },
    {
      id: 3,
      title: 'Byplan Østhavn',
      type: 'dagsorden',
      date: '2024-12-05',
      category: 'Plan & Byg',
      description: '450 nye boliger med 30% grønne områder',
      pages: 67,
      relevance: 92
    }
  ],

  news: [
    {
      id: 1,
      title: 'Klimaplan 2030 godkendt',
      type: 'beslutning',
      date: '2024-12-15',
      category: 'Byråd',
      excerpt: 'Byrådet har godkendt den ambitiøse klimaplan med mål om CO2-neutralitet i 2030. Planen indeholder investeringer på 2,4 milliarder kr.',
      tag: 'beslutning'
    },
    {
      id: 2,
      title: 'Byrådsmøde: Budget 2025',
      type: 'dagsorden',
      date: '2024-12-20',
      category: 'Økonomiudvalg',
      excerpt: 'Kommende byrådsmøde behandler budgetforslag for 2025 med særligt fokus på folkeskoler og grøn omstilling.',
      tag: 'dagsorden'
    },
    {
      id: 3,
      title: 'Ny cykelsti langs Ringvejen',
      type: 'nyhed',
      date: '2024-12-12',
      category: 'Teknik & Miljø',
      excerpt: 'Kommunen investerer 15 mio. kr. i ny cykelinfrastruktur for at gøre det mere sikkert og attraktivt at cykle i Kalundborg.',
      tag: 'nyhed'
    }
  ],

  selectedDocument: null,
  isLoading: false,
  searchQuery: '',
  selectedCategory: 'all',

  // Actions
  setSelectedDocument: (doc) => {
    set({ selectedDocument: doc });
  },

  setIsLoading: (loading) => {
    set({ isLoading: loading });
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },

  setSelectedCategory: (category) => {
    set({ selectedCategory: category });
  },

  // Computed - Filtered documents
  getFilteredDocuments: () => {
    const { documents, searchQuery, selectedCategory } = get();

    return documents.filter(doc => {
      const matchesSearch = !searchQuery ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' ||
        doc.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  },

  // Get recent documents (last 5)
  getRecentDocuments: () => {
    return get().documents
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  },

  // Get news by type
  getNewsByType: (type) => {
    if (type === 'all') return get().news;
    return get().news.filter(item => item.tag === type);
  },

  // Add new document (for future API integration)
  addDocument: (doc) => {
    set((state) => ({
      documents: [...state.documents, { id: Date.now(), ...doc }]
    }));
  },

  // Add news item
  addNews: (item) => {
    set((state) => ({
      news: [...state.news, { id: Date.now(), ...item }]
    }));
  },
}));

export default useDocumentStore;
