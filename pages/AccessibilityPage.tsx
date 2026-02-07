import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const accessibilityFeatures = [
  'WCAG 2.1 AA compliant design',
  'Keyboard navigation support',
  'Screen reader compatibility',
  'Text resizing options',
  'High contrast mode',
  'Alt text for all images',
  'Video captions and transcripts',
  'Skip navigation links',
  'Focus indicators',
  'Large touch targets (44x44px minimum)'
];

export default function AccessibilityPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Accessibility</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Accessibility Statement
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lg text-charcoal-light mb-8 leading-relaxed">
            Cues for Cancer is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="font-display text-2xl text-charcoal mb-6">Our Commitment</h2>
          <p className="text-charcoal-light mb-8">
            We believe that everyone deserves access to our resources and programs. Our website is designed to be accessible to people with a wide range of abilities and disabilities.
          </p>

          <h2 className="font-display text-2xl text-charcoal mb-6">Accessibility Features</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {accessibilityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-charcoal-light">{feature}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl text-charcoal mb-6">Feedback</h2>
          <p className="text-charcoal-light mb-8">
            We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us.
          </p>

          <div className="bg-plum/10 rounded-2xl p-8">
            <h3 className="font-display text-xl text-charcoal mb-4">Contact Our Accessibility Team</h3>
            <p className="text-charcoal-light mb-4">
              Email: <a href="mailto:accessibility@cuesforcancer.org" className="text-plum hover:underline">accessibility@cuesforcancer.org</a>
            </p>
            <p className="text-charcoal-light">
              Phone: <a href="tel:+17571234567" className="text-plum hover:underline">(757) 123-4567</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
