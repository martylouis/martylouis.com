import type { Element } from 'hast';

// Using inline return type to avoid importing ShikiTransformer from
// unhoisted @shikijs/types. The `pre` hook signature matches ShikiTransformer.
type Transformer = {
  name: string;
  pre: (this: { options: { lang?: string; meta?: { __raw?: string } } }, node: Element) => void;
};

function findOrCreateHeader(node: Element): Element {
  let header = node.children.find(
    (c): c is Element =>
      c.type === 'element' &&
      c.tagName === 'div' &&
      (c.properties?.className as string[])?.includes('code-header'),
  );

  if (!header) {
    header = {
      type: 'element',
      tagName: 'div',
      properties: { className: ['code-header'] },
      children: [],
    };
    node.children.unshift(header);
  }

  return header;
}

export function transformerTitle(): Transformer {
  return {
    name: 'custom:title',
    pre(node) {
      const meta = this.options.meta?.__raw || '';
      const match = meta.match(/title="([^"]+)"/);
      const title = match?.[1] || this.options.lang || '';
      if (!title) return;

      node.properties['data-title'] = title;

      const titleEl: Element = {
        type: 'element',
        tagName: 'span',
        properties: { className: ['code-title'] },
        children: [{ type: 'text', value: title }],
      };

      const header = findOrCreateHeader(node);
      header.children.unshift(titleEl);
    },
  };
}

export function transformerCopyButton(): Transformer {
  return {
    name: 'custom:copy-button',
    pre(node) {
      const copyIcon: Element = {
        type: 'element',
        tagName: 'svg',
        properties: {
          className: ['copy-icon'],
          width: '16',
          height: '16',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
        children: [
          {
            type: 'element',
            tagName: 'rect',
            properties: { x: '9', y: '9', width: '13', height: '13', rx: '2', ry: '2' },
            children: [],
          },
          {
            type: 'element',
            tagName: 'path',
            properties: {
              d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
            },
            children: [],
          },
        ],
      };

      const checkIcon: Element = {
        type: 'element',
        tagName: 'svg',
        properties: {
          className: ['check-icon'],
          width: '16',
          height: '16',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
        children: [
          {
            type: 'element',
            tagName: 'polyline',
            properties: { points: '20 6 9 17 4 12' },
            children: [],
          },
        ],
      };

      const button: Element = {
        type: 'element',
        tagName: 'button',
        properties: {
          className: ['code-copy'],
          'aria-label': 'Copy code',
          type: 'button',
        },
        children: [copyIcon, checkIcon],
      };

      const header = findOrCreateHeader(node);
      header.children.push(button);
    },
  };
}
