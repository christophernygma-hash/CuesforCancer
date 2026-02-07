import { Link } from 'react-router-dom';
import { Calendar, Clock, Award, Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const upcomingShifts = [
  { date: '2025-02-15', time: '2:00 PM - 4:00 PM', event: 'Theatre Workshop', location: 'Norfolk Arts Center' },
  { date: '2025-02-22', time: '10:00 AM - 12:00 PM', event: 'Beanie Crafting Circle', location: 'Community Center' },
];

const stats = [
  { label: 'Hours Volunteered', value: '48', icon: Clock },
  { label: 'Events Helped', value: '12', icon: Calendar },
  { label: 'Beanies Crafted', value: '24', icon: Heart },
];

export default function VolunteerDashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-plum text-cream py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <img src="/images/logo-transparent.png" alt="Cues for Cancer" className="h-10 w-auto brightness-0 invert" />
          <div className="flex items-center gap-4">
            <span className="text-cream/80">Welcome, {user?.name || 'Volunteer'}</span>
            <Link to="/" className="text-cream/60 hover:text-amber transition-colors text-sm">Sign Out</Link>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-charcoal/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8">
            <Link to="/volunteer/dashboard" className="py-4 border-b-2 border-plum text-plum font-medium">
              Dashboard
            </Link>
            <Link to="/volunteer/shifts" className="py-4 border-b-2 border-transparent text-charcoal-light hover:text-plum transition-colors">
              My Shifts
            </Link>
            <Link to="/volunteer/profile" className="py-4 border-b-2 border-transparent text-charcoal-light hover:text-plum transition-colors">
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <main className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-display text-3xl text-charcoal mb-8">Volunteer Dashboard</h1>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <Icon className="w-6 h-6 text-plum mb-3" />
                  <p className="text-charcoal-light text-sm mb-1">{stat.label}</p>
                  <p className="font-display text-3xl text-charcoal">{stat.value}</p>
                </div>
              );
            })}
          </div>

          {/* Upcoming Shifts */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-display text-xl text-charcoal mb-6">Your Upcoming Shifts</h2>
            {upcomingShifts.length > 0 ? (
              <div className="space-y-4">
                {upcomingShifts.map((shift, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-charcoal/5 last:border-0">
                    <div>
                      <p className="font-medium text-charcoal">{shift.event}</p>
                      <p className="text-sm text-charcoal-light">{shift.date} • {shift.time}</p>
                      <p className="text-sm text-charcoal-light">{shift.location}</p>
                    </div>
                    <Link to="/volunteer/shifts" className="text-plum font-medium text-sm hover:underline">
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-charcoal-light">No upcoming shifts scheduled.</p>
            )}
            <Link to="/volunteer/shifts" className="inline-block mt-6 text-plum font-medium hover:underline">
              View All Shifts →
            </Link>
          </div>

          {/* Recognition */}
          <div className="bg-amber rounded-2xl p-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-charcoal" />
              </div>
              <div>
                <h3 className="font-display text-xl text-charcoal mb-1">Volunteer Recognition</h3>
                <p className="text-charcoal/70">
                  Thank you for your dedication! You've made a real difference in our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
