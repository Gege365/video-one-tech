---
version: alpha
name: "Group fitness template by 8B"
description: "Retro 80s group fitness studio site in pale grey, lilac, pink, lime and orange, with two-pixel black outlines, flat offset shadows, striped suns and spinning stickers. Free HTML template by 8B, MIT."
colors:
  primary: "#111014"
  secondary: "#eda2cf"
  tertiary: "#d8df3d"
  neutral: "#f3f3f2"
  surface: "#ffffff"
  on-surface: "#111014"
  lilac: "#e7d9ea"
  orange: "#f2913e"
  sky: "#84ade0"
  green: "#0b8f6c"
typography:
  headline-display:
    fontFamily: Pliant
    fontSize: 150px
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Mozilla Headline
    fontSize: 118px
    fontWeight: 700
    lineHeight: 0.9
  headline-md:
    fontFamily: Mozilla Headline
    fontSize: 46px
    fontWeight: 700
    lineHeight: 0.9
  body-lg:
    fontFamily: Onest
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1.42
  body-md:
    fontFamily: Onest
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: Onest
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.07em
  label-sm:
    fontFamily: Onest
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.07em
  button:
    fontFamily: Onest
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.06em
rounded:
  none: 0px
  sm: 10px
  full: 9999px
spacing:
  gutter: 56px
  gutter-phone: 20px
  section-pad: 168px
  section-pad-small: 88px
  control-height: 50px
  field-height: 52px
  card-gap: 32px
  board-gap: 30px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "{spacing.control-height}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "{spacing.control-height}"
  nav-pill:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "0 22px"
    height: "{spacing.control-height}"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  card-lime:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  card-blue:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  badge-lime:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "5px 10px"
  photo-frame:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
    height: "{spacing.field-height}"
---

## Overview

This is the visual system of a one-page site for a group fitness studio that teaches aerobics, dance, boxing and skate classes and sells passes. The one idea is a retro 80s poster made of flat parts: pale grey and lilac grounds, a pink floor, lime buttons, orange suns cut into stripes, and photos pinned at a tilt like snapshots. Every box has a black outline and a hard offset shadow. The feeling is loud and friendly.

## Colors

Nine colours, all set as variables in `:root`. Ink and white are fixed; the pastels change role by section.

- **Primary (#111014):** near-black ink for text, every border, every offset shadow and the ground of the arc and monthly night sections.
- **Secondary (#eda2cf):** pink. It is the ground of the opening floor, the room, the quotes and the footer, the phone menu, and the stripes that rise inside buttons on hover.
- **Tertiary (#d8df3d):** lime. Default button fill, badges, the band behind the lit class name, highlighted cards, the arc curve and the headings on the near-black sections.
- **Neutral (#f3f3f2):** the page ground, the upper half of the opening, the gridded timetable and the contact section.
- **Surface (#ffffff):** nav pill, standard cards, form fields, photo frames, and text on the near-black sections.
- **On-surface (#111014):** text on every light ground.
- **Lilac (#e7d9ea):** the classes, coaches and passes grounds, the quote board and the dusk that fades over the opening.
- **Orange (#f2913e):** the middle of the striped suns, the dot that rides the arc, three disc and arc stickers, the lower end of the triangle sticker's gradient and a ghost behind the Rewind word.
- **Sky (#84ade0):** blue cards, two arc stickers, the footer wordmark's second shadow and a ghost behind the Rewind word.
- **Green (#0b8f6c):** the fill of the zigzag sticker in the passes section only; use it as a rare accent.

## Typography

Three families, each with one job.

- **Mozilla Headline** at 700 and 75% width, uppercase, line height 0.9. It sets the h1, the section headings (from 40px to 118px), the class names, the day names and the menu links. The opening headline reaches 170px.
- **Pliant** at 900, italic, 125% width, uppercase, line height 0.85. It is the loudest face and appears only on the nav wordmark, the Rewind word, the pass prices and the footer wordmark. The Rewind word and footer wordmark are sized from their character count (`--len`), so they fill the width.
- **Onest** for everything small: 17px body at 400, 18px to 21px lead paragraphs at 500, 13px labels at 600 and buttons at 700 with 0.06em to 0.07em tracking, all uppercase for labels and buttons.

## Layout

Sections are full-width bands in alternating grounds, padded by up to 168px vertically (88px at the smallest) and a gutter that runs from 20px on a phone to 56px. Inner widths vary: 1180px for the classes head, 1320px for the room grid, a 760px centre column on the opening floor. The first screen is a three-column grid: the tilted portrait in the middle, the headline halves either side.

Grids collapse in steps. At 1080px the seven timetable columns become one column of days. At 960px the nav pill turns into a round menu button. At 900px the passes and contact grids go to one column, at 860px the room and the quote board, and at 760px the opening stacks into a single centred column.

## Elevation & Depth

Depth is made with hard shadows, not blur. Buttons, cards and the form panel use a 5px by 5px offset in ink, timetable slots and input fields use 2px by 2px, and photos use 9px by 9px. A button moves 3px toward its shadow on hover and 5px on press. Text takes the same treatment: the nav wordmark has a 2px pink shadow, the footer wordmark a stack of lime and blue offsets, and the Rewind word trails coloured ghosts. Stickers and photos overlap in piles.

## Shapes

Corners are 10px on buttons, cards, badges, the nav pill and fields; photos stay square. Circles are used for the suns and the arc dot. The suns are circles with a gradient from lime through orange to pink, cut by horizontal gaps with a mask. The stickers are inline SVG shapes filled from the colour variables. Passes are drawn as tickets with a dashed tear line under the price. Outlines are 2px ink, or white on the near-black sections.

## Components

- **button-primary:** lime, 50px high, ink 2px border, 5px offset shadow, uppercase 14px label. On hover pink stripes rise from the bottom. **button-secondary** is the white version.
- **nav-pill:** a white bordered pill with five links, beside a bordered wordmark box and a lime button. Below 960px only the wordmark, the button and a round menu button remain.
- **card-surface, card-lime, card-blue:** the same bordered, shadowed box in white, lime and blue. Timetable slots are white; tickets, quotes and contact cards use white, lime and blue in turn.
- **badge-lime:** a small uppercase outlined tag; the opening carries three.
- **photo-frame:** a square-cornered photo with a 2px ink border and the large shadow, usually rotated.
- **input-field:** white, 52px high, 10px corners, 2px border and a small shadow; labels above are the 13px tracked style.

## Motion

The page loads no animation library and no script from a CDN. Scroll scenes are CSS scroll-driven animations (named view timelines), written per section in `<style data-8b-part="scene:...">` blocks, with CSS `position: sticky` for the held stages. A small inline motion kit at the end of the body numbers items (`data-8b-items`), adds `is-in` to `data-8b-motion` elements as they arrive, measures distances into CSS variables, moves the arc's dot along its curve and smooths the mouse wheel (fine pointers only; touch scrolls natively). A gate script in the head sets `data-8b-live` on the root only when the browser supports `animation-timeline` and the visitor has no reduced-motion preference; every scroll rule is scoped to it. The motion idea is a disco tilt: things spin, stamp and slide in at a slight rotation, then settle at their own slight tilt.

- **Opening:** on load (CSS keyframes) the headline halves slide in, the portrait tilts into place and the stickers pop in, then bob in loops (they pause when the first screen is off screen). Scrolling over about one screen, without a hold, parts the headline, sinks the photo behind the pink floor, fades a lilac dusk over the sky, raises the striped sun and slides the promise lines and snapshots in.
- **Classes:** the row nearest the middle of the screen lights up with a lime band, a photo that pops up at a tilt and sliding details.
- **Arc:** the stage sticks for about one and a half screens; the lime curve draws and the orange dot follows it while four phase blocks light up.
- **Room:** five photos fly in from alternating sides into a pile.
- **Coaches:** the stage sticks while the cards slide sideways, with each sun rolling and each portrait swinging in.
- **Timetable, passes, contact:** items stamp in with a small overshoot (about 0.55s, back ease, 0.06s stagger); headings rise line by line (0.8s).
- **Rewind:** the word glides in with ghosts and slides out, and the two photos drift in opposite directions.
- **Quotes:** the board stands up from a backward tilt and the cards pop up in turn.
- **Navigation:** the bar slides away on a downward scroll past 120px and returns on the way up.

With reduced motion, and in browsers without CSS scroll-driven animations (Firefox today), `data-8b-live` is not set: the smooth wheel, the scroll scenes and the stamp, rise and spin effects are off, scrolling is the browser's own and every section shows its finished layout. The arc shows the whole curve with the dot at its start and all four phases lit, the coaches sit in a grid (four, two or one column), the room photos rest in their pile, and the class rows show no lime band. The opening's load-in and the stickers' bob are CSS keyframes under `prefers-reduced-motion: no-preference`, so they still play in Firefox and stop with reduced motion. The nav hiding and the button hover fills still run. The room scene moves exactly five photos by their `rm__shot--1` to `--5` classes. If a scene's script throws, the kit logs an error and switches off that scene's styles, so only its section stays static.

## Do's and Don'ts

- Do keep the two-pixel ink outline and the hard offset shadow on every box, photo and button.
- Do keep corners at 10px on controls and square on photos.
- Do use the three families only: Mozilla Headline for headings, Pliant for wordmarks and prices only, Onest for small text.
- Do keep headings uppercase.
- Do tilt photos and cards a few degrees; keep lime for buttons and highlights.
- Do update `--len` on the event word and the footer wordmark whenever the words change.
- Don't add blur, soft drop shadows, glass effects or gradients outside the suns and the triangle sticker.
- Don't add stock icons or rounded pill buttons; make new stickers as flat SVG shapes in the palette.
- Do build new motion as CSS scroll-driven animations scoped to `[data-8b-live]`, with the inline kit for measurements; keep the gate script, `data-8b-section`, `data-8b-motion` and `data-8b-items`.
- Don't add GSAP, Lenis or any other animation library.
