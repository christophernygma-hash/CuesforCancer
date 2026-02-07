import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Drama, Heart, Spotlight, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    icon: Drama,
    title: 'Theatre Workshops',
    description: 'Therapeutic drama sessions designed to help patients and survivors express emotions, build confidence, and find joy through performance.',
    color: 'bg-plum'
  },
  {
    icon: Heart,
    title: 'Crafting Comfort',
    description: 'Handmade with love. Our community creates soft, warm beanies for those undergoing treatment—tangible symbols of care.',
    color: 'bg-rose-soft'
  },
  {
    icon: Spotlight,
    title: 'Community Productions',
    description: 'Stories that need to be told. Performances created by and for our community, sharing journeys of courage and hope.',
    color: 'bg-amber'
  },
  {
    icon: Users,
    title: 'Support Circles',
    description: 'Safe spaces for warriors, survivors, and caregivers to connect, share, and find understanding.',
    color: 'bg-cream-dark'
  }
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.programs-header', {
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

      gsap.from('.program-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.programs-grid',
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
      id="programs"
      className="relative w-full bg-cream py-24 lg:py-32 z-30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="programs-header mb-12 lg:mb-16">
          <span className="section-label mb-4 block">Programs</span>
          <h2 className="heading-lg text-charcoal">Acts of Healing</h2>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isLight = program.color === 'bg-amber' || program.color === 'bg-cream-dark';
            
            return (
              <div
                key={index}
                className={`program-card ${program.color} rounded-3xl p-8 lg:p-10 card-hover`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  isLight ? 'bg-charcoal/10' : 'bg-cream/20'
                }`}>
                  <Icon className={`w-7 h-7 ${isLight ? 'text-charcoal' : 'text-cream'}`} />
                </div>
                
                <h3 className={`heading-md mb-4 ${isLight ? 'text-charcoal' : 'text-cream'}`}>
                  {program.title}
                </h3>
                
                <p className={`body-default ${isLight ? 'text-charcoal/70' : 'text-cream/80'}`}>
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
