import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Shield, Lock, Check, Repeat, Gift, Building2, Calculator, Award, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const donationAmounts = [
  { amount: 25, impact: 'Provides materials for 1 beanie crafting kit' },
  { amount: 50, impact: 'Sponsors 1 participant in a theatre workshop' },
  { amount: 100, impact: 'Funds a support circle session for 10 people' },
  { amount: 250, impact: 'Supports a community production performance' },
  { amount: 500, impact: 'Sponsors a month of programming' },
];

const paymentMethods = [
  { id: 'card', label: 'Credit Card' },
  { id: 'paypal', label: 'PayPal' },
  { id: 'venmo', label: 'Venmo' },
  { id: 'apple', label: 'Apple Pay' },
  { id: 'google', label: 'Google Pay' },
  { id: 'ach', label: 'Bank Transfer' },
];

export default function DonateSection() {
  const sectionRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.donate-content', {
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

      gsap.from('.amount-card', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.amounts-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.from('.sidebar-card', {
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sidebar',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

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

  // Calculate impact based on amount
  const getImpact = (amount: number) => {
    if (amount >= 500) return 'Sponsors a month of programming';
    if (amount >= 250) return 'Supports a community production performance';
    if (amount >= 100) return 'Funds a support circle session for 10 people';
    if (amount >= 50) return 'Sponsors 1 participant in a theatre workshop';
    if (amount >= 25) return 'Provides materials for 1 beanie crafting kit';
    return 'Supports our mission';
  };

  if (isSuccess) {
    return (
      <section ref={sectionRef} id="donate" className="relative w-full bg-cream py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="heading-lg text-charcoal mb-4">Thank You!</h2>
          <p className="body-lg text-charcoal-light mb-8">
            Your {isMonthly ? 'monthly' : ''} donation of ${finalAmount} {employerMatch && `(matched to $${matchedAmount})`} will help us continue 
            bringing hope and healing through the arts.
          </p>
          {showTribute && tributeName && (
            <p className="text-charcoal-light mb-4">
              This donation is made {tributeType === 'honor' ? 'in honor of' : 'in memory of'} {tributeName}.
            </p>
          )}
          <p className="font-mono text-sm text-charcoal-light">
            A receipt has been sent to your email.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="donate" className="relative w-full bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="donate-content text-center mb-12">
          <span className="section-label mb-4 block">Support Our Mission</span>
          <h2 className="heading-lg text-charcoal mb-4">Make a Donation</h2>
          <p className="body-lg text-charcoal-light max-w-2xl mx-auto">
            Your contribution helps us provide workshops, craft supplies, and community events 
            for cancer warriors and survivors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-card">
              {/* Monthly Toggle */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-cream-dark rounded-full p-1">
                  <button
                    type="button"
                    onClick={() => setIsMonthly(false)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      !isMonthly ? 'bg-plum text-cream' : 'text-charcoal'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsMonthly(true)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                      isMonthly ? 'bg-plum text-cream' : 'text-charcoal'
                    }`}
                  >
                    <Repeat className="w-4 h-4" />
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="amounts-grid grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {donationAmounts.map(({ amount, impact }) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`amount-card p-4 rounded-xl border-2 text-left transition-all ${
                      selectedAmount === amount
                        ? 'border-plum bg-plum/5'
                        : 'border-charcoal/10 hover:border-plum/50'
                    }`}
                  >
                    <span className="block font-display text-2xl text-charcoal mb-1">
                      ${amount}
                    </span>
                    <span className="block text-xs text-charcoal-light">{impact}</span>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal text-lg">$</span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors"
                  />
                </div>
              </div>

              {/* Impact Display */}
              {finalAmount > 0 && (
                <div className="mb-6 p-4 bg-amber/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-amber" />
                    <span className="font-medium text-charcoal">Your Impact</span>
                  </div>
                  <p className="text-charcoal-light text-sm">
                    ${finalAmount} {employerMatch && <span className="text-green-600 font-medium">→ ${matchedAmount} with match</span>} will {getImpact(finalAmount).toLowerCase()}.
                  </p>
                </div>
              )}

              {/* Employer Match */}
              <div className="mb-6">
                <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-2">
                  Employer Matching (Optional)
                </label>
                <input
                  type="text"
                  value={employerMatch}
                  onChange={(e) => setEmployerMatch(e.target.value)}
                  placeholder="Enter company name to check matching"
                  className="w-full px-4 py-3 border-2 border-charcoal/10 rounded-xl focus:outline-none focus:border-plum transition-colors"
                />
                {employerMatch && (
                  <p className="mt-2 text-sm text-green-600">
                    ✓ Many donations from {employerMatch} are matched! Your ${finalAmount} could become ${matchedAmount}.
                  </p>
                )}
              </div>

              {/* Tribute Giving */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => setShowTribute(!showTribute)}
                  className="flex items-center gap-2 text-plum font-medium text-sm"
                >
                  <Gift className="w-4 h-4" />
                  {showTribute ? 'Hide' : 'Add'} Tribute/Memorial
                </button>
                
                {showTribute && (
                  <div className="mt-4 p-4 bg-cream-dark rounded-xl">
                    <div className="flex gap-4 mb-4">
                      <button
                        type="button"
                        onClick={() => setTributeType('honor')}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                          tributeType === 'honor'
                            ? 'bg-plum text-cream'
                            : 'bg-white text-charcoal'
                        }`}
                      >
                        In Honor Of
                      </button>
                      <button
                        type="button"
                        onClick={() => setTributeType('memory')}
                        className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                          tributeType === 'memory'
                            ? 'bg-plum text-cream'
                            : 'bg-white text-charcoal'
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
                <label className="block font-mono text-xs uppercase tracking-wider text-charcoal-light mb-3">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {paymentMethods.map(({ id, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPaymentMethod(id)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        paymentMethod === id
                          ? 'border-plum bg-plum/5'
                          : 'border-charcoal/10 hover:border-plum/50'
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
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  'Processing...'
                ) : (
                  <>
                    <Heart className="w-5 h-5 mr-2" />
                    Donate ${finalAmount > 0 ? finalAmount : ''} {isMonthly && finalAmount > 0 && '/month'}
                  </>
                )}
              </button>

              {/* Security Badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-charcoal-light">
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

          {/* Sidebar Info */}
          <div className="sidebar space-y-6">
            <div className="sidebar-card bg-plum rounded-2xl p-6 text-cream">
              <Gift className="w-8 h-8 mb-4" />
              <h3 className="font-display text-xl mb-2">Matching Gifts</h3>
              <p className="text-sm text-cream/80 mb-4">
                Many employers match charitable donations. Enter your company name to see if your donation can be doubled.
              </p>
              <div className="text-amber text-sm font-medium">
                Over 18,000 companies match!
              </div>
            </div>

            <div className="sidebar-card bg-amber rounded-2xl p-6 text-charcoal">
              <Building2 className="w-8 h-8 mb-4" />
              <h3 className="font-display text-xl mb-2">Other Ways to Give</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-charcoal rounded-full"></span>
                  Stock/Securities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-charcoal rounded-full"></span>
                  Donor-Advised Funds
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-charcoal rounded-full"></span>
                  Planned Giving
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-charcoal rounded-full"></span>
                  Cryptocurrency
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-charcoal rounded-full"></span>
                  In-Kind Donations
                </li>
              </ul>
            </div>

            <div className="sidebar-card bg-cream-dark rounded-2xl p-6">
              <Calculator className="w-8 h-8 mb-4 text-plum" />
              <h3 className="font-display text-xl text-charcoal mb-2">Tax Information</h3>
              <p className="text-sm text-charcoal-light mb-3">
                Cues for Cancer is a 501(c)(3) nonprofit organization. 
                All donations are tax-deductible.
              </p>
              <p className="font-mono text-sm text-charcoal">
                EIN: 33-2884314
              </p>
            </div>

            <div className="sidebar-card bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="font-display text-lg text-green-800 mb-2">Monthly Giving</h3>
              <p className="text-sm text-green-700">
                Monthly donors provide steady support that helps us plan programs and reach more people. 
                Join our community of sustaining supporters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
