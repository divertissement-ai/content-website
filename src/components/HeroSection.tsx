
import { useState } from 'react';
import { Button } from "@/components/ui/button"

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      {/* Company name header */}
      <div className="absolute top-0 left-0 w-full p-4 md:p-6">
        <span className="font-medium text-sm md:text-base text-foreground/60">
          Content Creator Connector
        </span>
      </div>
      
      <div className="flex flex-col md:flex-row items-center min-h-screen">
        <div className="w-full lg:w-2/3 p-8 md:p-16 flex flex-col justify-center z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Product Tag */}
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                <span className="size-2 bg-primary rounded-full animate-pulse" />
                5K+ Followers Required
              </span>
              
              {/* App Name */}
              <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
                CONTENT
              </h1>
              
              {/* Tagline */}
              <p className="text-xl md:text-2xl font-medium text-foreground/80 max-w-md">
                The exclusive platform for verified creators
              </p>
            </div>
            
            <p className="text-lg text-gray-600 max-w-md">
              An AI-powered platform exclusively for creators with 5K+ followers. Join the elite.
            </p>

            <div className="space-y-6">
              <Button 
                size="lg"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105 ${
                  isHovered ? 'bg-secondary' : 'bg-primary'
                }`}
              >
                <span className="relative z-10">Check Eligibility</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              {/* Brand attribution */}
              <div className="flex items-center gap-2">
                <div className="size-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <p className="text-sm text-foreground/60">
                  A product by Content Creator Connector
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative right section */}
        <div className="w-full lg:w-1/3 h-full relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-primary/10 to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />
        </div>
      </div>
    </section>
  );
};
