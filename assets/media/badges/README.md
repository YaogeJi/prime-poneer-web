# "Beyond research" badge icons

One file per badge, listed in the bio block
(`layouts/_partials/hbx/blocks/resume-biography-3/block.html`, `$badges`).

- **SVG** is inlined into the page. A one-colour icon drawn with
  `currentColor` (fill or stroke) takes the site's accent colour and follows
  dark mode on its own. Multi-colour SVGs keep their colours; if two of them
  use the same `id` (e.g. for gradients), rename one so they don't clash.
- **PNG / WebP** works too and is shown as an image (use at least 128 px).

In use: `bouldering-flat.png`, `running-flat.png`, `cats-flat.png`, flat
navy-and-sage designs supplied by the site owner (Nov 2026). Each was cropped
to its cream disc (504 px square, 2 px inside the disc edge, so no white
shows when the page clips it to a circle); Hugo serves them as small WebPs.

Kept for switching back: `bouldering.svg`, `running.svg`, `cats.svg`, the
site's original one-colour line drawings.

Check the licence of any icon you bring in, and note its source here.
