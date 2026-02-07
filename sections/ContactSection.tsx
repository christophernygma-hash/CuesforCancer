import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone, Send, Check, Clock, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('.contact-info-card', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen w-full bg-cream-dark py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="contact-content text-center mb-12">
          <span className="section-label mb-4 block">Get In Touch</span>
          <h2 className="heading-lg text-charcoal mb-4">Contact Us</h2>
          <p className="body-lg text-charcoal-light max-w-2xl mx-auto">
            Have questions about our programs, want to volunteer, or interested in partnering? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Sidebar */}
          <div className="contact-info lg:col-span-2 space-y-6">
            <div className="contact-info-card bg-white rounded-2xl p-6 flex items-start gap-4">
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

            <div className="contact-info-card bg-white rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-amber/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-charcoal" />
              </div>
              <div>
                <h3 className="font-sans font-medium text-charcoal mb-1">Email</h3>
                <a 
                  href="mailto:info@cuesforcancer.com" 
                  className="text-charcoal-light text-sm hover:text-plum transition-colors"
                >
                  info@cuesforcancer.com
                </a>
              </div>
            </div>

            <div className="contact-info-card bg-white rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-rose-soft/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-charcoal" />
              </div>
              <div>
                <h3 className="font-sans font-medium text-charcoal mb-1">Phone</h3>
                <a 
                  href="tel:+17571234567" 
                  className="text-charcoal-light text-sm hover:text-plum transition-colors"
                >
                  (757) 123-4567
                </a>
              </div>
            </div>

            <div className="contact-info-card bg-plum rounded-2xl p-6 text-cream">
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

            <div className="contact-info-card bg-amber rounded-2xl p-6 text-charcoal">
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
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-card">
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
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
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
  );
}
