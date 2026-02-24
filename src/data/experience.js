export const personalInfo = {
  name: 'Marc Zinni Arranz',
  title: {
    es: 'Desarrollador Web',
    en: 'Web Developer',
  },
  subtitle: {
    es: 'Apasionado por la tecnología y la programación, orientado a la actualización continua y transferencia de conocimiento.',
    en: 'Passionate about technology and programming, oriented to continuous updating and knowledge transfer.',
  },
  location: 'Mataró, Barcelona, España',
  email: 'marczinniarranz@gmail.com',
}

export const experience = [
  {
    id: 1,
    company: 'Quadrant Travel Technologies',
    location: { es: 'Madrid, España', en: 'Madrid, Spain' },
    role: {
      es: 'Desarrollador Frontend Senior',
      en: 'Senior Frontend Developer',
    },
    period: {
      es: '2023 — 2026',
      en: '2023 — 2026',
    },
    description: {
      es: 'Pieza clave en el desarrollo frontend del ecosistema B2B de Quadrant, una plataforma de gestión de viajes para agencias y proveedores. Contribuí en 6 proyectos simultáneos: backoffice principal, gestión de franquicias, pagos, autenticación, documentación digital y librería de componentes.',
      en: "Key contributor to the frontend development of Quadrant's B2B travel management platform for agencies and suppliers. Contributed across 6 simultaneous projects: main backoffice, franchise management, payments, authentication, digital documentation and component library.",
    },
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Vitest'],
    expandedTech: [
      'Next.js 14',
      'React 18',
      'TypeScript',
      'TanStack Query',
      'Tailwind CSS',
      'Ant Design',
      'Vitest',
      'Playwright',
      'Redux',
      'Zustan',
      'Azure MSAL',
      'React Hook Forms',
    ],
    responsibilities: {
      es: [
        'Gestión de estado global con Zustand, migrando de REDUX, y server state con TanStack Query para caché, invalidación y sincronización',
        'Validación de formularios multi-step con Class Transformer y Class Validator y control de dirty fields para flujos complejos',
        'Autenticación con Azure MSAL: diseño y publicación de 3 paquetes npm reutilizables en registro privado de GitLab',
        'Feature flags con GrowthBook para despliegues progresivos y A/B testing en producción',
        'Testing con Vitest (unitarios) y Playwright (E2E), integrados en CI/CD',
        'Documentación de componentes con Storybook para mantener consistencia visual entre proyectos',
      ],
      en: [
        'Global state management with Zustand, migrating from REDUX, and server state with TanStack Query for caching, invalidation and sync',
        'Multi-step form validation with Class Transformer and Class Validator and dirty field tracking for complex flows',
        'Authentication with Azure MSAL: designed and published 3 reusable npm packages to private GitLab registry',
        'Feature flags with GrowthBook for progressive rollouts and A/B testing in production',
        'Testing with Vitest (unit) and Playwright (E2E), integrated into CI/CD',
        'Component documentation with Storybook to maintain visual consistency across projects',
      ],
    },
    highlights: {
      es: [
        'Arquitectura de 6 aplicaciones Next.js 14 con App Router, SSR y TypeScript estricto',
        'Hooks genéricos reutilizables para eliminar duplicación entre verticales',
        'Refactorización de servicios externos: simplificación de payloads y desacoplamiento de componentes',
        'Integración de +8 APIs de proveedores externos con tipado estricto y gestión de errores',
        'Sistema multi-tenant con i18n dinámico y theming por organización',
        'UI con Ant Design customizado y Tailwind CSS para componentes específicos',
      ],
      en: [
        'Architecture of 6 Next.js 14 apps with App Router, SSR and strict TypeScript',
        'Generic reusable hooks to eliminate duplication across verticals',
        'External services refactoring: payload simplification and component decoupling',
        'Integration of 8+ external provider APIs with strict typing and error handling',
        'Multi-tenant system with dynamic i18n and per-organization theming',
        'UI with customized Ant Design and Tailwind CSS for specific components',
      ],
    },
    language: 'es',
  },
  {
    id: 2,
    company: 'Integrated Environmental Solutions | IES',
    location: { es: 'Glasgow, Escocia', en: 'Glasgow, Scotland' },
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer',
    },
    period: {
      es: '2022 — 2023',
      en: '2022 — 2023',
    },
    description: {
      es: 'Desarrollo de un dashboard web para la monitorización en tiempo real de la eficiencia energética de edificios. Una aplicación que permitía visualizar KPIs por habitación y planta para detectar pérdidas energéticas y caloríficas, facilitando la toma de decisiones correctivas.',
      en: 'Developed a web dashboard for real-time monitoring of building energy efficiency. An application that allowed visualizing KPIs per room and floor to detect energy and heat losses, enabling data-driven corrective decisions.',
    },
    tech: ['React 17', 'TypeScript', 'Redux', 'Vitest'],
    expandedTech: [
      'React 17',
      'TypeScript',
      'Redux',
      'TanStack Query',
      'Axios',
      'React Hook Form',
      'Chart.js',
      'Azure MSAL',
      'Vitest',
    ],
    responsibilities: {
      es: [
        'Gestión de estado global con Redux para sincronización entre aplicaciones',
        'Migración de Axios a TanStack Query para cacheo automático e invalidación de datos',
        'Formularios complejos con React Hook Form y validación dinámica',
        'Visualización de datos en tiempo real con Chart.js para dashboards de KPIs',
        'Autenticación centralizada con Microsoft Azure MSAL para SSO entre aplicaciones',
        'Testing unitario con Vitest integrado en el flujo de desarrollo',
      ],
      en: [
        'Global state management with Redux for cross-application synchronization',
        'Migration from Axios to TanStack Query for automatic caching and data invalidation',
        'Complex forms with React Hook Form and dynamic validation',
        'Real-time data visualization with Chart.js for KPI dashboards',
        'Centralized authentication with Microsoft Azure MSAL for SSO across applications',
        'Unit testing with Vitest integrated into the development workflow',
      ],
    },
    highlights: {
      es: [
        'Migración de fetching de datos de Axios a TanStack Query mejorando rendimiento y cacheo',
        'Dashboard en tiempo real con KPIs por habitación y planta con Chart.js',
        'SSO con Azure MSAL unificando login entre múltiples aplicaciones',
        'Consumo de APIs REST del backend con tipado estricto en TypeScript',
      ],
      en: [
        'Data fetching migration from Axios to TanStack Query improving performance and caching',
        'Real-time dashboard with per-room and per-floor KPIs using Chart.js',
        'SSO with Azure MSAL unifying login across multiple applications',
        'REST API consumption from backend with strict TypeScript typing',
      ],
    },
    language: 'en',
  },
  {
    id: 3,
    company: 'Sintelec',
    location: { es: 'Mataró, España', en: 'Mataró, Spain' },
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer',
    },
    period: {
      es: '2015 — 2022',
      en: '2015 — 2022',
    },
    description: {
      es: 'Primer empleo compaginado con los estudios. Desarrollo full stack de múltiples aplicaciones web desde cero: backend con PHP y Laravel, frontend con jQuery y Vue.js, arquitectura y bases de datos MySQL. Responsable del ciclo completo de desarrollo de cada proyecto.',
      en: 'First job combined with studies. Full stack development of multiple web applications from scratch: backend with PHP and Laravel, frontend with jQuery and Vue.js, architecture and MySQL databases. Responsible for the complete development cycle of each project.',
    },
    tech: ['PHP', 'Laravel', 'Vue.js', 'jQuery', 'MySQL'],
    expandedTech: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Vue.js', 'Axios', 'MySQL', 'Git'],
    responsibilities: {
      es: [
        'Desarrollo full stack completo: backend con PHP nativo y Laravel, frontend con jQuery y Vue.js',
        'Diseño de arquitectura de aplicaciones y modelado de bases de datos MySQL',
        'APIs REST con Laravel para comunicación frontend-backend con Axios',
        'Migración progresiva de PHP nativo y jQuery a Laravel y Vue.js',
        'Control de versiones con Git y despliegues en servidores de producción',
        'Mantenimiento y evolución de aplicaciones en producción para empresas y ayuntamientos',
      ],
      en: [
        'Complete full stack development: backend with vanilla PHP and Laravel, frontend with jQuery and Vue.js',
        'Application architecture design and MySQL database modeling',
        'REST APIs with Laravel for frontend-backend communication using Axios',
        'Progressive migration from vanilla PHP and jQuery to Laravel and Vue.js',
        'Version control with Git and production server deployments',
        'Maintenance and evolution of production applications for companies and municipalities',
      ],
    },
    highlights: {
      es: [
        'Sistema de tickets de soporte: de herramienta interna a producto comercializado a empresas y ayuntamientos',
        'Plataforma de gestión de tráfico: recepción de fotos de matrículas, filtrado por listas blancas y gestión automatizada de multas con tránsito en Barcelona y Girona',
        'Aplicaciones de firma de consentimiento digital para negocios',
        'Responsable único del ciclo completo: arquitectura, backend, frontend y base de datos',
      ],
      en: [
        'Support ticket system: from internal tool to commercial product sold to companies and municipalities',
        'Traffic management platform: license plate photo reception, whitelist filtering and automated fine management with traffic authorities in Barcelona and Girona',
        'Digital consent signature applications for businesses',
        'Sole responsible for the complete cycle: architecture, backend, frontend and database',
      ],
    },
    language: 'es',
  },
]
