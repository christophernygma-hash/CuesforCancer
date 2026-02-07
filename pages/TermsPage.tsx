import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Terms of Use</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Terms of Use
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal-light mb-8">
              Last updated: January 1, 2025
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">1. Acceptance of Terms</h2>
            <p className="text-charcoal-light mb-6">
              By accessing and using the Cues for Cancer website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">2. Use of Website</h2>
            <p className="text-charcoal-light mb-4">You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.</p>

            <h2 className="font-display text-2xl text-charcoal mb-4">3. Intellectual Property</h2>
            <p className="text-charcoal-light mb-6">
              All content on this website, including text, graphics, logos, images, and software, is the property of Cues for Cancer or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">4. Donations</h2>
            <p className="text-charcoal-light mb-6">
              All donations made through our website are voluntary and non-refundable. Donations are tax-deductible to the extent allowed by law.
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">5. Disclaimer</h2>
            <p className="text-charcoal-light mb-6">
              The information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult with qualified healthcare professionals for medical guidance.
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">6. Limitation of Liability</h2>
            <p className="text-charcoal-light mb-6">
              Cues for Cancer shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the website.
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">7. Changes to Terms</h2>
            <p className="text-charcoal-light mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">8. Contact</h2>
            <p className="text-charcoal-light">
              For questions about these Terms of Use, please contact us at{' '}
              <a href="mailto:legal@cuesforcancer.org" className="text-plum hover:underline">
                legal@cuesforcancer.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
