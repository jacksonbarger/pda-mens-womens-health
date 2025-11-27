import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { WorkshopButton } from '../shared/WorkshopButton';

/**
 * Email Verification Banner
 *
 * Shows a warning banner when user's email is not verified.
 * Includes a button to resend the verification email.
 */
export const EmailVerificationBanner: React.FC = () => {
  const { currentUser, sendVerification } = useAuth();
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  // Don't show banner if user is verified or not logged in
  if (!currentUser || currentUser.emailVerified) {
    return null;
  }

  const handleResendEmail = async () => {
    try {
      setSending(true);
      setMessage('');
      await sendVerification();
      setMessage('Verification email sent! Check your inbox.');
    } catch (error: any) {
      if (error.message.includes('already verified')) {
        setMessage('Your email is already verified!');
        // Reload to update the user's verification status
        window.location.reload();
      } else {
        setMessage('Failed to send email. Please try again later.');
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-yellow-50 border-b-2 border-yellow-400">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div>
              <p className="text-base font-semibold text-yellow-900">
                Email not verified
              </p>
              <p className="text-sm text-yellow-800">
                Please verify your email address to ensure you can recover your account.
                {message && <span className="block mt-1 font-semibold">{message}</span>}
              </p>
            </div>
          </div>
          <WorkshopButton
            onClick={handleResendEmail}
            disabled={sending}
            variant="secondary"
            className="whitespace-nowrap"
          >
            {sending ? 'Sending...' : 'Resend Email'}
          </WorkshopButton>
        </div>
      </div>
    </div>
  );
};
