export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  features: string[];
  planType: string;
}

export interface ProjectVideo {
  id: string;
  bengaliTitle: string;
  subtitle: string;
  katha: string;
  floors: string;
  costRange: string;
  youtubeId: string;
  thumbnailUrl: string;
  tags: string[];
  details: string;
}

export interface BlogPost {
  id: string;
  title: string;
  bengaliSnippet: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  imageUrl: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  bengaliText: string;
  englishText: string;
  avatarUrl: string;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  highlightCategory: string;
  costDetail?: {
    estimatedSqftRate: string;
    civilRate: string;
    finishingRate: string;
    timeRequired: string;
  };
}

export const COMPANY_CONTACT = {
  name: 'Green Architect BD',
  tagline: 'Precision in Design, Perfection in Build',
  email: 'greeninfo222@gmail.com',
  phone: '01744495886',
  phoneDisplay: '01744495886',
  whatsappUrl: 'https://wa.me/8801744495886',
  headOffice: 'House #27A Apon hight, Road No. 3, Dhaka-1207',
  branchOffice: '67 RA Khan Chowdhury Road, Thanapara, Kushtia',
  workingHours: 'Saturday - Thursday: 9:00 AM - 8:00 PM',
  youtubeChannel: 'https://www.youtube.com/@greenarchitectbd',
  youtubeSubscribers: '120K+ Subscribers',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'architectural-design',
    name: 'Architectural Design',
    shortDesc: 'Thoughtful, modern, and climate-responsive architectural designs.',
    longDesc:
      'As a top-ranked architectural design company in Bangladesh, we craft thoughtful architectural designs that balance form, function, and aesthetics.\n\nOur architectural design services cover residential, commercial, and mixed-use projects, guided by skilled architectural designers and consultants. As a trusted architectural design consultancy in Dhaka, we transform ideas into practical, elegant spaces through concept development, planning, detailing, and 3D visualization. Whether you need residential architectural design, duplex architectural design, or complete architectural design & construction, our team ensures every design reflects your lifestyle, brand, and environment. We support clients with professional architectural design consultants and 3D visualization.',
    highlights: [
      'Residential Architectural Design (Single & Multi-Family Units)',
      'Duplex & Triplex Villa Architectural Planning',
      'Commercial & Corporate Office Complexes',
      'Rajuk, CDA, KDA, RDA Official Building Approval Drawings',
      'Photorealistic 3D Exterior & Interior Architectural Renderings',
      'Complete Working & Architectural Construction Details',
    ],
    features: ['Space Optimization', 'Natural Ventilation (BNBC)', 'Climate Resilience', 'Green Building Principles'],
    planType: 'Typical Floor Plan (2 Units / Floor)',
  },
  {
    id: 'soil-test',
    name: 'Soil Test & Digital Survey',
    shortDesc: 'Comprehensive geotechnical investigation and total station land surveying.',
    longDesc:
      'Before laying a single brick, understanding your ground is critical for safety and cost estimation. Green Architect conducts precision digital topographic surveys using modern Total Station equipment along with deep geotechnical soil boring tests across all districts of Bangladesh.\n\nWe provide certified SPT N-value reports, bearing capacity calculations, and subsoil strata analysis certified by professional geotechnical engineers.',
    highlights: [
      'Digital Land Survey with Total Station and GPS Coordinates',
      'Sub-soil Boring and Standard Penetration Test (SPT)',
      'Laboratory Soil Testing (Grain size, Atterberg limits, Triaxial shear)',
      'Accurate Safe Bearing Capacity (SBC) Recommendation',
      'Pile Foundation Depth & Mat Foundation Feasibility Reports',
    ],
    features: ['High-Accuracy GPS', 'BNBC 2020 Compliance', 'Official Engineering Seal', 'Rapid Report Turnaround'],
    planType: 'Geotechnical Soil Profile & Survey Map',
  },
  {
    id: 'structural-design',
    name: 'Structural Design',
    shortDesc: 'Earthquake & cyclone-resistant structural engineering according to BNBC codes.',
    longDesc:
      'Our team of senior structural engineers designs robust, economical, and safe RCC and steel structures tailored to Bangladesh seismic zones and wind load criteria.\n\nEvery beam, column, footing, and shear wall is meticulously analyzed using ETABS, SAFE, and STAAD Pro to prevent over-design while ensuring 100% structural integrity and safety for decades.',
    highlights: [
      'RCC Building Structural Design (Upto 20+ Stories)',
      'Earthquake & Wind Load Resistance Analysis (Zone 1 to 4)',
      'Deep Foundation (Cast-in-situ Pile, Pre-cast Pile, Raft Foundation)',
      'Steel Structure & Industrial Warehouse Shed Design',
      'Bar Bending Schedule (BBS) & Structural Detailing Sheets',
    ],
    features: ['BNBC 2020 Compliance', 'Cost-Optimized Rebar Ratios', 'Seismic Damper Review', 'Foundation Safety'],
    planType: 'Structural Column Layout & Reinforcement Grid',
  },
  {
    id: 'electrical-design',
    name: 'Electrical Design',
    shortDesc: 'Safe, load-balanced electrical planning, substation, and lighting design.',
    longDesc:
      'We prepare complete electrical system designs ensuring safe distribution of power, adequate substation sizing, generator integration, lightning protection, and energy-efficient lighting layouts.',
    highlights: [
      'Electrical Load Calculation & Connected Load Schedules',
      'Substation, Transformer, and Generator Sizing',
      'Switchgear, Distribution Board (MDB/DB/SDB) Layouts',
      'Earthing & Advanced Lightning Protection Systems (LPS)',
      'Solar Rooftop Integration & Energy Efficient LED Lighting',
    ],
    features: ['Short-Circuit Protection', 'Fire-Safe Conduit Routing', 'Emergency Backup Planning', 'Smart Automation'],
    planType: 'Single Line Diagram (SLD) & Power Routing Layout',
  },
  {
    id: 'plumbing-design',
    name: 'Plumbing Design',
    shortDesc: 'Hydraulic calculations, rainwater harvesting, water supply, and drainage.',
    longDesc:
      'Proper plumbing prevents seepage, water contamination, and foul odors. Green Architect engineers clean water distribution systems, sewerage networks, rainwater harvesting, and fire protection pipework.',
    highlights: [
      'Water Demand Calculation & Overhead/Underground Reservoir Sizing',
      'Internal & External Drainage and Sewerage Pipework',
      'Rainwater Harvesting & Stormwater Drainage System',
      'Fire Fighting Hydrant & Sprinkler Piping Layout',
      'Wastewater Treatment (Septic Tank & Soak Well Design)',
    ],
    features: ['Zero Water Seepage', 'Gravity Flow Efficiency', 'Hygiene Standards', 'Eco-friendly Filtration'],
    planType: 'Plumbing Isometric Diagram & Water Supply Network',
  },
  {
    id: 'consultancy',
    name: 'Consultancy',
    shortDesc: 'End-to-end guidance on land acquisition, municipal approvals, and BOQ costing.',
    longDesc:
      'Building a house in Bangladesh involves complex legal, municipal, and financial decisions. Our consultancy services guide land owners through RAJUK / City Corporation setback rules, FAR calculations, soil suitability, and accurate Bill of Quantities (BOQ) preparation.',
    highlights: [
      'RAJUK Setback & Floor Area Ratio (FAR) Maximization Analysis',
      'Comprehensive Project Cost Estimation & BOQ Preparation',
      'Tender Documentation & Contractor Selection Advisory',
      'On-site Periodic Supervision & Quality Audits',
      'Bank Loan Design & Estimation Documentation for House Building Loans',
    ],
    features: ['Budget Transparency', 'Legal Compliance', 'Vendor Neutrality', 'Experienced Engineers'],
    planType: 'Master Site Feasibility & Zoning Blueprint',
  },
  {
    id: 'interior-design',
    name: 'Interior Design',
    shortDesc: 'Bespoke residential duplex, apartment, and corporate interior architecture.',
    longDesc:
      'Transform empty rooms into warm, luxurious living sanctuaries. Our interior designers handle false ceilings, custom cabinetry, ambient architectural lighting, modular kitchen systems, and luxury finishes.',
    highlights: [
      'Living Room, Master Bedroom, and Kid Bed Layouts',
      'Modern Modular Kitchens with High-Quality Board & Hardware',
      'Decorative False Ceilings with Cove & Recessed Warm Lighting',
      'Bathroom Vanity, Shower Cubicle, and Sanitary Fixtures Layout',
      '3D 360-Degree Photorealistic Interior Virtual Walkthroughs',
    ],
    features: ['Ergonomic Aesthetics', 'Bespoke Storage', 'Premium Materials', 'Illumination Balance'],
    planType: 'Interior Space Layout & Material Moodboard',
  },
  {
    id: 'landscaping',
    name: 'Landscaping & Urban Design',
    shortDesc: 'Rooftop gardens, courtyard water bodies, and green exterior environments.',
    longDesc:
      'True to our name Green Architect, we blend nature with concrete. We design rooftop gardens with waterproof drainage layers, vertical green walls, landscaped courtyard fountains, and eco-friendly compound walkways.',
    highlights: [
      'Rooftop Terrace Garden with Waterproof Membrane Engineering',
      'Inner Courtyard / Atrium Water Bodies & Planters',
      'Permeable Pavement Walkways & Driveway Landscaping',
      'Native Drought-Resistant Plant & Shrub Selection',
      'Exterior Accent Lighting & Gazebo Design',
    ],
    features: ['Rainwater Runoff Control', 'Urban Heat Reduction', 'Biophilic Living', 'Low-Maintenance Flora'],
    planType: 'Rooftop Green Master Plan & Hardscape Details',
  },
];

export const FEATURED_PROJECTS: ProjectVideo[] = [
  {
    id: 'proj-1',
    bengaliTitle: '৩ কাঠা জমিতে ৬ তলা বাড়ি করতে কত টাকা খরচ হবে?',
    subtitle: 'সিভিল ইঞ্জিনিয়ার টুটুল | Green Architect BD',
    katha: '৩ কাঠা (2,160 Sqft)',
    floors: '৬ তলা (G+5)',
    costRange: '১.৮৫ - ২.১০ কোটি টাকা',
    youtubeId: 'v1_3katha_6tola',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    tags: ['৬ তলা বাড়ি', '৩ কাঠা জমি', 'খরচের হিসাব', 'রাজউক অনুমোদন'],
    details:
      '৩ কাঠা জমিতে প্রতি ফ্লোরে দুটি করে ইউনিট (প্রতিটি ১,০০০ স্কয়ার ফিট প্রায়) নির্মাণ করার সম্পূর্ণ খরচ। পাইলিং, বেইজমেন্ট, স্ট্রাকচারাল ফ্রেম, রাজউক অনুমোদন এবং ফিনিশিং কাজের পুঙ্খানুপুঙ্খ হিসাব বিশ্লেষণ করেছেন সিভিল ইঞ্জিনিয়ার টুটুল।',
  },
  {
    id: 'proj-2',
    bengaliTitle: '৫ তলা বাড়ি নির্মাণ করতে কত টাকা খরচ হবে?',
    subtitle: 'সম্পূর্ণ বাস্তব হিসাব | Green Architect Official',
    katha: '৪ কাঠা (2,880 Sqft)',
    floors: '৫ তলা (G+4)',
    costRange: '১.৫০ - ১.৭৫ কোটি টাকা',
    youtubeId: 'v2_5tola_cost',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['৫ তলা বাড়ি', 'বাজেট প্ল্যানিং', 'ফাউন্ডেশন খরচ', 'গ্রীন আর্কিটেক্ট'],
    details:
      'একটি সুন্দর ৫ তলা আবাসিক ভবন তৈরিতে মাটি পরীক্ষা থেকে শুরু করে ছাদ ঢালাই, টাইলস, স্যানিটারি ও বৈদ্যুতিক কাজের প্রতি স্কয়ার ফিট রেট এবং কীভাবে অপচয় রোধ করে ২০% বাজেট সাশ্রয় করবেন তার চমৎকার গাইডলাইন।',
  },
  {
    id: 'proj-3',
    bengaliTitle: '৭ তলা বাড়ির খরচের হিসাব বিস্তারিত',
    subtitle: 'লিফট ও সাবস্টেশন সহ পূর্ণাঙ্গ হিসাব | Green Architect',
    katha: '৫ কাঠা (3,600 Sqft)',
    floors: '৭ তলা (G+6)',
    costRange: '২.৮০ - ৩.২০ কোটি টাকা',
    youtubeId: 'v3_7tola_cost',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    tags: ['৭ তলা বাড়ি', 'লিফট সহ', 'সাবস্টেশন', 'কমার্শিয়াল কাম রেসিডেন্সিয়াল'],
    details:
      '৭ তলা বা তদূর্ধ্ব ভবনের জন্য লিফট কোর ডিজাইন, জরুরি ফায়ার এক্সিট সিঁড়ি, জেনারেটর-সাবস্টেশন রুম এবং বিএনবিসি ২০২০ অনুসারে পাইল ক্যাপ ও গ্রেড বিম নির্মাণের নিখুঁত খরচ পরিকল্পনা।',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Residential Building Design in Bangladesh',
    bengaliSnippet: 'বাংলাদেশে আধুনিক আবাসিক ভবন নকশা ও রাজউক নিয়মনীতি',
    category: 'Architecture',
    date: 'March 28, 2026',
    readTime: '6 min read',
    summary:
      'Key guidelines, setback rules, natural ventilation tips, and budget management techniques for building private houses and duplexes in Bangladesh.',
    content: [
      'Designing a residential home in Bangladesh requires balancing limited urban land with strict municipal setback regulations like RAJUK Dhaka Mohanogor Imarat Nirman Bidhimala.',
      'A safe residential design prioritizes dual-side natural cross-ventilation to tackle Bangladesh humid tropical climate, lowering future air-conditioning electricity bills by up to 35%.',
      'Ensure clear separation of private bedroom quarters from semi-public formal drawing areas, with minimum 10-foot ceiling clearances for thermal comfort.',
      'Always consult licensed structural engineers before deciding on column grid locations to keep ground floor parking unobstructed.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'blog-2',
    title: '5-Storey Building Design by Green Architect',
    bengaliSnippet: 'গ্রীন আর্কিটেক্টের ৫ তলা ভবনের স্থাপত্য ও স্ট্রাকচারাল ডিজাইন কেস স্টাডি',
    category: 'Case Study',
    date: 'April 04, 2026',
    readTime: '8 min read',
    summary:
      'How our team engineered an energy-efficient 5-storey residential apartment in Dhaka with optimal sunlight, rainwater harvesting, and safe seismic detailing.',
    content: [
      'In this project in Mirpur DOHS, Dhaka, the client owned a 3.5-katha plot with a narrow 20-foot access road.',
      'Our team introduced a central lightwell and double-glazed low-E balcony windows to bring diffused daylight into internal family living rooms while blocking harsh western heat.',
      'The structural team executed a Mat-on-Piles foundation following deep soil boring revealing soft clay up to 30 feet, saving the client nearly 14 Lakh BDT compared to traditional over-piled solutions.',
      'The rooftop features an insulated reflective green garden preventing top-floor overheating during peak summer months.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'blog-3',
    title: '10 Things to Know Before Doing Interior Design',
    bengaliSnippet: 'ইন্টেরিয়র ডিজাইন শুরু করার আগে যে ১০টি গুরুত্বপূর্ণ বিষয় জানা আবশ্যক',
    category: 'Interior Guide',
    date: 'April 15, 2026',
    readTime: '5 min read',
    summary:
      'Avoid costly mistakes: waterproofing bathrooms before tiling, concealed conduit mapping, material moisture resistance, and ambient layered lighting.',
    content: [
      '1. Map electrical points before civil plastering to prevent messy wire grooving later.',
      '2. In Bangladesh humid climate, always insist on Marine-grade BWP plywood or HMR board for kitchens and washroom vanity zones.',
      '3. Plan your lighting in 3 distinct layers: Task lighting (prep areas), Ambient cove lighting (soft warmth), and Accent spot lighting (artwork & wall niches).',
      '4. Custom storage built right to the ceiling saves floor footprint and eliminates dust-collecting dead space.',
      '5. Always finalize sanitary fixtures and tile thickness before laying drainage floor slopes.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
];

export const CLIENT_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'MST Fatimatuz Zohra',
    role: 'Building Owner & Investor',
    location: 'Bashundhara R/A, Dhaka',
    bengaliText:
      'Green Architect is not only an architectural firm but also an organization of humanitarian and social movements. The founder of this organization, Tutul Sir is not only one of the best engineers of Bangladesh but also a friend of humanity and nature. তারা আমাদের ৫ তলা বাড়ির ড্রয়িং ও খরচের হিসাব অত্যন্ত স্বচ্ছতার সাথে করে দিয়েছেন।',
    englishText:
      'Green Architect is not only an architectural firm but also an organization of humanitarian and social movements. The founder of this organization, Tutul Sir is not only one of the best engineers of Bangladesh but also a friend of humanity and nature.',
    avatarUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    projectType: '5-Storey Residential Residence',
  },
  {
    id: 'rev-2',
    name: 'Md. Shamsul Alam',
    role: 'Flat Owner & Land Developer',
    location: 'Mirpur DOHS, Dhaka',
    bengaliText:
      'গ্রীন আর্কিটেক্ট আমাদের ৬ তলা কমার্শিয়াল কাম রেসিডেন্সিয়াল ভবনের আর্কিটেকচারাল ও স্ট্রাকচারাল ডিজাইন করেছে। রাজউক অনুমোদন থেকে শুরু করে পাইল টেস্ট পর্যন্ত পুরো প্রজেক্টে তাদের টিম সর্বদা আন্তরিক ছিল। তাদের কারণে নির্মাণ খরচ অন্তত ২০% সাশ্রয় হয়েছে।',
    englishText:
      'Green Architect managed both architectural and structural design for our 6-story building. From RAJUK approval to pile load testing, their team was exceptional. Their optimized design saved us over 20% in construction costs.',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    projectType: '6-Storey Commercial & Residential Complex',
  },
  {
    id: 'rev-3',
    name: 'Dr. Tariqul Islam',
    role: 'Duplex Homeowner',
    location: 'Thanapara, Kushtia',
    bengaliText:
      'কুষ্টিয়ায় আমাদের স্বপ্নের ডুপ্লেক্স বাড়িটি গ্রীন আর্কিটেক্টের হাতেই ডিজাইন করা। পর্যাপ্ত আলো-বাতাস, আধুনিক রুচিশীল লুক এবং নিখুঁত ড্রয়িং দেখে সবাই প্রশংসা করে। সিভিল ইঞ্জিনিয়ার টুটুল ভাইকে আন্তরিক ধন্যবাদ।',
    englishText:
      'Our dream duplex house in Kushtia was designed by Green Architect. Everyone who visits praises the natural lighting, modern aesthetics, and immaculate structural execution.',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    projectType: 'Modern Luxury Duplex Villa',
  },
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can the approximate cost of 6 room building be calculated?',
    answer:
      'For a 6-room building (approx 1,500 to 1,800 sq.ft per floor in Bangladesh), civil construction cost usually ranges between ৳2,000 to ৳2,400 per sq.ft for standard quality finishing, and ৳2,600 to ৳3,200 for premium finishing. Total cost for a single-floor 6-room building typically stands between ৳32 Lakh to ৳45 Lakh BDT, depending on soil condition, pile requirement, and chosen sanitary/tile fittings.',
    highlightCategory: 'Cost Estimation',
    costDetail: {
      estimatedSqftRate: '৳2,000 - ৳2,600 / sqft',
      civilRate: '৳1,250 / sqft (Structure)',
      finishingRate: '৳950 - ৳1,350 / sqft',
      timeRequired: '6 - 9 Months',
    },
  },
  {
    id: 'faq-2',
    question: 'How much can it cost to build a four-story house with two units per floor?',
    answer:
      'Building a 4-story house with 2 units per floor on a 3.5 to 4 katha land (approx 2,400 sq.ft covered area per floor = 9,600 sq.ft total built-up area) generally requires between ৳1.95 Crore to ৳2.40 Crore BDT.\n\nBreakdown:\n1. Foundation & Substructure (Soil test, excavation, RCC footing/pile cap): ৳28 - 35 Lakh\n2. RCC Superstructure (Columns, beams, slabs): ৳65 - 75 Lakh\n3. Brickwork, plaster & waterproofing: ৳24 - 30 Lakh\n4. Finishing (Tiles, sanitary, electrical wiring, doors, windows, painting): ৳60 - 75 Lakh\n5. Architectural & Structural Engineering consultancy: Transparent nominal percentage ensuring zero structural failure and budget control.',
    highlightCategory: '4-Storey Breakdown',
    costDetail: {
      estimatedSqftRate: '৳2,150 - ৳2,500 / sqft',
      civilRate: '৳1,300 / sqft',
      finishingRate: '৳1,100 / sqft',
      timeRequired: '12 - 15 Months',
    },
  },
  {
    id: 'faq-3',
    question: 'Where is Your branch office located in Bangladesh?',
    answer:
      'Green Architect operates with two full-fledged design offices:\n• Dhaka Corporate Head Office: House #27A Apon hight, Road No. 3, Dhaka-1207 (near Agargaon & Mirpur road connection).\n• Regional Branch Office: 67 RA Khan Chowdhury Road, Thanapara, Kushtia.\n\nWe provide site inspection, digital survey, soil testing, and architectural consultation services across all 64 districts in Bangladesh.',
    highlightCategory: 'Office Locations',
  },
  {
    id: 'faq-4',
    question: 'How much will it cost to build a 3 storey house?',
    answer:
      'For a standard 3-story residential building (around 1,800 sq.ft per floor = 5,400 sq.ft total), the estimated construction cost is approximately ৳1.10 Crore to ৳1.35 Crore BDT. If shallow footing (isolated footings) can be used due to strong soil bearing capacity, foundation costs drop significantly by ৳8 to ৳12 Lakh compared to deep cast-in-situ piles.',
    highlightCategory: '3-Storey Breakdown',
    costDetail: {
      estimatedSqftRate: '৳2,100 - ৳2,450 / sqft',
      civilRate: '৳1,250 / sqft',
      finishingRate: '৳1,050 / sqft',
      timeRequired: '9 - 12 Months',
    },
  },
  {
    id: 'faq-5',
    question: 'What is included in Green Architect complete design package?',
    answer:
      'Our comprehensive design solution delivers everything needed to build with confidence:\n1. Architectural drawings (furniture floor layout, 4-side elevations, cross sections)\n2. RAJUK / City Corporation approval drawing sets with official engineer signatures\n3. Complete Structural Engineering drawings (column layout, beam schedule, slab rebar BBS)\n4. Geotechnical Soil Investigation report\n5. Electrical layout (conduit routing, SLD, DB sizing, lightning protection)\n6. Plumbing & Sewerage drainage layout (water tanks, septic tank)\n7. Photorealistic 3D Exterior & Interior visualizations\n8. Complete Item-wise Bill of Quantities (BOQ) with material volume and cost estimation.',
    highlightCategory: 'Complete Package',
  },
];
