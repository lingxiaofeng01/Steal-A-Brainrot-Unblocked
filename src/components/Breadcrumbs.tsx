import { ChevronRight, Home } from 'lucide-react';
import { Link } from './Link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-slate-400 hover:text-white transition-colors">
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-slate-600" />
            {item.href ? (
              <Link href={item.href} className="text-slate-400 hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
