import React from 'react';

const BrandMatching = () => {
  return (
    <div className="container mx-auto py-20 px-4 mt-16">
      <h1 className="text-4xl font-bold mb-8">Smart Brand Matching</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">AI-Powered Matching</h2>
            <p className="text-gray-600">
              Our ML algorithm connects you with brands that align with your:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Content style and niche</li>
              <li>Audience demographics</li>
              <li>Performance metrics</li>
              <li>Brand values and preferences</li>
            </ul>
          </div>
          
          <div className="bg-secondary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Match Success Rate</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">89%</p>
                <p className="text-sm text-gray-600">Match Acceptance Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">5.2K+</p>
                <p className="text-sm text-gray-600">Active Brand Partners</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Matches</h3>
            {/* Placeholder for brand matches list */}
            {Array(4).fill(null).map((_, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b last:border-0">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div>
                  <p className="font-medium">Brand Name {i + 1}</p>
                  <p className="text-sm text-gray-600">Match Score: {95 - i}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandMatching; 