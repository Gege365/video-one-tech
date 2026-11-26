---
version: alpha
name: "Car detailing template by 8B"
description: "A near-black one-page car detailing studio site with a very wide light wordmark, bracketed captions and deep green grounds. Free HTML template by 8B, MIT."
colors:
  primary: "#ededed"
  secondary: "#545e54"
  tertiary: "#2f382f"
  neutral: "#a9aea8"
  surface: "#0f0f0f"
  on-surface: "#ededed"
  night: "#1d1f1d"
  card-pale: "#d4cccc"
  olive-brown: "#59523f"
typography:
  wordmark-display:
    fontFamily: TikTok Sans
    fontSize: 270px
    fontWeight: "300"
    lineHeight: 0.82
    letterSpacing: -0.01em
  treatment-name:
    fontFamily: TikTok Sans
    fontSize: 150px
    fontWeight: "300"
    lineHeight: 0.95
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Google Sans
    fontSize: 74px
    fontWeight: "400"
    lineHeight: 1.04
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Google Sans
    fontSize: 28px
    fontWeight: "400"
    lineHeight: 1.25
    letterSpacing: -0.01em
  body-md:
    fontFamily: Google Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 1.6
  quote:
    fontFamily: Google Sans
    fontSize: 20px
    fontWeight: "400"
    lineHeight: 1.25
    letterSpacing: -0.01em
  field-text:
    fontFamily: Google Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 1.4
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 1.4
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: "500"
    lineHeight: 1.2
    letterSpacing: 0.08em
  button:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 1.2
    letterSpacing: 0.08em
rounded:
  none: 0px
spacing:
  gutter: 56px
  section: 190px
  column-gap: 24px
  nav-height: 64px
  field-height: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 16px 26px 15px
    height: 52px
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
  link-bracket:
    textColor: "{colors.on-surface}"
    typography: "{typography.button}"
    padding: 6px 0
  tag-label:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
    padding: 7px 10px 6px
  review-card:
    backgroundColor: "{colors.card-pale}"
    textColor: "{colors.surface}"
    typography: "{typography.quote}"
    rounded: "{rounded.none}"
    padding: 22px
  reading-row:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    padding: 13px 0 12px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.field-text}"
    rounded: "{rounded.none}"
    padding: 10px 0 11px
    height: "{spacing.field-height}"
---

# Vernis

## Overview

A one-page site for a car detailing studio that takes one car at a time and sells on finish: paint correction, ceramic coating and interior care for owners who notice how a panel catches the light. The one idea is that the paint is measured before it is cut, so the page shows proof, a sheet of micron readings, five finished cars and a working week, rather than adjectives. The feeling is a quiet, lit workshop at night: a near-black ground, one very wide light wordmark, pale text and a few deep green fields. It suits a premium service with a short price list and a process worth explaining.

## Colors

- **primary / on-surface `#ededed`**: body and heading text, the filled button, the footer wordmark, the sheen that crosses the opening wordmark, reading bars, tape lines and focus outlines.
- **surface `#0f0f0f`**: the page ground of the opening, treatments, work, process, questions, contact and footer; also the text on the filled button and on the pale review cards.
- **neutral `#a9aea8`**: the opening wordmark before it lifts away, paragraphs under headings, spec labels and the muted lines in the footer.
- **tertiary `#2f382f`**: deep green ground of the paint readings and studio sections, and where the reviews ground starts.
- **secondary `#545e54`**: sage ground of the aftercare section, the sweep that fills a button on hover, form underlines, question rules and the flagged resprayed row.
- **night `#1d1f1d`**: tag ground, photo placeholders, bar tracks and the hairlines between treatment rows.
- **card-pale `#d4cccc`**: the six review cards, the only light surfaces on the page.
- **olive-brown `#59523f`**: the colour the reviews ground reaches at the end of its sideways track.

## Typography

Three families, each with one job.

- **TikTok Sans**, weight 300 on a width axis from 75% to 150%: the wordmark in the bar, the opening and the footer (uppercase, 150% wide, line height 0.82) and the three treatment names (mixed case). The opening and footer wordmarks and the treatment names are sized from their character count (spaces included) through `--len`, up to 270px for the wordmark; the bar wordmark is a fixed 19px and 150px for a treatment name, so the line fills its container.
- **Google Sans**, weight 400: headings (38px to 74px with the viewport, tracking -0.02em), leads (21px to 28px), quotes (18px to 20px), body text at 16px with 1.6 line height, and 18px form text.
- **Geist**, weight 500, always uppercase with 0.08em tracking: captions (12px), tags (11px), buttons and links (13px), the table legend and form labels.

Casing is part of the system: the wide face for names, the plain face for sentences, the tracked small caps for everything that labels.

## Layout

A twelve-column grid with a 24px column gap and a side gutter of 20px to 56px. Sections are padded 104px to 190px top and bottom and run edge to edge with no maximum width. Headings take six or seven columns and short intros the four or five on the right. The recent cars sit in an offset pattern of five: widths and top margins change from card to card, so no two neighbours align. Readings are a three-column table (panel, bar, value) beside a heading that stays fixed while the sheet scrolls; the questions use the same fixed heading.

Below 900px the grid is one column, the five links collapse into a Menu button with a full-screen overlay, the cars stack with every second one indented, the five days become rows of photo and text, and the footer columns go two across, then one below 520px.

## Elevation & Depth

There are no shadows and no blur on surfaces. Depth comes from ground colour (black, deep green, sage, then olive-brown), from sticky stages that hold a scene while the page scrolls past, and from a thin haze veil that lifts off photos. The pale review cards are the only light planes. Photo frames use `night` as their ground, and each image carries its own placeholder colour while it loads.

## Shapes

Every corner is square: buttons, tags, photos, cards, inputs. Photos are cropped to ratios (4:3, 16:9, 16:10, 1:1, 3:4 and a tall 2:3 for the week). Small hollow squares mark list items, car names and facts. Lines are one pixel: hairlines between rows and a light rule above the aftercare offer. Form fields have only an underline.

## Components

- **button-primary**: a light filled rectangle, 52px tall, uppercase Geist. On hover a sage panel with a light right edge wipes in from the left over 0.55s and the label turns light.
- **link-bracket**: a text link wrapped in square brackets; on hover the brackets move apart and a line grows under the label.
- **tag-label**: a small dark chip with tracked caps, used for the three facts on the opening and two tags on each car.
- **review-card**: pale ground, dark quote at 18px to 20px, name and car below.
- **reading-row**: panel name, a 6px bar, value in tabular figures; the resprayed row takes the sage ground.
- **input-field**: underline only, 48px tall, light text.

## Motion

The page loads no animation library. Scroll scenes are CSS scroll-driven animations (`animation-timeline` with named view timelines), written per section in `<style data-8b-part="scene:...">` blocks. A small inline motion kit at the end of the body numbers list items (`data-8b-items`), splits the aftercare statement into words, measures distances into CSS variables, adds `is-in` to `data-8b-motion` elements as they arrive, and smooths the mouse wheel (fine pointers only; touch scrolls natively). A gate script in the head sets `data-8b-live` on the root only when the browser supports `animation-timeline` and the visitor has no reduced-motion preference; the scroll rules are scoped to it. The one motion idea is measurement: things widen, fill and sweep from left to right as you scroll, like a gauge reading.

- **Bar**: hides on scroll down past 140px and returns on scroll up.
- **Opening**: on load (CSS keyframes) the wordmark rises through a clip and the headline and text lift in; a sheen loops across the wordmark every 6.4s and pauses off screen. On scroll the wordmark lifts away, 24 photo tiles (12 on phones) fly in and lock into one frame, then a haze sweeps off behind a thin line and the claim and tags fade up.
- **Treatments**: each name widens from condensed to full width (a horizontal scale measured from the width axis), its photo opens from a narrow slit and the text brightens, tied to scroll.
- **Readings**: a scan line moves down the sheet while the bars grow row by row.
- **Recent cars**: each card drifts into place, some from above and some from below, by offsets set inline on each card.
- **Week**: on wide screens a CSS sticky stage holds the section for about one and a half screens and five stacked photos spread to their day columns; phones run it down the rows in normal flow.
- **Reviews**: a sticky stage holds for about two screens while cards slide sideways from a staircase into one row.
- **Aftercare and footer**: the statement's words clear one by one; the footer wordmark widens.
- **Captions and photos**: bracket captions open from the centre, and the five car photos and the studio photo clear their veil once, on entering view.

In browsers without CSS scroll-driven animations (Firefox today) `data-8b-live` is not set: the smooth wheel, the scenes and the caption and photo effects are off, scrolling is the browser's own, and each section shows its finished layout (the opening photo whole, bars at their values, the week as five columns, the reviews as an even row that scrolls sideways with snap); the opening load-in and the sheen still play. With reduced motion the load-in and the sheen stop too and the page reads as a still layout. The hide-on-scroll bar, button wipes, link and question transitions keep running in both cases. If a scene's script throws, the kit logs an error and switches off that scene's styles, so only its section stays static.

## Do's and Don'ts

- Do keep every corner square and every line one pixel.
- Do keep Geist uppercase and tracked for anything that labels; never use it for sentences.
- Do size the wordmark and treatment names from their character count so they fill the line.
- Do keep the near-black ground with deep green and sage fields; add no second accent.
- Do show measured proof: figures with units, dated steps, named cars.
- Don't add shadows, gradients, rounded cards or pill buttons.
- Don't add stock icons or a second display face.
- Don't add other light surfaces; the pale review cards are the only ones.
- Don't add motion that is not a sweep, a widening or a reveal.
- Do build new motion as CSS scroll-driven animations scoped to `[data-8b-live]`, with the inline kit for measurements; keep the gate script, `data-8b-section`, `data-8b-motion` and `data-8b-items`.
- Don't add GSAP, Lenis or any other animation library.
