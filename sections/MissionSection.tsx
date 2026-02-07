import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on image
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Content fade in
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Stats stagger animation
      gsap.from('.stat-item', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stats-grid',
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
      id="mission"
      className="relative min-h-screen w-full bg-cream py-24 lg:py-32 z-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative h-[500px] lg:h-[700px] overflow-hidden rounded-2xl">
            <div
              ref={imageRef}
              className="absolute inset-0 will-change-transform"
              style={{ height: '130%', top: '-15%' }}
            >
              <img
                src="/images/mission-hands.jpg"
                alt="Hands holding a knitted beanie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-plum/20 to-transparent" />
          </div>

          {/* Content Column */}
          <div ref={contentRef}>
            <span className="section-label mb-4 block">Our Mission</span>
            
            <h2 className="heading-lg text-charcoal mb-6">
              Inspiring hope—on stage and off
            </h2>
            
            <p className="body-lg text-charcoal-light mb-8">
              Cues for Cancer is a 501(c)(3) nonprofit blending theatre and cancer support. 
              We believe creativity is a vital part of healing. Through workshops, community 
              productions, and handcrafted care, we celebrate strength, survival, and the arts.
            </p>
            
            <p className="body-default text-charcoal-light mb-12">
              Based in Norfolk, Virginia, we serve the Hampton Roads performing arts community 
              with programs designed to support patients, survivors, and caregivers throughout 
              their cancer journey.
            </p>

            {/* Stats Grid */}
            <div className="stats-grid grid grid-cols-3 gap-6 pt-8 border-t border-charcoal/10">
              <div className="stat-item text-center">
                <span className="block font-display text-4xl md:text-5xl text-plum mb-2">500+</span>
                <span className="font-mono text-xs uppercase tracking-wider text-charcoal-light">Beanies Crafted</span>
              </div>
              <div className="stat-item text-center">
                <span className="block font-display text-4xl md:text-5xl text-plum mb-2">50+</span>
                <span className="font-mono text-xs uppercase tracking-wider text-charcoal-light">Workshops</span>
              </div>
              <div className="stat-item text-center">
                <span className="block font-display text-4xl md:text-5xl text-plum mb-2">1</span>
                <span className="font-mono text-xs uppercase tracking-wider text-charcoal-light">Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
