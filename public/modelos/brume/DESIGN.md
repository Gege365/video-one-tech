---
version: alpha
name: "Sauna template by 8B"
description: "A near-black lakeside bathhouse and day spa in a light serif, with copper for heat, lake blue for cold and fog over the photographs. Free HTML template by 8B, MIT."
colors:
  primary: "#0b0906"
  secondary: "#9a948a"
  tertiary: "#d0703f"
  neutral: "#dcd8d1"
  surface: "#15120e"
  on-surface: "#dcd8d1"
  hairline: "#2b2620"
  lake-blue: "#8fb2b8"
  ground-cold: "#091114"
  ground-hot: "#1b0d07"
typography:
  headline-display:
    fontFamily: Source Serif 4
    fontSize: 96px
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 66px
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: -0.012em
  title-md:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: Source Serif 4
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0.005em
  label-md:
    fontFamily: Source Serif 4
    fontSize: 11.5px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: 0.2em
  button:
    fontFamily: Source Serif 4
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.2em
  wordmark:
    fontFamily: Source Serif 4
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.42em
rounded:
  none: 0px
spacing:
  gutter: 64px
  section-padding: 200px
  rail-width: 48px
  rail-gap: 112px
  header-padding: 18px
  field-height: 48px
  panel-padding: 48px
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 26px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 14px 26px
    height: 48px
  nav-link:
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    height: 32px
  link-line:
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    height: 44px
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    height: 48px
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    height: 48px
  panel-form:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 48px
  pass-row:
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    padding: 28px 0 32px
---

# Brume: sauna and bathhouse template

## Overview

Brume is a one-page site for a lakeside sauna and bathing house or day spa that sells timed passes. The idea is temperature as the whole language: heat is copper, cold is lake blue, and the ground of the rooms section warms from the jetty to the smoke sauna. Everything else is restrained: a near-black ground, warm light grey type in one light serif, hairline rules and wide margins. It should feel quiet and a little damp, like the minutes after the lake. All names, prices, hours and the address in the demo are invented.

## Colors

- **Primary (#0b0906):** the page ground, the menu overlay, the solid header bar and the text colour on a button once it fills.
- **Neutral / on-surface (#dcd8d1):** body and heading text, button borders and fills, focus outlines and the soft fog patches.
- **Secondary (#9a948a):** rail labels, field labels, captions, small notes and form field underlines.
- **Hairline (#2b2620):** the one-pixel rules between steps, dishes, questions and passes, and the borders of the form panel and the menu button.
- **Tertiary / copper (#d0703f):** heat only: the hot readings, hot temperatures, the lit hour, the open pass band and its marker, the glow behind the statement.
- **Lake blue (#8fb2b8):** cold only: the cold reading, the cold temperature, the start of each temperature line, the cold and dawn tints.
- **Surface (#15120e):** the request form panel, photo placeholders and dropdown options.
- **Ground-cold (#091114) and ground-hot (#1b0d07):** the sauna section's ground, a blue-black at the first room that turns into a brown-black at the last.

Body text needs 4.5:1 contrast on these grounds; do not lower the greys.

## Typography

**Source Serif 4** is the only family, one variable file covering weights 300 to 600 (400 and 500 are used besides 300), with a Georgia fallback matched in size. A serif in a light weight gives the page its calm and makes the uppercase labels read as signage.

- **headline-display:** the first-screen heading, `clamp(44px, 6.4vw, 96px)`, weight 300, tight tracking. The statement lines use up to 92px and are sized by the character count in `--len`.
- **headline-lg:** section headings, `clamp(34px, 4.4vw, 66px)`, always stacked in two or three lines.
- **title-md:** step, room and pass names, `clamp(26px, 2.5vw, 36px)`.
- **body-lg:** leads and menu names, `clamp(18px, 1.45vw, 21px)`.
- **body-md:** running text, 16px with a loose 1.75 line height.
- **body-sm:** captions, facts and notes, 14px in the secondary grey.
- **label-md:** the uppercase tracked labels, 11.5px at weight 500 and 0.2em tracking; rails go to 0.26em and the wordmark to 0.42em.
- **button:** 12px uppercase at 0.2em.

Headings are sentence case and never bold; only labels are uppercase.

## Layout

Every full section is a two-column grid: a 48px rail on the left that holds a vertical uppercase label and stays sticky while the section scrolls, then the content. The gap is fluid up to 112px. Side padding is `clamp(20px, 4.4vw, 64px)` and section padding `clamp(104px, 14vw, 200px)`; there is no fixed page width, so text blocks set their own limits (40 to 60 characters). Headings stack in lines with the second line indented by 1.4em. Rows of facts (four rooms, five dishes, three passes, six questions) are separated by hairlines; the six hours of the day are spaced, not ruled.

At 1023px and below the top links fold into a menu button and overlay. At 900px the two-column sections stack, the round's photo frame sticks above its steps at 40vh, and the room photos shrink to a small column. At 700px the rail narrows to 14px and the house photo uses six boards instead of ten. At 480px the form and facts become single columns.

## Elevation & Depth

There are no shadows and no rounded cards. Depth is made with layers: photographs stacked and clipped, a fog veil sliding over the lake, soft-light tints in copper and blue over the photos, and the sticky stages that hold a picture while the text passes. Colour fields change instead of lifting: the sauna ground warms with scroll.

## Shapes

Corners are square on buttons, fields, the form panel and photos. Lines are 1px hairlines; the temperature track is 3px and the pass bands 12px high. The only curves are the elliptical fog patches over the lake. Photos are cropped to portrait (3:4, 4:5), landscape (3:2, 5:4, 16:7.5) or wide, and kept dark and warm.

## Components

- **button-primary:** a 48px-high outlined box with an uppercase label. On hover a light fill rises from the bottom over 0.7s and the label turns to the ground colour.
- **nav-link:** small uppercase links with an underline that draws in on hover.
- **link-line:** a 48px rule beside a 16px label; on hover the rule lengthens and the label slides 24px right.
- **icon-button:** a 48px square with a hairline border and a two-line menu glyph, with a soft glow on hover.
- **input-field:** no box, only a 1px bottom border in the secondary grey, 17px text, 48px high.
- **panel-form:** the request form on the surface colour with a hairline border and fluid padding up to 48px.
- **pass-row:** a name, a line, a price and a link, over a 12px track whose band sits on a 08 to 22 axis.

## Motion

CSS scroll-driven animations and a small inline motion kit, with no JavaScript libraries. A gate script in the head turns the motion on only where the browser supports scroll-driven animation and reduced motion is off; the kit adds smooth wheel scrolling, the reveal triggers, the letter split of the closing name and the few checks CSS cannot make (the lit hour, the open pass). The one idea: scroll is time and temperature. Scenes are tied to the scroll position, and one-off reveals fire once.

- **Opening:** on load the lake settles from a slight zoom, three fog patches drift in loops and the heading rises. On scroll the lake stays put while the text leaves, a veil climbs and a rest-room photo comes up from dark; three small photos then rise by different distances.
- **Round:** a clipped frame of three photos in thirds opens to each in turn under copper and blue soft-light tints.
- **Rooms:** temperature lines draw out to their values; the ground shifts from ground-cold to ground-hot.
- **Statement:** a glow rises and each line swells from weight 300 to 560 and turns copper.
- **Day:** a held photo (CSS sticky) cross-fades from morning to night while the hour at mid-screen turns copper.
- **House and passes:** photo boards slide into line (ten on wide screens, six on phones); a copper marker crosses the hours axis and lights each pass it is inside.
- **Reveals:** text fades up 26px over 1.1s with a 0.09s stagger, and a blur on wide screens with a mouse; rules draw over 1.3s. Interface easing is `cubic-bezier(.2, .7, .1, 1)`.

Without scroll-driven support (Firefox today) the scroll scenes, reveals and smooth wheel are off and each section shows its finished layout: the round as a triptych, the morning lake behind the hours, every pass band at rest, the closing name whole. The opening load-in and the fog loop are plain CSS and still play there. With reduced motion all of it is off and the page reads as a still layout; hover fills, underlines and the header's hide-on-scroll still work. A room's temperature line rests at its `data` value but runs to its inline `--saunas-span-sa-line-clippath-to-2` while the motion plays: change both.

## Do's and Don'ts

- Do keep the page dark and let copper mean heat and blue mean cold, nothing else.
- Do keep headings at weight 300 and labels small, uppercase and widely tracked.
- Do keep corners square and borders to 1px hairlines.
- Do keep photos dark and warm, and replace them with photos of the same shape.
- Don't add shadows, rounded cards, coloured buttons or a second typeface.
- Don't use copper or blue as decoration where there is no temperature to show.
- Don't add parallax or fade effects to scenes that have their own scrubbed motion.
- Don't lower the grey text below 4.5:1 contrast on the ground.
- Don't change a line's text without setting its `--len`.
