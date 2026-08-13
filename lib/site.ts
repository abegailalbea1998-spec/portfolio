/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit everything in this one file.
 *  Populated from Abegail's CV and her Canva portfolio.
 *  Photos / video are wired up in the components marked
 *  with "PLACEHOLDER".
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Abegail",
  legalName: "Abegail Albea",
  fullName: "Abegail Albea — Filipina Virtual Assistant",
  role: "Filipina Virtual Assistant",
  location: "Camalig, Albay, Philippines",
  timezone: "Open to clients across time zones",
  email: "abegailalbea97@gmail.com",
  phone: "0915-021-0143",
  phoneHref: "tel:+639150210143",
  calendarUrl: "#contact", // ← replace with Calendly / booking link if she has one
  resumeUrl: "/Abegail-Albea-CV.pdf",
  /** Loom video introduction (~90 seconds, 4:3) */
  videoEmbedUrl: "https://www.loom.com/embed/4b3e5769a1b14b859f1beb9fb166f2c0",

  portrait: {
    src: "/images/abegail-portrait.png",
    alt: "Portrait of Abegail Albea, virtual assistant",
  },

  availability: "Available for new clients",

  headline: {
    line1: "Your trusted",
    accent: "Filipina VA.", // rendered in italic serif
  },

  subheadline:
    "I'm a detail-oriented virtual assistant with over three years of leadership and administrative experience as an Assistant Branch Manager. I combine disciplined operations with AI-powered workflows to run your admin faster and better.",

  stats: [
    { value: "3+", label: "Years of leadership & admin experience" },
    { value: "9", label: "Services offered end-to-end" },
    { value: "15+", label: "Tools & AI platforms used daily" },
  ],

  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abegail-albea-5486121b8",
    },
  ],
};

export const tools = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "Midjourney",
  "Google Docs",
  "Google Sheets",
  "Google Drive",
  "Google Calendar",
  "Google Meet",
  "Microsoft Excel",
  "Microsoft Word",
  "PowerPoint",
  "Zoom",
  "Canva",
  "Trello",
  "Gmail",
];

/** AI platforms + what she uses each for (About section chips). */
export const aiSkills = [
  { name: "Claude", use: "long-form drafting & analysis" },
  { name: "ChatGPT", use: "content, replies & automation" },
  { name: "Gemini", use: "research & data work" },
  { name: "Midjourney", use: "advanced image generation" },
];

/** Portfolio pieces shown in the Work section. */
export const workSamples = [
  {
    src: "/images/work-email-management.png",
    width: 1536,
    height: 1024,
    title: "Email Management Workflow",
    caption:
      "A real inbox system — priority labels, a five-step management workflow, and warm, professional client replies.",
    tools: "Gmail · Google Workspace",
  },
  {
    src: "/images/work-social-media.png",
    width: 1402,
    height: 1122,
    title: "Social Media Sample Content",
    caption:
      "Content strategy for a café client — post designs, content pillars, captions and community engagement.",
    tools: "Canva · Meta Business Suite",
  },
];

export const services = [
  {
    index: "01",
    title: "Email & Calendar",
    description:
      "Organized calendars, scheduled appointments, coordinated meetings and a managed inbox — timely communication, efficient scheduling, and improved productivity.",
    icon: "Inbox",
  },
  {
    index: "02",
    title: "Social Media Management",
    description:
      "A professional, consistent online presence through content planning, post scheduling, graphic design, community engagement and performance monitoring.",
    icon: "Megaphone",
  },
  {
    index: "03",
    title: "Data & Financial Records",
    description:
      "Accurate data entry, spreadsheet management, financial record keeping and report preparation — clean, confidential records that keep operations smooth.",
    icon: "Database",
  },
  {
    index: "04",
    title: "Customer Support",
    description:
      "Warm, professional responses to customers and clients — enquiries handled promptly so people feel looked after and nothing slips through.",
    icon: "HeartHandshake",
  },
  {
    index: "05",
    title: "Research & Travel Planning",
    description:
      "Internet research, comparisons and summaries you can act on — plus travel plans booked, itineraries organized, and details double-checked.",
    icon: "Globe",
  },
  {
    index: "06",
    title: "AI Design & Content",
    description:
      "On-brand Canva graphics elevated with advanced AI image generation in Midjourney, and copy drafted with Claude, ChatGPT and Gemini — agency-grade output at VA speed.",
    icon: "Sparkles",
  },
];

export const experience = [
  {
    role: "Assistant Branch Manager",
    company: "M Lhuillier Pawnshop, Philippines",
    period: "Apr 2023 — Jun 2026",
    description:
      "Managed daily branch operations and compliance — supervising personnel, processing financial transactions with strict confidentiality, and preparing daily, weekly and monthly operational and financial reports.",
  },
  {
    role: "Contact Tracer",
    company: "Department of the Interior & Local Government (DILG)",
    period: "Mar 2020 — Nov 2020",
    description:
      "Conducted COVID-19 contact-tracing interviews, maintained confidential records and databases, and coordinated with local government and health agencies on accurate, on-time reporting.",
  },
  {
    role: "Statistical Researcher",
    company: "Philippine Statistics Authority (PSA)",
    period: "Jul 2019 — Dec 2019",
    description:
      "Collected, verified and encoded statistical survey data in the field, organized survey documents, and helped prepare reports to PSA confidentiality standards.",
  },
];

export const education = {
  degree: "Bachelor of Science in Forestry",
  school: "Bicol University",
  year: "2018",
};

export const processSteps = [
  {
    index: "01",
    title: "Discovery call",
    description:
      "A relaxed 30-minute chat about your business, your bottlenecks, and what a great week would look like if the busywork disappeared.",
  },
  {
    index: "02",
    title: "Onboarding week",
    description:
      "I learn your tools, your voice, and your preferences — then document everything so support is seamless from day one.",
  },
  {
    index: "03",
    title: "Delegate & breathe",
    description:
      "You hand things off, I keep you posted with clear weekly updates, and your to-do list finally gets shorter instead of longer.",
  },
];

export const testimonials = [
  {
    quote:
      "Within a month she had my inbox at zero, my calendar under control, and my Mondays back. I genuinely don't know how I ran the business without her.",
    author: "Client Name", // ← replace with real testimonial
    role: "Founder, Company",
  },
  {
    quote:
      "Detail-oriented doesn't even cover it. Every task comes back finished, checked, and better than I asked for — usually early.",
    author: "Client Name",
    role: "CEO, Company",
  },
  {
    quote:
      "She's proactive in a way I've never seen in a VA. Problems get solved before I even know they exist.",
    author: "Client Name",
    role: "Director, Company",
  },
];
