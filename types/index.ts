export interface KeyMetric {
  value: string;
  label: string;
  sublabel: string;
}

export interface SpecCategory {
  title: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface ApplicationCase {
  title: string;
  description: string;
  payloadBenefit: string;
}

export interface ColorOption {
  name: string;
  hex: string;
  bgClass: string;
}

export interface Vehicle {
  id: string;
  name: string;
  brandName: string;
  modelCode: string;
  tagline: string;
  category: "SCV" | "BUS" | "TRUCK";
  categoryName: string;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  cockpitImage: string;
  badge: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  targetAudience: string;

  // High level highlights
  gvws: string;
  ratedPayload: string;
  volumetricCapacity: string;
  rangeKm: string;
  batteryCapacityKwh: string;
  chargingTimeFast: string;
  topSpeedKmH: string;
  gradabilityPercent: string;

  // Structured Specification tabs
  keyMetrics: KeyMetric[];
  specifications: SpecCategory[];
  chargingSpecifications?: any[];
  specificationSections?: {
    title: string;
    specifications: {
      label: string;
      value: string;
    }[];
  }[];
  specificationPdf?: string;
  applications: ApplicationCase[];
  colors: ColorOption[];
  detailedSpecsTable: any[];
  heroStats: any[];
  highlights: any[];
  keySpecs: any;
  warrantyYears: number;
  economics: any;
  video: any;
  warrantyKm: number;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  role: string;
  partnerBrand: string;
  descriptor: string;
  headquarters: {
    address: string;
    city: string;
    country: string;
    phonePrimary: string;
    phoneSales: string;
    whatsappDirect: string;
    whatsappFormatted: string;
    emailGeneral: string;
    emailSales: string;
    hours: string;
  };
  serviceHubs: {
    region: string;
    location: string;
    contact: string;
    facilities: string[];
  }[];
  chargingInfrastructure: {
    title: string;
    description: string;
    supportedStandards: string[];
  };
}

export interface MediaArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  readTime: string;
  summary: string;
  url: string;
  category: "Press Release" | "Industry Review" | "Fleet Transition";
  image: string;
}
