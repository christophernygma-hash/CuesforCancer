import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    title: 'Admirals Fight Cancer Night',
    date: '2025-11-08',
    time: '6:05 PM',
    location: 'Norfolk Scope Arena',
    type: 'Fundraiser',
    description: 'Join us for a night of hockey, hope, and community.',
    attendees: 150,
    image: '/images/event-arena.jpg'
  },
  {
    title: 'Theatre Workshop: Finding Your Voice',
    date: '2025-02-15',
    time: '2:00 PM',
    location: 'Norfolk Arts Center',
    type: 'Workshop',
    description: 'A therapeutic drama session for survivors and caregivers.',
    attendees: 20,
    image: '/images/mission-hands.jpg'
  },
  {
    title: 'Beanie Crafting Circle',
    date: '2025-02-22',
    time: '10:00 AM',
    location: 'Community Center',
    type: 'Volunteer',
    description: 'Join our volunteers in crafting beanies for patients.',
    attendees: 15,
    image: '/images/story-portrait-1.jpg'
  },
  {
    title: 'Spring Gala: Curtain Call',
    date: '2025-03-15',
    time: '7:00 PM',
    location: 'Harrison Opera House',
    type: 'Gala',
    description: 'Our annual fundraising gala featuring performances and stories.',
    attendees: 200,
    image: '/images/hero-bg.jpg'
  }
];

const eventTypes = ['All', 'Fundraiser', 'Workshop', 'Volunteer', 'Gala'];

export default function EventsCalendarSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' 
    ? events 
    : events.filter(e => e.type === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.events-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('.event-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.events-list',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
      day: date.getDate()
    };
  };

  return (
    <section
      ref={sectionRef}
      id="events-calendar"
      className="relative w-full bg-cream py-24 lg:py-32 z-42"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="events-header flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="section-label mb-4 block">Events Calendar</span>
            <h2 className="heading-lg text-charcoal">Upcoming Events</h2>
          </div>
          
          {/* Filter */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-charcoal-light mr-2" />
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === type
                    ? 'bg-plum text-cream'
                    : 'bg-cream-dark text-charcoal hover:bg-plum/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="events-list space-y-6">
          {filteredEvents.map((event, index) => {
            const { month, day } = formatDate(event.date);
            return (
              <div
                key={index}
                className="event-card bg-white rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center card-hover"
              >
                {/* Date Badge */}
                <div className="flex-shrink-0 w-20 h-20 bg-plum rounded-2xl flex flex-col items-center justify-center text-cream">
                  <span className="font-mono text-xs uppercase">{month}</span>
                  <span className="font-display text-3xl">{day}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-amber/20 text-charcoal text-xs font-mono uppercase px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                    <span className="flex items-center gap-1 text-charcoal-light text-sm">
                      <Users className="w-4 h-4" />
                      {event.attendees} attending
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl text-charcoal mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-charcoal-light mb-3">
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
                  </div>
                </div>

                {/* Action */}
                <button className="flex-shrink-0 btn-primary">
                  Register
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Calendar Export */}
        <div className="mt-12 text-center">
          <p className="text-charcoal-light mb-4">Add our events to your calendar</p>
          <div className="flex justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-charcoal/20 rounded-full text-charcoal hover:border-plum hover:text-plum transition-colors">
              <Calendar className="w-4 h-4" />
              Google Calendar
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-charcoal/20 rounded-full text-charcoal hover:border-plum hover:text-plum transition-colors">
              <Calendar className="w-4 h-4" />
              iCal Export
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
