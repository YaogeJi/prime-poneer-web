---
title: News
# News lives only in the homepage feed: each item opens in place there (see
# views/news-feed.html), so no post gets a page of its own, and neither does
# this section. `list: local` keeps the posts out of site-wide collections —
# RSS, the sitemap — which would otherwise list them with no page to point
# at; the homepage reads them from this section instead. Page resources
# (Gwinnett's photo) are still published, for the feed to show.
build:
  render: never
  list: never
cascade:
  build:
    render: never
    list: local
    publishResources: true
---
