export type ProductSpecification = {
  key: string;
  label: string;
  value: string | number | boolean;
  unit?: string;
  group: string;
  source?: string;
  verified?: boolean;
};

export type ProductImage = {
  url: string;
  alt: string;
  sortOrder?: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  series?: string;
  category: string;
  shortDescription?: string;
  applications: string[];
  features?: string[];
  specifications: ProductSpecification[];
  images: ProductImage[];
  dataQualityStatus?: "verified" | "needs_review";
};

type ProductSeed = {
  id: string;
  name: string;
  series: string;
  shortDescription: string;
  applications: string[];
  image: string;
  specs: ProductSpecification[];
  dataQualityStatus?: "verified" | "needs_review";
};

const source = "Vanrakshak catalogue";

const spec = (
  key: string,
  label: string,
  value: string | number | boolean,
  unit: string | undefined,
  group: string
): ProductSpecification => ({
  key,
  label,
  value,
  unit,
  group,
  source,
  verified: true
});

const fieldSpecs = [
  spec("waterproof", "Waterproof", "Yes", undefined, "Field"),
  spec("nitrogen_filled", "Nitrogen filled", "Yes", undefined, "Field"),
  spec("carrying_case", "Carrying case", "Yes", undefined, "Field")
];

const roofBk7 = [
  spec("prism", "Prism", "ROOF/BK7", undefined, "Optical"),
  spec("lens_coating", "Lens coating", "FMC", undefined, "Optical"),
  spec("prism_coating", "Prism coating", "Aluminium", undefined, "Optical")
];

const edBak4 = [
  spec("ed_glass", "ED glass", "Yes", undefined, "Optical"),
  spec("prism", "Prism", "ROOF/BAK4", undefined, "Optical"),
  spec("lens_coating", "Lens coating", "FMC", undefined, "Optical")
];

const phaseAgFmc = spec("prism_coating", "Prism coating", "Phase / Ag / FMC", undefined, "Optical");
const phaseDielectricFmc = spec("prism_coating", "Prism coating", "Phase + Dielectric + FMC", undefined, "Optical");

const seeds: ProductSeed[] = [
  {
    id: "drishti-8x42",
    name: "DRISHTI 8X42",
    series: "DRISHTI",
    shortDescription: "8X field binocular positioned for wildlife professionals, forest guards, birders and nature observation.",
    applications: ["Wildlife", "Forestry", "Birding", "Patrolling"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p01-img01.png",
    specs: [
      spec("magnification", "Magnification", "8", "X", "Optical"),
      spec("objective", "Objective diameter", "42", "mm", "Optical"),
      spec("angular_fov", "Angular FOV", "5.5", "deg", "Field of View"),
      spec("linear_fov", "Linear FOV", "96m/288ft", undefined, "Field of View"),
      spec("close_focus", "Close focus", "5.1", "m", "Optical"),
      ...roofBk7,
      spec("weight", "Weight", "520", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "drishti-10x42",
    name: "DRISHTI 10X42",
    series: "DRISHTI",
    shortDescription: "10X field binocular for wildlife protection, patrolling and detailed nature observation.",
    applications: ["Wildlife", "Forestry", "Birding", "Patrolling"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p02-img01.png",
    specs: [
      spec("magnification", "Magnification", "10", "X", "Optical"),
      spec("objective", "Objective diameter", "42", "mm", "Optical"),
      spec("angular_fov", "Angular FOV", "5.3", "deg", "Field of View"),
      spec("linear_fov", "Linear FOV", "92.8m/278ft", undefined, "Field of View"),
      spec("close_focus", "Close focus", "4.3", "m", "Optical"),
      ...roofBk7,
      spec("weight", "Weight", "520", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "tejas-8x42",
    name: "TEJAS 8X42",
    series: "TEJAS",
    shortDescription: "8X42 binocular positioned for nature lovers, wildlife professionals, safari and outdoor observation.",
    applications: ["Wildlife", "Outdoor", "Safari", "Surveillance"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p04-img01.png",
    specs: [
      spec("magnification", "Magnification", "8", "X", "Optical"),
      spec("objective", "Objective diameter", "42", "mm", "Optical"),
      spec("angular_fov", "Angular FOV", "7.4", "deg", "Field of View"),
      ...roofBk7,
      spec("weight", "Weight", "625", "g", "Physical"),
      ...fieldSpecs.slice(0, 2)
    ]
  },
  {
    id: "tejas-10x42",
    name: "TEJAS 10X42",
    series: "TEJAS",
    shortDescription: "10X42 binocular for long-distance viewing, wildlife work and outdoor field use.",
    applications: ["Wildlife", "Outdoor", "Safari", "Surveillance"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p04-img03.png",
    specs: [
      spec("magnification", "Magnification", "10", "X", "Optical"),
      spec("objective", "Objective diameter", "42", "mm", "Optical"),
      spec("angular_fov", "Angular FOV", "5.6", "deg", "Field of View"),
      ...roofBk7,
      spec("weight", "Weight", "650", "g", "Physical"),
      ...fieldSpecs.slice(0, 2)
    ]
  },
  {
    id: "tejas-10x42-pro",
    name: "TEJAS 10X42 Pro",
    series: "TEJAS",
    shortDescription: "10X42 Pro binocular with catalogue positioning for surveillance, trekking and long-distance viewing.",
    applications: ["Wildlife", "Outdoor", "Trekking", "Surveillance"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p04-img04.png",
    specs: [
      spec("magnification", "Magnification", "10", "X", "Optical"),
      spec("objective", "Objective diameter", "42", "mm", "Optical"),
      spec("angular_fov", "Angular FOV", "6.1", "deg", "Field of View"),
      ...roofBk7,
      spec("weight", "Weight", "600", "g", "Physical"),
      ...fieldSpecs.slice(0, 2)
    ]
  },
  {
    id: "tejas-12x50",
    name: "TEJAS 12X50",
    series: "TEJAS",
    shortDescription: "12X50 binocular for extended viewing needs across safari, surveillance and outdoor observation.",
    applications: ["Wildlife", "Outdoor", "Safari", "Surveillance"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p04-img16.png",
    specs: [
      spec("magnification", "Magnification", "12", "X", "Optical"),
      spec("objective", "Objective diameter", "50", "mm", "Optical"),
      spec("angular_fov", "Angular FOV", "5", "deg", "Field of View"),
      ...roofBk7,
      spec("weight", "Weight", "760", "g", "Physical"),
      ...fieldSpecs.slice(0, 2)
    ]
  },
  {
    id: "chakor-8x42",
    name: "CHAKOR 8X42",
    series: "CHAKOR",
    shortDescription: "8X42 binocular positioned for wildlife, hiking, birdwatching and outdoor sports.",
    applications: ["Wildlife", "Hiking", "Birding", "Outdoor Sports", "Surveillance"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p06-img01.jpeg",
    specs: [
      spec("magnification", "Magnification", "8", "X", "Optical"),
      spec("objective", "Objective diameter", "42", "mm", "Optical"),
      ...roofBk7,
      spec("weight", "Weight", "650", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "chakor-10x42",
    name: "CHAKOR 10X42",
    series: "CHAKOR",
    shortDescription: "10X42 binocular for long-distance viewing, birdwatching and security surveillance contexts.",
    applications: ["Wildlife", "Hiking", "Birding", "Outdoor Sports", "Surveillance"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p06-img03.png",
    specs: [
      spec("magnification", "Magnification", "10", "X", "Optical"),
      spec("objective", "Objective diameter", "42", "mm", "Optical"),
      ...roofBk7,
      spec("weight", "Weight", "650", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "rakshak-10x50",
    name: "RAKSHAK 10X50",
    series: "RAKSHAK",
    shortDescription: "10X50 field binocular positioned for forest surveillance, wildlife monitoring and patrol operations.",
    applications: ["Forest Surveillance", "Wildlife Monitoring", "Border Patrol", "Defence", "Patrolling"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p08-img01.png",
    specs: [
      spec("magnification", "Magnification", "10", "X", "Optical"),
      spec("objective", "Objective diameter", "50", "mm", "Optical"),
      ...roofBk7,
      spec("weight", "Weight", "765", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "rakshak-12x50",
    name: "RAKSHAK 12X50",
    series: "RAKSHAK",
    shortDescription: "12X50 binocular for rugged field operations across surveillance, monitoring and tactical patrol contexts.",
    applications: ["Forest Surveillance", "Wildlife Monitoring", "Border Patrol", "Defence", "Patrolling"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p08-img04.png",
    specs: [
      spec("magnification", "Magnification", "12", "X", "Optical"),
      spec("objective", "Objective diameter", "50", "mm", "Optical"),
      ...roofBk7,
      spec("weight", "Weight", "765", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "vanraaj-8x42-ed",
    name: "VANRAAJ 8X42 ED",
    series: "VANRAAJ",
    shortDescription: "8X42 ED binocular for safaris, jungle treks, nature trails and challenging terrain.",
    applications: ["Wildlife", "Outdoor", "Birding", "Safari", "Trekking"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p10-img01.png",
    specs: [
      spec("magnification", "Magnification", "8", "X", "Optical"),
      spec("objective", "Objective diameter", "42", "mm", "Optical"),
      ...edBak4,
      phaseAgFmc,
      spec("weight", "Weight", "700", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "vanraaj-10x42-ed",
    name: "VANRAAJ 10X42 ED",
    series: "VANRAAJ",
    shortDescription: "10X42 ED binocular for safaris, birding and extended-range observation.",
    applications: ["Wildlife", "Outdoor", "Birding", "Safari", "Trekking"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p05-img01.png",
    specs: [
      spec("magnification", "Magnification", "10", "X", "Optical"),
      spec("objective", "Objective diameter", "42", "mm", "Optical"),
      ...edBak4,
      phaseAgFmc,
      spec("weight", "Weight", "700", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "vanraaj-10x50-ed",
    name: "VANRAAJ 10X50 ED",
    series: "VANRAAJ",
    shortDescription: "10X50 ED binocular with catalogue positioning for wildlife, birding and demanding terrain.",
    applications: ["Wildlife", "Outdoor", "Birding", "Safari", "Trekking"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p10-img08.png",
    specs: [
      spec("magnification", "Magnification", "10", "X", "Optical"),
      spec("objective", "Objective diameter", "50", "mm", "Optical"),
      ...edBak4,
      phaseAgFmc,
      spec("weight", "Weight", "900", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "vanraaj-12x50-ed",
    name: "VANRAAJ 12X50 ED",
    series: "VANRAAJ",
    shortDescription: "12X50 ED binocular for extended-range observation in safaris, trails and challenging field conditions.",
    applications: ["Wildlife", "Outdoor", "Birding", "Safari", "Trekking"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p10-img03.png",
    specs: [
      spec("magnification", "Magnification", "12", "X", "Optical"),
      spec("objective", "Objective diameter", "50", "mm", "Optical"),
      ...edBak4,
      phaseAgFmc,
      spec("weight", "Weight", "900", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "nakshatra-12x56-ed",
    name: "NAKSHATRA 12X56 ED",
    series: "NAKSHATRA",
    shortDescription: "12X56 ED astronomy binocular for stargazing and celestial observation.",
    applications: ["Astronomy", "Stargazing", "Outdoor"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p12-img01.png",
    specs: [
      spec("magnification", "Magnification", "12", "X", "Optical"),
      spec("objective", "Objective diameter", "56", "mm", "Optical"),
      ...edBak4,
      phaseDielectricFmc,
      spec("weight", "Weight", "1214", "g", "Physical"),
      ...fieldSpecs
    ]
  },
  {
    id: "nakshatra-15x56-ed",
    name: "NAKSHATRA 15X56 ED",
    series: "NAKSHATRA",
    shortDescription: "15X56 ED astronomy binocular for stars, planets, the Moon and deep-sky observation.",
    applications: ["Astronomy", "Stargazing", "Outdoor"],
    image: "/assets/product-images/vanrakshak/vanrakshak-p14-img01.png",
    dataQualityStatus: "needs_review",
    specs: [
      spec("magnification", "Magnification", "15", "X", "Optical"),
      spec("objective", "Objective diameter", "56", "mm", "Optical"),
      ...edBak4,
      phaseDielectricFmc,
      spec("weight", "Weight", "1178", "g", "Physical"),
      ...fieldSpecs
    ]
  }
];

export const products: Product[] = seeds.map((item) => ({
  id: item.id,
  slug: item.id,
  name: item.name,
  brand: "Vanrakshak",
  series: item.series,
  category: "Optics",
  shortDescription: item.shortDescription,
  applications: item.applications,
  specifications: item.specs,
  images: [{ url: item.image, alt: item.name, sortOrder: 1 }],
  dataQualityStatus: item.dataQualityStatus || "verified"
}));

export default products;
