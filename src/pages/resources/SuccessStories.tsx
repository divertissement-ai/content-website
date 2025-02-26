import React from 'react';

const SuccessStories = () => {
  const stories = [
    {
      brand: "FashionFlex",
      creator: "StyleMaster",
      results: "3.2x ROI",
      description: "Achieved 250% increase in engagement through AI-matched partnerships",
      metrics: {
        reach: "1.2M",
        conversion: "12%"
      }
    },
    {
      brand: "TechGear",
      creator: "TechReviewer",
      results: "4.5x ROI",
      description: "Generated 180% increase in sales through targeted campaigns",
      metrics: {
        reach: "800K",
        conversion: "15%"
      }
    },
    {
      brand: "FitLife",
      creator: "HealthGuru",
      results: "2.8x ROI",
      description: "Boosted app downloads by 300% through influencer partnerships",
      metrics: {
        reach: "2M",
        conversion: "8%"
      }
    }
  ];

  return (
    <div className="container mx-auto py-20 px-4 mt-16">
      <h1 className="text-4xl font-bold mb-8">Success Stories</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Platform Impact</h2>
            <p className="text-gray-600">
              Real results from our AI-powered creator-brand partnerships
            </p>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Overall Performance</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3.5x</p>
                <p className="text-sm text-gray-600">Average ROI</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">92%</p>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15K+</p>
                <p className="text-sm text-gray-600">Partnerships</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-background rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{story.brand}</h3>
                  <p className="text-sm text-gray-600">Partnership with {story.creator}</p>
                </div>
                <span className="text-primary font-bold">{story.results}</span>
              </div>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2 bg-secondary/5 rounded">
                  <p className="font-medium">{story.metrics.reach}</p>
                  <p className="text-sm text-gray-600">Reach</p>
                </div>
                <div className="text-center p-2 bg-secondary/5 rounded">
                  <p className="font-medium">{story.metrics.conversion}</p>
                  <p className="text-sm text-gray-600">Conversion</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories; 