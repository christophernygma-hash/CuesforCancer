import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Users, 
  User, 
  Heart, 
  Spotlight, 
  BookOpen,
  ArrowRight,
  Check,
  Calendar
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    icon: Palette,
    title: 'Creative Expression Workshops',
    description: 'Explore healing through theater, music, visual arts, movement, and writing in supportive group settings.',
    types: 'Theater • Music • Visual Arts • Movement • Writing',
    format: 'Weekly workshops, 6-8 week series',
    link: '/programs/creative-expression'
  },
  {
    icon: Users,
    title: 'Support Groups',
    description: 'Connect with fellow performing artists who understand your journey through regular, facilitated support circles.',
    types: 'Performer-only groups • Caregiver groups • Genre-specific options',
    format: 'Bi-weekly meetings, ongoing',
    link: '/programs/support-groups'
  },
  {
    icon: User,
    title: 'Individual Support',
    description: 'Personalized guidance from experienced artist-navigators who have been through cancer themselves.',
    types: 'Mentorship • Resource navigation • Creative coaching',
    format: 'Flexible scheduling',
    link: '/programs/individual-support'
  },
  {
    icon: Heart,
    title: 'Caregiver Programs',
    description: 'Special programs designed for caregivers of performing artists, including creative workshops and support groups.',
    types: 'Self-care workshops • Support groups • Respite programs',
    format: 'Monthly workshops and ongoing groups',
    link: '/programs/caregivers'
  },
  {
    icon: Spotlight,
    title: 'Performance Opportunities',
    description: 'Share your creative work and celebrate your journey through curated showcase events and performances.',
    types: 'Open mics • Annual gala • Gallery exhibitions',
    format: 'Quarterly events',
    link: '/events'
  },
  {
    icon: BookOpen,
    title: 'Resources & Toolkits',
    description: 'Access downloadable guides, creative prompts, and practical resources for your healing journey.',
    types: 'Creative exercises • Practical guides • Community resources',
    format: 'Always available',
    link: '/resources'
  }
];

const benefits = [
  'All programs are completely free',
  'Led by professional teaching artists',
  'Safe, supportive environment',
  'No artistic experience required',
  'Virtual and in-person options',
  'Open to patients, survivors, and caregivers'
];

const eligible = [
  'Current cancer patients in the performing arts',
  'Cancer survivors from the performing arts community',
  'Caregivers of performing artists affected by cancer',
  'All disciplines welcome: actors, musicians, dancers, directors, designers, crew',
  'All experience levels',
  'Ages 10-70+',
  'All gender identities, with emphasis on LGBTQIA+ inclusion'
];

export default function ProgramsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.program-card', {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.programs-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-cream">
      {/* Page Hero */}
      <section className="relative py-32 lg:py-40 bg-plum">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/mission-hands.jpg"
            alt="Workshop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Programs</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Our Programs
          </h1>
          <p className="text-xl text-cream/80">
            Find your creative pathway to healing
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl text-charcoal-light leading-relaxed mb-8">
            At Cues for Cancer, we believe in the transformative power of creative expression. Our programs are designed specifically for performing arts professionals navigating cancer—whether you're a patient, survivor, or caregiver.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-charcoal">
                <Check className="w-5 h-5 text-amber flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 lg:py-32 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">What We Offer</span>
            <h2 className="heading-lg text-charcoal">Explore Our Programs</h2>
          </div>

          <div className="programs-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-plum transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-charcoal-light mb-4">
                    {program.description}
                  </p>
                  <div className="text-sm text-charcoal/60 mb-2">
                    <span className="font-medium">Types:</span> {program.types}
                  </div>
                  <div className="text-sm text-charcoal/60 mb-6">
                    <span className="font-medium">Format:</span> {program.format}
                  </div>
                  <span className="inline-flex items-center gap-2 text-plum font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Can Participate */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Eligibility</span>
              <h2 className="heading-lg text-charcoal mb-8">Who Can Join</h2>
              
              <div className="space-y-4">
                {eligible.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-plum/10 rounded-2xl">
                <h3 className="font-display text-xl text-charcoal mb-2">Cost</h3>
                <p className="text-charcoal-light">
                  All programs are <span className="text-plum font-medium">completely free</span>. No insurance required. No auditions or applications.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <img
                src="/images/story-portrait-1.jpg"
                alt="Community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Register */}
      <section className="py-24 lg:py-32 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label mb-4 block">Get Started</span>
          <h2 className="heading-lg text-charcoal mb-8">How to Get Started</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { step: '1', title: 'Browse Programs', desc: 'Find the program that speaks to you' },
              { step: '2', title: 'Contact Us', desc: 'Email or call to express interest' },
              { step: '3', title: 'Brief Conversation', desc: 'Quick chat to ensure right fit' },
              { step: '4', title: 'Join In', desc: 'Start your creative healing journey' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 bg-plum rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-2xl text-cream">{item.step}</span>
                </div>
                <h3 className="font-display text-lg text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:programs@cuesforcancer.org" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-plum text-cream font-medium rounded-full hover:bg-plum-dark transition-colors"
            >
              Email Us
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-plum text-plum font-medium rounded-full hover:bg-plum hover:text-cream transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Request Information
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-plum">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-lg text-cream mb-4">Ready to Begin?</h2>
          <p className="text-xl text-cream/80 mb-8">
            Take your cue to start healing through creativity
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-charcoal font-medium rounded-full hover:bg-amber-light transition-all"
          >
            Contact Us to Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
