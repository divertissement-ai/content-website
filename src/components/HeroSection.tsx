export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] pt-16 md:pt-0">
        <div className="w-full lg:w-2/3 px-4 py-16 sm:p-8 md:p-16 flex flex-col items-center md:items-start justify-center z-10">
          <div className="space-y-6 md:space-y-8 text-center md:text-left max-w-lg mx-auto md:mx-0">
            <div className="space-y-3 md:space-y-4">
              {/* Product Tag */}
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full">
                <span className="size-2 bg-primary rounded-full animate-pulse" />
                5K+ Followers Required
              </span>
              
              {/* App Name and Attribution */}
              <div className="relative">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-tight">
                  CONTENT
                </h1>
                <br/>
                <a href="https://divertissement.ai/" target="_blank" rel="noopener noreferrer">
                  <div className="text-sm text-foreground/60">
                    by Divertissement
                  </div>
                </a>

              </div>


              {/* Tagline */}
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80 max-w-md mt-8 md:mt-6">
              The exclusive app for verified creators
              </p>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 max-w-md">
              An AI-powered platform exclusively for creators with 5K+ followers. Join the elite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
