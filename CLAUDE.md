# FlytBase Event Landing Page — Project Rules

## What This Is

A standalone event landing page for FlytBase. Each event gets its own repo, its own Vercel project, and its own subdomain (e.g., `event-name.flytbase.com`). This is NOT part of the main FlytBase website — it's a separate, lightweight project.

## Brand Rules (MUST follow)

- Always write **FlytBase** (capital F and B). Never "Flytbase", "flytbase", or "FLYTBASE".
- Brand colors: Primary Dark `#0B121E` (backgrounds), Primary Blue `#2C7BF2` (CTAs, accents).
- Icons: Always use `@phosphor-icons/react` with `weight="duotone"`. Never emoji, never custom SVGs.
- Fonts: Display headings use Plus Jakarta Sans (`font-display`), body text uses Inter (`font-sans`).
- Dark theme: The site has a dark background by default. All text should be light (`text-white`, `text-primary-100`, `text-primary-300`).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (CSS-first config in `globals.css`)
- **Icons**: `@phosphor-icons/react` (duotone weight)
- **Utilities**: `clsx` + `tailwind-merge` via `cn()` in `src/lib/utils.ts`
- **Variants**: `class-variance-authority` for component variants (Button, etc.)
- **Validation**: `zod` for form validation
- **No CMS**: Content lives in `src/config/event.ts` — edit that file directly
- **No i18n**: Event pages are single-language (English)

## Key Files

| File | Purpose |
|---|---|
| `src/config/event.ts` | **All event content** — name, date, speakers, agenda, form config |
| `src/app/page.tsx` | The event page — all sections in one file |
| `src/app/layout.tsx` | Root layout — update `<title>` and meta here |
| `src/app/globals.css` | FlytBase brand tokens and display heading classes |
| `src/components/ui/` | Reusable components: Button, Container, Section, Badge |
| `src/lib/utils.ts` | `cn()` utility for merging Tailwind classes |
| `src/lib/fonts.ts` | Google Fonts setup (Inter + Plus Jakarta Sans) |

## How to Make Changes

### Change event content
Edit `src/config/event.ts`. All sections read from this file. Change name, date, speakers, agenda, etc.

### Add a new section
Add a new function component in `src/app/page.tsx` following the existing pattern. Use `<Section>`, `<Container>`, `<Badge>`, `<Button>` from `src/components/ui/`.

### Add a new page
Create `src/app/your-page/page.tsx`. Import components from `src/components/ui/`.

### Change colors / branding
Edit the `@theme inline` block in `src/app/globals.css`. All color tokens are there.

### Add form submission
The registration form in `page.tsx` currently has no `action`. To add form handling:
1. Create `src/app/api/register/route.ts`
2. Use Zod to validate the request body
3. Send data to your CRM / email service
4. Update `event.registration.endpoint` in `src/config/event.ts`

## Styling Rules

- Use Tailwind CSS utility classes only. No inline styles, no CSS modules.
- Heading sizes use custom classes: `display-xl`, `display-lg`, `display-md`, `display-sm`.
- Do NOT use `text-display-*` naming — `tailwind-merge` strips them when combined with `text-white`.
- The `cn()` utility uses `tailwind-merge` + `clsx`. Be aware it deduplicates `text-*` classes.

## Deployment

- **Platform**: Vercel
- **Domain**: Subdomain of flytbase.com (e.g., `event-name.flytbase.com`)
- **Process**: Push to `main` → auto-deploys to production
- **Preview**: Push to any branch → Vercel generates a preview URL

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (metadata, fonts)
│   ├── page.tsx            # Event page (all sections)
│   ├── globals.css         # Brand tokens + display headings
│   └── api/                # API routes (form handler, etc.)
├── components/
│   └── ui/                 # Button, Container, Section, Badge
├── config/
│   └── event.ts            # All event content (edit this!)
└── lib/
    ├── utils.ts            # cn() utility
    └── fonts.ts            # Font setup
```

## Common Tasks

### Update event name and date
Edit `event.name`, `event.date`, `event.location` in `src/config/event.ts`. Also update `metadata` in `src/app/layout.tsx`.

### Add a speaker
Add an entry to `event.speakers` array in `src/config/event.ts`.

### Add an agenda day
Add an entry to `event.agenda` array in `src/config/event.ts`.

### Change the registration form fields
Edit the form JSX in the `RegistrationSection` component in `src/app/page.tsx`.

### Add event-specific branding (custom colors)
Override tokens in `src/app/globals.css` under `@theme inline`. Keep the FlytBase blues as secondary, add event accent colors.
