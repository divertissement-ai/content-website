import React from 'react';

const AutomatedOutreach = () => {
  return (
    <div className="container mx-auto py-20 px-4 mt-16">
      <h1 className="text-4xl font-bold mb-8">Automated Outreach</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">AI-Driven Communication</h2>
            <p className="text-gray-600">
              Our AI system automates the entire outreach process:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Smart message personalization</li>
              <li>Optimal timing detection</li>
              <li>Response rate optimization</li>
              <li>Automated follow-ups</li>
            </ul>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Outreach Performance</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">78%</p>
                <p className="text-sm text-gray-600">Response Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3.2x</p>
                <p className="text-sm text-gray-600">Faster Deal Closure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Message Templates</h3>
            {Array(3).fill(null).map((_, i) => (
              <div key={i} className="mb-4 p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Template {i + 1}</h4>
                <p className="text-sm text-gray-600">
                  {["Initial Outreach", "Follow-up", "Deal Closure"][i]}
                </p>
                <div className="mt-2 text-xs bg-muted p-2 rounded">
                  Personalized message preview...
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedOutreach; 