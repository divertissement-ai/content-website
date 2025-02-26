import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const NavigationItems = () => (
    <>
      <div className="space-y-4">
        <div className="font-medium">Key Features</div>
        <div className="pl-4 space-y-2">
          <a href="/platform/ai-analytics" className="block text-sm text-muted-foreground hover:text-primary">AI Analytics Engine</a>
          <a href="/platform/brand-matching" className="block text-sm text-muted-foreground hover:text-primary">Smart Brand Matching</a>
          <a href="/platform/automated-outreach" className="block text-sm text-muted-foreground hover:text-primary">Automated Outreach</a>
          <a href="/platform/performance-tracking" className="block text-sm text-muted-foreground hover:text-primary">Performance Tracking</a>
        </div>
      </div>
    </>
  );

  return (
    <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-bold text-xl">CONTENT</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="relative">
            <button 
              className="inline-flex items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
            >
              Key Features
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${showDropdown ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute -left-8 top-full mt-1 w-56 rounded-md bg-popover p-2 shadow-md z-50">
                <a href="/platform/ai-analytics" className="block px-3 py-2 text-sm rounded-md hover:bg-muted">
                  AI Analytics Engine
                </a>
                <a href="/platform/brand-matching" className="block px-3 py-2 text-sm rounded-md hover:bg-muted">
                  Smart Brand Matching
                </a>
                <a href="/platform/automated-outreach" className="block px-3 py-2 text-sm rounded-md hover:bg-muted">
                  Automated Outreach
                </a>
                <a href="/platform/performance-tracking" className="block px-3 py-2 text-sm rounded-md hover:bg-muted">
                  Performance Tracking
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <div className="mt-8 space-y-8">
                <NavigationItems />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}