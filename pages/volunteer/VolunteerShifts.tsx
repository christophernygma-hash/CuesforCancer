import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const shifts = [
  { id: 1, date: '2025-02-15', time: '2:00 PM - 4:00 PM', event: 'Theatre Workshop', location: 'Norfolk Arts Center', status: 'confirmed' },
  { id: 2, date: '2025-02-22', time: '10:00 AM - 12:00 PM', event: 'Beanie Crafting Circle', location: 'Community Center', status: 'confirmed' },
  { id: 3, date: '2025-03-01', time: '7:00 PM - 9:00 PM', event: 'Community Showcase', location: 'Harrison Opera House', status: 'pending' },
];

const availableShifts = [
  { id: 4, date: '2025-03-08', time: '10:00 AM - 12:00 PM', event: 'Support Group', location: 'Virtual', spots: 3 },
  { id: 5, date: '2025-03-15', time: '2:00 PM - 5:00 PM', event: 'Spring Healing Retreat', location: 'Richmond, VA', spots: 5 },
];

export default function VolunteerShifts() {
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
            <Link to="/volunteer/dashboard" className="py-4 border-b-2 border-transparent text-charcoal-light hover:text-plum transition-colors">
              Dashboard
            </Link>
            <Link to="/volunteer/shifts" className="py-4 border-b-2 border-plum text-plum font-medium">
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
          <h1 className="font-display text-3xl text-charcoal mb-8">My Shifts</h1>

          {/* My Shifts */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-display text-xl text-charcoal mb-6">Confirmed Shifts</h2>
            <div className="space-y-4">
              {shifts.filter(s => s.status === 'confirmed').map((shift) => (
                <div key={shift.id} className="flex items-center justify-between py-4 border-b border-charcoal/5 last:border-0">
                  <div>
                    <p className="font-medium text-charcoal">{shift.event}</p>
                    <p className="text-sm text-charcoal-light">{shift.date} • {shift.time}</p>
                    <p className="text-sm text-charcoal-light">{shift.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      Confirmed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Shifts */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="font-display text-xl text-charcoal mb-6">Pending Confirmation</h2>
            <div className="space-y-4">
              {shifts.filter(s => s.status === 'pending').map((shift) => (
                <div key={shift.id} className="flex items-center justify-between py-4 border-b border-charcoal/5 last:border-0">
                  <div>
                    <p className="font-medium text-charcoal">{shift.event}</p>
                    <p className="text-sm text-charcoal-light">{shift.date} • {shift.time}</p>
                    <p className="text-sm text-charcoal-light">{shift.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                      Pending
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Available Shifts */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-display text-xl text-charcoal mb-6">Available Shifts</h2>
            <div className="space-y-4">
              {availableShifts.map((shift) => (
                <div key={shift.id} className="flex items-center justify-between py-4 border-b border-charcoal/5 last:border-0">
                  <div>
                    <p className="font-medium text-charcoal">{shift.event}</p>
                    <p className="text-sm text-charcoal-light">{shift.date} • {shift.time}</p>
                    <p className="text-sm text-charcoal-light">{shift.location}</p>
                    <p className="text-sm text-amber mt-1">{shift.spots} spots available</p>
                  </div>
                  <button className="px-4 py-2 bg-plum text-cream rounded-lg hover:bg-plum-dark transition-colors text-sm">
                    Sign Up
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
