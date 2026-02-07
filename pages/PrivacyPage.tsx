import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal-light mb-8">
              Last updated: January 1, 2025
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">1. Introduction</h2>
            <p className="text-charcoal-light mb-6">
              Cues for Cancer ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">2. Information We Collect</h2>
            <p className="text-charcoal-light mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-charcoal-light mb-6">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Demographic information</li>
              <li>Payment information for donations</li>
              <li>Information about your cancer journey (if voluntarily shared)</li>
              <li>Website usage data</li>
            </ul>

            <h2 className="font-display text-2xl text-charcoal mb-4">3. How We Use Your Information</h2>
            <p className="text-charcoal-light mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-charcoal-light mb-6">
              <li>Provide and improve our programs and services</li>
              <li>Process donations and send receipts</li>
              <li>Communicate with you about our work</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-2xl text-charcoal mb-4">4. Information Sharing</h2>
            <p className="text-charcoal-light mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business.
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">5. Security</h2>
            <p className="text-charcoal-light mb-6">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="font-display text-2xl text-charcoal mb-4">6. Your Rights</h2>
            <p className="text-charcoal-light mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-charcoal-light mb-6">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="font-display text-2xl text-charcoal mb-4">7. Contact Us</h2>
            <p className="text-charcoal-light">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@cuesforcancer.org" className="text-plum hover:underline">
                privacy@cuesforcancer.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
