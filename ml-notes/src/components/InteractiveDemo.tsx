import React from 'react';

type Props = {
  id?: string;
  /** Static demo URL under `/static` e.g. `/demos/foo.html` (use when MDX cannot embed raw HTML). */
  src?: string;
  children?: React.ReactNode;
};

function collectText(node: React.ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(collectText).join('');
  if (React.isValidElement<{children?: React.ReactNode}>(node)) {
    const ch = node.props.children;
    if (ch != null) return collectText(ch);
  }
  return '';
}

const frameStyle: React.CSSProperties = {
  width: '100%',
  height: 480,
  border: '2px solid #1e293b',
  borderRadius: 12,
  display: 'block',
};

export default function InteractiveDemo({id, src, children}: Props) {
  const srcDoc = src ? '' : collectText(children).trim();

  return (
    <iframe
      id={id}
      title={id ?? 'Interactive demo'}
      src={src}
      srcDoc={src ? undefined : srcDoc || undefined}
      style={frameStyle}
      sandbox="allow-scripts allow-same-origin"
    />
  );
}
