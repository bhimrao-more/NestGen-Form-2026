/**
 * EVENT CONFIGURATION
 *
 * Update this file with your event details.
 * Every section of the page reads from here.
 */

export const event = {
  // --- Basic Info ---
  name: "NestGen Forum '26",
  tagline: "Pioneering AI-First Drone Autonomy for Scale",
  date: "May 11, 2026",
  location: "Detroit, MI",
  time: "8am – 4pm",
  inviteOnly: "Invite Only",

  // --- Hero ---
  hero: {
    headline: "NestGen Forum '26",
    subheadline: "Pioneering AI-First Drone Autonomy for Scale",
    description: "NestGen Forum is an exclusive invite-only gathering for drone pioneers tackling the toughest problems in scaling dock operations. Multi-site deployment, ROI justification, regulatory navigation, AI integration, and the shift from pilots to enterprise infrastructure. These conversations shaped NestGen Retreat. This forum brings that same caliber of conversation to AUVSI in one focused day. Curated. Peer-driven. Substance over spectacle.",
    cta: {
      primary: { label: "Request Invite", href: "#request-invite" },
    },
  },

  // --- Tracks (Who Should Join) ---
  tracks: {
    label: "Who Should Join",
    heading1: "Built for enterprises and",
    heading2: "solution providers",
    description: "NestGen Forum brings together enterprise drone program leaders and drone solution providers. Choose the track that matches how you spend your day.",
    visionary: {
      name: "Visionary Track",
      audience: "For CEOs, Program Directors, Head of Innovation",
      description: "Are you building the business case, choosing partners, setting strategy, or leading the organization that delivers autonomous drone services? This track is for you.",
    },
    operator: {
      name: "Operator Track",
      audience: "Drone program Operators, ROC Managers, Field Teams, Pilot-in-Command",
      description: "Are you managing flights, maintaining docks, navigating airspace, scaling sites, or running a remote operations center? This track is for you.",
    },
  },

  // --- Agenda ---
  agenda: {
    label: "What's Happening",
    heading1: "Deep frameworks for leaders.",
    heading2: "Hands-on product for operators.",
    opening: {
      title: "Opening: Building the Nervous System of Autonomous Operations",
      desc: "The strategic picture: how dock scaling and AI-driven intelligence are converging to reshape autonomous drone operations.",
    },
    visionary: {
      trackTitle: "Visionary Track",
      items: [
        {
          title: "Building the ROI Playbook That Scales",
          desc: "Business case frameworks and pricing models that get enterprise leadership to fund and expand drone programs.",
        },
        {
          title: "From Pilot to Docks-as-Infrastructure",
          desc: "Why single-department programs stall and how multi-department adoption changes the entire investment equation.",
        },
        {
          title: "AI as the Business Lever",
          desc: "How AI shifts the value proposition from data collection to actionable intelligence.",
        },
        {
          title: "ROC and Shift to Outcome-Based Business Model",
          desc: "Outsourcing operations, scaling through managed services, and pricing on outcomes instead of flights.",
        },
      ],
    },
    operator: {
      trackTitle: "Operator Track",
      items: [
        {
          title: "Designing the ROC for Multi-Site Scale",
          desc: "Fleet management, one-to-many operations, and what breaks when you scale beyond a handful of sites.",
        },
        {
          title: "Beyond the Flight to AI-Driven Outcomes",
          desc: "Automated detection, change tracking, forensic search, and AI-generated reporting in daily operations.",
        },
        {
          title: "BVLOS Strategies That Actually Work",
          desc: "Build your own, partner under existing frameworks, or make it a vendor criterion.",
        },
        {
          title: "Data Security, H/W & Compliance Decisions",
          desc: "Cloud vs on-premises trade-offs, sovereign models, and navigating hardware choices in a shifting landscape.",
        },
      ],
    },
    closing: {
      title: "Closing: Where AI and Drone Autonomy Converge Next",
      desc: "A forward look at what happens when autonomous docks, AI, and ground robotics merge into one intelligence layer.",
    },
  },

  // --- Gallery ---
  gallery: {
    label: "Past Events",
    heading: "Years of Gathering the Right People",
    images: [
      { src: "/assets/gallery/CCTP0415.JPG", label: "NestGen Retreat" },
      { src: "/assets/gallery/IMG_9009.jpeg", label: "Networking at NGR" },
      { src: "/assets/gallery/PXL_20250902_215632650.jpg", label: "Boostcamp at CUAV" },
      { src: "/assets/gallery/PXL_20240903_162321591.jpg", label: "Discussions" },
      { src: "/assets/gallery/Screenshot_2025-12-02_at_4.24.35_PM.png", label: "NestGen Social" },
      { src: "/assets/gallery/Energy_AI_Forum.jpg", label: "Discussions at Boostcamp" },
    ],
  },

  // --- Registration Form ---
  registration: {
    label: "Request Invite",
    heading: "One power-packed day ahead of AUVSI Xponential.",
    description: "No filler, no sales pitches. Seats are limited and allocated by invitation.",
    submitLabel: "Request an Invite",
    submittingLabel: "Submitting...",
  },

  // --- Footer ---
  footer: {
    initiative: "an initiative by",
    copyright: "\u00A9 2026 NestGen Forum. All rights reserved.",
    links: [
      { label: "FlytBase Website", href: "https://flytbase.com" },
    ],
    social: {
      linkedin: "https://linkedin.com/company/flytbase",
      twitter: "https://twitter.com/flytbase",
    },
  },
} as const;
