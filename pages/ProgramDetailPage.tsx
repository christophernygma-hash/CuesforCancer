import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ProgramDetailPage() {
  const { slug } = useParams();
  
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link to="/programs" className="text-cream/60 hover:text-amber transition-colors text-sm flex items-center gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Programs
          </Link>
          <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">
            Program Detail
          </h1>
          <p className="text-cream/80">
            Coming soon: {slug}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-charcoal-light mb-8">
            This program page is under development. Check back soon for more details about this program.
          </p>
          <Link to="/programs" className="btn-primary">
            View All Programs
          </Link>
        </div>
      </section>
    </div>
  );
}
