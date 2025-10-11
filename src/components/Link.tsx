import { ReactNode, MouseEvent } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ href, children, className = '', onClick }: LinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
