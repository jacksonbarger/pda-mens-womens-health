import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';

interface HeaderProps {
  isGuestMode?: boolean;
}

/**
 * Header component with professional medical-academic branding
 *
 * Features:
 * - Professional PDA branding and color scheme
 * - Progress rank display
 * - User authentication info
 * - Guest mode indicator
 * - Logout functionality
 */
export const Header: React.FC<HeaderProps> = ({ isGuestMode = false }) => {
  const { currentUser, logout } = useAuth();
  const { getElfRank } = useProgress();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="bg-pda-forest-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight flex items-center justify-center lg:justify-start gap-3">
              <span className="text-5xl">🎅</span>
              PDA: Men's & Women's Health
            </h1>
            <p className="text-white text-base mt-1">
              Reproductive & Endocrine Systems | Winter Study Workshop
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Guest Mode Badge or User Email */}
            {isGuestMode ? (
              <div className="bg-pda-cranberry-500/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-pda-cranberry-400">
                <div className="text-sm text-white font-semibold">
                  Guest Mode (Progress not saved)
                </div>
              </div>
            ) : currentUser && (
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <div className="text-sm text-white">
                  {currentUser.email}
                </div>
              </div>
            )}

            {/* Progress Rank */}
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
              <div className="text-center">
                <div className="text-sm text-white font-semibold">
                  Your Rank
                </div>
                <div className="text-lg font-bold mt-1">{getElfRank()}</div>
              </div>
            </div>

            {/* Logout Button - Only show for logged in users */}
            {!isGuestMode && currentUser && (
              <button
                onClick={handleLogout}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 transition-colors text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Log out"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
