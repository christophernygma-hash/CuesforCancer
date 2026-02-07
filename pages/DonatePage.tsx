import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Lock, 
  Check, 
  Repeat, 
  Gift, 
  Building2, 
  TrendingUp,
  Award,
  Calculator,
  Star
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const donationAmounts = [
  { amount: 25, impact: 'Provides materials for 1 beanie crafting kit' },
  { amount: 50, impact: 'Sponsors 1 participant in a theatre workshop' },
  { amount: 100, impact: 'Funds a support circle session for 10 people' },
  { amount: 250, impact: 'Supports a community production performance' },
  { amount: 500, impact: 'Sponsors a month of programming' },
  { amount: 1000, impact: 'Funds a full 6-week workshop series' }
];

const paymentMethods = [
  { id: 'card', label: 'Credit Card', icon: '💳' },
  { id: 'paypal', label: 'PayPal', icon: 'P' },
  { id: 'venmo', label: 'Venmo', icon: 'V' },
  { id: 'apple', label: 'Apple Pay', icon: 'A' },
  { id: 'google', label: 'Google Pay', icon: 'G' },
  { id: 'ach', label: 'Bank Transfer', icon: '🏦' }
];

const otherWays = [
  { title: 'Stock/Securities', desc: 'Donate appreciated stocks' },
  { title: 'Donor-Advised Funds', desc: 'Grant from your DAF' },
  { title: 'Planned Giving', desc: 'Include us in your will' },
  { title: 'Cryptocurrency', desc: 'Bitcoin, Ethereum & more' },
  { title: 'In-Kind Donations', desc: 'Supplies, materials, services' }
];

export default function DonatePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showTribute, setShowTribute] = useState(false);
  const [tributeType, setTributeType] = useState<'honor' | 'memory'>('honor');
  const [tributeName, setTributeName] = useState('');
  const [employerMatch, setEmployerMatch] = useState('');
  const [showEmployerSearch, setShowEmployerSearch] = useState(false);
  const [_showCrypto, _setShowCrypto] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.donate-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = selectedAmount || parseInt(customAmount) || 0;
    if (finalAmount < 5) return;

    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsSuccess(true);
  };

  const finalAmount = selectedAmount || parseInt(customAmount) || 0;
  const matchedAmount = employerMatch ? finalAmount * 2 : finalAmount;

  const getImpact = (amount: number) => {
    if (amount >= 1000) return 'Funds a full 6-week workshop series';
    if (amount >= 500) return 'Sponsors a month of programming';
    if (amount >= 250) return 'Supports a community production performance';
    if (amount >= 100) return 'Funds a support circle session for 10 people';
    if (amount >= 50) return 'Sponsors 1 participant in a theatre workshop';
    if (amount >= 25) return 'Provides materials for 1 beanie crafting kit';
    return 'Supports our mission';
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="heading-lg text-charcoal mb-6">Thank You!</h2>
          <p className="text-xl text-charcoal-light mb-6">
            Your {isMonthly ? 'monthly' : ''} donation of ${finalAmount} {employerMatch && `(matched to $${matchedAmount})`} will help us continue bringing hope and healing through the arts.
          </p>
          {showTribute && tributeName && (
            <p className="text-charcoal-light mb-6">
              This donation is made {tributeType === 'honor' ? 'in honor of' : 'in memory of'} {tributeName}.
            </p>
          )}
          <p className="text-charcoal-light mb-8">
            A receipt has been sent to your email. You're making a real difference in the lives of performing artists affected by cancer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donor/dashboard" className="btn-primary">
              View Your Donor Portal
            </Link>
            <Link to="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-plum text-plum rounded-full hover:bg-plum hover:text-cream transition-colors">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="bg-cream min-h-screen">
      {/* Page Hero */}
      <section className="relative py-24 lg:py-32 bg-plum">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/hero-bg.jpg"
            alt="Support our mission"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav className="mb-8 text-cream/60 text-sm">
            <Link to="/" className="hover:text-amber transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Donate</span>
          </nav>
          <h1 className="font-display text-4xl md:text-6xl text-cream mb-4">
            Support Our Mission
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Your contribution helps us provide workshops, craft supplies, and community events for cancer warriors and survivors.
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border border-charcoal/5">
                {/* Monthly Toggle */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex bg-cream-dark rounded-full p-1.5">
                    <button
                      type="button"
                      onClick={() => setIsMonthly(false)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                        !isMonthly ? 'bg-plum text-cream shadow-md' : 'text-charcoal hover:bg-white/50'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMonthly(true)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                        isMonthly ? 'bg-plum text-cream shadow-md' : 'text-charcoal hover:bg-white/50'
                      }`}
                    >
                      <Repeat className="w-4 h-4" />
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-4">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {donationAmounts.map(({ amount, impact }) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedAmount === amount
                            ? 'border-plum bg-plum/5'
                            : 'border-charcoal/10 hover:border-plum/30 hover:bg-cream/50'
                        }`}
                      >
                        <span className="block font-display text-2xl text-charcoal mb-1">${amount}</span>
                        <span className="block text-xs text-charcoal-light leading-tight">{impact}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-3">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal text-xl font-medium">$</span>
                    <input
                      type="text"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-4 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors text-lg"
                    />
                  </div>
                </div>

                {/* Impact Display */}
                {finalAmount > 0 && (
                  <div className="mb-8 p-5 bg-amber/10 rounded-xl border border-amber/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-amber" />
                      <span className="font-medium text-charcoal">Your Impact</span>
                    </div>
                    <p className="text-charcoal-light">
                      ${finalAmount} {employerMatch && <span className="text-green-600 font-medium">→ ${matchedAmount} with match</span>} will {getImpact(finalAmount).toLowerCase()}.
                    </p>
                  </div>
                )}

                {/* Employer Matching */}
                <div className="mb-8">
                  <button
                    type="button"
                    onClick={() => setShowEmployerSearch(!showEmployerSearch)}
                    className="flex items-center gap-2 text-plum font-medium text-sm hover:underline"
                  >
                    <Building2 className="w-4 h-4" />
                    {showEmployerSearch ? 'Hide' : 'Add'} Employer Matching
                  </button>
                  
                  {showEmployerSearch && (
                    <div className="mt-4 p-5 bg-cream-dark rounded-xl">
                      <p className="text-sm text-charcoal-light mb-3">
                        Many employers match charitable donations. Enter your company name to check.
                      </p>
                      <input
                        type="text"
                        value={employerMatch}
                        onChange={(e) => setEmployerMatch(e.target.value)}
                        placeholder="Enter company name"
                        className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors"
                      />
                      {employerMatch && (
                        <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-sm text-green-700">
                            <Check className="w-4 h-4 inline mr-1" />
                            Many donations from {employerMatch} are matched! Your ${finalAmount} could become ${matchedAmount}.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Tribute Giving */}
                <div className="mb-8">
                  <button
                    type="button"
                    onClick={() => setShowTribute(!showTribute)}
                    className="flex items-center gap-2 text-plum font-medium text-sm hover:underline"
                  >
                    <Gift className="w-4 h-4" />
                    {showTribute ? 'Hide' : 'Add'} Tribute/Memorial
                  </button>
                  
                  {showTribute && (
                    <div className="mt-4 p-5 bg-cream-dark rounded-xl">
                      <div className="flex gap-3 mb-4">
                        <button
                          type="button"
                          onClick={() => setTributeType('honor')}
                          className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                            tributeType === 'honor'
                              ? 'bg-plum text-cream'
                              : 'bg-white text-charcoal border border-charcoal/10'
                          }`}
                        >
                          In Honor Of
                        </button>
                        <button
                          type="button"
                          onClick={() => setTributeType('memory')}
                          className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                            tributeType === 'memory'
                              ? 'bg-plum text-cream'
                              : 'bg-white text-charcoal border border-charcoal/10'
                          }`}
                        >
                          In Memory Of
                        </button>
                      </div>
                      <input
                        type="text"
                        value={tributeName}
                        onChange={(e) => setTributeName(e.target.value)}
                        placeholder="Enter name"
                        className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors"
                      />
                    </div>
                  )}
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-4">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {paymentMethods.map(({ id, label }) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setPaymentMethod(id)}
                        className={`p-3 rounded-xl border-2 text-center transition-all ${
                          paymentMethod === id
                            ? 'border-plum bg-plum/5'
                            : 'border-charcoal/10 hover:border-plum/30'
                        }`}
                      >
                        <span className="block text-xs font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={finalAmount < 5 || isProcessing}
                  className="w-full btn-primary py-5 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5" />
                      Donate ${finalAmount > 0 ? finalAmount : ''} {isMonthly && finalAmount > 0 && '/month'}
                    </span>
                  )}
                </button>

                {/* Security Badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-charcoal-light">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span className="text-xs">Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs">SSL Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="text-xs">501(c)(3)</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Matching Gifts */}
              <div className="bg-plum rounded-2xl p-6 text-cream">
                <Building2 className="w-8 h-8 mb-4" />
                <h3 className="font-display text-xl mb-2">Matching Gifts</h3>
                <p className="text-sm text-cream/80 mb-4">
                  Many employers match charitable donations. Check if your company participates and double your impact.
                </p>
                <div className="text-amber text-sm font-medium">
                  Over 18,000 companies match!
                </div>
              </div>

              {/* Other Ways to Give */}
              <div className="bg-amber rounded-2xl p-6 text-charcoal">
                <Gift className="w-8 h-8 mb-4" />
                <h3 className="font-display text-xl mb-4">Other Ways to Give</h3>
                <div className="space-y-3">
                  {otherWays.map((way, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-charcoal rounded-full mt-2"></span>
                      <div>
                        <span className="font-medium text-sm">{way.title}</span>
                        <p className="text-xs text-charcoal/70">{way.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tax Info */}
              <div className="bg-cream-dark rounded-2xl p-6">
                <Calculator className="w-8 h-8 mb-4 text-plum" />
                <h3 className="font-display text-xl text-charcoal mb-2">Tax Information</h3>
                <p className="text-sm text-charcoal-light mb-3">
                  Cues for Cancer is a 501(c)(3) nonprofit. All donations are tax-deductible.
                </p>
                <p className="font-mono text-sm text-charcoal">
                  EIN: 33-2884314
                </p>
              </div>

              {/* Monthly Giving */}
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <Heart className="w-8 h-8 mb-4 text-green-600" />
                <h3 className="font-display text-xl text-green-800 mb-2">Monthly Giving</h3>
                <p className="text-sm text-green-700">
                  Monthly donors provide steady support that helps us plan programs and reach more people.
                </p>
              </div>

              {/* Charity Ratings */}
              <div className="bg-white rounded-2xl p-6 border border-charcoal/10">
                <Star className="w-8 h-8 mb-4 text-amber" />
                <h3 className="font-display text-xl text-charcoal mb-2">Trusted Nonprofit</h3>
                <div className="space-y-2 text-sm text-charcoal-light">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    GuideStar Platinum Seal
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Charity Navigator 4-Star
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    BBB Accredited Charity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Allocation */}
      <section className="py-16 lg:py-24 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-md text-charcoal mb-8">Where Your Money Goes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-plum rounded-2xl p-6 text-cream">
              <span className="block font-display text-5xl mb-2">85%</span>
              <span className="text-sm text-cream/80">Programs & Services</span>
            </div>
            <div className="bg-amber rounded-2xl p-6 text-charcoal">
              <span className="block font-display text-5xl mb-2">10%</span>
              <span className="text-sm text-charcoal/70">Fundraising</span>
            </div>
            <div className="bg-white rounded-2xl p-6 text-charcoal border border-charcoal/10">
              <span className="block font-display text-5xl mb-2">5%</span>
              <span className="text-sm text-charcoal/70">Administration</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-plum">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-md text-cream mb-4">Questions About Giving?</h2>
          <p className="text-cream/80 mb-8">
            Contact our development team for assistance with major gifts, planned giving, or corporate partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:development@cuesforcancer.org" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber text-charcoal font-medium rounded-full hover:bg-amber-light transition-all"
            >
              Email Development Team
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cream text-cream font-medium rounded-full hover:bg-cream hover:text-plum transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
