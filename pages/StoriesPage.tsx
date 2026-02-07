import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Play, 
  FileText, 
  Mic,
  ArrowRight
} from 'lucide-react';

const stories = [
  {
    slug: 'maya-thompson',
    name: 'Maya Thompson',
    headline: 'Finding My Voice Again: A Stage Actress\'s Journey',
    discipline: 'Theater',
    role: 'Survivor',
    cancerType: 'Breast Cancer',
    format: 'written',
    excerpt: 'When I was diagnosed with breast cancer, I thought my performing days were over. The workshops at Cues for Cancer helped me discover a new depth to my artistry.',
    image: '/images/story-portrait-1.jpg',
    readTime: '8 min read'
  },
  {
    slug: 'david-chen',
    name: 'David Chen',
    headline: 'From Diagnosis to the Stage: A Dancer\'s Return',
    discipline: 'Dance',
    role: 'Survivor',
    cancerType: 'Lymphoma',
    format: 'video',
    excerpt: 'Dance was my life. When cancer threatened to take that away, I found a community that understood exactly what I was going through.',
    image: '/images/story-portrait-2.jpg',
    readTime: '12 min video'
  },
  {
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    headline: 'The Healing Power of Music',
    discipline: 'Music',
    role: 'Caregiver',
    cancerType: 'N/A',
    format: 'audio',
    excerpt: 'Supporting my partner through cancer while maintaining my music career felt impossible. The caregiver programs gave me the tools I needed.',
    image: '/images/story-portrait-1.jpg',
    readTime: '15 min audio'
  },
  {
    slug: 'james-wilson',
    name: 'James Wilson',
    headline: 'Behind the Scenes: A Stage Manager\'s Story',
    discipline: 'Technical/Crew',
    role: 'Survivor',
    cancerType: 'Prostate Cancer',
    format: 'written',
    excerpt: 'As a stage manager, I was always behind the scenes. Cancer forced me into the spotlight, and Cues for Cancer helped me find my way.',
    image: '/images/story-portrait-2.jpg',
    readTime: '6 min read'
  },
  {
    slug: 'lisa-rodriguez',
    name: 'Lisa Rodriguez',
    headline: 'Painting Through Pain: A Visual Artist\'s Journey',
    discipline: 'Visual Arts',
    role: 'Survivor',
    cancerType: 'Ovarian Cancer',
    format: 'written',
    excerpt: 'Art became my therapy, my voice, and my healing. The creative expression workshops gave me the space to process my experience.',
    image: '/images/story-portrait-1.jpg',
    readTime: '10 min read'
  },
  {
    slug: 'michael-torres',
    name: 'Michael Torres',
    headline: 'A Musician\'s Comeback Story',
    discipline: 'Music',
    role: 'Survivor',
    cancerType: 'Leukemia',
    format: 'video',
    excerpt: 'After my bone marrow transplant, I didn\'t know if I\'d ever play again. Today, I\'m performing with more passion than ever.',
    image: '/images/story-portrait-2.jpg',
    readTime: '18 min video'
  }
];

const disciplines = ['All', 'Theater', 'Music', 'Dance', 'Visual Arts', 'Technical/Crew'];
const roles = ['All', 'Patient', 'Survivor', 'Caregiver'];
const formats = ['All', 'Written', 'Video', 'Audio'];

export default function StoriesPage() {
  const [disciplineFilter, setDisciplineFilter] = useState('All');
  const [roleFilter, setRoleFilter] = useState('All');
  const [formatFilter, setFormatFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = stories.filter(story => {
    const matchesDiscipline = disciplineFilter === 'All' || story.discipline === disciplineFilter;
    const matchesRole = roleFilter === 'All' || story.role === roleFilter;
    const matchesFormat = formatFilter === 'All' || story.format === formatFilter.toLowerCase();
    const matchesSearch = searchQuery === '' || 
      story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.headline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiscipline && matchesRole && matchesFormat && matchesSearch;
  });

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'video': return <Play className="w-4 h-4" />;
      case 'audio': return <Mic className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Page Hero */}
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Stories</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Stories from Our Community
          </h1>
          <p className="text-xl text-cream/80">
            Journeys of healing, creativity, and hope
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-charcoal-light leading-relaxed">
            These are the stories of performing artists who found healing through creativity. Each journey is unique, but they share common threads: resilience, community, and the transformative power of the arts.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-light" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stories..."
                className="w-full pl-12 pr-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-3">
              <select
                value={disciplineFilter}
                onChange={(e) => setDisciplineFilter(e.target.value)}
                className="px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum bg-white"
              >
                {disciplines.map(d => <option key={d} value={d}>{d === 'All' ? 'All Disciplines' : d}</option>)}
              </select>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum bg-white"
              >
                {roles.map(r => <option key={r} value={r}>{r === 'All' ? 'All Roles' : r}</option>)}
              </select>
              <select
                value={formatFilter}
                onChange={(e) => setFormatFilter(e.target.value)}
                className="px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum bg-white"
              >
                {formats.map(f => <option key={f} value={f}>{f === 'All' ? 'All Formats' : f}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Link
                key={index}
                to={`/stories/${story.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-plum text-cream text-xs font-mono uppercase px-3 py-1 rounded-full">
                      {story.discipline}
                    </span>
                    <span className="bg-amber text-charcoal text-xs font-mono uppercase px-3 py-1 rounded-full flex items-center gap-1">
                      {getFormatIcon(story.format)}
                      {story.format}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-charcoal-light mb-3">
                    <span>{story.role}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-plum transition-colors line-clamp-2">
                    {story.headline}
                  </h3>
                  <p className="text-charcoal-light text-sm line-clamp-3 mb-4">
                    {story.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-plum font-medium text-sm group-hover:gap-3 transition-all">
                    Read Story
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-charcoal-light text-lg">No stories match your filters.</p>
              <button
                onClick={() => {
                  setDisciplineFilter('All');
                  setRoleFilter('All');
                  setFormatFilter('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-plum font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 lg:py-24 bg-plum">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-md text-cream mb-4">Share Your Story</h2>
          <p className="text-cream/80 mb-8">
            Your journey could inspire and support others in our community. We'd love to hear from you.
          </p>
          <Link
            to="/stories/submit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-charcoal font-medium rounded-full hover:bg-amber-light transition-all"
          >
            Tell Us Your Story
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
