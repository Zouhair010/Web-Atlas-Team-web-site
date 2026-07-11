
const data = {
    
navLinks :{
  ar: {
    about: "من نحن؟",
    services: "خدماتنا",
    skills: "التقنيات",
    projects: "مشاريعنا",
    contact: "اتصل بنا"
  },
  fr: {
    about: "À propos",
    services: "Nos services",
    skills: "Compétences",
    projects: "Nos projets",
    contact: "Contactez-nous"
  },
  en: {
    about: "About Us",
    services: "Our Services",
    skills: "Technologies",
    projects: "Our Projects",
    contact: "Contact Us"
  }
}
,
heroContent :{
  ar: {
    brand: "ويب أطلس",
    title: "نصنع مواقع إلكترونية بـ",
    titleHighlight: "معايير عالمية.",
    description: "مرحباً بكم في ويب أطلس. نحن متخصصون في هندسة المواقع وتطبيقات الويب والأنظمة الخلفية من الصفر — نجمع بين الدقة الخوارزمية والتصميم الرقمي الحديث لمنح مشروعك أقوى حضور على الإنترنت.",
    cta: "تصفح المشاريع و ابدأ مشروعك الآن",
    stats: [
      { label: "مشاريع تم تسليمها +10" },
      { label: "بيئات برمجية متكاملة +4" },
      { label: "تركيز كامل على العميل %100" }
    ]
  },
  fr: {
    brand: "WebAtlas",
    title: "Nous créons des sites web aux",
    titleHighlight: "standards mondiaux.",
    description: "Bienvenue chez WebAtlas. Nous sommes spécialisés dans l'ingénierie de sites web, d'applications web et de systèmes backend de zéro — nous allions précision algorithmique et design numérique moderne pour offrir à votre projet la meilleure présence en ligne.",
    cta: "Parcourir les projets et lancer le vôtre",
    stats: [
      { label: "Projets livrés +10" },
      { label: "Environnements intégrés +4" },
      { label: "Focus client total 100%" }
    ]
  },
  en: {
    brand: "WebAtlas",
    title: "We craft websites with",
    titleHighlight: "global standards.",
    description: "Welcome to WebAtlas. We specialize in engineering websites, web applications, and backend systems from scratch — combining algorithmic precision with modern digital design to give your project the strongest online presence.",
    cta: "Browse projects and start yours now",
    stats: [
      { label: "Projects delivered +10" },
      { label: "Integrated environments +4" },
      { label: "Full client focus 100%" }
    ]
  }
}
,
servicesContent: {
    ar: {
      badge: "ماذا نقدم",
      title: "خدماتنا الاحترافية",
      description: "حلول رقمية متكاملة، من الفكرة إلى الإطلاق الفعلي — مبنية بدقة وعناية لتضمن الاستدامة.",
      servicesList: [
        { icon: "🌐", title: "تطوير المواقع الإلكترونية", description: "مواقع ومنصات مخصصة مبنية من الصفر — سريعة، متجاوبة، ومتوافقة مع معايير السيو.", tags: ["React", "Node.js"] },
        { icon: "📱", title: "تطبيقات الهواتف الذكية", description: "تطوير تطبيقات أندرويد أصلية (Native) بواجهات مستخدم أنيقة وأداء عالي.", tags: ["Android", "Kotlin"] },
        { icon: "⚙️", title: "الأنظمة الخلفية والـ APIs", description: "بناء المنطق البرمجي للسيرفرات، هندسة قواعد البيانات، وتطوير الـ APIs.", tags: ["C#", ".NET"] },
        { icon: "🎨", title: "تصميم واجهات المستخدم UI/UX", description: "تصميم واجهات حديثة واحترافية تحول الزوار إلى عملاء.", tags: ["Figma", "Design"] }
      ]
    },
    fr: {
      badge: "Nos services",
      title: "Nos services professionnels",
      description: "Solutions numériques complètes, de l'idée au lancement effectif — construites avec précision et soin.",
      servicesList: [
        { icon: "🌐", title: "Développement Web", description: "Sites et plateformes sur mesure construits de zéro — rapides, réactifs et optimisés SEO.", tags: ["React", "Node.js"] },
        { icon: "📱", title: "Applications Mobiles", description: "Développement d'applications Android natives avec UX fluide.", tags: ["Android", "Kotlin"] },
        { icon: "⚙️", title: "Backend & APIs", description: "Logique serveur, base de données et APIs REST sécurisées.", tags: ["C#", ".NET"] },
        { icon: "🎨", title: "Design UI/UX", description: "Design d'interfaces modernes qui convertissent les visiteurs.", tags: ["Figma", "Design"] }
      ]
    },
    en: {
      badge: "What We Offer",
      title: "Our Professional Services",
      description: "Comprehensive digital solutions, from concept to actual launch — built with precision.",
      servicesList: [
        { icon: "🌐", title: "Web Development", description: "Custom websites and platforms built from scratch — fast and SEO optimized.", tags: ["React", "Node.js"] },
        { icon: "📱", title: "Mobile Applications", description: "Developing native Android apps with high performance.", tags: ["Android", "Kotlin"] },
        { icon: "⚙️", title: "Backend & APIs", description: "Server-side logic, database architecture, and REST APIs.", tags: ["C#", ".NET"] },
        { icon: "🎨", title: "UI/UX Design", description: "Modern interface design that converts visitors.", tags: ["Figma", "Design"] }
      ]
    }
},

skillsContent: {
  ar: {
    badge: "البنية التقنية",
    title: "الأدوات والتقنيات",
    skillsList: [
      { name: "Python", category: "الأساسيات / الخلفية", icon: "🐍" },
      { name: "Java", category: "البرمجة كائنية التوجه / أندرويد", icon: "☕" },
      { name: "C# / .NET", category: "تطبيقات المؤسسات", icon: "🔷" },
      { name: "JavaScript", category: "ديناميكية / ويب", icon: "⚡" },
      { name: "React", category: "بناء الواجهات", icon: "⚛️" },
      { name: "Git & GitHub", category: "إدارة النسخ", icon: "🔗" }
    ]
  },
  fr: {
    badge: "Infrastructure technique",
    title: "Outils et Technologies",
    skillsList: [
      { name: "Python", category: "Fondamentaux / Backend", icon: "🐍" },
      { name: "Java", category: "POO / Android", icon: "☕" },
      { name: "C# / .NET", category: "Applications d'entreprise", icon: "🔷" },
      { name: "JavaScript", category: "Dynamique / Web", icon: "⚡" },
      { name: "React", category: "Interface utilisateur", icon: "⚛️" },
      { name: "Git & GitHub", category: "Gestion de versions", icon: "🔗" }
    ]
  },
  en: {
    badge: "Technical Infrastructure",
    title: "Tools & Technologies",
    skillsList: [
      { name: "Python", category: "Fundamentals / Backend", icon: "🐍" },
      { name: "Java", category: "OOP / Android", icon: "☕" },
      { name: "C# / .NET", category: "Enterprise Applications", icon: "🔷" },
      { name: "JavaScript", category: "Dynamic / Web", icon: "⚡" },
      { name: "React", category: "UI Development", icon: "⚛️" },
      { name: "Git & GitHub", category: "Version Control", icon: "🔗" }
    ]
  }
}
,
projectsContent: {
  ar: {
    badge: "أعمال مختارة",
    title: "مشاريع طُوّرت بإتقان هندسي",
    projectsList: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
        title: "مجموعة بنى البيانات الديناميكية | Custom Java DSA",
        description: "إعادة بناء وتطوير الهياكل البيانية الأساسية (Linked List, Hash Map, Set, Stack, Queue) بلغة Java من الصفر، مع ابتكار خوارزميات مخصصة لرفع سرعة وكفاءة الـ Linked List.",
        tech: ["Java", "Data Structures", "Algorithms", "Memory Management"]
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        title: "أنظمة إدارة المؤسسات والويب | C# WebForms",
        description: "تصميم وبناء أنظمة إدارية ضخمة مثل نظام إدارة العيادات الطبية والفنادق، مع هندسة متينة لإدارة قواعد البيانات وتأمين تدفق المعلومات.",
        tech: ["C#", ".NET", "WebForms", "Database"]
      },
      {
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
        title: "منظومة الألعاب وتطبيقات الأندرويد | Android & Java",
        description: "تطوير تطبيقات أندرويد أصلية (Native)، تشمل حاسبة علمية متطورة ومحرك لعبة Tic-Tac-Toe ذكي يعتمد على منطق برمجي نظيف (Clean Code).",
        tech: ["Java", "Android SDK", "Mobile OOP"]
      },
      {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        title: "تطبيقات سطح المكتب الذكية | Python GUIs",
        description: "هندسة واجهات مستخدم ديناميكية، تتضمن تطبيق إدارة المهام (smart-ToDo-List) وبرامج مكتبية مخصصة لإدارة شؤون الموظفين (EMS).",
        tech: ["Python", "KivyMD", "Tkinter", "GUI Architecture"]
      }
    ]
  },
  fr: {
    badge: "Réalisations",
    title: "Projets développés avec ingénierie",
    projectsList: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
        title: "Structures de données dynamiques | Java DSA",
        description: "Reconstruction des structures de données fondamentales (Linked List, Hash Map, Stack...) en Java avec des algorithmes personnalisés pour une efficacité optimale.",
        tech: ["Java", "DSA", "Algorithms", "Gestion Mémoire"]
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        title: "Systèmes de gestion d'entreprise | C# WebForms",
        description: "Conception de systèmes administratifs complexes (gestion de cliniques, hôtels) avec une architecture robuste de base de données et sécurisation des données.",
        tech: ["C#", ".NET", "WebForms", "Base de données"]
      },
      {
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
        title: "Applications Android & Jeux | Java",
        description: "Développement d'applications natives Android, incluant une calculatrice scientifique avancée et un moteur de jeu Tic-Tac-Toe basé sur le Clean Code.",
        tech: ["Java", "Android SDK", "Mobile OOP"]
      },
      {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        title: "Applications de bureau intelligentes | Python",
        description: "Conception d'interfaces dynamiques, incluant un gestionnaire de tâches intelligent (smart-ToDo-List) et des logiciels de gestion du personnel (EMS).",
        tech: ["Python", "KivyMD", "Tkinter", "Architecture GUI"]
      }
    ]
  },
  en: {
    badge: "Selected Works",
    title: "Projects developed with engineering precision",
    projectsList: [
      {
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
        title: "Custom Java Data Structures | DSA",
        description: "Rebuilding core data structures (Linked List, Hash Map, Stack, Queue) in Java from scratch, with custom algorithms to optimize performance and memory.",
        tech: ["Java", "DSA", "Algorithms", "Memory Management"]
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        title: "Enterprise Management Systems | C#",
        description: "Designing large-scale administrative systems, including Clinic and Hotel Management Systems, with robust database architecture and secure information flow.",
        tech: ["C#", ".NET", "WebForms", "Database Architecture"]
      },
      {
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
        title: "Android Apps & Gaming | Java",
        description: "Developing native Android apps, featuring an advanced scientific calculator and an intelligent Tic-Tac-Toe game based on Clean Code principles.",
        tech: ["Java", "Android SDK", "Mobile OOP"]
      },
      {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        title: "Smart Desktop Applications | Python",
        description: "Engineering dynamic user interfaces, including a smart To-Do List application and custom Employee Management Systems (EMS).",
        tech: ["Python", "KivyMD", "Tkinter", "GUI Architecture"]
      }
    ]
  }
}
,
contactContent :{
  ar: {
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    message: "أخبرنا عن تفاصيل مشروعك...",
    submit: "إرسال",
    sending: "جاري الإرسال...",
    validName: "يرجى ملء هذا الحقل لإدخال الاسم الكامل.",
    validEmail: "يرجى إدخال عنوان بريد إلكتروني صالح.",
    validMsg: "يرجى كتابة تفاصيل مشروعك هنا."
  },
  fr: {
    name: "Nom complet",
    email: "Adresse e-mail",
    message: "Parlez-nous de votre projet...",
    submit: "Envoyer",
    sending: "Envoi en cours...",
    validName: "Veuillez remplir votre nom complet.",
    validEmail: "Veuillez entrer une adresse e-mail valide.",
    validMsg: "Veuillez décrire votre projet ici."
  },
  en: {
    name: "Full Name",
    email: "Email Address",
    message: "Tell us about your project...",
    submit: "Send",
    sending: "Sending...",
    validName: "Please enter your full name.",
    validEmail: "Please enter a valid email address.",
    validMsg: "Please describe your project here."
  }
}
,
contactInfoContent: {
  ar: {
    badge: "تواصل معنا",
    title: "لنبتكر شيئاً استثنائياً معاً",
    description: "هل تبحث عن الأداء العالي والحلول البرمجية المتكاملة؟ راسلنا لمناقشة تفاصيل مشروعك القادم.",
    location: "📍ميدلت، المغرب",
    support: "💬دعم متوفر عبر الواتساب"
  },
  fr: {
    badge: "Contactez-nous",
    title: "Créons ensemble quelque chose d'exceptionnel",
    description: "Vous recherchez une haute performance et des solutions logicielles complètes ? Écrivez-nous pour discuter.",
    location: "📍Midelt, Maroc",
    support: "💬Support disponible via WhatsApp"
  },
  en: {
    badge: "Contact Us",
    title: "Let's create something exceptional together",
    description: "Looking for high performance and comprehensive software solutions? Message us to discuss your project.",
    location: "📍Midelt, Morocco",
    support: "💬Support available via WhatsApp"
  }
}
,
socialLinks: {
  ar: {
    name1: "جيت هاب", link1: "https://github.com/Zouhair010",
    name2: "لينكد إن", link2: "https://www.linkedin.com/in/zouhair-ou-azza-492393319/",
    name3: "فيسبوك", link3: "https://www.facebook.com/profile.php?id=61591722322577" ,
    name4: "واتساب", link4: "https://wa.me/212701302594",
    location: "📍 ميدلت، المغرب",
    support: "💬 دعم متوفر عبر الواتساب"
  },
  fr: {
    name1: "GitHub", link1: "https://github.com/Zouhair010" ,
    name2: "LinkedIn", link2: "https://www.linkedin.com/in/zouhair-ou-azza-492393319/",
    name3: "Facebook", link3: "https://www.facebook.com/profile.php?id=61591722322577",
    name4: "WhatsApp", link4: "https://wa.me/212701302594",
    location: "📍 Midelt, Maroc",
    support: "💬 Support disponible via WhatsApp"
  },
  en: {
    name1: "GitHub", link1: "https://github.com/Zouhair010",
    name2: "LinkedIn", link2: "https://www.linkedin.com/in/zouhair-ou-azza-492393319/",
    name3: "Facebook", link3: "https://www.facebook.com/profile.php?id=61591722322577",
    name4: "WhatsApp", link4: "https://wa.me/212701302594",
    location: "📍 Midelt, Morocco",
    support: "💬 Support available via WhatsApp"
  }
}
,
footerContent :{
  ar: {
    text: "تطوير المواقع الإلكترونية · ميدلت"
  },
  fr: {
    text: "Développement web · Midelt"
  },
  en: {
    text: "Web Development · Midelt"
  }
}
}

export default data;