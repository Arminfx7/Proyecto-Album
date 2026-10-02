---
name: Hardware GT · Orbital Atlas
description: Un atlas interactivo de hardware y software con una presencia espacial, clara y utilitaria.
colors:
  ink: "#070719"
  night: "#0d1130"
  panel: "rgba(18, 25, 63, 0.78)"
  ice: "#e9f1ff"
  muted: "#b2bedf"
  violet: "#9c74ff"
  blue: "#4ba7ff"
  mint: "#63f4d4"
  pink: "#fa70ce"
typography:
  display:
    fontFamily: "Unbounded, Manrope, sans-serif"
    fontSize: "clamp(2.65rem, 6.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "-0.012em"
rounded:
  card: "16px"
  inset: "12px"
  pill: "999px"
spacing:
  compact: "0.75rem"
  regular: "1.25rem"
  generous: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "#101331"
    rounded: "{rounded.pill}"
    padding: "0.86rem 1.25rem"
    height: "49px"
  button-quiet:
    backgroundColor: "rgba(21, 27, 67, 0.62)"
    textColor: "{colors.ice}"
    rounded: "{rounded.pill}"
    padding: "0.86rem 1.25rem"
    height: "49px"
  product-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ice}"
    rounded: "{rounded.card}"
---

# Design System: Hardware GT · Orbital Atlas

## Overview

**Creative North Star: "The Orbital Atlas"**

Hardware GT treats the catalog as an instrument field rather than a conventional product grid. The visitor enters through a laptop contained by luminous orbital paths, then descends into an ordered, legible collection of components, comparisons, and recommendations.

The atmosphere is deep cosmic blue with ultraviolet, ice, and mint signals. Animated orbs and slow rings make the page feel alive, while restrained translucent surfaces preserve enough contrast for researching real purchase decisions. The confirmed visual rejection is a static black video rectangle: the laptop floats directly in the scene instead.

**Key Characteristics:**

- Immersive dark-space canvas with luminous orbital motion.
- High-clarity catalog surfaces and readable, semantic color roles.
- Large geometric display type balanced by calm, practical body copy.
- Motion remains ambient and optional; the content remains usable without it.

## Colors

The palette combines a near-black cosmic field with cool, bright signals; accents identify action and data without becoming the background.

### Primary

- **Signal Mint:** The main action and active-state color. Use it for primary buttons, focus, selected details, and a sparing line of light through the interface.
- **Orbital Violet:** The identity accent for orbital light, progress, and subtle emphasis.

### Secondary

- **Spectrum Blue:** A cool technical highlight used inside gradients, glows, and data-adjacent states.
- **Pulse Pink:** A rare counterpoint for punctuation and multi-color spectrum moments, never for ordinary body text.

### Neutral

- **Deep Ink:** The page field and deepest backdrop.
- **Night Surface:** The darker tonal layer behind panels and illustrations.
- **Ice Text:** The highest-contrast reading color.
- **Cloud Muted:** Supporting text, metadata, and low-priority navigation.

**The Signal-Not-Noise Rule.** Mint, violet, blue, and pink should remain navigational light sources. Do not flood a full section with an accent color; let the dark field carry the composition.

## Typography

**Display Font:** Unbounded, with Manrope as the fallback.
**Body Font:** Manrope, sans-serif.

**Character:** Unbounded makes section titles feel engineered and futuristic; Manrope keeps the catalog practical and easy to scan. Display type is used with tight tracking and a compact line height, never as dense paragraph text.

### Hierarchy

- **Display** (600, responsive clamp, 1.02 line-height): hero and principal section titles.
- **Body** (400, 1rem, 1.75 line-height): explanatory copy, product context, and recommendations.
- **Navigation / labels** (compact, 11px): concise controls and metadata, with only a slight tracking increase when needed.

**The One-Voice Rule.** Use the display face to announce a destination, then return immediately to Manrope for reading, comparison, and details.

## Layout

The hero occupies the first viewport: the computer scene leads, then its title and actions continue beneath it. Sections use a centered shell with generous horizontal breathing room and cards that form dense but touch-friendly grids. Product grids use a one-rem gap and cards maintain a substantial vertical presence so images and specifications can coexist.

At 980px, category rails become three columns. At 850px, the header condenses, hero sizing moves to small viewport units, and primary headings use a narrower measure. At 560px, page gutters tighten, product content reduces to practical padding, and category cards form two columns. The motion-reduction preference disables the decorative field and rings.

## Elevation & Depth

Depth is atmospheric rather than heavy. Panels are translucent navy or white-light surfaces over a gradient field, separated with fine cool borders and low, diffuse shadows. Header blur, nested image frames, and the fixed orb canvas provide spatial layering without turning cards into oversized floating blocks.

**The Atmospheric Depth Rule.** Use glow and tonal contrast to establish depth first; reserve stronger shadows for hover and card separation.

## Shapes

The system pairs precise cards with continuous orbital circles. Content containers use gently rounded corners, image insets are slightly tighter, and controls are fully pill-shaped. Rings, circles, radial gradients, and thin luminous lines are the repeating signature geometry.

## Components

### Buttons

- **Shape:** Full pill, compact but comfortably touchable.
- **Primary:** Mint light with dark text; it is the only button that should read as an immediate next step.
- **Quiet:** A translucent navy surface with ice text and a fine cool border for secondary navigation.
- **Hover / Focus:** Lift the glow subtly on hover; use mint for the visible keyboard focus outline.

### Cards / Containers

- **Corner Style:** Gently rounded card geometry.
- **Background:** A dark navy translucent gradient in the dark theme and a soft white-to-lilac gradient in the light theme.
- **Border:** A fine, pale-blue translucent keyline.
- **Interaction:** Hover changes the border toward mint and increases diffuse depth, without moving the layout.

### Navigation

- **Style:** A blurred, translucent header that holds its position while the catalog scrolls below.
- **Active / Hover:** A mint underline grows from the left on desktop navigation.
- **Mobile:** The header shortens and the mobile menu becomes a focused, solidly readable panel.

### Orbital Scene

The hero computer is a layered HTML/CSS laptop with a perspective keyboard, a circuit diagram, traveling light signals, and a central GT processor. It floats and turns slowly inside orbital rings; the scene loads no video. Dark mode uses graphite metal and mint lighting; light mode uses silver metal with the same high-contrast screen. Viewport visibility, document visibility, and reduced-motion preferences control the decorative loops. No manual pause control is displayed, as requested.

Native scroll remains in control. One scheduled animation frame updates the reading-progress transform. Individual product cards reveal as they enter the viewport; entire catalog sections do not animate as giant layers. The daylight theme uses porcelain image surfaces, ink-colored supporting text, and white search and navigation surfaces.

### Floating Orbs and FOX

Small glass-like orbs (9–38px) replace the oversized ambient spheres. Their wrappers follow bounded scroll paths through the existing animation-frame scheduler; their cores float independently with CSS. On phones only four remain visible, and reduced motion disables both effects.

FOX is a compact fox mascot inside the hero, with pointed ears, a pale muzzle, a swaying tail, and a waving paw. A brief greeting appears on entry and can be shown again by activating the mascot with touch, pointer, or keyboard. The mascot stays within the hero instead of covering catalog controls. Light and dark themes use their own high-contrast greeting surfaces.

## Do's and Don'ts

### Do:

- **Do** use mint for the clearest action, current state, and focus indication.
- **Do** keep technical comparisons and recommendations on calm translucent surfaces.
- **Do** let a little motion establish a living instrument field, while preserving a complete reduced-motion mode.
- **Do** preserve the laptop's transparent treatment so the hero reads as one composition.

### Don't:

- **Don't** place long text in Unbounded or use it for dense product specifications.
- **Don't** use the pale light-theme background without the dark, high-contrast text tokens.
- **Don't** add large black media boxes behind the hero laptop.
- **Don't** turn every card, heading, or section into a neon accent; contrast needs quiet areas to work.
