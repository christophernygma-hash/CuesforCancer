import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Share2 } from 'lucide-react';

const blogPosts = [
  {
    slug: 'healing-power-of-theatre',
    title: 'The Healing Power of Theatre: One Survivor\'s Story',
    excerpt: 'How participating in our workshop program helped Sarah find her voice again after treatment.',
    author: 'Sarah Mitchell',
    date: 'January 15, 2025',
    category: 'Stories',
    readTime: '8 min read',
    image: '/images/story-portrait-1.jpg'
  },
  {
    slug: 'crafting-500-beanies',
    title: 'Behind the Scenes: Crafting 500 Beanies',
    excerpt: 'Meet the volunteers who have dedicated countless hours to creating comfort for cancer patients.',
    author: 'Cues for Cancer Team',
    date: 'January 8, 2025',
    category: 'Programs',
    readTime: '5 min read',
    image: '/images/mission-hands.jpg'
  },
  {
    slug: 'admirals-fight-cancer',
    title: 'Upcoming: Admirals Fight Cancer Night',
    excerpt: 'Join us November 8th for a special evening of hockey, hope, and community support.',
    author: 'Events Team',
    date: 'December 20, 2024',
    category: 'Events',
    readTime: '3 min read',
    image: '/images/event-arena.jpg'
  }
];

export default function BlogPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Page Hero */}
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Blog & Updates
          </h1>
          <p className="text-xl text-cream/80">
            Stories, news, and insights from our community
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-plum text-cream text-xs font-mono uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
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
                  <h3 className="font-display text-xl text-charcoal mb-3">
                    {post.title}
                  </h3>
                  <p className="text-charcoal-light text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-plum font-medium text-sm hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button className="p-2 text-charcoal-light hover:text-plum transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
