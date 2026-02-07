import { Link } from 'react-router-dom';
import { FileText, Plus, Edit, Trash2 } from 'lucide-react';

const stories = [
  { id: 1, title: "Maya's Story: Finding My Voice", author: 'Maya Thompson', date: '2025-01-15', status: 'Published' },
  { id: 2, title: "David's Journey: From Diagnosis to Stage", author: 'David Chen', date: '2025-01-10', status: 'Published' },
  { id: 3, title: 'The Healing Power of Music', author: 'Sarah Mitchell', date: '2025-01-08', status: 'Draft' },
];

export default function AdminStories() {
  return (
    <div className="min-h-screen bg-cream flex">
      <aside className="w-64 bg-plum text-cream flex-shrink-0">
        <div className="p-6">
          <img src="/images/logo-transparent.png" alt="Cues for Cancer" className="h-10 w-auto brightness-0 invert mb-8" />
          <nav className="space-y-1">
            <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-cream/80 hover:bg-cream/10">
              <FileText className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/stories" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber text-charcoal">
              <FileText className="w-5 h-5" />
              <span>Stories</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display text-3xl text-charcoal">Stories</h1>
            <Link to="/admin/stories/new" className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              New Story
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Title</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Author</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Date</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {stories.map((story) => (
                  <tr key={story.id} className="border-t border-charcoal/5">
                    <td className="px-6 py-4 text-charcoal">{story.title}</td>
                    <td className="px-6 py-4 text-charcoal-light">{story.author}</td>
                    <td className="px-6 py-4 text-charcoal-light">{story.date}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        story.status === 'Published' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {story.status}
                      </span>
                    </td>
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
