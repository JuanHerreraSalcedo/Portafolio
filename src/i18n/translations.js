export const translations = {
  // ─────────────────────────────────────────────────────────────
  // ESPAÑOL
  // ─────────────────────────────────────────────────────────────
  es: {
    nav: {
      about: 'Sobre mí',
      stack: 'Stack',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para trabajo freelance',
      roles: [
        'Desarrollador Frontend',
        'Especialista en Automatización',
        'Experto en Make.com & n8n',
        'Integración de APIs',
      ],
      scroll: 'Scroll',
    },
    about: {
      label: 'Quién soy',
      title: 'Sobre mí',
      // Bio segments – keeps JSX highlighting intact
      bio1pre: 'Soy un',
      bio1role1: 'Desarrollador Frontend',
      bio1and: 'y',
      bio1role2: 'Especialista en Automatización',
      bio1rest:
        'apasionado por construir interfaces limpias y flujos de trabajo inteligentes. Creo experiencias web modernas usando HTML, CSS, JavaScript, Angular y WordPress — y automatizo procesos de negocio complejos usando Make.com, n8n e integraciones de APIs REST.',
      bio2pre: 'Actualmente en',
      bio2cont: ', he contribuido a generar más de',
      bio2leads: '3,000+ leads calificados',
      bio2for: 'para más de',
      bio2clients: '6+ clientes enterprise',
      bio2end: ', gestionando integraciones críticas como IgnitePost y la API de GiftSenda.',
      bio3pre: 'Profundamente interesado en el',
      bio3ai: 'ecosistema de IA',
      bio3end: '— Claude AI, Servidores MCP y diseño de flujos de trabajo inteligentes.',
      tags: ['Desarrollador Frontend', 'Automatización', 'Flujos de IA', 'Integración de APIs', 'Make.com', 'n8n'],
      openToWork: 'Disponible para trabajo',
      specialty: 'Frontend + Automatización',
    },
    stack: {
      label: 'Qué uso',
      title: 'Stack Tecnológico',
      frontend: 'Frontend y Herramientas',
      automation: 'Automatización e IA',
      automationLabels: {
        make: 'Experto en Workflows',
        n8n: 'En crecimiento',
        anthropic: 'Ecosistema de IA',
        mcp: 'Integraciones Claude',
      },
    },
    metrics: {
      label: 'Impacto real',
      title: 'En Números',
      subtitle: 'Resultados medibles de proyectos en producción en Groundwork/SEOMarketing',
      items: [
        { label: 'Leads calificados generados' },
        { label: 'Clientes enterprise' },
        { label: 'Integraciones de APIs activas' },
        { label: 'Mejora de velocidad web' },
      ],
    },
    projects: {
      label: 'Portafolio',
      title: 'Proyectos Destacados',
      subtitle:
        'Desde juegos de navegador hasta automatización enterprise — proyectos personales, freelance y producción',
      liveDemo: 'Demo en vivo',
      repository: 'Repositorio',
      statusLive: 'Activo',
      statusLiveProd: 'Activo en producción',
      statusTesting: 'En pruebas — Q2 2026',
      internal: 'Interno',
      featuredBadge: 'Destacado',
      aiBadge: 'Proyecto IA',
      items: [
        {
          title: 'Blueprint API — Automatización de Auditorías IA',
          description:
            'API REST en producción que automatiza la entrega del AI Opportunity Audit de Groundwork. Gestiona envío de formularios, llamadas a la Blueprint API, verificación de webhooks (HMAC-SHA256), entrega automatizada de emails y notificaciones Slack. Capa de seguridad con reCAPTCHA v3, rate limiting por IP y email, tokens de sesión únicos y rastro de auditoría completo vía tabla de jobs.',
        },
        {
          title: 'Competitive Edge Blueprint — Servidor MCP',
          description:
            'Servidor MCP en TypeScript que expone el Competitive Edge Blueprint de Groundwork a cualquier cliente compatible — Claude Desktop, Cursor y Morgan PM Engine. Implementa patrón async de 3 herramientas (run → status → result), cola de jobs con máximo 3 ejecuciones concurrentes, caché de resultados de 72h en Redis, transportes SSE + stdio y autenticación por API key por cliente.',
        },
        {
          title: 'Minijuego en JavaScript',
          description:
            'Juego de navegador donde los jugadores coleccionan objetos antes de que se acabe el tiempo. Desarrollado con JS puro enfocado en la lógica del juego y la experiencia de usuario.',
        },
        {
          title: 'Plataforma de Gestión Escolar',
          description:
            'Plataforma web con roles diferenciados para docentes, administradores y padres, para gestionar registros académicos, calificaciones y comunicación escolar. Proyecto de grado.',
        },
        {
          title: 'Lorelis Painting',
          description:
            'Sitio web personalizado para una empresa de remodelación del hogar en EE.UU. Tema responsive con mejora de rendimiento del 30% y mantenimiento continuo.',
        },
        {
          title: 'Automatización IgnitePost',
          description:
            'Automatización completa para campañas de correo directo activadas por webhooks de Buzz.ai. Activo en producción para los clientes SecureAuth y The Signatry.',
        },
        {
          title: 'Integración API GiftSenda',
          description:
            'Integración API completa para The Signatry, gestionando flujos OAuth, tokens de acceso y coordinación con el proveedor.',
        },
      ],
    },
    skills: {
      label: 'Experiencia',
      title: 'Habilidades',
      subtitle: 'Nivel estimado basado en experiencia en producción',
      frontend: 'Desarrollo Frontend',
      frontendSub: 'Interfaces web y UI',
      automation: 'Automatización e IA',
      automationSub: 'Flujos y automatización',
    },
    contact: {
      label: 'Contacto',
      title: 'Hablemos',
      subtitle: '¿Tienes un proyecto en mente o quieres colaborar? Cuéntame.',
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      subjectPlaceholder: 'Propuesta, colaboración, consulta...',
      messagePlaceholder: 'Cuéntame sobre tu proyecto o idea...',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      successTitle: '¡Mensaje enviado!',
      successSub: 'Me pondré en contacto pronto.',
      sendAnother: 'Enviar otro mensaje',
      errorNetwork: 'Error de red. Verifica tu conexión e intenta de nuevo.',
      errorGeneric: 'Algo salió mal. Por favor intenta de nuevo.',
    },
    footer: {
      role: 'Desarrollador Frontend y Especialista en Automatización',
      rights: 'Todos los derechos reservados',
      builtWith: 'Hecho con',
    },
  },

  // ─────────────────────────────────────────────────────────────
  // ENGLISH
  // ─────────────────────────────────────────────────────────────
  en: {
    nav: {
      about: 'About',
      stack: 'Stack',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for freelance work',
      roles: [
        'Frontend Developer',
        'Automation Specialist',
        'Make.com & n8n Expert',
        'API Integration Specialist',
      ],
      scroll: 'Scroll',
    },
    about: {
      label: 'Who I Am',
      title: 'About Me',
      bio1pre: "I'm a",
      bio1role1: 'Frontend Developer',
      bio1and: 'and',
      bio1role2: 'Automation Specialist',
      bio1rest:
        'passionate about building clean interfaces and intelligent workflows. I craft modern web experiences using HTML, CSS, JavaScript, Angular, and WordPress — and automate complex business processes using Make.com, n8n, and REST API integrations.',
      bio2pre: 'Currently at',
      bio2cont: ", I've contributed to generating",
      bio2leads: '3,000+ qualified leads',
      bio2for: 'across',
      bio2clients: '6+ enterprise clients',
      bio2end: ', owning critical integrations like IgnitePost and GiftSenda API.',
      bio3pre: 'Deeply interested in the',
      bio3ai: 'AI ecosystem',
      bio3end: '— Claude AI, MCP Servers, and intelligent workflow design.',
      tags: ['Frontend Dev', 'Automation', 'AI Workflows', 'API Integration', 'Make.com', 'n8n'],
      openToWork: 'Open to work',
      specialty: 'Frontend + Automation',
    },
    stack: {
      label: 'What I Use',
      title: 'Tech Stack',
      frontend: 'Frontend & Tools',
      automation: 'Automation & AI',
      automationLabels: {
        make: 'Workflow Owner',
        n8n: 'Growing',
        anthropic: 'AI Ecosystem',
        mcp: 'Claude Integrations',
      },
    },
    metrics: {
      label: 'Real-World Impact',
      title: 'By the Numbers',
      subtitle: 'Measurable results from production work at Groundwork/SEOMarketing',
      items: [
        { label: 'Qualified Leads Generated' },
        { label: 'Enterprise Clients' },
        { label: 'Active API Integrations' },
        { label: 'Page Speed Improvement' },
      ],
    },
    projects: {
      label: 'Portfolio',
      title: 'Featured Projects',
      subtitle:
        'From browser games to enterprise automation — a mix of personal, freelance, and production work',
      liveDemo: 'Live Demo',
      repository: 'Repository',
      statusLive: 'Live',
      statusLiveProd: 'Live in production',
      statusTesting: 'In testing — Q2 2026',
      internal: 'Internal',
      featuredBadge: 'Featured',
      aiBadge: 'AI Project',
      items: [
        {
          title: 'Blueprint API — AI Audit Automation',
          description:
            "Built a production REST API that automates Groundwork's AI Opportunity Audit delivery. Handles form submission, Blueprint API calls, webhook verification (HMAC-SHA256), automated email delivery, and Slack notifications. Security layer includes reCAPTCHA v3, IP + email rate limiting, one-time session tokens, and a full audit trail via jobs table.",
        },
        {
          title: 'Competitive Edge Blueprint — MCP Server',
          description:
            "Built an MCP server in TypeScript that exposes Groundwork's Competitive Edge Blueprint to any MCP-compatible client — Claude Desktop, Cursor, and Morgan PM Engine. Implements a 3-tool async pattern (run → status → result), job queue with max 3 concurrent runs, 72h result cache in Redis, SSE + stdio transports, and per-client API key auth.",
        },
        {
          title: 'JS Mini Game',
          description:
            'Browser game where players collect items before a timer runs out. Built with vanilla JS focusing on game logic and UX.',
        },
        {
          title: 'School Management Platform',
          description:
            'Role-based web platform for teachers, admins and parents to manage academic records, grades and school communication.',
        },
        {
          title: 'Lorelis Painting',
          description:
            'Custom website for a US-based home remodeling company. Responsive theme, 30% performance improvement, ongoing maintenance.',
        },
        {
          title: 'IgnitePost Workflow Automation',
          description:
            'Full automation for direct mail campaigns triggered by Buzz.ai webhooks. Live for SecureAuth and The Signatry clients.',
        },
        {
          title: 'GiftSenda API Integration',
          description:
            'End-to-end API integration for The Signatry, handling OAuth flows, access tokens, and vendor coordination.',
        },
      ],
    },
    skills: {
      label: 'Expertise',
      title: 'Skills',
      subtitle: 'Self-assessed proficiency based on production experience',
      frontend: 'Frontend Development',
      frontendSub: 'Web interfaces & UI',
      automation: 'Automation & AI',
      automationSub: 'Workflows & integrations',
    },
    contact: {
      label: 'Contact',
      title: 'Get In Touch',
      subtitle: "Have a project in mind or want to collaborate? Let's talk.",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      subjectPlaceholder: 'Project proposal, collaboration, question...',
      messagePlaceholder: 'Tell me about your project or idea...',
      submit: 'Send Message',
      sending: 'Sending…',
      successTitle: 'Message sent!',
      successSub: "I'll get back to you soon.",
      sendAnother: 'Send another message',
      errorNetwork: 'Network error. Please check your connection and try again.',
      errorGeneric: 'Something went wrong. Please try again.',
    },
    footer: {
      role: 'Frontend Developer & Automation Specialist',
      rights: 'All rights reserved',
      builtWith: 'Built with',
    },
  },
}
