export type RichTextFieldProps = {
  annotations: {
    bold: boolean;
    code: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
    color: string;
  };
  href: string;
  plain_text: string;
};

export const formatNotionRichText = (field: RichTextFieldProps) => {
  const {
    annotations: { bold, italic, underline, strikethrough, code, color },
    plain_text,
    href,
  } = field;

  const text = plain_text.replace(/(?:\r\n|\r|\n)/g, '<br />');

  const style = [
    bold && 'font-weight: bold',
    italic && 'font-style: italic',
    underline && 'text-decoration: underline',
    strikethrough && 'text-decoration: line-through',
    code && 'font-family: monospace',
    color !== 'default' && `color: ${color}`,
  ]
    .filter(Boolean)
    .join(';');

  return href
    ? `<a href="${href}" style="${style}">${text}</a>`
    : style
    ? `<span style="${style}">${text}</span>`
    : text;
};
