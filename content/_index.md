---
title: ''
summary: ''
date: 2022-10-24
type: landing

design:
  spacing: '3rem'

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      button:
        text: ''
        url: ''
      headings:
        about: ''
        education: 'Education'
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: citation
  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      page_type: blog
      count: 3
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: news-feed
      spacing:
        padding: [0, 0, 0, 0]
---
