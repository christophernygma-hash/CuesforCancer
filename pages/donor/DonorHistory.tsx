import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const donations = [
  { date: '2025-01-15', amount: 100, type: 'Monthly', receipt: 'RCP-2025-001' },
  { date: '2024-12-15', amount: 100, type: 'Monthly', receipt: 'RCP-2024-012' },
  { date: '2024-11-15', amount: 100, type: 'Monthly', receipt: 'RCP-2024-011' },
  { date: '2024-10-15', amount: 100, type: 'Monthly', receipt: 'RCP-2024-010' },
  { date: '2024-09-15', amount: 250, type: 'One-time', receipt: 'RCP-2024-009' },
];

export default function DonorHistory() {
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
            <Link to="/donor/history" className="py-4 border-b-2 border-plum text-plum font-medium">
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

      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-3xl text-charcoal mb-8">Donation History</h1>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Date</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Amount</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Type</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Receipt</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, index) => (
                  <tr key={index} className="border-t border-charcoal/5">
                    <td className="px-6 py-4 text-charcoal">{donation.date}</td>
                    <td className="px-6 py-4 font-display text-lg text-charcoal">${donation.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        donation.type === 'Monthly' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {donation.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-charcoal-light">{donation.receipt}</td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-2 text-plum hover:underline text-sm">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
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
