/**
 * ✏️ EVENT CONFIGURATION
 *
 * Update this file with your event details.
 * Every section of the page reads from here.
 * This is the ONLY file you need to edit for basic content changes.
 */

export const event = {
  // --- Basic Info ---
  name: "Event Name 2026",
  tagline: "The Future of Autonomous Drone Operations",
  date: "September 15–17, 2026",
  location: "San Francisco, CA",
  venue: "Moscone Center",

  // --- Hero ---
  hero: {
    headline: "Join FlytBase at Event Name 2026",
    subheadline:
      "Experience the future of enterprise drone autonomy. Live demos, expert talks, and hands-on workshops.",
    cta: {
      primary: { label: "Register Now", href: "#register" },
      secondary: { label: "View Agenda", href: "#agenda" },
    },
    // Background: use a URL or leave empty for gradient-only
    backgroundImage: "",
  },

  // --- About ---
  about: {
    title: "About the Event",
    description:
      "FlytBase is the enterprise platform for autonomous drone and robotic operations. At this event, we'll showcase our AI-R platform, FlytBase Shield security framework, and our growing partner ecosystem. Whether you're in energy, mining, public safety, or infrastructure, discover how 24/7 autonomous operations can transform your workflows.",
    stats: [
      { value: "500+", label: "Attendees" },
      { value: "20+", label: "Speakers" },
      { value: "3", label: "Days" },
      { value: "10+", label: "Live Demos" },
    ],
  },

  // --- Speakers ---
  speakers: [
    {
      name: "Speaker Name",
      role: "CEO, FlytBase",
      image: "",
      topic: "Keynote: The Future of Physical AI",
    },
    {
      name: "Speaker Name",
      role: "VP Engineering",
      image: "",
      topic: "Building Enterprise-Grade Drone Autonomy",
    },
    {
      name: "Speaker Name",
      role: "Head of Partnerships",
      image: "",
      topic: "The FlytBase Ecosystem",
    },
  ],

  // --- Agenda ---
  agenda: [
    {
      day: "Day 1 — September 15",
      sessions: [
        { time: "9:00 AM", title: "Registration & Welcome Coffee", type: "break" },
        { time: "10:00 AM", title: "Keynote: The Future of Physical AI", type: "keynote" },
        { time: "11:30 AM", title: "Live Demo: AI-R Platform in Action", type: "demo" },
        { time: "1:00 PM", title: "Lunch & Networking", type: "break" },
        { time: "2:30 PM", title: "Workshop: Getting Started with FlytBase", type: "workshop" },
        { time: "5:00 PM", title: "Day 1 Wrap-up & Cocktails", type: "break" },
      ],
    },
    {
      day: "Day 2 — September 16",
      sessions: [
        { time: "9:00 AM", title: "Industry Track: Energy & Utilities", type: "talk" },
        { time: "10:30 AM", title: "Industry Track: Public Safety", type: "talk" },
        { time: "12:00 PM", title: "Lunch", type: "break" },
        { time: "1:30 PM", title: "Partner Showcase", type: "demo" },
        { time: "3:00 PM", title: "FlytBase Shield: Security Deep Dive", type: "talk" },
        { time: "5:00 PM", title: "Networking Reception", type: "break" },
      ],
    },
  ],

  // --- Registration Form ---
  registration: {
    title: "Register for the Event",
    subtitle: "Secure your spot. Limited seats available.",
    fields: ["name", "email", "company", "role"] as const,
    submitLabel: "Register Now",
    // Where to send form data — update with your endpoint
    endpoint: "",
  },

  // --- Footer ---
  footer: {
    links: [
      { label: "FlytBase Website", href: "https://flytbase.com" },
      { label: "Privacy Policy", href: "https://flytbase.com/privacy" },
      { label: "Contact Us", href: "https://flytbase.com/contact" },
    ],
    social: {
      linkedin: "https://linkedin.com/company/flytbase",
      twitter: "https://twitter.com/flytbase",
    },
  },
} as const;
