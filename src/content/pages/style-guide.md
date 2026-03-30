---
title: Style Guide
description: Design tokens, typography, and component reference for martylouis.com.
draft: false
---

# Style Guide

Design tokens, typography, and component reference for this site.

---

## Colors

Semantic color tokens that adapt to light and dark themes. Toggle the theme to see both modes.

### Surfaces

<div class="not-prose grid grid-cols-2 gap-4 my-8 sm:grid-cols-3">
  <div class="flex flex-col gap-1.5">
    <div
      class="h-16 rounded-md border"
      style="background-color: var(--background)"
    ></div>
    <span class="text-xs font-mono text-muted-foreground">--background</span>
  </div>
  <div class="flex flex-col gap-1.5">
    <div
      class="h-16 rounded-md border"
      style="background-color: var(--card)"
    ></div>
    <span class="text-xs font-mono text-muted-foreground">--card</span>
  </div>
  <div class="flex flex-col gap-1.5">
    <div
      class="h-16 rounded-md border"
      style="background-color: var(--popover)"
    ></div>
    <span class="text-xs font-mono text-muted-foreground">--popover</span>
  </div>
</div>

### Interactive

<div class="not-prose grid grid-cols-2 gap-4 my-8 sm:grid-cols-3 md:grid-cols-4">
  <div class="flex flex-col gap-1.5">
    <div
      class="flex h-16 items-end rounded-md border p-2"
      style="background-color: var(--primary)"
    >
      <span class="text-xs font-mono" style="color: var(--primary-foreground)">
        foreground
      </span>
    </div>
    <span class="text-xs font-mono text-muted-foreground">--primary</span>
  </div>
  <div class="flex flex-col gap-1.5">
    <div
      class="flex h-16 items-end rounded-md border p-2"
      style="background-color: var(--secondary)"
    >
      <span
        class="text-xs font-mono"
        style="color: var(--secondary-foreground)"
      >
        foreground
      </span>
    </div>
    <span class="text-xs font-mono text-muted-foreground">--secondary</span>
  </div>
  <div class="flex flex-col gap-1.5">
    <div
      class="flex h-16 items-end rounded-md border p-2"
      style="background-color: var(--accent)"
    >
      <span class="text-xs font-mono" style="color: var(--accent-foreground)">
        foreground
      </span>
    </div>
    <span class="text-xs font-mono text-muted-foreground">--accent</span>
  </div>
  <div class="flex flex-col gap-1.5">
    <div
      class="flex h-16 items-end rounded-md border p-2"
      style="background-color: var(--destructive)"
    >
      <span
        class="text-xs font-mono"
        style="color: var(--destructive-foreground)"
      >
        foreground
      </span>
    </div>
    <span class="text-xs font-mono text-muted-foreground">--destructive</span>
  </div>
</div>

### Utility

<div class="not-prose grid grid-cols-2 gap-4 my-8 sm:grid-cols-3 md:grid-cols-4">
  <div class="flex flex-col gap-1.5">
    <div
      class="flex h-16 items-end rounded-md border p-2"
      style="background-color: var(--muted)"
    >
      <span class="text-xs font-mono" style="color: var(--muted-foreground)">
        foreground
      </span>
    </div>
    <span class="text-xs font-mono text-muted-foreground">--muted</span>
  </div>
  <div class="flex flex-col gap-1.5">
    <div
      class="h-16 rounded-md border"
      style="background-color: var(--border)"
    ></div>
    <span class="text-xs font-mono text-muted-foreground">--border</span>
  </div>
  <div class="flex flex-col gap-1.5">
    <div
      class="h-16 rounded-md border"
      style="background-color: var(--input)"
    ></div>
    <span class="text-xs font-mono text-muted-foreground">--input</span>
  </div>
  <div class="flex flex-col gap-1.5">
    <div
      class="h-16 rounded-md border"
      style="background-color: var(--ring)"
    ></div>
    <span class="text-xs font-mono text-muted-foreground">--ring</span>
  </div>
</div>

### Foreground

<div class="not-prose grid grid-cols-2 gap-4 my-8 sm:grid-cols-3">
  <div class="flex flex-col gap-1.5">
    <div class="flex h-16 items-center justify-center rounded-md border">
      <span class="text-sm font-medium" style="color: var(--foreground)">
        Foreground
      </span>
    </div>
    <span class="text-xs font-mono text-muted-foreground">--foreground</span>
  </div>
  <div class="flex flex-col gap-1.5">
    <div class="flex h-16 items-center justify-center rounded-md border">
      <span class="text-sm font-medium" style="color: var(--muted-foreground)">
        Muted
      </span>
    </div>
    <span class="text-xs font-mono text-muted-foreground">
      --muted-foreground
    </span>
  </div>
</div>

### Radius

<div class="not-prose flex gap-6 my-8 items-end">
  <div class="flex flex-col items-center gap-1.5">
    <div
      class="size-16 border-2 border-foreground"
      style="border-radius: var(--radius)"
    ></div>
    <span class="text-xs font-mono text-muted-foreground">--radius</span>
    <span class="text-xs text-muted-foreground">0.5rem</span>
  </div>
</div>

---

## Typography

The site uses the system font stack via Tailwind CSS defaults. No custom web fonts are loaded. Prose styling is provided by `@tailwindcss/typography`.

### Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

### Body Text

Regular paragraph text demonstrates the base body style. **Bold text** and _italic text_ are styled by the typography plugin. [Inline links](#) use the default prose link style with underline.

> Blockquotes appear like this. They can be used for callouts, quotes, or emphasis.

### Lists

- Unordered list item one
- Unordered list item two
- Unordered list item three

1. Ordered list item one
2. Ordered list item two
3. Ordered list item three

### Code

Inline `code` uses a monospace font with subtle background styling.

```tsx
// Fenced code block
function greet(name: string) {
  return `Hello, ${name}!`;
}
```

### Line Highlighting

Highlight specific lines by adding line numbers in curly braces after the language: `tsx {2,4}`.

```tsx {2,4}
function add(a: number, b: number) {
  const result = a + b;
  console.log(result);
  return result;
}
```

### Word Highlighting

Highlight specific words by wrapping them in slashes after the language: `` ```tsx /result/ ``.

```tsx /result/
function add(a: number, b: number) {
  const result = a + b;
  console.log(result);
  return result;
}
```

### Diff Lines

Use `// [!code ++]` and `// [!code --]` to mark added and removed lines.

```tsx
function greet(name: string) {
  return `Hello, ${name}!`; // [!code --]
  return `Hey there, ${name}!`; // [!code ++]
}
```

### Bash

Bash blocks show `$` instead of line numbers.

```bash
pnpm dev
pnpm build
pnpm check
```

### Title / Filename

Add `title="filename"` to the meta string to show a tab-style title: `` ```ts title="astro.config.mjs" ``.

```ts title="astro.config.mjs"
export default defineConfig({
  site: 'https://martylouis.com/',
});
```

### Copy Button

Every code block includes a copy button in the top-right corner. Click it to copy the code to your clipboard.

### No Line Numbers

Add `no-lines` to the meta string to hide line numbers: `` ```tsx no-lines ``.

```tsx no-lines
const greeting = "Hello, world!";
console.log(greeting);
```
