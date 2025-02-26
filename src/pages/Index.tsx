
import { HeroSection } from "@/components/HeroSection";
import { Counter } from "@/components/Counter";
import { FeatureCard } from "@/components/FeatureCard";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <section className="py-20 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            MEMBERS ONLY
          </h2>
          <div className="flex flex-col items-center space-y-8">
            <div className="glass-panel p-8 md:p-12 rounded-2xl">
              <p className="text-lg mb-4">Verified Creators Using Content</p>
              <Counter end={1234} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            TOOLS FOR THE INFLUENTIAL
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Algorithm Decoder"
              description="AI-powered insights predict and optimize your content performance across platforms."
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              stats="+43% Engagement"
            />
            <FeatureCard
              title="Brand Match"
              description="Connect with premium brands actively seeking established creators."
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              stats="2.5x Revenue"
            />
            <FeatureCard
              title="Revenue Amplifier"
              description="Unlock advanced monetization strategies beyond standard sponsorships."
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              stats="+127% Growth"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
