---
version: alpha
name: "Cheese shop template by 8B"
description: "One-page cheesemonger site in light grey, black and white with hairline rules, one light sans and pill buttons. Free HTML template by 8B, MIT."
colors:
  primary: "#0e0e0e"
  secondary: "#5c5c5c"
  neutral: "#f3f3f3"
  surface: "#ffffff"
  hairline: "#d3d3d3"
  caption-on-dark: "#a5a5a5"
  rule-on-dark: "#2e2e2e"
typography:
  headline-display:
    fontFamily: Geist
    fontSize: 156px
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: -0.055em
  headline-lg:
    fontFamily: Geist
    fontSize: 88px
    fontWeight: 300
    lineHeight: 1
    letterSpacing: -0.045em
  display-word:
    fontFamily: Geist
    fontSize: 173px
    fontWeight: 300
    lineHeight: 0.8
    letterSpacing: -0.06em
  headline-md:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
  label-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.35
  button:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1
rounded:
  none: 0px
  full: 999px
spacing:
  gutter: 72px
  section-padding: 180px
  nav-height: 76px
  control-height: 48px
  band-gap: 7px
components:
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
  button-on-dark:
    backgroundColor: transparent
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: 48px
  button-on-dark-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
  nav-link:
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    padding: "6px 0"
  label-panel:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "12px 16px 15px"
  card-parcel:
    backgroundColor: "{colors.rule-on-dark}"
    textColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "24px 24px 28px"
  input-field:
    backgroundColor: transparent
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "8px 0"
    height: 44px
---

# Affina

## Overview

Affina is a one-page website for a cheesemonger that matures its wheels in a cellar under the shop. The one idea is a black cellar under a grey shop: the page opens light, then floods black as you scroll, and most later bands switch between the two grounds. There is no accent colour; photography carries the warmth and one light sans carries the type. It suits a shop that buys from named makers and sells by weight, tasting seat or monthly parcel. The feeling is cool and exact. The shop, farms and prices are invented.

## Colors

Seven custom properties, `--color-1` to `--color-7`, and no accent.

- **Primary (#0e0e0e):** text and button borders on light grounds; the ground of the second screen, cellar, farms, club and visit sections; the label panels; the favicon square.
- **Neutral (#f3f3f3):** the ground of the first screen, counter, milks, cut, tastings, questions and footer, and the bar once the page has scrolled.
- **Surface (#ffffff):** text, outline buttons and form inputs on black; label text; the giant word in the cellar photo.
- **Secondary (#5c5c5c):** intro paragraphs, tasting descriptions, seat counts, cut tip terms, answers and the footer base line on light grounds.
- **Hairline (#d3d3d3):** the two vertical grid lines of the first screen, the outlined ghost word, and every rule on light grounds.
- **Caption on dark (#a5a5a5):** small text on black: label meta, step numbers, paragraphs on black, form labels, and the cheese lists in the milk bands. Also the form field underline.
- **Rule on dark (#2e2e2e):** rules on black, the ground of club parcels and of the rotating cellar frame, and the placeholder behind photos while they load.

## Typography

**Geist** loads from fonts.gstatic.com as a variable face, weights 300 to 500, in latin, latin-ext, cyrillic and vietnamese slices, with a size-adjusted Arial fallback. It is the only family. Weight 300 sets the headline, section titles and giant words; 400 sets body text, labels, links and buttons; 500 appears only on the wordmark, in the bar and the menu.

- `headline-display`: the h1, 56px to 156px (8.6vw), and 15.4vw on phones.
- `headline-lg`: section titles, 38px to 88px.
- `display-word`: the word in the cellar photo and the three milk words, 12vw (173px at 1440px); the milk words are sized from their character count (`--len`) up to 19vw.
- `headline-md`: step, farm and tasting titles, 21px to 28px.
- `body-lg` is 17px to 20px in `#5c5c5c`; `body-md` 17px; text on black is 17px to 19px in `#a5a5a5`.
- `label-sm` is 13px (step numbers, seats); `button` is 15px.

Everything is sentence case. Tracking tightens as size grows: -0.06em on giant words, -0.02em on 28px titles, none on body text.

## Layout

There is no max-width container: sections run edge to edge inside a side gutter of 4.6vw (20px to 72px) and take vertical padding of 12vw (96px to 180px). The bar is 76px high, 64px on phones.

- Section heads are a two-column grid: title left, a 33vw intro column right. Cut is 5 : 6 (photo, text), questions 5 : 7, visit 6 : 5, the footer 2 : 1 : 1.
- The first screen is 100svh (at least 620px) with hairlines at 36% and 93% of its width; a second black screen follows.
- The counter row is a flex row of five panels of different heights, aligned to the floor; milk bands are full-bleed rows with a 40% black field that alternates sides; row gaps are 0.5vw.

At 900px the tastings head and rows, the club and the visit stack. At 760px the other section heads, the cellar, the cut and the questions stack too, the bar keeps the wordmark and menu button, the counter becomes a column of panels of different widths, milk fields sit above their photos, and the cellar frame sticks under the bar on a black ground.

## Elevation & Depth

No shadows. Depth is made with stacking: the first screen layers a black flood, an outlined ghost word, the product label panel and the cellar photo, whose top is darkened by a gradient from black. Panels stand at different heights, and drifting photos sit slightly larger than their frames.

## Shapes

- Corners are square on photos, panels, parcels and fields.
- Buttons are pills (`999px`), with a 1px border in the text colour.
- The headline carries a small drawn pill, two nested outlines, after its first word.
- Photos are 4:5 for farms and the cut photo, about 4:4.4 for club parcels, 21:8 for the tastings band (4:3 on phones), and square for the cellar frame.
- Rules are 1px; the plus sign in questions is two 1.5px lines.

## Components

- `button-primary`: transparent with a 1px border; on hover a black fill rises from the bottom in 0.5s and the label turns grey-white. Hover applies only on devices that hover.
- `button-on-dark`: the same on black, filling white.
- `nav-link`: a 15px link with a 1px underline that draws on hover.
- `label-panel`: a black bar of milk and age on top, then name, a ruled gap and price, sitting above the photo of a counter item.
- `card-parcel`: a club tier on `#2e2e2e`: photo, name, price row, outline button.
- `input-field`: no box, a 1px underline in `#a5a5a5`, white text, 44px high.

## Motion

The page loads no animation library. Scroll effects are CSS scroll-driven animations (named view timelines), written per section in `<style data-8b-part="scene:...">` blocks. A small inline motion kit at the end of the body splits headings into lines, measures lengths into CSS variables (the cellar's step run, the farms track's travel and each farm photo's drift), numbers repeated items, adds `is-in` to `data-8b-motion` elements as they arrive, pauses the CSS loops off screen, and smooths the mouse wheel (fine pointers only; touch scrolls natively). A gate script in the head sets `data-8b-live` on the root only when the browser supports `animation-timeline` and the visitor has no reduced-motion preference; every scroll rule is scoped to it. The one idea is things arriving from outside their frame.

- **Opening:** on load (CSS keyframes) the headline lines rise 26px and the label panel and cellar photo open upward by clip. Scrolling across the section: the black flood grows from the bottom left, the headline lines move out to the sides and turn white, the ghost word swells and fades, the product panel lifts away faster than the page, the cellar photo widens leftward to fill its frame, and the second screen's copy arrives from the right. The ghost word and cellar photo also drift on slow CSS loops.
- **Counter:** each panel climbs from below a beat after its left neighbour, its photo drifting; on phones panels slide from the left.
- **Cellar:** the square frame is held by CSS sticky and turns 90 degrees per step, its photo counter-rotating to stay upright and fading to the next step's photo; each step's hairline fills left to right. The quarter turns are keyframes for exactly five steps and five photos.
- **Milks:** per band, the black field starts across the band and recedes to its side as the word rides the edge back into it and the photo settles from 1.3 scale.
- **Cut, tastings, questions:** heading lines rise out of masks, photos open upward and hairlines draw, once, as they arrive.
- **Farms:** a sticky stage holds while the track slides sideways by its overflow, photos drifting against it.
- **Club:** from 900px the parcels start piled on the middle one and spread into a row; on narrower screens they are dealt in from alternating sides.
- **Visit:** three columns of one photo slide vertically, some up and some down, and meet.

The bar hides on scroll down and returns on scroll up. With reduced motion, and in browsers without CSS scroll-driven animations (Firefox today), `data-8b-live` is not set: the smooth wheel and every scroll animation are off and scrolling is the browser's own. The first screen keeps its small black block at the bottom left, the headline stays dark, the cellar frame stays square on its first photo, the farms show as a plain grid, the parcels sit in their row and every hairline is drawn. The opening entrance and the two loops are CSS under `prefers-reduced-motion: no-preference`, so they still play in Firefox and stop with reduced motion. The bar behaviour and hover transitions stay in both cases. Keep five cellar steps with five photos, three milk bands and three club parcels: the motion rules count them.

## Do's and Don'ts

- Do keep the page monochrome: black, grey and white, with colour only from the photos.
- Do keep one light typeface at weights 300 and 400 with tight tracking on large sizes.
- Do keep corners square except buttons and the small headline pill.
- Do keep hairlines at 1px.
- Don't add shadows, rounded cards, gradients or an accent colour.
- Don't add a second typeface or stock icons.
- Don't set the milk words or the wordmark without updating their `--len`.
- Don't add scroll effects beyond the page's own; panels arriving from outside their frame is the only idea.
- Don't add GSAP, Lenis or any other animation library.
