import { Button } from "@/components/ui/button";

export default function OptimizeSleepSection() {
  return (
    <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#05131E' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="space-y-6 text-lg md:text-xl leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            To give you a chance to finally Optimize Your Sleep
          </h2>

          <p className="text-white/90">
            Best of all, this solution doesn't require a prescription.
          </p>

          <p className="text-white/90">
            It's a vital mineral that is 100% natural, drug-free, and something your body desperately needs, yet rarely gets nearly enough of.
          </p>

          <p className="text-white/90">
            In fact, according to research published in the journal The American Family Physician... <span className="font-semibold text-white">75% of us aren't meeting the recommended intake.</span>
          </p>

          <p className="text-white/90">
            However, by taking this vital mineral in the way I'm about to show you, it can change everything when it comes to your ability to sleep.
          </p>

          <p className="text-white/90 font-semibold">
            By adding it to your bedtime routine…
          </p>

          <div className="pl-6 space-y-3 py-4">
            <p className="text-white/90">You'll feel yourself unwind within minutes.</p>
            <p className="text-white/90">Your muscles relax as the tension runs out of your body...</p>
            <p className="text-white/90">And most people see immediate improvement in their ability to fall asleep within minutes of going to bed.</p>
          </div>

          <p className="text-white/90 font-semibold text-xl">
            In the morning, they wake up feeling like a rockstar.
          </p>

          <div className="flex flex-col items-center mt-12 space-y-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold" style={{ color: '#FFC107' }}>
                BIOptimizers
              </div>
              <div className="text-sm text-white/60 mt-2">Premium Sleep Solutions</div>
            </div>

            <Button
              size="lg"
              className="text-lg px-12 py-6 font-semibold"
              style={{ 
                backgroundColor: '#FFC107',
                color: '#05131E',
                border: '2px solid #FFC107'
              }}
              data-testid="button-buy-official"
            >
              Buy on Official Page
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
