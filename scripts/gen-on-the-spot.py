# -*- coding: utf-8 -*-
"""Generate src/lib/on-the-spot.ts from the extracted image manifest + curated copy."""
import json

MANIFEST = r"D:\Pablo\Claud3\johnny-on-the-spot\scripts\casos-manifest.json"
OUT = r"D:\Pablo\Claud3\johnny-on-the-spot\src\lib\on-the-spot.ts"

CATEGORIES = [
    ("campana-publicitaria",  "Campaña publicitaria",       "Advertising campaign"),
    ("campana-de-producto",   "Campaña de producto",        "Product campaign"),
    ("pos-packaging",         "Materiales POS & Packaging", "POS & Packaging"),
    ("ferias",                "Stand y acciones en ferias", "Stands & trade shows"),
    ("eventos-corporativos",  "Eventos corporativos",       "Corporate events"),
    ("street-marketing",      "Street marketing",           "Street marketing"),
    ("activacion-de-marca",   "Activación de marca",        "Brand activation"),
    ("lanzamiento",           "Lanzamiento de producto",    "Product launch"),
    ("imagen-corporativa",    "Imagen corporativa",         "Corporate identity"),
    ("video",                 "Vídeo",                      "Video"),
    ("convenciones",          "Convenciones",               "Conventions"),
    ("incentivos",            "Incentivos",                 "Incentives"),
    ("team-building",         "Team building",              "Team building"),
    ("e-learnings",           "E-learnings",                "E-learnings"),
    ("rueda-de-prensa",       "Rueda de prensa",            "Press conference"),
]

# slug -> title_es, title_en, category_slug, desc_es, desc_en, services_es, services_en
COPY = {
"alcon-astigmatismo": ("Astigmatismo en formato test", "Astigmatism in test format", "campana-publicitaria",
  "Acción divulgativa sobre el astigmatismo con diversos materiales para exterior en formato «test» y desarrollo de un microsite ad hoc para el concepto.",
  "An awareness campaign on astigmatism with outdoor materials in a “test” format and an ad hoc microsite built around the concept.",
  ["Concepto creativo", "Campaña gráfica", "Microsite"], ["Creative concept", "Graphic campaign", "Microsite"]),

"novartis-certican": ("Certican", "Certican", "campana-de-producto",
  "Creación del concepto de campaña para Certican y su aplicación en todos los soportes de comunicación: vídeo, eventos profesionales, materiales gráficos y stand. Guion, animaciones y edición de los vídeos de presentación.",
  "Creation of the campaign concept for Certican and its rollout across every communication medium: video, professional events, graphic materials and stand. Script, animation and editing of the presentation videos.",
  ["Concepto creativo", "Campaña gráfica", "Eventos", "Vídeo"], ["Creative concept", "Graphic campaign", "Events", "Video"]),

"carolina-herrera": ("Desfile Spring 26", "Spring 26 fashion show", "campana-de-producto",
  "Producción ejecutiva del desfile de Carolina Herrera: gestión de proveedores, logística y producción técnica, pasarela, backstage, fittings, catering, localización y traslados.",
  "Executive production of the Carolina Herrera fashion show: supplier management, logistics and technical production, runway, backstage, fittings, catering, location and transfers.",
  ["Producción ejecutiva", "Pasarela", "Backstage", "Logística"], ["Executive production", "Runway", "Backstage", "Logistics"]),

"orbit": ("Material POS", "POS material", "pos-packaging",
  "Diseño y creación de material para punto de venta, implementado en Estados Unidos y Europa.",
  "Design and creation of point-of-sale material, rolled out across the United States and Europe.",
  ["Material POS", "Diseño gráfico"], ["POS material", "Graphic design"]),

"go-green": ("Expositores de punto de venta", "Point-of-sale displays", "pos-packaging",
  "Diseño y creación de expositores para punto de venta.",
  "Design and creation of point-of-sale displays.",
  ["Material POS", "Diseño gráfico"], ["POS material", "Graphic design"]),

"stingbye": ("Packaging antimosquitos", "Insect-repellent packaging", "pos-packaging",
  "Diseño del nuevo packaging y de los contenidos para varios productos textiles repelentes de insectos y antipiojos.",
  "Design of the new packaging and content for a range of insect-repellent and anti-lice textile products.",
  ["Packaging", "Contenidos", "Diseño gráfico"], ["Packaging", "Content", "Graphic design"]),

"applus-mwc": ("Stand Mobile World Congress", "Mobile World Congress stand", "ferias",
  "Diseño, conceptualización, gestión y coordinación del stand para el Mobile World Congress de Barcelona.",
  "Design, conceptualization, management and coordination of the stand for the Mobile World Congress in Barcelona.",
  ["Diseño", "Conceptualización", "Producción"], ["Design", "Conceptualization", "Production"]),

"gft-4yfn": ("Stand 4YFN", "4YFN stand", "ferias",
  "Diseño, conceptualización, gestión y coordinación del stand para el 4YFN de Barcelona, dentro del Mobile World Congress.",
  "Design, conceptualization, management and coordination of the stand for 4YFN in Barcelona, part of the Mobile World Congress.",
  ["Diseño", "Conceptualización", "Producción"], ["Design", "Conceptualization", "Production"]),

"porsche-classic": ("Porsche Classic", "Porsche Classic", "ferias",
  "Stand para Porsche inspirado en los años 50, con la recreación de un garaje antiguo en el Classic Car Event de Bélgica. Campaña dirigida a los propietarios de Porsche Classic y actualización de la base de datos.",
  "A 1950s-inspired Porsche stand recreating a vintage garage at the Classic Car Event in Belgium. A campaign aimed at Porsche Classic owners, including a database refresh.",
  ["Eventos", "Diseño de stand", "Campaña", "CRM"], ["Events", "Stand design", "Campaign", "CRM"]),

"melia-60-aniversario": ("60 aniversario", "60th anniversary", "eventos-corporativos",
  "Celebración del 60 aniversario de la compañía. Desarrollo y gestión del evento para los principales tour-operadores y agencias: conceptualización, convocatoria, desarrollo de contenidos y producción.",
  "Celebration of the company’s 60th anniversary. Development and management of the event for leading tour operators and agencies: conceptualization, invitations, content development and production.",
  ["Conceptualización", "Eventos", "Producción"], ["Conceptualization", "Events", "Production"]),

"sap-partner-summit": ("Partner Summit", "Partner Summit", "eventos-corporativos",
  "Convención internacional para 250 participantes entre España y Estados Unidos: localización, food & beverage, staff, logística y viajes, contenido creativo y desarrollo gráfico.",
  "International convention for 250 participants across Spain and the United States: location, food & beverage, staff, logistics and travel, creative content and graphic development.",
  ["Localización", "Food & Beverage", "Staff", "Logística"], ["Location", "Food & Beverage", "Staff", "Logistics"]),

"applus-family-day": ("Family Day", "Family Day", "eventos-corporativos",
  "Concepto y desarrollo gráfico, actividades, staff y logística para la jornada de puertas abiertas con las familias de la compañía.",
  "Concept and graphic development, activities, staff and logistics for the company’s family open day.",
  ["Concepto", "Actividades", "Staff", "Logística"], ["Concept", "Activities", "Staff", "Logistics"]),

"cocacola-grandvalira": ("Grandvalira", "Grandvalira", "street-marketing",
  "Activación de marca en las pistas de esquí de Grandvalira, con una acción de marketing de guerrilla vinculada al consumo.",
  "Brand activation on the ski slopes of Grandvalira, with a guerrilla marketing action tied to consumption.",
  ["Conceptualización", "Marca", "Marketing de guerrilla"], ["Conceptualization", "Brand", "Guerrilla marketing"]),

"avianca": ("Nueva ruta Madrid–Medellín", "New Madrid–Medellín route", "street-marketing",
  "Acción promocional en centros comerciales de Madrid y Medellín para el lanzamiento de la nueva ruta comercial. Coordinación, producción audiovisual y logística.",
  "Promotional action in shopping centres in Madrid and Medellín for the launch of the new commercial route. Coordination, audiovisual production and logistics.",
  ["Coordinación", "Producción audiovisual", "Logística"], ["Coordination", "Audiovisual production", "Logistics"]),

"haribo": ("Activación 360", "360 activation", "activacion-de-marca",
  "Acción promocional en grandes superficies con un desarrollo 360 que incluyó activación en el punto de venta, campaña de publicidad exterior y un juego disponible en Google Play y App Store.",
  "A promotional action in large retail stores with a 360 rollout: point-of-sale activation, an outdoor advertising campaign and a game released on Google Play and the App Store.",
  ["Conceptualización", "Promoción", "App"], ["Conceptualization", "Promotion", "App"]),

"glenfiddich": ("Afterworks", "Afterworks", "activacion-de-marca",
  "Afterworks Glenfiddich en Madrid, Barcelona, Valencia y Málaga. Desarrollo conceptual de la acción y del conjunto de materiales gráficos, mecánica de consumo y producción del evento.",
  "Glenfiddich Afterworks in Madrid, Barcelona, Valencia and Málaga. Conceptual development of the action and its full set of graphic materials, consumption mechanics and event production.",
  ["Conceptualización", "Marca", "Producción"], ["Conceptualization", "Brand", "Production"]),

"ikea-marruecos": ("Lanzamiento de catálogo", "Catalogue launch", "activacion-de-marca",
  "Conceptualización y campaña de lanzamiento del nuevo catálogo para IKEA Marruecos: piezas gráficas, materiales para punto de venta, acciones de street marketing y concurso en redes sociales.",
  "Conceptualization and launch campaign for the new IKEA Morocco catalogue: graphic pieces, point-of-sale materials, street marketing actions and a social media contest.",
  ["Conceptualización", "Campaña", "Desarrollo gráfico"], ["Conceptualization", "Campaign", "Graphic development"]),

"perrier": ("Activación Bélgica", "Belgium activation", "activacion-de-marca",
  "Activación de marca en Bélgica: concepto y creatividad, desarrollo gráfico, producción del set y staff.",
  "Brand activation in Belgium: concept and creative, graphic development, set production and staff.",
  ["Concepto", "Desarrollo gráfico", "Producción", "Staff"], ["Concept", "Graphic development", "Production", "Staff"]),

"alcon-air-optix": ("Air Optix Road Show", "Air Optix Road Show", "lanzamiento",
  "Campaña paneuropea para el lanzamiento de una nueva línea de lentillas. Concepto creativo, miniserie con jingle propio para presentar The Hydraglyde Family, app con realidad aumentada para profesionales y un road show por 8 ciudades de España y Portugal.",
  "A pan-European campaign for the launch of a new contact lens line. Creative concept, a mini-series with its own jingle to present The Hydraglyde Family, an augmented-reality app for professionals and a road show across 8 cities in Spain and Portugal.",
  ["Conceptualización", "Diseño", "Producción", "App AR"], ["Conceptualization", "Design", "Production", "AR app"]),

"alcon-incontact": ("InContact", "InContact", "lanzamiento",
  "Campaña paneuropea de conceptualización y lanzamiento de la nueva plataforma de e-commerce. Desarrollo de todos los materiales gráficos y del sales folder, y road show de presentación en 8 ciudades de España y Portugal.",
  "A pan-European campaign to conceptualize and launch the new e-commerce platform. Development of all graphic materials and the sales folder, plus a presentation road show across 8 cities in Spain and Portugal.",
  ["Conceptualización", "Creación", "Producción"], ["Conceptualization", "Creation", "Production"]),

"dr-scholl": ("Nueva colección", "New collection", "lanzamiento",
  "Diseño y producción de material gráfico y de soporte para el lanzamiento de la nueva colección. Interiorismo y producción de los eventos, casting y producción de desfile, con acciones para el canal farmacia en España y Portugal.",
  "Design and production of graphic and support material for the new collection launch. Interior design and event production, casting and fashion show production, with actions for the pharmacy channel in Spain and Portugal.",
  ["Coordinación", "Producción", "Desfile"], ["Coordination", "Production", "Fashion show"]),

"petit-farm": ("Identidad y web", "Identity and website", "imagen-corporativa",
  "Diseño de marca y desarrollo del sistema de identidad, con diseño e implementación del website.",
  "Brand design and identity system development, including website design and implementation.",
  ["Identidad gráfica", "Web"], ["Graphic identity", "Web"]),

"metaembalatges": ("Branding y contenidos", "Branding and content", "imagen-corporativa",
  "Branding, creación de contenidos y web, fotografía y vídeo.",
  "Branding, content creation and website, photography and video.",
  ["Branding", "Web", "Fotografía y vídeo"], ["Branding", "Web", "Photo & video"]),

"panoma": ("Identidad para real estate", "Real estate identity", "imagen-corporativa",
  "Start up dedicada al desarrollo inmobiliario en México. Desarrollo de imagen corporativa, producción de catálogos, fichas de producto y guías de compra, evento de presentación y desarrollo de la web y sus contenidos.",
  "A start-up in real estate development in Mexico. Corporate identity development, production of catalogues, product sheets and buying guides, a launch event and the development of the website and its content.",
  ["Identidad gráfica", "Web", "Editorial", "Eventos"], ["Graphic identity", "Web", "Editorial", "Events"]),

"alcon-air-optix-video": ("La miniserie", "The mini-series", "video",
  "Creación de una miniserie para el lanzamiento de la nueva gama de productos de la marca. Desarrollo, gestión y supervisión del guion, jingle, vestuario, localizaciones, casting y rodaje.",
  "Creation of a mini-series for the launch of the brand’s new product range. Development, management and supervision of the script, jingle, wardrobe, locations, casting and shoot.",
  ["Concepto creativo", "Dirección de arte", "Rodaje"], ["Creative concept", "Art direction", "Shoot"]),

"cocacola-on-air": ("On Air", "On Air", "video",
  "Creación y desarrollo del vídeo concepto para el lanzamiento del programa On Air.",
  "Creation and development of the concept video for the launch of the On Air programme.",
  ["Concepto creativo", "Desarrollo", "Dirección de arte"], ["Creative concept", "Development", "Art direction"]),

"cocacola-segmentacion": ("Segmentación", "Segmentation", "video",
  "Creación y desarrollo del vídeo concepto para la red de comerciales de Coca-Cola.",
  "Creation and development of the concept video for the Coca-Cola sales network.",
  ["Concepto creativo", "Desarrollo", "Dirección de arte"], ["Creative concept", "Development", "Art direction"]),

"walk-me": ("Vídeo corporativo", "Corporate video", "video",
  "Guion, edición y dirección creativa del vídeo corporativo.",
  "Script, editing and creative direction of the corporate video.",
  ["Guion", "Edición", "Dirección creativa"], ["Script", "Editing", "Creative direction"]),

"ipsen-farma": ("Convención de ventas", "Sales convention", "convenciones",
  "Convención anual de ventas: concepto y comunicación, producción y logística de participantes, con desarrollo de actividades e implementación en Finlandia.",
  "Annual sales convention: concept and communication, production and attendee logistics, with activity development and implementation in Finland.",
  ["Conceptualización", "Organización", "Producción"], ["Conceptualization", "Organization", "Production"]),

"puig-brand-ambassadors": ("208 Brand Ambassadors", "208 Brand Ambassadors", "convenciones",
  "Convención anual en Barcelona producida para 208 Brand Ambassadors de todo el mundo. Diseño y comunicación, producción audiovisual, coordinación y logística.",
  "Annual convention in Barcelona produced for 208 Brand Ambassadors from around the world. Design and communication, audiovisual production, coordination and logistics.",
  ["Diseño", "Coordinación", "Producción audiovisual"], ["Design", "Coordination", "Audiovisual production"]),

"coty-prestige": ("Convención en Cannes", "Convention in Cannes", "convenciones",
  "Convención anual en Cannes, Francia: concepto y comunicación, producción y logística de participantes.",
  "Annual convention in Cannes, France: concept and communication, production and attendee logistics.",
  ["Conceptualización", "Producción", "Logística"], ["Conceptualization", "Production", "Logistics"]),

"sd-distribucion": ("The Sand Games", "The Sand Games", "convenciones",
  "Convención de clientes en Marruecos: concepto creativo y desarrollo gráfico, site dedicado, staff, localizaciones y logística de viajes.",
  "Client convention in Morocco: creative concept and graphic development, a dedicated site, staff, locations and travel logistics.",
  ["Concepto creativo", "Site dedicado", "Staff", "Logística"], ["Creative concept", "Dedicated site", "Staff", "Logistics"]),

"cocacola-gda-2018": ("GDA 2018", "GDA 2018", "incentivos",
  "Plan de incentivos para la red comercial de Coca-Cola mediante herramientas web motivacionales. Desarrollo de front y back office, gestión de contenidos, gamificación y formación, con el employee engagement como objetivo.",
  "An incentive plan for the Coca-Cola sales network built on motivational web tools. Front and back office development, content management, gamification and training, with employee engagement as the goal.",
  ["Desarrollo", "Gamificación", "Formación"], ["Development", "Gamification", "Training"]),

"sap-team-cooking": ("Team Cooking", "Team Cooking", "team-building",
  "Taller de cocina como jornada de formación y motivación para el equipo.",
  "A cooking workshop as a training and motivation day for the team.",
  ["Conceptualización", "Coordinación", "Producción"], ["Conceptualization", "Coordination", "Production"]),

"chopard": ("E-learning de fragancias", "Fragrance e-learning", "e-learnings",
  "Conceptualización y desarrollo del e-learning de formación para vendedor@s de todo el mundo con motivo del lanzamiento de nuevas fragancias. Contenidos de vídeo, documentos de referencia, contenidos interactivos y back office de seguimiento.",
  "Conceptualization and development of the training e-learning for sales staff worldwide for the launch of new fragrances. Video content, reference documents, interactive content and a tracking back office.",
  ["Conceptualización", "Diseño", "E-learning"], ["Conceptualization", "Design", "E-learning"]),

"puig-good-girl": ("Good Girl", "Good Girl", "e-learnings",
  "Conceptualización y desarrollo del e-learning de formación para vendedor@s de todo el mundo con motivo del lanzamiento de nuevas fragancias. Contenidos de vídeo, documentos de referencia, contenidos interactivos y back office de seguimiento.",
  "Conceptualization and development of the training e-learning for sales staff worldwide for the launch of new fragrances. Video content, reference documents, interactive content and a tracking back office.",
  ["Conceptualización", "Diseño", "Producción"], ["Conceptualization", "Design", "Production"]),

"philipp-plein": ("Formación internacional", "International training", "e-learnings",
  "Conceptualización y desarrollo del material de formación para vendedor@s de todo el mundo con motivo del lanzamiento de nuevas fragancias: presentación y documentos de referencia (training guidelines, leaflet, selling ceremony e invitaciones).",
  "Conceptualization and development of training material for sales staff worldwide for the launch of new fragrances: presentation and reference documents (training guidelines, leaflet, selling ceremony and invitations).",
  ["Conceptualización", "Diseño", "Producción"], ["Conceptualization", "Design", "Production"]),

"isdin": ("Trofeu Conde de Godó", "Trofeu Conde de Godó", "rueda-de-prensa",
  "Presentación de producto durante el 58º Trofeu Conde de Godó. Convocatoria a medios del sector, deportes, moda y lifestyle, con clipping y seguimiento.",
  "Product presentation during the 58th Trofeu Conde de Godó. Media call across sector, sports, fashion and lifestyle outlets, with clipping and follow-up.",
  ["Clipping", "Conceptualización", "Producción"], ["Clipping", "Conceptualization", "Production"]),
}

DRIVE = {
    "walk-me": "1_JX4zmRVsrD5Y-hISU3S8qYYRrOuSIfl",
    "sd-distribucion": "1tiU8BsonEPSo28B6xs-PiIr01WhJz06L",
}


def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def main():
    man = json.load(open(MANIFEST, encoding="utf-8"))
    lines = []
    lines.append("// AUTO-GENERADO desde el dossier de credenciales. Editar el copy aquí.")
    lines.append('import type { Locale } from "@/lib/i18n";')
    lines.append("")
    lines.append("export type OtsVideo = { type: \"youtube\" | \"drive\"; id: string };")
    lines.append("export type OtsImage = { src: string; w: number; h: number };")
    lines.append("export type OtsProject = {")
    lines.append("  slug: string;")
    lines.append("  client: string;")
    lines.append("  title: Record<Locale, string>;")
    lines.append("  category: string;")
    lines.append("  description: Record<Locale, string>;")
    lines.append("  services: Record<Locale, string[]>;")
    lines.append("  video?: OtsVideo;")
    lines.append("  images: OtsImage[];")
    lines.append("};")
    lines.append("")
    lines.append("export const OTS_CATEGORIES: { slug: string; label: Record<Locale, string> }[] = [")
    for cs, es, en in CATEGORIES:
        lines.append(f'  {{ slug: "{cs}", label: {{ es: "{esc(es)}", en: "{esc(en)}" }} }},')
    lines.append("];")
    lines.append("")
    lines.append("export const OTS_PROJECTS: OtsProject[] = [")
    for p in man:
        slug = p["slug"]
        if slug not in COPY:
            raise SystemExit("falta copy para " + slug)
        t_es, t_en, cat, d_es, d_en, s_es, s_en = COPY[slug]
        lines.append("  {")
        lines.append(f'    slug: "{slug}",')
        lines.append(f'    client: "{esc(p["client"])}",')
        lines.append(f'    title: {{ es: "{esc(t_es)}", en: "{esc(t_en)}" }},')
        lines.append(f'    category: "{cat}",')
        lines.append(f'    description: {{\n      es: "{esc(d_es)}",\n      en: "{esc(d_en)}",\n    }},')
        se = ", ".join(f'"{esc(x)}"' for x in s_es)
        sn = ", ".join(f'"{esc(x)}"' for x in s_en)
        lines.append(f'    services: {{ es: [{se}], en: [{sn}] }},')
        if p.get("video"):
            lines.append(f'    video: {{ type: "youtube", id: "{p["video"]}" }},')
        elif slug in DRIVE:
            lines.append(f'    video: {{ type: "drive", id: "{DRIVE[slug]}" }},')
        lines.append("    images: [")
        for im in p["images"]:
            lines.append(f'      {{ src: "{im["src"]}", w: {im["w"]}, h: {im["h"]} }},')
        lines.append("    ],")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    lines.append("export function getOtsProject(slug: string) {")
    lines.append("  return OTS_PROJECTS.find((p) => p.slug === slug);")
    lines.append("}")
    lines.append("")
    lines.append("/** Categories that actually have projects, in dossier order. */")
    lines.append("export function usedCategories() {")
    lines.append("  return OTS_CATEGORIES.filter((c) => OTS_PROJECTS.some((p) => p.category === c.slug));")
    lines.append("}")
    lines.append("")

    with open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(lines))
    print("escrito", OUT, len(man), "proyectos")


if __name__ == "__main__":
    main()
