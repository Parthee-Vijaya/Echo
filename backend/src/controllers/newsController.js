/**
 * News Controller
 * Handles news and announcements
 */

// Mock data
const mockNews = [
  {
    id: 1,
    title: 'Klimaplan 2030 godkendt',
    type: 'beslutning',
    date: '2024-12-15',
    category: 'Byråd',
    excerpt: 'Byrådet har godkendt den ambitiøse klimaplan med mål om CO2-neutralitet i 2030. Planen indeholder investeringer på 2,4 milliarder kr.',
    tag: 'beslutning',
    content: 'Fuld artikel indhold her...'
  },
  {
    id: 2,
    title: 'Byrådsmøde: Budget 2025',
    type: 'dagsorden',
    date: '2024-12-20',
    category: 'Økonomiudvalg',
    excerpt: 'Kommende byrådsmøde behandler budgetforslag for 2025 med særligt fokus på folkeskoler og grøn omstilling.',
    tag: 'dagsorden',
    content: 'Fuld artikel indhold her...'
  },
  {
    id: 3,
    title: 'Ny cykelsti langs Ringvejen',
    type: 'nyhed',
    date: '2024-12-12',
    category: 'Teknik & Miljø',
    excerpt: 'Kommunen investerer 15 mio. kr. i ny cykelinfrastruktur for at gøre det mere sikkert og attraktivt at cykle i Kalundborg.',
    tag: 'nyhed',
    content: 'Fuld artikel indhold her...'
  },
  {
    id: 4,
    title: 'Modernisering af skoler',
    type: 'beslutning',
    date: '2024-12-08',
    category: 'Børn & Unge',
    excerpt: '342 mio. kr. afsat til folkeskoler i 2025 - en stigning på 4,2% til flere lærere og nyt IT-udstyr.',
    tag: 'beslutning',
    content: 'Fuld artikel indhold her...'
  },
  {
    id: 5,
    title: 'Byplan Østhavn til behandling',
    type: 'dagsorden',
    date: '2025-01-08',
    category: 'Plan og Byg',
    excerpt: 'Forslag til nyt boligområde med 450 boliger og 30% grønne områder kommer til behandling i Plan og Byg.',
    tag: 'dagsorden',
    content: 'Fuld artikel indhold her...'
  },
  {
    id: 6,
    title: 'Borgerinddragelse om havneudvikling',
    type: 'nyhed',
    date: '2024-12-05',
    category: 'Borgerinddragelse',
    excerpt: 'Kom til åbent møde den 15. januar om fremtidens havneområde. Din mening tæller i udviklingen af Kalundborg Havn.',
    tag: 'nyhed',
    content: 'Fuld artikel indhold her...'
  }
];

/**
 * Get all news with pagination
 */
export const getAllNews = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;

    // Sort by date (newest first)
    const sorted = [...mockNews].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Pagination
    const paginated = sorted.slice(
      parseInt(offset),
      parseInt(offset) + parseInt(limit)
    );

    res.json({
      news: paginated,
      total: sorted.length,
      offset: parseInt(offset),
      limit: parseInt(limit)
    });
  } catch (error) {
    console.error('Get news error:', error);
    res.status(500).json({
      error: 'Failed to fetch news'
    });
  }
};

/**
 * Get news by type
 */
export const getNewsByType = async (req, res) => {
  try {
    const { type } = req.params;

    if (!['beslutning', 'dagsorden', 'nyhed', 'all'].includes(type)) {
      return res.status(400).json({
        error: 'Invalid type. Must be one of: beslutning, dagsorden, nyhed, all'
      });
    }

    let filtered = type === 'all'
      ? [...mockNews]
      : mockNews.filter(item => item.tag === type);

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    res.json({
      news: filtered,
      total: filtered.length,
      type
    });
  } catch (error) {
    console.error('Get news by type error:', error);
    res.status(500).json({
      error: 'Failed to fetch news'
    });
  }
};
