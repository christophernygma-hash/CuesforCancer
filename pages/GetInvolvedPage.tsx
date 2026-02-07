import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Palette, 
  Handshake, 
  Megaphone, 
  Award,
  ArrowRight,
  Clock,
  CheckCircle
} from 'lucide-react';

const waysToHelp = [
  {
    icon: Heart,
    title: 'Volunteer Your Time',
    description: 'Support our programs, events, and community in hands-on ways. From workshop assistance to event coordination.',
    opportunities: ['Workshop support', 'Event help', 'Administrative tasks', 'Mentorship'],
    timeCommitment: 'Flexible, from 2 hours/month',
    cta: 'Apply to Volunteer',
    link: '/volunteer/login'
  },
  {
    icon: Palette,
    title: 'Share Your Artistic Gifts',
    description: 'Lead workshops and facilitate healing through your artistic discipline. Make a direct impact on participants.',
    opportunities: ['Theater workshops', 'Music sessions', 'Art classes', 'Writing circles'],
    timeCommitment: '6-8 week workshop series',
    cta: 'Apply to Teach',
    link: '/contact'
  },
  {
    icon: Handshake,
    title: 'Become a Partner',
    description: 'Align your theater, business, or organization with our mission. Create meaningful collaborations.',
    opportunities: ['Corporate sponsorship', 'In-kind donations', 'Collaborative programming', 'Venue partnerships'],
    timeCommitment: 'Varies by partnership',
    cta: 'Explore Partnership',
    link: '/contact'
  },
  {
    icon: Megaphone,
    title: 'Amplify Our Voice',
    description: 'Help us reach more people who need support and those who want to give it. Spread the word.',
    opportunities: ['Share on social media', 'Tell your theater community', 'Display materials', 'Host an event'],
    timeCommitment: 'As needed',
    cta: 'Get Resources',
    link: '/contact'
  }
];

const currentNeeds = [
  {
    title: 'Workshop Assistant',
    program: 'Creative Expression Workshop',
    schedule: 'Thursdays, 5:30-8:30 PM',
    description: 'Help set up, support participants, manage materials',
    skills: 'Organized, warm, reliable'
  },
  {
    title: 'Grant Writing Volunteer',
    program: 'Development Team',
    schedule: '5-10 hours/month, remote',
    description: 'Research and write grant proposals',
    skills: 'Strong writing, research skills'
  },
  {
    title: 'Social Media Coordinator',
    program: 'Marketing & Communications',
    schedule: '3-5 hours/week, remote',
    description: 'Create and schedule social media content',
    skills: 'Social media savvy, creative'
  }
];

const benefits = [
  'Deep community connection',
  'Meaningful impact on lives',
  'Professional development opportunities',
  'Access to exclusive volunteer events',
  'Continued education in healing arts',
  'Letters of recommendation'
];

export default function GetInvolvedPage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="absolute inset-0 bg-gradient-to-br from-plum via-plum to-plum-dark opacity-90" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Get Involved
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 mb-4">
            Every role matters in healing our community
          </p>
          <p className="text-lg text-cream/60 max-w-2xl mx-auto">
            Cues for Cancer thrives because of passionate individuals like you. 
            Whether you have 2 hours or 20, there's a meaningful way for you to contribute.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">How You Can Help</span>
            <h2 className="heading-lg text-charcoal">Ways to Get Involved</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {waysToHelp.map((way, index) => {
              const Icon = way.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-plum/10 hover:border-plum/30 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-amber/20 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-plum" />
                  </div>
                  
                  <h3 className="font-display text-2xl text-charcoal mb-3">
                    {way.title}
                  </h3>
                  
                  <p className="text-charcoal-light mb-6">
                    {way.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-sm font-medium text-charcoal">Opportunities:</span>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {way.opportunities.map((opp, i) => (
                        <li 
                          key={i}
                          className="text-xs bg-cream-dark px-3 py-1 rounded-full text-charcoal-light"
                        >
                          {opp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-charcoal-light mb-6">
                    <Clock className="w-4 h-4" />
                    <span>{way.timeCommitment}</span>
                  </div>

                  <Link 
                    to={way.link}
                    className="inline-flex items-center gap-2 text-plum font-medium hover:gap-3 transition-all"
                  >
                    {way.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Volunteer Needs */}
      <section className="py-20 lg:py-28 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label mb-4 block">Current Openings</span>
            <h2 className="heading-lg text-charcoal">Volunteer Opportunities</h2>
            <p className="body-lg text-charcoal-light mt-4 max-w-2xl mx-auto">
              These are our current high-priority needs. Join us in making a difference.
            </p>
          </div>

          <div className="space-y-6">
            {currentNeeds.map((need, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 border border-plum/10 hover:border-plum/30 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl text-charcoal">{need.title}</h3>
                      <span className="text-xs bg-amber/20 text-plum px-3 py-1 rounded-full">
                        {need.program}
                      </span>
                    </div>
                    <p className="text-charcoal-light mb-3">{need.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-light">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {need.schedule}
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Skills: {need.skills}
                      </span>
                    </div>
                  </div>
                  <Link 
                    to="/volunteer/login"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-plum text-cream font-medium rounded-full hover:bg-plum-dark transition-colors whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Volunteering */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">What You'll Gain</span>
              <h2 className="heading-lg text-charcoal mb-6">
                Benefits of Volunteering
              </h2>
              <p className="body-lg text-charcoal-light mb-8">
                Volunteering with Cues for Cancer is a rewarding experience that offers 
                personal growth, professional development, and the chance to make a real 
                difference in the lives of performing artists affected by cancer.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-plum" />
                    </div>
                    <span className="text-charcoal">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-plum rounded-3xl p-8 lg:p-12 text-cream">
              <Award className="w-12 h-12 text-amber mb-6" />
              <h3 className="font-display text-2xl mb-4">
                Join Our Volunteer Community
              </h3>
              <p className="text-cream/70 mb-8">
                Our volunteers are the heart of Cues for Cancer. When you join us, 
                you become part of a passionate community dedicated to healing through the arts.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-amber" />
                  <span>50+ Active Volunteers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber" />
                  <span>2,000+ Hours Contributed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-amber" />
                  <span>500+ Lives Impacted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-plum/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-lg text-charcoal mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="body-lg text-charcoal-light mb-10">
            Take the first step toward becoming part of our volunteer community. 
            We're excited to welcome you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/volunteer/login"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-plum text-cream font-medium rounded-full hover:bg-plum-dark transition-colors"
            >
              Apply to Volunteer
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-plum text-plum font-medium rounded-full hover:bg-plum hover:text-cream transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
