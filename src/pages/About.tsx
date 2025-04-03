import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About HeyContent - Empowering Content Creators with AI</title>
        <meta name="description" content="Learn about HeyContent's mission to empower content creators with AI tools. Discover our story, values, and commitment to helping creators succeed." />
        <meta name="keywords" content="heycontent about, content creator platform, AI content tools, creator empowerment, content creation platform" />
        <link rel="canonical" href="https://heycontent.co/about" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About HeyContent</h1>
          
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              HeyContent is on a mission to revolutionize content creation by empowering creators with cutting-edge AI tools and insights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
            <p className="mb-6">
              Founded in 2024, HeyContent emerged from a simple observation: content creators needed better tools to scale their impact. 
              We recognized that while AI was transforming industries, content creators weren't fully benefiting from these advances.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              We're dedicated to helping verified creators with 5k+ followers create better content, reach more people, and build stronger 
              connections with their audience through AI-powered tools and insights.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Creativity First: AI enhances, never replaces, human creativity</li>
              <li className="mb-2">Authenticity: We help creators maintain their unique voice</li>
              <li className="mb-2">Innovation: Constantly improving our tools and features</li>
              <li className="mb-2">Community: Building a supportive ecosystem for creators</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
            <p className="mb-6">
              We're a diverse team of content creators, AI experts, and tech innovators passionate about helping creators succeed. 
              Our combined experience spans content creation, artificial intelligence, and technology development.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Join Us</h2>
            <p className="mb-6">
              We're always looking for talented individuals who share our vision of empowering content creators. 
              Whether you're a creator, developer, or AI expert, we'd love to hear from you.
            </p>

            <div className="mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About; 