---
version: alpha
name: "Pizzeria template by 8B"
description: "One-page website for a neighbourhood pizzeria with a slice window: tomato red and cream bands, wavy edges, capsule photos and loud condensed type in a first-person voice. Free HTML template by 8B, MIT."
colors:
  primary: "#ff3b21"
  secondary: "#b81f0c"
  tertiary: "#f1c232"
  neutral: "#f6f2e8"
  surface: "#ff3b21"
  surface-cream: "#f6f2e8"
  on-surface: "#1c0b07"
  on-surface-cream: "#b81f0c"
  on-primary-display: "#f6f2e8"
  ink: "#1c0b07"
  accent-blue: "#86a6d6"
  accent-yellow: "#f1c232"
  accent-green: "#0e6b46"
typography:
  headline-display:
    fontFamily: Montagu Slab
    fontSize: 190px
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 116px
    fontWeight: 800
    lineHeight: 0.88
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: 0.005em
  headline-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 38px
    fontWeight: 800
    lineHeight: 1
  body-md:
    fontFamily: Pliant
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: Pliant
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0.045em
  button:
    fontFamily: Pliant
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.045em
  badge:
    fontFamily: Pliant
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.03em
  field:
    fontFamily: Pliant
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: 0px
  card: 18px
  frame: 34px
  arch-foot: 28px
  full: 999px
spacing:
  gutter: 64px
  gutter-tight: 20px
  section: 180px
  section-tight: 96px
  button-height: 52px
  field-height: 50px
  rule: 1.5px
  pie-gap: 28px
components:
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 0 22px
    height: 52px
  button-light:
    backgroundColor: "{colors.surface-cream}"
    textColor: "{colors.on-surface-cream}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 0 22px
    height: 52px
  button-round:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-cream}"
    rounded: "{rounded.card}"
    height: 56px
  button-send:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 76px
  nav-link:
    textColor: "{colors.primary}"
    typography: "{typography.headline-lg}"
  card-pie:
    backgroundColor: "{colors.accent-blue}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 12px 12px 24px
  card-pie-green:
    backgroundColor: "{colors.accent-green}"
    textColor: "{colors.on-primary-display}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 12px 12px 24px
  badge-price:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.badge}"
    rounded: "{rounded.full}"
    padding: 0 12px
    height: 32px
  input-field:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-cream}"
    typography: "{typography.field}"
    rounded: "{rounded.none}"
    padding: 12px 2px
    height: 50px
---

# Monella: pizzeria template

## Overview

Monella is a one-page site for a neighbourhood pizzeria with a slice window, a few regulars and weekly nights. The one idea is a shop that talks: first-person copy, tomato red and cream bands, wavy edges between them, capsule-shaped photos and big condensed caps, as if the owner shouted the menu across the counter. Blue, yellow and green are saved for the four pie cards. It suits family restaurants and food hatches that want warmth and noise. The demo's names, prices and addresses are invented.

## Colors

- **Primary (#ff3b21):** tomato red. The page background and the grounds of the first screen, dough, house rule, slice window, nights, questions and footer; the heading colour on cream bands; the send button; the fourth pie card; the street number.
- **Neutral / surface-cream (#f6f2e8):** cream. The grounds of the second opening screen, pies, people, find me, contact and the menu overlay; large heading text on red; the light button fill; the footer wordmark.
- **Secondary / on-surface-cream (#b81f0c):** deep red. Body text, logo and raised words on cream bands, the ellipse drawn round the street number, and the light button's label.
- **Ink / on-surface (#1c0b07):** near-black brown. Body text, rules, button ink and raised-word underlines on red bands.
- **Accent-blue (#86a6d6), tertiary / accent-yellow (#f1c232), accent-green (#0e6b46):** the first three pie cards, in that order. The green card takes cream text.

Cream on tomato red is about 3.2:1, enough for display sizes only; running text on red is ink, and on cream it is deep red.

## Typography

Three families, loaded from Google Fonts.

- **Bricolage Grotesque** (weight 800, condensed width, all caps): section headings, pie and step names, the statement lines, the logo and the question rows. headline-lg runs from 46px on phones to 116px, with a line height under 1.
- **Montagu Slab** (weight 700, all caps): the heavy slab for the biggest words only: the second line of the main heading (up to about 196px), the house rule line, the day names Tue, Thu and Sun, the street number and the footer wordmark.
- **Pliant** (wide, variable weight 400 to 700): body text at 15 to 17px, labels and buttons in 13px bold caps with 0.045em tracking, prices, and form fields at 16px.

Big display lines are sized from an inline `--len`, the text character count, so longer text gets smaller type instead of overflowing. Small raised words (`m-lift`, 0.4em, underlined) sit inside headings and statements and carry the voice.

## Layout

The page is a stack of full-width bands with a fluid gutter of 20 to 64px and vertical section padding of 96 to 180px; there is no centred container. Ten wavy edges, drawn as an SVG, join the bands, each in the colour of the band below it. Several heads pair a huge title with one short paragraph. Pies are four cards in a row, two columns below 1080px and one below 600px. People are four portraits in a staggered row, two columns below 900px. Slice prices, weekly nights and opening hours are ruled rows with 1.5px lines; each night has a giant day name, text and a wide capsule photo.

At 760px and below, the second opening screen, find me and questions become one column, the menu button moves to a fixed spot at the bottom centre of the screen, the dough photo frame moves above the steps, and the pill photo on the first screen darkens behind the heading.

## Elevation & Depth

There are no shadows. Depth comes from stacking: each band sits above the one before it with a higher z-index, and its wavy top edge overlaps the previous colour. Capsule photos overlap type and outline rings float behind it.

## Shapes

- **Pill (999px):** buttons, price badges, the capsule photos (9:19, 9:16 or 9:15 depending on the section) and the wide night photos.
- **Arch:** pie cards and their photos round the top fully and keep a 28px bottom corner.
- **18px:** the round 56px menu, close and social buttons are rounded squares; the send button is a 76px circle.
- **34px:** the dough photo frame, with a 10px cream border, tilted 6 degrees.
- **Blobs and circles:** the opening window is an irregular rounded blob; portraits are circles inside an outline ring; rings are 1.5px circles of many sizes.

## Components

- **button-outline:** transparent pill with a 1.5px border; on hover a rounded fill rises from below.
- **button-light:** cream pill, deep red text, ink hover fill.
- **button-round:** the 56px rounded square icon button; a second outline scales out on hover.
- **button-send:** the circle at the end of the form, ringed by six outline circles.
- **nav-link:** menu overlay entries in the condensed caps, 44 to 104px, tomato red on cream, which lift and tilt a little on hover.
- **card-pie:** an arch with a photo, a name, a description, a tag and a price badge; the four cards use blue, yellow, green and red in turn.
- **badge-price:** a small outlined pill for prices and times.
- **input-field:** a labelled line field.

## Motion

The page loads no animation library. Scroll motion is CSS scroll-driven animation (`animation-timeline` with named view timelines), written per section in `<style data-8b-part="scene:...">` blocks, plus four reusable effects (`data-8b-motion="lift"`, `swell`, `float`, `tilt`). A small inline motion kit at the end of the body numbers items into `--i` and `--n`, measures widths and offsets into CSS variables, adds `is-in` to raised-word headings as they reach 82% of the viewport height, pauses endless loops off screen, and smooths the mouse wheel (fine pointers only; touch scrolls natively). A gate script in the head sets `data-8b-live` on the root only when the browser supports `animation-timeline` and the visitor has no reduced-motion preference; every scroll rule is scoped to it. The one idea: type, rings and photos arrive from outside the frame and settle, and the wavy edges swell as a band comes in.

- **Opening:** on load (CSS keyframes) the heading lines rise and the pill photo swings in, then bobs; six rings drift and the wavy edge slides sideways, in loops that pause off screen. While the first screen scrolls away, the two heading lines slide apart, the pill tips over and sinks, the rings rise, and a round window opens from a small circle onto the second photo while the statement's raised words pop up.
- **Dough:** the stage sticks to the top (CSS `position: sticky`) for about three screens of scrolling, a track of one screen plus 58% of a screen per step. The framed photo swings through 13 degrees, each next photo wipes up from the bottom, and step names 2 to 5 turn from ink to cream. The count of five is set in the dough styles (`--dough-count` and `:nth-of-type` rules for photos and names 2 to 5).
- **House rule:** the stage sticks for a little over two screens (a 320svh track). Above 760px the line enters from the right at 2.8 times its size, crosses the screen and shrinks into place; on phones its three words enter from alternating sides. A short script measures the line and word widths for the travel.
- **Pies:** above 600px the four cards start fanned in a pile and slide out to their places (a script measures each card's offset from the row's centre and sets the fan from a list of six tilts); below, each slides in from a side.
- **People:** portraits rise from four different depths and their rings spring to size.
- **Raised words and edges:** raised words in headings pop up once as they reach 82% of the viewport height; most wavy edges grow with the scroll (not the ones above the dough and the footer); the slice photo tilts and the night photos float into place.
- **Find me:** an outline ellipse starts 6.5 times too big and turned, shrinks and untwists while its stroke draws round 14.
- **Contact and footer:** six rings gather round the send button; the footer wordmark rises and tips into its 6 degree slant above a bar that draws across.

With reduced motion, and in browsers without CSS scroll-driven animations (Firefox today), `data-8b-live` is not set: the scroll motion, the raised-word pop-ups, the wave swells and the smooth wheel are off, scrolling is the browser's own, and every section shows its finished layout. The dough and the house rule are not held: the dough lists its five steps beside the last of its photos. The opening's load-in and loops are CSS keyframes under `prefers-reduced-motion: no-preference`, so they still play in Firefox and stop with reduced motion. The menu bar still hides on scroll and hover fills still run in both cases. If a scene script throws, the kit logs an error and switches off that section's scroll styles, so only that section stays static.

## Do's and Don'ts

- Do keep red and cream as the only band colours; blue, yellow and green stay on the pie cards.
- Do write in the first person, short and warm, with one to three raised words per statement.
- Do set `--len` to the character count of each big line when its text changes.
- Do keep body text ink on red and deep red on cream; cream on red only at display size.
- Don't add shadows, gradients or square-cornered cards; shapes are pills, arches, circles and rings.
- Don't add a second display face.
- Don't turn the capsule photos into rectangles or add more scroll effects on top of the page's own.
