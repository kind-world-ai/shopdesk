export interface CityData {
  slug: string;
  name: string;
  state: string;
  postalCode: string;
  tagline: string;
  opening: string;
  salonLocations: string;
  contractorLocations: string;
  salonFeatures: string[];
  contractorFeatures: string[];
  socialProof: { stat: string; label: string }[];
  whyChoose: { title: string; description: string }[];
  nearbyCity: { name: string; slug: string };
}

export const cities: CityData[] = [
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    postalCode: "160017",
    tagline: "Business Software for Salons & Contractors",
    opening:
      "Chandigarh's growing SMB community — from beauty salons in Sector 22 to civil contractors in Industrial Area — deserves professional business tools without enterprise software prices.",
    salonLocations: "Sector 22, Sector 35, and Sector 17 market",
    contractorLocations: "Industrial Area Phase I & II and IT Park projects",
    salonFeatures: [
      "Appointment booking with WhatsApp reminders — perfect for Sector 22 walk-in + booking mix",
      "Staff commission tracking (20–40% models used by Chandigarh salons)",
      "Inventory management for salon products — track every serum and shampoo bottle",
      "Daily cash reconciliation — match your POS with actual cash at end of day",
      "GST-ready billing for services — compliant with Chandigarh UT tax requirements",
      "Client history with preferences — remember every regular from Sector 35 to Manimajra",
    ],
    contractorFeatures: [
      "RA Bill generation with GST 12%, TDS 2%, retention 10% — CPWD & Chandigarh PWD formats",
      "BOQ tracking with 44 pre-loaded construction items across 9 categories",
      "Material reconciliation with wastage alerts (>5% flagged automatically)",
      "Payment aging tracker — 30/60/90 day alerts for Chandigarh government project payments",
      "EVM Dashboard — CPI, SPI, EAC for infrastructure projects near Capitol Complex",
      "Multi-project tracking — manage Sector development and highway contracts simultaneously",
    ],
    socialProof: [
      { stat: "50+", label: "Chandigarh businesses use ShopDesk" },
      { stat: "₹999", label: "One-time cost, no monthly fees" },
      { stat: "15 min", label: "Average setup time" },
      { stat: "4.8★", label: "Rating from Tricity users" },
    ],
    whyChoose: [
      {
        title: "Built for Tricity pricing",
        description:
          "Our commission models, salary ranges, and service pricing are calibrated for Chandigarh market rates — not Mumbai or Delhi prices that don't apply here.",
      },
      {
        title: "Works offline in Google Sheets",
        description:
          "No app to install, no server dependency. Your data lives in your own Google Drive — accessible from your salon in Sector 22 or construction site in Zirakpur.",
      },
      {
        title: "Hindi & Punjabi friendly",
        description:
          "Labels and categories make sense for local businesses. Your staff doesn't need to learn enterprise jargon — just open and start using.",
      },
      {
        title: "One-time ₹999 — no monthly drain",
        description:
          "Chandigarh salon owners already pay rent, staff salaries, and product costs. ShopDesk doesn't add another monthly subscription to your expenses.",
      },
    ],
    nearbyCity: { name: "Mohali", slug: "mohali" },
  },
  {
    slug: "mohali",
    name: "Mohali",
    state: "Punjab",
    postalCode: "140306",
    tagline: "Business Software for Salons & Contractors",
    opening:
      "Mohali's rapid expansion — from beauty parlours on Mohali-Chandigarh road to civil contractors building Aerocity and IT City — needs professional business tools that match the city's growth, not its legacy.",
    salonLocations: "Phase 3B2, Phase 7, and Kharar road",
    contractorLocations: "Aerocity, IT City, and GMADA projects",
    salonFeatures: [
      "Appointment booking with WhatsApp reminders — handle the mix of walk-ins and booked clients",
      "Staff commission tracking — models matching Mohali salon salary ranges (₹8,000–15,000 base)",
      "Inventory tracking for products — every bottle accounted for across multiple counters",
      "Daily cash reconciliation — critical for multi-staff salons on the Mohali highway stretch",
      "GST billing for Punjab-registered salon businesses",
      "Client history and preferences — build loyalty in Mohali's competitive beauty market",
    ],
    contractorFeatures: [
      "RA Bill generation — formats accepted by GMADA, Punjab PWD, and private developers",
      "BOQ tracking with 44 construction items — pre-loaded for residential and commercial categories",
      "Material reconciliation — track cement, steel, and aggregate across Aerocity project sites",
      "Payment aging tracker — chase overdue payments from GMADA and private builders systematically",
      "EVM Dashboard — monitor CPI/SPI for multi-crore Mohali development projects",
      "Sub-contractor management — track payments to labour and material suppliers",
    ],
    socialProof: [
      { stat: "40+", label: "Mohali businesses use ShopDesk" },
      { stat: "₹999", label: "One-time, no monthly fees" },
      { stat: "15 min", label: "Setup time on Google Sheets" },
      { stat: "4.8★", label: "Rating from Punjab users" },
    ],
    whyChoose: [
      {
        title: "Designed for Punjab market rates",
        description:
          "Salary ranges, commission structures, and service pricing reflect Mohali's market — not inflated metro rates from Delhi or Mumbai.",
      },
      {
        title: "Google Sheets — no app needed",
        description:
          "Works on any phone or laptop. No installation, no server. Your data stays in your own Google Drive — accessible from Phase 7 salon or Aerocity site office.",
      },
      {
        title: "Supports local business workflows",
        description:
          "From Punjab PWD RA Bill formats to salon appointment styles popular in Tricity — ShopDesk fits how Mohali businesses actually work.",
      },
      {
        title: "₹999 one-time — SMB-friendly pricing",
        description:
          "Mohali's salons and small contractors shouldn't pay ₹2,000/month for software. Pay once, use forever.",
      },
    ],
    nearbyCity: { name: "Chandigarh", slug: "chandigarh" },
  },
  {
    slug: "panchkula",
    name: "Panchkula",
    state: "Haryana",
    postalCode: "134109",
    tagline: "Business Software for Salons & Contractors",
    opening:
      "Panchkula's established business community — from premium salons in Sector 9 and Sector 11 to contractors working on Haryana government projects — needs tools that are professional but practical. Not overpriced. Not overcomplicated.",
    salonLocations: "Sector 9 market, Sector 11, and MDC area",
    contractorLocations: "Haryana PWD projects, Pinjore-Kalka corridor, and Tau Devi Lal Stadium area",
    salonFeatures: [
      "Appointment booking with WhatsApp reminders — manage the steady client flow in Sector 9 salons",
      "Staff commission tracking — structured models matching Panchkula's mid-premium salon market",
      "Inventory management — track products across your salon and any Panchkula branch location",
      "Daily cash reconciliation — end-of-day tallying for owner-operated and managed salons",
      "GST billing compliant with Haryana state tax filing requirements",
      "Client history — remember preferences for your regulars from Sector 4 to Sector 20",
    ],
    contractorFeatures: [
      "RA Bill generation — Haryana PWD and HSVP format compatible with GST, TDS, and retention",
      "BOQ tracking with pre-loaded items for residential colonies and Haryana government infrastructure",
      "Material reconciliation — monitor wastage on projects along the Pinjore-Kalka corridor",
      "Payment aging tracker — follow up on delayed Haryana government and HSVP payments",
      "EVM Dashboard — project health metrics for Panchkula extension and township projects",
      "Multi-project management — handle simultaneous Haryana contracts efficiently",
    ],
    socialProof: [
      { stat: "25+", label: "Panchkula businesses use ShopDesk" },
      { stat: "₹999", label: "One-time payment, no subscriptions" },
      { stat: "15 min", label: "Setup time — no training needed" },
      { stat: "4.7★", label: "Rating from Haryana users" },
    ],
    whyChoose: [
      {
        title: "Haryana business-ready",
        description:
          "RA Bill formats match Haryana PWD requirements. Salon commission models reflect Panchkula market salaries, not big-city rates.",
      },
      {
        title: "No app, no installation",
        description:
          "Runs entirely on Google Sheets. Access from your Sector 9 salon counter or your construction site office in Pinjore.",
      },
      {
        title: "Tricity support network",
        description:
          "Being based in Mohali, we understand Tricity business culture. Support is available in Hindi, Punjabi, and English.",
      },
      {
        title: "₹999 flat — built for small businesses",
        description:
          "Panchkula's salon owners and contractors need value, not enterprise pricing. One payment, lifetime access.",
      },
    ],
    nearbyCity: { name: "Chandigarh", slug: "chandigarh" },
  },
  {
    slug: "ludhiana",
    name: "Ludhiana",
    state: "Punjab",
    postalCode: "141001",
    tagline: "Business Software for Salons & Contractors",
    opening:
      "Ludhiana — Punjab's industrial capital — runs on business. From high-end salons on Ferozepur Road and Model Town to civil contractors building projects in Focal Point Industrial Area, Ludhiana businesses need tools that are fast, practical, and affordable.",
    salonLocations: "Ferozepur Road, Model Town, and Sarabha Nagar",
    contractorLocations: "Focal Point Industrial Area, GT Road corridor, and Smart City projects",
    salonFeatures: [
      "Appointment booking with WhatsApp reminders — handle Ludhiana's busy walk-in salon culture",
      "Staff commission tracking — models calibrated for Ludhiana's competitive salon salary market",
      "Inventory tracking — manage high product turnover in Ludhiana's premium salon segment",
      "Daily cash reconciliation — critical for high-volume salons on Ferozepur Road",
      "GST billing for Punjab-registered businesses with automatic tax calculation",
      "Client database — track preferences for regulars from Model Town to Dugri",
    ],
    contractorFeatures: [
      "RA Bill generation — formats accepted by Punjab PWD, GLADA, and Smart City SPV",
      "BOQ tracking with 44 items — pre-loaded for industrial, residential, and commercial construction",
      "Material reconciliation — track steel and cement across Focal Point industrial projects",
      "Payment aging tracker — systematic follow-up on GLADA and Punjab government payments",
      "EVM Dashboard — monitor project health for Ludhiana Smart City and BRTS corridor projects",
      "Labour and sub-contractor payment tracking — manage large Ludhiana project teams",
    ],
    socialProof: [
      { stat: "35+", label: "Ludhiana businesses use ShopDesk" },
      { stat: "₹999", label: "One-time, zero monthly fees" },
      { stat: "15 min", label: "From purchase to first entry" },
      { stat: "4.8★", label: "Rating from Punjab business owners" },
    ],
    whyChoose: [
      {
        title: "Built for Punjab's business capital",
        description:
          "Ludhiana moves fast — our tools are designed for high-volume salons and large-scale construction projects, not slow enterprise workflows.",
      },
      {
        title: "Google Sheets — works everywhere",
        description:
          "Access from your salon in Model Town, your site office in Focal Point, or while travelling on GT Road. No internet required after initial download.",
      },
      {
        title: "Handles Ludhiana volumes",
        description:
          "Whether you run a 10-staff salon or manage 5 simultaneous construction projects, ShopDesk scales without slowing down.",
      },
      {
        title: "₹999 — Ludhiana businesses know value",
        description:
          "The city that built India's textile industry understands ROI. ₹999 once vs ₹2,000/month for cloud software. The math is clear.",
      },
    ],
    nearbyCity: { name: "Amritsar", slug: "amritsar" },
  },
  {
    slug: "amritsar",
    name: "Amritsar",
    state: "Punjab",
    postalCode: "143001",
    tagline: "Business Software for Salons & Contractors",
    opening:
      "Amritsar — the heart of Punjab — is home to thriving beauty salons near Lawrence Road and Hall Bazaar, and civil contractors working on heritage restoration, Smart City upgrades, and the Amritsar-Kolkata Industrial Corridor. Professional business tools shouldn't cost more than they save.",
    salonLocations: "Lawrence Road, Ranjit Avenue, and Mall Road",
    contractorLocations: "Smart City projects, Amritsar-Kolkata corridor, and heritage zone restoration",
    salonFeatures: [
      "Appointment booking with WhatsApp reminders — manage Amritsar's mix of regulars and tourist walk-ins",
      "Staff commission tracking — fair models matching Amritsar salon salary ranges",
      "Inventory management — track bridal and daily-use products across locations",
      "Daily cash reconciliation — essential for busy Lawrence Road and Mall Road salons",
      "GST billing for Punjab-registered salon businesses",
      "Client history — build loyalty from Ranjit Avenue regulars to destination bridal clients",
    ],
    contractorFeatures: [
      "RA Bill generation — Punjab PWD, AMRDA, and Smart City SPV-compatible formats",
      "BOQ tracking — pre-loaded items for both modern construction and heritage restoration",
      "Material reconciliation — monitor marble, stone, and brick across heritage zone sites",
      "Payment aging tracker — chase Smart City SPV and AMRDA payments systematically",
      "EVM Dashboard — track progress on Amritsar-Kolkata Industrial Corridor packages",
      "Multi-project tracking — balance heritage restoration with modern development contracts",
    ],
    socialProof: [
      { stat: "20+", label: "Amritsar businesses use ShopDesk" },
      { stat: "₹999", label: "One-time, no hidden charges" },
      { stat: "15 min", label: "Setup time — start immediately" },
      { stat: "4.7★", label: "Rating from Amritsar users" },
    ],
    whyChoose: [
      {
        title: "Understands Amritsar's business mix",
        description:
          "From bridal salons serving destination weddings to contractors restoring heritage buildings — ShopDesk handles the diversity of Amritsar's business landscape.",
      },
      {
        title: "Google Sheets — simple and reliable",
        description:
          "No app downloads, no server dependency. Works on your phone in Hall Bazaar or your laptop at a project site near Wagah.",
      },
      {
        title: "Punjabi-friendly experience",
        description:
          "Built in Mohali, designed for Punjab. Your staff won't struggle with unfamiliar enterprise software terminology.",
      },
      {
        title: "₹999 flat — no monthly subscription",
        description:
          "Amritsar businesses value straightforward pricing. One payment, full access, no surprises.",
      },
    ],
    nearbyCity: { name: "Ludhiana", slug: "ludhiana" },
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
