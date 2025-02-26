import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <a href="/" className="font-bold text-xl">CONTENT</a>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px]">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                        <div className="text-sm font-medium">AI Analytics Engine</div>
                        <div className="text-sm text-muted-foreground">Deep analysis of engagement rates, audience demographics, and content performance</div>
                      </div>
                      <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                        <div className="text-sm font-medium">Smart Brand Matching</div>
                        <div className="text-sm text-muted-foreground">ML-powered algorithm to connect influencers with relevant brands</div>
                      </div>
                      <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                        <div className="text-sm font-medium">Automated Outreach</div>
                        <div className="text-sm text-muted-foreground">AI-driven communication and negotiation with potential partners</div>
                      </div>
                      <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                        <div className="text-sm font-medium">Performance Tracking</div>
                        <div className="text-sm text-muted-foreground">Real-time campaign monitoring and ROI analysis</div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                      <div className="text-sm font-medium">For Brands</div>
                      <div className="text-sm text-muted-foreground">Access our network of verified influencers and automated campaign management</div>
                    </div>
                    <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                      <div className="text-sm font-medium">For Creators</div>
                      <div className="text-sm text-muted-foreground">Get matched with relevant brands and maximize your earning potential</div>
                    </div>
                    <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                      <div className="text-sm font-medium">For Agencies</div>
                      <div className="text-sm text-muted-foreground">Scale your influencer marketing operations with our AI tools</div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                      <div className="text-sm font-medium">Success Stories</div>
                      <div className="text-sm text-muted-foreground">See how brands achieved 3x ROI with our AI-powered platform</div>
                    </div>
                    <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                      <div className="text-sm font-medium">Market Insights</div>
                      <div className="text-sm text-muted-foreground">Latest trends and data in influencer marketing</div>
                    </div>
                    <div className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                      <div className="text-sm font-medium">Documentation</div>
                      <div className="text-sm text-muted-foreground">API guides and technical resources</div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
} 