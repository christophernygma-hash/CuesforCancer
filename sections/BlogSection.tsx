import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User, ArrowRight, Share2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: 'The Healing Power of Theatre: One Survivor\'s Story',
    excerpt: 'How participating in our workshop program helped Sarah find her voice again after treatment.',
    author: 'Sarah Mitchell',
    date: 'January 15, 2025',
    category: 'Stories',
    image: '/images/story-portrait-1.jpg'
  },
  {
    title: 'Behind the Scenes: Crafting 500 Beanies',
    excerpt: 'Meet the volunteers who have dedicated countless hours to creating comfort for cancer patients.',
    author: 'Cues for Cancer Team',
    date: 'January 8, 2025',
    category: 'Programs',
    image: '/images/mission-hands.jpg'
  },
  {
    title: 'Upcoming: Admirals Fight Cancer Night',
    excerpt: 'Join us November 8th for a special evening of hockey, hope, and community support.',
    author: 'Events Team',
    date: 'December 20, 2024',
    category: 'Events',
    image: '/images/event-arena.jpg'
  }
];

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-header', {
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

      gsap.from('.blog-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.blog-grid',
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
      id="blog"
      className="relative w-full bg-cream-dark py-24 lg:py-32 z-45"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="blog-header flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16">
          <div>
            <span className="section-label mb-4 block">Blog</span>
            <h2 className="heading-lg text-charcoal">Stories & Updates</h2>
          </div>
          <button className="mt-4 md:mt-0 inline-flex items-center gap-2 text-plum font-medium hover:gap-3 transition-all">
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid grid md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="blog-card bg-white rounded-3xl overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-plum text-cream text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-4 text-charcoal-light text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                
                <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-plum transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-charcoal-light text-sm mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 text-plum font-medium text-sm hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-2 rounded-full hover:bg-cream-dark transition-colors"
                    aria-label="Share post"
                  >
                    <Share2 className="w-4 h-4 text-charcoal-light" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
