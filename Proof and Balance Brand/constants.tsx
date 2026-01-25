
import React from 'react';
import { ColorInfo, BrandPhilosophy, TypographyStyle, BrandValue } from './types';

export const BRAND_COLORS: ColorInfo[] = [
  {
    name: "Deep Plum",
    hex: "#651C53",
    variable: "bg-[#651C53]",
    description: "Primary Brand Color. Represents the 'Proof'—the authoritative, permanent record of financial health.",
    isDark: true
  },
  {
    name: "Balanced Mauve",
    hex: "#977993",
    variable: "bg-[#977993]",
    description: "Secondary Brand Color. Represents 'Balance'—the sophisticated, human touch that simplifies complexity.",
    isDark: true
  },
  {
    name: "Champagne Gold",
    hex: "#D97706",
    variable: "bg-[#D97706]",
    description: "Accent Highlight. Symbolizes prosperity, value, and the 'Gold Standard' of boutique service.",
    isDark: true
  },
  {
    name: "Paper White",
    hex: "#FDFCFD",
    variable: "bg-[#FDFCFD]",
    description: "Surface Color. A clean, premium neutral background that provides maximum readability and space.",
    isDark: false
  },
  {
    name: "Slate Ink",
    hex: "#2A1024",
    variable: "bg-[#2A1024]",
    description: "Deep Neutral. Used for high-contrast backgrounds, typography, and architectural grounding.",
    isDark: true
  }
];

export const PHILOSOPHIES: BrandPhilosophy[] = [
  {
    title: "Empowering Growth",
    description: "We serve small and medium businesses by removing the 'bookkeeping mental load.' Whether offloading entirely or learning the ropes, our design communicates clarity and relief.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  },
  {
    title: "Educational Partnership",
    description: "For the hands-on owner, we are mentors. We use accessible layouts and clear data visualization to turn 'the books' into a classroom for business mastery.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  },
  {
    title: "Total Relief",
    description: "For those who want to focus on their craft, we are the invisible engine. Our visual language is calm and orderly, promising that everything is handled.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }
];

export const BRAND_VALUES: BrandValue[] = [
  {
    title: "The Guiding Partner",
    trait: "Collaborative Expertise",
    description: "We don't just 'do' the books; we walk alongside the business owner. We use a professional yet personal tone to build a partnership that feels safe and supportive."
  },
  {
    title: "Small to Medium Sized Business Focused",
    trait: "The Anchor",
    description: "We understand the unique pressures of small and medium business. Our designs avoid corporate coldness in favor of boutique, high-touch reliability."
  },
  {
    title: "Clarity over Complexity",
    trait: "The Illuminator",
    description: "Bookkeeping shouldn't be a black box. We prioritize simplicity and accessibility so owners can actually use their financial data to make better decisions."
  },
  {
    title: "Empathetic Dialogue",
    trait: "The Fluent Connector",
    description: "Communication is where our expertise meets your reality. We speak with a professional depth and a personal warmth, ensuring every financial update is proactive, jargon-free, and supportive."
  }
];

export const TYPOGRAPHY: TypographyStyle[] = [
  {
    label: "Display & Identity",
    fontFamily: "Crimson Pro (Serif)",
    usage: "Logo wordmark, H1 headers, and pull quotes. Represents heritage, authority, and the 'teaching' aspect of a mentor.",
    example: "Expertise You Can Trust"
  },
  {
    label: "Interface & Content",
    fontFamily: "Inter (Sans-Serif)",
    usage: "Body text, educational guides, and buttons. Represents modern efficiency and approachable clarity.",
    example: "Your financial health, simplified."
  }
];

export const USAGE_NOTES = [
  {
    title: "The Partnership Dial",
    note: "Adjust the language based on service level. For full-service, use 'Leave it to us.' For collaborative learners, use 'Let's look at this together.'"
  },
  {
    title: "Proactive Connection",
    note: "Never let the client wonder. Reach out before they do. Our voice should be a proactive presence that signals 'I have this handled for you.'"
  },
  {
    title: "Approachable Authority",
    note: "Use Crimson Pro for big ideas, but never use it to make the user feel small. It should feel like a wise advisor, not a distant professor."
  },
  {
    title: "The Small to Medium Sized Business Context",
    note: "Photography and iconography should reflect real business environments—studios, shops, and home offices—not just glass skyscrapers."
  },
  {
    title: "White Space as Confidence",
    note: "Overwhelmed owners need peace. Generous margins and a lack of visual clutter signal that their finances are in a calm, orderly state."
  }
];
