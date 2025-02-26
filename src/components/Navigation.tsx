import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const NavigationItems = () => (
    <>
      <div className="space-y-4">
        <div className="font-medium">Platform</div>
        <div className="pl-4 space-y-2">
          <a href="/platform/ai-analytics" className="block text-sm text-muted-foreground hover:text-primary">AI Analytics Engine</a>
          <a href="/platform/brand-matching" className="block text-sm text-muted-foreground hover:text-primary">Smart Brand Matching</a>
          <a href="/platform/automated-outreach" className="block text-sm text-muted-foreground hover:text-primary">Automated Outreach</a>
          <a href="/platform/performance-tracking" className="block text-sm text-muted-foreground hover:text-primary">Performance Tracking</a>
        </div>
      </div>
      <div className="space-y-4">
        <div className="font-medium">Solutions</div>
        <div className="pl-4 space-y-2">
          <a href="/solutions/for-brands" className="block text-sm text-muted-foreground hover:text-primary">For Brands</a>
          <a href="/solutions/for-creators" className="block text-sm text-muted-foreground hover:text-primary">For Creators</a>
          <a href="/solutions/for-agencies" className="block text-sm text-muted-foreground hover:text-primary">For Agencies</a>
        </div>
      </div>
      <div className="space-y-4">
        <div className="font-medium">Resources</div>
        <div className="pl-4 space-y-2">
          <a href="/resources/success-stories" className="block text-sm text-muted-foreground hover:text-primary">Success Stories</a>
          <a href="/resources/market-insights" className="block text-sm text-muted-foreground hover:text-primary">Market Insights</a>
        </div>
      </div>
    </>
  );

  return (
    <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <a href="/" className="font-bold text-xl">CONTENT</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px]">
                      <div className="grid grid-cols-2 gap-3">
                        <NavigationMenuLink asChild>
                          <a href="/platform/ai-analytics" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                            <div className="text-sm font-medium">AI Analytics Engine</div>
                            <div className="text-sm text-muted-foreground">Deep analysis of engagement rates, audience demographics, and content performance</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="/platform/brand-matching" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                            <div className="text-sm font-medium">Smart Brand Matching</div>
                            <div className="text-sm text-muted-foreground">ML-powered algorithm to connect influencers with relevant brands</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="/platform/automated-outreach" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                            <div className="text-sm font-medium">Automated Outreach</div>
                            <div className="text-sm text-muted-foreground">AI-driven communication and negotiation with potential partners</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a href="/platform/performance-tracking" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                            <div className="text-sm font-medium">Performance Tracking</div>
                            <div className="text-sm text-muted-foreground">Real-time campaign monitoring and ROI analysis</div>
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink asChild>
                        <a href="/solutions/for-brands" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                          <div className="text-sm font-medium">For Brands</div>
                          <div className="text-sm text-muted-foreground">Access our network of verified influencers and automated campaign management</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/solutions/for-creators" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                          <div className="text-sm font-medium">For Creators</div>
                          <div className="text-sm text-muted-foreground">Get matched with relevant brands and maximize your earning potential</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/solutions/for-agencies" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                          <div className="text-sm font-medium">For Agencies</div>
                          <div className="text-sm text-muted-foreground">Scale your influencer marketing operations with our AI tools</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink asChild>
                        <a href="/resources/success-stories" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                          <div className="text-sm font-medium">Success Stories</div>
                          <div className="text-sm text-muted-foreground">See how brands achieved 3x ROI with our AI-powered platform</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/resources/market-insights" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                          <div className="text-sm font-medium">Market Insights</div>
                          <div className="text-sm text-muted-foreground">Latest trends and data in influencer marketing</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="mt-8 space-y-8">
                  <NavigationItems />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
} 