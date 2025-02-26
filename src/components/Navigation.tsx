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
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid grid-cols-2 gap-3">
                      <a href="/analytics" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                        <div className="text-sm font-medium">Analytics</div>
                        <div className="text-sm text-muted-foreground">AI-powered insights into influencer performance</div>
                      </a>
                      <a href="/matching" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                        <div className="text-sm font-medium">Brand Matching</div>
                        <div className="text-sm text-muted-foreground">Connect with relevant brands automatically</div>
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <a href="/case-studies" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                      <div className="text-sm font-medium">Case Studies</div>
                      <div className="text-sm text-muted-foreground">See how top creators use our platform</div>
                    </a>
                    <a href="/pricing" className="group grid gap-1 hover:bg-muted p-3 rounded-lg">
                      <div className="text-sm font-medium">Pricing</div>
                      <div className="text-sm text-muted-foreground">Choose the right plan for your needs</div>
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/login')}>
            Log in
          </Button>
          <Button onClick={() => navigate('/signup')}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
} 