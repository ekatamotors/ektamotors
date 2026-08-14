import { Vehicle } from "@/types";

export const BUS_IMAGE = "/images/eka_electric_bus_178659932320.jpg";
export const TRUCK_IMAGE = "/images/eka_electric_truck_17865993355.jpg";
export const VAN_IMAGE = "/images/eka_electric_van_178659934902.jpg";

// Or organize them as a single object:
export const IMAGES = {
  bus: "/images/eka_electric_bus_178659932320.jpg",
  truck: "/images/eka_electric_truck_17865993355.jpg",
  van: "/images/eka_electric_van_178659934902.jpg",
};

// High-quality interior/cockpit and vehicle fallback images
const cockpitCabinImg =
  "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200";
const truckChassisImg =
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200";
const busInteriorImg =
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1200";
const cargoBoxImg =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200";
const scvThreeWheelImg =
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200";

export const PRODUCTS_DATA: Vehicle[] = [
  // ===================== TRUCKS =====================
  {
    id: "eka-55t",
    name: "EKA 55T Heavy Duty Electric Tractor",
    brandName: "EKA Mobility",
    category: "trucks",
    categoryName: "Electric Heavy Commercial Truck",
    tagline: "Built for More: Delivering Heavy-Duty Logistics Sustainably",
    shortDescription:
      "EKA 55T offers unmatched efficiency and reliability. Designed for maximum impact, the EKA 55T can be paired with a range of trailers from flatbeds to tankers, for diverse cargo needs.",
    fullDescription:
      "The EKA 55T is a flagship heavy-duty electric tractor trailer engineered for heavy haulage, dry ports, cement transit, and interstate freight routes. Delivering a massive 2500 Nm peak torque and 400 kW peak power, it easily replaces legacy 55-tonne diesel prime movers with up to 75% fuel cost savings and zero tailpipe emissions.",
    image: IMAGES.truck,
    cockpitImage: cockpitCabinImg,
    galleryImages: [IMAGES.truck, truckChassisImg, cockpitCabinImg],
    heroStats: [
      { label: "Peak Power", value: "400 kW" },
      { label: "Peak Torque", value: "2500 Nm" },
      { label: "Charging Socket", value: "CCS 2 Dual Gun Provision" },
      { label: "Wheelbase", value: "4100 mm" },
      { label: "Gradeability", value: "30%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "PMSM Traction Motor",
          "Sturdy Ladder Chassis",
          "Parabolic Leaf Spring Front Suspension",
          "Bell Crank Leaf Spring Rear Suspension",
          "Flush-Mounted Battery Pack",
        ],
        image: cockpitCabinImg,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "D+1+1 Sleeper Berth with Ergonomic Recliners",
          "Automated Manual Transmission (AMT) with PTO provision",
          "HVAC Dual Zone Air Conditioning",
          "Digital Instrument Cluster & Driver Telematics Display",
        ],
        image: cockpitCabinImg,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Dual Circuit Air Disc Brakes with ABS",
          "Electronic Stability Control (ESC) & Hill Hold Assist",
          "Integrated Fire Suppression System (FSS)",
          "4G Connected Telematics & Driver Behavior Analytics",
        ],
        image: truckChassisImg,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "High energy density LFP battery chemistry with thermal management",
          "Dual Gun CCS2 DC Fast Charging (0 to 100% in 90 mins)",
          "Multi-mode Regenerative Braking recovers energy during steep descents",
          "Lowest per-ton kilometer logistics cost in its class",
        ],
        image: IMAGES.truck,
      },
    ],
    detailedSpecsTable: [
      { label: "GCW", value: "55000 kg" },
      { label: "Configurations", value: "6 X 4" },
      { label: "Vehicle L X W X H", value: "7115 X 2490 X 3028 mm" },
      { label: "Wheelbase", value: "4100 mm" },
      { label: "Ground Clearance", value: "256 mm" },
      { label: "Turning Circle Dia", value: "19 m" },
      { label: "Range", value: "Up to 200 km*" },
      { label: "Gradeability", value: "30%" },
      { label: "Max Speed", value: "80 kmph" },
      { label: "Chassis Type", value: "Ladder" },
      { label: "Seating Capacity", value: "D+1+1 Sleeper Berth" },
      { label: "Transmission", value: "Smart Auto AMT" },
      { label: "Gearbox", value: "4 Speed AMT PTO provision" },
      { label: "Steering", value: "Power Steering" },
      {
        label: "Suspension",
        value:
          "Front: Parabolic Leaf Spring with shock absorbers / Rear: Bell Crank Leaf Spring",
      },
    ],
    keySpecs: {
      rangeKm: 200,
      batteryCapacityKwh: 280,
      chargingTimeMins: 90,
      payloadCapacity: "55,000 kg GCW",
      motorPowerKw: 400,
      gradeabilityPercent: 30,
    },
    warrantyYears: 5,
    warrantyKm: 300000,
    economics: {
      dieselCostPerKmNpr: 48.0,
      evCostPerKmNpr: 11.2,
      monthlySavingsNpr: 165600,
      paybackMonths: 28,
      recommendedRoutesInNepal: [
        "Birgunj Dry Port - Kathmandu Cargo Corridor",
        "Bhairahawa - Pokhara Freight Route",
        "Chitwan - Kathmandu Cement Transit",
      ],
    },
    video: {
      title: "EKA 55T Heavy Duty Electric Prime Mover Haulage Test",
      youtubeId: "bTqVqk7FSmY",
      thumbnailUrl: IMAGES.truck,
      duration: "4:15",
      description:
        "Watch the EKA 55T heavy electric tractor haul full 55-tonne payload across highway grades with dual gun CCS2 fast charging demo.",
      chapters: [
        { time: "0:10", title: "6x4 Chassis Frame & PMSM Motor" },
        { time: "1:15", title: "Cabin Cockpit & AMT Transmission" },
        { time: "2:40", title: "Dual-Gun Fast Charging Test" },
      ],
    },
    specSections: [],
  },
  {
    id: "eka-7t",
    name: "EKA 7T Intermediate Electric Truck",
    brandName: "EKA Mobility",
    category: "trucks",
    categoryName: "Electric Cargo Truck",
    tagline: "Reliable Intermediate Freight Distribution with 7-Tonne GVW",
    shortDescription:
      "Versatile, high-efficiency 7-tonne commercial cargo truck tailored for regional logistics, FMCG distribution, and industrial deliveries.",
    fullDescription:
      "The EKA 7T electric truck provides a optimal payload capacity for medium-distance regional logistics and city feeder services. Powered by high safety LFP batteries and heavy-duty axles.",
    image: IMAGES.truck,
    cockpitImage: cockpitCabinImg,
    galleryImages: [IMAGES.truck, cargoBoxImg],
    heroStats: [
      { label: "Peak Power", value: "150 kW" },
      { label: "Peak Torque", value: "1100 Nm" },
      { label: "Charging Socket", value: "CCS 2 Fast Charging" },
      { label: "Wheelbase", value: "3360 mm" },
      { label: "Gradeability", value: "25%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "Heavy Duty Steel Ladder Frame",
          "Front & Rear Parabolic Leaf Springs",
          "IP67 Sealed Motor & Battery Drive Unit",
        ],
        image: IMAGES.truck,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "Spacious Ergonomic Day Cabin",
          "Air Conditioned Driver Environment",
          "Digital Dashboard with Battery Status",
        ],
        image: cockpitCabinImg,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Dual Circuit Hydraulic Brakes + ABS",
          "Telematics Fleet Management",
          "Reverse Parking Sensors & Camera",
        ],
        image: truckChassisImg,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "Up to 200 km Range on Single Charge",
          "Fast Charge 20% to 80% in 50 Mins",
          "Regenerative Braking Power Recovery",
        ],
        image: cargoBoxImg,
      },
    ],
    detailedSpecsTable: [
      { label: "GVW", value: "7000 kg" },
      { label: "Payload Capacity", value: "3800 kg" },
      { label: "Wheelbase", value: "3360 mm" },
      { label: "Overall Length", value: "5950 mm" },
      { label: "Range", value: "Up to 200 km*" },
      { label: "Max Speed", value: "80 kmph" },
      { label: "Gradeability", value: "25%" },
      { label: "Seating Capacity", value: "D+2" },
      { label: "Brakes", value: "Air Brakes with ABS" },
    ],
    keySpecs: {
      rangeKm: 200,
      batteryCapacityKwh: 120,
      chargingTimeMins: 50,
      payloadCapacity: "3,800 kg Payload",
      motorPowerKw: 150,
      gradeabilityPercent: 25,
    },
    warrantyYears: 5,
    warrantyKm: 250000,
    economics: {
      dieselCostPerKmNpr: 32.0,
      evCostPerKmNpr: 6.8,
      monthlySavingsNpr: 113400,
      paybackMonths: 24,
      recommendedRoutesInNepal: [
        "Kathmandu - Pokhara Feeder Route",
        "Itahari - Dharan Industrial Corridor",
        "Butwal - Bhairahawa Freight",
      ],
    },
    video: {
      title: "EKA 7T Electric Cargo Truck In-Depth Walkthrough",
      youtubeId: "bTqVqk7FSmY",
      thumbnailUrl: IMAGES.truck,
      duration: "3:30",
      description:
        "Explore the chassis layout, cargo deck options, and driver cabin of the EKA 7T electric truck.",
    },
    specSections: [],
  },

  // ===================== BUSES =====================
  {
    id: "eka-coach",
    name: "EKA Coach Luxury Intercity Electric Bus",
    brandName: "EKA Mobility",
    category: "buses",
    categoryName: "Intercity Highway Coach",
    tagline:
      "Silent, Long-Haul Highway Luxury Transit with Unmatched Passenger Comfort",
    shortDescription:
      "12-meter premium intercity electric coach with air suspension, high-back pushback seats, dual AC, and zero engine noise.",
    fullDescription:
      "The EKA Coach sets a new standard for intercity passenger transit across Nepal highways. Designed with an ultra-rigid structure, monocoque design, and high energy LFP battery packs for long range.",
    image: IMAGES.bus,
    cockpitImage: IMAGES.bus,
    galleryImages: [IMAGES.bus, IMAGES.bus],
    heroStats: [
      { label: "Peak Power", value: "250 kW" },
      { label: "Peak Torque", value: "3200 Nm" },
      { label: "Charging Socket", value: "CCS 2 Fast Dual Gun" },
      { label: "Wheelbase", value: "6200 mm" },
      { label: "Gradeability", value: "22%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "Monocoque Chassis Construction",
          "High Performance Air Suspension",
          "Rust-Proof Composite Body Panels",
        ],
        image: IMAGES.bus,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "45 + Driver Luxury Pushback Recliners",
          "Individual USB Ports & LED Reading Lights",
          "Ultra-Quiet Cabin with Thermal HVAC Insulation",
        ],
        image: IMAGES.bus,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Disc Brakes with ABS & EBS",
          "Automated Fire Detection & Suppression (FDSS)",
          "4G Live Telematics & Passenger Annunciator",
        ],
        image: IMAGES.bus,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "250+ km Highway Range",
          "Dual Gun Fast Charging in under 80 mins",
          "Smart Regenerative Power Harvesting",
        ],
        image: IMAGES.bus,
      },
    ],
    detailedSpecsTable: [
      { label: "Length", value: "12,000 mm" },
      { label: "Width", value: "2,600 mm" },
      { label: "Height", value: "3,600 mm" },
      { label: "Seating Capacity", value: "45 + Driver Recliners" },
      { label: "Battery Capacity", value: "320 kWh LFP" },
      { label: "Motor Power", value: "250 kW Peak" },
      { label: "Range", value: "Up to 280 km*" },
      { label: "Max Speed", value: "100 kmph" },
      {
        label: "Suspension",
        value: "Electronically Controlled Air Suspension (ECAS)",
      },
    ],
    keySpecs: {
      rangeKm: 280,
      batteryCapacityKwh: 320,
      chargingTimeMins: 80,
      payloadCapacity: "45 + D Passengers",
      motorPowerKw: 250,
      gradeabilityPercent: 22,
    },
    warrantyYears: 5,
    warrantyKm: 350000,
    economics: {
      dieselCostPerKmNpr: 45.0,
      evCostPerKmNpr: 10.2,
      monthlySavingsNpr: 156600,
      paybackMonths: 30,
      recommendedRoutesInNepal: [
        "Kathmandu - Pokhara Luxury Highway",
        "Kathmandu - Lumbini Route",
        "Kathmandu - Biratnagar Intercity",
      ],
    },
    video: {
      title: "EKA Coach Luxury Intercity Electric Bus Overview",
      youtubeId: "L_LUpnjgPso",
      thumbnailUrl: IMAGES.bus,
      duration: "4:10",
      description:
        "Tour the luxurious pushback seats, dual HVAC climate control, and silent highway ride of the EKA Coach.",
    },
    specSections: [],
  },
  {
    id: "eka-lf",
    name: "EKA LF Low Floor Municipal Transit Bus",
    brandName: "EKA Mobility",
    category: "buses",
    categoryName: "Low Floor City Bus",
    tagline: "Accessible, Zero-Emission Urban Transit for Smart Cities",
    shortDescription:
      "Ultra-low floor electric bus with wheelchair ramp, wide passenger doors, and smooth acceleration for urban city corridors.",
    fullDescription:
      "The EKA LF is engineered specifically for modern city transit fleets. Featuring a true low floor (400 mm ground-to-floor), kneeling suspension, and wheelchair access ramp for maximum accessibility.",
    image: IMAGES.bus,
    cockpitImage: IMAGES.bus,
    galleryImages: [IMAGES.bus, IMAGES.bus],
    heroStats: [
      { label: "Peak Power", value: "200 kW" },
      { label: "Peak Torque", value: "2500 Nm" },
      { label: "Floor Height", value: "400 mm Ultra Low Floor" },
      { label: "Wheelbase", value: "5900 mm" },
      { label: "Gradeability", value: "20%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "Corrosion-Resistant Monocoque Body",
          "ECAS Kneeling Air Suspension System",
          "Low Floor Double Passenger Doors",
        ],
        image: IMAGES.bus,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "Wheelchair Ramp & Dedicated Accessible Area",
          "High-Density Anti-Vandal Seats",
          "Full Passenger Information Display Screens",
        ],
        image: IMAGES.bus,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "E-Steering & Electronic Braking",
          "CCTV Interior Monitoring",
          "Door Safety Sensors & Emergency Open Valves",
        ],
        image: IMAGES.bus,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "Frequent Stop-and-Go Energy Regeneration",
          "200 km City Duty Cycle Range",
          "CCS2 Dual Plug DC Charging",
        ],
        image: IMAGES.bus,
      },
    ],
    detailedSpecsTable: [
      { label: "Length", value: "12,000 mm" },
      { label: "Floor Height", value: "400 mm Low Floor" },
      { label: "Passenger Capacity", value: "35 Seated + 30 Standing" },
      { label: "Accessibility", value: "Manual/Automatic Wheelchair Ramp" },
      { label: "Range", value: "200 km City Operations" },
      { label: "Suspension", value: "ECAS Air Suspension with Kneeling" },
    ],
    keySpecs: {
      rangeKm: 200,
      batteryCapacityKwh: 220,
      chargingTimeMins: 75,
      payloadCapacity: "65 Total Passengers",
      motorPowerKw: 200,
      gradeabilityPercent: 20,
    },
    warrantyYears: 5,
    warrantyKm: 300000,
    economics: {
      dieselCostPerKmNpr: 40.0,
      evCostPerKmNpr: 9.0,
      monthlySavingsNpr: 139500,
      paybackMonths: 32,
      recommendedRoutesInNepal: [
        "Kathmandu Valley Ring Road Transit",
        "Lalitpur - Bhaktapur Urban Corridor",
        "Pokhara City Bus Fleet",
      ],
    },
    video: {
      title: "EKA LF Low Floor City Transit Bus Demo",
      youtubeId: "L_LUpnjgPso",
      thumbnailUrl: IMAGES.bus,
      duration: "3:45",
      description:
        "See the kneeling air suspension, wheelchair ramp deployment, and passenger seating layout of the EKA LF bus.",
    },
    specSections: [],
  },
  {
    id: "eka-12m",
    name: "EKA 12M Electric City & Regional Bus",
    brandName: "EKA Mobility",
    category: "buses",
    categoryName: "12-Meter Electric Bus",
    tagline: "High Capacity Zero-Emission Passenger Carrier",
    shortDescription:
      "Heavy-duty 12-meter electric bus offering high passenger capacity, long operational range, and robust performance on hill routes.",
    fullDescription:
      "The EKA 12M provides clean municipal and regional transportation with low total cost of operation. Equipped with advanced modular LFP batteries and PMSM motor.",
    image: IMAGES.bus,
    cockpitImage: IMAGES.bus,
    galleryImages: [IMAGES.bus, IMAGES.bus],
    heroStats: [
      { label: "Peak Power", value: "250 kW" },
      { label: "Peak Torque", value: "3000 Nm" },
      { label: "Charging Socket", value: "CCS 2 Dual Plug" },
      { label: "Wheelbase", value: "6100 mm" },
      { label: "Gradeability", value: "22%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "Monocoque Steel Frame",
          "Heavy Duty Axles & Disc Brakes",
          "IP67 Battery Enclosures",
        ],
        image: IMAGES.bus,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "55 + Driver Seating",
          "Roof HVAC Air Conditioner",
          "Ergonomic Driver Control Panel",
        ],
        image: busInteriorImg,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Air Brakes + ABS + EBS",
          "Fire Extinguishing System",
          "Smart Fleet Telematics",
        ],
        image: cockpitCabinImg,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "Up to 240 km Range",
          "75 Mins Fast Charge",
          "Regenerative Braking system",
        ],
        image: IMAGES.bus,
      },
    ],
    detailedSpecsTable: [
      { label: "Length", value: "12,000 mm" },
      { label: "Width", value: "2,500 mm" },
      { label: "Seating Capacity", value: "55 + Driver" },
      { label: "Battery Capacity", value: "250 kWh" },
      { label: "Peak Power", value: "250 kW" },
      { label: "Range", value: "240 km" },
    ],
    keySpecs: {
      rangeKm: 240,
      batteryCapacityKwh: 250,
      chargingTimeMins: 75,
      payloadCapacity: "55 + D Seating",
      motorPowerKw: 250,
      gradeabilityPercent: 22,
    },
    warrantyYears: 5,
    warrantyKm: 300000,
    economics: {
      dieselCostPerKmNpr: 43.0,
      evCostPerKmNpr: 9.5,
      monthlySavingsNpr: 150750,
      paybackMonths: 31,
      recommendedRoutesInNepal: [
        "Kathmandu - Narayangarh Highway",
        "Pokhara - Lekhnath Corridor",
        "Nepalgunj - Surkhet Route",
      ],
    },
    video: {
      title: "EKA 12M Electric Bus Operational Test",
      youtubeId: "L_LUpnjgPso",
      thumbnailUrl: IMAGES.bus,
      duration: "4:00",
      description:
        "Review of the EKA 12M passenger bus performance and hill climbing capability.",
    },
    specSections: [],
  },
  {
    id: "eka-9m",
    name: "EKA 9M Monocoque Electric Bus",
    brandName: "EKA Mobility",
    category: "buses",
    categoryName: "9-Meter Electric Bus",
    tagline: "Nepal Highway & City Workhorse: Compact Length, Maximum Power",
    shortDescription:
      "Monocoque electric bus designed for Nepal hill roads, intercity shuttles, and municipal public transit.",
    fullDescription:
      "The EKA 9M (EKA E9) is engineered specifically for narrow roads and hill routes in Nepal. Featuring LFP battery chemistry, intelligent thermal management, dual CCS2 fast charging, and regenerative braking.",
    image: IMAGES.bus,
    cockpitImage: IMAGES.bus,
    galleryImages: [IMAGES.bus, IMAGES.bus],
    heroStats: [
      { label: "Peak Power", value: "200 kW" },
      { label: "Peak Torque", value: "2500 Nm" },
      { label: "Charging Socket", value: "CCS 2 Dual Gun" },
      { label: "Wheelbase", value: "4500 mm" },
      { label: "Gradeability", value: "22%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "Modular Monocoque Frame",
          "Air Suspension System",
          "Low Step Entry Design",
        ],
        image: IMAGES.bus,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "31 + Driver High Back Cushion Seats",
          "Powerful Roof HVAC Unit",
          "USB Ports & LED Cabin Lighting",
        ],
        image: busInteriorImg,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Dual Circuit Air Disc Brakes + ABS",
          "Fire Suppression System (FSS)",
          "4G Connected Telematics",
        ],
        image: cockpitCabinImg,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "220 km Certified Range",
          "75 Mins 10-80% Fast Charging",
          "Eco Drive Mode for Hill Descent",
        ],
        image: IMAGES.bus,
      },
    ],
    detailedSpecsTable: [
      { label: "Overall Length", value: "9,000 mm" },
      { label: "Overall Width", value: "2,400 mm" },
      { label: "Seating Capacity", value: "31 + Driver" },
      { label: "Motor Peak Power", value: "200 kW" },
      { label: "Peak Torque", value: "2,500 Nm" },
      { label: "Battery Capacity", value: "200 kWh LFP" },
      { label: "Certified Range", value: "220 km" },
      { label: "Gradeability", value: "22%" },
    ],
    keySpecs: {
      rangeKm: 220,
      batteryCapacityKwh: 200,
      chargingTimeMins: 75,
      payloadCapacity: "31 + D Seating",
      motorPowerKw: 200,
      gradeabilityPercent: 22,
    },
    warrantyYears: 5,
    warrantyKm: 300000,
    economics: {
      dieselCostPerKmNpr: 42.5,
      evCostPerKmNpr: 9.8,
      monthlySavingsNpr: 147150,
      paybackMonths: 32,
      recommendedRoutesInNepal: [
        "Kathmandu - Pokhara",
        "Kathmandu - Chitwan",
        "Valley Ring Road",
        "Lumbini Corridor",
      ],
    },
    video: {
      title: "EKA 9M Electric Bus Operational Walkthrough",
      youtubeId: "L_LUpnjgPso",
      thumbnailUrl: IMAGES.bus,
      duration: "4:25",
      description:
        "EKA 9M electric bus undergoing incline testing and fast charging setup.",
    },
    specSections: [],
  },
  {
    id: "eka-7m",
    name: "EKA 7M Executive & Staff Shuttle Bus",
    brandName: "EKA Mobility",
    category: "buses",
    categoryName: "7-Meter Executive Bus",
    tagline:
      "Premium Silent Transit for Institutions, Corporate Fleets & Resorts",
    shortDescription:
      "7-meter luxury electric shuttle bus providing smooth, silent, zero-emission transportation.",
    fullDescription:
      "The EKA 7M combines corporate elegance with robust electric engineering. Accommodating 21 passengers in luxury recliner seating with quiet AC and smart telemetry.",
    image: IMAGES.van,
    cockpitImage: IMAGES.bus,
    galleryImages: [IMAGES.van, IMAGES.bus],
    heroStats: [
      { label: "Peak Power", value: "120 kW" },
      { label: "Peak Torque", value: "1200 Nm" },
      { label: "Charging Socket", value: "CCS 2 Fast Charging" },
      { label: "Wheelbase", value: "3800 mm" },
      { label: "Gradeability", value: "22%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "Tubular Steel Structure",
          "Heavy Duty Suspension",
          "Low Noise Electric Powertrain",
        ],
        image: IMAGES.van,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "21 + Driver Pushback Recliners",
          "High Ambient Dual HVAC",
          "USB Ports & Individual Overhead Vents",
        ],
        image: busInteriorImg,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Disc Brakes with ABS",
          "Emergency Exit Doors & Windows",
          "Telematics GPS Tracking",
        ],
        image: cockpitCabinImg,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "210 km Single Charge Range",
          "50 Mins Fast Charge",
          "Lowest Maintenance Costs in 7m segment",
        ],
        image: IMAGES.van,
      },
    ],
    detailedSpecsTable: [
      { label: "Length", value: "7,200 mm" },
      { label: "Seating Capacity", value: "21 + Driver" },
      { label: "Battery Capacity", value: "110 kWh LFP" },
      { label: "Motor Output", value: "120 kW Peak" },
      { label: "Range", value: "210 km" },
      { label: "Fast Charge Time", value: "50 mins" },
    ],
    keySpecs: {
      rangeKm: 210,
      batteryCapacityKwh: 110,
      chargingTimeMins: 50,
      payloadCapacity: "21 + D Recliners",
      motorPowerKw: 120,
      gradeabilityPercent: 22,
    },
    warrantyYears: 4,
    warrantyKm: 200000,
    economics: {
      dieselCostPerKmNpr: 28.0,
      evCostPerKmNpr: 5.8,
      monthlySavingsNpr: 99900,
      paybackMonths: 26,
      recommendedRoutesInNepal: [
        "Kathmandu Corporate Shuttles",
        "Airport Hotel Transfers",
        "Pokhara Resort Routes",
      ],
    },
    video: {
      title: "EKA 7M Executive Electric Shuttle Bus Tour",
      youtubeId: "9G_8xWkUaF0",
      thumbnailUrl: IMAGES.bus,
      duration: "3:00",
      description:
        "Walkthrough of the luxury interior, silent electric ride quality, and USB charging docks.",
    },
    specSections: [],
  },

  // ===================== SCVs (Small Commercial Vehicles) =====================
  {
    id: "eka-1-5t",
    name: "EKA 1.5T Electric Light Commercial Vehicle",
    brandName: "EKA Mobility",
    category: "scvs",
    categoryName: "Electric SCV / Delivery Truck",
    tagline: "Last-Mile & Urban Delivery Workhorse with 1.5-Tonne Payload",
    shortDescription:
      "Compact, agile zero-emission commercial delivery truck for e-commerce, FMCG distribution, courier services, and municipal cargo.",
    fullDescription:
      "The EKA 1.5T redefines urban freight delivery in narrow city corridors like Kathmandu, Lalitpur, and Pokhara. Built with high volume cargo box options and fast charging.",
    image: IMAGES.van,
    cockpitImage: cockpitCabinImg,
    galleryImages: [IMAGES.van, cargoBoxImg],
    heroStats: [
      { label: "Peak Power", value: "60 kW" },
      { label: "Peak Torque", value: "220 Nm" },
      { label: "Charging Socket", value: "CCS 2 / Fast DC" },
      { label: "Payload", value: "1500 kg" },
      { label: "Gradeability", value: "20%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "High Strength Tubular Chassis",
          "Heavy Leaf Spring Rear Suspension",
          "Durable Cargo Deck Structure",
        ],
        image: IMAGES.van,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "Ergonomic 2-Seater Cabin",
          "Power Steering & Air Conditioning Option",
          "Digital Speedometer & Battery Bar",
        ],
        image: cockpitCabinImg,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Hydraulic Vacuum Assist Brakes",
          "Reverse Parking Sensors",
          "IP67 Waterproof Battery Pack",
        ],
        image: cargoBoxImg,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "180 km Range per Charge",
          "45 Mins Fast Charging",
          "Super Low Per-Km Operating Cost",
        ],
        image: IMAGES.van,
      },
    ],
    detailedSpecsTable: [
      { label: "Payload Capacity", value: "1500 kg" },
      { label: "Cargo Deck Length", value: "8.2 Feet" },
      { label: "Battery Capacity", value: "32 kWh LFP" },
      { label: "Peak Motor Power", value: "60 kW" },
      { label: "Range", value: "180 km" },
      { label: "Fast Charge Time", value: "45 Mins" },
      { label: "Turning Radius", value: "4.8 Meters" },
    ],
    keySpecs: {
      rangeKm: 180,
      batteryCapacityKwh: 32,
      chargingTimeMins: 45,
      payloadCapacity: "1,500 kg Payload",
      motorPowerKw: 60,
      gradeabilityPercent: 20,
    },
    warrantyYears: 3,
    warrantyKm: 150000,
    economics: {
      dieselCostPerKmNpr: 18.5,
      evCostPerKmNpr: 3.2,
      monthlySavingsNpr: 68850,
      paybackMonths: 22,
      recommendedRoutesInNepal: [
        "Kathmandu Valley E-Commerce Delivery",
        "Pokhara Wholesale Cargo",
        "Chitwan Retail Logistics",
      ],
    },
    video: {
      title: "EKA 1.5T Electric SCV Commercial Delivery Test",
      youtubeId: "x6R4YQ3WvMo",
      thumbnailUrl: IMAGES.van,
      duration: "3:15",
      description:
        "Explore cargo loading capacity, city maneuverability, and cost savings of EKA 1.5T.",
    },
    specSections: [],
  },
  {
    id: "eka-3w-cargo",
    name: "EKA 3W Heavy Duty Commercial Cargo",
    brandName: "EKA Mobility",
    category: "scvs",
    categoryName: "Electric 3-Wheeler Cargo",
    tagline: "High Efficiency 3-Wheeler Heavy Commercial Cargo Carrier",
    shortDescription:
      "Heavy payload electric 3-wheeler designed for narrow alley distribution, wholesale market cargo, and local municipal transport.",
    fullDescription:
      "The EKA 3W Cargo offers incredible turning flexibility and robust payload capacity for dense marketplace distribution. Engineered with high torque gear reduction and long battery cycle life.",
    image: scvThreeWheelImg,
    cockpitImage: scvThreeWheelImg,
    galleryImages: [scvThreeWheelImg, cargoBoxImg],
    heroStats: [
      { label: "Peak Power", value: "10 kW" },
      { label: "Peak Torque", value: "60 Nm" },
      { label: "Payload", value: "500 kg" },
      { label: "Charging", value: "15A Standard Socket" },
      { label: "Gradeability", value: "18%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "Reinforced Steel Chassis Frame",
          "Heavy Metal Enclosed Cargo Box",
          "Telescopic Front Fork Suspension",
        ],
        image: scvThreeWheelImg,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "Weather Shielded Driver Cabin",
          "Digital Battery Percentage Display",
          "Comfort Cushion Driver Seat",
        ],
        image: scvThreeWheelImg,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Hydraulic Drum Brakes",
          "Handbrake Parking Lock",
          "LED Headlamps & Indicators",
        ],
        image: scvThreeWheelImg,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "120 km Range on Single Charge",
          "3.5 Hours AC Home Charging",
          "Minimal Servicing & Zero Oil Change",
        ],
        image: scvThreeWheelImg,
      },
    ],
    detailedSpecsTable: [
      { label: "Payload Capacity", value: "500 kg" },
      { label: "Battery Capacity", value: "11 kWh LFP" },
      { label: "Motor Power", value: "10 kW Peak" },
      { label: "Range", value: "120 km" },
      { label: "Charge Time", value: "3.5 Hours" },
      { label: "Max Speed", value: "50 kmph" },
    ],
    keySpecs: {
      rangeKm: 120,
      batteryCapacityKwh: 11,
      chargingTimeMins: 210,
      payloadCapacity: "500 kg Cargo",
      motorPowerKw: 10,
      gradeabilityPercent: 18,
    },
    warrantyYears: 3,
    warrantyKm: 100000,
    economics: {
      dieselCostPerKmNpr: 12.0,
      evCostPerKmNpr: 1.8,
      monthlySavingsNpr: 45900,
      paybackMonths: 18,
      recommendedRoutesInNepal: [
        "Asan & Kalimati Wholesale Markets",
        "Birgunj Border Market Cargo",
        "Biratnagar Local Feeder",
      ],
    },
    video: {
      title: "EKA 3W Cargo Electric 3-Wheeler Review",
      youtubeId: "x6R4YQ3WvMo",
      thumbnailUrl: scvThreeWheelImg,
      duration: "2:45",
      description:
        "See the EKA 3W Cargo handle heavy loads in dense market streets.",
    },
    specSections: [],
  },
  {
    id: "eka-6s",
    name: "EKA 6S Electric Passenger Utility Vehicle",
    brandName: "EKA Mobility",
    category: "scvs",
    categoryName: "6-Seater Utility Shuttle",
    tagline:
      "Smart 6-Seater Clean Commute for Resorts, Campuses & Urban Last-Mile",
    shortDescription:
      "Eco-friendly 6-seater passenger shuttle providing low cost, quiet transport for resorts, industrial campuses, and municipal feeding routes.",
    fullDescription:
      "The EKA 6S is designed for high frequency short distance passenger shuttling. Features comfortable row seating, low step entry, and long range LFP batteries.",
    image: IMAGES.van,
    cockpitImage: IMAGES.van,
    galleryImages: [IMAGES.van, busInteriorImg],
    heroStats: [
      { label: "Peak Power", value: "15 kW" },
      { label: "Seating", value: "6 Passengers + Driver" },
      { label: "Range", value: "140 km" },
      { label: "Charging", value: "Standard AC Fast" },
      { label: "Gradeability", value: "20%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "Compact Monocoque Frame",
          "All-Weather Body Enclosure",
          "Heavy Duty Suspension",
        ],
        image: IMAGES.van,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "Ergonomic Cushioned Benches",
          "Generous Legroom & Headroom",
          "Silent Zero Noise Electric Motor",
        ],
        image: busInteriorImg,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Disc Brakes with ABS",
          "Passenger Safety Grab Handles",
          "Anti-Skid Flooring",
        ],
        image: IMAGES.van,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "140 km Range",
          "3 Hours Full Charge",
          "Extremely Low Running Cost",
        ],
        image: IMAGES.van,
      },
    ],
    detailedSpecsTable: [
      { label: "Seating Capacity", value: "6 Passengers + Driver" },
      { label: "Battery Capacity", value: "16 kWh LFP" },
      { label: "Motor Power", value: "15 kW Peak" },
      { label: "Certified Range", value: "140 km" },
      { label: "Max Speed", value: "60 kmph" },
    ],
    keySpecs: {
      rangeKm: 140,
      batteryCapacityKwh: 16,
      chargingTimeMins: 180,
      payloadCapacity: "6 Passengers + D",
      motorPowerKw: 15,
      gradeabilityPercent: 20,
    },
    warrantyYears: 3,
    warrantyKm: 100000,
    economics: {
      dieselCostPerKmNpr: 15.0,
      evCostPerKmNpr: 2.5,
      monthlySavingsNpr: 56250,
      paybackMonths: 20,
      recommendedRoutesInNepal: [
        "Pokhara Lakeside Resort Shuttles",
        "University Campus Feeder",
        "Heritage Zone Transport",
      ],
    },
    video: {
      title: "EKA 6S Passenger Utility Shuttle Walkthrough",
      youtubeId: "9G_8xWkUaF0",
      thumbnailUrl: IMAGES.van,
      duration: "2:30",
      description:
        "Overview of seating layout and campus shuttling capabilities of the EKA 6S.",
    },
    specSections: [],
  },
  {
    id: "eka-3s",
    name: "EKA 3S Compact Electric SCV",
    brandName: "EKA Mobility",
    category: "scvs",
    categoryName: "3-Seater Small Commercial Vehicle",
    tagline: "Ultra Compact & Economical Commercial Utility Vehicle",
    shortDescription:
      "Agile 3-seater commercial utility vehicle for light cargo, service engineering, and urban municipal maintenance.",
    fullDescription:
      "The EKA 3S offers an ultra compact footprint for narrow city streets, maintenance crews, and light commercial deliveries.",
    image: IMAGES.van,
    cockpitImage: cockpitCabinImg,
    galleryImages: [IMAGES.van, scvThreeWheelImg],
    heroStats: [
      { label: "Peak Power", value: "12 kW" },
      { label: "Seating", value: "3 Persons" },
      { label: "Range", value: "130 km" },
      { label: "Payload", value: "600 kg" },
      { label: "Gradeability", value: "18%" },
    ],
    highlights: [
      {
        id: 1,
        title: "Rugged Build",
        bullets: [
          "Steel Frame Chassis",
          "Heavy Duty Suspension",
          "Impact Resistant Panels",
        ],
        image: IMAGES.van,
      },
      {
        id: 2,
        title: "Comfortable Cabin",
        bullets: [
          "Driver + 2 Passenger Seating",
          "Digital Cluster",
          "Ventilation Fan & Heater",
        ],
        image: cockpitCabinImg,
      },
      {
        id: 3,
        title: "Smart Safety",
        bullets: [
          "Hydraulic Brakes",
          "Reverse Alert Beeper",
          "3-Point Seatbelts",
        ],
        image: IMAGES.van,
      },
      {
        id: 4,
        title: "Advanced Efficiency",
        bullets: [
          "130 km Single Charge Range",
          "Standard AC Plug-in Charging",
          "Low Maintenance Cost",
        ],
        image: IMAGES.van,
      },
    ],
    detailedSpecsTable: [
      { label: "Seating Capacity", value: "3 Persons" },
      { label: "Payload Capacity", value: "600 kg" },
      { label: "Battery Capacity", value: "14 kWh" },
      { label: "Motor Power", value: "12 kW Peak" },
      { label: "Range", value: "130 km" },
    ],
    keySpecs: {
      rangeKm: 130,
      batteryCapacityKwh: 14,
      chargingTimeMins: 150,
      payloadCapacity: "600 kg Payload",
      motorPowerKw: 12,
      gradeabilityPercent: 18,
    },
    warrantyYears: 3,
    warrantyKm: 100000,
    economics: {
      dieselCostPerKmNpr: 14.0,
      evCostPerKmNpr: 2.2,
      monthlySavingsNpr: 53100,
      paybackMonths: 19,
      recommendedRoutesInNepal: [
        "City Municipal Maintenance",
        "Telecom & Utility Service Teams",
        "Local Express Deliveries",
      ],
    },
    video: {
      title: "EKA 3S Compact SCV Overview",
      youtubeId: "x6R4YQ3WvMo",
      thumbnailUrl: IMAGES.van,
      duration: "2:15",
      description: "Compact utility features and city performance of EKA 3S.",
    },
    specSections: [],
  },
];

export const COMPANY_INFO = {
  name: "Ekata Motors Pvt. Ltd.",
  descriptor: "Official & Exclusive Distributor of EKA Mobility in Nepal",
  tagline: "Moving Nepal Forward.",
  categoryDescriptor: "Sustainable EV Mobility",
  address: "Ekata Motors Hub, Naxal, Kathmandu, Nepal",
  phonePrimary: "+977-1-4528900",
  phoneMobile: "+977-9801234567",
  whatsappNumber: "9779801234567",
  email: "info@ekatamotors.com.np",
  salesEmail: "sales@ekatamotors.com.np",
  workingHours: "Sunday - Friday: 9:00 AM - 6:00 PM (NPT)",
  brandColors: {
    midnight: "#041B5F",
    deepBlue: "#063891",
    electricBlue: "#0382DA",
    aqua: "#0499AA",
    tealGreen: "#0CB087",
    ekataGreen: "#31BA58",
    cloud: "#F5F8FB",
    ink: "#17243A",
  },
  proofPillars: [
    {
      title: "Product Capability",
      description:
        "Vehicles tailored to Nepal hill topographies, route distances, and heavy load duty cycles.",
    },
    {
      title: "Operating Economics",
      description:
        "Transparent total cost of ownership (TCO) with up to 75% savings over conventional diesel fuel.",
    },
    {
      title: "Local Dependability",
      description:
        "Naxal Kathmandu showroom, dedicated spare parts warehouse, fast-charging hubs, and certified technician network.",
    },
    {
      title: "Sustainable Progress",
      description:
        "Accelerating Nepal clean transport transition with verified emissions reduction and energy independence.",
    },
  ],
};
