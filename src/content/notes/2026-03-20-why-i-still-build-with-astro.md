---
title: Why I still build with Astro
description: Astro ships less JavaScript by default, which means faster sites. For most of the projects I work on, that trade-off is exactly right.
format: long
created_at: 2026-03-20
---

Every few months someone asks me why I haven't switched to Next.js or Remix for client projects. It's a fair question — those frameworks are great. But for the kind of work I do — marketing sites, small business websites, portfolio pages — Astro is hard to beat.

The biggest reason is performance. Astro ships zero JavaScript by default. When a local business owner's customer is loading their site on a spotty connection at a coffee shop, every kilobyte matters. I don't need a full React runtime to render a services page.

The second reason is simplicity. I can use React components where I need interactivity and plain HTML everywhere else. There's no pressure to make everything a client component. The mental model is straightforward: start with HTML, add JavaScript only when you need it.

I'm not saying Astro is the right tool for everything. If I were building a dashboard or a SaaS app, I'd reach for something else. But for the projects that land on my desk, it keeps things fast, simple, and easy to hand off.
