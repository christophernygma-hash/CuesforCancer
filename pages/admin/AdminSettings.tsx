import { Link } from 'react-router-dom';
import { Settings, Save } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="min-h-screen bg-cream flex">
      <aside className="w-64 bg-plum text-cream flex-shrink-0">
        <div className="p-6">
          <img src="/images/logo-transparent.png" alt="Cues for Cancer" className="h-10 w-auto brightness-0 invert mb-8" />
          <nav className="space-y-1">
            <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-cream/80 hover:bg-cream/10">
              <Settings className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber text-charcoal">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl text-charcoal mb-8">Settings</h1>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-display text-xl text-charcoal mb-6">General Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  defaultValue="Cues for Cancer"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  defaultValue="info@cuesforcancer.org"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="(757) 123-4567"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-display text-xl text-charcoal mb-6">Social Media</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Instagram URL
                </label>
                <input
                  type="url"
                  defaultValue="https://instagram.com/cuesforcancer"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Facebook URL
                </label>
                <input
                  type="url"
                  defaultValue="https://facebook.com/cuesforcancer"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  defaultValue="https://linkedin.com/company/cuesforcancerinc"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
                />
              </div>
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
