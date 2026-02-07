import { Link } from 'react-router-dom';
import { FileText, Plus, Edit, Trash2, Search } from 'lucide-react';

const contentItems = [
  { id: 1, title: 'Welcome to Cues for Cancer', type: 'Page', status: 'Published', date: '2025-01-10' },
  { id: 2, title: 'Our Programs Overview', type: 'Page', status: 'Published', date: '2025-01-10' },
  { id: 3, title: 'Maya\'s Story: Finding My Voice', type: 'Story', status: 'Published', date: '2025-01-15' },
  { id: 4, title: 'The Healing Power of Theatre', type: 'Blog', status: 'Draft', date: '2025-01-16' },
  { id: 5, title: 'Admirals Fight Cancer Night', type: 'Event', status: 'Published', date: '2025-01-08' },
];

export default function AdminContent() {
  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar - simplified */}
      <aside className="w-64 bg-plum text-cream flex-shrink-0">
        <div className="p-6">
          <img src="/images/logo-transparent.png" alt="Cues for Cancer" className="h-10 w-auto brightness-0 invert mb-8" />
          <nav className="space-y-1">
            <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-cream/80 hover:bg-cream/10">
              <FileText className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/content" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber text-charcoal">
              <FileText className="w-5 h-5" />
              <span>Content</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display text-3xl text-charcoal">Content Management</h1>
            <Link to="/admin/content/new" className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Content
            </Link>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-light" />
            <input
              type="text"
              placeholder="Search content..."
              className="w-full pl-12 pr-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum"
            />
          </div>

          {/* Content Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Title</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Type</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Date</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contentItems.map((item) => (
                  <tr key={item.id} className="border-t border-charcoal/5">
                    <td className="px-6 py-4 text-charcoal">{item.title}</td>
                    <td className="px-6 py-4">
                      <span className="bg-amber/20 text-charcoal text-xs px-3 py-1 rounded-full">
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        item.status === 'Published' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-charcoal-light">{item.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-charcoal-light hover:text-plum transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-charcoal-light hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
