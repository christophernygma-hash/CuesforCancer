import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight,
  Filter,
  Users2,
  Heart,
  Coffee,
  Video
} from 'lucide-react';

const events = [
  {
    slug: 'admirals-fight-cancer',
    title: 'Admirals Fight Cancer Night',
    date: '2025-11-08',
    time: '6:05 PM',
    location: 'Norfolk Scope Arena',
    type: 'Fundraiser',
    description: 'Join Cues for Cancer and the Norfolk Admirals for a night of hockey, hope, and community. A portion of proceeds supports our programs.',
    attendees: 150,
    image: '/images/event-arena.jpg',
    featured: true,
    cost: 'Ticketed'
  },
  {
    slug: 'spring-healing-retreat',
    title: 'Spring Healing Retreat',
    date: '2025-03-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Maymont Park, Richmond, VA',
    type: 'Workshop',
    description: 'A day of creative workshops, nature walks, and community connection for performing artists affected by cancer.',
    attendees: 25,
    image: '/images/mission-hands.jpg',
    featured: false,
    cost: 'Free'
  },
  {
    slug: 'creative-expression-workshop',
    title: 'Theatre Workshop: Finding Your Voice',
    date: '2025-02-15',
    time: '2:00 PM - 4:00 PM',
    location: 'Norfolk Arts Center',
    type: 'Workshop',
    description: 'A therapeutic drama session for survivors and caregivers. No experience necessary.',
    attendees: 12,
    image: '/images/hero-bg.jpg',
    featured: false,
    cost: 'Free'
  },
  {
    slug: 'beanie-crafting-circle',
    title: 'Beanie Crafting Circle',
    date: '2025-02-22',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Center, Norfolk',
    type: 'Volunteer',
    description: 'Join our volunteers in crafting beanies for patients. All materials provided.',
    attendees: 15,
    image: '/images/story-portrait-1.jpg',
    featured: false,
    cost: 'Free'
  },
  {
    slug: 'community-showcase',
    title: 'Community Showcase: Stories on Stage',
    date: '2025-04-20',
    time: '7:00 PM',
    location: 'Harrison Opera House',
    type: 'Performance',
    description: 'An evening of performances by our community members, sharing their creative journeys.',
    attendees: 200,
    image: '/images/hero-bg.jpg',
    featured: false,
    cost: 'Free, donations welcome'
  },
  {
    slug: 'caregiver-support-group',
    title: 'Caregiver Support Group',
    date: '2025-02-08',
    time: '10:00 AM - 11:30 AM',
    location: 'Virtual (Zoom)',
    type: 'Support Group',
    description: 'Monthly support group for caregivers of performing artists affected by cancer.',
    attendees: 8,
    image: '/images/story-portrait-2.jpg',
    featured: false,
    cost: 'Free'
  }
];

const eventTypes = ['All', 'Workshop', 'Support Group', 'Performance', 'Fundraiser', 'Volunteer'];
const formats = ['All', 'In-Person', 'Virtual', 'Hybrid'];

export default function EventsPage() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [formatFilter, setFormatFilter] = useState('All');

  const filteredEvents = events.filter(event => {
    const matchesType = typeFilter === 'All' || event.type === typeFilter;
    return matchesType;
  });

  const featuredEvent = events.find(e => e.featured);
  const upcomingEvents = filteredEvents.filter(e => !e.featured);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
      day: date.getDate(),
      full: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
    };
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Page Hero */}
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Events</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Events & Happenings
          </h1>
          <p className="text-xl text-cream/80">
            Join us on stage and off
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <span className="section-label mb-4 block">Featured Event</span>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber text-charcoal text-xs font-mono uppercase px-3 py-1 rounded-full">
                    {featuredEvent.type}
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h2 className="font-display text-3xl lg:text-4xl text-charcoal mb-4">
                    {featuredEvent.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-charcoal-light mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-5 h-5" />
                      {formatDate(featuredEvent.date).full}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-5 h-5" />
                      {featuredEvent.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-5 h-5" />
                      {featuredEvent.location}
                    </span>
                  </div>
                  <p className="text-charcoal-light mb-6">
                    {featuredEvent.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="flex items-center gap-1 text-charcoal-light">
                      <Users className="w-5 h-5" />
                      {featuredEvent.attendees} attending
                    </span>
                    <span className="bg-plum/10 text-plum px-3 py-1 rounded-full text-sm">
                      {featuredEvent.cost}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={`/events/${featuredEvent.slug}`}
                      className="btn-primary"
                    >
                      Get Tickets
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      to="/get-involved/sponsor"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-plum text-plum rounded-full hover:bg-plum hover:text-cream transition-colors"
                    >
                      Become a Sponsor
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <Filter className="w-5 h-5 text-charcoal-light" />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum bg-white"
            >
              {eventTypes.map(t => <option key={t} value={t}>{t === 'All' ? 'All Event Types' : t}</option>)}
            </select>
            <select
              value={formatFilter}
              onChange={(e) => setFormatFilter(e.target.value)}
              className="px-4 py-2 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum bg-white"
            >
              {formats.map(f => <option key={f} value={f}>{f === 'All' ? 'All Formats' : f}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="heading-md text-charcoal mb-8">Upcoming Events</h2>
          
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => {
              const { month, day } = formatDate(event.date);
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 flex flex-col lg:flex-row gap-6 items-start lg:items-center shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Date */}
                  <div className="flex-shrink-0 w-20 h-20 bg-plum rounded-2xl flex flex-col items-center justify-center text-cream">
                    <span className="text-xs font-mono uppercase">{month}</span>
                    <span className="font-display text-3xl">{day}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-amber/20 text-charcoal text-xs font-mono uppercase px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                      <span className="flex items-center gap-1 text-charcoal-light text-sm">
                        <Users className="w-4 h-4" />
                        {event.attendees} attending
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-charcoal mb-2">
                      {event.title}
                    </h3>
                    <p className="text-charcoal-light mb-3 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-light">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                      <span className="bg-plum/10 text-plum px-2 py-0.5 rounded text-xs">
                        {event.cost}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <Link
                    to={`/events/${event.slug}`}
                    className="flex-shrink-0 btn-primary"
                  >
                    Register
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="heading-md text-charcoal mb-8 text-center">Our Events</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Video, title: 'Creative Workshops', desc: 'Hands-on creative sessions', freq: 'Weekly', cost: 'Free' },
              { icon: Users2, title: 'Support Groups', desc: 'Ongoing peer support', freq: 'Bi-weekly', cost: 'Free' },
              { icon: Calendar, title: 'Performances', desc: 'Community showcases', freq: 'Quarterly', cost: 'Free' },
              { icon: Heart, title: 'Fundraising', desc: 'Galas and special events', freq: '2-3/year', cost: 'Ticketed' },
              { icon: Coffee, title: 'Community', desc: 'Informal meetups', freq: 'Monthly', cost: 'Free' }
            ].map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-amber/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-plum" />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2">{type.title}</h3>
                  <p className="text-sm text-charcoal-light mb-3">{type.desc}</p>
                  <div className="text-xs text-charcoal/60">
                    <span className="block">{type.freq}</span>
                    <span>{type.cost}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Host an Event CTA */}
      <section className="py-16 lg:py-24 bg-plum">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-md text-cream mb-4">Host an Event for Cues for Cancer</h2>
          <p className="text-cream/80 mb-8">
            Want to organize a fundraiser or community event to support our mission? We'd love to partner with you!
          </p>
          <Link
            to="/get-involved/host-event"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-charcoal font-medium rounded-full hover:bg-amber-light transition-all"
          >
            Learn About Hosting
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
