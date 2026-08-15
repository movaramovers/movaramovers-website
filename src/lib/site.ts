import {
  Boxes,
  Building2,
  Car,
  Globe2,
  Home,
  Hammer,
  MapPinned,
  Package,
  PackageOpen,
  ShieldCheck,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  abbas: { name: "Abbas", role: "Sales Manager", display: "+971 055 905 7949", tel: "+971559057949", wa: "971559057949" },
  yaseen: { name: "Yaseen", role: "Sales Manager", display: "+971 052 537 1781", tel: "+971525371781", wa: "971525371781" },
  movara: { name: "Movara Movers", role: "WhatsApp", display: "+971 054 277 5584", tel: "+9710542775584", wa: "9710542775584" },
  email: "contact@movaramovers.com",
  website: "www.movaramovers.com",
  location: "Al Majaz 2, Sharjah, UAE",
} as const;

export const WHATSAPP_GREETING = "Hello, I would like to get a moving quote.";

export const waLink = (number: string, message: string = WHATSAPP_GREETING) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export type Service = { id: string; title: string; description: string; icon: LucideIcon };

export const SERVICES: Service[] = [
  { id: "home-shifting", title: "Home Shifting", description: "Villa, apartment and studio moves handled end to end by trained crews.", icon: Home },
  { id: "office-shifting", title: "Office Shifting", description: "Planned office relocations with minimal downtime for your business.", icon: Building2 },
  { id: "packing-unpacking", title: "Packing & Unpacking", description: "Quality materials and careful wrapping for every fragile item.", icon: PackageOpen },
  { id: "transportation", title: "Transportation", description: "Clean, covered trucks sized right for your load, all over the UAE.", icon: Truck },
  { id: "dismantle-assemble", title: "Dismantle & Assemble", description: "Beds, wardrobes, curtains and TVs taken apart and refitted properly.", icon: Hammer },
  { id: "safe-delivery", title: "Safe & Secure Delivery", description: "Your belongings tracked, protected and delivered in the same condition.", icon: ShieldCheck },
  { id: "international-moving", title: "International Moving", description: "Door-to-door overseas moves with documentation support.", icon: Globe2 },
  { id: "domestic-moving", title: "Domestic Moving", description: "Emirate-to-emirate moves across every corner of the UAE.", icon: MapPinned },
  { id: "relocation", title: "Relocation Services", description: "Full relocation support for families and corporate transfers.", icon: Boxes },
  { id: "vehicle-shipping", title: "Vehicle Shipping", description: "Cars and bikes moved safely with secure loading and transport.", icon: Car },
  { id: "small-parcel", title: "Small Parcel Service", description: "Single items and small loads delivered quickly and affordably.", icon: Package },
  { id: "storage", title: "Storage Solutions", description: "Short and long-term storage in clean, secure facilities.", icon: Warehouse },
];

export const EMIRATES = [
  "Dubai",
  "Sharjah",
  "Abu Dhabi",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Coverage Areas", href: "#coverage" },
  { label: "Contact", href: "#quote" },
];

/**
 * Web3Forms delivers quote submissions to contact@movaramovers.com.
 * Get a free access key at https://web3forms.com (sign up with contact@movaramovers.com)
 * and paste it below. Until the key is added, the form falls back to a pre-filled
 * mailto: link so no enquiry is ever lost.
 */
export const WEB3FORMS_ACCESS_KEY = "38c3e49a-c749-4e49-958f-dee86540ebd0";
