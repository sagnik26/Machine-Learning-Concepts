import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type Props = {
  id?: string;
  /** Static demo URL under `/static` e.g. `/demos/foo.html` (use when MDX cannot embed raw HTML). */
  src?: string;
  /** Iframe height in px. */
  height?: number;
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

const baseFrameStyle: React.CSSProperties = {
  width: '100%',
  border: '2px solid #1e293b',
  borderRadius: 12,
  display: 'block',
};

export default function InteractiveDemo({id, src, height = 720, children}: Props) {
  const srcDoc = src ? '' : collectText(children).trim();
  const resolvedSrc = src ? useBaseUrl(src) : undefined;

  return (
    <iframe
      id={id}
      title={id ?? 'Interactive demo'}
      src={resolvedSrc}
      srcDoc={src ? undefined : srcDoc || undefined}
      style={{...baseFrameStyle, height}}
      sandbox="allow-scripts allow-same-origin"
    />
  );
}
