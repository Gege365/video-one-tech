---
version: alpha
name: "Film festival template by 8B"
description: "A pure black one-page site for a short film festival, with one ember orange accent, a film still showing through the title and CSS-only scroll motion. Free HTML template by 8B, MIT."
colors:
  primary: "#000000"
  secondary: "#ff5b1f"
  surface: "#0f0f0f"
  on-surface: "#ffffff"
  caption: "#a8a8a8"
  unlit: "#4f4f4f"
  rule: "#272727"
typography:
  headline-display:
    fontFamily: Stack Sans Headline
    fontSize: 338px
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: -0.05em
  headline-lg:
    fontFamily: Stack Sans Headline
    fontSize: 186px
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: -0.045em
  headline-md:
    fontFamily: Stack Sans Headline
    fontSize: 68px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.035em
  title:
    fontFamily: Stack Sans Headline
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Stack Sans Text
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.01em
  body-md:
    fontFamily: Stack Sans Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: Stack Sans Notch
    fontSize: 12.5px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0.06em
  price:
    fontFamily: Stack Sans Headline
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.05em
rounded:
  sm: 8px
  full: 999px
spacing:
  gutter: 28px
  section-padding: 176px
  nav-height: 68px
  button-height: 44px
  switch-height: 40px
  icon-size: 48px
components:
  button-primary:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: "0 22px"
    height: "{spacing.button-height}"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
  button-switch:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: "0 18px"
    height: "{spacing.switch-height}"
  button-switch-pressed:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.primary}"
  nav-bar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
    height: "{spacing.nav-height}"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
  icon-button:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    height: "{spacing.icon-size}"
  ticket-stub:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.price}"
    padding: "20px 24px"
---

## Overview

Cut Short is a one-page site for a short film festival, a cinema season or a screening series. The one idea is a cinema with the lights down: a pure black page, white type, a single ember orange, and a film still that shows through the letters of the title before it takes over the screen. It is built for a festival that programmes films under twenty minutes and wants a programme, a jury, venues, passes and a call for entries to feel like one dark room. Captions sit in square brackets, headlines are tight and enormous, and photos are the only colour. Names, films, prices and addresses in the demo are invented.

## Colors

Black, white, three greys and one warm accent.

- **Primary (#000000):** the page ground, the dark behind the window word of the title, and the label colour on white buttons and on the ember hover fill.
- **On-surface (#ffffff):** headlines, the pill and icon buttons, and the colour manifesto words end on after they are lit.
- **Surface (#0f0f0f):** raised panels for the strands, the two tickets, the contact block and the submissions card, only just lighter than the ground.
- **Caption (#a8a8a8):** secondary text, bracketed captions, loglines, the large strand names and the outline of the price switch.
- **Unlit (#4f4f4f):** manifesto words before the light reaches them, the slashes between strand names and the dashed line above each price.
- **Rule (#272727):** one-pixel dividers and the track behind the progress bars.
- **Secondary (#ff5b1f):** the ember. It colours the focus ring, the progress bars under each film, step numbers, the dashes in pass lists, the lit edge of the manifesto and the hover fill of the white pill buttons. Keep it the only saturated colour.

## Typography

Three faces from one family, each with a clear job.

- **Stack Sans Headline** (weights 500 and 600) is the voice: the wordmark at weight 600, giant uppercase section names at 600, sentence-case statements and titles at 500, and the pass prices. Tracking is strongly negative, between -0.02em and -0.05em.
- **Stack Sans Text** (400 and 500) carries paragraphs at 16px and lead lines from 18px to 21px at weight 500.
- **Stack Sans Notch** (500) is for 12.5px uppercase captions, dates, runtimes, nav links and button labels, tracked at 0.06em.
- The wordmark and the giant section names are sized from their character count (`--len`), so any name fills the content width: the wordmark is capped at 24vw (about 338px on a 1440px screen) and section names at 13vw (about 186px).

## Layout

A full-width page with a side gutter that runs from 16px to 28px, and sections spaced by 96px to 176px. A narrow left column holds bracketed captions and the wide column the statement or lead, a rhythm repeated in the manifesto, the competition header, the opening night info and the questions. Competition films are two-column rows, 5fr text to 7fr still, with the text pinned beside its still. The jury is four columns, venues three, passes two. A 68px fixed bar carries the wordmark, five links and a pass button.

At 900px and below the links fold into a full-screen menu. At 760px and below most grids become one column (the opening info row keeps two), the opening title stacks as two lines, the jury keeps two columns and the opening night title sits above the frame.

## Elevation & Depth

There are no shadows. Depth comes from near-black panels on a black ground, darkening gradients laid over photos so text stays readable, and the title's window word, which uses a darken blend so the still shows only through its letters. Three sections pin a full-screen stage while you scroll, so one frame replaces another in place.

## Shapes

Corners are either an 8px soft radius, used on stills, portraits, panels and icon buttons, or fully round pills for buttons and for the start of the opening night frame. Dividers are one-pixel rules, and the ticket stub is cut from its body by a dashed line. Stills use 3:2, 3:4, 4:3 and 16:10 crops, and the opening night frame is a wide 2.15:1 window.

## Components

- **Button primary:** white pill, 44px tall, black uppercase label; on hover an ember fill opens from the middle of the pill.
- **Button switch:** outlined 40px pill for Standard and Concession; the pressed one fills white.
- **Nav bar:** transparent over the opening, a 92 percent black fill after 40px of scroll.
- **Panel:** the near-black rounded block for strands, tickets and contact.
- **Icon button:** a white 48px square with an arrow.
- **Ticket stub:** a price in the display face beside a buy button, under a dashed line.

## Motion

No library is loaded. Scroll motion is CSS scroll-driven animation with a small inline kit. A gate script in the head sets `data-8b-live` on the page only when the browser supports `animation-timeline` and reduced motion is off; every scroll scene is written under that attribute.

- **Opening:** on load the first word slides in from the left, the window opens from a slit and the info row rises. Scrolling on, the window grows from the word to the whole screen, the letters swell to 3.4 times and dissolve, so the same still becomes the second screen.
- **Manifesto:** the kit splits the statement into words; an ember edge passes through them and leaves each white.
- **Competition:** each still opens from a letterbox slit to a rounded frame while the picture settles from a 1.2 zoom, and the orange bar fills.
- **Strands:** each name splits into two halves that slide into one line.
- **Opening night:** the section is two screens tall and pins for one; a pill of a still widens to the frame while the two title words travel to its edges.
- **Jury:** portraits turn from inverted greyscale negatives to colour.
- **Venues:** the stage pins while the three panels slide sideways and photos drift against them.
- **Passes:** price stubs start dropped and turned and join their tickets.
- **Entrances:** heading cuts take 1.15 seconds, gates 1.1 seconds and rule draws 1.2 seconds, each playing once.

The kit also smooths the mouse wheel on fine pointers, only while the gate is on. Without scroll-driven support (Firefox today) the page shows its finished static layout with ordinary scrolling; only the opening's load-in and the slow drift of its still play. With reduced motion those stop too, while the nav's hide on scroll and the hover fills keep working.

## Do's and Don'ts

- Do keep the page black and the ember the only saturated colour.
- Do set captions in uppercase brackets beside headings, never above them as kickers.
- Do reset `--len` on a heading when its text changes.
- Do keep the gate script, the inline kit and the `data-8b-section`, `data-8b-motion`, `data-8b-split` and `data-8b-items` attributes.
- Do keep at most eight strands, the strand animation is built for them.
- Don't add gradients of colour, rounded icon cards or a second display face.
- Don't centre the hero with two buttons; the title runs across the width.
- Don't add an animation library or a CDN script.
- Don't leave the demo names, films and prices in a live site.
