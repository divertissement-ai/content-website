import React from 'react';

const MarketInsights = () => {
  return (
    <div className="container mx-auto py-20 px-4 mt-16">
      <h1 className="text-4xl font-bold mb-8">Market Insights</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Latest Trends</h2>
            <div className="grid gap-6">
              {Array(3).fill(null).map((_, i) => (
                <div key={i} className="bg-background rounded-lg shadow p-6">
                  <span className="text-sm text-primary">Trend Report</span>
                  <h3 className="text-xl font-semibold mt-2">
                    {[
                      "The Rise of Micro-Influencers",
                      "AI in Content Creation",
                      "Emerging Platform Trends"
                    ][i]}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Detailed analysis of the latest market developments and opportunities.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-sm text-gray-500">5 min read</span>
                    <span className="text-sm text-gray-500">Updated weekly</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
            <div className="space-y-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <p className="text-3xl font-bold text-primary">$16.4B</p>
                <p className="text-sm text-gray-600">Market Size</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <p className="text-3xl font-bold text-primary">32%</p>
                <p className="text-sm text-gray-600">YoY Growth</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <p className="text-3xl font-bold text-primary">4.5M</p>
                <p className="text-sm text-gray-600">Active Creators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights; 