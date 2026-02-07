import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    quote: "The workshop gave me back my voice—literally and figuratively.",
    name: "Sarah M.",
    role: "Survivor",
    image: "/images/story-portrait-1.jpg",
    featured: true
  },
  {
    quote: "Crafting beanies helped me feel useful again during my wife's treatment.",
    name: "Michael T.",
    role: "Caregiver",
    image: "/images/story-portrait-2.jpg",
    featured: false
  },
  {
    quote: "I found a family I didn't know I needed.",
    name: "Jennifer R.",
    role: "Survivor",
    image: null,
    featured: false
  }
];

export default function StoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Featured story reveal
      gsap.from(featuredRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      // Secondary cards stagger
      gsap.from('.story-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stories-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Image parallax
      gsap.fromTo('.featured-image', 
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: featuredRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredStory = stories.find(s => s.featured);
  const otherStories = stories.filter(s => !s.featured);

  return (
    <section
      ref={sectionRef}
      id="stories"
      className="relative min-h-screen w-full bg-cream-dark py-24 lg:py-32 z-40"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label mb-4 block">Stories</span>
          <h2 className="heading-lg text-charcoal">Voices from the Stage</h2>
        </div>

        {/* Featured Story */}
        {featuredStory && (
          <div
            ref={featuredRef}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 items-center"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={featuredStory.image || '/images/story-portrait-1.jpg'}
                alt={featuredStory.name}
                className="featured-image absolute inset-0 w-full h-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/40 to-transparent" />
            </div>
            
            <div className="lg:pl-8">
              <Quote className="w-12 h-12 text-amber mb-6" />
              <blockquote className="heading-md text-charcoal mb-8 italic">
                "{featuredStory.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-plum flex items-center justify-center">
                  <span className="text-cream font-display text-lg">{featuredStory.name[0]}</span>
                </div>
                <div>
                  <span className="block font-sans font-medium text-charcoal">{featuredStory.name}</span>
                  <span className="block font-mono text-xs uppercase tracking-wider text-charcoal-light">{featuredStory.role}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Stories Grid */}
        <div className="stories-grid grid md:grid-cols-2 gap-6">
          {otherStories.map((story, index) => (
            <div
              key={index}
              className="story-card bg-cream rounded-2xl p-8 lg:p-10"
            >
              <Quote className="w-8 h-8 text-amber mb-4" />
              <blockquote className="body-lg text-charcoal mb-6 italic">
                "{story.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                {story.image ? (
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-plum flex items-center justify-center">
                    <span className="text-cream font-display text-sm">{story.name[0]}</span>
                  </div>
                )}
                <div>
                  <span className="block font-sans font-medium text-charcoal text-sm">{story.name}</span>
                  <span className="block font-mono text-xs uppercase tracking-wider text-charcoal-light">{story.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
