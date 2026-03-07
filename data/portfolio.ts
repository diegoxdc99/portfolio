import type { PortfolioData } from "@/types";

export const portfolio: PortfolioData = {
  // ─── Basics ─────────────────────────────────────────────────────────────────
  basics: {
    name: "Diego Alberto Meneses Tamayo",
    shortName: "Diego Meneses",
    headline: {
      en: "Backend Engineer",
      es: "Ingeniero Backend",
    },
    subheadline: {
      en: "I design and build scalable backend systems using Node.js, NestJS and cloud infrastructure.",
      es: "Diseño y construyo sistemas backend escalables con Node.js, NestJS e infraestructura cloud.",
    },
    location: "Colombia",
    avatarUrl: "/avatar.jpg",
  },

  // ─── Summary ────────────────────────────────────────────────────────────────
  summary: {
    en: "10+ years building production systems. Expert in Node.js, NestJS, and cloud architecture (AWS/GCP) with hybrid persistence (PostgreSQL/MongoDB/Redis). Focused on scalable microservices, technical mentoring, and AI-powered observability.",
    es: "Más de 10 años construyendo sistemas en producción. Experto en Node.js, NestJS y arquitectura cloud (AWS/GCP) con persistencia híbrida (PostgreSQL/MongoDB/Redis). Enfocado en microservicios escalables, mentoría técnica y observabilidad potenciada por IA.",
  },

  // ─── Navigation ─────────────────────────────────────────────────────────────
  nav: [
    { label: { en: "Home", es: "Inicio" }, href: "#home" },
    { label: { en: "Experience", es: "Experiencia" }, href: "#experience" },
    { label: { en: "Stack", es: "Stack" }, href: "#stack" },
    { label: { en: "Principles", es: "Principios" }, href: "#principles" },
    { label: { en: "Contact", es: "Contacto" }, href: "#contact" },
  ],

  // ─── Tech Badges (Hero) ─────────────────────────────────────────────────────
  techBadges: [
    {
      id: "nodejs",
      name: "Node.js",
      hoverColor: "hover:border-green-500/30",
      iconColor: "group-hover:text-green-500",
    },
    {
      id: "nestjs",
      name: "NestJS",
      hoverColor: "hover:border-red-500/30",
      iconColor: "group-hover:text-red-500",
    },
    {
      id: "typescript",
      name: "TypeScript",
      hoverColor: "hover:border-blue-400/30",
      iconColor: "group-hover:text-blue-400",
    },
    {
      id: "databases",
      name: "PostgreSQL",
      hoverColor: "hover:border-cyan-400/30",
      iconColor: "group-hover:text-cyan-400",
    },
    {
      id: "redis",
      name: "Redis",
      hoverColor: "hover:border-red-400/30",
      iconColor: "group-hover:text-red-400",
    },
    {
      id: "cloud",
      name: "AWS / GCP",
      hoverColor: "hover:border-amber-400/30",
      iconColor: "group-hover:text-amber-400",
    },
  ],

  // ─── Floating Cards (Hero) ──────────────────────────────────────────────────
  floatingCards: [
    {
      id: "cloud",
      category: { en: "Cloud", es: "Cloud" },
      value: "GCP / AWS",
      position: "top-right",
      accentClass: "text-blue-400 group-hover:border-blue-400/50",
    },
    {
      id: "database",
      category: { en: "Data", es: "Datos" },
      value: "Postgres / Mongo",
      position: "bottom-right",
      accentClass: "text-purple-400 group-hover:border-purple-400/50",
    },
    {
      id: "security",
      category: { en: "Security", es: "Seguridad" },
      value: "JWT",
      position: "bottom-left",
      accentClass: "text-red-400 group-hover:border-red-400/50",
    },
    {
      id: "devops",
      category: { en: "DevOps", es: "DevOps" },
      value: "Docker",
      position: "top-left",
      accentClass: "text-emerald-400 group-hover:border-emerald-400/50",
    },
  ],

  // ─── Experience ─────────────────────────────────────────────────────────────
  experience: [
    {
      id: "globant-sr",
      company: "Globant",
      position: {
        en: "Sr. Node.js Developer",
        es: "Desarrollador Node.js Sr.",
      },
      description: {
        en: "Monetization platform for a major streaming service.",
        es: "Plataforma de monetización para un servicio de streaming de gran escala.",
      },
      date: "Jul 2024 – Present",
      current: true,
      highlights: [
        {
          en: "Designed greenfield microservices architecture on GCP with NestJS for the monetization ecosystem.",
          es: "Arquitectura de microservicios greenfield en GCP con NestJS para el ecosistema de monetización.",
        },
        {
          en: "Built loyalty system: points program with accumulation and redemption for subscriptions.",
          es: "Sistema de fidelización: programa de puntos con acumulación y redención para suscripciones.",
        },
        {
          en: "Built Add-ons microservice to orchestrate third-party streaming platform access.",
          es: "Microservicio de Add-ons para orquestar acceso a plataformas de streaming de terceros.",
        },
        {
          en: "Maintained payment core (Recurly) with strict 100% test coverage (Jest/Vitest).",
          es: "Mantenimiento del core de pagos (Recurly) con estándar de 100% cobertura de pruebas (Jest/Vitest).",
        },
      ],
      tech: [
        "NestJS",
        "TypeScript",
        "GCP",
        "Recurly",
        "Jest",
        "Vitest",
        "Microservices",
      ],
    },
    {
      id: "globant-ssr",
      company: "Globant",
      position: {
        en: "Semi-Senior Node.js Developer",
        es: "Desarrollador Node.js Semi-Senior",
      },
      description: {
        en: "Billing and subscription management services for a streaming platform.",
        es: "Servicios de facturación y gestión de suscripciones para una plataforma de streaming.",
      },
      date: "Mar 2022 – Jul 2024",
      current: false,
      highlights: [
        {
          en: "Developed microservices for the monetization ecosystem: billing and subscription management.",
          es: "Desarrollo de microservicios para el ecosistema de monetización: facturación y gestión de suscripciones.",
        },
        {
          en: "Maintained and improved backend services, advancing toward senior engineering practices.",
          es: "Mantenimiento y mejora de servicios backend, avanzando hacia prácticas de ingeniería senior.",
        },
      ],
      tech: ["NestJS", "TypeScript", "Node.js", "GCP", "Jest"],
    },
    {
      id: "wolox",
      company: "Wolox (Accenture)",
      position: {
        en: "Software Developer",
        es: "Desarrollador de Software",
      },
      description: {
        en: "FinTech digital wallet and enterprise automotive platform.",
        es: "Billetera digital FinTech y plataforma automotriz enterprise.",
      },
      date: "Feb 2021 – Apr 2022",
      current: false,
      highlights: [
        {
          en: "Built backend for a digital wallet in Argentina with multi-bank integrations.",
          es: "Backend de billetera digital en Argentina con integraciones multi-banco.",
        },
        {
          en: "Built vehicle buy/sell platform with bidirectional Salesforce integration for inventory and CRM sync.",
          es: "Plataforma de compra/venta de vehículos con integración bidireccional de Salesforce.",
        },
        {
          en: "Internal Node.js Trainer: standardized TypeScript, Jest practices, and Docker/AWS architectures.",
          es: "Entrenador interno de Node.js: estandarizó TypeScript, prácticas de Jest y arquitecturas Docker/AWS.",
        },
      ],
      tech: [
        "Node.js",
        "TypeScript",
        "GraphQL",
        "Express",
        "Docker",
        "AWS",
        "Salesforce",
        "Jest",
      ],
    },
    {
      id: "sophos",
      company: "Sophos Solutions",
      position: {
        en: "System Analyst",
        es: "Analista de Sistemas",
      },
      description: {
        en: "Business analytics platform with Elasticsearch-powered metrics.",
        es: "Plataforma de analítica de negocio con métricas impulsadas por Elasticsearch.",
      },
      date: "Nov 2019 – Feb 2021",
      current: false,
      highlights: [
        {
          en: "Backend services interacting with Elasticsearch cluster to extract and expose business metrics.",
          es: "Servicios backend interactuando con clúster de Elasticsearch para extraer y exponer métricas de negocio.",
        },
        {
          en: "Implemented security layer: account control, authentication, and user management.",
          es: "Capa de seguridad: control de cuentas, autenticación y gestión de usuarios.",
        },
      ],
      tech: ["Node.js", "Elasticsearch", "Angular", "TypeScript"],
    },
    {
      id: "pragma",
      company: "PRAGMA S.A.",
      position: {
        en: "Software Developer",
        es: "Desarrollador de Software",
      },
      description: {
        en: "Virtual assistant (chatbot) orchestration platform on AWS.",
        es: "Plataforma de orquestación de asistentes virtuales (chatbots) en AWS.",
      },
      date: "2018 – 2019",
      current: false,
      highlights: [
        {
          en: "Backend services for orchestrating and managing virtual assistants on scalable AWS infrastructure.",
          es: "Servicios backend para orquestar y gestionar asistentes virtuales en infraestructura AWS escalable.",
        },
        {
          en: "Built admin panel with Angular: configuration and reporting features.",
          es: "Panel administrativo con Angular: funcionalidades de configuración y reportes.",
        },
      ],
      tech: ["Node.js", "AWS", "Angular", "JavaScript"],
    },
    {
      id: "ilimitada",
      company: "ilimitada S.A.S.",
      position: {
        en: "Programmer Analyst",
        es: "Analista Programador",
      },
      description: {
        en: "Corporate HR application ecosystem.",
        es: "Ecosistema de aplicaciones corporativas de RRHH.",
      },
      date: "May 2016 – Apr 2018",
      current: false,
      highlights: [
        {
          en: "Led technical strategy and development of the HR application ecosystem.",
          es: "Lideré la estrategia técnica y desarrollo del ecosistema de aplicaciones de RRHH.",
        },
        {
          en: "Managed full software lifecycle for corporate in-house solutions.",
          es: "Gestión del ciclo de vida completo de soluciones de software corporativas.",
        },
      ],
      tech: ["JavaScript", "HTML/CSS", "SQL", "Node.js"],
    },
    {
      id: "politecnico",
      company: "Politécnico Colombiano Jaime Isaza Cadavid",
      position: {
        en: "Teaching Assistant",
        es: "Auxiliar de Docencia",
      },
      description: {
        en: "Requirements Engineering academic program.",
        es: "Programa académico de Ingeniería de Requisitos.",
      },
      date: "Aug 2015 – Dec 2015",
      current: false,
      highlights: [
        {
          en: "Academic tutoring in Requirements Engineering and software design.",
          es: "Tutoría académica en Ingeniería de Requisitos y diseño de software.",
        },
      ],
      tech: ["Requirements Engineering", "UML", "Software Design"],
    },
  ],

  // ─── Tech Stack ─────────────────────────────────────────────────────────────
  techStack: [
    {
      id: "backend",
      name: { en: "Backend", es: "Backend" },
      keywords: ["Node.js", "NestJS", "TypeScript", "Express", "GraphQL"],
    },
    {
      id: "infrastructure",
      name: { en: "Infrastructure", es: "Infraestructura" },
      keywords: ["AWS", "GCP", "Docker", "CI/CD", "Serverless"],
    },
    {
      id: "databases",
      name: { en: "Databases", es: "Bases de Datos" },
      keywords: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
      id: "tools",
      name: { en: "Tools & Practices", es: "Herramientas y Prácticas" },
      keywords: ["Jest", "Vitest", "Git", "Agile / Scrum", "Microservices"],
    },
  ],

  // ─── Engineering Principles ─────────────────────────────────────────────────
  principles: [
    {
      id: "scale",
      title: {
        en: "Build Systems That Scale",
        es: "Construir Sistemas Que Escalen",
      },
      description: {
        en: "Design for growth from day one.",
        es: "Diseñar para el crecimiento desde el día uno.",
      },
      icon: "trending-up",
    },
    {
      id: "simplicity",
      title: {
        en: "Simplicity Over Complexity",
        es: "Simplicidad Sobre Complejidad",
      },
      description: {
        en: "The best code is the code you don't write.",
        es: "El mejor código es el que no necesitas escribir.",
      },
      icon: "minimize",
    },
    {
      id: "observability",
      title: {
        en: "Observability First",
        es: "Observabilidad Primero",
      },
      description: {
        en: "If you can't measure it, you can't improve it.",
        es: "Si no puedes medirlo, no puedes mejorarlo.",
      },
      icon: "activity",
    },
    {
      id: "automation",
      title: {
        en: "Automate Repetitive Work",
        es: "Automatizar Trabajo Repetitivo",
      },
      description: {
        en: "Focus engineering time on what matters.",
        es: "Enfocar el tiempo de ingeniería en lo que importa.",
      },
      icon: "zap",
    },
  ],

  // ─── Social Links ────────────────────────────────────────────────────────────
  social: [
    {
      id: "linkedin",
      network: "LinkedIn",
      username: "diegomenesest",
      href: "https://www.linkedin.com/in/diegomenesest/",
      icon: "linkedin",
    },
    {
      id: "github",
      network: "GitHub",
      username: "diegoxdc99",
      href: "https://github.com/diegoxdc99",
      icon: "github",
    },
  ],
};
