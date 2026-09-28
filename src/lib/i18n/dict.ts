export type Locale = "en" | "ar";

export type Dict = {
  dir: "ltr" | "rtl";
  nav: { home: string; work: string; services: string; process: string; about: string; contact: string; cta: string; lang_label: string };
  hero: {
    eyebrow: string; name: string; titleLine1: string; titleLine2: string;
    roles: string[]; subtitle: string; primaryCta: string; secondaryCta: string; scrollHint: string;
    stats: { value: string; label: string }[];
  };
  services: {
    title: string; eyebrow: string; subtitle: string;
    items: { id: string; title: string; tagline: string; includes: string[] }[];
    flowLabel: string; flowValue: string;
  };
  works: {
    title: string; eyebrow: string; subtitle: string;
    filters: { all: string; graphic: string; video: string; ai: string; selected: string };
    openCase: string; close: string;
    caseLabels: { brief: string; concept: string; role: string; tools: string; process: string; result: string; aiFlow: string };
    before: string; after: string; swipeHint: string;
    caseFlow: string; aiCaseFlow: string;
    videoBadge: string;
  };
  process: {
    title: string; eyebrow: string; subtitle: string;
    steps: { num: string; title: string; desc: string }[];
    philosophyTitle: string; philosophyQuote: string; philosophyText: string; philosophyPoints: string[];
  };
  about: {
    title: string; eyebrow: string; subtitle: string;
    intro: string[];
    whatDistinguishesTitle: string; whatDistinguishes: string[];
    experienceTitle: string; experienceRole: string; experienceOrg: string; experiencePeriod: string; experiencePoints: string[];
    expertiseTitle: string; expertise: string[];
    skillsTitle: string; skillGroups: { title: string; items: string[] }[];
    otherSkillsTitle: string; otherSkills: string[];
  };
  certificates: {
    title: string; eyebrow: string; subtitle: string;
    items: { name: string; issuer: string }[];
    note: string; clickToReveal: string; verified: string; navHint: string; counterLabel: string;
  };
  testimonials: {
    title: string; eyebrow: string; subtitle: string;
    items: { quote: string; author: string; role: string }[];
  };
  contact: {
    title: string; eyebrow: string; subtitle: string;
    whatsapp: string; email: string; socialTitle: string;
    namePlaceholder: string; emailPlaceholder: string; messagePlaceholder: string;
    send: string; sending: string; successTitle: string; successBody: string;
    directTitle: string; directSubtitle: string; portfolioLabel: string; available: string;
  };
  footer: { rights: string; builtWith: string; quickLinks: string; tagline: string };
  mobileNav: { home: string; work: string; services: string; contact: string };
};

const en: Dict = {
  dir: "ltr",
  nav: {
    home: "Home", services: "Services", work: "Work", process: "Process",
    about: "About", contact: "Contact", cta: "Let's Work Together", lang_label: "العربية",
  },
  hero: {
    eyebrow: "Graphic Designer · Video Editor · AI Content Creator",
    name: "Ali Mershed Mohamad",
    titleLine1: "Graphic Designer",
    titleLine2: "Video Editor · AI Content Creator",
    roles: ["Graphic Design", "Video Editing", "AI Content", "Creative Advertising"],
    subtitle:
      "I create advertising content for products and services — from the initial idea to the final deliverable. I use AI as a tool under my direction, not as a replacement for the designer.",
    primaryCta: "View My Work",
    secondaryCta: "Let's Work Together",
    scrollHint: "Scroll to explore",
    stats: [
      { value: "1,100+", label: "Trainees Mentored" },
      { value: "3", label: "Disciplines" },
      { value: "7", label: "Certifications" },
      { value: "100%", label: "Human Direction" },
    ],
  },
  services: {
    title: "Services",
    eyebrow: "What I Do",
    subtitle: "From idea to final delivery — design, video, and AI-assisted content, all under one direction.",
    items: [
      { id: "graphic", title: "Graphic Design", tagline: "Advertising content for products, services, and brands.", includes: ["Social Media Posts", "Advertising Designs", "Product Ads", "Promotional Designs", "Brochures & Flyers", "Digital Marketing Materials"] },
      { id: "video", title: "Video Editing", tagline: "Editing and directing ads and social videos.", includes: ["Reels", "Promotional Videos", "Product Videos", "Social Videos", "Transitions & VFX", "Color & Sound"] },
      { id: "ai", title: "AI Content Creation", tagline: "Images, videos, and ads built with AI — under my direction.", includes: ["AI Image Generation", "AI Product Photography", "AI Advertising Visuals", "AI Video Creation", "Image-to-Video", "Creative AI Concepts"] },
      { id: "creative-ads", title: "Creative Advertising", tagline: "Developing ad ideas, not using ready-made templates.", includes: ["Ad Idea Development", "Visual Concepts", "Brand-Fit Direction", "Platform-Tailored Output"] },
      { id: "ai-product", title: "AI Product Advertising", tagline: "Turning real products into AI ad scenes — without losing their identity.", includes: ["Product Shape", "Colors & Logo", "Typography & Details", "Visual Identity"] },
    ],
    flowLabel: "Core message",
    flowValue: "Idea → Concept → Direction → Design → AI → Editing → Final Visual",
  },
  works: {
    title: "Selected Work",
    eyebrow: "Work",
    subtitle: "A selection of work that represents where I am now, and the direction I'm building on.",
    filters: { all: "All", graphic: "Graphic Design", video: "Video Editing", ai: "AI Content", selected: "Selected Projects" },
    openCase: "Open Case Study", close: "Close",
    caseLabels: { brief: "Brief", concept: "Concept", role: "My Role", tools: "Tools", process: "Process", result: "Final Result", aiFlow: "AI Flow" },
    before: "Before", after: "After", swipeHint: "Drag to compare",
    caseFlow: "Project → Brief → Concept → My Role → Tools → Process → Final Result",
    aiCaseFlow: "Idea → AI Generation → Direction → Editing → Final Visual",
    videoBadge: "Video",
  },
  process: {
    title: "How I Work", eyebrow: "How I Work",
    subtitle: "Every project goes through these six steps. No shortcuts.",
    steps: [
      { num: "01", title: "Brief", desc: "Understand the product, the goal, the audience, and the platform. Nothing starts before this is clear." },
      { num: "02", title: "Concept", desc: "Develop the idea and the visual direction — what story the brand needs to tell, and how it should feel." },
      { num: "03", title: "Visual Direction", desc: "Define the scene: composition, lighting, angles, color, and the elements that carry the message." },
      { num: "04", title: "Production", desc: "Execute the design, or generate the images and scenes — depending on what the project needs." },
      { num: "05", title: "Editing", desc: "Refine, color, montage, effects, sound — the polish that makes the work land." },
      { num: "06", title: "Final Output", desc: "Deliver the final cut at the right quality and dimensions for the platform it'll live on." },
    ],
    philosophyTitle: "AI Philosophy",
    philosophyQuote: "AI is a creative tool, not the creative process.",
    philosophyText: "AI helps me explore ideas and speed up parts of production. But the real value is still in the idea, the direction, the selection, the editing, and the final call.",
    philosophyPoints: ["The Idea", "Direction", "Selection", "Editing", "Design", "Montage", "Final Output"],
  },
  about: {
    title: "About Ali", eyebrow: "About",
    subtitle: "Graphic Designer · Video Editor · AI Content Creator",
    intro: [
      "I am Ali Mershed Mohamad, from Latakia, Syria. I work as a graphic designer, video editor, and AI content creator.",
      "I design advertising content for products and services — from the idea and concept, through design and direction, to editing and final delivery. I use AI as part of the workflow, but the thinking, the visual direction, the selection, and the final call remain mine.",
      "Alongside content creation, I teach computer fundamentals online. Since February 2026, I have helped approximately 1,100 people learn computer fundamentals.",
    ],
    whatDistinguishesTitle: "What distinguishes my work",
    whatDistinguishes: [
      "I start from the idea, not from the tool.",
      "I build a concept that fits the product or brand.",
      "AI is a tool in my workflow, not a replacement for me.",
      "I preserve product details and visual identity.",
      "I focus on realism, detail, and output quality.",
      "I combine static design, video, and AI in one workflow.",
      "I seek unconventional ad ideas, not ready-made templates.",
      "I make sure the content truly fits social media and digital ads.",
    ],
    experienceTitle: "Experience",
    experienceRole: "Online Trainer — Computer Fundamentals",
    experienceOrg: "Manarat Al-Ilm · Ascent to Peak Academy · Syria Pro Platform",
    experiencePeriod: "February 2026 — Present",
    experiencePoints: [
      "Trained around 1,100 people in computer fundamentals.",
      "ICDL Certified Trainer.",
      "Advanced Microsoft Excel skills.",
      "Data Entry expertise.",
    ],
    expertiseTitle: "Areas of Expertise",
    expertise: ["Graphic Design", "Video Editing", "AI Content Creation", "Creative Advertising", "Social Media Content", "Computer Training", "Microsoft Office", "Microsoft Excel", "Data Entry", "ICDL", "Accounting Software"],
    skillsTitle: "Tools I Use",
    skillGroups: [
      { title: "Design & Editing", items: ["Adobe Photoshop", "Adobe Premiere Pro", "Adobe After Effects", "Canva", "CapCut", "InShot"] },
      { title: "AI Image", items: ["Gemini", "Nano Banana", "Google Flow"] },
      { title: "AI Video", items: ["Kling", "Veo", "Runway", "Pika", "Flash / Omni Flash", "Google Flow"] },
      { title: "AI & Productivity", items: ["Claude", "Manus"] },
      { title: "Voice & Audio", items: ["ElevenLabs", "Lahajati"] },
    ],
    otherSkillsTitle: "Other Skills",
    otherSkills: ["Data Entry", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Al-Ameen Accounting", "File Management", "Digital Archiving", "Computer Skills"],
  },
  certificates: {
    title: "Certificates & Courses", eyebrow: "Certificates",
    subtitle: "Courses and certifications I have completed. Verification links will be added when available.",
    items: [
      { name: "HP LIFE — Business Essentials", issuer: "HP Foundation" },
      { name: "Video Editing", issuer: "Zolaris Organization (Solaris Education)" },
      { name: "Non-Profit Organizations Management", issuer: "Sham Academy for Training and Qualification" },
      { name: "Professional Trainer (TOT)", issuer: "Syrians Positives Absolutely (SPA)" },
      { name: "Data Entry", issuer: "Sham Academy for Training and Qualification" },
      { name: "Computer Skills", issuer: "Syrians Positives Absolutely (SPA)" },
      { name: "The Comprehensive AI Masterclass", issuer: "Ahmad Alkher Learning Platform" },
    ],
    note: "Certificate images and verification links will be added when available.",
    clickToReveal: "Click to view",
    verified: "Verified by issuing organization",
    navHint: "Click outside or press ESC to close · Arrows to navigate",
    counterLabel: "Certificate",
  },
  testimonials: {
    title: "Client Feedback", eyebrow: "Clients",
    subtitle: "Short messages from people I have worked with. More will be added as permissions come in.",
    items: [
      { quote: "Clean work, delivered on time. He understood what I wanted from the first brief.", author: "Anjiko", role: "Product Ad — Anjiko Company" },
      { quote: "Creative ideas that fit our brand perfectly. The AI direction was on point.", author: "Shawarmaty", role: "Social Media — Shawarmaty Brand" },
      { quote: "On time, open to feedback, easy to work with.", author: "Zolaris", role: "Video Editing — Zolaris Organization" },
    ],
  },
  contact: {
    title: "Start Your Project", eyebrow: "Contact",
    subtitle: "Have a product, brand, or campaign in mind? Tell me what you need — I will reply within 24 hours.",
    whatsapp: "WhatsApp", email: "Email", socialTitle: "Find me on",
    namePlaceholder: "Your name", emailPlaceholder: "you@email.com",
    messagePlaceholder: "Tell me about the project, the timeline, and the budget…",
    send: "Send Message", sending: "Sending…",
    successTitle: "Message received", successBody: "Thank you — I will reply within 24 hours.",
    directTitle: "Prefer a direct line?", directSubtitle: "Reach me on WhatsApp or email.",
    portfolioLabel: "Portfolio (Google Drive)", available: "Available for new projects",
  },
  footer: {
    rights: "All rights reserved.", builtWith: "Built with care.",
    quickLinks: "Quick Links",
    tagline: "Graphic designer, video editor, and AI content creator — building advertising content from idea to final cut.",
  },
  mobileNav: { home: "Home", work: "Work", services: "Services", contact: "Contact" },
};

const ar: Dict = {
  dir: "rtl",
  nav: {
    home: "الرئيسية", services: "الخدمات", work: "الأعمال", process: "المنهجية",
    about: "نبذة", contact: "تواصل", cta: "لنعمل معا", lang_label: "English",
  },
  hero: {
    eyebrow: "مصمم جرافيك · محرر فيديو · صانع محتوى باستخدام الذكاء الاصطناعي",
    name: "علي مرشد محمد",
    titleLine1: "مصمم جرافيك",
    titleLine2: "محرر فيديو · صانع محتوى باستخدام الذكاء الاصطناعي",
    roles: ["تصميم جرافيك", "تحرير فيديو", "محتوى ذكاء اصطناعي", "إعلانات إبداعية"],
    subtitle:
      "أصمّم محتوى إعلانيا للمنتجات والخدمات — من الفكرة والتصوّر إلى التصميم والمخرج النهائي. وأستخدم الذكاء الاصطناعي كأداة ضمن عملي، لا بديلا عنّي.",
    primaryCta: "استعرض أعمالي",
    secondaryCta: "لنعمل معا",
    scrollHint: "مرّر للاستكشاف",
    stats: [
      { value: "+1,100", label: "متدرّب" },
      { value: "3", label: "تخصّصات" },
      { value: "7", label: "شهادات" },
      { value: "100%", label: "توجيه بشري" },
    ],
  },
  services: {
    title: "الخدمات", eyebrow: "ماذا أقدّم",
    subtitle: "من الفكرة إلى التسليم النهائي — تصميم، وفيديو، ومحتوى باستخدام الذكاء الاصطناعي، تحت توجيه واحد.",
    items: [
      { id: "graphic", title: "تصميم جرافيك", tagline: "محتوى إعلاني للمنتجات والخدمات والعلامات التجارية.", includes: ["منشورات السوشال ميديا", "تصاميم إعلانية", "إعلانات المنتجات", "تصاميم ترويجية", "بروشورات وفلايرز", "مواد تسويق رقمي"] },
      { id: "video", title: "تحرير فيديو", tagline: "مونتاج وإخراج الإعلانات وفيديوهات السوشال ميديا.", includes: ["Reels", "فيديوهات ترويجية", "فيديوهات منتجات", "فيديوهات سوشال", "انتقالات ومؤثرات", "تصحيح الألوان ومعالجة الصوت"] },
      { id: "ai", title: "صناعة محتوى باستخدام الذكاء الاصطناعي", tagline: "صور وفيديوهات وإعلانات باستخدام الذكاء الاصطناعي — تحت توجيهي.", includes: ["توليد الصور", "تصوير المنتجات", "مرئيات إعلانية", "صناعة فيديو", "صورة إلى فيديو", "مفاهيم إبداعية"] },
      { id: "creative-ads", title: "إعلانات إبداعية", tagline: "تطوير أفكار إعلانية أصيلة، لا قوالب جاهزة.", includes: ["تطوير الفكرة", "مفاهيم بصرية", "توجيه متوافق مع هوية العلامة التجارية الحالية", "إخراج مخصّص للمنصّة"] },
      { id: "ai-product", title: "إعلانات المنتجات باستخدام الذكاء الاصطناعي", tagline: "تحويل المنتجات الحقيقية إلى مشاهد إعلانية مع الحفاظ على هويتها.", includes: ["شكل المنتج", "الألوان والشعار", "النصوص والتفاصيل البصرية", "الهوية البصرية"] },
    ],
    flowLabel: "الفكرة الأساسية",
    flowValue: "فكرة ← مفهوم ← توجيه ← تصميم ← ذكاء اصطناعي ← تحرير ← النتيجة البصرية النهائية",
  },
  works: {
    title: "أعمال مختارة", eyebrow: "الأعمال",
    subtitle: "مختارات تمثّل مستواي الحالي والاتجاه الذي أبني عليه.",
    filters: { all: "الكل", graphic: "تصميم جرافيك", video: "تحرير فيديو", ai: "محتوى ذكاء اصطناعي", selected: "مشاريع مختارة" },
    openCase: "افتح دراسة الحالة", close: "إغلاق",
    caseLabels: { brief: "الموجز", concept: "المفهوم", role: "دوري", tools: "الأدوات", process: "العملية", result: "النتيجة النهائية", aiFlow: "مراحل الذكاء الاصطناعي" },
    before: "قبل", after: "بعد", swipeHint: "اسحب للمقارنة",
    caseFlow: "المشروع ← الموجز ← المفهوم ← دوري ← الأدوات ← العملية ← النتيجة",
    aiCaseFlow: "فكرة ← توليد ← توجيه ← تحرير ← النتيجة البصرية النهائية",
    videoBadge: "فيديو",
  },
  process: {
    title: "كيف أعمل", eyebrow: "كيف أعمل",
    subtitle: "يمرّ كل مشروع بهذه الخطوات الستّ. بلا اختصارات.",
    steps: [
      { num: "01", title: "الموجز (Brief)", desc: "فهم المنتج والهدف والجمهور والمنصّة. لا يبدأ شيء قبل أن تتّضح هذه." },
      { num: "02", title: "المفهوم (Concept)", desc: "تطوير الفكرة والاتجاه البصري — ما القصة التي يجب أن تحكى، وكيف ينبغي أن تحسّ." },
      { num: "03", title: "التوجيه البصري", desc: "تحديد شكل المشهد: التكوين، الإضاءة، الزوايا، اللون، والعناصر الناقلة للرسالة." },
      { num: "04", title: "الإنتاج", desc: "تنفيذ التصميم أو توليد الصور والمشاهد — بحسب ما يتطلّبه المشروع." },
      { num: "05", title: "التحرير", desc: "التنقيح واللون والمونتاج والمؤثرات والصوت — اللمسة التي تجعل العمل يبلغ مراده." },
      { num: "06", title: "الإخراج النهائي", desc: "تسليم النسخة النهائية بالجودة والمقاس المناسبين للمنصّة." },
    ],
    philosophyTitle: "فلسفة الذكاء الاصطناعي",
    philosophyQuote: "الذكاء الاصطناعي أداة إبداعية، لا العملية الإبداعية بذاتها.",
    philosophyText: "يساعدني الذكاء الاصطناعي على استكشاف الأفكار وتسريع مراحل معيّنة من الإنتاج. لكنّ القيمة الحقيقية تبقى في الفكرة، والتوجيه، والاختيار، والتحرير، والقرار النهائي.",
    philosophyPoints: ["الفكرة", "التوجيه", "الاختيار", "التحرير", "التصميم", "المونتاج", "الإخراج"],
  },
  about: {
    title: "نبذة عن علي", eyebrow: "نبذة",
    subtitle: "مصمم جرافيك · محرر فيديو · صانع محتوى باستخدام الذكاء الاصطناعي",
    intro: [
      "أنا علي مرشد محمد، من اللاذقية في سوريا. أعمل مصمّم جرافيك ومحرّر فيديو وصانع محتوى باستخدام الذكاء الاصطناعي.",
      "أصمّم محتوى إعلانيا للمنتجات والخدمات — من الفكرة والمفهوم، مرورا بالتصميم والتوجيه، وصولا إلى المونتاج والتسليم النهائي. وأدمج الذكاء الاصطناعي في سير عملي، غير أنّ التفكير والتوجيه البصري والاختيار والقرار النهائي تبقى لي.",
      "إلى جانب صناعة المحتوى، أدرّس أساسيات الحاسوب عبر الإنترنت. ومنذ شباط 2026، ساعدت نحو 1,100 شخص على تعلّم أساسيات الحاسوب.",
    ],
    whatDistinguishesTitle: "ما الذي يميّز عملي",
    whatDistinguishes: [
      "أبدأ من الفكرة، لا من الأداة.",
      "أبني مفهوما يناسب المنتج أو العلامة.",
      "الذكاء الاصطناعي أداة في عملي، لا بديل عنّي.",
      "أحافظ على تفاصيل المنتج وهويّته البصرية.",
      "أركّز على الواقعية والتفاصيل وجودة الإخراج.",
      "أدمج التصميم الثابت والفيديو والذكاء الاصطناعي في سير عمل واحد.",
      "أبحث عن أفكار إعلانية غير تقليدية، لا عن قوالب جاهزة.",
      "أحرص على أن يكون المحتوى ملائما فعلا للسوشال ميديا والإعلانات الرقمية.",
    ],
    experienceTitle: "الخبرة",
    experienceRole: "مدرّب عبر الإنترنت — أساسيات الحاسوب",
    experienceOrg: "منارة العلم · أكاديمية الصعود إلى الذروة · منصّة سوريا برو",
    experiencePeriod: "شباط 2026 — حتى الآن",
    experiencePoints: [
      "درّبت نحو 1,100 شخص في أساسيات الحاسوب.",
      "مدرّب معتمد في ICDL.",
      "خبرة متقدمة في Microsoft Excel.",
      "خبرة في إدخال البيانات (Data Entry).",
    ],
    expertiseTitle: "مجالات الخبرة",
    expertise: ["تصميم جرافيك", "تحرير فيديو", "صناعة محتوى باستخدام الذكاء الاصطناعي", "إعلانات إبداعية", "محتوى لوسائل التواصل الاجتماعي", "تدريب حاسوبي", "مايكروسوفت أوفيس", "مايكروسوفت Excel", "إدخال بيانات", "ICDL", "برامج محاسبة"],
    skillsTitle: "الأدوات التي أستخدمها",
    skillGroups: [
      { title: "التصميم والتحرير", items: ["Adobe Photoshop", "Adobe Premiere Pro", "Adobe After Effects", "Canva", "CapCut", "InShot"] },
      { title: "صور بالذكاء الاصطناعي", items: ["Gemini", "Nano Banana", "Google Flow"] },
      { title: "فيديو بالذكاء الاصطناعي", items: ["Kling", "Veo", "Runway", "Pika", "Flash / Omni Flash", "Google Flow"] },
      { title: "ذكاء اصطناعي وإنتاجية", items: ["Claude", "Manus"] },
      { title: "صوت وتعليق", items: ["ElevenLabs", "Lahajati"] },
    ],
    otherSkillsTitle: "مهارات أخرى",
    otherSkills: ["إدخال بيانات", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "محاسبة الأمين", "إدارة الملفات", "أرشفة رقمية", "مهارات حاسوبية"],
  },
  certificates: {
    title: "الشهادات والدورات", eyebrow: "الشهادات",
    subtitle: "دورات وشهادات أتممتها. وروابط التحقق ستضاف عند توفّرها.",
    items: [
      { name: "HP LIFE — أساسيات الأعمال", issuer: "HP Foundation" },
      { name: "تحرير الفيديو", issuer: "منظمة زولاريس (Solaris Education)" },
      { name: "إدارة المنظمات غير الربحية", issuer: "أكاديمية الشام للتدريب والتأهيل" },
      { name: "إعداد مدرب محترف (TOT)", issuer: "مؤسسة سوريين إيجابيين بالمطلق (SPA)" },
      { name: "إدخال البيانات", issuer: "أكاديمية الشام للتدريب والتأهيل" },
      { name: "مهارات الحاسوب", issuer: "مؤسسة سوريين إيجابيين بالمطلق (SPA)" },
      { name: "الدورة الشاملة في الذكاء الاصطناعي", issuer: "منصة أحمد الخير التعليمية" },
    ],
    note: "ستضاف صور الشهادات وروابط التحقق عند توفّرها.",
    clickToReveal: "اضغط للعرض",
    verified: "موثّقة من الجهة المانحة",
    navHint: "اضغط خارج الصورة أو اضغط ESC للإغلاق · الأسهم للتنقّل",
    counterLabel: "شهادة",
  },
  testimonials: {
    title: "آراء العملاء", eyebrow: "العملاء",
    subtitle: "رسائل قصيرة من أشخاص عملت معهم. وستضاف آراء أخرى عند الاستئذان.",
    items: [
      { quote: "عمل نظيف، وسلّم في موعده. وقد فهم المطلوب من أوّل موجز.", author: "أنجيكو", role: "إعلان منتج — شركة أنجيكو" },
      { quote: "أفكار إبداعية ناسبت علامتنا تماما. والتوجيه بالذكاء الاصطناعي كان دقيقا.", author: "شاورماتي", role: "سوشال ميديا — علامة شاورماتي" },
      { quote: "في الوقت المحدّد، ويقبل الملاحظات، وسهل في التعامل.", author: "زولاريس", role: "مونتاج فيديوهات — منظمة زولاريس" },
    ],
  },
  contact: {
    title: "ابدأ مشروعك", eyebrow: "تواصل",
    subtitle: "لديك منتج أو علامة أو حملة في ذهنك؟ أخبرني بما تحتاج — وسأردّ خلال 24 ساعة.",
    whatsapp: "واتساب", email: "البريد الإلكتروني", socialTitle: "تلقاني على",
    namePlaceholder: "اسمك", emailPlaceholder: "you@email.com",
    messagePlaceholder: "أخبرني عن المشروع والجدول الزمني والميزانية…",
    send: "إرسال الرسالة", sending: "جار الإرسال…",
    successTitle: "تمّ استلام الرسالة", successBody: "شكرا لك — سأردّ خلال 24 ساعة.",
    directTitle: "تفضّل التواصل المباشر؟", directSubtitle: "تواصل معي على واتساب أو البريد.",
    portfolioLabel: "معرض الأعمال (Google Drive)", available: "متاح لمشاريع جديدة",
  },
  footer: {
    rights: "جميع الحقوق محفوظة.", builtWith: "صنع بعناية.",
    quickLinks: "روابط سريعة",
    tagline: "مصمّم جرافيك ومحرّر فيديو وصانع محتوى باستخدام الذكاء الاصطناعي — أبني محتوى إعلانيا من الفكرة إلى القصة النهائية.",
  },
  mobileNav: { home: "الرئيسية", work: "الأعمال", services: "الخدمات", contact: "تواصل" },
};

export const dictionaries: Record<Locale, Dict> = { en, ar };
