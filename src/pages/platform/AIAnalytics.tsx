import React from 'react';

const AIAnalytics = () => {
  return (
    <div className="container mx-auto py-20 px-4 mt-16">
      <h1 className="text-4xl font-bold mb-8">AI Analytics Engine</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Performance Analysis</h2>
            <p className="text-gray-600">
              Our AI engine analyzes your content performance across platforms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Engagement rate tracking</li>
              <li>Audience demographic analysis</li>
              <li>Content performance metrics</li>
              <li>Trend prediction</li>
            </ul>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">43%</p>
                <p className="text-sm text-gray-600">Avg. Engagement Increase</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">2.8x</p>
                <p className="text-sm text-gray-600">ROI Improvement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
          {/* Placeholder for analytics dashboard preview */}
          <div className="aspect-video bg-background rounded-lg shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics; 