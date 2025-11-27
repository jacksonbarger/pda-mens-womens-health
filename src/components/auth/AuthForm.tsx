import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { WorkshopButton } from '../shared/WorkshopButton';

interface AuthFormProps {
  onGuestMode?: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onGuestMode }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, login, resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!isForgotPassword && !password) {
      setError('Please enter your password');
      return;
    }

    if (!isForgotPassword && password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      setError('');
      setSuccess('');
      setLoading(true);

      if (isForgotPassword) {
        // Password reset flow
        await resetPassword(email);
        setSuccess('Password reset email sent! Check your inbox for instructions.');
        setEmail('');
      } else if (isLogin) {
        // Login flow
        await login(email, password);
      } else {
        // Signup flow
        await signup(email, password);
        setSuccess('Account created! A verification email has been sent to ' + email);
      }
    } catch (err: any) {
      // Firebase error messages
      if (err.code === 'auth/email-already-in-use') {
        setError('Email already in use. Try logging in instead.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else if (err.code === 'auth/user-not-found') {
        setError('No account found with this email. Try signing up instead.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (err.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('Failed to ' + (isForgotPassword ? 'send reset email' : isLogin ? 'log in' : 'sign up') + '. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
    setError('');
    setSuccess('');
    setEmail('');
    setPassword('');
  };

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setError('');
    setSuccess('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pda-parchment-50 to-white flex items-center justify-center px-4">
      <div className="card-workshop max-w-md w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            PDA: Men's & Women's Health
          </h1>
          <p className="text-base text-secondary">
            {isForgotPassword
              ? 'Enter your email to reset your password.'
              : isLogin
                ? 'Welcome back! Log in to continue studying.'
                : 'Create an account to save your progress.'}
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg">
            <p className="text-base text-green-700">{success}</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
            <p className="text-base text-red-700">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-base font-semibold text-primary mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-pda-gold-400 focus:outline-none transition-colors text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
              required
            />
          </div>

          {/* Password Input - Hidden for forgot password */}
          {!isForgotPassword && (
            <div>
              <label htmlFor="password" className="block text-base font-semibold text-primary mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-pda-gold-400 focus:outline-none transition-colors text-base disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />
            </div>
          )}

          {/* Forgot Password Link - Only show on login form */}
          {isLogin && !isForgotPassword && (
            <div className="text-right -mt-2">
              <button
                type="button"
                onClick={toggleForgotPassword}
                disabled={loading}
                className="text-sm text-pda-gold-600 hover:text-pda-gold-700 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <WorkshopButton
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading
              ? 'Processing...'
              : isForgotPassword
                ? 'Send Reset Email'
                : isLogin
                  ? 'Log In'
                  : 'Sign Up'}
          </WorkshopButton>
        </form>

        {/* Toggle Login/Signup/Forgot Password */}
        <div className="mt-6 text-center space-y-2">
          {isForgotPassword ? (
            <button
              onClick={toggleForgotPassword}
              disabled={loading}
              className="text-base text-pda-gold-600 hover:text-pda-gold-700 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-workshop"
            >
              ← Back to log in
            </button>
          ) : (
            <button
              onClick={toggleMode}
              disabled={loading}
              className="text-base text-pda-gold-600 hover:text-pda-gold-700 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-workshop"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
            </button>
          )}
        </div>

        {/* Info Message */}
        {!isForgotPassword && (
          <div className="mt-8 p-4 bg-pda-gold-50 rounded-lg">
            <p className="text-sm text-secondary text-center">
              Your progress will be saved to the cloud and accessible from any device.
            </p>
          </div>
        )}

        {/* Guest Mode Option */}
        {!isForgotPassword && onGuestMode && (
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onGuestMode}
              disabled={loading}
              className="mt-6 w-full px-4 py-3 rounded-lg border-2 border-gray-300 text-base font-semibold text-secondary hover:bg-gray-50 hover:border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-workshop"
            >
              Continue as Guest
            </button>

            <p className="mt-3 text-sm text-gray-500 text-center">
              Note: Progress will not be saved in guest mode
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
