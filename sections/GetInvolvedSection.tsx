import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, HandHeart, Building2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const actions = [
  {
    icon: Heart,
    title: 'Donate',
    description: 'Support our programs with a tax-deductible gift. Every contribution helps us provide workshops, craft supplies, and community events.',
    cta: 'Give Now',
    href: '#donate',
    color: 'bg-plum'
  },
  {
    icon: HandHeart,
    title: 'Volunteer',
    description: 'Share your time and talents with our community. From workshop facilitators to event helpers, there are many ways to contribute.',
    cta: 'Join Us',
    href: '#contact',
    color: 'bg-amber'
  },
  {
    icon: Building2,
    title: 'Partner',
    description: 'Bring Cues for Cancer to your organization. We collaborate with theatres, healthcare providers, and community groups.',
    cta: 'Connect',
    href: '#contact',
    color: 'bg-rose-soft'
  }
];

export default function GetInvolvedSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.get-involved-header', {
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

      // Cards stagger with lift effect
      gsap.from('.action-card', {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: '.actions-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="get-involved"
      className="relative w-full bg-cream py-24 lg:py-32 z-60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="get-involved-header text-center mb-16 lg:mb-20">
          <h2 className="heading-lg text-charcoal mb-4">Take Your Cue</h2>
          <p className="body-lg text-charcoal-light max-w-2xl mx-auto">
            There are many ways to join the performance. Whether you give your time, 
            talents, or resources, you become part of our community.
          </p>
        </div>

        {/* Actions Grid */}
        <div className="actions-grid grid md:grid-cols-3 gap-6 lg:gap-8">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const isLight = action.color === 'bg-amber' || action.color === 'bg-rose-soft';
            
            return (
              <div
                key={index}
                className={`action-card ${action.color} rounded-3xl p-8 lg:p-10 card-hover group`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  isLight ? 'bg-charcoal/10' : 'bg-cream/20'
                }`}>
                  <Icon className={`w-7 h-7 ${isLight ? 'text-charcoal' : 'text-cream'}`} />
                </div>
                
                <h3 className={`heading-md mb-4 ${isLight ? 'text-charcoal' : 'text-cream'}`}>
                  {action.title}
                </h3>
                
                <p className={`body-default mb-8 ${isLight ? 'text-charcoal/70' : 'text-cream/80'}`}>
                  {action.description}
                </p>
                
                <button
                  onClick={() => {
                    const element = document.querySelector(action.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`inline-flex items-center gap-2 font-sans font-medium text-sm transition-all duration-300 group-hover:gap-3 ${
                    isLight ? 'text-charcoal' : 'text-cream'
                  }`}
                >
                  {action.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
