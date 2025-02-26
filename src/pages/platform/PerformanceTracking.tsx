import React from 'react';

const PerformanceTracking = () => {
  return (
    <div className="container mx-auto py-20 px-4 mt-16">
      <h1 className="text-4xl font-bold mb-8">Performance Tracking</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Real-time Analytics</h2>
            <p className="text-gray-600">
              Comprehensive campaign monitoring and analysis:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Real-time engagement metrics</li>
              <li>ROI calculation</li>
              <li>Audience growth tracking</li>
              <li>Performance benchmarking</li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Campaign Metrics</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Engagement</span>
                  <span className="font-medium">12.4%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">ROI Tracking</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Return</span>
                  <span className="font-medium">285%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Live Dashboard</h3>
          <div className="space-y-4">
            {Array(3).fill(null).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">
                  {["Campaign Overview", "Audience Insights", "Revenue Analytics"][i]}
                </h4>
                <div className="aspect-video bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTracking; 