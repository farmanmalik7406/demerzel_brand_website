import { images } from "../lib/assets";

export type Solution = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  challenge: string;
  image: string;
  categories: string[];
  capabilities: string[];
  families: string[];
};

export const solutions: Solution[] = [
  {
    slug: "wildlife",
    title: "Wildlife & Conservation",
    eyebrow: "Observe and monitor",
    description: "Field technology for observation, monitoring and conservation-led field work.",
    challenge: "Wildlife work asks for careful observation, reliable field instruments and clear technical information without overstating the equipment.",
    image: images.fieldBird,
    categories: ["Optics", "Camera Traps", "Telemetry", "Thermal Imaging", "Range Finding"],
    capabilities: ["Observe", "Monitor", "Protect"],
    families: ["DRISHTI", "TEJAS", "CHAKOR", "RAKSHAK", "VANRAAJ"]
  },
  {
    slug: "forestry",
    title: "Forestry",
    eyebrow: "Patrol and navigate",
    description: "Equipment areas for forest patrolling, navigation, observation and field awareness.",
    challenge: "Forestry teams operate across changing terrain where navigation, observation and communication-adjacent equipment categories matter.",
    image: images.navigation,
    categories: ["GPS / Navigation", "Compasses", "Optics", "Search Lights", "Camera Traps"],
    capabilities: ["Navigate", "Observe", "Monitor"],
    families: ["DRISHTI", "TEJAS", "RAKSHAK"]
  },
  {
    slug: "survey-mapping",
    title: "Survey & Mapping",
    eyebrow: "Measure and map",
    description: "Catalogue-supported areas for surveying equipment, navigation and field instruments.",
    challenge: "Survey and mapping work depends on precise instruments, stable workflows and well-organized technical resources.",
    image: images.survey,
    categories: ["Surveying", "GPS / Navigation", "Range Finding", "Drones", "Compasses"],
    capabilities: ["Navigate", "Explore"],
    families: ["TEJAS", "VANRAAJ"]
  },
  {
    slug: "security",
    title: "Security & Surveillance",
    eyebrow: "Observe at distance",
    description: "Observation, range finding, lighting and monitoring categories for security-led field contexts.",
    challenge: "Surveillance contexts require careful language: the site presents equipment categories without implying verified deployments or official relationships.",
    image: images.rangeFinder,
    categories: ["Long Range Optics", "Range Finding", "Thermal Imaging", "Lighting", "Night Vision"],
    capabilities: ["Observe", "Monitor", "Protect"],
    families: ["CHAKOR", "RAKSHAK", "VANRAAJ"]
  },
  {
    slug: "research",
    title: "Research",
    eyebrow: "Record and understand",
    description: "A broad field-technology lens for observation, instrumentation and technical resources.",
    challenge: "Research teams need traceable technical information and equipment grouped by mission rather than exaggerated marketing claims.",
    image: images.cameraTrap,
    categories: ["Camera Traps", "Telemetry", "Microscopes", "GPS / Navigation", "Optics"],
    capabilities: ["Observe", "Monitor", "Explore"],
    families: ["DRISHTI", "TEJAS", "NAKSHATRA"]
  },
  {
    slug: "outdoor",
    title: "Outdoor Exploration",
    eyebrow: "Explore with clarity",
    description: "Navigation, optics, astronomy and outdoor equipment areas for exploration-oriented use.",
    challenge: "Outdoor exploration benefits from clear category paths across optics, navigation, lighting and astronomy without becoming a retail storefront.",
    image: images.astronomy,
    categories: ["Optics", "GPS / Navigation", "Lighting", "Astronomy", "Multi-tools"],
    capabilities: ["Navigate", "Observe", "Explore"],
    families: ["TEJAS", "VANRAAJ", "NAKSHATRA"]
  }
];

export const findSolution = (slug = "") => solutions.find((solution) => solution.slug === slug);
