import { Link } from 'react-router-dom';
import { Users, Plus, Edit, Lock } from 'lucide-react';

const users = [
  { id: 1, name: 'Sarah Mitchell', email: 'sarah@cuesforcancer.org', role: 'Admin', status: 'Active' },
  { id: 2, name: 'David Chen', email: 'david@cuesforcancer.org', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Maria Rodriguez', email: 'maria@cuesforcancer.org', role: 'Volunteer', status: 'Active' },
  { id: 4, name: 'John Smith', email: 'john@example.com', role: 'Donor', status: 'Active' },
];

export default function AdminUsers() {
  return (
    <div className="min-h-screen bg-cream flex">
      <aside className="w-64 bg-plum text-cream flex-shrink-0">
        <div className="p-6">
          <img src="/images/logo-transparent.png" alt="Cues for Cancer" className="h-10 w-auto brightness-0 invert mb-8" />
          <nav className="space-y-1">
            <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-cream/80 hover:bg-cream/10">
              <Users className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin/users" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber text-charcoal">
              <Users className="w-5 h-5" />
              <span>Users</span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display text-3xl text-charcoal">Users</h1>
            <Link to="/admin/users/new" className="btn-primary flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add User
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-cream-dark">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Name</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Email</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Role</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-charcoal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t border-charcoal/5">
                    <td className="px-6 py-4 text-charcoal">{user.name}</td>
                    <td className="px-6 py-4 text-charcoal-light">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className="bg-amber/20 text-charcoal text-xs px-3 py-1 rounded-full">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-charcoal-light hover:text-plum transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-charcoal-light hover:text-plum transition-colors">
                          <Lock className="w-4 h-4" />
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
