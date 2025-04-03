import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "How to Create Engaging Content with AI",
      excerpt: "Learn how to leverage AI tools to create more engaging and authentic content that resonates with your audience.",
      date: "March 24, 2024",
      readTime: "5 min read",
      image: "/blog/ai-content.jpg"
    },
    {
      title: "The Future of Content Creation",
      excerpt: "Explore the latest trends in content creation and how AI is revolutionizing the industry.",
      date: "March 20, 2024",
      readTime: "7 min read",
      image: "/blog/future-content.jpg"
    },
    {
      title: "Building Your Creator Brand",
      excerpt: "Essential tips and strategies for building a strong personal brand as a content creator.",
      date: "March 15, 2024",
      readTime: "6 min read",
      image: "/blog/brand-building.jpg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>HeyContent Blog - Content Creation Tips & Insights</title>
        <meta name="description" content="Discover expert tips, industry insights, and best practices for content creation. Learn how to grow your audience and create engaging content with HeyContent." />
        <meta name="keywords" content="heycontent blog, content creation tips, creator insights, AI content tools, content marketing" />
        <link rel="canonical" href="https://heycontent.co/blog" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">HeyContent Blog</h1>
        <p className="text-xl text-gray-600 mb-12">Insights, tips, and strategies for content creators</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog; 