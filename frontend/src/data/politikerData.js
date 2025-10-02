export const politikerStats = [
  {
    id: 'interactions',
    value: '1,847',
    label: 'Borgerinteraktioner',
    delta: '↑ 12.5%',
    deltaColor: '#bbf7d0',
  },
  {
    id: 'topics',
    value: '23',
    label: 'Aktive emner',
    delta: '↑ 5 nye',
    deltaColor: '#bbf7d0',
  },
  {
    id: 'accuracy',
    value: '94%',
    label: 'AI Nøjagtighed',
    delta: 'Høj kvalitet',
    deltaColor: '#d1fae5',
  },
  {
    id: 'critical',
    value: '3',
    label: 'Kritiske emner',
    delta: '⚠ Kræver handling',
    deltaColor: '#fed7aa',
  },
];

export const topicInterests = [
  {
    id: 'klimaplan',
    title: 'Klimaplan 2030',
    tag: '🔥 Meget Høj',
    tagVariant: 'topic-hot',
    metrics: [
      { label: 'Spørgsmål', value: '142', accent: 'var(--primary-blue)' },
      { label: 'Sentiment', value: '76% Positiv', accent: '#16a34a' },
      { label: 'Trend', value: '↑ 24%', accent: '#16a34a' },
    ],
  },
  {
    id: 'budget',
    title: 'Budget 2025',
    tag: '📈 Høj',
    tagVariant: 'topic-trending',
    metrics: [
      { label: 'Spørgsmål', value: '98', accent: 'var(--primary-blue)' },
      { label: 'Sentiment', value: '52% Neutral', accent: '#6b7280' },
      { label: 'Trend', value: '↑ 18%', accent: '#16a34a' },
    ],
  },
  {
    id: 'byplan',
    title: 'Byplan Østhavn',
    tag: '📊 Mellem',
    tagVariant: 'topic-moderate',
    metrics: [
      { label: 'Spørgsmål', value: '76', accent: 'var(--primary-blue)' },
      { label: 'Sentiment', value: '64% Positiv', accent: '#16a34a' },
      { label: 'Trend', value: '↑ 31%', accent: '#16a34a' },
    ],
  },
];

export const priorityItems = [
  {
    id: 'fjordvejsskolen',
    level: 'Høj Prioritet',
    levelBg: '#fee2e2',
    levelText: '#b91c1c',
    borderColor: '#ef4444',
    unanswered: '18 ubesvarede spørgsmål',
    title: 'Parkeringsforhold ved Fjordvejsskolen',
    description:
      'Borgere efterlyser løsning på trafikkaos ved morgenafleveringer. Seneste spørgsmål for 3 timer siden.',
    stats: ['💬 18 spørgsmål', '⭐ Høj engagement (↑45%)'],
    lastReviewed: 'Sidst behandlet: Aldrig',
    ctaLabel: 'Tag handling →',
    ctaBg: '#dc2626',
  },
  {
    id: 'el-busser',
    level: 'Mellem Prioritet',
    levelBg: '#ffedd5',
    levelText: '#c2410c',
    borderColor: '#f97316',
    unanswered: '12 ubesvarede spørgsmål',
    title: 'Tidsplan for el-busser uklart',
    description:
      'Mange borgere efterspørger konkret tidsplan for udrulning af el-busser nævnt i Klimaplan 2030.',
    stats: ['💬 12 spørgsmål', '📈 Moderat engagement (↑28%)'],
    lastReviewed: 'Sidst behandlet: 14 dage siden',
    ctaLabel: 'Gennemgå →',
    ctaBg: '#ea580c',
  },
  {
    id: 'bibliotek',
    level: 'Lav Prioritet',
    levelBg: '#fef3c7',
    levelText: '#ca8a04',
    borderColor: '#facc15',
    unanswered: '8 ubesvarede spørgsmål',
    title: 'Åbningstider på Bibliotek Bjergsted',
    description:
      'Borgere efterspørger udvidede åbningstider på lokalbiblioteket, især i weekender.',
    stats: ['💬 8 spørgsmål', '📊 Stabil interesse'],
    lastReviewed: 'Sidst behandlet: 3 uger siden',
    ctaLabel: 'Se detaljer →',
    ctaBg: '#d97706',
  },
];

export const recentQuestions = [
  {
    id: 'klimaplan-spm',
    topicLabel: 'Klimaplan 2030',
    topicBg: 'var(--secondary-green)',
    timeAgo: '2 timer siden',
    status: '✓ Besvaret af AI',
    statusColor: '#16a34a',
    question: 'Hvordan påvirker klimaplanen min varmeregning?',
    summary:
      'Anonym borger spurgte om de økonomiske konsekvenser af klimaplan 2030 for private husstande.',
    documents: [
      {
        title: 'Klimaplan 2030 - Byrådsbeslutning',
        meta: 'Side 12-18 • 15. dec 2024 • 95% relevans',
        buttonLabel: 'Åbn →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
      {
        title: 'Økonomisk Konsekvensanalyse - Bilag',
        meta: 'Side 3-7 • 15. dec 2024 • 87% relevans',
        buttonLabel: 'Åbn →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
      {
        title: 'Byrådsmøde Video - Klimaplan Diskussion',
        meta: '00:15:30 • 12. dec 2024 • 72% relevans',
        buttonLabel: 'Se →',
        buttonColor: 'var(--secondary-green)',
        highlight: 'green',
      },
    ],
  },
  {
    id: 'budget-prioriteter',
    topicLabel: 'Budget 2025',
    topicBg: 'var(--primary-blue)',
    timeAgo: '5 timer siden',
    status: '✓ Besvaret af AI',
    statusColor: '#16a34a',
    question: 'Hvorfor får skolerne mere end bibliotekerne i det nye budget?',
    summary:
      'Anonym borger spurgte om prioriteringerne i budget 2025 mellem uddannelse og kultur.',
    documents: [
      {
        title: 'Budget 2025 - Forslag',
        meta: 'Side 45-52 • 10. dec 2024 • 92% relevans',
        buttonLabel: 'Åbn →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
      {
        title: 'Børn og Unge - Budgetnotat',
        meta: 'Side 8-12 • 10. dec 2024 • 88% relevans',
        buttonLabel: 'Åbn →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
    ],
  },
  {
    id: 'byplan-groenne-omrader',
    topicLabel: 'Byplan Østhavn',
    topicBg: 'var(--accent-orange)',
    timeAgo: '1 dag siden',
    status: '✓ Besvaret af AI',
    statusColor: '#16a34a',
    question: 'Bliver der lavet grønne områder i det nye boligområde?',
    summary:
      'Anonym borger spurgte om byplanen for Østhavn inkluderer parker og legepladser.',
    documents: [
      {
        title: 'Byplan Østhavn - Lokalplan 2024-08',
        meta: 'Side 15-22 • 5. dec 2024 • 94% relevans',
        buttonLabel: 'Åbn →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
      {
        title: 'Borgermøde Referat - Østhavn',
        meta: 'Referat • 28. nov 2024 • 81% relevans',
        buttonLabel: 'Læs →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
    ],
  },
  {
    id: 'el-busser-tidsplan',
    topicLabel: 'Klimaplan 2030',
    topicBg: 'var(--primary-blue)',
    timeAgo: '1 dag siden',
    status: '✓ Besvaret af AI',
    statusColor: '#16a34a',
    question: 'Hvornår kommer el-busserne i drift?',
    summary:
      'Anonym borger spurgte om tidsplanen for udrulning af el-busser som led i klimaplanen.',
    documents: [
      {
        title: 'Trafikplan - Grøn Transport',
        meta: 'Side 18-26 • 12. dec 2024 • 89% relevans',
        buttonLabel: 'Åbn →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
      {
        title: 'Pressemeddelelse - El-busser',
        meta: 'Nyhed • 14. dec 2024 • 76% relevans',
        buttonLabel: 'Læs →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
    ],
  },
  {
    id: 'bibliotek-budget',
    topicLabel: 'Budget 2025',
    topicBg: 'var(--primary-blue)',
    timeAgo: '2 dage siden',
    status: '✓ Besvaret af AI',
    statusColor: '#16a34a',
    question: 'Hvad betyder budgettet for vores lokalbibliotek?',
    summary:
      'Anonym borger spurgte om budgetkonsekvenser for biblioteker og kulturinstitutioner.',
    documents: [
      {
        title: 'Budget 2025 - Kultur og Fritid',
        meta: 'Side 78-84 • 10. dec 2024 • 93% relevans',
        buttonLabel: 'Åbn →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
      {
        title: 'Biblioteksplan 2025-2028',
        meta: 'Side 12-18 • 5. dec 2024 • 87% relevans',
        buttonLabel: 'Åbn →',
        buttonColor: 'var(--primary-blue)',
        highlight: 'blue',
      },
    ],
  },
];
