

# Gallery Section — Auto-Scrolling Filmstrip

## What We're Building
A horizontally auto-scrolling image filmstrip showcasing past event photos, placed between the Tracks section and the Request Invite form. Images scroll continuously and pause on hover. Placeholder images will be used initially.

## Placement

```text
  Navbar
  Hero
  Agenda
  Tracks
  ── Gallery (new) ──
  Request Invite
  Footer
```

## Design
- Section heading: "Past Events" (translated in all 4 languages)
- A continuous horizontal strip of images that loops infinitely using CSS `@keyframes` animation (no JS library needed)
- Images pause scrolling on hover so users can look at individual photos
- Duplicated image set for seamless infinite loop effect
- Rounded corners, subtle shadow on each image card
- Responsive: images scale down on mobile
- Matches the existing dark theme

## Technical Steps

1. **Create `src/components/GallerySection.tsx`**
   - Render a section with a heading and a CSS-animated horizontal strip
   - Use 6-8 placeholder images (via `placeholder.svg` or generated gradient cards)
   - Duplicate the image array for seamless infinite scroll using CSS `translateX` animation
   - Pause animation on hover via `hover:animation-play-state: paused`

2. **Add i18n keys** to all 4 locale files (`en.json`, `es.json`, `fr.json`, `it.json`)
   - `gallery.label` — section label
   - `gallery.heading` — section heading

3. **Update `src/pages/Index.tsx`**
   - Import and place `<GallerySection />` between `<TracksSection />` and `<RequestInviteSection />`

4. **Add Tailwind keyframes** in `tailwind.config.ts` for the `scroll` animation

