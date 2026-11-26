---
version: alpha
name: "Comedy club template by 8B"
description: "A comedy club one-pager in yellow, black and white with heavy uppercase type, pill-shaped controls and scroll-scrubbed motion. Free HTML template by 8B, MIT."
colors:
  primary: "#141414"
  secondary: "#ffd20a"
  neutral: "#ffffff"
  surface: "#ffd20a"
  surface-light: "#ffffff"
  surface-dark: "#141414"
  on-surface: "#141414"
  on-surface-dark: "#ffffff"
  accent-yellow: "#ffd20a"
  ink: "#141414"
typography:
  headline-display:
    fontFamily: Instrument Sans
    fontSize: 104px
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.035em
  headline-script:
    fontFamily: Playpen Sans
    fontSize: 120px
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: -0.03em
  lead:
    fontFamily: Instrument Sans
    fontSize: 25px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: -0.01em
  body-md:
    fontFamily: Instrument Sans
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.45
  label-md:
    fontFamily: Instrument Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Instrument Sans
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0.02em
  button:
    fontFamily: Instrument Sans
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.02em
  wordmark:
    fontFamily: Instrument Sans
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.045em
rounded:
  pill: 999px
  panel: 40px
  full: 9999px
spacing:
  gutter: 36px
  section-y: 160px
  row-gap: 12px
  border: 1.5px
  nav-height: 64px
  control-height: 56px
components:
  button-primary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.accent-yellow}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 30px
    height: 56px
  button-on-dark:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 16px 30px
    height: 56px
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.pill}"
    height: 64px
  pill-label:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: 6px 16px
    height: 34px
  week-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 10px
    height: 108px
  input-field:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 14px 22px
    height: 54px
  faq-item:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.on-surface}"
    typography: "{typography.lead}"
    rounded: "{rounded.panel}"
---

## Overview

A one-page site for a comedy club or small venue with a show every night, a bar and rooms to hire. The idea is a poster wall: the ground flips between yellow, white and black section by section, and every control is a pill. The first screen is a dark panel that opens on tonight's bill, so a visitor sees who is on and when before anything else. The voice in the demo copy is dry and teasing, which the heavy uppercase type and the rounded hand-lettered second face support. Built for venues that want to look loud, friendly and a little unruly.

## Colors

Three colours only, all set as variables in `:root`.

- **Ink (#141414):** all text on light grounds, the 1.5px borders on light grounds, the dark button fill, and the grounds of the first-screen panel, house rules, alumni, reviews, menu overlay and footer.
- **Yellow (#ffd20a):** the body ground, so it shows behind the week, open mic, hire and visit sections. Also the nav bar fill, the yellow button, and headings and names set on dark grounds.
- **White (#ffffff):** the grounds of the room, bar and FAQ sections, and text on dark grounds. It is the hover colour of the menu links and the blob that fills the yellow button on hover.

Body text on yellow and white is ink, well above 4.5:1. Never put yellow text on white.

## Typography

**Instrument Sans** does nearly everything: headings in bold uppercase with tight negative tracking and a 0.9 line height, body copy in medium weight, and labels, pills and buttons in semibold or bold uppercase. **Playpen Sans**, loaded at weight 800 only, is the second voice. It sets the menu links, the real house rules, the open-mic step numbers, alumni names, bar item names, the closing wordmark and the footer mark. Keep the script face for short lines and names, never for paragraphs.

All display sizes are fluid. Section headings scale from 40px on phones up to 104px (the first-screen title reaches 156px and the room heading 128px), the script face from 44px up to 120px, body from 16px to 18px, leads from 19px to 25px.

## Layout

Content runs the full width of the screen with a side gutter that scales from 16px to 36px. Sections have vertical padding that scales from 96px to 160px. Section heads use two columns: the heading takes about 1.3 parts and a short lead paragraph about 1 part, aligned to the bottom of the heading. The first screen splits 7 to 5, copy and running order on the left, a tall headliner photo on the right. The week is a stack of seven rows with a 12px gap, each row a six-column grid: day disc, show name, one line, time and price, a small photo and a Book link.

Below 900px, which is the main break, the nav links disappear into the Menu button, the two-column heads and the hero stack to one column, and alumni drop to two columns. With scroll motion on, the bar keeps its held sideways track at every width; without it the cards fall back to a grid of three, two below 900px and one below 560px. Week rows rearrange at 1100px and 760px.

## Elevation & Depth

There are no box shadows or drop shadows. Depth comes from flat colour blocks that change from section to section, from the dark first-screen panel over the yellow page, from a white border ring around the round room photo that overlaps the wide one, and from the full-screen black menu overlay. Hairline 1.5px borders, in ink on light grounds and a faint white on dark, separate rows instead of lifting them.

## Shapes

Everything is a capsule. The nav bar, buttons, pills, form fields, week rows and photo frames use a 999px radius. Forms and FAQ items use a 40px radius so that tall boxes do not become ovals. Review faces and the room photo are circles, and open-mic step numbers are 64px circles. Small arrows beside headings, the brush underlines and the strike strokes through old house rules are inline SVG and recolour through the variables. Hover blobs are wobbly, irregular rounded shapes rather than perfect circles.

## Components

- **button-primary:** ink fill, yellow uppercase label, 56px tall. On hover a yellow blob grows from the centre and turns the label ink.
- **button-on-dark:** the yellow twin for dark grounds, used for Book tonight and the menu overlay; its hover blob is white.
- **nav-bar:** a fixed 64px yellow capsule with a 1.5px ink border, the wordmark with a small 18+ mark, a bordered inner capsule of five links, and the Menu button.
- **pill-label:** outlined 34px capsule for dates, caption and facts such as "Nine metres".
- **week-row:** a bordered capsule per night, 108px tall on wide screens; a day disc on the left fills the row with ink on scroll.
- **input-field:** a 54px outlined capsule with an uppercase 13px label above.
- **faq-item:** native details element, 40px corners, a circular plus icon that rotates open.

## Motion

The page loads no animation library. Scroll scenes are CSS scroll-driven animations (`animation-timeline: view()` and named view timelines), written per section in `<style data-8b-part="scene:...">` blocks. A small inline motion kit at the end of the body measures distances into CSS variables, numbers the items of each `data-8b-items` group, adds `is-in` to `data-8b-motion` elements as they arrive, drives the alumni spotlight and the bar lean from the scroll position, and smooths the mouse wheel (fine pointers only; touch scrolls natively). A gate script in the head sets `data-8b-live` on the root only when the browser supports `animation-timeline` and the visitor has no reduced-motion preference; every motion rule, the opening load-in included, is scoped to it. The one idea is squash and stretch: things drop in, bounce and settle like rubber. On load the first-screen blocks rise in turn, the title settles from a larger size and the photo zooms in. Most section headings slide in line by line when they reach the screen, once: a line with a down arrow drops from above, the others rise. The bar and visit headings stay still. Open-mic numbers and hire prices squash into place.

Scrubbed to scroll: each week row opens a black fill out of its day disc and swaps ink and yellow as it crosses the middle of the screen. Each house rule gets a drawn brush strike, tilts with a bounce, and the real rule drops in. The alumni stage sticks (CSS `position: sticky`) on wide screens inside a track 280% of the screen tall, for about 1.8 screens of scroll, while a spotlight, a radial shade that leaves one portrait in colour, travels along the five faces; on phones it follows the scroll without holding. The bar's stage sticks and slides its six cards sideways, leaning up to 9 degrees with scroll speed. Review faces grow and wobble in turn. A black blob over the visit section shrinks into the closing wordmark, which springs up with an elastic ease.

The nav bar hides on a scroll down and returns on a scroll up. With reduced motion, and in browsers without CSS scroll-driven animations (Firefox today), `data-8b-live` is not set: the load-in, the heading slides, the squashes, every scroll scene and the smooth wheel are off, scrolling is the browser's own and the page shows its finished layout: brush strokes drawn, real rules in place, portraits in colour, the bar cards in a grid, no blob over the visit section. The nav hide and the hover and icon transitions still run. If a scene's script throws, the kit logs an error and switches off that scene's styles, so only its section stays static.

## Do's and Don'ts

- Do keep three colours: yellow, ink and white. Recolour only through `--color-1`, `--color-2` and `--color-3`.
- Do keep uppercase Instrument Sans for headings and labels, and the script face only for short names and rules.
- Do make every new control a 999px capsule, with a 1.5px border in the section's text colour.
- Do alternate yellow, white and black grounds so that no two neighbouring sections match.
- Don't add shadows, gradients or glass effects; depth here is flat colour.
- Don't add a third typeface or stock icons; arrows and brush marks are drawn.
- Don't use yellow text on white, or ink text on the black grounds.
- Don't add layered parallax or extra decorative scroll effects; the motion is rubbery and tied to content.
- Don't change the alumni count from five without checking the spotlight layout.
- Do build new motion as CSS scroll-driven animations scoped to `[data-8b-live]`, with the inline kit for measurements; keep the gate script, `data-8b-section`, `data-8b-motion` and `data-8b-items`.
- Don't add GSAP, Lenis or any other animation library.
