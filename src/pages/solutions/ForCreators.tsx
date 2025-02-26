import React from 'react';

const ForCreators = () => {
  return (
    <div className="container mx-auto py-20 px-4 mt-16">
      <h1 className="text-4xl font-bold mb-8">For Creators</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Maximize Your Potential</h2>
            <p className="text-gray-600">
              Join an exclusive network of verified creators and unlock premium brand partnerships.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Creator Success</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2.5x</p>
                  <p className="text-sm text-gray-600">Average Revenue Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">85%</p>
                  <p className="text-sm text-gray-600">Partnership Success Rate</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Platform Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Verified brand partnerships</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>AI-powered content optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Automated negotiation tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Growth Tools</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Analytics Dashboard</h4>
                <p className="text-sm text-gray-600">Track your performance and growth</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Brand Matching</h4>
                <p className="text-sm text-gray-600">AI-powered partnership recommendations</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Content Strategy</h4>
                <p className="text-sm text-gray-600">Optimize your content performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForCreators; 