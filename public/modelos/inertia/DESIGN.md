---
version: alpha
name: "Motion design studio template by 8B"
description: "A motion design studio website in cool grey and black with one hot orange accent, pill buttons and type that stretches as you scroll. Free HTML template by 8B, MIT."
colors:
  primary: "#0c0c0d"
  secondary: "#5f5f64"
  tertiary: "#ff4d1a"
  neutral: "#f4f4f5"
  surface: "#f4f4f5"
  surface-alt: "#e3e3e5"
  on-surface: "#0c0c0d"
  night: "#0c0c0d"
  white: "#ffffff"
  accent-orange: "#ff4d1a"
  caption: "#5f5f64"
  quiet: "#7b7b80"
  caption-on-dark: "#a3a3a8"
typography:
  headline-display:
    fontFamily: TikTok Sans
    fontSize: 156px
    fontWeight: 300
    lineHeight: 0.82
    letterSpacing: -0.03em
  headline-statement:
    fontFamily: Geist
    fontSize: 52px
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: Geist
    fontSize: 62px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Geist
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.015em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1
  field:
    fontFamily: Geist
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: -0.01em
rounded:
  none: 0px
  md: 20px
  lg: 28px
  full: 999px
spacing:
  gutter: 40px
  section: 168px
  grid-gap: 20px
  max-width: 1400px
  content-width: 1240px
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.night}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: 6px 24px 6px 6px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.night}"
    rounded: "{rounded.full}"
    padding: 13px 22px 13px 18px
  nav-link:
    textColor: "{colors.night}"
  badge-step:
    textColor: "{colors.night}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 6px 12px
  card-dark:
    backgroundColor: "{colors.night}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
  card-light:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.night}"
    rounded: "{rounded.md}"
  input-field:
    textColor: "{colors.night}"
    typography: "{typography.field}"
    rounded: "{rounded.none}"
    padding: 10px 0 12px
---

# Inertia: motion design studio template

## Overview

Inertia is a one-page site for a motion design studio that sells brand motion systems, launch films and social content. The idea is a monochrome page that behaves like the work: everything is cool grey, black and white until one hot orange streak crosses it, and type, photos and cards gain speed and brake as you scroll. It suits a studio with five real projects and fixed-price engagements, and a buyer who wants to feel tempo before reading about it. The mood is confident, quick and quiet.
## Colors

The page is grey and black with orange as the only chroma.

- **Primary, night (#0c0c0d):** body text, the dark bands (tempo, lab, footer), dark cards, the menu overlay, hairlines and the outlined button border.
- **Neutral, surface (#f4f4f5):** the page ground; the navigation bar turns into this colour at 90% once you scroll.
- **Surface alt (#e3e3e5):** light cards, photo placeholders, the contact section ground and the footer wordmark.
- **Secondary, caption (#5f5f64):** small secondary text such as card notes, step texts and contact details.
- **Tertiary, accent orange (#ff4d1a):** dots, the starburst, the runners, the method playhead and live step number, link hovers and the dot inside outlined buttons. Never a fill for large areas or body text.
- **White (#ffffff):** the pill button and text on dark surfaces.
- **Quiet (#7b7b80):** the faded half of the opening statement and of the main quote. About 3.8:1 on the ground, so large display text only.
- **Caption on dark (#a3a3a8):** small text on black cards, dark bands and the footer.

## Typography

Two faces, loaded as web fonts. **Geist** (weights 400 to 500) carries everything except the big project names: sentence-case headings at 500, body at 400, buttons, badges and form fields. Headings use tight negative tracking, from -0.015em for card titles to -0.04em for section titles. There is no uppercase and no tracked-out label style.

**TikTok Sans** at weight 300 with a width axis (75 to 150) sets the five project titles and the footer wordmark. It is light, wide and set at a line height of 0.82 with -0.03em tracking. Do not use it for running text.

Sizes use clamp(). The opening statement runs from 28px to 52px, section titles from 36px to 62px (the contact title scales up to 124px), and project titles from 64px to 156px, shrinking to 56 to 84px on phones. Card titles are 21px, body text is 16px, small notes are 14px.

## Layout

Content sits in a wrapper capped at 1400px; the opening statement uses a 1240px, 12-column grid with a 20px gap, spans columns 2 to 11 and is indented on its first line, with a starburst at its start. Side gutters are fluid, 16px up to 40px. Sections are padded 96px to 168px top and bottom and mostly open with a two-column head: heading left, a short intro right at about 40 characters wide. Work and engagement are hairline-ruled rows, the four practice cards stagger (every second card sits lower), and lab tiles offset the middle column. Light sections alternate with dark bands, and a wordmark spans the footer at full width.

At 1024px the practice cards become two columns; at 860px the head splits, grids and the form stack and the header links give way to a Menu button with a full-screen overlay; at 767px and below work rows, method steps and tempo lanes stack to one column; at 600px practice cards go one per row.

## Elevation & Depth

There are no box shadows. Depth comes from colour fields (light cards against black bands), photos masked with soft gradients on the photo cards, orange light-streak photos and elements that overlap while they move. The navigation bar is transparent at the top and takes a 90% tint of the ground once you scroll.

## Shapes

Corners are round and soft, never square except form fields. Cards and photos use 20px, the large studio photo 28px, and every button, badge, picture pill, dot and runner uses fully round pill ends (999px). The work photos open from a pill-shaped clip to a frame with 18px corners. Hairlines at 1px in night divide rows and questions. Form fields are open, with only a 1px bottom line. The logo, starburst, runners and plus signs are CSS or inline SVG, not images.

## Components

- **button-primary:** a white pill with a small photo streak on the left (56 by 36px) and a 15px medium label; on hover the streak stretches and the label brakes and slides.
- **button-secondary:** an outlined pill in night with a 14px medium label and an 8px orange dot that stretches on hover.
- **nav-link:** plain 15px text with no underline at rest; a 2px orange underline sweeps in on hover. Links in the page body keep a 1px underline at rest.
- **badge-step:** a small bordered pill for step numbers; the live step turns orange.
- **card-dark and card-light:** 20px rounded blocks, black with white text or grey with night text.
- **input-field:** 19px text on a single bottom line, with a 13px caption label.

## Motion

The page loads no animation library. Scroll scenes are CSS scroll-driven animations (`animation-timeline: view()` and named view timelines), written per section in `<style data-8b-part="scene:...">` blocks. A small inline motion kit at the end of the body measures distances into CSS variables (the practice pile, the method run, the title widths), adds `is-in` to `data-8b-motion` elements as they arrive, splits the contact title into words and two headings into lines, pauses endless loops off screen and smooths the mouse wheel (fine pointers only; touch scrolls natively). A gate script in the head sets `data-8b-live` on the root only when the browser supports `animation-timeline` and the visitor has no reduced-motion preference; every scroll rule is scoped to it. The one idea is inertia: things accelerate and brake, stretch and settle. Three shared effects: brake on most section headings, the plan names and the quotes (slide in from the right with a skew and settle on an expo-out curve, a CSS `linear()` easing), streak on the quote's picture pill and the practice dots (stretch in from the left) and drift on the voices portraits and lab photos (a slow sideways scrub).

- **Navigation:** the bar hides when you scroll down and returns when you scroll up.
- **Opening:** on load the statement, note and actions rise in, the picture pills shrink from a stretched shape and the starburst spins in.
- **Practice:** wide screens deal the four cards from a tilted pile into the row as you scroll, each dot streaking after its card; at 1024px and below each card slides in from alternating sides.
- **Work:** as a row crosses the screen its title stretches from width 75 to 150 while its photo opens from a pill to a frame, then both fall back.
- **Tempo:** three orange runners loop on their own timing (CSS keyframes) (3.6s, 1.5s with a hard stop, and a 0.6s heartbeat) and pause off screen.
- **Method:** the stage sticks to the top (CSS `position: sticky`) and four steps slide left under a fixed orange playhead; the step under it goes from grey to colour.
- **Voices and lab:** quotes brake in, and photos drift sideways inside their frames.
- **Studio:** the crew photo arrives cut into four columns out of register and lines up, while portraits rise at different rates.
- **Engage:** runners follow one scroll at each plan's pace (sprint, season, laps).
- **FAQ and contact:** plus signs turn to minus with a 0.4s transition; the orange band grows and the title words skid in.

In browsers without CSS scroll-driven animations (Firefox today) `data-8b-live` is not set: the smooth wheel, the opening's arrival and every scroll scene are off, scrolling is the browser's own, the method steps form a two-column grid without the playhead, and each section shows its finished layout; only the opening buttons' rise and the tempo loops still play. With reduced motion those stop too and the page reads in full. In both cases the bar still hides on scroll, and the hover and FAQ transitions stay. If a scene's script throws, the kit logs an error and switches off that scene's styles, so only its section stays static. The engage runners move only for the data-pace values sprint, season and laps. Keep the data-8b-motion and data-pace attributes and the classes AGENTS.md lists, since the CSS and the kit find elements through them.

## Do's and Don'ts

- Do keep orange for small signals only: dots, streaks, runners, playheads and hovers.
- Do keep the page grey and black with white; add no second hue.
- Do set project names and the wordmark in TikTok Sans 300 and everything else in Geist.
- Do keep pill ends on buttons and badges, and 20px corners on cards.
- Do give every new section a motion that shows speed or braking, not a plain fade.
- Don't add drop shadows, gradients to purple or blue, or glassy panels.
- Don't use uppercase, tracked labels or a third typeface.
- Don't put the quiet grey (#7b7b80) on small text; it is for large display type only.
- Don't use stock icons; draw marks in CSS or inline SVG.
- Do build new motion as CSS scroll-driven animations scoped to `[data-8b-live]`, with the inline kit for measurements; keep the gate script, `data-8b-section` and `data-8b-motion`. The practice row is written for four cards, the work index for five rows, the team for four portraits and the plans for three.
- Don't add GSAP, Lenis or any other animation library.
- Don't invent clients, prices or contacts; ask the owner for real ones.
