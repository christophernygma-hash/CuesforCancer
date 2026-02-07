import { Link } from 'react-router-dom';
import { Download, FileText } from 'lucide-react';

const receipts = [
  { year: 2024, total: '$1,450', status: 'Available' },
  { year: 2023, total: '$1,200', status: 'Available' },
];

export default function DonorReceipts() {
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
            <Link to="/donor/receipts" className="py-4 border-b-2 border-plum text-plum font-medium">
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
          <h1 className="font-display text-3xl text-charcoal mb-4">Tax Receipts</h1>
          <p className="text-charcoal-light mb-8">
            Download your annual tax receipts for your records. All donations to Cues for Cancer are tax-deductible.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {receipts.map((receipt, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-amber/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-plum" />
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    {receipt.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-1">{receipt.year} Annual Receipt</h3>
                <p className="text-charcoal-light mb-4">Total donations: {receipt.total}</p>
                <button className="flex items-center gap-2 text-plum font-medium hover:underline">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-cream-dark rounded-2xl">
            <h3 className="font-display text-lg text-charcoal mb-2">Tax Information</h3>
            <p className="text-charcoal-light text-sm">
              Cues for Cancer is a registered 501(c)(3) nonprofit organization. 
              EIN: 33-2884314. Your donations are tax-deductible to the fullest extent allowed by law.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
