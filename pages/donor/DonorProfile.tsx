import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Save, Bell, Lock, User } from 'lucide-react';

export default function DonorProfile() {
  const [email, setEmail] = useState('donor@example.com');
  const [name, setName] = useState('Sarah Johnson');
  const [phone, setPhone] = useState('(757) 555-0123');
  const [notifications, setNotifications] = useState({
    email: true,
    newsletter: true,
    events: false
  });

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-plum text-cream py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <img src="/images/logo-transparent.png" alt="Cues for Cancer" className="h-10 w-auto brightness-0 invert" />
          <Link to="/" className="text-cream/60 hover:text-amber transition-colors text-sm">Sign Out</Link>
        </div>
      </header>

      <nav className="bg-white border-b border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8">
            <Link to="/donor/dashboard" className="py-4 border-b-2 border-transparent text-charcoal-light hover:text-plum transition-colors">
              Dashboard
            </Link>
            <Link to="/donor/history" className="py-4 border-b-2 border-transparent text-charcoal-light hover:text-plum transition-colors">
              Donation History
            </Link>
            <Link to="/donor/receipts" className="py-4 border-b-2 border-transparent text-charcoal-light hover:text-plum transition-colors">
              Tax Receipts
            </Link>
            <Link to="/donor/profile" className="py-4 border-b-2 border-plum text-plum font-medium">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <main className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display text-3xl text-charcoal mb-8">Your Profile</h1>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-display text-xl text-charcoal mb-6 flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-display text-xl text-charcoal mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Preferences
            </h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) => setNotifications({ ...notifications, email: e.target.checked })}
                  className="w-5 h-5 text-plum rounded focus:ring-plum"
                />
                <span className="text-charcoal">Receive donation confirmations via email</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.newsletter}
                  onChange={(e) => setNotifications({ ...notifications, newsletter: e.target.checked })}
                  className="w-5 h-5 text-plum rounded focus:ring-plum"
                />
                <span className="text-charcoal">Subscribe to our newsletter</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.events}
                  onChange={(e) => setNotifications({ ...notifications, events: e.target.checked })}
                  className="w-5 h-5 text-plum rounded focus:ring-plum"
                />
                <span className="text-charcoal">Notify me about upcoming events</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-display text-xl text-charcoal mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Change Password
            </h2>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current password"
                className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
              />
              <input
                type="password"
                placeholder="New password"
                className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
              />
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="btn-primary flex items-center gap-2">
              <Save className="w-5 h-5" />
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
