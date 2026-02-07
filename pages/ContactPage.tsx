import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Check, 
  Clock, 
  MessageSquare
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Page Hero */}
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-cream/80">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 bg-plum/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-plum" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-charcoal mb-1">Location</h3>
                  <p className="text-charcoal-light text-sm">
                    Norfolk, Virginia<br />
                    Hampton Roads Area
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 bg-amber/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-charcoal mb-1">Email</h3>
                  <a href="mailto:info@cuesforcancer.org" className="text-charcoal-light text-sm hover:text-plum transition-colors">
                    info@cuesforcancer.org
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                <div className="w-12 h-12 bg-rose-soft/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-charcoal" />
                </div>
                <div>
                  <h3 className="font-sans font-medium text-charcoal mb-1">Phone</h3>
                  <a href="tel:+17571234567" className="text-charcoal-light text-sm hover:text-plum transition-colors">
                    (757) 123-4567
                  </a>
                </div>
              </div>

              <div className="bg-plum rounded-2xl p-6 text-cream">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5" />
                  <h3 className="font-sans font-medium">Office Hours</h3>
                </div>
                <p className="text-cream/80 text-sm">
                  Monday - Friday: 9am - 5pm<br />
                  Saturday: By appointment<br />
                  Sunday: Closed
                </p>
              </div>

              <div className="bg-amber rounded-2xl p-6 text-charcoal">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5" />
                  <h3 className="font-sans font-medium">Quick Response</h3>
                </div>
                <p className="text-charcoal/70 text-sm">
                  We typically respond to inquiries within 24-48 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 text-sm">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donate">Donations</option>
                    <option value="partner">Partnerships</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </button>

                <p className="text-center text-xs text-charcoal-light mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
