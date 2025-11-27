import React from 'react';
import { appIntro } from '../../config/appIntro';

/**
 * App Introduction Component
 *
 * Displays guidance on how to use the app effectively.
 * Shows on home page as a collapsible section.
 */
export const AppIntro: React.FC = () => {
  return (
    <div className="mb-12 max-w-4xl mx-auto">
      <details className="group">
        <summary className="cursor-pointer list-none">
          <div className="card-pda p-6 hover:shadow-lg transition-all border-2 border-pda-gold-300 bg-gradient-to-r from-pda-parchment-50 to-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <h2 className="text-xl font-bold text-primary">
                    If you're lost, start here
                  </h2>
                  <p className="text-sm text-secondary">
                    Click to learn how to use this study app effectively
                  </p>
                </div>
              </div>
              <div className="transform group-open:rotate-180 transition-transform text-pda-gold-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </summary>

        <div className="mt-6 space-y-6">
          {/* Title and subtitle */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">
              {appIntro.title}
            </h3>
            <p className="text-base text-secondary max-w-2xl mx-auto">
              {appIntro.subtitle}
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {appIntro.steps.map((step, index) => (
              <div
                key={index}
                className="card-pda p-6"
              >
                <h4 className="text-lg font-bold text-primary mb-2">
                  {step.title}
                </h4>
                <p className="text-base text-secondary leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="p-4 bg-pda-gold-50 border-l-4 border-pda-gold-500 rounded-r-lg">
            <p className="text-base text-primary font-semibold">
              {appIntro.footerNote}
            </p>
          </div>
        </div>
      </details>
    </div>
  );
};
