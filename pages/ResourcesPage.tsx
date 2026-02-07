import { Link } from 'react-router-dom';
import { BookOpen, FileText, Heart, Users, ArrowRight } from 'lucide-react';

const resources = [
  {
    title: 'Newly Diagnosed Toolkit',
    description: 'A comprehensive guide for performing artists facing a new cancer diagnosis.',
    icon: BookOpen,
    link: '/resources/newly-diagnosed'
  },
  {
    title: 'Caregiver Resources',
    description: 'Support and guidance for those caring for performing artists with cancer.',
    icon: Heart,
    link: '/resources/caregivers'
  },
  {
    title: 'Creative Prompts',
    description: 'Downloadable exercises for healing through creative expression.',
    icon: FileText,
    link: '/resources/creative-prompts'
  },
  {
    title: 'Community Directory',
    description: 'Connect with local resources and support organizations.',
    icon: Users,
    link: '/resources/directory'
  }
];

export default function ResourcesPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Resources</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Resources & Toolkits
          </h1>
          <p className="text-xl text-cream/80">
            Practical tools and guides for your journey
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link
                  key={index}
                  to={resource.link}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-amber/20 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-plum" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-3">{resource.title}</h3>
                  <p className="text-charcoal-light mb-4">{resource.description}</p>
                  <span className="inline-flex items-center gap-2 text-plum font-medium">
                    Access Resource
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
