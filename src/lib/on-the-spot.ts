// AUTO-GENERADO desde el dossier de credenciales. Editar el copy aquí.
import type { Locale } from "@/lib/i18n";

export type OtsVideo = { type: "youtube" | "drive"; id: string };
export type OtsImage = { src: string; w: number; h: number };
export type OtsProject = {
  slug: string;
  client: string;
  title: Record<Locale, string>;
  category: string;
  description: Record<Locale, string>;
  services: Record<Locale, string[]>;
  video?: OtsVideo;
  images: OtsImage[];
};

export const OTS_CATEGORIES: { slug: string; label: Record<Locale, string> }[] = [
  { slug: "campana-publicitaria", label: { es: "Campaña publicitaria", en: "Advertising campaign" } },
  { slug: "campana-de-producto", label: { es: "Campaña de producto", en: "Product campaign" } },
  { slug: "pos-packaging", label: { es: "Materiales POS & Packaging", en: "POS & Packaging" } },
  { slug: "ferias", label: { es: "Stand y acciones en ferias", en: "Stands & trade shows" } },
  { slug: "eventos-corporativos", label: { es: "Eventos corporativos", en: "Corporate events" } },
  { slug: "street-marketing", label: { es: "Street marketing", en: "Street marketing" } },
  { slug: "activacion-de-marca", label: { es: "Activación de marca", en: "Brand activation" } },
  { slug: "lanzamiento", label: { es: "Lanzamiento de producto", en: "Product launch" } },
  { slug: "imagen-corporativa", label: { es: "Imagen corporativa", en: "Corporate identity" } },
  { slug: "video", label: { es: "Vídeo", en: "Video" } },
  { slug: "convenciones", label: { es: "Convenciones", en: "Conventions" } },
  { slug: "incentivos", label: { es: "Incentivos", en: "Incentives" } },
  { slug: "team-building", label: { es: "Team building", en: "Team building" } },
  { slug: "e-learnings", label: { es: "E-learnings", en: "E-learnings" } },
  { slug: "rueda-de-prensa", label: { es: "Rueda de prensa", en: "Press conference" } },
];

export const OTS_PROJECTS: OtsProject[] = [
  {
    slug: "alcon-astigmatismo",
    client: "Alcon",
    title: { es: "Astigmatismo en formato test", en: "Astigmatism in test format" },
    category: "campana-publicitaria",
    description: {
      es: "Acción divulgativa sobre el astigmatismo con diversos materiales para exterior en formato «test» y desarrollo de un microsite ad hoc para el concepto.",
      en: "An awareness campaign on astigmatism with outdoor materials in a “test” format and an ad hoc microsite built around the concept.",
    },
    services: { es: ["Concepto creativo", "Campaña gráfica", "Microsite"], en: ["Creative concept", "Graphic campaign", "Microsite"] },
    images: [
      { src: "/casos/alcon-astigmatismo/1.webp", w: 1279, h: 558 },
      { src: "/casos/alcon-astigmatismo/2.webp", w: 759, h: 528 },
      { src: "/casos/alcon-astigmatismo/3.webp", w: 339, h: 715 },
    ],
  },
  {
    slug: "novartis-certican",
    client: "Novartis",
    title: { es: "Certican", en: "Certican" },
    category: "campana-de-producto",
    description: {
      es: "Creación del concepto de campaña para Certican y su aplicación en todos los soportes de comunicación: vídeo, eventos profesionales, materiales gráficos y stand. Guion, animaciones y edición de los vídeos de presentación.",
      en: "Creation of the campaign concept for Certican and its rollout across every communication medium: video, professional events, graphic materials and stand. Script, animation and editing of the presentation videos.",
    },
    services: { es: ["Concepto creativo", "Campaña gráfica", "Eventos", "Vídeo"], en: ["Creative concept", "Graphic campaign", "Events", "Video"] },
    video: { type: "youtube", id: "Iobu7Tdk6VI" },
    images: [
      { src: "/casos/novartis-certican/1.webp", w: 1281, h: 800 },
      { src: "/casos/novartis-certican/2.webp", w: 902, h: 587 },
      { src: "/casos/novartis-certican/3.webp", w: 651, h: 295 },
    ],
  },
  {
    slug: "carolina-herrera",
    client: "Carolina Herrera",
    title: { es: "Desfile Spring 26", en: "Spring 26 fashion show" },
    category: "campana-de-producto",
    description: {
      es: "Producción ejecutiva del desfile de Carolina Herrera: gestión de proveedores, logística y producción técnica, pasarela, backstage, fittings, catering, localización y traslados.",
      en: "Executive production of the Carolina Herrera fashion show: supplier management, logistics and technical production, runway, backstage, fittings, catering, location and transfers.",
    },
    services: { es: ["Producción ejecutiva", "Pasarela", "Backstage", "Logística"], en: ["Executive production", "Runway", "Backstage", "Logistics"] },
    video: { type: "youtube", id: "xuLeI_mf4cQ" },
    images: [
      { src: "/casos/carolina-herrera/1.webp", w: 1440, h: 902 },
    ],
  },
  {
    slug: "orbit",
    client: "Orbit",
    title: { es: "Material POS", en: "POS material" },
    category: "pos-packaging",
    description: {
      es: "Diseño y creación de material para punto de venta, implementado en Estados Unidos y Europa.",
      en: "Design and creation of point-of-sale material, rolled out across the United States and Europe.",
    },
    services: { es: ["Material POS", "Diseño gráfico"], en: ["POS material", "Graphic design"] },
    images: [
      { src: "/casos/orbit/1.webp", w: 785, h: 693 },
    ],
  },
  {
    slug: "go-green",
    client: "Go Green",
    title: { es: "Expositores de punto de venta", en: "Point-of-sale displays" },
    category: "pos-packaging",
    description: {
      es: "Diseño y creación de expositores para punto de venta.",
      en: "Design and creation of point-of-sale displays.",
    },
    services: { es: ["Material POS", "Diseño gráfico"], en: ["POS material", "Graphic design"] },
    images: [
      { src: "/casos/go-green/1.webp", w: 840, h: 483 },
      { src: "/casos/go-green/2.webp", w: 625, h: 646 },
    ],
  },
  {
    slug: "stingbye",
    client: "STINGbye",
    title: { es: "Packaging antimosquitos", en: "Insect-repellent packaging" },
    category: "pos-packaging",
    description: {
      es: "Diseño del nuevo packaging y de los contenidos para varios productos textiles repelentes de insectos y antipiojos.",
      en: "Design of the new packaging and content for a range of insect-repellent and anti-lice textile products.",
    },
    services: { es: ["Packaging", "Contenidos", "Diseño gráfico"], en: ["Packaging", "Content", "Graphic design"] },
    images: [
      { src: "/casos/stingbye/1.webp", w: 680, h: 488 },
      { src: "/casos/stingbye/2.webp", w: 369, h: 446 },
    ],
  },
  {
    slug: "applus-mwc",
    client: "Applus",
    title: { es: "Stand Mobile World Congress", en: "Mobile World Congress stand" },
    category: "ferias",
    description: {
      es: "Diseño, conceptualización, gestión y coordinación del stand para el Mobile World Congress de Barcelona.",
      en: "Design, conceptualization, management and coordination of the stand for the Mobile World Congress in Barcelona.",
    },
    services: { es: ["Diseño", "Conceptualización", "Producción"], en: ["Design", "Conceptualization", "Production"] },
    images: [
      { src: "/casos/applus-mwc/1.webp", w: 785, h: 591 },
    ],
  },
  {
    slug: "gft-4yfn",
    client: "GFT",
    title: { es: "Stand 4YFN", en: "4YFN stand" },
    category: "ferias",
    description: {
      es: "Diseño, conceptualización, gestión y coordinación del stand para el 4YFN de Barcelona, dentro del Mobile World Congress.",
      en: "Design, conceptualization, management and coordination of the stand for 4YFN in Barcelona, part of the Mobile World Congress.",
    },
    services: { es: ["Diseño", "Conceptualización", "Producción"], en: ["Design", "Conceptualization", "Production"] },
    images: [
      { src: "/casos/gft-4yfn/1.webp", w: 785, h: 627 },
    ],
  },
  {
    slug: "porsche-classic",
    client: "Porsche",
    title: { es: "Porsche Classic", en: "Porsche Classic" },
    category: "ferias",
    description: {
      es: "Stand para Porsche inspirado en los años 50, con la recreación de un garaje antiguo en el Classic Car Event de Bélgica. Campaña dirigida a los propietarios de Porsche Classic y actualización de la base de datos.",
      en: "A 1950s-inspired Porsche stand recreating a vintage garage at the Classic Car Event in Belgium. A campaign aimed at Porsche Classic owners, including a database refresh.",
    },
    services: { es: ["Eventos", "Diseño de stand", "Campaña", "CRM"], en: ["Events", "Stand design", "Campaign", "CRM"] },
    images: [
      { src: "/casos/porsche-classic/1.webp", w: 1600, h: 659 },
      { src: "/casos/porsche-classic/2.webp", w: 1058, h: 595 },
      { src: "/casos/porsche-classic/3.webp", w: 759, h: 508 },
      { src: "/casos/porsche-classic/4.webp", w: 792, h: 416 },
      { src: "/casos/porsche-classic/5.webp", w: 600, h: 532 },
      { src: "/casos/porsche-classic/6.webp", w: 398, h: 558 },
    ],
  },
  {
    slug: "melia-60-aniversario",
    client: "Meliá",
    title: { es: "60 aniversario", en: "60th anniversary" },
    category: "eventos-corporativos",
    description: {
      es: "Celebración del 60 aniversario de la compañía. Desarrollo y gestión del evento para los principales tour-operadores y agencias: conceptualización, convocatoria, desarrollo de contenidos y producción.",
      en: "Celebration of the company’s 60th anniversary. Development and management of the event for leading tour operators and agencies: conceptualization, invitations, content development and production.",
    },
    services: { es: ["Conceptualización", "Eventos", "Producción"], en: ["Conceptualization", "Events", "Production"] },
    video: { type: "youtube", id: "0QU0ztMIcvw" },
    images: [
      { src: "/casos/melia-60-aniversario/1.webp", w: 1600, h: 1455 },
      { src: "/casos/melia-60-aniversario/2.webp", w: 1282, h: 800 },
      { src: "/casos/melia-60-aniversario/3.webp", w: 425, h: 635 },
      { src: "/casos/melia-60-aniversario/4.webp", w: 460, h: 414 },
    ],
  },
  {
    slug: "sap-partner-summit",
    client: "SAP",
    title: { es: "Partner Summit", en: "Partner Summit" },
    category: "eventos-corporativos",
    description: {
      es: "Convención internacional para 250 participantes entre España y Estados Unidos: localización, food & beverage, staff, logística y viajes, contenido creativo y desarrollo gráfico.",
      en: "International convention for 250 participants across Spain and the United States: location, food & beverage, staff, logistics and travel, creative content and graphic development.",
    },
    services: { es: ["Localización", "Food & Beverage", "Staff", "Logística"], en: ["Location", "Food & Beverage", "Staff", "Logistics"] },
    images: [
      { src: "/casos/sap-partner-summit/1.webp", w: 1600, h: 930 },
      { src: "/casos/sap-partner-summit/2.webp", w: 1600, h: 671 },
      { src: "/casos/sap-partner-summit/3.webp", w: 788, h: 922 },
      { src: "/casos/sap-partner-summit/4.webp", w: 773, h: 922 },
    ],
  },
  {
    slug: "applus-family-day",
    client: "Applus",
    title: { es: "Family Day", en: "Family Day" },
    category: "eventos-corporativos",
    description: {
      es: "Concepto y desarrollo gráfico, actividades, staff y logística para la jornada de puertas abiertas con las familias de la compañía.",
      en: "Concept and graphic development, activities, staff and logistics for the company’s family open day.",
    },
    services: { es: ["Concepto", "Actividades", "Staff", "Logística"], en: ["Concept", "Activities", "Staff", "Logistics"] },
    images: [
      { src: "/casos/applus-family-day/1.webp", w: 1088, h: 685 },
      { src: "/casos/applus-family-day/2.webp", w: 1291, h: 540 },
      { src: "/casos/applus-family-day/3.webp", w: 630, h: 685 },
      { src: "/casos/applus-family-day/4.webp", w: 630, h: 679 },
    ],
  },
  {
    slug: "cocacola-grandvalira",
    client: "Coca-Cola",
    title: { es: "Grandvalira", en: "Grandvalira" },
    category: "street-marketing",
    description: {
      es: "Activación de marca en las pistas de esquí de Grandvalira, con una acción de marketing de guerrilla vinculada al consumo.",
      en: "Brand activation on the ski slopes of Grandvalira, with a guerrilla marketing action tied to consumption.",
    },
    services: { es: ["Conceptualización", "Marca", "Marketing de guerrilla"], en: ["Conceptualization", "Brand", "Guerrilla marketing"] },
    images: [
      { src: "/casos/cocacola-grandvalira/1.webp", w: 449, h: 616 },
      { src: "/casos/cocacola-grandvalira/2.webp", w: 632, h: 426 },
      { src: "/casos/cocacola-grandvalira/3.webp", w: 409, h: 558 },
    ],
  },
  {
    slug: "avianca",
    client: "Avianca",
    title: { es: "Nueva ruta Madrid–Medellín", en: "New Madrid–Medellín route" },
    category: "street-marketing",
    description: {
      es: "Acción promocional en centros comerciales de Madrid y Medellín para el lanzamiento de la nueva ruta comercial. Coordinación, producción audiovisual y logística.",
      en: "Promotional action in shopping centres in Madrid and Medellín for the launch of the new commercial route. Coordination, audiovisual production and logistics.",
    },
    services: { es: ["Coordinación", "Producción audiovisual", "Logística"], en: ["Coordination", "Audiovisual production", "Logistics"] },
    images: [
      { src: "/casos/avianca/1.webp", w: 1600, h: 1278 },
    ],
  },
  {
    slug: "haribo",
    client: "Haribo",
    title: { es: "Activación 360", en: "360 activation" },
    category: "activacion-de-marca",
    description: {
      es: "Acción promocional en grandes superficies con un desarrollo 360 que incluyó activación en el punto de venta, campaña de publicidad exterior y un juego disponible en Google Play y App Store.",
      en: "A promotional action in large retail stores with a 360 rollout: point-of-sale activation, an outdoor advertising campaign and a game released on Google Play and the App Store.",
    },
    services: { es: ["Conceptualización", "Promoción", "App"], en: ["Conceptualization", "Promotion", "App"] },
    images: [
      { src: "/casos/haribo/1.webp", w: 1600, h: 779 },
      { src: "/casos/haribo/2.webp", w: 507, h: 405 },
      { src: "/casos/haribo/3.webp", w: 427, h: 434 },
    ],
  },
  {
    slug: "glenfiddich",
    client: "Glenfiddich",
    title: { es: "Afterworks", en: "Afterworks" },
    category: "activacion-de-marca",
    description: {
      es: "Afterworks Glenfiddich en Madrid, Barcelona, Valencia y Málaga. Desarrollo conceptual de la acción y del conjunto de materiales gráficos, mecánica de consumo y producción del evento.",
      en: "Glenfiddich Afterworks in Madrid, Barcelona, Valencia and Málaga. Conceptual development of the action and its full set of graphic materials, consumption mechanics and event production.",
    },
    services: { es: ["Conceptualización", "Marca", "Producción"], en: ["Conceptualization", "Brand", "Production"] },
    images: [
      { src: "/casos/glenfiddich/1.webp", w: 785, h: 539 },
      { src: "/casos/glenfiddich/2.webp", w: 773, h: 319 },
      { src: "/casos/glenfiddich/3.webp", w: 382, h: 557 },
    ],
  },
  {
    slug: "ikea-marruecos",
    client: "IKEA Marruecos",
    title: { es: "Lanzamiento de catálogo", en: "Catalogue launch" },
    category: "activacion-de-marca",
    description: {
      es: "Conceptualización y campaña de lanzamiento del nuevo catálogo para IKEA Marruecos: piezas gráficas, materiales para punto de venta, acciones de street marketing y concurso en redes sociales.",
      en: "Conceptualization and launch campaign for the new IKEA Morocco catalogue: graphic pieces, point-of-sale materials, street marketing actions and a social media contest.",
    },
    services: { es: ["Conceptualización", "Campaña", "Desarrollo gráfico"], en: ["Conceptualization", "Campaign", "Graphic development"] },
    images: [
      { src: "/casos/ikea-marruecos/1.webp", w: 784, h: 627 },
      { src: "/casos/ikea-marruecos/2.webp", w: 619, h: 417 },
    ],
  },
  {
    slug: "perrier",
    client: "Perrier",
    title: { es: "Activación Bélgica", en: "Belgium activation" },
    category: "activacion-de-marca",
    description: {
      es: "Activación de marca en Bélgica: concepto y creatividad, desarrollo gráfico, producción del set y staff.",
      en: "Brand activation in Belgium: concept and creative, graphic development, set production and staff.",
    },
    services: { es: ["Concepto", "Desarrollo gráfico", "Producción", "Staff"], en: ["Concept", "Graphic development", "Production", "Staff"] },
    images: [
      { src: "/casos/perrier/1.webp", w: 1179, h: 834 },
      { src: "/casos/perrier/2.webp", w: 750, h: 961 },
      { src: "/casos/perrier/3.webp", w: 549, h: 981 },
    ],
  },
  {
    slug: "alcon-air-optix",
    client: "Alcon",
    title: { es: "Air Optix Road Show", en: "Air Optix Road Show" },
    category: "lanzamiento",
    description: {
      es: "Campaña paneuropea para el lanzamiento de una nueva línea de lentillas. Concepto creativo, miniserie con jingle propio para presentar The Hydraglyde Family, app con realidad aumentada para profesionales y un road show por 8 ciudades de España y Portugal.",
      en: "A pan-European campaign for the launch of a new contact lens line. Creative concept, a mini-series with its own jingle to present The Hydraglyde Family, an augmented-reality app for professionals and a road show across 8 cities in Spain and Portugal.",
    },
    services: { es: ["Conceptualización", "Diseño", "Producción", "App AR"], en: ["Conceptualization", "Design", "Production", "AR app"] },
    video: { type: "youtube", id: "9azR2qmg6uk" },
    images: [
      { src: "/casos/alcon-air-optix/1.webp", w: 1281, h: 800 },
      { src: "/casos/alcon-air-optix/2.webp", w: 774, h: 320 },
      { src: "/casos/alcon-air-optix/3.webp", w: 382, h: 557 },
      { src: "/casos/alcon-air-optix/4.webp", w: 774, h: 215 },
    ],
  },
  {
    slug: "alcon-incontact",
    client: "Alcon",
    title: { es: "InContact", en: "InContact" },
    category: "lanzamiento",
    description: {
      es: "Campaña paneuropea de conceptualización y lanzamiento de la nueva plataforma de e-commerce. Desarrollo de todos los materiales gráficos y del sales folder, y road show de presentación en 8 ciudades de España y Portugal.",
      en: "A pan-European campaign to conceptualize and launch the new e-commerce platform. Development of all graphic materials and the sales folder, plus a presentation road show across 8 cities in Spain and Portugal.",
    },
    services: { es: ["Conceptualización", "Creación", "Producción"], en: ["Conceptualization", "Creation", "Production"] },
    video: { type: "youtube", id: "J77hZ1BtApc" },
    images: [
      { src: "/casos/alcon-incontact/1.webp", w: 1600, h: 1317 },
      { src: "/casos/alcon-incontact/2.webp", w: 1282, h: 800 },
      { src: "/casos/alcon-incontact/3.webp", w: 613, h: 557 },
      { src: "/casos/alcon-incontact/4.webp", w: 540, h: 319 },
    ],
  },
  {
    slug: "dr-scholl",
    client: "Dr. Scholl",
    title: { es: "Nueva colección", en: "New collection" },
    category: "lanzamiento",
    description: {
      es: "Diseño y producción de material gráfico y de soporte para el lanzamiento de la nueva colección. Interiorismo y producción de los eventos, casting y producción de desfile, con acciones para el canal farmacia en España y Portugal.",
      en: "Design and production of graphic and support material for the new collection launch. Interior design and event production, casting and fashion show production, with actions for the pharmacy channel in Spain and Portugal.",
    },
    services: { es: ["Coordinación", "Producción", "Desfile"], en: ["Coordination", "Production", "Fashion show"] },
    images: [
      { src: "/casos/dr-scholl/1.webp", w: 786, h: 627 },
    ],
  },
  {
    slug: "petit-farm",
    client: "Petit Farm",
    title: { es: "Identidad y web", en: "Identity and website" },
    category: "imagen-corporativa",
    description: {
      es: "Diseño de marca y desarrollo del sistema de identidad, con diseño e implementación del website.",
      en: "Brand design and identity system development, including website design and implementation.",
    },
    services: { es: ["Identidad gráfica", "Web"], en: ["Graphic identity", "Web"] },
    video: { type: "youtube", id: "yOwVNWqnbpU" },
    images: [
      { src: "/casos/petit-farm/1.webp", w: 784, h: 556 },
      { src: "/casos/petit-farm/2.webp", w: 768, h: 480 },
    ],
  },
  {
    slug: "metaembalatges",
    client: "Metaembalatges",
    title: { es: "Branding y contenidos", en: "Branding and content" },
    category: "imagen-corporativa",
    description: {
      es: "Branding, creación de contenidos y web, fotografía y vídeo.",
      en: "Branding, content creation and website, photography and video.",
    },
    services: { es: ["Branding", "Web", "Fotografía y vídeo"], en: ["Branding", "Web", "Photo & video"] },
    images: [
      { src: "/casos/metaembalatges/1.webp", w: 1413, h: 1000 },
      { src: "/casos/metaembalatges/2.webp", w: 983, h: 983 },
      { src: "/casos/metaembalatges/3.webp", w: 845, h: 898 },
      { src: "/casos/metaembalatges/4.webp", w: 1128, h: 668 },
      { src: "/casos/metaembalatges/5.webp", w: 426, h: 441 },
    ],
  },
  {
    slug: "panoma",
    client: "Panoma",
    title: { es: "Identidad para real estate", en: "Real estate identity" },
    category: "imagen-corporativa",
    description: {
      es: "Start up dedicada al desarrollo inmobiliario en México. Desarrollo de imagen corporativa, producción de catálogos, fichas de producto y guías de compra, evento de presentación y desarrollo de la web y sus contenidos.",
      en: "A start-up in real estate development in Mexico. Corporate identity development, production of catalogues, product sheets and buying guides, a launch event and the development of the website and its content.",
    },
    services: { es: ["Identidad gráfica", "Web", "Editorial", "Eventos"], en: ["Graphic identity", "Web", "Editorial", "Events"] },
    images: [
      { src: "/casos/panoma/1.webp", w: 785, h: 628 },
      { src: "/casos/panoma/2.webp", w: 409, h: 557 },
    ],
  },
  {
    slug: "alcon-air-optix-video",
    client: "Alcon",
    title: { es: "La miniserie", en: "The mini-series" },
    category: "video",
    description: {
      es: "Creación de una miniserie para el lanzamiento de la nueva gama de productos de la marca. Desarrollo, gestión y supervisión del guion, jingle, vestuario, localizaciones, casting y rodaje.",
      en: "Creation of a mini-series for the launch of the brand’s new product range. Development, management and supervision of the script, jingle, wardrobe, locations, casting and shoot.",
    },
    services: { es: ["Concepto creativo", "Dirección de arte", "Rodaje"], en: ["Creative concept", "Art direction", "Shoot"] },
    video: { type: "youtube", id: "Tk0yQFDO3mM" },
    images: [
      { src: "/casos/alcon-air-optix-video/1.webp", w: 1280, h: 801 },
    ],
  },
  {
    slug: "cocacola-on-air",
    client: "Coca-Cola",
    title: { es: "On Air", en: "On Air" },
    category: "video",
    description: {
      es: "Creación y desarrollo del vídeo concepto para el lanzamiento del programa On Air.",
      en: "Creation and development of the concept video for the launch of the On Air programme.",
    },
    services: { es: ["Concepto creativo", "Desarrollo", "Dirección de arte"], en: ["Creative concept", "Development", "Art direction"] },
    video: { type: "youtube", id: "5EYTmPAYuM0" },
    images: [
      { src: "/casos/cocacola-on-air/1.webp", w: 1600, h: 1131 },
    ],
  },
  {
    slug: "cocacola-segmentacion",
    client: "Coca-Cola",
    title: { es: "Segmentación", en: "Segmentation" },
    category: "video",
    description: {
      es: "Creación y desarrollo del vídeo concepto para la red de comerciales de Coca-Cola.",
      en: "Creation and development of the concept video for the Coca-Cola sales network.",
    },
    services: { es: ["Concepto creativo", "Desarrollo", "Dirección de arte"], en: ["Creative concept", "Development", "Art direction"] },
    video: { type: "youtube", id: "8z1odiva9_c" },
    images: [
      { src: "/casos/cocacola-segmentacion/1.webp", w: 1600, h: 1000 },
    ],
  },
  {
    slug: "walk-me",
    client: "Walk Me",
    title: { es: "Vídeo corporativo", en: "Corporate video" },
    category: "video",
    description: {
      es: "Guion, edición y dirección creativa del vídeo corporativo.",
      en: "Script, editing and creative direction of the corporate video.",
    },
    services: { es: ["Guion", "Edición", "Dirección creativa"], en: ["Script", "Editing", "Creative direction"] },
    video: { type: "drive", id: "1_JX4zmRVsrD5Y-hISU3S8qYYRrOuSIfl" },
    images: [
      { src: "/casos/walk-me/1.webp", w: 1194, h: 747 },
    ],
  },
  {
    slug: "ipsen-farma",
    client: "Ipsen Farma",
    title: { es: "Convención de ventas", en: "Sales convention" },
    category: "convenciones",
    description: {
      es: "Convención anual de ventas: concepto y comunicación, producción y logística de participantes, con desarrollo de actividades e implementación en Finlandia.",
      en: "Annual sales convention: concept and communication, production and attendee logistics, with activity development and implementation in Finland.",
    },
    services: { es: ["Conceptualización", "Organización", "Producción"], en: ["Conceptualization", "Organization", "Production"] },
    images: [
      { src: "/casos/ipsen-farma/1.webp", w: 1058, h: 595 },
      { src: "/casos/ipsen-farma/2.webp", w: 1089, h: 557 },
      { src: "/casos/ipsen-farma/3.webp", w: 785, h: 627 },
      { src: "/casos/ipsen-farma/4.webp", w: 773, h: 319 },
      { src: "/casos/ipsen-farma/5.webp", w: 382, h: 557 },
    ],
  },
  {
    slug: "puig-brand-ambassadors",
    client: "Puig",
    title: { es: "208 Brand Ambassadors", en: "208 Brand Ambassadors" },
    category: "convenciones",
    description: {
      es: "Convención anual en Barcelona producida para 208 Brand Ambassadors de todo el mundo. Diseño y comunicación, producción audiovisual, coordinación y logística.",
      en: "Annual convention in Barcelona produced for 208 Brand Ambassadors from around the world. Design and communication, audiovisual production, coordination and logistics.",
    },
    services: { es: ["Diseño", "Coordinación", "Producción audiovisual"], en: ["Design", "Coordination", "Audiovisual production"] },
    images: [
      { src: "/casos/puig-brand-ambassadors/1.webp", w: 785, h: 607 },
      { src: "/casos/puig-brand-ambassadors/2.webp", w: 613, h: 557 },
    ],
  },
  {
    slug: "coty-prestige",
    client: "Coty Prestige",
    title: { es: "Convención en Cannes", en: "Convention in Cannes" },
    category: "convenciones",
    description: {
      es: "Convención anual en Cannes, Francia: concepto y comunicación, producción y logística de participantes.",
      en: "Annual convention in Cannes, France: concept and communication, production and attendee logistics.",
    },
    services: { es: ["Conceptualización", "Producción", "Logística"], en: ["Conceptualization", "Production", "Logistics"] },
    images: [
      { src: "/casos/coty-prestige/1.webp", w: 785, h: 627 },
      { src: "/casos/coty-prestige/2.webp", w: 613, h: 557 },
      { src: "/casos/coty-prestige/3.webp", w: 540, h: 319 },
    ],
  },
  {
    slug: "sd-distribucion",
    client: "SD Distribución",
    title: { es: "The Sand Games", en: "The Sand Games" },
    category: "convenciones",
    description: {
      es: "Convención de clientes en Marruecos: concepto creativo y desarrollo gráfico, site dedicado, staff, localizaciones y logística de viajes.",
      en: "Client convention in Morocco: creative concept and graphic development, a dedicated site, staff, locations and travel logistics.",
    },
    services: { es: ["Concepto creativo", "Site dedicado", "Staff", "Logística"], en: ["Creative concept", "Dedicated site", "Staff", "Logistics"] },
    video: { type: "drive", id: "1tiU8BsonEPSo28B6xs-PiIr01WhJz06L" },
    images: [
      { src: "/casos/sd-distribucion/1.webp", w: 1439, h: 643 },
    ],
  },
  {
    slug: "cocacola-gda-2018",
    client: "Coca-Cola",
    title: { es: "GDA 2018", en: "GDA 2018" },
    category: "incentivos",
    description: {
      es: "Plan de incentivos para la red comercial de Coca-Cola mediante herramientas web motivacionales. Desarrollo de front y back office, gestión de contenidos, gamificación y formación, con el employee engagement como objetivo.",
      en: "An incentive plan for the Coca-Cola sales network built on motivational web tools. Front and back office development, content management, gamification and training, with employee engagement as the goal.",
    },
    services: { es: ["Desarrollo", "Gamificación", "Formación"], en: ["Development", "Gamification", "Training"] },
    video: { type: "youtube", id: "vQgsiiJsrsY" },
    images: [
      { src: "/casos/cocacola-gda-2018/1.webp", w: 1281, h: 800 },
      { src: "/casos/cocacola-gda-2018/2.webp", w: 1172, h: 322 },
    ],
  },
  {
    slug: "sap-team-cooking",
    client: "SAP",
    title: { es: "Team Cooking", en: "Team Cooking" },
    category: "team-building",
    description: {
      es: "Taller de cocina como jornada de formación y motivación para el equipo.",
      en: "A cooking workshop as a training and motivation day for the team.",
    },
    services: { es: ["Conceptualización", "Coordinación", "Producción"], en: ["Conceptualization", "Coordination", "Production"] },
    images: [
      { src: "/casos/sap-team-cooking/1.webp", w: 1600, h: 696 },
      { src: "/casos/sap-team-cooking/2.webp", w: 681, h: 434 },
      { src: "/casos/sap-team-cooking/3.webp", w: 466, h: 627 },
    ],
  },
  {
    slug: "chopard",
    client: "Chopard",
    title: { es: "E-learning de fragancias", en: "Fragrance e-learning" },
    category: "e-learnings",
    description: {
      es: "Conceptualización y desarrollo del e-learning de formación para vendedor@s de todo el mundo con motivo del lanzamiento de nuevas fragancias. Contenidos de vídeo, documentos de referencia, contenidos interactivos y back office de seguimiento.",
      en: "Conceptualization and development of the training e-learning for sales staff worldwide for the launch of new fragrances. Video content, reference documents, interactive content and a tracking back office.",
    },
    services: { es: ["Conceptualización", "Diseño", "E-learning"], en: ["Conceptualization", "Design", "E-learning"] },
    images: [
      { src: "/casos/chopard/1.webp", w: 929, h: 756 },
      { src: "/casos/chopard/2.webp", w: 785, h: 497 },
      { src: "/casos/chopard/3.webp", w: 378, h: 418 },
      { src: "/casos/chopard/4.webp", w: 378, h: 418 },
      { src: "/casos/chopard/5.webp", w: 363, h: 418 },
    ],
  },
  {
    slug: "puig-good-girl",
    client: "Puig",
    title: { es: "Good Girl", en: "Good Girl" },
    category: "e-learnings",
    description: {
      es: "Conceptualización y desarrollo del e-learning de formación para vendedor@s de todo el mundo con motivo del lanzamiento de nuevas fragancias. Contenidos de vídeo, documentos de referencia, contenidos interactivos y back office de seguimiento.",
      en: "Conceptualization and development of the training e-learning for sales staff worldwide for the launch of new fragrances. Video content, reference documents, interactive content and a tracking back office.",
    },
    services: { es: ["Conceptualización", "Diseño", "Producción"], en: ["Conceptualization", "Design", "Production"] },
    images: [
      { src: "/casos/puig-good-girl/1.webp", w: 1280, h: 557 },
      { src: "/casos/puig-good-girl/2.webp", w: 785, h: 627 },
    ],
  },
  {
    slug: "philipp-plein",
    client: "Philipp Plein",
    title: { es: "Formación internacional", en: "International training" },
    category: "e-learnings",
    description: {
      es: "Conceptualización y desarrollo del material de formación para vendedor@s de todo el mundo con motivo del lanzamiento de nuevas fragancias: presentación y documentos de referencia (training guidelines, leaflet, selling ceremony e invitaciones).",
      en: "Conceptualization and development of training material for sales staff worldwide for the launch of new fragrances: presentation and reference documents (training guidelines, leaflet, selling ceremony and invitations).",
    },
    services: { es: ["Conceptualización", "Diseño", "Producción"], en: ["Conceptualization", "Design", "Production"] },
    images: [
      { src: "/casos/philipp-plein/1.webp", w: 1600, h: 1266 },
      { src: "/casos/philipp-plein/2.webp", w: 785, h: 621 },
      { src: "/casos/philipp-plein/3.webp", w: 602, h: 722 },
      { src: "/casos/philipp-plein/4.webp", w: 680, h: 624 },
      { src: "/casos/philipp-plein/5.webp", w: 842, h: 474 },
      { src: "/casos/philipp-plein/6.webp", w: 504, h: 499 },
    ],
  },
  {
    slug: "isdin",
    client: "ISDIN",
    title: { es: "Trofeu Conde de Godó", en: "Trofeu Conde de Godó" },
    category: "rueda-de-prensa",
    description: {
      es: "Presentación de producto durante el 58º Trofeu Conde de Godó. Convocatoria a medios del sector, deportes, moda y lifestyle, con clipping y seguimiento.",
      en: "Product presentation during the 58th Trofeu Conde de Godó. Media call across sector, sports, fashion and lifestyle outlets, with clipping and follow-up.",
    },
    services: { es: ["Clipping", "Conceptualización", "Producción"], en: ["Clipping", "Conceptualization", "Production"] },
    images: [
      { src: "/casos/isdin/1.webp", w: 1600, h: 473 },
      { src: "/casos/isdin/2.webp", w: 651, h: 305 },
    ],
  },
];

export function getOtsProject(slug: string) {
  return OTS_PROJECTS.find((p) => p.slug === slug);
}

/** Categories that actually have projects, in dossier order. */
export function usedCategories() {
  return OTS_CATEGORIES.filter((c) => OTS_PROJECTS.some((p) => p.category === c.slug));
}
