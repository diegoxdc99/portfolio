import type { PortfolioData } from "@/types";

export const portfolio: PortfolioData = {
  // ─── Basics ─────────────────────────────────────────────────────────────────
  basics: {
    name: "Diego Alberto Meneses Tamayo",
    shortName: "Diego Meneses",
    headline: {
      en: "Senior Backend Engineer",
      es: "Ingeniero Backend Senior",
    },
    subheadline: {
      en: "Node.js · NestJS · Cloud Architecture",
      es: "Node.js · NestJS · Arquitectura en la Nube",
    },
    location: "Colombia",
    avatarUrl: "/avatar.jpg",
  },

  // ─── Summary ────────────────────────────────────────────────────────────────
  summary: {
    en: "Senior Backend Engineer with 10+ years designing scalable cloud architectures (AWS/GCP). Expert in the Node.js and NestJS ecosystem with hybrid persistence (PostgreSQL/MongoDB/Redis). Focused on technical innovation including AI-powered observability tools, and active as a technical reference and mentor within my teams.",
    es: "Ingeniero de Backend Senior con más de 10 años de experiencia diseñando arquitecturas escalables en la nube (AWS/GCP). Experto en el ecosistema Node.js y NestJS, con dominio de persistencia híbrida (PostgreSQL/MongoDB/Redis). Enfocado en la innovación técnica y en el desarrollo de herramientas de observabilidad potenciadas por IA. Referente técnico y mentor activo en mis equipos.",
  },

  // ─── Navigation ─────────────────────────────────────────────────────────────
  nav: [
    { label: { en: "Home", es: "Inicio" }, href: "#home" },
    { label: { en: "Experience", es: "Experiencia" }, href: "#experience" },
    { label: { en: "Skills", es: "Habilidades" }, href: "#skills" },
    { label: { en: "Contact", es: "Contacto" }, href: "#contact" },
  ],

  // ─── Tech Badges (Hero) ─────────────────────────────────────────────────────
  techBadges: [
    {
      id: "nestjs",
      name: "NestJS",
      hoverColor: "hover:border-red-500/30",
      iconColor: "group-hover:text-red-500",
    },
    {
      id: "nodejs",
      name: "Node.js",
      hoverColor: "hover:border-green-500/30",
      iconColor: "group-hover:text-green-500",
    },
    {
      id: "typescript",
      name: "TypeScript",
      hoverColor: "hover:border-blue-400/30",
      iconColor: "group-hover:text-blue-400",
    },
    {
      id: "databases",
      name: "SQL/NoSQL",
      hoverColor: "hover:border-cyan-400/30",
      iconColor: "group-hover:text-cyan-400",
    },
    {
      id: "redis",
      name: "Redis",
      hoverColor: "hover:border-red-400/30",
      iconColor: "group-hover:text-red-400",
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
      date: "Jul 2024 – Present",
      current: true,
      highlights: [
        {
          en: "Greenfield microservices architecture on GCP with NestJS, designed and built from scratch for the monetization ecosystem.",
          es: "Arquitectura de microservicios (Greenfield) en GCP con NestJS, diseñada y desarrollada desde cero para el ecosistema de monetización.",
        },
        {
          en: "Loyalty system: integrated a points program allowing users to accumulate and redeem balance for subscriptions.",
          es: "Sistema de fidelización: integración de programa de puntos para que los usuarios acumulen y rediman saldo en suscripciones.",
        },
        {
          en: "Partnerships & Bundling: built the Add-ons microservice to orchestrate access to third-party streaming platforms.",
          es: "Gestión de alianzas y bundling: construcción del microservicio de Add-ons para orquestar el acceso a plataformas de streaming de terceros.",
        },
        {
          en: "Payment core maintenance (Recurly) with strict 100% test coverage standard (Jest/Vitest).",
          es: "Mantenimiento del core de pagos (Recurly) con estándar estricto de 100% de cobertura de pruebas (Jest/Vitest).",
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
      date: "Mar 2022 – Jul 2024",
      current: false,
      highlights: [
        {
          en: "Microservices development for the monetization ecosystem, delivering features for billing and subscription management.",
          es: "Desarrollo de microservicios para el ecosistema de monetización, entregando funcionalidades de facturación y gestión de suscripciones.",
        },
        {
          en: "Maintained and improved existing backend services, advancing toward senior engineering practices.",
          es: "Mantenimiento y mejora de servicios backend existentes, avanzando hacia prácticas de ingeniería senior.",
        },
      ],
      tech: ["NestJS", "TypeScript", "Node.js", "GCP", "Jest"],
    },
    {
      id: "wolox",
      company: "Wolox (an Accenture company)",
      position: {
        en: "Software Developer",
        es: "Desarrollador de Software",
      },
      date: "Feb 2021 – Apr 2022",
      current: false,
      highlights: [
        {
          en: "FinTech & Payments (Virtual Wallet): built the backend for a digital wallet in Argentina with integrations to multiple banking institutions.",
          es: "FinTech y pagos (billetera virtual): desarrollo del backend para una billetera digital en Argentina con integraciones a múltiples entidades bancarias.",
        },
        {
          en: "Enterprise Integration (Automotive): built the vehicle buy/sell platform with bidirectional Salesforce integration for inventory and CRM sync.",
          es: "Integración enterprise (automotriz): construcción de la plataforma de compra/venta de vehículos con integración bidireccional de Salesforce.",
        },
        {
          en: "Leadership & Training: served as internal Node.js Trainer, standardizing TypeScript, Jest testing practices, and Docker/AWS architectures.",
          es: "Liderazgo y capacitación: actuó como Entrenador de Node.js interno, estandarizando TypeScript, buenas prácticas con Jest y arquitecturas Docker/AWS.",
        },
        {
          en: "Migrated and implemented modern APIs using GraphQL and Express.",
          es: "Migración e implementación de APIs modernas con GraphQL y Express.",
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
      company: "Sophos Solutions S.A.S.",
      position: {
        en: "System Analyst",
        es: "Analista de Sistemas",
      },
      date: "Nov 2019 – Feb 2021",
      current: false,
      highlights: [
        {
          en: "Backend Node.js services interacting with the Elasticsearch cluster to extract and expose business metrics.",
          es: "Servicios backend en Node.js para interactuar con el clúster de Elasticsearch, extrayendo y exponiendo métricas de negocio.",
        },
        {
          en: "Implemented business logic and security layer including account control, authentication, and user management.",
          es: "Implementación de la lógica de negocio y seguridad, incluyendo control de cuentas, autenticación y gestión de usuarios.",
        },
        {
          en: "Full Stack: built the Angular interface to visualize analytical data clearly.",
          es: "Rol Full Stack: construcción de la interfaz Angular para visualizar la información analítica de forma clara.",
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
      date: "2018 – 2019",
      current: false,
      highlights: [
        {
          en: "Backend Node.js services for orchestrating and managing Virtual Assistants (Chatbots) on scalable AWS infrastructure.",
          es: "Servicios backend en Node.js para la orquestación y gestión de Asistentes Virtuales (Chatbots) sobre infraestructura AWS.",
        },
        {
          en: "Built and maintained the system admin panel using Angular, adding configuration and reporting features.",
          es: "Construcción y mantenimiento del panel administrativo del sistema con Angular, implementando funcionalidades de configuración y reportes.",
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
      date: "May 2016 – Apr 2018",
      current: false,
      highlights: [
        {
          en: "Led technical strategy and development of the HR application ecosystem, defining quality standards and architecture.",
          es: "Lideré la estrategia técnica y el desarrollo del ecosistema de aplicaciones de RRHH, definiendo estándares de calidad y arquitectura.",
        },
        {
          en: "Managed the full software lifecycle for corporate in-house solutions, ensuring evolutionary maintenance and stability.",
          es: "Gestioné el ciclo de vida completo de las soluciones de software corporativas, asegurando mantenimiento evolutivo y estabilidad.",
        },
        {
          en: "Drove innovation participating in the architecture and launch of new strategic projects from their inception.",
          es: "Impulsé la innovación participando en la arquitectura y puesta en marcha de nuevos proyectos estratégicos desde su concepción.",
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
      date: "Aug 2015 – Dec 2015",
      current: false,
      highlights: [
        {
          en: "Provided academic tutoring and support to students in Requirements Engineering.",
          es: "Brindé tutoría académica y acompañamiento a estudiantes en la asignatura de Ingeniería de Requisitos.",
        },
        {
          en: "Collaborated on class planning and creation of educational materials to facilitate technical learning.",
          es: "Colaboré en la planificación de clases y elaboración de material didáctico para facilitar el aprendizaje técnico.",
        },
      ],
      tech: ["Requirements Engineering", "UML", "Software Design"],
    },
  ],

  // ─── Skills ─────────────────────────────────────────────────────────────────
  skills: [
    {
      id: "backend",
      name: { en: "Backend & Core", es: "Backend y Core" },
      level: 5,
      keywords: ["Node.js", "NestJS", "TypeScript", "Unit Testing"],
    },
    {
      id: "cloud",
      name: { en: "Cloud & DevOps", es: "Cloud y DevOps" },
      level: 4,
      keywords: ["GCP", "AWS", "Docker", "CI/CD Pipelines", "Serverless"],
    },
    {
      id: "databases",
      name: { en: "Databases & Data", es: "Bases de Datos y Datos" },
      level: 4,
      keywords: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
      id: "leadership",
      name: { en: "Technical Leadership", es: "Liderazgo Técnico" },
      level: 4,
      keywords: [
        "Tech Leadership",
        "Mentoring & Training",
        "Agile Methodologies",
      ],
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

