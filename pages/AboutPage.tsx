import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Mountain, 
  Heart, 
  ArrowRight,
  Award,
  Users,
  Star
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  'Creativity as Healing',
  'Authentic Community',
  'LGBTQIA+ Inclusion',
  'Dignity & Empowerment',
  'Accessibility for All',
  'Artistic Excellence'
];

const differentiators = [
  {
    title: 'Arts-First, Always',
    description: "We're a performing arts organization that happens to serve people affected by cancer—not the other way around. Your artistic identity matters.",
    image: '/images/mission-hands.jpg'
  },
  {
    title: 'Authentically Inclusive',
    description: 'Founded on principles of LGBTQIA+ inclusion, we create safe spaces where all identities are celebrated and supported.',
    image: '/images/story-portrait-1.jpg'
  },
  {
    title: 'Virginia Theater Family',
    description: "Deeply rooted in Virginia's vibrant performing arts community, we understand the unique challenges and beauty of our regional theater landscape.",
    image: '/images/event-arena.jpg'
  },
  {
    title: 'Transformation Through Creativity',
    description: 'We believe in the healing power of creative expression—not as distraction, but as profound pathway to wholeness.',
    image: '/images/hero-bg.jpg'
  }
];

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Executive Director',
    bio: 'Sarah founded Cues for Cancer in 2020 after her own experience with breast cancer. A former Broadway performer, she brings 15 years of theater experience and a passion for healing through the arts.',
    image: '/images/story-portrait-1.jpg'
  },
  {
    name: 'David Chen',
    role: 'Program Director',
    bio: 'David oversees all program development and implementation. With an MFA in Theater and certification in drama therapy, he designs workshops that truly transform lives.',
    image: '/images/story-portrait-2.jpg'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Community Coordinator',
    bio: 'Maria connects participants with resources and builds partnerships throughout the Virginia arts community. Her warmth makes everyone feel welcome.',
    image: '/images/story-portrait-1.jpg'
  }
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-section', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top 80%',
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
            src="/images/hero-bg.jpg"
            alt="Theater background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>About</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            About Cues for Cancer
          </h1>
          <p className="text-xl text-cream/80">
            Where art meets healing, and community finds hope
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label mb-4 block">Our Story</span>
          <h2 className="heading-lg text-charcoal mb-8">How It All Began</h2>
          <div className="space-y-6 text-lg text-charcoal-light leading-relaxed">
            <p>
              Cues for Cancer was born from a simple but powerful realization: performing artists facing cancer need support that honors their creative identity. In 2020, our founder Sarah Mitchell was diagnosed with breast cancer while working as a stage actress in Richmond, Virginia.
            </p>
            <p>
              "I found plenty of cancer support groups," Sarah recalls, "but none of them understood what it meant to be a performer. They didn't get why losing my hair felt like losing a part of my craft, or why fatigue was so devastating to my ability to work. I needed support from people who spoke my language—the language of theater."
            </p>
            <p>
              That need sparked an idea. What if there was an organization that combined the healing power of creative expression with the unique understanding of the performing arts community? What if actors, musicians, dancers, and theater professionals could support each other through their cancer journeys while continuing to create art?
            </p>
            <p>
              From that seed, Cues for Cancer grew. We started with a single workshop in a borrowed rehearsal space. Today, we've served hundreds of performing artists across Virginia, offering everything from creative expression workshops to support groups to performance opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="about-section py-24 lg:py-32 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 border border-plum/10">
              <div className="w-14 h-14 bg-amber/20 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-plum" />
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-4">Our Mission</h3>
              <p className="text-charcoal-light">
                To support Virginia's performing arts community through cancer with creative healing programs, resources, and genuine connection.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-plum/10">
              <div className="w-14 h-14 bg-amber/20 rounded-2xl flex items-center justify-center mb-6">
                <Mountain className="w-7 h-7 text-plum" />
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-4">Our Vision</h3>
              <p className="text-charcoal-light">
                A world where every performing artist affected by cancer has access to healing through creative expression and supportive community.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-3xl p-8 border border-plum/10">
              <div className="w-14 h-14 bg-amber/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-plum" />
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-4">Our Values</h3>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-2 text-charcoal-light">
                    <span className="w-1.5 h-1.5 bg-amber rounded-full"></span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="about-section py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">What Makes Us Unique</span>
            <h2 className="heading-lg text-charcoal">The Cues for Cancer Difference</h2>
          </div>

          <div className="space-y-16">
            {differentiators.map((item, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[350px] rounded-3xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-display text-3xl text-charcoal mb-4">{item.title}</h3>
                  <p className="text-lg text-charcoal-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="about-section py-24 lg:py-32 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Our Team</span>
            <h2 className="heading-lg text-charcoal mb-4">Meet the People Behind the Curtain</h2>
            <p className="text-charcoal-light">The passionate individuals making our mission possible</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden border border-plum/10">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-charcoal mb-1">{member.name}</h3>
                  <p className="text-amber font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-charcoal-light text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="about-section py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label mb-4 block">Financial Transparency</span>
          <h2 className="heading-lg text-charcoal mb-6">Building Trust Through Openness</h2>
          <p className="text-lg text-charcoal-light mb-8">
            We are committed to using your donations responsibly and transparently. Every dollar goes toward supporting our programs and the artists we serve.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-plum rounded-2xl p-6 text-cream">
              <span className="block font-display text-4xl mb-2">85%</span>
              <span className="text-sm text-cream/80">Programs & Services</span>
            </div>
            <div className="bg-amber rounded-2xl p-6 text-charcoal">
              <span className="block font-display text-4xl mb-2">10%</span>
              <span className="text-sm text-charcoal/70">Fundraising</span>
            </div>
            <div className="bg-cream-dark rounded-2xl p-6 text-charcoal">
              <span className="block font-display text-4xl mb-2">5%</span>
              <span className="text-sm text-charcoal/70">Administration</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about/annual-report" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-plum text-plum rounded-full hover:bg-plum hover:text-cream transition-colors">
              <Award className="w-5 h-5" />
              Annual Reports
            </Link>
            <Link to="/about/990-forms" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-plum text-plum rounded-full hover:bg-plum hover:text-cream transition-colors">
              <Star className="w-5 h-5" />
              Form 990
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-section py-24 lg:py-32 bg-plum">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-lg text-cream mb-8">Ready to Get Involved?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/programs" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-charcoal font-medium rounded-full hover:bg-amber-light transition-all"
            >
              Join Our Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/get-involved/volunteer" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cream text-cream font-medium rounded-full hover:bg-cream hover:text-plum transition-all"
            >
              <Users className="w-5 h-5" />
              Volunteer With Us
            </Link>
            <Link 
              to="/donate" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cream text-cream font-medium rounded-full hover:bg-cream hover:text-plum transition-all"
            >
              <Heart className="w-5 h-5" />
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
