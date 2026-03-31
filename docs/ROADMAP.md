## v1.1

- [x] Update Astro to v6
- [x] Create a md style guide for reference
- [x] use `github-light` in light theme mode, and github-dark in dark mode

## v1.2 Style Guide

### Update code blocks

- [x] Add a tab and copy

### Add Astro font integration

- [x] Add Geist
- [x] Add Geist Mono
- [x] Add [Crimson Pro](https://fontsource.org/fonts/crimson-pro) for `display` font

## v1.3

- [ ] Add a "View in markdown" routing and button at top
- [ ] Add llm.txt at root

```plaintext
Design a personal website for Marty Louis.  
```

## v1.5

### Add rss

> It's used in src/pages/notes/rss.xml.js to render note markdown bodies into
> HTML for the RSS feed. Since Astro's render() is only available in .astro
> pages, this file uses markdown-it to convert raw markdown to HTML, then pipes
> it through sanitize-html before including it as RSS item content.
> The parser itself is a singleton in src/lib/markdown.js with html, linkify,
> and typographer enabled.

Example:

```md
---                                                                           
published: 2026-03-27                  
title: Example note with code                                                 
description: Demonstrating code block features                                
tags:                                                                         
- css                                
---                                                                           

Use the `gap` property instead of margins for flex layouts.
  ```css {2}                                                                    
  .stack {                        
    gap: 1rem;                                                                  
    display: flex;                       
    flex-direction: column;         
  }                                                                             
```

The highlighted line uses `transformerMetaHighlight` via the `{2}` meta after\
the language.

In the RSS feed, markdown-it would render this body (everything below the\
frontmatter) into HTML, then sanitize-html strips any unsafe tags before it's\
included in the element of the RSS XML.