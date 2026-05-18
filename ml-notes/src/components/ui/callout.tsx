import React from 'react';
import styles from './callout.module.css';

export type CalloutType = 'info' | 'warning' | 'success';

type Props = {
  type?: CalloutType;
  children: React.ReactNode;
};

const labels: Record<CalloutType, string> = {
  info: 'Note',
  warning: 'Warning',
  success: 'Key insight',
};

export function Callout({type = 'info', children}: Props) {
  return (
    <aside className={`${styles.callout} ${styles[type]}`} role="note">
      <span className={styles.label}>{labels[type]}</span>
      <div className={styles.body}>{children}</div>
    </aside>
  );
} 
