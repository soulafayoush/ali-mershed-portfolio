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
    educationTitle: string; education: { degree: string; year: string; source: string }[];
    languagesTitle: string; languages: { name: string; level: string }[];
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
    home: "Home", work: "Work", services: "Services", process: "Process",
    about: "About", contact: "Contact", cta: "Let's Work Together", lang_label: "العربية",
  },
  hero: {
    eyebrow: "Graphic Designer · Video Editor · AI Content Creator",
    name: "Ali Mershed Mohamad",
    titleLine1: "Graphic Designer",
    titleLine2: "Video Editor · AI Content Creator",
    roles: ["Graphic Design", "Video Editing", "AI Content", "Creative Advertising"],
    subtitle:
      "I design advertising content for products and services — from the idea, to the design, to the final cut. I use AI as a tool under my direction, not as a replacement for the designer.",
    primaryCta: "View My Work",
    secondaryCta: "Let's Work Together",
    scrollHint: "Scroll to explore",
    stats: [
      { value: "1,100+", label: "Trainees Mentored" },
      { value: "3", label: "Disciplines" },
      { value: "10+", label: "Certifications" },
      { value: "100%", label: "Human Direction" },
    ],
  },
  services: {
    title: "Services",
    eyebrow: "What I Do",
    subtitle:
      "From idea to final delivery — design, video, and AI-assisted content, all under one direction.",
    items: [
      {
        id: "graphic", title: "Graphic Design",
        tagline: "Advertising content for products, services, and brands.",
        includes: ["Social Media Posts", "Advertising Designs", "Product Ads", "Promotional Designs", "Brochures & Flyers", "Digital Marketing Materials"],
      },
      {
        id: "video", title: "Video Editing",
        tagline: "Editing and directing ads and social videos.",
        includes: ["Reels", "Promotional Videos", "Product Videos", "Social Videos", "Transitions & VFX", "Color & Sound"],
      },
      {
        id: "ai", title: "AI Content Creation",
        tagline: "Images, videos, and ads built with AI — under my direction.",
        includes: ["AI Image Generation", "AI Product Photography", "AI Advertising Visuals", "AI Video Creation", "Image-to-Video", "Creative AI Concepts"],
      },
      {
        id: "creative-ads", title: "Creative Advertising",
        tagline: "Developing ad ideas, not using ready-made templates.",
        includes: ["Ad Idea Development", "Visual Concepts", "Brand-Fit Direction", "Platform-Tailored Output"],
      },
      {
        id: "ai-product", title: "AI Product Advertising",
        tagline: "Turning real products into AI ad scenes — without losing their identity.",
        includes: ["Product Shape", "Colors & Logo", "Typography & Details", "Visual Identity"],
      },
    ],
    flowLabel: "Core message",
    flowValue: "Idea → Concept → Direction → Design → AI → Editing → Final Visual",
  },
  works: {
    title: "Selected Work",
    eyebrow: "Work",
    subtitle:
      "A selection of work that represents where I am now, and the direction I'm building on.",
    filters: {
      all: "All", graphic: "Graphic Design", video: "Video Editing", ai: "AI Content", selected: "Selected Projects",
    },
    openCase: "Open Case Study",
    close: "Close",
    caseLabels: {
      brief: "Brief", concept: "Concept", role: "My Role", tools: "Tools", process: "Process", result: "Final Result", aiFlow: "AI Flow",
    },
    before: "Before", after: "After", swipeHint: "Drag to compare",
    caseFlow: "Project → Brief → Concept → My Role → Tools → Process → Final Result",
    aiCaseFlow: "Idea → AI Generation → Direction → Editing → Final Visual",
    videoBadge: "Video",
  },
  process: {
    title: "My Process",
    eyebrow: "How I Work",
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
    philosophyText:
      "AI helps me explore ideas and speed up parts of production. But the real value is still in the idea, the direction, the selection, the editing, and the final call.",
    philosophyPoints: ["The Idea", "Direction", "Selection", "Editing", "Design", "Montage", "Final Output"],
  },
  about: {
    title: "About Ali",
    eyebrow: "About",
    subtitle: "Graphic Designer · Video Editor · AI Content Creator",
    intro: [
      "I'm Ali Mershed Mohamad, from Damascus. I work as a graphic designer, video editor, and AI content creator.",
      "I design advertising content for products and services — from the idea and concept, through design and direction, to editing and final delivery. I use AI as part of the workflow, but the thinking, the visual direction, the selection, and the final call stay mine.",
      "Alongside content work, I teach computer fundamentals online. Since February 2026 I've trained around 1,100 trainees.",
    ],
    whatDistinguishesTitle: "What distinguishes my work",
    whatDistinguishes: [
      "I don't start from the tool — I start from the idea.",
      "I build a concept that fits the product or brand.",
      "AI is a tool in my workflow, not a replacement for me.",
      "I keep product details and visual identity intact.",
      "I focus on realism, detail, and output quality.",
      "I combine static design, video, and AI in one workflow.",
      "I look for unconventional ad ideas, not ready-made templates.",
      "I make sure the content actually fits social media and digital ads.",
    ],
    experienceTitle: "Experience",
    experienceRole: "Online Trainer — Computer Fundamentals",
    experienceOrg: "Manarat Al-Ilm · Ascent to Peak Academy · Syria Pro Platform",
    experiencePeriod: "Feb 2026 — Present",
    experiencePoints: [
      "Trained around 1,100 trainees in computer fundamentals.",
      "Helped learners understand computer hardware and how to use it.",
    ],
    expertiseTitle: "Areas of Expertise",
    expertise: ["Graphic Design", "Video Editing", "AI Content Creation", "Creative Advertising", "Social Media Content", "Computer Training", "Microsoft Office", "Data Entry", "Accounting Software"],
    educationTitle: "Education",
    education: [{ degree: "General Secondary Education", year: "Graduated 2016", source: "Directorate of Education — Damascus Governorate" }],
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Good" },
    ],
    skillsTitle: "Tools, by function",
    skillGroups: [
      { title: "Design & Editing", items: ["Adobe Photoshop", "Adobe Premiere Pro", "Adobe After Effects", "Canva", "CapCut", "InShot"] },
      { title: "AI Image", items: ["Gemini", "Nano Banana", "Google Flow"] },
      { title: "AI Video", items: ["Kling", "Veo", "Runway", "Pika", "Flash / Omni Flash", "Google Flow"] },
      { title: "AI & Productivity", items: ["Claude", "Manus"] },
      { title: "Voice & Audio", items: ["ElevenLabs", "Lahajati / لهجاتي"] },
    ],
    otherSkillsTitle: "Other Skills",
    otherSkills: ["Data Entry", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Al-Ameen Accounting", "File Management", "Digital Archiving", "Computer Skills"],
  },
  certificates: {
    title: "Certificates & Courses",
    eyebrow: "Certificates",
    subtitle: "Courses and certifications I've completed. Verification links will be added when available.",
    items: [
      { name: "ICDL", issuer: "Syrians Positives Absolutely (SPA)" },
      { name: "Al-Ameen Accounting", issuer: "SPA" },
      { name: "Professional Trainer TOT", issuer: "SPA" },
      { name: "Data Entry", issuer: "Sham Academy for Training and Qualification" },
      { name: "Non-Profit Organizations Management", issuer: "Sham Academy" },
      { name: "Video Editing", issuer: "Zawalis Organization" },
      { name: "Canva Design", issuer: "Zawalis Organization" },
      { name: "Database", issuer: "Zawalis Organization" },
      { name: "Professional Trainer TOT", issuer: "Zawalis Organization" },
      { name: "AI Digital Content Creator", issuer: "Certified Course" },
    ],
    note: "Certificate images and verification links will be added when available.",
    clickToReveal: "Click to view",
    verified: "Verified by issuing organization",
    navHint: "Click outside or ESC to close · Arrows to navigate",
    counterLabel: "Certificate",
  },
  testimonials: {
    title: "Client Feedback",
    eyebrow: "Clients",
    subtitle: "Short messages from people I've worked with. More will be added as permissions come in.",
    items: [
      { quote: "Clean work, delivered on time. He got what I wanted from the first brief.", author: "Client", role: "Social Media Design" },
      { quote: "Built me an ad that beat what I had in mind.", author: "Client", role: "Product Ad" },
      { quote: "On time, open to feedback, easy to work with.", author: "Client", role: "Video Editing" },
    ],
  },
  contact: {
    title: "Start Your Project",
    eyebrow: "Contact",
    subtitle: "Have a product, brand, or campaign in mind? Tell me what you're after — I'll reply within 24 hours.",
    whatsapp: "WhatsApp",
    email: "Email",
    socialTitle: "Find me on",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Tell me about the project, the timeline, and the budget…",
    send: "Send Message",
    sending: "Sending…",
    successTitle: "Message received",
    successBody: "Thank you — I'll reply within 24 hours.",
    directTitle: "Prefer a direct line?",
    directSubtitle: "Reach me on WhatsApp or email.",
    portfolioLabel: "Portfolio (Google Drive)",
    available: "Available for new projects",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with care.",
    quickLinks: "Quick Links",
    tagline:
      "Graphic designer, video editor, and AI content creator — building advertising content from idea to final cut.",
  },
  mobileNav: { home: "Home", work: "Work", services: "Services", contact: "Contact" },
};

const ar: Dict = {
  dir: "rtl",
  nav: {
    home: "الرئيسية", work: "الأعمال", services: "الخدمات", process: "المنهجية",
    about: "نبذة", contact: "تواصل", cta: "لنعمل معاً", lang_label: "English",
  },
  hero: {
    eyebrow: "مصمم جرافيك · مونتير فيديو · صانع محتوى بالذكاء الاصطناعي",
    name: "علي مرشد محمد",
    titleLine1: "مصمم جرافيك",
    titleLine2: "مونتير فيديو · صانع محتوى بالذكاء الاصطناعي",
    roles: ["تصميم جرافيك", "تحرير فيديو", "محتوى بالذكاء الاصطناعي", "إعلانات إبداعية"],
    subtitle:
      "بصمم محتوى إعلاني للمنتجات والخدمات — من الفكرة، للتصميم، للقصّة النهائية. بستخدم الذكاء الاصطناعي كأداة بتوجيهي، مو بديل عني.",
    primaryCta: "استعرض أعمالي",
    secondaryCta: "لنعمل معاً",
    scrollHint: "مرّر للاستكشاف",
    stats: [
      { value: "+1,100", label: "متدرب تم تدريبه" },
      { value: "3", label: "تخصصات" },
      { value: "+10", label: "شهادات ودورات" },
      { value: "100%", label: "إخراج بشري" },
    ],
  },
  services: {
    title: "الخدمات",
    eyebrow: "ماذا أقدّم",
    subtitle: "من الفكرة للإخراج النهائي — تصميم، فيديو، ومحتوى بالذكاء الاصطناعي، تحت توجيه واحد.",
    items: [
      {
        id: "graphic", title: "تصميم جرافيك",
        tagline: "محتوى إعلاني للمنتجات والخدمات والبراندات.",
        includes: ["منشورات سوشال ميديا", "تصاميم إعلانية", "إعلانات منتجات", "تصاميم ترويجية", "بروشورات وفلايرز", "مواد تسويق رقمي"],
      },
      {
        id: "video", title: "تحرير فيديو",
        tagline: "مونتاج وإخراج إعلانات وفيديوهات سوشال.",
        includes: ["Reels", "فيديوهات ترويجية", "فيديوهات منتجات", "فيديوهات سوشال", "انتقالات ومؤثرات", "لون وصوت"],
      },
      {
        id: "ai", title: "صناعة محتوى بالذكاء الاصطناعي",
        tagline: "صور وفيديوهات وإعلانات بالذكاء الاصطناعي — بتوجيهي.",
        includes: ["توليد الصور", "تصوير المنتجات", "مرئيات إعلانية", "صناعة فيديو", "صورة إلى فيديو", "مفاهيم إبداعية"],
      },
      {
        id: "creative-ads", title: "إعلانات إبداعية",
        tagline: "تطوير أفكار إعلانية، مو قوالب جاهزة.",
        includes: ["تطوير الفكرة", "مفاهيم بصرية", "توجيه مناسب للعلامة", "إخراج مخصّص للمنصة"],
      },
      {
        id: "ai-product", title: "إعلانات المنتجات بالذكاء الاصطناعي",
        tagline: "تحويل المنتجات لمشاهد إعلانية — مع الحفاظ على هويتها.",
        includes: ["شكل المنتج", "الألوان والشعار", "الكتابة والتفاصيل", "الهوية البصرية"],
      },
    ],
    flowLabel: "الفكرة الأساسية",
    flowValue: "فكرة ← مفهوم ← توجيه ← تصميم ← ذكاء اصطناعي ← تحرير ← مرئي نهائي",
  },
  works: {
    title: "أعمال مختارة",
    eyebrow: "الأعمال",
    subtitle: "مختارات تمثّل مستواي الحالي والاتجاه اللي ببني عليه.",
    filters: {
      all: "الكل", graphic: "تصميم جرافيك", video: "تحرير فيديو", ai: "محتوى بالذكاء الاصطناعي", selected: "مشاريع مختارة",
    },
    openCase: "افتح دراسة الحالة",
    close: "إغلاق",
    caseLabels: { brief: "الموجز", concept: "المفهوم", role: "دوري", tools: "الأدوات", process: "العملية", result: "النتيجة النهائية", aiFlow: "تدفّق الذكاء الاصطناعي" },
    before: "قبل", after: "بعد", swipeHint: "اسحب للمقارنة",
    caseFlow: "المشروع ← الموجز ← المفهوم ← دوري ← الأدوات ← العملية ← النتيجة",
    aiCaseFlow: "فكرة ← توليد ← توجيه ← تحرير ← مرئي نهائي",
    videoBadge: "فيديو",
  },
  process: {
    title: "كيف أعمل",
    eyebrow: "طريقتي",
    subtitle: "كل مشروع بيمر بهاذي الخطوات الستة. بلا اختصارات.",
    steps: [
      { num: "01", title: "الموجز (Brief)", desc: "فهم المنتج، الهدف، الجمهور، والمنصة. ما ببلش شي قبل ما هاد يكون واضح." },
      { num: "02", title: "المفهوم (Concept)", desc: "تطوير الفكرة والاتجاه البصري — شو القصة اللي لازم تُحكى وكيف لازم تحسّ." },
      { num: "03", title: "التوجيه البصري", desc: "تحديد شكل المشهد: التكوين، الإضاءة، الزوايا، اللون، والعناصر اللي بتحمل الرسالة." },
      { num: "04", title: "الإنتاج", desc: "تنفيذ التصميم أو توليد الصور والمشاهد — حسب ما بيتطلب المشروع." },
      { num: "05", title: "التحرير", desc: "تنقيح، لون، مونتاج، مؤثرات، صوت — اللمسة اللي بتخلّي الشغل يهبط بسلام." },
      { num: "06", title: "الإخراج النهائي", desc: "تسليم النسخة النهائية بالجودة والمقاس المناسبين للمنصة." },
    ],
    philosophyTitle: "فلسفة الذكاء الاصطناعي",
    philosophyQuote: "الذكاء الاصطناعي أداة إبداعية، مو العملية الإبداعية.",
    philosophyText:
      "الذكاء الاصطناعي بيساعدني استكشف أفكار وبسرّع مراحل معينة من الإنتاج. لكن القيمة الأساسية لسا بالفكرة، التوجيه، الاختيار، التحرير، والقرار النهائي.",
    philosophyPoints: ["الفكرة", "التوجيه", "الاختيار", "التحرير", "التصميم", "المونتاج", "الإخراج"],
  },
  about: {
    title: "نبذة عن علي",
    eyebrow: "نبذة",
    subtitle: "مصمم جرافيك · مونتير فيديو · صانع محتوى بالذكاء الاصطناعي",
    intro: [
      "أنا علي مرشد محمد، من دمشق. بشتغل مصمم جرافيك ومونتير فيديو وصانع محتوى بالذكاء الاصطناعي.",
      "بصمم محتوى إعلاني للمنتجات والخدمات — من الفكرة والمفهوم، للتصميم والتوجيه، للمونتاج والإخراج النهائي. بستخدم الذكاء الاصطناعي كأداة بسير العمل، لكن التفكير، التوجيه البصري، الاختيار، والقرار النهائي قراراي.",
      "غير التصميم، بدرّس أساسيات الحاسوب أونلاين. من شباط 2026 درّبت حوالي 1100 متدرب لحدّ هلق.",
    ],
    whatDistinguishesTitle: "شو بيميّز طريقة عملي",
    whatDistinguishes: [
      "ما ببلش من الأداة، ببلش من الفكرة.",
      "ببني مفهوم يناسب المنتج أو البراند.",
      "الذكاء الاصطناعي أداة بسير العمل، مو بديل عني.",
      "بحافظ على تفاصيل المنتج والهوية البصرية.",
      "بركّز على الواقعية والتفاصيل وجودة الإخراج.",
      "بدمج التصميم الثابت والفيديو والذكاء الاصطناعي بسير عمل واحد.",
      "بدوّر على أفكار إعلانية مو تقليدية، مو قوالب جاهزة.",
      "بخلي المحتوى مناسب فعلياً للسوشال ميديا والإعلانات الرقمية.",
    ],
    experienceTitle: "الخبرة",
    experienceRole: "مدرب أونلاين — أساسيات الحاسوب",
    experienceOrg: "منارة العلم · أكاديمية الصعود إلى الذروة · منصة سوريا برو",
    experiencePeriod: "شباط 2026 — حتى الآن",
    experiencePoints: [
      "دربت حوالي 1100 متدرب بأساسيات الحاسوب.",
      "ساعدت المتدربين يفهموا أقسام الحاسوب وطريقة استخدامه.",
    ],
    expertiseTitle: "مجالات الخبرة",
    expertise: ["تصميم جرافيك", "تحرير فيديو", "صناعة محتوى بالذكاء الاصطناعي", "إعلانات إبداعية", "محتوى السوشال ميديا", "تدريب حاسوبي", "مايكروسوفت أوفيس", "إدخال بيانات", "برامج محاسبة"],
    educationTitle: "التعليم",
    education: [{ degree: "الثانوية العامة", year: "تخرجت 2016", source: "مديرية التربية بمحافظة دمشق" }],
    languagesTitle: "اللغات",
    languages: [
      { name: "العربية", level: "لغة أم" },
      { name: "الإنجليزية", level: "جيد" },
    ],
    skillsTitle: "الأدوات، حسب الوظيفة",
    skillGroups: [
      { title: "التصميم والتحرير", items: ["Adobe Photoshop", "Adobe Premiere Pro", "Adobe After Effects", "Canva", "CapCut", "InShot"] },
      { title: "صور بالذكاء الاصطناعي", items: ["Gemini", "Nano Banana", "Google Flow"] },
      { title: "فيديو بالذكاء الاصطناعي", items: ["Kling", "Veo", "Runway", "Pika", "Flash / Omni Flash", "Google Flow"] },
      { title: "ذكاء اصطناعي وإنتاجية", items: ["Claude", "Manus"] },
      { title: "صوت وتعليق", items: ["ElevenLabs", "Lahajati / لهجاتي"] },
    ],
    otherSkillsTitle: "مهارات أخرى",
    otherSkills: ["إدخال بيانات", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "محاسبة الأمين", "إدارة الملفات", "أرشفة رقمية", "مهارات حاسوبية"],
  },
  certificates: {
    title: "الشهادات والدورات",
    eyebrow: "الشهادات",
    subtitle: "دورات وشهادات أتممتها. روابط التحقق رح تتنضاف لما تتوفّر.",
    items: [
      { name: "ICDL", issuer: "مؤسسة سوريين إيجابيين بالمطلق SPA" },
      { name: "محاسبة الأمين", issuer: "SPA" },
      { name: "إعداد مدرب محترف TOT", issuer: "SPA" },
      { name: "إدخال بيانات", issuer: "أكاديمية الشام للتدريب والتأهيل" },
      { name: "إدارة المنظمات غير الربحية", issuer: "أكاديمية الشام" },
      { name: "تحرير فيديو", issuer: "منظمة زوالريس" },
      { name: "تصميم Canva", issuer: "منظمة زوالريس" },
      { name: "قواعد بيانات", issuer: "منظمة زوالريس" },
      { name: "إعداد مدرب محترف TOT", issuer: "منظمة زوالريس" },
      { name: "AI Digital Content Creator", issuer: "دورة معتمدة" },
    ],
    note: "صور الشهادات وروابط التحقق رح تتنضاف لما تتوفّر.",
    clickToReveal: "اضغط للعرض",
    verified: "موثّقة من الجهة المانحة",
    navHint: "اضغط خارج الصورة أو ESC للإغلاق · الأسهم للتنقل",
    counterLabel: "شهادة",
  },
  testimonials: {
    title: "آراء العملاء",
    eyebrow: "العملاء",
    subtitle: "رسائل قصيرة من ناس اشتغلت معهم. رح تتنضاف آراء أكثر مع الاستئذان.",
    items: [
      { quote: "شغل نظيف، سلّم بالموعد. فهم المطلوب من أول موجز.", author: "عميل", role: "تصميم سوشال ميديا" },
      { quote: "صمّملي إعلان، النتيجة فاقت اللي ببالي.", author: "عميل", role: "إعلان منتج" },
      { quote: "بالوقت، بيقبل الملاحظات، سهل بالتعامل.", author: "عميل", role: "مونتاج فيديو" },
    ],
  },
  contact: {
    title: "ابدأ مشروعك",
    eyebrow: "تواصل",
    subtitle: "عندك منتج أو براند أو حملة باله؟ أخبرني شو بدّك — بردّ عليك خلال 24 ساعة.",
    whatsapp: "واتساب",
    email: "بريد إلكتروني",
    socialTitle: "تلاقيني على",
    namePlaceholder: "اسمك",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "أخبرني عن المشروع، الجدول الزمني، والميزانية…",
    send: "إرسال الرسالة",
    sending: "جارٍ الإرسال…",
    successTitle: "تم استلام الرسالة",
    successBody: "شكراً لك — رح ردّ عليك خلال 24 ساعة.",
    directTitle: "تفضّل التواصل المباشر؟",
    directSubtitle: "تواصل معي على واتساب أو البريد.",
    portfolioLabel: "معرض الأعمال (Google Drive)",
    available: "متاح لمشاريع جديدة",
  },
  footer: {
    rights: "جميع الحقوق محفوظة.",
    builtWith: "صُنع بعناية.",
    quickLinks: "روابط سريعة",
    tagline: "مصمم جرافيك ومونتير فيديو وصانع محتوى بالذكاء الاصطناعي — ببني محتوى إعلاني من الفكرة للقصّة النهائية.",
  },
  mobileNav: { home: "الرئيسية", work: "الأعمال", services: "الخدمات", contact: "تواصل" },
};

export const dictionaries: Record<Locale, Dict> = { en, ar };
