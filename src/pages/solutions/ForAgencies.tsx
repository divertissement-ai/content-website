import React from 'react';

const ForAgencies = () => {
  return (
    <div className="container mx-auto py-20 px-4 mt-16">
      <h1 className="text-4xl font-bold mb-8">For Agencies</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Scale Your Operations</h2>
            <p className="text-gray-600">
              Streamline your influencer marketing campaigns with our AI-powered platform.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Agency Dashboard</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-600">Active Campaigns</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">45%</p>
                  <p className="text-sm text-gray-600">Time Saved</p>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Multi-campaign management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Automated reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Team collaboration tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Campaign Management</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Creator Discovery</h4>
                <p className="text-sm text-gray-600">AI-powered creator search and filtering</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Performance Analytics</h4>
                <p className="text-sm text-gray-600">Cross-campaign performance tracking</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Client Reporting</h4>
                <p className="text-sm text-gray-600">Automated white-label reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForAgencies; 