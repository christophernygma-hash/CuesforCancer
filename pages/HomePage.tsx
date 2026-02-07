import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Users, 
  Palette, 
  MapPin, 
  Clock,
  ChevronRight,
  Star
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    icon: Palette,
    title: 'Creative Expression',
    description: 'Healing through theater, music, visual arts, movement, and writing',
    link: '/programs/creative-expression'
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with fellow performing artists navigating cancer',
    link: '/programs/support-groups'
  },
  {
    icon: Heart,
    title: 'Resources',
    description: 'Guides, toolkits, and practical support for your journey',
    link: '/resources'
  }
];

const upcomingEvents = [
  {
    title: 'Admirals Fight Cancer Night',
    date: 'NOV 8',
    time: '6:05 PM',
    location: 'Norfolk Scope Arena',
    type: 'Fundraiser',
    image: '/images/event-arena.jpg',
    link: '/events/admirals-fight-cancer'
  },
  {
    title: 'Spring Healing Retreat',
    date: 'MAR 15',
    time: '10:00 AM',
    location: 'Richmond, VA',
    type: 'Workshop',
    image: '/images/mission-hands.jpg',
    link: '/events/spring-healing-retreat'
  },
  {
    title: 'Community Showcase',
    date: 'APR 20',
    time: '7:00 PM',
    location: 'Harrison Opera House',
    type: 'Performance',
    image: '/images/hero-bg.jpg',
    link: '/events/community-showcase'
  }
];

const stats = [
  { number: '500+', label: 'Beanies Crafted' },
  { number: '50+', label: 'Workshops' },
  { number: '1', label: 'Community' }
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations - only for initial load
      gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 15,
        duration: 0.5,
        delay: 0.6,
        ease: 'power2.out'
      });

      gsap.from('.hero-links', {
        opacity: 0,
        y: 10,
        duration: 0.5,
        delay: 0.7,
        ease: 'power2.out'
      });

      // Stats counter animation
      gsap.fromTo('.stat-item', 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Program cards - ensure visibility
      gsap.fromTo('.program-card', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.programs-grid',
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Event cards - ensure visibility
      gsap.fromTo('.event-card', 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.events-grid',
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Theatrical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-plum/70 via-plum/50 to-plum/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/images/logo-transparent.png" 
              alt="Cues for Cancer" 
              className="h-24 md:h-32 mx-auto drop-shadow-2xl"
            />
          </div>

          <h1 className="hero-title font-display text-4xl md:text-6xl lg:text-7xl text-cream mb-6 leading-tight">
            Healing Through the Arts
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-cream/90 mb-4 max-w-3xl mx-auto">
            Where Performers Find Their Cue
          </p>
          
          <p className="hero-subtitle text-lg md:text-xl text-cream/80 mb-10 max-w-2xl mx-auto">
            Supporting Virginia's performing arts community through cancer with creative expression, connection, and hope
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/programs" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-charcoal font-medium rounded-full hover:bg-amber-light transition-all hover:scale-105"
            >
              Find Your Program
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/donate" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cream text-cream font-medium rounded-full hover:bg-cream hover:text-plum transition-all"
            >
              Support Our Work
            </Link>
          </div>

          {/* Quick Access Links */}
          <div className="hero-links flex flex-wrap justify-center gap-x-8 gap-y-3 text-cream/80 mt-8">
            <Link to="/resources" className="hover:text-amber transition-colors flex items-center gap-2 text-sm md:text-base">
              <Star className="w-4 h-4 flex-shrink-0" />
              <span>Newly Diagnosed?</span>
            </Link>
            <Link to="/resources" className="hover:text-amber transition-colors flex items-center gap-2 text-sm md:text-base">
              <Heart className="w-4 h-4 flex-shrink-0" />
              <span>I'm a Caregiver</span>
            </Link>
            <Link to="/volunteer/login" className="hover:text-amber transition-colors flex items-center gap-2 text-sm md:text-base">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span>I Want to Volunteer</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label mb-6 block">Our Mission</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-plum mb-8 leading-tight">
            Cues for Cancer brings healing to Virginia's performing arts community through the transformative power of creative expression.
          </h2>
          <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
            We provide programs, resources, and support for actors, musicians, dancers, and theater professionals navigating cancer—because <em className="text-plum font-medium">your art matters</em>, <em className="text-plum font-medium">your story matters</em>, and <em className="text-plum font-medium">you are not alone</em>.
          </p>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section ref={statsRef} className="py-16 lg:py-24 bg-plum">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <span className="block font-display text-5xl md:text-6xl lg:text-7xl text-amber mb-2">
                  {stat.number}
                </span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-cream/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
              <img
                src="/images/story-portrait-1.jpg"
                alt="Maya's Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/60 to-transparent" />
            </div>
            
            <div>
              <span className="section-label mb-4 block">From the Stage</span>
              <h2 className="heading-lg text-charcoal mb-4">Maya's Story</h2>
              <p className="text-amber font-medium mb-4">Stage Actress & Survivor</p>
              <p className="body-lg text-charcoal-light mb-6">
                "When I was diagnosed with breast cancer, I thought my performing days were over. 
                The workshops at Cues for Cancer didn't just help me heal—they helped me discover 
                a new depth to my artistry. I found my voice again, stronger than ever."
              </p>
              <p className="text-charcoal-light mb-8">
                Maya joined our Creative Expression Workshop in 2023 and has since returned to the stage 
                with a new one-woman show about her cancer journey.
              </p>
              <Link 
                to="/stories/maya-thompson" 
                className="inline-flex items-center gap-2 text-plum font-medium hover:gap-3 transition-all"
              >
                Read Maya's Full Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="py-24 lg:py-32 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Our Programs</span>
            <h2 className="heading-lg text-charcoal mb-4">Creative Pathways to Healing</h2>
            <p className="body-lg text-charcoal-light max-w-2xl mx-auto">
              All programs are completely free and designed specifically for performing artists affected by cancer.
            </p>
          </div>

          <div className="programs-grid grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Link 
                  key={index} 
                  to={program.link}
                  className="program-card group bg-white rounded-3xl p-8 border border-plum/10 hover:border-plum/30 hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-amber/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber/30 transition-colors">
                    <Icon className="w-7 h-7 text-plum" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-plum transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-charcoal-light mb-6">
                    {program.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-plum font-medium group-hover:gap-3 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="section-label mb-4 block">Upcoming Events</span>
              <h2 className="heading-lg text-charcoal">Join Us On Stage and Off</h2>
            </div>
            <Link 
              to="/events" 
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-plum font-medium hover:gap-3 transition-all"
            >
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="events-grid grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Link 
                key={index} 
                to={event.link}
                className="event-card group bg-white rounded-3xl overflow-hidden border border-charcoal/10 hover:border-plum/30 hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-plum text-cream px-3 py-1 rounded-full text-xs font-mono uppercase">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-center">
                      <span className="block text-xs font-mono uppercase text-charcoal-light">{event.date.split(' ')[0]}</span>
                      <span className="block font-display text-2xl text-plum">{event.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-charcoal group-hover:text-plum transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-charcoal-light">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-plum/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-lg text-charcoal mb-4">Be Part of the Healing</h2>
          <p className="body-lg text-charcoal-light mb-10">
            Your support brings the transformative power of the arts to those who need it most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/programs" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-charcoal font-medium rounded-full hover:bg-amber-light transition-all hover:scale-105"
            >
              Start Your Creative Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/donate" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-plum text-plum font-medium rounded-full hover:bg-plum hover:text-cream transition-all"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="heading-md text-charcoal mb-4">Stay Connected</h2>
          <p className="text-charcoal-light mb-8">
            Get stories, updates, and resources delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-2 border-charcoal/10 rounded-full focus:outline-none focus:border-plum transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-plum text-cream font-medium rounded-full hover:bg-plum-dark transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="text-charcoal-light text-sm mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
