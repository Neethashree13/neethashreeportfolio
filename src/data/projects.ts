export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface CaseStudySection {
  id: string;
  number?: string;
  title: string;
  content: string;
  bullets?: string[];
  architecture?: string[];
  visualType?: 'architecture' | 'timeline' | 'ui-grid' | 'pipeline' | 'flow';
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  category: string;
  description: string;
  statement?: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  ctaLabel: string;
  ctaType: 'external' | 'case-study';
  status?: string;
  subtitle?: string;
  highlight?: string;
  caseStudy: {
    role: string;
    sections: CaseStudySection[];
  };
}

export const projects: Project[] = [
  {
    slug: 'cluevra',
    number: '01',
    name: 'Cluevra',
    category: 'Web Application · Word Tools · SEO · Full-Stack TypeScript',
    description:
      'Cluevra is a high-performance dictionary-powered word-finding and anagram-solving platform built for word game players and puzzle enthusiasts.',
    statement:
      'Instead of relying on simple string matching, Cluevra uses a 168,551-word tournament lexicon together with letter-frequency and combinatoric engines to solve complex word queries quickly.',
    tech: [
      'React 19',
      'TypeScript 5.8',
      'Vite 6',
      'Tailwind CSS v4',
      'Node.js 22',
      'Express',
      'Lucide React',
      'Schema.org JSON-LD',
    ],
    features: [
      'Word Unscrambler',
      'Words With Letters',
      'Word Finder',
      'Anagram Solver',
      '5 Letter Word Finder',
      '6 Letter Word Unscrambler',
      '7 Letter Word Unscrambler',
      '8 Letter Word Unscrambler',
      'Wildcard support',
      'Scrabble score calculation',
      'Dictionary definitions',
      'Search history',
      'Shareable URL queries',
      'FAQ and informational content',
      'SEO structured data',
    ],
    liveUrl: 'https://cluevra.com',
    ctaLabel: 'Visit Cluevra',
    ctaType: 'external',
    highlight:
      'Processes a 168,551-word lexicon in memory using optimized indices and combinatorial letter-frequency logic.',
    caseStudy: {
      role: 'Full-Stack Developer',
      sections: [
        {
          id: 'overview',
          number: '01',
          title: 'Overview',
          content:
            'Cluevra is a production word-search platform built for word game players and puzzle enthusiasts. It offers multiple dedicated tools — from a word unscrambler to length-specific finders — all powered by a single in-memory tournament lexicon.',
        },
        {
          id: 'challenge',
          number: '02',
          title: 'The Challenge',
          content:
            'Word game players need fast, accurate results across complex letter constraints — wildcards, anagrams, length filters, and scoring. Existing tools often rely on simple string matching, which is too slow and imprecise for a 168,551-word lexicon with combinatorial queries.',
        },
        {
          id: 'solution',
          number: '03',
          title: 'Solution',
          content:
            'Cluevra was built around a set of optimized data structures and algorithms that make word lookup near-instant, even with wildcards and complex constraints.',
          bullets: [
            'In-memory lexicon with 168,551 tournament words',
            'Pre-built word indices for fast lookup',
            'Alphagram / signature-based anagram detection',
            'Letter-frequency validation for instant filtering',
            'Wildcard resolution with combinatorial logic',
            'Length-based indexing for O(1) category access',
            'URL state synchronization for shareable searches',
          ],
        },
        {
          id: 'experience',
          number: '04',
          title: 'User Experience',
          content:
            'The interface was designed to be fast, clean, and accessible across devices. Every search produces rich, scannable results.',
          bullets: [
            'Instant search interface with live results',
            'Sortable, filterable result lists',
            'Word cards with definitions and scores',
            'Scrabble score badges per word',
            'Fully responsive layouts for mobile and desktop',
            'Shareable URL queries for any search',
          ],
          visualType: 'ui-grid',
        },
        {
          id: 'architecture',
          number: '05',
          title: 'Technical Architecture',
          content:
            'The system is structured as a pipeline: user input flows through the React UI into the search engine, which queries pre-built indices against the in-memory lexicon, then returns results while synchronizing state to the URL.',
          architecture: [
            'User',
            'React UI',
            'Search Engine',
            'Word Indices / Lexicon',
            'Results',
            'URL State / Local Persistence',
          ],
          visualType: 'architecture',
        },
        {
          id: 'seo',
          number: '06',
          title: 'SEO',
          content:
            'Discoverability was a core requirement. The site was built with structured data and search-friendly architecture from the start.',
          bullets: [
            'Schema.org JSON-LD structured data',
            'WebApplication structured data',
            'FAQPage structured data',
            'XML sitemap',
            'Search-friendly dedicated pages per tool',
          ],
        },
        {
          id: 'outcome',
          number: '07',
          title: 'Outcome',
          content:
            'Cluevra became a production-ready word-search platform with multiple dedicated tools and shareable search experiences. It is live and publicly accessible.',
        },
      ],
    },
  },
  {
    slug: 'comicverse-ai',
    number: '02',
    name: 'ComicVerse AI',
    category: 'AI Product · Creative Platform · Story-to-Video',
    description:
      'An AI-powered creative platform that transforms a simple story idea into a narrated comic story, animated scenes, and exportable comic experiences.',
    statement:
      'Give the application one story idea. The system turns it into a structured creative production.',
    tech: [
      'TypeScript',
      'React 19',
      'TanStack Start',
      'TanStack Router',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
      'Google Gemini',
      'Runway ML',
      'fal.ai',
      'Replicate',
      'FFmpeg',
      'pdf-lib',
    ],
    features: [
      'Story generation',
      'Character generation',
      'Locked character reference sheets',
      'Scene generation',
      'Panel-by-panel comic generation',
      'Speech bubble editor',
      'Drag and resize speech bubbles',
      'AI narration',
      'Image-to-video animation',
      'Multi-provider video fallback',
      'AI music generation',
      '16:9 and 9:16 video output',
      'Static and animated video export',
      'Paginated comic PDF export',
      'User accounts',
      'Per-user project isolation',
      'Public share links',
    ],
    ctaLabel: 'View Case Study',
    ctaType: 'case-study',
    status: 'Working project / development project',
    highlight:
      'Maintaining character consistency across generated scenes with a multi-provider AI fallback architecture.',
    caseStudy: {
      role: 'Full-Stack & AI Developer',
      sections: [
        {
          id: 'idea',
          title: 'The Idea',
          content: 'Can a single sentence become an entire visual story?',
        },
        {
          id: 'workflow',
          title: 'The Workflow',
          content:
            'The platform takes a single story idea and runs it through a complete creative production pipeline — from script to characters to panels to narrated, animated video.',
          architecture: [
            'Story Idea',
            'Story & Script',
            'Characters',
            'Character Reference Sheets',
            'Scenes',
            'Panels',
            'Speech Bubbles',
            'Narration',
            'Animation',
            'Music',
            'Video / Comic PDF',
          ],
          visualType: 'pipeline',
        },
        {
          id: 'challenge',
          title: 'Key Engineering Challenge',
          content:
            'Maintaining character consistency across generated scenes and supporting multiple AI generation providers with different capabilities and failure modes.',
        },
        {
          id: 'solution',
          title: 'Solution',
          content:
            'Character reference sheets lock visual identity, a structured generation pipeline enforces consistency across steps, and a provider fallback architecture gracefully switches between AI services when one fails or is unavailable.',
          bullets: [
            'Locked character reference sheets',
            'Structured generation pipeline',
            'Multi-provider fallback architecture',
          ],
        },
        {
          id: 'tools',
          title: 'Creative Tools',
          content:
            'The platform provides a full creative workspace for building comics and video.',
          bullets: [
            'Character editor',
            'Scene workspace',
            'Panel editor',
            'Speech bubble editor with drag & resize',
            'Video generation (16:9 and 9:16)',
            'Comic PDF and video export',
          ],
          visualType: 'ui-grid',
        },
        {
          id: 'architecture',
          title: 'Architecture',
          content:
            'The system is structured as a creative pipeline: user input flows through a workspace into a multi-stage generation engine, then into export.',
          architecture: [
            'User',
            'Creative Workspace',
            'Generation Pipeline',
            'Story → Characters → Scenes → Panels → Images → Narration → Music → Video',
            'Export',
          ],
          visualType: 'flow',
        },
      ],
    },
  },
  {
    slug: 'flashcart-ai',
    number: '03',
    name: 'FlashCart AI',
    subtitle: 'Quick-Commerce & Smart Grocery Delivery',
    category: 'Flutter · AI · Mobile · Backend',
    description:
      'An advanced quick-commerce mobile application concept focused on fast grocery delivery, AI-assisted shopping, payments, rewards, and real-time order tracking.',
    tech: [
      'Flutter',
      'Dart',
      'Riverpod',
      'Dio',
      'GoRouter',
      'Node.js',
      'Express',
      'TypeScript',
      'PostgreSQL',
      'Firebase Auth',
      'Google Gemini API',
      'REST APIs',
    ],
    features: [
      '10-minute checkout experience',
      'Multi-item cart',
      'Store partitioning',
      'Save for later',
      'Address selection',
      'AI shopping assistant',
      'Recipe-to-cart generation',
      'Dietary alternatives',
      'Budget-friendly substitutions',
      'FlashWallet',
      'Cashback',
      'Reward points',
      'Transaction ledger',
      'Live order tracking',
      'Delivery OTP verification',
      'Smart search',
      'Category exploration',
      'Coupons & promotional engine',
    ],
    ctaLabel: 'View Case Study',
    ctaType: 'case-study',
    status: 'Working Prototype / Advanced Functional MVP',
    highlight:
      'AI recipe-to-cart flow: "Make Paneer Butter Masala for 4" → ingredients identified → cart created → alternatives suggested.',
    caseStudy: {
      role: 'Mobile & Backend Developer',
      sections: [
        {
          id: 'concept',
          number: '01',
          title: 'Product Concept',
          content:
            'Quick-commerce is about getting essentials to customers in minutes. FlashCart AI explores how AI can make that experience smarter — from recipe-based shopping to budget optimization.',
        },
        {
          id: 'mobile',
          number: '02',
          title: 'Mobile Experience',
          content:
            'The app covers the full shopping journey with a focus on speed and clarity.',
          bullets: [
            'Home with categories and promotions',
            'Smart search',
            'Product categories and details',
            'Multi-item cart with save-for-later',
            'Checkout with address selection',
            'FlashWallet with cashback and rewards',
            'Live order tracking',
            'AI shopping assistant',
          ],
          visualType: 'ui-grid',
        },
        {
          id: 'ai',
          number: '03',
          title: 'AI Shopping',
          content:
            'The AI assistant turns natural-language requests into actionable carts. A user can say "Make Paneer Butter Masala for 4" and the AI identifies the recipe ingredients, creates a shopping cart, suggests dietary alternatives, and helps optimize the purchase.',
          visualType: 'flow',
        },
        {
          id: 'backend',
          number: '04',
          title: 'Backend',
          content:
            'The backend is a Node.js / Express API over PostgreSQL, with a Gemini-powered AI layer for shopping recommendations.',
          architecture: [
            'Flutter',
            'REST API',
            'Node.js / Express',
            'PostgreSQL',
            'Services',
          ],
          visualType: 'architecture',
        },
        {
          id: 'ai-arch',
          number: '04b',
          title: 'AI Layer',
          content:
            'The AI flow runs from the Flutter app through the backend to the Gemini API and back with shopping recommendations.',
          architecture: [
            'Flutter',
            'Backend',
            'Gemini API',
            'Shopping recommendations',
          ],
          visualType: 'flow',
        },
        {
          id: 'tracking',
          number: '05',
          title: 'Order Tracking',
          content:
            'Orders move through a clear visual timeline from placement to arrival, with OTP verification at delivery.',
          architecture: [
            'Order Placed',
            'Packed',
            'Out for Delivery',
            'Arrived',
          ],
          visualType: 'timeline',
        },
        {
          id: 'implementation',
          number: '06',
          title: 'Technical Implementation',
          content:
            'The app was built with a modern Flutter stack and a TypeScript backend.',
          bullets: [
            'Riverpod for state management',
            'REST APIs via Dio',
            'PostgreSQL for data persistence',
            'Firebase authentication',
            'Google Gemini for AI shopping features',
            'Payment gateway interfaces',
          ],
        },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
