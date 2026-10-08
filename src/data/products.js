export const PRODUCTS = [
  {
    id: 'qc-ultra',
    name: 'QuietComfort Ultra',
    brand: 'Bose',
    category: 'Noise Cancelling',
    price: 279.00,
    originalPrice: 329.00,
    rating: 4.9,
    reviewsCount: 1280,
    badge: 'Flagship ANC',
    image: 'img1.png',
    tagline: 'World-Class Noise Cancellation & Immersive Audio',
    description: 'Spatial audio earbuds with world-class noise cancellation and CustomTune technology. Up to 6 hours listening time with three listening modes for immersive audio experience.',
    specs: {
      battery: '6h + 18h case',
      anc: 'CustomTune ANC',
      waterproof: 'IPX4 Rating',
      driver: '9.3mm Dynamic Driver',
      codecs: 'aptX Adaptive, AAC, SBC',
      weight: '6.2g per earbud'
    },
    colors: [
      { name: 'Black', hex: '#111827' },
      { name: 'White Smoke', hex: '#E5E7EB' },
      { name: 'Moonstone Blue', hex: '#93C5FD' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'powerbeats-pro',
    name: 'Powerbeats Pro',
    brand: 'Beats',
    category: 'Sports & Workout',
    price: 249.99,
    originalPrice: 279.99,
    rating: 4.8,
    reviewsCount: 940,
    badge: 'Athlete Choice',
    image: 'img2.png',
    tagline: 'High-Performance Wireless with Adjustable Earhooks',
    description: 'Totally wireless high-performance earphones with up to 9 hours of listening time and 24+ hours with charging case. Sweat-resistant design with adjustable earhooks for secure fit during workouts.',
    specs: {
      battery: '9h + 24h case',
      anc: 'Passive Isolation',
      waterproof: 'IPX4 Sweat Resistant',
      driver: '12mm Dynamic Driver',
      codecs: 'Apple H1 Chip, AAC, SBC',
      weight: '20.3g total'
    },
    colors: [
      { name: 'Navy', hex: '#1E3A8A' },
      { name: 'Black', hex: '#111827' },
      { name: 'Ivory', hex: '#FEF3C7' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'qc-earbuds',
    name: 'QuietComfort Earbuds',
    brand: 'Bose',
    category: 'Noise Cancelling',
    price: 199.00,
    originalPrice: 229.00,
    rating: 4.7,
    reviewsCount: 820,
    badge: 'Everyday Value',
    image: 'img3.png',
    tagline: 'Remarkable Sound & Bluetooth Multipoint',
    description: 'World-renowned noise cancellation with up to 8.5 hours of battery life. IPX4-rated wireless earbuds with remarkable sound quality and Bluetooth multipoint for seamless device switching.',
    specs: {
      battery: '8.5h + 23h case',
      anc: 'Active Noise Cancelling',
      waterproof: 'IPX4 Rating',
      driver: '8.5mm Custom Driver',
      codecs: 'AAC, SBC, Bluetooth 5.3',
      weight: '6.5g per earbud'
    },
    colors: [
      { name: 'Black', hex: '#111827' },
      { name: 'Chilled Lilac', hex: '#E9D5FF' },
      { name: 'White', hex: '#F3F4F6' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'ultra-open',
    name: 'Ultra Open Earbuds',
    brand: 'Bose',
    category: 'Open-Ear',
    price: 299.00,
    originalPrice: 349.00,
    rating: 4.8,
    reviewsCount: 640,
    badge: 'Spatial OpenAudio',
    image: 'img4.png',
    tagline: 'Awareness Meets Immersive Sound',
    description: 'Open ear design with Bose Immersive Audio spatialized sound. Hear the world around you while enjoying rich, private sound with up to 7.5 hours of play time and 48 hours standby.',
    specs: {
      battery: '7.5h + 19.5h case',
      anc: 'OpenAudio Awareness',
      waterproof: 'IPX4 Rating',
      driver: 'Bose Dipole Transducer',
      codecs: 'Snapdragon Sound, aptX, AAC',
      weight: '6.3g per earbud'
    },
    colors: [
      { name: 'Black', hex: '#111827' },
      { name: 'White Smoke', hex: '#F1F5F9' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'te-w1',
    name: 'TE-W1 Adaptive',
    brand: 'AVIOT',
    category: 'Hi-Fi Audiophile',
    price: 245.00,
    originalPrice: 285.00,
    rating: 4.9,
    reviewsCount: 510,
    badge: 'Dual Driver LDAC',
    image: 'img5.png',
    tagline: 'Coaxial 3D System with High-Res Audio',
    description: 'Advanced Adaptive Hybrid Noise Cancelling with Coaxial 3D System. Dual dynamic driver configuration with high-resolution LDAC compatibility and up to 50 hours of battery life.',
    specs: {
      battery: '16h + 50h case',
      anc: 'Adaptive Hybrid ANC',
      waterproof: 'IPX4 Rating',
      driver: 'Coaxial Dual Dynamic (10mm + 6mm)',
      codecs: 'LDAC, AAC, SBC',
      weight: '6.9g per earbud'
    },
    colors: [
      { name: 'Obsidian Black', hex: '#1E293B' },
      { name: 'Titanium Silver', hex: '#94A3B8' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro (2nd Gen)',
    brand: 'Apple',
    category: 'Noise Cancelling',
    price: 249.00,
    originalPrice: 299.00,
    rating: 4.9,
    reviewsCount: 3420,
    badge: 'Bestseller',
    image: 'img6.png',
    tagline: 'Pro-Level ANC, Adaptive Audio & Spatial Tracking',
    description: 'Active Noise Cancellation with Transparency mode and Adaptive Audio. Personalized Spatial Audio with dynamic head tracking and up to 30 hours of listening time with the MagSafe case.',
    specs: {
      battery: '6h + 30h case',
      anc: 'H2 Pro-Level Active ANC',
      waterproof: 'IP54 Dust/Sweat/Water',
      driver: 'Custom Apple High-Excursion Driver',
      codecs: 'Apple H2 Chip, AAC, ALAC',
      weight: '5.3g per earbud'
    },
    colors: [
      { name: 'Glossy White', hex: '#FFFFFF' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'galaxy-buds-3-pro',
    name: 'Galaxy Buds3 Pro',
    brand: 'Samsung',
    category: 'Hi-Fi Audiophile',
    price: 249.99,
    originalPrice: 289.99,
    rating: 4.8,
    reviewsCount: 1850,
    badge: 'Galaxy AI Audio',
    image: 'img7.png',
    tagline: 'AI-Powered Adaptive Sound with Blade Design',
    description: 'Next-gen sound powered by Galaxy AI with Adaptive Noise Control and real-time Interpreter. Dual amplifier with enhanced 2-way speakers and up to 30 hours total playtime.',
    specs: {
      battery: '7h + 30h case',
      anc: 'Galaxy AI Adaptive ANC',
      waterproof: 'IP57 Waterproof',
      driver: 'Enhanced 2-Way (10.5mm + 6.1mm Planar)',
      codecs: 'Samsung Seamless Codec (24-bit/96kHz), AAC, SBC',
      weight: '5.4g per earbud'
    },
    colors: [
      { name: 'Silver Titanium', hex: '#64748B' },
      { name: 'Phantom White', hex: '#F8FAFC' }
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'sony-wf-1000xm5', name: 'WF-1000XM5', brand: 'Sony', category: 'Noise Cancelling',
    price: 299.99, rating: 4.8, reviewsCount: 0, badge: 'Precision Sound', image: 'sony-wf-1000xm5.webp',
    tagline: 'Beautifully detailed sound, wherever you go',
    description: 'Compact wireless earbuds with Sony noise cancellation, Dynamic Driver X and a comfortable, secure fit.',
    specs: { battery: '8h + 24h case', anc: 'Integrated Processor V2', waterproof: 'IPX4', driver: 'Dynamic Driver X' },
    colors: [{ name: 'Platinum Silver', hex: '#d9d6ce' }], inStock: true
  },
  {
    id: 'sennheiser-mtw4', name: 'MOMENTUM True Wireless 4', brand: 'Sennheiser', category: 'Hi-Fi Audiophile',
    price: 299.95, rating: 4.7, reviewsCount: 0, badge: 'Signature Sound', image: 'sennheiser-mtw4.webp',
    tagline: 'A more personal way to hear every detail',
    description: 'Sennheiser signature sound with adaptive noise cancellation, sound personalization and a refined fabric charging case.',
    specs: { battery: '7.5h + 30h case', anc: 'Adaptive ANC', waterproof: 'IP54', driver: 'TrueResponse transducer' },
    colors: [{ name: 'Black Graphite', hex: '#292c30' }], inStock: true
  },
  {
    id: 'nothing-ear', name: 'Ear', brand: 'Nothing', category: 'Hi-Fi Audiophile',
    price: 149.00, rating: 4.7, reviewsCount: 0, badge: 'Design Icon', image: 'nothing-ear.webp',
    tagline: 'A transparent new perspective on sound',
    description: 'Transparent design meets a ceramic driver, smart noise cancellation and a richly customizable sound profile.',
    specs: { battery: '8.5h + 40.5h case', anc: 'Smart ANC', waterproof: 'IP54', driver: '11mm ceramic driver' },
    colors: [{ name: 'White', hex: '#f5f5f3' }], inStock: true
  },
  {
    id: 'jbl-tour-pro-3', name: 'Tour Pro 3', brand: 'JBL', category: 'Noise Cancelling',
    price: 299.95, rating: 4.7, reviewsCount: 0, badge: 'Smart Case', image: 'jbl-tour-pro-3.webp',
    tagline: 'Everything at your fingertips',
    description: 'Dual-driver wireless sound, adaptive noise cancellation and a smart charging case with its own display.',
    specs: { battery: '11h + 44h case', anc: 'True Adaptive ANC', waterproof: 'IP55', driver: 'Hybrid dual driver' },
    colors: [{ name: 'Latte', hex: '#c6b7a5' }], inStock: true
  },
  {
    id: 'jabra-elite-10-gen-2', name: 'Elite 10 Gen 2', brand: 'Jabra', category: 'Noise Cancelling',
    price: 279.99, rating: 4.7, reviewsCount: 0, badge: 'All-Day Comfort', image: 'jabra-elite-10-gen-2.webp',
    tagline: 'Effortless listening, exceptional comfort',
    description: 'Soft, comfortable earbuds with advanced noise cancellation and a charging case that can transmit audio from wired sources.',
    specs: { battery: '6h + 36h case', anc: 'Advanced ANC', waterproof: 'IP57', driver: '10mm dynamic driver' },
    colors: [{ name: 'Soft White', hex: '#e7e2d5' }], inStock: true
  }
];

export const CATEGORIES = [
  'All',
  'Noise Cancelling',
  'Sports & Workout',
  'Hi-Fi Audiophile',
  'Open-Ear'
];

export const REVIEWS = [
  {
    id: 1,
    author: 'Alex Henderson',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    product: 'AirPods Pro (2nd Gen)',
    rating: 5,
    date: '2 days ago',
    title: 'Unbelievable noise cancellation and clarity',
    content: 'The spatial audio dynamic head tracking is magical for movies and music. The noise cancellation creates a cone of silence on my daily metro commute. RBuds delivered it super fast!',
    verified: true
  },
  {
    id: 2,
    author: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    product: 'QuietComfort Ultra',
    rating: 5,
    date: '1 week ago',
    title: 'The best bass and comfort for long flights',
    content: 'I wore these on a 14-hour flight with zero ear fatigue. CustomTune adapts to your ear canal shape and the acoustic depth is studio grade. Absolutely worth every single dollar.',
    verified: true
  },
  {
    id: 3,
    author: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    product: 'Galaxy Buds3 Pro',
    rating: 5,
    date: '2 weeks ago',
    title: 'Blade light design is so futuristic',
    content: 'The 24-bit Hi-Fi sound paired with my phone produces unbelievable instrument separation. The ambient sound mode feels completely natural, like not wearing earbuds at all.',
    verified: true
  },
  {
    id: 4,
    author: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    product: 'Powerbeats Pro',
    rating: 5,
    date: '3 weeks ago',
    title: 'Never falls out during marathon training',
    content: 'The adjustable earhooks are rock solid during sprints and heavy HIIT sessions. 9 hours of battery on a single charge is unmatched. 10/10 recommend for athletes.',
    verified: true
  }
];

export const FAQS = [
  {
    question: 'How fast is shipping, and is it free?',
    answer: 'We offer Free Express Shipping on all orders over $99. Orders placed before 3 PM EST are processed and shipped same-day, with delivery typically taking 2-4 business days.'
  },
  {
    question: 'What is the RBuds 30-day money-back guarantee?',
    answer: 'Try any RBuds product risk-free for 30 days. If you are not 100% satisfied with acoustic fit, audio fidelity, or comfort, return it for a full refund with free return shipping.'
  },
  {
    question: 'Are all products authentic with manufacturer warranty?',
    answer: 'Yes! RBuds is an authorized official retailer. Every pair comes sealed in official packaging with an authentic serial number and 1 to 2-year manufacturer warranty.'
  },
  {
    question: 'How do I pair my new earbuds with multiple devices?',
    answer: 'Most models support Bluetooth 5.3/5.4 multipoint. Simply open the case near your device or hold the pairing button for 3 seconds to connect seamlessly with phones, laptops, and tablets.'
  }
];
