# Northbound Project — Style Guide

This document defines the practical visual direction for the Northbound Project website. It is intentionally concise and should guide design and implementation without becoming a theoretical specification.

## 1. Brand direction

Northbound Project should feel like a cinematic music journal: spacious, calm, warm, timeless and authentic.

Core associations:

- Americana
- roots
- open roads
- distance
- memory
- reflection
- hope
- storytelling

The website should not feel like a generic band template, a glossy commercial campaign or a country-western theme park.

## 2. Visual reference

The debut album artwork is the primary visual reference for the first version of the website.

Key characteristics to preserve:

- warm monochrome photography
- large skies and distant horizons
- quiet landscapes
- restrained contrast
- classical typography with generous letter spacing
- strong central composition
- minimal decorative elements

The album cover itself remains album artwork. The website should use complementary imagery rather than treating the cover as the permanent homepage background.

## 3. Design principles

### Space before decoration

Use generous spacing and allow photography and typography to carry the design. Avoid filling empty areas simply because space is available.

### Photography is content

Images should communicate atmosphere and narrative. They should not be used as interchangeable decoration.

### Restrained interaction

Motion should be subtle and functional:

- soft fades
- small positional shifts
- restrained hover transitions
- no aggressive parallax
- no autoplay video backgrounds

### Warm, not rustic

The visual language may reference roads, landscapes, paper, wood and analogue music culture, but it must remain contemporary and refined.

### Readability first

Decorative typography is reserved for prominent headings and short labels. Body text must remain highly legible on all screen sizes.

## 4. Colour system

The initial palette is derived from the warm, desaturated tones of the debut artwork.

| Token              |       Hex | Intended use                               |
| ------------------ | --------: | ------------------------------------------ |
| `--color-ink`      | `#1B1A17` | Primary dark background and dark text      |
| `--color-charcoal` | `#292722` | Secondary dark surfaces                    |
| `--color-paper`    | `#F1EBDD` | Primary light text and light backgrounds   |
| `--color-sand`     | `#D3C5AC` | Muted surfaces, borders and secondary text |
| `--color-stone`    | `#8C867A` | Subdued text and metadata                  |
| `--color-copper`   | `#A87346` | Primary accent and selected states         |
| `--color-road`     | `#5C5850` | Neutral structural accents                 |

### Usage rules

- Do not use pure black or pure white as primary colours.
- Use copper sparingly; it is an accent, not a large surface colour.
- Maintain sufficient text contrast, especially for body copy and navigation.
- Prefer tonal separation over heavy borders and shadows.

## 5. Typography

The typography should combine a classical editorial voice with a clear contemporary interface layer.

### Display and headings

Preferred direction:

- `Cormorant Garamond`
- alternative: `Libre Baskerville`

Use for:

- hero titles
- page titles
- release titles
- selected quotations and lyrics

Characteristics:

- medium or semibold weight
- controlled letter spacing
- compact line height for large headings
- sentence case by default

### Body and interface

Preferred direction:

- `Manrope`
- alternative: `Inter`

Use for:

- body copy
- navigation
- buttons
- metadata
- captions
- form labels

### Wordmark treatment

`NORTHBOUND PROJECT` may be set in uppercase with generous tracking. It should remain typographic and understated rather than becoming a decorative logo effect.

### Scale guidance

Use fluid sizing with `clamp()` rather than many fixed breakpoints.

| Role           | Suggested range                |
| -------------- | ------------------------------ |
| Hero title     | `clamp(3.5rem, 10vw, 8rem)`    |
| Page title     | `clamp(2.75rem, 7vw, 5.5rem)`  |
| Section title  | `clamp(2rem, 4vw, 3.5rem)`     |
| Lead text      | `clamp(1.125rem, 2vw, 1.5rem)` |
| Body text      | `1rem` to `1.125rem`           |
| Small metadata | `0.75rem` to `0.875rem`        |

## 6. Spacing and layout

### Content widths

Recommended maximum widths:

- wide visual content: `90rem`
- standard page container: `75rem`
- editorial text: `42rem`
- narrow lyrics or quotations: `36rem`

### Horizontal padding

Use fluid page padding:

```css
padding-inline: clamp(1.25rem, 4vw, 4rem);
```

### Vertical rhythm

Base spacing scale:

```text
0.5rem
0.75rem
1rem
1.5rem
2rem
3rem
4.5rem
7rem
10rem
```

Major homepage sections should generally have between `4.5rem` and `10rem` vertical space, depending on viewport size and visual density.

## 7. Imagery

### Preferred subjects

- open roads
- large skies
- distant hills or mountains
- empty landscapes
- rain on glass
- notebooks and handwritten lyrics
- instruments shown as details rather than product photography
- analogue music objects used sparingly
- silhouettes and human figures at a distance

### Treatment

- warm monochrome or muted colour
- low to moderate saturation
- natural grain is acceptable
- avoid artificial HDR
- avoid oversharpening
- avoid generic stock-photo smiles and staged band poses

### Composition

Prefer images with negative space that can support titles or interface elements. Do not place important text over visually busy areas.

## 8. UI elements

### Buttons

Primary buttons should be simple and confident:

- rectangular or subtly rounded
- medium height
- no pill shape by default
- uppercase labels may use modest tracking
- solid copper or light-on-dark treatment

Secondary actions should usually be text links with a restrained underline or arrow.

### Links

- visible focus state is mandatory
- hover transitions should be subtle
- underline offset should be generous
- do not rely on colour alone to indicate interaction

### Cards

Cards should not become generic boxed components. Prefer:

- image plus typography
- open layout
- tonal background shift
- light divider where necessary
- little or no shadow

### Borders and shadows

- use thin, low-contrast dividers
- avoid heavy outlines
- avoid large soft shadows
- use depth primarily through layering, imagery and tonal contrast

## 9. Header and navigation

The header should be minimal and should not compete with hero imagery.

Desktop direction:

- wordmark at left
- primary navigation at right
- optional streaming action separated visually

Mobile direction:

- compact wordmark
- accessible menu button
- full-height or large-panel navigation
- clear focus management

The header may initially overlay the hero and transition to a solid or translucent background after scrolling, provided readability remains reliable.

## 10. Footer

The footer should include only durable information:

- Northbound Project wordmark
- navigation
- streaming and social links
- contact link
- Open Road Records reference
- copyright

Avoid a dense multi-column corporate footer.

## 11. Homepage rhythm

The initial homepage should follow this sequence:

1. Hero
2. Latest release
3. Music selection
4. Project story
5. Selected lyric or story excerpt
6. Streaming or contact call to action
7. Footer

Each section should have one clear purpose. Avoid stacking multiple competing calls to action within the same viewport.

## 12. Responsive behaviour

Design mobile-first and scale up progressively.

Suggested working breakpoints:

```text
small: 30rem
medium: 48rem
large: 64rem
wide: 80rem
```

Breakpoints should be introduced only when content or layout requires them. They are not targets for specific devices.

## 13. Accessibility

The website must include:

- semantic HTML
- visible keyboard focus
- sufficient colour contrast
- meaningful alternative text
- reduced-motion support
- logical heading order
- usable navigation without a mouse
- minimum practical touch target of approximately 44 × 44 pixels

Typography and imagery may be atmospheric, but never at the expense of usability.

## 14. Explicit exclusions

Do not use:

- bright primary colours
- western saloon typography
- distressed textures on every surface
- fake paper tears or burnt edges
- excessive guitar, cowboy or Route 66 iconography
- autoplay audio
- autoplay background video
- large animation libraries without a clear need
- glassmorphism as a dominant style
- generic Bootstrap-like cards and button rows
- large blocks of centred body text

## 15. Implementation direction

The design system will be implemented using:

- SCSS
- CSS Modules
- CSS custom properties
- fluid typography and spacing
- colocated component styles
- a small set of reusable layout primitives

Likely foundational components:

```text
Container
Section
Button
TextLink
Header
Navigation
Footer
ReleaseCard
TrackList
Quote
```

Only components that are reused or provide meaningful structural consistency should be abstracted.

## 16. Decision status

This guide defines the approved initial direction. Colours, typefaces and exact component treatments may be refined during implementation, but changes should preserve the core identity: calm, cinematic, warm, spacious and story-driven.
