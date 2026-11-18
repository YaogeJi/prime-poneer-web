# "Beyond research" badge icons

Images for the "Beyond research" coins, listed in `data/badges.yaml` and
rendered by `layouts/_partials/hbx/blocks/resume-biography-3/block.html`.

- **SVG** is inlined into the page. A one-colour icon drawn with
  `currentColor` (fill or stroke) takes the site's accent colour and follows
  dark mode on its own. Multi-colour SVGs keep their colours; if two of them
  use the same `id` (e.g. for gradients), rename one so they don't clash.
- **PNG / WebP** works too and is shown as an image (use at least 128 px).

In use: `bouldering-sheen.png`, `running-sheen.png`, `cats-sheen.png`: the
flat designs below with only their cream background replaced by spun silver,
after the look of Apple's Activity award medals: a cool grey base (about
rgb(200)) with two narrow bright lobes on the upper-left to lower-right
diagonal, broader soft shade across it, a white specular hotspot toward the
upper left and a slight dome. It is smooth, with no grain: the metal comes
from the contrast between shade and highlight. (An earlier, low-contrast
light-grey sheen with faint brushing looked dirty; lifting it toward white
lost the metal.) Each pixel of the flat design was unmixed into cream plus
navy or sage with a coverage, and only the cream share was swapped for the
silver, so the figures and their anti-aliased edges are exactly as drawn.

`bouldering-flat.png`, `running-flat.png`, `cats-flat.png`: the flat
navy-and-sage designs supplied by the site owner (Nov 2026), kept for
switching back (point `icon` in `data/badges.yaml` at them). Each was cropped
to its cream disc (504 px square, 2 px inside the disc edge, so no white
shows when the page clips it to a circle); Hugo serves them as small WebPs.
The sheen versions keep the same size and crop.

Coin backs (photos supplied by the site owner, Nov 2026). Which coin uses
which photo, each photo's tier and the odds are all in `data/badges.yaml`:
`photo-medals.jpg` (half marathon); `climb-1.jpg` to `climb-4.jpg`
(bouldering); `cat-*.jpg` (cats: common, rare, epic and legendary pulls).
Each legendary photo also has a `-full` version (`cat-legend-full.jpg`,
`cat-swan-full.jpg`, `cat-fence-full.jpg`) for its reveal card, scaled to a
1600 px long edge.
Each photo was squared on its subject (480 px for common and rare, 900 px for
epic and legendary; the `-full` ones kept whole, except that
`cat-fence-full.jpg` was trimmed at the bottom to drop the camera's
watermark, and `cat-glasses.jpg`, cut from a screenshot, leaves out the
Photos app's Search button) and re-encoded with no metadata: the originals
carried GPS location, capture date and device. Wide-gamut (Display P3)
originals were converted to sRGB first, so stripping the colour profile
doesn't shift their colours. Keep it that way for any photo added here.

Kept for switching back: `bouldering.svg`, `running.svg`, `cats.svg`, the
site's original one-colour line drawings.

Check the licence of any icon you bring in, and note its source here.
