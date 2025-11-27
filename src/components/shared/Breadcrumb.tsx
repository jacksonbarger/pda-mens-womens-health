import React from 'react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb navigation component
 * Shows user's current location: Home → Section → Game Mode
 * Improves navigation clarity and reduces cognitive load
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-2 text-sm text-secondary">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-gray-400" aria-hidden="true">
                →
              </span>
            )}
            {item.onClick ? (
              <button
                onClick={item.onClick}
                className="hover:text-pda-cranberry-600 focus-workshop rounded-sm px-1 transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <span className="font-semibold text-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
