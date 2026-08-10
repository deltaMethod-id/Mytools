export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  free: boolean;
  featured: boolean;
}

export const categories = [
  "All",
  "AI Tools",
  "Developer Tools",
  "Design Tools",
  "Productivity",
  "Education",
  "Security",
  "Image Tools",
  "Video Tools",
  "Audio Tools",
  "PDF Tools",
  "Utility",
  "Writing",
  "Other",
] as const;

export type Category = (typeof categories)[number];

export const tools: Tool[] = [
  // AI Tools
  {
    id: "chatgpt-free",
    name: "ChatGPT",
    description:
      "OpenAI's conversational AI assistant. The free tier provides access to GPT-3.5 for text generation, coding help, brainstorming, and general Q&A.",
    category: "AI Tools",
    url: "https://chat.openai.com",
    free: true,
    featured: true,
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    description:
      "Open-source platform hosting thousands of free machine learning models. Run NLP, image, and audio models directly in the browser or via API.",
    category: "AI Tools",
    url: "https://huggingface.co",
    free: true,
    featured: true,
  },
  {
    id: "google-gemini",
    name: "Google Gemini",
    description:
      "Google's multimodal AI assistant. Free access to Gemini for text, image understanding, code generation, and creative tasks.",
    category: "AI Tools",
    url: "https://gemini.google.com",
    free: true,
    featured: false,
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    description:
      "AI-powered search engine that provides cited, concise answers to complex questions. Free tier with unlimited basic searches.",
    category: "AI Tools",
    url: "https://www.perplexity.ai",
    free: true,
    featured: true,
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description:
      "Open-source AI chat model with strong reasoning capabilities. Completely free to use via web interface with no usage limits.",
    category: "AI Tools",
    url: "https://chat.deepseek.com",
    free: true,
    featured: false,
  },
  {
    id: "ollama",
    name: "Ollama",
    description:
      "Run large language models locally on your machine. Supports Llama, Mistral, CodeLlama, and many more open-source models for free.",
    category: "AI Tools",
    url: "https://ollama.ai",
    free: true,
    featured: false,
  },

  // Developer Tools
  {
    id: "vscode",
    name: "Visual Studio Code",
    description:
      "Microsoft's free, open-source code editor with IntelliSense, debugging, Git integration, and thousands of extensions for every language.",
    category: "Developer Tools",
    url: "https://code.visualstudio.com",
    free: true,
    featured: true,
  },
  {
    id: "github",
    name: "GitHub",
    description:
      "World's largest code hosting platform. Free unlimited public and private repositories, CI/CD via Actions, project management, and collaboration tools.",
    category: "Developer Tools",
    url: "https://github.com",
    free: true,
    featured: true,
  },
  {
    id: "codepen",
    name: "CodePen",
    description:
      "Online code editor for front-end development. Write HTML, CSS, and JavaScript in the browser with live preview. Free for public pens.",
    category: "Developer Tools",
    url: "https://codepen.io",
    free: true,
    featured: false,
  },
  {
    id: "stackblitz",
    name: "StackBlitz",
    description:
      "Full-stack web IDE in the browser powered by WebContainers. Instant dev environments for React, Vue, Angular, and Node.js projects.",
    category: "Developer Tools",
    url: "https://stackblitz.com",
    free: true,
    featured: false,
  },
  {
    id: "regex101",
    name: "Regex101",
    description:
      "Online regex tester and debugger with real-time explanation, match highlighting, and support for PCRE, JavaScript, Python, and Go flavors.",
    category: "Developer Tools",
    url: "https://regex101.com",
    free: true,
    featured: false,
  },
  {
    id: "jsoncrack",
    name: "JSON Crack",
    description:
      "Visualize JSON, YAML, XML, CSV, and TOML data as interactive graphs. Open-source tool for exploring and understanding complex data structures.",
    category: "Developer Tools",
    url: "https://jsoncrack.com",
    free: true,
    featured: false,
  },
  {
    id: "devdocs",
    name: "DevDocs",
    description:
      "Fast, offline-capable API documentation browser. Combines docs from 600+ projects like MDN, React, Node.js in a single, searchable interface.",
    category: "Developer Tools",
    url: "https://devdocs.io",
    free: true,
    featured: false,
  },
  {
    id: "gitpod",
    name: "Gitpod",
    description:
      "Cloud development environments that spin up fresh, automated dev setups. 50 hours/month free with VS Code or JetBrains IDE support.",
    category: "Developer Tools",
    url: "https://www.gitpod.io",
    free: true,
    featured: false,
  },

  // Design Tools
  {
    id: "figma",
    name: "Figma",
    description:
      "Collaborative UI design tool in the browser. Free plan includes 3 Figma files, unlimited personal files, and real-time collaboration.",
    category: "Design Tools",
    url: "https://www.figma.com",
    free: true,
    featured: true,
  },
  {
    id: "canva",
    name: "Canva",
    description:
      "Drag-and-drop graphic design platform with thousands of free templates for social media, presentations, posters, and more.",
    category: "Design Tools",
    url: "https://www.canva.com",
    free: true,
    featured: true,
  },
  {
    id: "coolors",
    name: "Coolors",
    description:
      "Lightning-fast color palette generator. Press spacebar to generate harmonious color schemes. Export to multiple formats including CSS and SVG.",
    category: "Design Tools",
    url: "https://coolors.co",
    free: true,
    featured: false,
  },
  {
    id: "fontsource",
    name: "Fontsource",
    description:
      "Self-host open-source fonts as NPM packages. Access 1500+ Google Fonts and other open-source typefaces with simple npm install commands.",
    category: "Design Tools",
    url: "https://fontsource.org",
    free: true,
    featured: false,
  },
  {
    id: "heroicons",
    name: "Heroicons",
    description:
      "Beautiful hand-crafted SVG icons by the makers of Tailwind CSS. Available in outline, solid, and mini styles. MIT licensed and free forever.",
    category: "Design Tools",
    url: "https://heroicons.com",
    free: true,
    featured: false,
  },
  {
    id: "realtime-colors",
    name: "Realtime Colors",
    description:
      "Visualize your color palette on a real website template. Instantly see how your brand colors look applied to typography, buttons, and cards.",
    category: "Design Tools",
    url: "https://www.realtimecolors.com",
    free: true,
    featured: false,
  },

  // Productivity
  {
    id: "notion",
    name: "Notion",
    description:
      "All-in-one workspace for notes, wikis, databases, and project management. Free plan with unlimited pages and blocks for personal use.",
    category: "Productivity",
    url: "https://www.notion.so",
    free: true,
    featured: true,
  },
  {
    id: "obsidian",
    name: "Obsidian",
    description:
      "Powerful knowledge base on local Markdown files. Free for personal use with graph view, backlinks, plugins, and full offline support.",
    category: "Productivity",
    url: "https://obsidian.md",
    free: true,
    featured: false,
  },
  {
    id: "todoist-free",
    name: "Todoist",
    description:
      "Task manager and to-do list app. Free plan includes 5 active projects, 5 collaborators per project, and basic features across all platforms.",
    category: "Productivity",
    url: "https://todoist.com",
    free: true,
    featured: false,
  },
  {
    id: "excalidraw",
    name: "Excalidraw",
    description:
      "Virtual whiteboard for hand-drawn style diagrams. Open-source, collaborative, and works entirely in the browser. No account required.",
    category: "Productivity",
    url: "https://excalidraw.com",
    free: true,
    featured: true,
  },
  {
    id: "trello",
    name: "Trello",
    description:
      "Visual project management with Kanban boards. Free plan includes unlimited cards, up to 10 boards per workspace, and basic automation.",
    category: "Productivity",
    url: "https://trello.com",
    free: true,
    featured: false,
  },

  // Education
  {
    id: "khan-academy",
    name: "Khan Academy",
    description:
      "Free world-class education in math, science, computing, history, and more. Includes exercises, quizzes, and instructional videos.",
    category: "Education",
    url: "https://www.khanacademy.org",
    free: true,
    featured: true,
  },
  {
    id: "freecodecamp",
    name: "freeCodeCamp",
    description:
      "Learn to code for free with interactive lessons and certifications in web development, JavaScript, Python, data science, and more.",
    category: "Education",
    url: "https://www.freecodecamp.org",
    free: true,
    featured: true,
  },
  {
    id: "mit-ocw",
    name: "MIT OpenCourseWare",
    description:
      "Free access to MIT's course materials including lecture notes, assignments, and exams from over 2,500 courses across all departments.",
    category: "Education",
    url: "https://ocw.mit.edu",
    free: true,
    featured: false,
  },
  {
    id: "the-odin-project",
    name: "The Odin Project",
    description:
      "Full-stack web development curriculum that is 100% free. Learn HTML, CSS, JavaScript, Ruby, Rails, and Node.js through project-based learning.",
    category: "Education",
    url: "https://www.theodinproject.com",
    free: true,
    featured: false,
  },
  {
    id: "w3schools",
    name: "W3Schools",
    description:
      "Web development tutorials and references for HTML, CSS, JavaScript, Python, SQL, and more. Free interactive code editor and exercises.",
    category: "Education",
    url: "https://www.w3schools.com",
    free: true,
    featured: false,
  },

  // Security
  {
    id: "bitwarden",
    name: "Bitwarden",
    description:
      "Open-source password manager with unlimited passwords and devices on the free plan. End-to-end encrypted vault with cross-platform sync.",
    category: "Security",
    url: "https://bitwarden.com",
    free: true,
    featured: true,
  },
  {
    id: "virustotal",
    name: "VirusTotal",
    description:
      "Analyze suspicious files, URLs, domains, and IP addresses with 70+ antivirus scanners and URL/domain blocklisting services. Free to use.",
    category: "Security",
    url: "https://www.virustotal.com",
    free: true,
    featured: false,
  },
  {
    id: "haveibeenpwned",
    name: "Have I Been Pwned",
    description:
      "Check if your email or phone has been compromised in a data breach. Monitors billions of breached accounts. Free notifications for future breaches.",
    category: "Security",
    url: "https://haveibeenpwned.com",
    free: true,
    featured: false,
  },
  {
    id: "letsencrypt",
    name: "Let's Encrypt",
    description:
      "Free, automated, and open Certificate Authority. Get free SSL/TLS certificates for your websites with automatic renewal support.",
    category: "Security",
    url: "https://letsencrypt.org",
    free: true,
    featured: false,
  },

  // Image Tools
  {
    id: "remove-bg",
    name: "remove.bg",
    description:
      "AI-powered background removal for images. Get transparent PNG results in seconds. Free for images up to 0.25 megapixels.",
    category: "Image Tools",
    url: "https://www.remove.bg",
    free: true,
    featured: false,
  },
  {
    id: "tinypng",
    name: "TinyPNG",
    description:
      "Smart lossy compression for PNG and JPEG images. Reduces file sizes by 50-80% with minimal quality loss. Free for up to 20 images at a time.",
    category: "Image Tools",
    url: "https://tinypng.com",
    free: true,
    featured: true,
  },
  {
    id: "squoosh",
    name: "Squoosh",
    description:
      "Google's image compression web app. Supports WebP, AVIF, JPEG XL, and more. Compare before/after with side-by-side view. Works offline.",
    category: "Image Tools",
    url: "https://squoosh.app",
    free: true,
    featured: true,
  },
  {
    id: "photopea",
    name: "Photopea",
    description:
      "Free online photo editor that supports PSD, XCF, Sketch, XD, and CDR formats. Full layer support with Photoshop-like interface in the browser.",
    category: "Image Tools",
    url: "https://www.photopea.com",
    free: true,
    featured: true,
  },
  {
    id: "unsplash",
    name: "Unsplash",
    description:
      "High-quality, royalty-free stock photos contributed by a community of photographers. Free for commercial and personal use with no attribution required.",
    category: "Image Tools",
    url: "https://unsplash.com",
    free: true,
    featured: false,
  },

  // Video Tools
  {
    id: "davinci-resolve",
    name: "DaVinci Resolve",
    description:
      "Professional video editing, color grading, VFX, and audio post-production. The free version includes nearly all features used by Hollywood editors.",
    category: "Video Tools",
    url: "https://www.blackmagicdesign.com/products/davinciresolve",
    free: true,
    featured: true,
  },
  {
    id: "obs-studio",
    name: "OBS Studio",
    description:
      "Free, open-source software for video recording and live streaming. Supports multiple sources, scenes, and filters with real-time video mixing.",
    category: "Video Tools",
    url: "https://obsproject.com",
    free: true,
    featured: true,
  },
  {
    id: "handbrake",
    name: "HandBrake",
    description:
      "Open-source video transcoder for converting video files between formats. Supports batch encoding, presets for devices, and subtitle passthrough.",
    category: "Video Tools",
    url: "https://handbrake.fr",
    free: true,
    featured: false,
  },
  {
    id: "clipchamp-free",
    name: "Clipchamp",
    description:
      "Microsoft's free browser-based video editor with templates, stock media, text-to-speech, and screen recording. Export up to 1080p for free.",
    category: "Video Tools",
    url: "https://clipchamp.com",
    free: true,
    featured: false,
  },

  // Audio Tools
  {
    id: "audacity",
    name: "Audacity",
    description:
      "Free, open-source audio editor and recorder. Multi-track editing, effects, noise reduction, and support for WAV, AIFF, MP3, OGG, and FLAC.",
    category: "Audio Tools",
    url: "https://www.audacityteam.org",
    free: true,
    featured: true,
  },
  {
    id: "bandlab",
    name: "BandLab",
    description:
      "Free online DAW (Digital Audio Workstation) with multi-track recording, virtual instruments, effects, and collaboration features. No downloads needed.",
    category: "Audio Tools",
    url: "https://www.bandlab.com",
    free: true,
    featured: false,
  },
  {
    id: "freesound",
    name: "Freesound",
    description:
      "Collaborative database of Creative Commons licensed sounds. Browse, download, and share audio samples, loops, and sound effects for free.",
    category: "Audio Tools",
    url: "https://freesound.org",
    free: true,
    featured: false,
  },

  // PDF Tools
  {
    id: "ilovepdf",
    name: "iLovePDF",
    description:
      "Free online PDF tools for merging, splitting, compressing, converting, rotating, watermarking, and unlocking PDF files. Simple drag-and-drop interface.",
    category: "PDF Tools",
    url: "https://www.ilovepdf.com",
    free: true,
    featured: true,
  },
  {
    id: "smallpdf",
    name: "Smallpdf",
    description:
      "Suite of 20+ PDF tools including compress, convert, merge, split, sign, and edit. Free tier includes 2 tasks per day with no file size limit.",
    category: "PDF Tools",
    url: "https://smallpdf.com",
    free: true,
    featured: false,
  },
  {
    id: "pdf24",
    name: "PDF24 Tools",
    description:
      "Completely free PDF tools with no limits. Merge, split, compress, convert, sign, protect, and edit PDFs. Desktop app and online version available.",
    category: "PDF Tools",
    url: "https://tools.pdf24.org",
    free: true,
    featured: true,
  },

  // Utility
  {
    id: "speedtest",
    name: "Speedtest by Ookla",
    description:
      "Test your internet connection speed including download, upload, and ping. Free with detailed results, server selection, and history tracking.",
    category: "Utility",
    url: "https://www.speedtest.net",
    free: true,
    featured: false,
  },
  {
    id: "temp-mail",
    name: "Temp Mail",
    description:
      "Free disposable temporary email addresses. Receive emails instantly without registration. Perfect for sign-ups and avoiding spam.",
    category: "Utility",
    url: "https://temp-mail.org",
    free: true,
    featured: false,
  },
  {
    id: "wayback-machine",
    name: "Wayback Machine",
    description:
      "Internet Archive's digital time machine. Browse over 800 billion saved web pages going back to 1996. Free access to archived versions of any website.",
    category: "Utility",
    url: "https://web.archive.org",
    free: true,
    featured: false,
  },
  {
    id: "convertio",
    name: "Convertio",
    description:
      "Free online file converter supporting 300+ formats including documents, images, audio, video, fonts, and archives. Up to 100 MB per file for free.",
    category: "Utility",
    url: "https://convertio.co",
    free: true,
    featured: false,
  },

  // Writing
  {
    id: "hemingway",
    name: "Hemingway Editor",
    description:
      "Free online writing tool that highlights complex sentences, passive voice, adverbs, and readability issues. Makes your writing bold and clear.",
    category: "Writing",
    url: "https://hemingwayapp.com",
    free: true,
    featured: false,
  },
  {
    id: "grammarly-free",
    name: "Grammarly",
    description:
      "AI writing assistant that checks grammar, spelling, punctuation, and style. Free tier covers core grammar and spelling across web and desktop.",
    category: "Writing",
    url: "https://www.grammarly.com",
    free: true,
    featured: true,
  },
  {
    id: "languagetool",
    name: "LanguageTool",
    description:
      "Open-source grammar, style, and spell checker supporting 30+ languages. Free tier includes 10,000 characters per check and browser extension.",
    category: "Writing",
    url: "https://languagetool.org",
    free: true,
    featured: false,
  },
  {
    id: "typingcom",
    name: "Typing.com",
    description:
      "Free typing tutor with lessons, tests, and games. Track your WPM and accuracy. Includes curriculum for teachers and students.",
    category: "Writing",
    url: "https://www.typing.com",
    free: true,
    featured: false,
  },

  // Other
  {
    id: "alternativeto",
    name: "AlternativeTo",
    description:
      "Crowdsourced software recommendation platform. Find free and open-source alternatives to any application, sorted by user votes and reviews.",
    category: "Other",
    url: "https://alternativeto.net",
    free: true,
    featured: false,
  },
  {
    id: "product-hunt",
    name: "Product Hunt",
    description:
      "Discover the latest tech products, apps, and tools. Community-driven platform where makers launch and users vote on new products daily.",
    category: "Other",
    url: "https://www.producthunt.com",
    free: true,
    featured: false,
  },
  {
    id: "archive-org",
    name: "Internet Archive",
    description:
      "Non-profit digital library offering free access to millions of books, movies, music, software, and archived websites. Open and free for everyone.",
    category: "Other",
    url: "https://archive.org",
    free: true,
    featured: false,
  },
];
