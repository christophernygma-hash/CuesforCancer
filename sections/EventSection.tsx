import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EventSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content reveal
      gsap.from('.event-content', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      });

      // Image reveal with mask
      gsap.from(imageRef.current, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });

      // Date scale animation
      gsap.from('.event-date', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Spotlight cursor effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="event"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-plum z-50 spotlight-container overflow-hidden"
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          {/* Content */}
          <div className="event-content">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber mb-4 block">
              Upcoming Event
            </span>
            
            <h2 className="heading-lg text-cream mb-6">
              Admirals Fight Cancer
            </h2>
            
            <div className="event-date inline-block bg-amber text-charcoal px-6 py-3 rounded-full mb-8">
              <span className="font-display text-2xl">November 8, 2025</span>
            </div>
            
            <div className="flex items-center gap-2 text-cream/70 mb-6">
              <MapPin className="w-5 h-5" />
              <span className="body-default">Norfolk Scope Arena</span>
            </div>
            
            <p className="body-lg text-cream/80 mb-10 max-w-lg">
              Join Cues for Cancer and the Norfolk Admirals for a night of hockey, 
              hope, and community. A portion of proceeds supports our programs.
            </p>
            
            <a
              href="https://www.gofevo.com/event/CuesforCancer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Tickets
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            style={{ clipPath: 'inset(0 0% 0 0)' }}
          >
            <img
              src="/images/event-arena.jpg"
              alt="Norfolk Scope Arena"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/60 to-transparent" />
            
            {/* Date overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-plum" />
                <div>
                  <span className="block font-sans font-medium text-charcoal text-sm">Saturday, November 8, 2025</span>
                  <span className="block font-mono text-xs text-charcoal-light">Doors open at 6:05 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
