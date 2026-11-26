---
version: alpha
name: "Brasserie template by 8B"
description: "A brasserie and bar one-pager in huge uppercase grotesk on near-white, olive and night grounds, with one amber light on the hero photo. Free HTML template by 8B, MIT."
colors:
  primary: "#141412"
  surface: "#f8f7f3"
  on-surface: "#141412"
  neutral: "#f8f7f3"
  olive: "#999b69"
  olive-dark: "#5c5e33"
  night: "#1c1d15"
  caption: "#5b5b55"
  parasol-shadow: "#2c3019"
  amber-light: "#f0a64a"
typography:
  headline-display:
    fontFamily: Schibsted Grotesk
    fontSize: 96px
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -0.035em
  headline-md:
    fontFamily: Schibsted Grotesk
    fontSize: 44px
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -0.035em
  quote:
    fontFamily: Schibsted Grotesk
    fontSize: 46px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.022em
  menu-item:
    fontFamily: Schibsted Grotesk
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.005em
  body-md:
    fontFamily: Schibsted Grotesk
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Schibsted Grotesk
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
  label-md:
    fontFamily: Schibsted Grotesk
    fontSize: 12.5px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.03em
  button:
    fontFamily: Schibsted Grotesk
    fontSize: 12.5px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.04em
  field-value:
    fontFamily: Schibsted Grotesk
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.3
rounded:
  none: 0px
  full: 9999px
spacing:
  photo-gap: 8px
  gutter: 44px
  gutter-phone: 16px
  section-y: 150px
  section-y-phone: 80px
  field-gap: 26px
  button-height: 46px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 22px
    height: "{spacing.button-height}"
  button-primary-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
  nav-link:
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    padding: 1px 2px
  menu-row:
    textColor: "{colors.primary}"
    typography: "{typography.menu-item}"
    padding: 14px 0 15px
  menu-row-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.surface}"
    typography: "{typography.menu-item}"
    padding: 12px 0 13px
  day-panel-olive:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.primary}"
    typography: "{typography.headline-md}"
    padding: 22px 22px 26px
  day-panel-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.surface}"
    typography: "{typography.headline-md}"
    padding: 22px 22px 26px
  input-field:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.field-value}"
    rounded: "{rounded.none}"
    padding: 10px 0
    height: "{spacing.button-height}"
  confirmation-note:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    padding: 16px 18px
---

# Ombrelle: brasserie and bar template

## Overview

Ombrelle is a one-page site for a brasserie with a bar, open from noon to midnight. Its single idea is the parasol: a soft shadow sways over the first dish, a drawn terrace plan opens twelve striped parasols, and the day is told as one sideways strip that darkens from paper to night. The mood is relaxed and confident, a long lunch that turns into an evening, for an owner who wants menu, hours, seating and booking to feel like a printed poster. The name, address and prices in the demo are invented.

## Colors

The page is built from big flat grounds, not accents. Text is the ink on light grounds and the page colour on dark ones.

- **Primary, ink (#141412):** body text, headings, buttons, form underlines and the hairline rules under headers.
- **Surface (#f8f7f3):** the warm near-white page ground and the text colour on night and on filled buttons.
- **Olive (#999b69):** the story field in the about section, the aperitivo panel in the day strip, the phone menu overlay, the booking confirmation note, and small labels on night.
- **Olive dark (#5c5e33):** the alternate stripes of the parasols, and the colour of the current nav link.
- **Night (#1c1d15):** the bar section, the last two day panels, the footer, and where the day strip ends.
- **Caption (#5b5b55):** a warm grey for dish descriptions, notes and captions on light grounds.
- **Parasol shadow (#2c3019):** only for the blurred shadow laid over photos with multiply blending.
- **Amber light (#f0a64a):** used once, as the warm light that rises over the hero photo as you scroll.

Thin rules are the ink at 12 to 22 percent opacity (menu rows, plan outline); keep that tint.

## Typography

One family, Schibsted Grotesk, loaded for weights 400 to 500. Headings are regular weight capitals with tight tracking (-0.035em) and a line height of 0.9, like signage. The size is not fixed: every display line carries its own character count in `--len` and the CSS sizes it from the viewport width divided by that count, so a long title and a short one both fill their column. The base class reaches 96px on wide screens, and the day names run 30 to 44px in the static grid and up to 82px in the pinned strip. Body text is 16px at 1.5, secondary lines 14px, and dish names and prices 18px at weight 500. Labels, links and buttons are 12.5px uppercase with 0.03 to 0.04em tracking. Quotes are sentence case, up to 46px.

## Layout

The page is full bleed with no max width. Side margins are one gutter token, 16px on phones growing to 44px (3.2vw). Photo grids keep an 8px gap. Section padding runs from about 72px on phones to 140 or 150px on wide screens. Compositions are asymmetric two-column splits (31/69 menu, 42/58 terrace, 44/56 booking, 46/54 bar); the menu aside is sticky on wide screens. The photo wall is three columns of squares, the market row five. Below 720px the splits stack, photo grids drop to two columns, and the header turns into a Menu button that opens a full-screen olive overlay. Without motion the day strip folds to two columns under 960px and one under 720px.

## Elevation & Depth

There are no card shadows. Depth comes from stacking: the first screen is sticky and the intro section slides over it; grounds change between near-white, olive and night; and parasol shadows are laid over photos with multiply blending (a blurred octagon in the hero, soft round shades on two moment photos). The only real shadow token is a 1px line under the compact header bar, the ink at 12 percent. The terrace plan is a 1px outlined box, not a floating panel.

## Shapes

Corners are square: buttons, fields, photos and panels all have a radius of 0. Circles appear only as drawn objects: the parasols (a conic gradient of eight wedges alternating olive and dark olive), the round wipe on button hover and the circle that opens the olive story field. Photos are cropped to fixed ratios (1:1 squares, 4:5 portraits, 3:4 bar shots, a 21:8 terrace band) with cover fit. The house plan is outlined boxes, a thick counter bar and a hatched back room, built in HTML and CSS, not an image.

## Components

- **button-primary:** ink fill, page-colour label, 46px tall, square. On hover devices a round field in the page colour grows from the lower left and the label flips to ink.
- **nav-link:** small uppercase label; the full list shows at the top, a compact bar with the wordmark later.
- **menu-row:** dish name and price on one line, price flush right in tabular figures, description beneath in caption grey, a faint rule above each row. Bar rows repeat it on night with olive descriptions.
- **day-panel:** five services; in the static layout panel three is olive, four and five night.
- **input-field:** no box, only an ink underline, 46px high, 17px text; selects get a drawn arrow.
- **confirmation-note:** an olive block with the thank-you text after the booking form is sent.

## Motion

The page loads no animation library. Scroll scenes are CSS scroll-driven animations (`animation-timeline: view()` and named view timelines), written per section in `<style data-8b-part="scene:...">` blocks. A small inline motion kit at the end of the body measures distances into CSS variables (the day track's travel, the market pile's offsets), adds `is-in` to `data-8b-motion` elements as they arrive, pauses endless loops off screen, and smooths the mouse wheel (fine pointers only; touch scrolls natively). A gate script in the head sets `data-8b-live` on the root only when the browser supports `animation-timeline` and the visitor has no reduced-motion preference; every scroll rule is scoped to it. The motion idea is light and shade moving over a table. Most movement is tied to the scroll position, so it reverses when the reader scrolls back.

- **Opening:** on load (CSS keyframes) the photo rises from a clipped edge and the wordmark slides up (about one second, soft ease-out). A blurred parasol shadow sways on a 4.6s alternate loop while the first screen is visible. The first screen is CSS sticky and the intro slides over it; on scroll the shadow slides across, the amber light rises and the photo pair climbs at two speeds.
- **About:** the olive field opens from a small circle to full screen while heading lines slide in from alternate sides.
- **Moments, carte, bar:** photos open from a thin vertical slit with a small zoom out, once, as they arrive (`data-8b-motion="cut"`). The headings of these three sections and of the booking section slide in sideways with the scroll (`flush`). Two of the six moment photos also get a drifting parasol shadow (`shade`).
- **Day:** the stage sticks to the top (CSS `position: sticky` inside a taller room the kit sizes) and the five services slide sideways while the ground fades from page colour to olive to night; photos shift about 7 percent inside their frames.
- **Market:** five photos start as a tilted pile and are dealt into a row, or a grid on phones.
- **Terrace:** twelve parasols spin open one after another, then the room, counter and back room are drawn in.
- **Reviews:** each quote enters from one side and leaves to the other, its author moving the opposite way.
- **Footer:** the kit splits the wordmark into letters, which start spread apart and close up.
- **Header:** hides on the way down and returns on the way up as a compact bar (a small scroll script, independent of the gate).

With reduced motion, and in browsers without CSS scroll-driven animations (Firefox today), `data-8b-live` is not set: the smooth wheel, the photo reveals and all scroll scenes are off, scrolling is the browser's own, the day services stay a static grid (five columns, two under 960px, one under 720px) and every section shows its finished layout. The opening's load-in and the shadow's sway are CSS keyframes under `prefers-reduced-motion: no-preference`, so they still play in Firefox and stop with reduced motion; the sticky first screen stays in both. Hover effects remain. If a scene's script throws, the kit logs an error and switches off that scene's styles, so only its section stays static. If you change a display line, update its `--len` number, and keep the `data-8b-motion` values and scene classes that the styles and the kit read.

## Do's and Don'ts

- Do keep every corner square and every hairline rule one pixel.
- Do set display text in uppercase at regular weight with tight tracking, and update `--len` when the words change.
- Do use amber only for the hero light; the page is olive, ink, page colour and night.
- Do keep photo gaps at 8px and the existing crop ratios.
- Don't add rounded cards, pills, drop shadows, gradients on text or icon sets.
- Don't add a second typeface or a bold weight above 500.
- Don't swap the drawn terrace plan for a stock map or illustration.
- Do build new motion as CSS scroll-driven animations scoped to `[data-8b-live]`, with the inline kit for measurements; keep the gate script, `data-8b-section` and `data-8b-motion`.
- Don't add GSAP, Lenis or any other animation library.
