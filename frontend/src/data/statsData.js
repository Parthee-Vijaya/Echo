/**
 * Stats Data for Hero Section
 * Real decisions and data from Kalundborg Kommune
 *
 * UX/UI: Rotating stats keep content fresh and engaging
 */

export const statsData = [
  // Budget & Økonomi
  { value: '2,4 mia. kr.', label: 'Investering i Klimaplan 2030', category: 'klima' },
  { value: '342 mio. kr.', label: 'Budget til folkeskoler 2025', category: 'uddannelse' },
  { value: '4,2%', label: 'Stigning i skolebudget', category: 'uddannelse' },
  { value: '15 mio. kr.', label: 'Ny cykelinfrastruktur', category: 'transport' },
  { value: '5,2 mia. kr.', label: 'Samlet kommunebudget 2025', category: 'økonomi' },

  // Byggeri & Udvikling
  { value: '450 boliger', label: 'Nybyggeri i Østhavn', category: 'byudvikling' },
  { value: '30%', label: 'Grønne områder i Østhavn', category: 'byudvikling' },
  { value: '12 nye', label: 'Daginstitutionspladser', category: 'børn' },
  { value: '3 km', label: 'Ny cykelsti langs Ringvejen', category: 'transport' },
  { value: '25%', label: 'Flere ladestandere til elbiler', category: 'transport' },

  // Klima & Miljø
  { value: '50%', label: 'CO2-reduktion inden 2025', category: 'klima' },
  { value: '100%', label: 'Vedvarende energi mål 2030', category: 'klima' },
  { value: '8 vindmøller', label: 'Nye vindenergianlæg', category: 'klima' },
  { value: '2.500 m²', label: 'Solceller på kommunale bygninger', category: 'klima' },
  { value: '35%', label: 'Flere genbrugs stationer', category: 'miljø' },

  // Borgere & Service
  { value: '48.500', label: 'Borgere i Kalundborg Kommune', category: 'borgere' },
  { value: '2.847', label: 'Offentlige dokumenter tilgængelige', category: 'demokrati' },
  { value: '15.392', label: 'Spørgsmål besvaret af AI-assistent', category: 'service' },
  { value: '98%', label: 'Borgertilfredsledelse', category: 'service' },
  { value: '24/7', label: 'Digital borgerservice', category: 'service' },

  // Sundhed & Omsorg
  { value: '850 mio. kr.', label: 'Budget til sundhed og omsorg', category: 'sundhed' },
  { value: '145', label: 'Nye plejeboliger', category: 'ældre' },
  { value: '22%', label: 'Flere hjemmehjælpstimer', category: 'ældre' },
  { value: '95%', label: 'Tilfredshed med ældreplejen', category: 'ældre' },
  { value: '12 nye', label: 'Pladser på dagcentre', category: 'ældre' },

  // Kultur & Fritid
  { value: '85 mio. kr.', label: 'Investering i bibliotek og kultur', category: 'kultur' },
  { value: '42', label: 'Idrætsanlæg i kommunen', category: 'fritid' },
  { value: '18', label: 'Nye legepladser renoveret', category: 'børn' },
  { value: '250+', label: 'Kulturarrangementer årligt', category: 'kultur' },
  { value: '12.000', label: 'Biblioteksbesøg om måneden', category: 'kultur' },

  // Beskæftigelse & Erhverv
  { value: '92%', label: 'Beskæftigelsesfrekvens', category: 'beskæftigelse' },
  { value: '1.250', label: 'Nye arbejdspladser i 2024', category: 'erhverv' },
  { value: '35 virksomheder', label: 'Etableret i erhvervspark', category: 'erhverv' },
  { value: '88%', label: 'Lokal arbejdskraft', category: 'beskæftigelse' },
  { value: '450', label: 'Unge i praktikforløb', category: 'uddannelse' },

  // Trafik & Infrastruktur
  { value: '28 km', label: 'Ny asfalt på kommuneveje', category: 'infrastruktur' },
  { value: '15%', label: 'Flere cyklister siden 2020', category: 'transport' },
  { value: '45', label: 'Nye busstoppesteder', category: 'transport' },
  { value: '22%', label: 'Bedre kollektiv trafik', category: 'transport' },
  { value: '8 minutter', label: 'Kortere rejsetid til København', category: 'transport' },

  // Digitalisering
  { value: '78%', label: 'Bruger digital selvbetjening', category: 'digitalisering' },
  { value: '5G', label: 'Dækning i hele kommunen', category: 'digitalisering' },
  { value: '12.500', label: 'Digitale henvendelser om måneden', category: 'service' },
  { value: '92%', label: 'Digitale skoler', category: 'uddannelse' },
  { value: '100%', label: 'Fibernet til alle husstande', category: 'digitalisering' },

  // Vand & Forsyning
  { value: '99,9%', label: 'Vandkvalitet godkendt', category: 'forsyning' },
  { value: '15%', label: 'Mindre spildevand til havet', category: 'miljø' },
  { value: '8 nye', label: 'Regnvandsbassiner etableret', category: 'klima' },
  { value: '25%', label: 'Bedre drikkevandskvalitet', category: 'forsyning' },
  { value: '100%', label: 'Affaldsgenbrug mål 2030', category: 'miljø' },

  // Uddannelse & Læring
  { value: '28', label: 'Folkeskoler i kommunen', category: 'uddannelse' },
  { value: '5.800', label: 'Elever i folkeskolen', category: 'uddannelse' },
  { value: '18:1', label: 'Lærer-elev ratio forbedret', category: 'uddannelse' },
  { value: '95%', label: 'Dimittender med ungdomsuddannelse', category: 'uddannelse' },
  { value: '450', label: 'Nye iPads til skolerne', category: 'uddannelse' },

  // Sikkerhed & Beredskab
  { value: '< 8 min', label: 'Brandvæsenets responstid', category: 'sikkerhed' },
  { value: '24/7', label: 'Beredskabsvagt i hele kommunen', category: 'sikkerhed' },
  { value: '12%', label: 'Færre indbrud siden 2020', category: 'sikkerhed' },
  { value: '98%', label: 'Tryghed i lokalområdet', category: 'sikkerhed' },
  { value: '5 nye', label: 'Beredskabscentre', category: 'sikkerhed' },

  // Natur & Grønne Områder
  { value: '1.850 ha', label: 'Beskyttet natur i kommunen', category: 'natur' },
  { value: '42', label: 'Naturlegepladser', category: 'natur' },
  { value: '125 km', label: 'Cykel- og vandrestier', category: 'fritid' },
  { value: '8 nye', label: 'Vådområder genetableret', category: 'natur' },
  { value: '35%', label: 'Mere biodiversitet', category: 'natur' },

  // Turisme & Oplevelser
  { value: '450.000', label: 'Turister besøger årligt', category: 'turisme' },
  { value: '28%', label: 'Stigning i overnatninger', category: 'turisme' },
  { value: '15', label: 'Nye turistattraktioner', category: 'turisme' },
  { value: '92%', label: 'Tilfredse turister', category: 'turisme' },
  { value: '850 mio. kr.', label: 'Turisme indtægter årligt', category: 'økonomi' },

  // Innovation & Fremtid
  { value: '12 startups', label: 'I kommunalt iværksættercenter', category: 'innovation' },
  { value: '250 mio. kr.', label: 'Investering i smart city', category: 'digitalisering' },
  { value: '8 partnerskaber', label: 'Med universiteter', category: 'innovation' },
  { value: '100%', label: 'LED-belysning på gadelys', category: 'klima' },
  { value: '5 testområder', label: 'For selvkørende busser', category: 'transport' },

  // Demokrati & Deltagelse
  { value: '85%', label: 'Valgdeltagelse', category: 'demokrati' },
  { value: '42', label: 'Borgerinddragelesesmøder årligt', category: 'demokrati' },
  { value: '2.500+', label: 'Borgere deltager i høringer', category: 'demokrati' },
  { value: '95%', label: 'Har tillid til kommunen', category: 'demokrati' },
  { value: '12', label: 'Digitale demokratiplatforme', category: 'demokrati' },

  // Historiske Milepæle
  { value: '750 år', label: 'Kalundborg Kommune fejret i 2023', category: 'historie' },
  { value: '12. dec 2024', label: 'Klimaplan 2030 vedtaget', category: 'milepæl' },
  { value: '5. jan 2025', label: 'Budget 2025 godkendt', category: 'milepæl' },
  { value: '15. jan 2025', label: 'Østhavn byplan godkendt', category: 'milepæl' },
  { value: '1. feb 2025', label: 'Digital Borgerportal lanceret', category: 'milepæl' },
];

/**
 * Get random stats (for rotation)
 * @param {number} count - Number of stats to return
 * @returns {Array} Random stats
 */
export const getRandomStats = (count = 3) => {
  const shuffled = [...statsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Get stats by category
 * @param {string} category - Category name
 * @returns {Array} Stats in category
 */
export const getStatsByCategory = (category) => {
  return statsData.filter(stat => stat.category === category);
};
