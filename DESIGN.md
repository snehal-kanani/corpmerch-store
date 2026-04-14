# Design Brief

## Direction

Warm Retail Premium — professional product manufacturer UI combining premium trustworthiness with approachable accessibility for all literacy levels.

## Tone

Warm terracotta primary with deep slate secondary and cream backgrounds creates inviting, premium retail feeling — premium but NOT cold corporate.

## Differentiation

Oversized, accessible typography (Lora display + Satoshi body) with high-contrast buttons and generous card spacing makes shopping intuitive for all users, from executives to first-time buyers.

## Color Palette

| Token              | OKLCH           | Role                          |
| ------------------ | --------------- | ----------------------------- |
| background         | 0.96 0.015 75   | Warm cream page background    |
| foreground         | 0.2 0.03 50     | Deep brown text               |
| card               | 0.98 0.01 75    | White-cream product cards     |
| primary            | 0.5 0.16 30     | Warm terracotta CTA buttons   |
| secondary          | 0.3 0.04 250    | Deep slate admin/nav accents  |
| accent             | 0.5 0.16 30     | Highlights & active states    |
| muted              | 0.92 0.02 75    | Disabled, subtle backgrounds  |
| destructive        | 0.55 0.22 25    | Delete/danger actions         |

## Typography

- Display: Lora — premium serif for hero, section headings, product names
- Body: Satoshi — friendly, highly readable sans-serif for all UI text and body copy
- Mono: JetBrains Mono — admin panel code/technical content

Typography scale: hero `text-5xl md:text-7xl font-bold`, section `text-3xl md:text-5xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base lg:text-lg`.

## Elevation & Depth

Subtle warm shadows (shadow-subtle: `0 2px 8px rgba(0,0,0,0.08)`) for card separation; elevated shadows for modals and overlays. No harsh shadows or glow effects — depth through layering and contrast only.

## Structural Zones

| Zone        | Background           | Border              | Notes                                                    |
| ----------- | -------------------- | ------------------- | -------------------------------------------------------- |
| Header      | Warm cream (bg-card) | Subtle bottom 1px   | Navigation, logo, search input; generous padding         |
| Hero        | Warm cream + overlay | None                | Full-width hero with product category showcase           |
| Content     | Warm cream (bg)      | None                | Main product grid, alternating sections with muted bg    |
| Product Card| White (card bg)      | 1px border-border   | Rounded-lg, shadow-subtle, generous image + text spacing |
| Admin Sidebar| Deep slate (sidebar) | Right 1px border    | Vertical nav with white text, highlight on active        |
| Footer      | Deep slate           | Top 1px border      | Footer links, contact, cream text                        |

## Spacing & Rhythm

Mobile-first progressive enhancement: sm gap-4, md gap-6, lg gap-8. Hero padding: py-16 md:py-24. Cards: p-6 lg:p-8. Section spacing: my-12 md:my-16. Breathing room around text and imagery reinforces premium feel.

## Component Patterns

- Buttons: Large (px-6 py-3), rounded-lg, full text contrast, no icon-only buttons — all actions have clear labels
- Cards: bg-card, border-border rounded-lg shadow-subtle, image-first layout with generous text padding
- Badges: px-3 py-1 bg-muted rounded-full text-sm, used for category tags and product metadata
- Search/Inputs: bg-input rounded-md px-4 py-2.5 text-base, large touch targets (min 44px height)

## Motion

- Entrance: Fade-in on page load with staggered card animations (100ms per card)
- Hover: Button scale-95 and opacity-90 on active, link underline appearance with 0.3s smooth transition
- Decorative: Product image hover zoom-105 with shadow-elevated transition

## Constraints

- Min font size: text-base for body, text-sm for labels (accessibility requirement)
- Min touch target: 44px height for all buttons and interactive elements
- Max line width: max-w-2xl for body text paragraphs (readability)
- No icon-only buttons — all actions must have descriptive text labels
- High contrast enforced: all text WCAG AA+ on backgrounds

## Signature Detail

Large, warm-toned buttons with generous padding create immediate CTA affordance — users of any literacy level instantly understand "click here." Premium serif headings over friendly sans-serif body reinforces craft and approachability simultaneously.
