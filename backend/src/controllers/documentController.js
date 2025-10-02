/**
 * Document Controller
 * Handles document operations
 */

// Mock data (replace with database)
const mockDocuments = [
  {
    id: 1,
    title: 'Klimaplan 2030',
    type: 'beslutning',
    date: '2024-12-15',
    category: 'Miljø & Klima',
    description: 'Ambitiøs klimaplan med mål om CO2-neutralitet',
    pages: 45,
    relevance: 98,
    content: 'Fuld dokument indhold her...',
    url: '/documents/klimaplan-2030.pdf'
  },
  {
    id: 2,
    title: 'Budget 2025',
    type: 'dagsorden',
    date: '2024-12-10',
    category: 'Økonomi',
    description: 'Budgetforslag med fokus på skoler og grøn omstilling',
    pages: 128,
    relevance: 95,
    content: 'Fuld dokument indhold her...',
    url: '/documents/budget-2025.pdf'
  },
  {
    id: 3,
    title: 'Byplan Østhavn',
    type: 'dagsorden',
    date: '2024-12-05',
    category: 'Plan & Byg',
    description: '450 nye boliger med 30% grønne områder',
    pages: 67,
    relevance: 92,
    content: 'Fuld dokument indhold her...',
    url: '/documents/byplan-osthavn.pdf'
  }
];

/**
 * Get all documents with optional filtering
 */
export const getAllDocuments = async (req, res) => {
  try {
    const { category, type, limit = 50, offset = 0 } = req.query;

    let filtered = [...mockDocuments];

    if (category && category !== 'all') {
      filtered = filtered.filter(doc => doc.category === category);
    }

    if (type && type !== 'all') {
      filtered = filtered.filter(doc => doc.type === type);
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Pagination
    const paginatedDocs = filtered.slice(
      parseInt(offset),
      parseInt(offset) + parseInt(limit)
    );

    res.json({
      documents: paginatedDocs,
      total: filtered.length,
      offset: parseInt(offset),
      limit: parseInt(limit)
    });
  } catch (error) {
    console.error('Get documents error:', error);
    res.status(500).json({
      error: 'Failed to fetch documents'
    });
  }
};

/**
 * Get document by ID
 */
export const getDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const document = mockDocuments.find(doc => doc.id === parseInt(id));

    if (!document) {
      return res.status(404).json({
        error: 'Document not found'
      });
    }

    res.json({ document });
  } catch (error) {
    console.error('Get document error:', error);
    res.status(500).json({
      error: 'Failed to fetch document'
    });
  }
};

/**
 * Search documents
 */
export const searchDocuments = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim().length === 0) {
      return res.status(400).json({
        error: 'Search query is required'
      });
    }

    const query = q.toLowerCase();
    const results = mockDocuments.filter(doc =>
      doc.title.toLowerCase().includes(query) ||
      doc.description.toLowerCase().includes(query) ||
      doc.category.toLowerCase().includes(query)
    );

    res.json({
      documents: results,
      total: results.length,
      query: q
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({
      error: 'Failed to search documents'
    });
  }
};

/**
 * Get recent documents
 */
export const getRecentDocuments = async (req, res) => {
  try {
    const { limit = 5 } = req.query;

    const recent = [...mockDocuments]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, parseInt(limit));

    res.json({
      documents: recent
    });
  } catch (error) {
    console.error('Get recent error:', error);
    res.status(500).json({
      error: 'Failed to fetch recent documents'
    });
  }
};
