import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Heart, 
  Calendar, 
  Users, 
  Settings,
  TrendingUp,
  DollarSign,
  UserPlus,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: FileText, label: 'Content', href: '/admin/content' },
  { icon: Heart, label: 'Donations', href: '/admin/donations' },
  { icon: Calendar, label: 'Events', href: '/admin/events' },
  { icon: FileText, label: 'Stories', href: '/admin/stories' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

const stats = [
  { label: 'Total Donations', value: '$47,250', change: '+12%', icon: DollarSign },
  { label: 'Active Donors', value: '156', change: '+8%', icon: Heart },
  { label: 'New Users', value: '23', change: '+15%', icon: UserPlus },
  { label: 'Event Registrations', value: '89', change: '+5%', icon: Calendar },
];

const recentDonations = [
  { name: 'Sarah Johnson', amount: 250, date: '2025-01-15', recurring: true },
  { name: 'Michael Chen', amount: 100, date: '2025-01-14', recurring: false },
  { name: 'Emily Davis', amount: 50, date: '2025-01-14', recurring: true },
  { name: 'Robert Wilson', amount: 500, date: '2025-01-13', recurring: false },
];

export default function AdminDashboard() {
  const { logout, user } = useAuth();

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-plum text-cream flex-shrink-0">
        <div className="p-6">
          <img 
            src="/images/logo-transparent.png" 
            alt="Cues for Cancer" 
            className="h-10 w-auto brightness-0 invert mb-8"
          />
          
          <nav className="space-y-1">
            {sidebarLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = link.href === '/admin';
              return (
                <Link
                  key={index}
                  to={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-amber text-charcoal' 
                      : 'text-cream/80 hover:bg-cream/10 hover:text-cream'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center text-charcoal font-medium">
              {user?.name?.[0] || 'A'}
            </div>
            <div>
              <p className="font-medium">{user?.name || 'Admin'}</p>
              <p className="text-sm text-cream/60">Administrator</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-cream/60 hover:text-cream transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display text-3xl text-charcoal">Dashboard</h1>
            <p className="text-charcoal-light">Welcome back, {user?.name || 'Admin'}!</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-amber/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-plum" />
                    </div>
                    <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-charcoal-light text-sm mb-1">{stat.label}</p>
                  <p className="font-display text-3xl text-charcoal">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Donations */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl text-charcoal">Recent Donations</h2>
                <Link to="/admin/donations" className="text-plum text-sm hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {recentDonations.map((donation, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-charcoal/5 last:border-0">
                    <div>
                      <p className="font-medium text-charcoal">{donation.name}</p>
                      <p className="text-sm text-charcoal-light">{donation.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-xl text-charcoal">${donation.amount}</p>
                      {donation.recurring && (
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          Monthly
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="font-display text-xl text-charcoal mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/admin/content/new"
                  className="p-4 bg-cream-dark rounded-xl hover:bg-amber/20 transition-colors text-center"
                >
                  <FileText className="w-6 h-6 text-plum mx-auto mb-2" />
                  <span className="text-sm font-medium text-charcoal">New Post</span>
                </Link>
                <Link 
                  to="/admin/events/new"
                  className="p-4 bg-cream-dark rounded-xl hover:bg-amber/20 transition-colors text-center"
                >
                  <Calendar className="w-6 h-6 text-plum mx-auto mb-2" />
                  <span className="text-sm font-medium text-charcoal">New Event</span>
                </Link>
                <Link 
                  to="/admin/stories/new"
                  className="p-4 bg-cream-dark rounded-xl hover:bg-amber/20 transition-colors text-center"
                >
                  <Heart className="w-6 h-6 text-plum mx-auto mb-2" />
                  <span className="text-sm font-medium text-charcoal">New Story</span>
                </Link>
                <Link 
                  to="/admin/users/new"
                  className="p-4 bg-cream-dark rounded-xl hover:bg-amber/20 transition-colors text-center"
                >
                  <Users className="w-6 h-6 text-plum mx-auto mb-2" />
                  <span className="text-sm font-medium text-charcoal">Add User</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
