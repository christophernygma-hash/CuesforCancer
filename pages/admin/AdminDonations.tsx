import { Link } from 'react-router-dom';
import { Heart, Download, TrendingUp, DollarSign, Users, Calendar } from 'lucide-react';

const donations = [
  { id: 1, donor: 'Sarah Johnson', amount: 250, date: '2025-01-15', recurring: true, method: 'Credit Card' },
  { id: 2, donor: 'Michael Chen', amount: 100, date: '2025-01-14', recurring: false, method: 'PayPal' },
  { id: 3, donor: 'Emily Davis', amount: 50, date: '2025-01-14', recurring: true, method: 'Credit Card' },
  { id: 4, donor: 'Robert Wilson', amount: 500, date: '2025-01-13', recurring: false, method: 'Bank Transfer' },
  { id: 5, donor: 'Lisa Anderson', amount: 25, date: '2025-01-12', recurring: false, method: 'Venmo' },
];

const stats = [
  { label: 'Total This Month', value: '$12,450', icon: DollarSign },
  { label: 'Recurring Donors', value: '48', icon: Users },
  { label: 'Average Donation', value: '$87', icon: TrendingUp },
  { label: 'New Donors', value: '12', icon: Calendar },
];

export default function AdminDonations() {
  return (
    <div className="min-h-screen bg-cream flex">
      <aside className="w-64 bg-plum text-cream flex-shrink-0">
        <div className="p-6">
          <img src="/images/logo-transparent.png" alt="Cues for Cancer" className="h-10 w-auto brightness-0 invert mb-8" />
          <nav className="space-y-1">
            <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-cream/80 hover:bg-cream/10">
              <Heart className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/donations" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber text-charcoal">
              <Heart className="w-5 h-5" />
              <span>Donations</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display text-3xl text-charcoal">Donations</h1>
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-plum text-plum rounded-lg hover:bg-plum hover:text-cream transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <Icon className="w-6 h-6 text-plum mb-3" />
                  <p className="text-charcoal-light text-sm">{stat.label}</p>
                  <p className="font-display text-2xl text-charcoal">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Donations Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Donor</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Amount</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Date</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Method</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Type</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => (
                  <tr key={donation.id} className="border-t border-charcoal/5">
                    <td className="px-6 py-4 text-charcoal">{donation.donor}</td>
                    <td className="px-6 py-4 font-display text-lg text-charcoal">${donation.amount}</td>
                    <td className="px-6 py-4 text-charcoal-light">{donation.date}</td>
                    <td className="px-6 py-4 text-charcoal-light">{donation.method}</td>
                    <td className="px-6 py-4">
                      {donation.recurring ? (
                        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                          Monthly
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                          One-time
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
