import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.newsletter-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      onMouseMove={handleMouseMove}
      className="relative w-full bg-plum py-24 lg:py-32 z-70 spotlight-container"
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      } as React.CSSProperties}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="newsletter-content text-center">
          <h2 className="heading-lg text-cream mb-4">Stay in the Spotlight</h2>
          <p className="body-lg text-cream/80 mb-10">
            Subscribe for updates on workshops, events, and stories from our community.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isSubmitted}
                className="w-full px-6 py-4 bg-cream/10 border-2 border-cream/20 rounded-full text-cream placeholder:text-cream/50 focus:outline-none focus:border-amber transition-colors duration-300 disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted || !email}
              className="btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </button>
          </form>

          <p className="font-mono text-xs text-cream/50 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
