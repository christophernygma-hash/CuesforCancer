import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsRevealed(true)
      });

      // Curtain reveal animation
      tl.to(curtainLeftRef.current, {
        xPercent: -100,
        duration: 1.4,
        ease: 'power3.inOut'
      })
      .to(curtainRightRef.current, {
        xPercent: 100,
        duration: 1.4,
        ease: 'power3.inOut'
      }, '<')
      .from('.hero-headline', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.hero-subhead', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.6')
      .from('.hero-cta', {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.4')
      .from('.hero-scroll', {
        opacity: 0,
        duration: 0.5
      }, '-=0.2');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToMission = () => {
    const missionSection = document.getElementById('mission');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-plum z-10"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Theatrical background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum/60 via-plum/40 to-plum/80" />
      </div>

      {/* Curtain overlays */}
      <div
        ref={curtainLeftRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-charcoal z-50 will-change-transform"
      />
      <div
        ref={curtainRightRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-charcoal z-50 will-change-transform"
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <span className="hero-headline font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6">
          Welcome to Cues for Cancer
        </span>
        
        <h1 className="hero-headline heading-xl text-cream max-w-4xl mb-6">
          Where Theatre Meets Healing
        </h1>
        
        <p className="hero-subhead body-lg text-cream/80 max-w-2xl mb-10">
          Supporting cancer warriors and survivors through the transformative power of the arts.
        </p>
        
        <button
          onClick={scrollToMission}
          className="hero-cta btn-primary"
        >
          Take Your Cue
        </button>

        {/* Scroll indicator */}
        {isRevealed && (
          <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60">
            <span className="font-mono text-xs uppercase tracking-wider">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        )}
      </div>
    </section>
  );
}
