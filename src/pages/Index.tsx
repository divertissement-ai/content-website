import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Brain, Zap, MessageSquare, TrendingUp, BarChart3, Mail } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      {/* AI Assistant section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 md:mb-16">
            AI-POWERED INSIGHTS
          </h2>
          <div className="flex flex-col items-center space-y-6 md:space-y-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700">
              Our app harnesses the power of advanced AI agents and scalable databases to provide content creators with deep, actionable insights that drive growth and engagement.
            </p>
            <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-2xl w-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-center text-left">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Seamless Platform Integration</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">✓</span>
                      <span>TikTok</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">✓</span>
                      <span>YouTube</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">✓</span>
                      <span>Instagram</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">✓</span>
                      <span>Email</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Personalized AI-Driven Guidance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">✓</span>
                      <span>Brand Deal Recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">✓</span>
                      <span>Content Performance Analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">✓</span>
                      <span>Audience Demographics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary flex-shrink-0 mt-1">✓</span>
                      <span>Content Strategy Planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
            TOOLS FOR THE INFLUENTIAL
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              title="AI Content Analysis"
              description="Our AI analyzes your content across platforms to identify what resonates with your audience, from video formats to topics that drive engagement."
              icon={<Brain className="w-6 h-6" />}
              benefit="Never miss what your audience truly wants"
            />
            <FeatureCard
              title="Smart Brand Matching"
              description="Get matched with brands that align with your content and audience. Our AI identifies when brands engage with your content and suggests potential partnerships."
              icon={<Zap className="w-6 h-6" />}
              benefit="Turn engagement into partnership opportunities"
            />
            <FeatureCard
              title="AI Content Assistant"
              description="Chat with our AI to brainstorm content ideas, plan your content calendar, and get suggestions based on trending topics in your niche."
              icon={<MessageSquare className="w-6 h-6" />}
              benefit="Your personal creative partner"
            />
            <FeatureCard
              title="Audience Insights"
              description="Discover detailed demographics about your audience, including age, location, interests, and viewing patterns across all your connected platforms."
              icon={<BarChart3 className="w-6 h-6" />}
              benefit="Know exactly who's watching and why"
            />
            <FeatureCard
              title="Performance Tracking"
              description="Track which content types perform best - whether it's 'how-to' tutorials, 'day in the life' vlogs, or other formats specific to your niche."
              icon={<TrendingUp className="w-6 h-6" />}
              benefit="Data-driven content strategy"
            />
            <FeatureCard
              title="Unified Communication"
              description="Never miss an important email or brand outreach again. Our platform consolidates all your professional communications in one place."
              icon={<Mail className="w-6 h-6" />}
              benefit="Stay on top of every opportunity"
            />
          </div>
        </div>
      </section>

      {/* iOS App section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="container mx-auto text-center space-y-6 md:space-y-8">
          <div className="flex flex-col items-center gap-6">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Content for iOS and Android

            </span>
            <div className="flex flex-col items-center gap-6">
              <img src="../../content_logo.png" alt="Content iOS App" className="w-1/2"/>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Take Your Content Creation Mobile
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl">
              Access all premium features on the go with our powerful iOS and Android app.
            </p>
            <div className="text-small text-gray-600 max-w-2xl">
              Coming Soon! Sign up for early access.
            </div>
            <Button
                size="lg"
                className="bg-black hover:bg-black/80 text-white"
                onClick={() => window.open('https://form.typeform.com/to/xu0RaVTm', '_blank')}
            >
              Join waitlist
            </Button>
            {/* <Button 
              size="lg"
              className="bg-black hover:bg-black/80 text-white"
            >
              <span className="mr-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </span>
              Download on the App Store
            </Button> */}
          </div>

          {/* Company attribution */}
          <div className="pt-12 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Content is a product by{" "}
              <a href="https://divertissement.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Divertissement
              </a>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Index;
