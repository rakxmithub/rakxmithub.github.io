/**
 * Theme + i18n for Mani Tayefi portfolio
 */
(function () {
  const LANGS = ["en", "de", "ar", "fr"];
  const LANG_LABELS = { en: "EN", de: "DE", ar: "AR", fr: "FR" };

  const T = {
    en: {
      "nav.home": "Home", "nav.about": "About", "nav.ai": "AI", "nav.projects": "Projects", "nav.stack": "Stack", "nav.contact": "Contact", "nav.contactCta": "Contact",
      "hero.available": "Available for work", "hero.eyebrow": "AI ENGINEER", "hero.role": "AI Engineer",
      "hero.lead": "Designing and building intelligent systems — from RAG pipelines and LLM applications to semantic search, vector retrieval, AI agents, and production-ready Python software.",
      "hero.ctaProjects": "View Projects", "hero.ctaAi": "Explore AI", "hero.ctaContact": "Contact Me", "hero.scroll": "SCROLL TO EXPLORE",
      "about.tag": "04 — About", "about.title1": "AI systems that", "about.title2": "solve real problems.",
      "about.p1": "I am Mani Tayefi, an AI Engineer focused on designing and building practical intelligent systems. My work centers on Retrieval-Augmented Generation, LLM applications, embeddings, vector databases, and turning AI prototypes into usable software.",
      "about.p2": "I work across document pipelines, chunking, embeddings, hybrid retrieval, reranking, semantic search, and LLM generation — combining modern AI techniques with solid software engineering practices in Python and related frameworks.",
      "about.focus": "Focus", "about.approach": "Approach", "about.approachVal": "Build · Measure · Improve",
      "ai.tag": "03 — AI Core", "ai.title": "Explore the AI Stack", "ai.sub": "Trace how AI systems connect - from retrieval and embeddings to LLMs and intelligent applications.", "ai.instruction": "Click the core to activate the system, then explore each capability.",
      "ai.hint": "CLICK CORE TO ACTIVATE", "ai.status": "STATUS", "ai.active": "ACTIVE", "ai.modules": "MODULES",
      "ai.workWith": "What I work with", "ai.project": "Project",
      "projects.tag": "01 — Projects", "projects.title": "Selected work", "projects.sub": "Engineering projects that ship.",
      "projects.prev": "← Prev", "projects.next": "Next →",
      "build.tag": "02 — What I Build", "build.title": "Capabilities", "build.sub": "Practical systems at the intersection of AI and software engineering.",
      "build.ragTitle": "RAG Systems", "build.ragDesc": "Retrieval pipelines, embeddings, hybrid retrieval and reranking for grounded LLM answers.",
      "build.llmTitle": "LLM Applications", "build.llmDesc": "AI-powered applications with contextual generation, query processing and structured outputs.",
      "build.sysTitle": "Intelligent Systems", "build.sysDesc": "Combining models, retrieval and software engineering into usable applications.",
      "build.pyTitle": "Python Engineering", "build.pyDesc": "AI pipelines, APIs, diagnostic tools and system-oriented development in Python.",
      "p1.title": "Modular RAG AI Assistant", "p1.desc": "A modular Retrieval-Augmented Generation system for document ingestion, embeddings, vector search, retrieval, reranking, query processing, and LLM-based responses.",
      "p2.title": "NetX — Network Diagnostic Engine", "p2.desc": "A Python-based Windows network diagnostic and monitoring tool for connectivity testing, DNS/gateway diagnostics, Wi-Fi scanning, health scoring, and JSON reporting.",
      "p3.title": "Iran Live Currency Dashboard", "p3.desc": "A desktop application built with Python and Tkinter that displays real-time currency exchange rates in Iranian Toman using a live API.",
      "stack.tag": "05 — Tech Stack", "stack.title": "Technology ecosystem", "stack.sub": "Tools and techniques used to build intelligent systems.",
      "stack.ai": "AI / ML", "stack.backend": "Backend", "stack.frameworks": "AI Frameworks", "stack.infra": "Infrastructure",
      "stack.llm": "Language models", "stack.rag": "Retrieval pipelines", "stack.emb": "Vector representations", "stack.nlp": "Language processing", "stack.agents": "Tool-using systems",
      "stack.python": "Core language", "stack.flask": "Web APIs", "stack.apis": "Interfaces", "stack.rest": "Web services",
      "stack.langchain": "LLM orchestration", "stack.chroma": "Vector store", "stack.bm25": "Keyword retrieval", "stack.hybrid": "Combined retrieval",
      "stack.git": "Version control", "stack.github": "Collaboration", "stack.docker": "Containers", "stack.vdb": "Embedding storage",
      "approach.tag": "06 — Approach", "approach.title1": "Prototype fast.", "approach.title2": "Engineer carefully.",
      "approach.p1t": "Build real systems", "approach.p1d": "AI should solve useful problems, not just demonstrate a model.",
      "approach.p2t": "Understand the pipeline", "approach.p2d": "Data → retrieval → model → output. The full path matters.",
      "approach.p3t": "Keep improving", "approach.p3d": "Modular, testable systems that are easy to iterate on.",
      "contact.tag": "07 — Contact Inbox", "contact.title": "Contact Inbox", "contact.sub": "Open to conversations about AI engineering, RAG systems, and practical software.",
      "contact.email": "Email", "contact.liPlaceholder": "Set your LinkedIn URL", "contact.newMsg": "New Message",
      "contact.name": "Name", "contact.namePh": "Your name", "contact.emailPh": "you@example.com",
      "contact.topic": "Topic", "contact.topicPh": "Select a topic",
      "contact.t1": "Collaboration", "contact.t2": "Project", "contact.t3": "Job Opportunity", "contact.t4": "Freelance", "contact.t5": "General Inquiry",
      "contact.message": "Message", "contact.messagePh": "Write your message…", "contact.send": "Send Message",
      "contact.hint": "Messages are delivered securely to manitayefi123@gmail.com.",
      "contact.sending": "Sending…", "contact.successTitle": "MESSAGE SENT", "contact.successBody": "Your message has been successfully sent.",
      "contact.successCheck": "TRANSMISSION COMPLETE", "contact.errFields": "Please fill in all fields.", "contact.errEmail": "Please enter a valid email.",
      "contact.errTopic": "Please select a topic.", "contact.errNetwork": "Network error. Please try again later.", "contact.errGeneric": "Something went wrong. Please try again later."
    },
    de: {
      "nav.home": "Start", "nav.about": "Über mich", "nav.ai": "KI", "nav.projects": "Projekte", "nav.stack": "Stack", "nav.contact": "Kontakt", "nav.contactCta": "Kontakt",
      "hero.available": "Verfügbar für Arbeit", "hero.eyebrow": "KI-ENGINEER", "hero.role": "AI Engineer",
      "hero.lead": "Konzeption und Aufbau intelligenter Systeme — von RAG-Pipelines und LLM-Anwendungen bis hin zu semantischer Suche, Vektor-Retrieval, KI-Agenten und produktionsreifer Python-Software.",
      "hero.ctaProjects": "Projekte ansehen", "hero.ctaAi": "KI erkunden", "hero.ctaContact": "Kontakt", "hero.scroll": "NACH UNTEN SCROLLEN",
      "about.tag": "04 — Über mich", "about.title1": "KI-Systeme, die", "about.title2": "echte Probleme lösen.",
      "about.p1": "Ich bin Mani Tayefi, AI Engineer mit Fokus auf praxisnahe intelligente Systeme. Meine Arbeit konzentriert sich auf Retrieval-Augmented Generation, LLM-Anwendungen, Embeddings, Vektordatenbanken und die Umsetzung von KI-Prototypen in nutzbare Software.",
      "about.p2": "Ich arbeite an Dokumenten-Pipelines, Chunking, Embeddings, hybrider Retrieval, Reranking, semantischer Suche und LLM-Generierung — moderne KI-Techniken kombiniert mit solider Softwareentwicklung in Python.",
      "about.focus": "Fokus", "about.approach": "Ansatz", "about.approachVal": "Bauen · Messen · Verbessern",
      "ai.tag": "03 — KI-Kern", "ai.title": "Den AI-Stack erkunden", "ai.sub": "Verfolgen Sie, wie KI-Systeme zusammenhängen - von Retrieval und Embeddings bis zu LLMs und intelligenten Anwendungen.", "ai.instruction": "Kern anklicken, um das System zu aktivieren, dann jede Fähigkeit erkunden.",
      "ai.hint": "KERN ANKLICKEN ZUM START", "ai.status": "STATUS", "ai.active": "AKTIV", "ai.modules": "MODULE",
      "ai.workWith": "Womit ich arbeite", "ai.project": "Projekt",
      "projects.tag": "01 — Projekte", "projects.title": "Ausgewählte Arbeiten", "projects.sub": "Engineering-Projekte, die ausgeliefert werden.",
      "projects.prev": "← Zurück", "projects.next": "Weiter →",
      "build.tag": "02 — Was ich baue", "build.title": "Fähigkeiten", "build.sub": "Praktische Systeme an der Schnittstelle von KI und Software-Engineering.",
      "build.ragTitle": "RAG-Systeme", "build.ragDesc": "Retrieval-Pipelines, Embeddings, hybrides Retrieval und Reranking für fundierte LLM-Antworten.",
      "build.llmTitle": "LLM-Anwendungen", "build.llmDesc": "KI-gestützte Anwendungen mit kontextueller Generierung, Query-Verarbeitung und strukturierten Ausgaben.",
      "build.sysTitle": "Intelligente Systeme", "build.sysDesc": "Modelle, Retrieval und Software-Engineering zu nutzbaren Anwendungen verbinden.",
      "build.pyTitle": "Python-Engineering", "build.pyDesc": "KI-Pipelines, APIs, Diagnose-Tools und systemorientierte Entwicklung in Python.",
      "p1.title": "Modular RAG AI Assistant", "p1.desc": "Ein modulares Retrieval-Augmented-Generation-System für Dokumentenaufnahme, Embeddings, Vektorsuche, Retrieval, Reranking, Query-Verarbeitung und LLM-Antworten.",
      "p2.title": "NetX — Network Diagnostic Engine", "p2.desc": "Ein Python-basiertes Windows-Netzwerkdiagnose- und Monitoring-Tool für Konnektivitätstests, DNS/Gateway-Diagnose, WLAN-Scanning, Health-Scoring und JSON-Reporting.",
      "p3.title": "Iran Live Currency Dashboard", "p3.desc": "Eine Desktop-Anwendung mit Python und Tkinter, die Echtzeit-Wechselkurse in iranischen Toman über eine Live-API anzeigt.",
      "stack.tag": "05 — Tech Stack", "stack.title": "Technologie-Ökosystem", "stack.sub": "Werkzeuge und Techniken für intelligente Systeme.",
      "stack.ai": "AI / ML", "stack.backend": "Backend", "stack.frameworks": "KI-Frameworks", "stack.infra": "Infrastruktur",
      "stack.llm": "Sprachmodelle", "stack.rag": "Retrieval-Pipelines", "stack.emb": "Vektorrepräsentationen", "stack.nlp": "Sprachverarbeitung", "stack.agents": "Tool-nutzende Systeme",
      "stack.python": "Kernsprache", "stack.flask": "Web-APIs", "stack.apis": "Schnittstellen", "stack.rest": "Webdienste",
      "stack.langchain": "LLM-Orchestrierung", "stack.chroma": "Vektorspeicher", "stack.bm25": "Keyword-Retrieval", "stack.hybrid": "Kombiniertes Retrieval",
      "stack.git": "Versionskontrolle", "stack.github": "Zusammenarbeit", "stack.docker": "Container", "stack.vdb": "Embedding-Speicher",
      "approach.tag": "06 — Ansatz", "approach.title1": "Schnell prototypisieren.", "approach.title2": "Sorgfältig engineeringen.",
      "approach.p1t": "Echte Systeme bauen", "approach.p1d": "KI soll nützliche Probleme lösen, nicht nur ein Modell demonstrieren.",
      "approach.p2t": "Die Pipeline verstehen", "approach.p2d": "Daten → Retrieval → Modell → Ausgabe. Der gesamte Pfad zählt.",
      "approach.p3t": "Weiter verbessern", "approach.p3d": "Modulare, testbare Systeme, die sich leicht iterieren lassen.",
      "contact.tag": "07 — Kontakt-Inbox", "contact.title": "Kontakt-Inbox", "contact.sub": "Offen für Gespräche über KI-Engineering, RAG-Systeme und praxisnahe Software.",
      "contact.email": "E-Mail", "contact.liPlaceholder": "LinkedIn-URL setzen", "contact.newMsg": "Neue Nachricht",
      "contact.name": "Name", "contact.namePh": "Ihr Name", "contact.emailPh": "sie@beispiel.com",
      "contact.topic": "Thema", "contact.topicPh": "Thema wählen",
      "contact.t1": "Zusammenarbeit", "contact.t2": "Projekt", "contact.t3": "Stellenangebot", "contact.t4": "Freelance", "contact.t5": "Allgemeine Anfrage",
      "contact.message": "Nachricht", "contact.messagePh": "Schreiben Sie Ihre Nachricht…", "contact.send": "Nachricht senden",
      "contact.hint": "Nachrichten werden sicher an manitayefi123@gmail.com zugestellt.",
      "contact.sending": "Senden…", "contact.successTitle": "NACHRICHT GESENDET", "contact.successBody": "Ihre Nachricht wurde erfolgreich gesendet.",
      "contact.successCheck": "ÜBERTRAGUNG ABGESCHLOSSEN", "contact.errFields": "Bitte alle Felder ausfüllen.", "contact.errEmail": "Bitte gültige E-Mail eingeben.",
      "contact.errTopic": "Bitte ein Thema wählen.", "contact.errNetwork": "Netzwerkfehler. Bitte später erneut versuchen.", "contact.errGeneric": "Etwas ist schiefgelaufen. Bitte später erneut versuchen."
    },
    ar: {
      "nav.home": "الرئيسية", "nav.about": "نبذة", "nav.ai": "الذكاء الاصطناعي", "nav.projects": "المشاريع", "nav.stack": "التقنيات", "nav.contact": "تواصل", "nav.contactCta": "تواصل",
      "hero.available": "متاح للعمل", "hero.eyebrow": "مهندس ذكاء اصطناعي", "hero.role": "مهندس ذكاء اصطناعي",
      "hero.lead": "تصميم وبناء أنظمة ذكية — من خطوط RAG وتطبيقات نماذج اللغة إلى البحث الدلالي واسترجاع المتجهات ووكلاء الذكاء الاصطناعي وبرمجيات Python جاهزة للإنتاج.",
      "hero.ctaProjects": "عرض المشاريع", "hero.ctaAi": "استكشف الذكاء الاصطناعي", "hero.ctaContact": "تواصل معي", "hero.scroll": "مرر لاستكشاف",
      "about.tag": "04 — نبذة", "about.title1": "أنظمة ذكاء اصطناعي", "about.title2": "تحل مشكلات حقيقية.",
      "about.p1": "أنا ماني طايفي، مهندس ذكاء اصطناعي أركز على تصميم وبناء أنظمة ذكية عملية. يتركز عملي على التوليد المعزز بالاسترجاع وتطبيقات نماذج اللغة والتضمينات وقواعد بيانات المتجهات وتحويل نماذج الذكاء الاصطناعي إلى برمجيات قابلة للاستخدام.",
      "about.p2": "أعمل عبر خطوط معالجة المستندات والتجزئة والتضمينات والاسترجاع الهجين وإعادة الترتيب والبحث الدلالي وتوليد نماذج اللغة — مع الجمع بين تقنيات الذكاء الاصطناعي الحديثة وهندسة البرمجيات الصلبة بلغة Python.",
      "about.focus": "التركيز", "about.approach": "النهج", "about.approachVal": "ابنِ · قِس · حسّن",
      "ai.tag": "03 — نواة الذكاء الاصطناعي", "ai.title": "استكشف مجموعة تقنيات الذكاء الاصطناعي", "ai.sub": "تتبع كيف تتصل أنظمة الذكاء الاصطناعي - من الاسترجاع والتضمينات إلى نماذج اللغة والتطبيقات الذكية.", "ai.instruction": "انقر على النواة لتفعيل النظام، ثم استكشف كل قدرة.",
      "ai.hint": "انقر على النواة للتهيئة", "ai.status": "الحالة", "ai.active": "النشط", "ai.modules": "الوحدات",
      "ai.workWith": "ما أعمل به", "ai.project": "مشروع",
      "projects.tag": "01 — المشاريع", "projects.title": "أعمال مختارة", "projects.sub": "مشاريع هندسية تُسلَّم فعلياً.",
      "projects.prev": "→ السابق", "projects.next": "التالي ←",
      "build.tag": "02 — ما أبنيه", "build.title": "القدرات", "build.sub": "أنظمة عملية عند تقاطع الذكاء الاصطناعي وهندسة البرمجيات.",
      "build.ragTitle": "أنظمة RAG", "build.ragDesc": "خطوط استرجاع وتضمينات واسترجاع هجين وإعادة ترتيب لإجابات نماذج لغة مدعومة بالمصادر.",
      "build.llmTitle": "تطبيقات نماذج اللغة", "build.llmDesc": "تطبيقات مدعومة بالذكاء الاصطناعي مع توليد سياقي ومعالجة استعلامات ومخرجات منظمة.",
      "build.sysTitle": "أنظمة ذكية", "build.sysDesc": "دمج النماذج والاسترجاع وهندسة البرمجيات في تطبيقات قابلة للاستخدام.",
      "build.pyTitle": "هندسة Python", "build.pyDesc": "خطوط ذكاء اصطناعي وواجهات برمجة وأدوات تشخيص وتطوير موجّه للأنظمة بلغة Python.",
      "p1.title": "مساعد RAG معياري", "p1.desc": "نظام توليد معزز بالاسترجاع معياري لاستيعاب المستندات والتضمينات والبحث المتجهي والاسترجاع وإعادة الترتيب ومعالجة الاستعلامات واستجابات نماذج اللغة.",
      "p2.title": "NetX — محرك تشخيص الشبكات", "p2.desc": "أداة Python لتشخيص ومراقبة شبكات Windows لاختبار الاتصال وتشخيص DNS/البوابة ومسح Wi-Fi وتقييم الصحة وتقارير JSON.",
      "p3.title": "لوحة أسعار العملات الحية لإيران", "p3.desc": "تطبيق سطح مكتب بـ Python و Tkinter يعرض أسعار صرف العملات في الوقت الفعلي بالتومان الإيراني عبر واجهة برمجة حية.",
      "stack.tag": "05 — التقنيات", "stack.title": "منظومة التقنيات", "stack.sub": "أدوات وتقنيات لبناء أنظمة ذكية.",
      "stack.ai": "الذكاء الاصطناعي / التعلم الآلي", "stack.backend": "الخلفية", "stack.frameworks": "أطر الذكاء الاصطناعي", "stack.infra": "البنية التحتية",
      "stack.llm": "نماذج اللغة", "stack.rag": "خطوط الاسترجاع", "stack.emb": "تمثيلات متجهية", "stack.nlp": "معالجة اللغة", "stack.agents": "أنظمة تستخدم الأدوات",
      "stack.python": "اللغة الأساسية", "stack.flask": "واجهات ويب", "stack.apis": "واجهات برمجة", "stack.rest": "خدمات ويب",
      "stack.langchain": "تنسيق نماذج اللغة", "stack.chroma": "مخزن متجهات", "stack.bm25": "استرجاع بالكلمات", "stack.hybrid": "استرجاع هجين",
      "stack.git": "التحكم بالإصدارات", "stack.github": "التعاون", "stack.docker": "حاويات", "stack.vdb": "تخزين التضمينات",
      "approach.tag": "06 — النهج", "approach.title1": "نمذجة سريعة.", "approach.title2": "هندسة دقيقة.",
      "approach.p1t": "ابنِ أنظمة حقيقية", "approach.p1d": "يجب أن يحل الذكاء الاصطناعي مشكلات مفيدة، لا أن يعرض نموذجاً فقط.",
      "approach.p2t": "افهم المسار", "approach.p2d": "بيانات → استرجاع → نموذج → مخرج. المسار الكامل مهم.",
      "approach.p3t": "استمر في التحسين", "approach.p3d": "أنظمة معيارية قابلة للاختبار وسهلة التكرار.",
      "contact.tag": "07 — صندوق التواصل", "contact.title": "صندوق التواصل", "contact.sub": "مفتوح للمحادثات حول هندسة الذكاء الاصطناعي وأنظمة RAG والبرمجيات العملية.",
      "contact.email": "البريد", "contact.liPlaceholder": "ضع رابط LinkedIn", "contact.newMsg": "رسالة جديدة",
      "contact.name": "الاسم", "contact.namePh": "اسمك", "contact.emailPh": "you@example.com",
      "contact.topic": "الموضوع", "contact.topicPh": "اختر موضوعاً",
      "contact.t1": "تعاون", "contact.t2": "مشروع", "contact.t3": "فرصة عمل", "contact.t4": "عمل حر", "contact.t5": "استفسار عام",
      "contact.message": "الرسالة", "contact.messagePh": "اكتب رسالتك…", "contact.send": "إرسال الرسالة",
      "contact.hint": "تُسلَّم الرسائل بشكل آمن إلى manitayefi123@gmail.com.",
      "contact.sending": "جارٍ الإرسال…", "contact.successTitle": "تم إرسال الرسالة", "contact.successBody": "تم إرسال رسالتك بنجاح.",
      "contact.successCheck": "اكتملت العملية", "contact.errFields": "يرجى ملء جميع الحقول.", "contact.errEmail": "يرجى إدخال بريد صالح.",
      "contact.errTopic": "يرجى اختيار موضوع.", "contact.errNetwork": "خطأ في الشبكة. حاول لاحقاً.", "contact.errGeneric": "حدث خطأ. حاول لاحقاً."
    },
    fr: {
      "nav.home": "Accueil", "nav.about": "À propos", "nav.ai": "IA", "nav.projects": "Projets", "nav.stack": "Stack", "nav.contact": "Contact", "nav.contactCta": "Contact",
      "hero.available": "Disponible pour travailler", "hero.eyebrow": "INGÉNIEUR IA", "hero.role": "Ingénieur IA",
      "hero.lead": "Conception et construction de systèmes intelligents — des pipelines RAG et applications LLM à la recherche sémantique, au retrieval vectoriel, aux agents IA et aux logiciels Python prêts pour la production.",
      "hero.ctaProjects": "Voir les projets", "hero.ctaAi": "Explorer l'IA", "hero.ctaContact": "Me contacter", "hero.scroll": "DÉFILER POUR EXPLORER",
      "about.tag": "04 — À propos", "about.title1": "Des systèmes d'IA qui", "about.title2": "résolvent de vrais problèmes.",
      "about.p1": "Je suis Mani Tayefi, ingénieur IA axé sur la conception et la construction de systèmes intelligents pratiques. Mon travail porte sur la génération augmentée par récupération, les applications LLM, les embeddings, les bases vectorielles et la transformation de prototypes IA en logiciels utilisables.",
      "about.p2": "Je travaille sur les pipelines documentaires, le chunking, les embeddings, la récupération hybride, le reranking, la recherche sémantique et la génération LLM — en combinant des techniques d'IA modernes avec une ingénierie logicielle solide en Python.",
      "about.focus": "Focus", "about.approach": "Approche", "about.approachVal": "Construire · Mesurer · Améliorer",
      "ai.tag": "03 — Cœur IA", "ai.title": "Explorer la pile IA", "ai.sub": "Suivez comment les systemes d'IA se connectent - du retrieval et des embeddings aux LLM et applications intelligentes.", "ai.instruction": "Cliquez sur le coeur pour activer le systeme, puis explorez chaque capacite.",
      "ai.hint": "CLIQUER SUR LE CŒUR POUR INITIALISER", "ai.status": "STATUT", "ai.active": "ACTIF", "ai.modules": "MODULES",
      "ai.workWith": "Ce avec quoi je travaille", "ai.project": "Projet",
      "projects.tag": "01 — Projets", "projects.title": "Travaux sélectionnés", "projects.sub": "Projets d'ingénierie livrés.",
      "projects.prev": "← Préc.", "projects.next": "Suiv. →",
      "build.tag": "02 — Ce que je construis", "build.title": "Capacités", "build.sub": "Systèmes pratiques à l'intersection de l'IA et de l'ingénierie logicielle.",
      "build.ragTitle": "Systèmes RAG", "build.ragDesc": "Pipelines de retrieval, embeddings, retrieval hybride et reranking pour des réponses LLM ancrées.",
      "build.llmTitle": "Applications LLM", "build.llmDesc": "Applications IA avec génération contextuelle, traitement de requêtes et sorties structurées.",
      "build.sysTitle": "Systèmes intelligents", "build.sysDesc": "Combiner modèles, retrieval et ingénierie logicielle en applications utilisables.",
      "build.pyTitle": "Ingénierie Python", "build.pyDesc": "Pipelines IA, APIs, outils de diagnostic et développement orienté système en Python.",
      "p1.title": "Assistant RAG modulaire", "p1.desc": "Système de génération augmentée par récupération modulaire pour l'ingestion de documents, embeddings, recherche vectorielle, retrieval, reranking, traitement de requêtes et réponses LLM.",
      "p2.title": "NetX — Moteur de diagnostic réseau", "p2.desc": "Outil Python de diagnostic et de monitoring réseau Windows pour tests de connectivité, diagnostics DNS/passerelle, scan Wi-Fi, scoring de santé et reporting JSON.",
      "p3.title": "Tableau des devises iraniennes en direct", "p3.desc": "Application de bureau Python/Tkinter affichant les taux de change en temps réel en toman iranien via une API live.",
      "stack.tag": "05 — Stack technique", "stack.title": "Écosystème technologique", "stack.sub": "Outils et techniques pour construire des systèmes intelligents.",
      "stack.ai": "IA / ML", "stack.backend": "Backend", "stack.frameworks": "Frameworks IA", "stack.infra": "Infrastructure",
      "stack.llm": "Modèles de langage", "stack.rag": "Pipelines de retrieval", "stack.emb": "Représentations vectorielles", "stack.nlp": "Traitement du langage", "stack.agents": "Systèmes à outils",
      "stack.python": "Langage principal", "stack.flask": "APIs web", "stack.apis": "Interfaces", "stack.rest": "Services web",
      "stack.langchain": "Orchestration LLM", "stack.chroma": "Store vectoriel", "stack.bm25": "Retrieval lexical", "stack.hybrid": "Retrieval combiné",
      "stack.git": "Contrôle de version", "stack.github": "Collaboration", "stack.docker": "Conteneurs", "stack.vdb": "Stockage d'embeddings",
      "approach.tag": "06 — Approche", "approach.title1": "Prototyper vite.", "approach.title2": "Ingénierer avec soin.",
      "approach.p1t": "Construire de vrais systèmes", "approach.p1d": "L'IA doit résoudre des problèmes utiles, pas seulement démontrer un modèle.",
      "approach.p2t": "Comprendre le pipeline", "approach.p2d": "Données → retrieval → modèle → sortie. Le chemin complet compte.",
      "approach.p3t": "Continuer d'améliorer", "approach.p3d": "Systèmes modulaires et testables, faciles à itérer.",
      "contact.tag": "07 — Boîte de contact", "contact.title": "Boîte de contact", "contact.sub": "Ouvert aux échanges sur l'ingénierie IA, les systèmes RAG et les logiciels pratiques.",
      "contact.email": "E-mail", "contact.liPlaceholder": "Définir l'URL LinkedIn", "contact.newMsg": "Nouveau message",
      "contact.name": "Nom", "contact.namePh": "Votre nom", "contact.emailPh": "vous@exemple.com",
      "contact.topic": "Sujet", "contact.topicPh": "Choisir un sujet",
      "contact.t1": "Collaboration", "contact.t2": "Projet", "contact.t3": "Offre d'emploi", "contact.t4": "Freelance", "contact.t5": "Demande générale",
      "contact.message": "Message", "contact.messagePh": "Écrivez votre message…", "contact.send": "Envoyer le message",
      "contact.hint": "Les messages sont envoyés de façon sécurisée à manitayefi123@gmail.com.",
      "contact.sending": "Envoi…", "contact.successTitle": "MESSAGE ENVOYÉ", "contact.successBody": "Votre message a été envoyé avec succès.",
      "contact.successCheck": "TRANSMISSION TERMINÉE", "contact.errFields": "Veuillez remplir tous les champs.", "contact.errEmail": "Veuillez entrer un e-mail valide.",
      "contact.errTopic": "Veuillez sélectionner un sujet.", "contact.errNetwork": "Erreur réseau. Réessayez plus tard.", "contact.errGeneric": "Une erreur s'est produite. Réessayez plus tard."
    }
  };

  let currentLang = "en";

  function t(key) {
    return (T[currentLang] && T[currentLang][key]) || (T.en && T.en[key]) || key;
  }

  function applyI18n(lang) {
    if (!LANGS.includes(lang)) lang = "en";
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", lang === "ar");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (el.tagName === "OPTION") el.textContent = val;
      else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });

    const langCurrent = document.getElementById("langCurrent");
    if (langCurrent) langCurrent.textContent = LANG_LABELS[lang] || lang.toUpperCase();

    document.querySelectorAll("#langMenu [role=option]").forEach((li) => {
      li.setAttribute("aria-selected", li.getAttribute("data-lang") === lang ? "true" : "false");
    });
    document.querySelectorAll("#mobileLang button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("mt-lang", lang); } catch (_) {}
    window.dispatchEvent(new CustomEvent("mt:langchange", { detail: { lang } }));
  }

  function initLang() {
    let saved = null;
    try { saved = localStorage.getItem("mt-lang"); } catch (_) {}
    const lang = LANGS.includes(saved) ? saved : "en";
    applyI18n(lang);

    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");
    if (langBtn && langMenu) {
      langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = langBtn.getAttribute("aria-expanded") === "true";
        langBtn.setAttribute("aria-expanded", open ? "false" : "true");
        langMenu.hidden = open;
      });
      langMenu.querySelectorAll("[data-lang]").forEach((li) => {
        li.addEventListener("click", () => {
          applyI18n(li.getAttribute("data-lang"));
          langBtn.setAttribute("aria-expanded", "false");
          langMenu.hidden = true;
        });
      });
      document.addEventListener("click", () => {
        langBtn.setAttribute("aria-expanded", "false");
        langMenu.hidden = true;
      });
    }
    document.querySelectorAll("#mobileLang button").forEach((btn) => {
      btn.addEventListener("click", () => applyI18n(btn.getAttribute("data-lang")));
    });
  }

  /* Theme */
  function getPreferredTheme() {
    try {
      const s = localStorage.getItem("mt-theme");
      if (s === "light" || s === "dark") return s;
    } catch (_) {}
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    const t = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", t);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "light" ? "#f4f6f8" : "#07090e");
    try { localStorage.setItem("mt-theme", t); } catch (_) {}
  }

  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(cur === "dark" ? "light" : "dark");
  }

  function initTheme() {
    applyTheme(getPreferredTheme());
    const btn = document.getElementById("themeToggle");
    const mob = document.getElementById("mobileThemeToggle");
    if (btn) btn.addEventListener("click", toggleTheme);
    if (mob) mob.addEventListener("click", toggleTheme);
  }


  /* Multilingual AI knowledge panels */
  const AI_CONTENT = {
    en: {
      RAG: { icon: "◈", title: "RAG", sub: "Retrieval-Augmented Generation",
        desc: "A system that retrieves relevant information from external knowledge sources before generating an answer with an LLM.",
        how: "How it works",
        pipeline: "Documents → Chunking → Embeddings → Retrieval → Reranking → LLM → Answer",
        items: ["Document Ingestion", "Chunking", "Embeddings", "Vector Search", "BM25", "Hybrid Retrieval", "Reranking", "Query Rewriting", "LLM Response"],
        workLabel: "What I work with" },
      LLM: { icon: "⌬", title: "LLM", sub: "Large Language Models",
        desc: "Large language models power generation, reasoning, and structured output in AI applications. They form the generation layer after retrieval and context assembly.",
        items: ["Prompt Engineering", "Context Management", "Response Generation", "Model Integration"],
        workLabel: "What I work with" },
      EMBEDDINGS: { icon: "◎", title: "Embeddings", sub: "Semantic Vector Representations",
        desc: "Convert text into numerical representations for semantic similarity and retrieval over document collections.",
        items: ["Semantic Representation", "Vectorization", "Similarity Search", "Retrieval"],
        workLabel: "What I work with" },
      "VECTOR SEARCH": { icon: "⬡", title: "Vector Search", sub: "Semantic Retrieval",
        desc: "Retrieve documents by semantic similarity in embedding space — the backbone of modern retrieval systems.",
        items: ["ChromaDB", "Similarity Search", "Semantic Retrieval"],
        workLabel: "What I work with" },
      RERANKING: { icon: "⟐", title: "Reranking", sub: "Result Refinement",
        desc: "Rescore and reorder retrieved candidates to improve relevance before context is passed to the language model.",
        items: ["Candidate Scoring", "Relevance Ordering", "Hybrid Signals"],
        workLabel: "What I work with" },
      PYTHON: { icon: "⚙", title: "Python", sub: "Primary Engineering Language",
        desc: "Primary language across AI and engineering projects — from retrieval pipelines to network diagnostics and data tools.",
        items: ["AI Engineering", "Backend Logic", "Automation", "APIs", "Data Processing"],
        workLabel: "What I work with" },
      LANGCHAIN: { icon: "⛓", title: "LangChain", sub: "LLM Application Framework",
        desc: "Modular building blocks for LLM and RAG pipelines — chains, retrievers, memory, and model integration.",
        items: ["Chains", "Retrievers", "Memory", "LLM Integration", "Query Processing"],
        workLabel: "What I work with" },
      CHROMADB: { icon: "⬢", title: "ChromaDB", sub: "Vector Database",
        desc: "Store and query embeddings for semantic retrieval, enabling persistent vector search in RAG systems.",
        items: ["Embedding Storage", "Similarity Query", "Persistent Index"],
        workLabel: "What I work with" },
      BM25: { icon: "▣", title: "BM25", sub: "Keyword Retrieval",
        desc: "Classical ranking function for keyword-based retrieval and as a component of hybrid search alongside dense vectors.",
        items: ["Keyword Matching", "Hybrid Search", "Lexical Signals"],
        workLabel: "What I work with" },
      "AI SYSTEMS": { icon: "⬡", title: "AI Systems", sub: "End-to-End Pipelines",
        desc: "Modular AI pipelines connect retrieval, processing, reasoning, and generation into maintainable software systems.",
        items: ["Architecture", "Orchestration", "Evaluation", "Deployment"],
        workLabel: "What I work with" }
    },
    de: {
      RAG: { icon: "◈", title: "RAG", sub: "Retrieval-Augmented Generation",
        desc: "Ein System, das relevante Informationen aus externen Wissensquellen abruft, bevor eine Antwort mit einem LLM erzeugt wird.",
        how: "So funktioniert es",
        pipeline: "Dokumente → Chunking → Embeddings → Retrieval → Reranking → LLM → Antwort",
        items: ["Dokumentenaufnahme", "Chunking", "Embeddings", "Vektorsuche", "BM25", "Hybrides Retrieval", "Reranking", "Query Rewriting", "LLM-Antwort"],
        workLabel: "Womit ich arbeite" },
      LLM: { icon: "⌬", title: "LLM", sub: "Große Sprachmodelle",
        desc: "Große Sprachmodelle ermöglichen Generierung, Reasoning und strukturierte Ausgaben. Sie bilden die Generierungsschicht nach Retrieval und Kontextaufbau.",
        items: ["Prompt Engineering", "Kontextmanagement", "Antwortgenerierung", "Modellintegration"],
        workLabel: "Womit ich arbeite" },
      EMBEDDINGS: { icon: "◎", title: "Embeddings", sub: "Semantische Vektorrepräsentationen",
        desc: "Text in numerische Darstellungen umwandeln für semantische Ähnlichkeit und Retrieval über Dokumentensammlungen.",
        items: ["Semantische Repräsentation", "Vektorisierung", "Ähnlichkeitssuche", "Retrieval"],
        workLabel: "Womit ich arbeite" },
      "VECTOR SEARCH": { icon: "⬡", title: "Vector Search", sub: "Semantisches Retrieval",
        desc: "Dokumente anhand semantischer Ähnlichkeit im Embedding-Raum abrufen — das Rückgrat moderner Retrieval-Systeme.",
        items: ["ChromaDB", "Ähnlichkeitssuche", "Semantisches Retrieval"],
        workLabel: "Womit ich arbeite" },
      RERANKING: { icon: "⟐", title: "Reranking", sub: "Ergebnisverfeinerung",
        desc: "Abgerufene Kandidaten neu bewerten und sortieren, um die Relevanz zu verbessern, bevor der Kontext an das Sprachmodell geht.",
        items: ["Kandidatenbewertung", "Relevanzordnung", "Hybride Signale"],
        workLabel: "Womit ich arbeite" },
      PYTHON: { icon: "⚙", title: "Python", sub: "Primäre Engineering-Sprache",
        desc: "Primäre Sprache in KI- und Engineering-Projekten — von Retrieval-Pipelines bis Netzwerkdiagnose und Datenwerkzeuge.",
        items: ["KI-Engineering", "Backend-Logik", "Automatisierung", "APIs", "Datenverarbeitung"],
        workLabel: "Womit ich arbeite" },
      LANGCHAIN: { icon: "⛓", title: "LangChain", sub: "LLM-Anwendungsframework",
        desc: "Modulare Bausteine für LLM- und RAG-Pipelines — Chains, Retriever, Memory und Modellintegration.",
        items: ["Chains", "Retriever", "Memory", "LLM-Integration", "Query-Verarbeitung"],
        workLabel: "Womit ich arbeite" },
      CHROMADB: { icon: "⬢", title: "ChromaDB", sub: "Vektordatenbank",
        desc: "Embeddings speichern und abfragen für semantisches Retrieval und persistenten Vektorsuche in RAG-Systemen.",
        items: ["Embedding-Speicher", "Ähnlichkeitsabfrage", "Persistenter Index"],
        workLabel: "Womit ich arbeite" },
      BM25: { icon: "▣", title: "BM25", sub: "Keyword-Retrieval",
        desc: "Klassische Ranking-Funktion für keyword-basiertes Retrieval und als Bestandteil hybrider Suche neben dichten Vektoren.",
        items: ["Keyword-Matching", "Hybride Suche", "Lexikalische Signale"],
        workLabel: "Womit ich arbeite" },
      "AI SYSTEMS": { icon: "⬡", title: "AI Systems", sub: "End-to-End-Pipelines",
        desc: "Modulare KI-Pipelines verbinden Retrieval, Verarbeitung, Reasoning und Generierung zu wartbaren Softwaresystemen.",
        items: ["Architektur", "Orchestrierung", "Evaluation", "Deployment"],
        workLabel: "Womit ich arbeite" }
    },
    fr: {
      RAG: { icon: "◈", title: "RAG", sub: "Génération augmentée par récupération",
        desc: "Système qui récupère des informations pertinentes depuis des sources externes avant de générer une réponse avec un LLM.",
        how: "Comment ça fonctionne",
        pipeline: "Documents → Chunking → Embeddings → Retrieval → Reranking → LLM → Réponse",
        items: ["Ingestion de documents", "Chunking", "Embeddings", "Recherche vectorielle", "BM25", "Retrieval hybride", "Reranking", "Réécriture de requêtes", "Réponse LLM"],
        workLabel: "Ce avec quoi je travaille" },
      LLM: { icon: "⌬", title: "LLM", sub: "Grands modèles de langage",
        desc: "Les grands modèles de langage alimentent la génération, le raisonnement et les sorties structurées. Ils forment la couche de génération après le retrieval.",
        items: ["Prompt engineering", "Gestion du contexte", "Génération de réponses", "Intégration de modèles"],
        workLabel: "Ce avec quoi je travaille" },
      EMBEDDINGS: { icon: "◎", title: "Embeddings", sub: "Représentations vectorielles sémantiques",
        desc: "Convertir le texte en représentations numériques pour la similarité sémantique et le retrieval sur des collections de documents.",
        items: ["Représentation sémantique", "Vectorisation", "Recherche de similarité", "Retrieval"],
        workLabel: "Ce avec quoi je travaille" },
      "VECTOR SEARCH": { icon: "⬡", title: "Vector Search", sub: "Retrieval sémantique",
        desc: "Récupérer des documents par similarité sémantique dans l'espace d'embeddings — le cœur des systèmes de retrieval modernes.",
        items: ["ChromaDB", "Recherche de similarité", "Retrieval sémantique"],
        workLabel: "Ce avec quoi je travaille" },
      RERANKING: { icon: "⟐", title: "Reranking", sub: "Affinage des résultats",
        desc: "Rescorer et réordonner les candidats récupérés pour améliorer la pertinence avant le passage du contexte au modèle de langage.",
        items: ["Scoring des candidats", "Ordre de pertinence", "Signaux hybrides"],
        workLabel: "Ce avec quoi je travaille" },
      PYTHON: { icon: "⚙", title: "Python", sub: "Langage d'ingénierie principal",
        desc: "Langage principal des projets IA et d'ingénierie — des pipelines de retrieval aux diagnostics réseau et outils de données.",
        items: ["Ingénierie IA", "Logique backend", "Automatisation", "APIs", "Traitement de données"],
        workLabel: "Ce avec quoi je travaille" },
      LANGCHAIN: { icon: "⛓", title: "LangChain", sub: "Framework d'applications LLM",
        desc: "Blocs modulaires pour pipelines LLM et RAG — chains, retrievers, mémoire et intégration de modèles.",
        items: ["Chains", "Retrievers", "Mémoire", "Intégration LLM", "Traitement de requêtes"],
        workLabel: "Ce avec quoi je travaille" },
      CHROMADB: { icon: "⬢", title: "ChromaDB", sub: "Base de données vectorielle",
        desc: "Stocker et interroger des embeddings pour le retrieval sémantique et la recherche vectorielle persistante dans les systèmes RAG.",
        items: ["Stockage d'embeddings", "Requête de similarité", "Index persistant"],
        workLabel: "Ce avec quoi je travaille" },
      BM25: { icon: "▣", title: "BM25", sub: "Retrieval lexical",
        desc: "Fonction de ranking classique pour le retrieval par mots-clés et comme composant de la recherche hybride avec des vecteurs denses.",
        items: ["Correspondance lexicale", "Recherche hybride", "Signaux lexicaux"],
        workLabel: "Ce avec quoi je travaille" },
      "AI SYSTEMS": { icon: "⬡", title: "AI Systems", sub: "Pipelines de bout en bout",
        desc: "Des pipelines IA modulaires relient retrieval, traitement, raisonnement et génération en systèmes logiciels maintenables.",
        items: ["Architecture", "Orchestration", "Évaluation", "Déploiement"],
        workLabel: "Ce avec quoi je travaille" }
    },
    ar: {
      RAG: { icon: "◈", title: "RAG", sub: "التوليد المعزز بالاسترجاع",
        desc: "نظام يسترجع معلومات ذات صلة من مصادر معرفة خارجية قبل توليد إجابة باستخدام نموذج لغة كبير.",
        how: "كيف يعمل",
        pipeline: "مستندات → تجزئة → تضمينات → استرجاع → إعادة ترتيب → نموذج لغة → إجابة",
        items: ["استيعاب المستندات", "التجزئة", "التضمينات", "البحث المتجهي", "BM25", "الاسترجاع الهجين", "إعادة الترتيب", "إعادة صياغة الاستعلام", "استجابة النموذج"],
        workLabel: "ما أعمل به" },
      LLM: { icon: "⌬", title: "LLM", sub: "نماذج اللغة الكبيرة",
        desc: "تمكّن نماذج اللغة الكبيرة من التوليد والاستدلال والمخرجات المنظمة. تشكّل طبقة التوليد بعد الاسترجاع وتجميع السياق.",
        items: ["هندسة الأوامر", "إدارة السياق", "توليد الاستجابات", "تكامل النماذج"],
        workLabel: "ما أعمل به" },
      EMBEDDINGS: { icon: "◎", title: "Embeddings", sub: "تمثيلات متجهية دلالية",
        desc: "تحويل النص إلى تمثيلات رقمية للتشابه الدلالي والاسترجاع عبر مجموعات المستندات.",
        items: ["التمثيل الدلالي", "التحويل إلى متجهات", "البحث بالتشابه", "الاسترجاع"],
        workLabel: "ما أعمل به" },
      "VECTOR SEARCH": { icon: "⬡", title: "Vector Search", sub: "الاسترجاع الدلالي",
        desc: "استرجاع المستندات حسب التشابه الدلالي في فضاء التضمينات — أساس أنظمة الاسترجاع الحديثة.",
        items: ["ChromaDB", "البحث بالتشابه", "الاسترجاع الدلالي"],
        workLabel: "ما أعمل به" },
      RERANKING: { icon: "⟐", title: "Reranking", sub: "تحسين النتائج",
        desc: "إعادة تقييم وترتيب المرشحين المسترجعين لتحسين الصلة قبل تمرير السياق إلى نموذج اللغة.",
        items: ["تقييم المرشحين", "ترتيب الصلة", "إشارات هجينة"],
        workLabel: "ما أعمل به" },
      PYTHON: { icon: "⚙", title: "Python", sub: "لغة الهندسة الأساسية",
        desc: "اللغة الأساسية في مشاريع الذكاء الاصطناعي والهندسة — من خطوط الاسترجاع إلى تشخيص الشبكات وأدوات البيانات.",
        items: ["هندسة الذكاء الاصطناعي", "منطق الخلفية", "الأتمتة", "واجهات البرمجة", "معالجة البيانات"],
        workLabel: "ما أعمل به" },
      LANGCHAIN: { icon: "⛓", title: "LangChain", sub: "إطار تطبيقات نماذج اللغة",
        desc: "لبنات معيارية لخطوط نماذج اللغة وRAG — سلاسل ومسترجعات وذاكرة وتكامل النماذج.",
        items: ["السلاسل", "المسترجعات", "الذاكرة", "تكامل النماذج", "معالجة الاستعلامات"],
        workLabel: "ما أعمل به" },
      CHROMADB: { icon: "⬢", title: "ChromaDB", sub: "قاعدة بيانات متجهية",
        desc: "تخزين واستعلام التضمينات للاسترجاع الدلالي والبحث المتجهي المستمر في أنظمة RAG.",
        items: ["تخزين التضمينات", "استعلام التشابه", "فهرس مستمر"],
        workLabel: "ما أعمل به" },
      BM25: { icon: "▣", title: "BM25", sub: "الاسترجاع بالكلمات",
        desc: "دالة ترتيب كلاسيكية للاسترجاع بالكلمات المفتاحية وكمكوّن في البحث الهجين مع المتجهات الكثيفة.",
        items: ["مطابقة الكلمات", "البحث الهجين", "إشارات معجمية"],
        workLabel: "ما أعمل به" },
      "AI SYSTEMS": { icon: "⬡", title: "AI Systems", sub: "خطوط من طرف إلى طرف",
        desc: "تربط خطوط الذكاء الاصطناعي المعيارية الاسترجاع والمعالجة والاستدلال والتوليد في أنظمة برمجية قابلة للصيانة.",
        items: ["الهندسة المعمارية", "التنسيق", "التقييم", "النشر"],
        workLabel: "ما أعمل به" }
    }
  };

  function getAIContent(key) {
    const lang = currentLang || "en";
    const pack = AI_CONTENT[lang] || AI_CONTENT.en;
    return pack[key] || (AI_CONTENT.en && AI_CONTENT.en[key]) || null;
  }

  window.MT = { t, applyI18n, getLang: () => currentLang, applyTheme, toggleTheme, getAIContent, AI_CONTENT };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { initTheme(); initLang(); });
  } else {
    initTheme();
    initLang();
  }
})();
