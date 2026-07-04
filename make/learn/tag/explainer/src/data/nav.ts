// Page order. Drives both the sidebar and the prev/next footer.
export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: '/', label: 'Spec sheet' },
  { href: '/architecture/', label: 'Architecture & execution' },
  { href: '/the-loop/', label: 'The working loop' },
  { href: '/memory/', label: 'Memory' },
  { href: '/identity-and-access/', label: 'Identity & access' },
  { href: '/tools/', label: 'Tools, connectors & Slack surface' },
  { href: '/governance-and-security/', label: 'Governance & security' },
  { href: '/comparisons/', label: 'Tag vs Code vs Cowork' },
  { href: '/design-principles/', label: 'Design principles' },
  { href: '/build-your-own-connector/', label: 'Build your own connector' },
  { href: '/open-threads/', label: 'Open threads' },
  { href: '/glossary/', label: 'Glossary' },
];

// Normalize a pathname to the trailing-slash form used in `nav`.
export function canonical(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  return pathname.endsWith('/') ? pathname : pathname + '/';
}
