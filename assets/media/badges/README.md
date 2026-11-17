# "Beyond research" badge icons

Images for the "Beyond research" coins, listed in `data/badges.yaml` and
rendered by `layouts/_partials/hbx/blocks/resume-biography-3/block.html`.

- **SVG** is inlined into the page. A one-colour icon drawn with
  `currentColor` (fill or stroke) takes the site's accent colour and follows
  dark mode on its own. Multi-colour SVGs keep their colours; if two of them
  use the same `id` (e.g. for gradients), rename one so they don't clash.
- **PNG / WebP** works too and is shown as an image (use at least 128 px).

In use: `bouldering-sheen.png`, `running-sheen.png`, `cats-sheen.png`: the
flat designs below with only their cream background replaced by a silver
metallic sheen (a spun-metal highlight along the upper-left to lower-right
diagonal, faint concentric brushing). The navy and sage figures were unmixed
from each picture and laid back unchanged, colours and edges included.

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
`cat-legend-full.jpg` is the uncropped legendary photo for its reveal card.
Each photo was squared on its subject (the `-full` one kept whole) and
re-encoded with no metadata: the originals carried GPS location, capture date
and device. Keep it that way for any photo added here.

Kept for switching back: `bouldering.svg`, `running.svg`, `cats.svg`, the
site's original one-colour line drawings.

Check the licence of any icon you bring in, and note its source here.
