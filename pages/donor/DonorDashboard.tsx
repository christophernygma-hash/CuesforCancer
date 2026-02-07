import { Link } from 'react-router-dom';
import { Heart, User, TrendingUp, Calendar } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const donations = [
  { date: '2025-01-15', amount: 100, type: 'Monthly' },
  { date: '2024-12-15', amount: 100, type: 'Monthly' },
  { date: '2024-11-15', amount: 100, type: 'Monthly' },
];

export default function DonorDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-plum text-cream py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <img src="/images/logo-transparent.png" alt="Cues for Cancer" className="h-10 w-auto brightness-0 invert" />
          <div className="flex items-center gap-4">
            <span className="text-cream/80">Welcome, {user?.name || 'Donor'}</span>
            <Link to="/" className="text-cream/60 hover:text-amber transition-colors text-sm">
              Sign Out
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8">
            <Link to="/donor/dashboard" className="py-4 border-b-2 border-plum text-plum font-medium">
              Dashboard
            </Link>
            <Link to="/donor/history" className="py-4 border-b-2 border-transparent text-charcoal-light hover:text-plum transition-colors">
              Donation History
            </Link>
            <Link to="/donor/receipts" className="py-4 border-b-2 border-transparent text-charcoal-light hover:text-plum transition-colors">
              Tax Receipts
            </Link>
            <Link to="/donor/profile" className="py-4 border-b-2 border-transparent text-charcoal-light hover:text-plum transition-colors">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-3xl text-charcoal mb-8">Your Impact</h1>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <TrendingUp className="w-6 h-6 text-plum mb-3" />
              <p className="text-charcoal-light text-sm mb-1">Total Given</p>
              <p className="font-display text-3xl text-charcoal">$1,200</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Heart className="w-6 h-6 text-plum mb-3" />
              <p className="text-charcoal-light text-sm mb-1">Monthly Gift</p>
              <p className="font-display text-3xl text-charcoal">$100</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Calendar className="w-6 h-6 text-plum mb-3" />
              <p className="text-charcoal-light text-sm mb-1">Donor Since</p>
              <p className="font-display text-3xl text-charcoal">2023</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <User className="w-6 h-6 text-plum mb-3" />
              <p className="text-charcoal-light text-sm mb-1">People Helped</p>
              <p className="font-display text-3xl text-charcoal">24</p>
            </div>
          </div>

          {/* Recent Donations */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-display text-xl text-charcoal mb-6">Recent Donations</h2>
            <div className="space-y-4">
              {donations.map((donation, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-charcoal/5 last:border-0">
                  <div>
                    <p className="font-medium text-charcoal">{donation.date}</p>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      {donation.type}
                    </span>
                  </div>
                  <p className="font-display text-xl text-charcoal">${donation.amount}</p>
                </div>
              ))}
            </div>
            <Link to="/donor/history" className="inline-block mt-6 text-plum font-medium hover:underline">
              View Full History →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
