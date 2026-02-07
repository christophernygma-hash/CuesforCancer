import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await login(email, password, 'admin');
      navigate('/admin');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-plum flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/images/logo-transparent.png" 
            alt="Cues for Cancer" 
            className="h-16 mx-auto mb-4 brightness-0 invert"
          />
          <h1 className="font-display text-3xl text-cream mb-2">Admin Portal</h1>
          <p className="text-cream/70">Sign in to manage your organization</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-light" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@cuesforcancer.org"
                  className="w-full pl-12 pr-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-light" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-light hover:text-charcoal"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-4 disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-sm text-plum hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-cream/70 hover:text-amber transition-colors text-sm">
            ← Back to website
          </a>
        </div>
      </div>
    </div>
  );
}
