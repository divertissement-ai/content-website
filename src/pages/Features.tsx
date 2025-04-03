import React from 'react';
import { Helmet } from 'react-helmet-async';

const Features: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>HeyContent Features - Advanced AI Tools for Content Creators</title>
        <meta name="description" content="Discover HeyContent's powerful features: AI-powered content creation, analytics, scheduling, and more. Perfect for verified creators with 5k+ followers." />
        <meta name="keywords" content="heycontent features, content creation tools, AI content platform, creator analytics, content scheduling" />
        <link rel="canonical" href="https://heycontent.co/features" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">HeyContent Features</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Content Generation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">AI Content Generation</h2>
            <p className="text-gray-600">
              Create engaging content with our advanced AI algorithms. Generate ideas, headlines, and full articles optimized for your audience.
            </p>
          </div>

          {/* Analytics Dashboard */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Analytics Dashboard</h2>
            <p className="text-gray-600">
              Track your content performance with detailed analytics. Understand your audience better with insights on engagement, reach, and growth.
            </p>
          </div>

          {/* Content Scheduling */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Content Scheduling</h2>
            <p className="text-gray-600">
              Plan and schedule your content in advance. Our smart scheduling system helps you maintain consistent posting across platforms.
            </p>
          </div>

          {/* Audience Insights */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Audience Insights</h2>
            <p className="text-gray-600">
              Get deep insights into your audience's preferences, behavior, and engagement patterns to create more targeted content.
            </p>
          </div>

          {/* Multi-Platform Support */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Multi-Platform Support</h2>
            <p className="text-gray-600">
              Manage and optimize your content across multiple platforms from a single dashboard. Support for all major social media networks.
            </p>
          </div>

          {/* Content Optimization */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Content Optimization</h2>
            <p className="text-gray-600">
              Optimize your content for maximum engagement with AI-powered suggestions for headlines, keywords, and timing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features; 