import React from 'react';
import { BarChart3, TrendingUp, Users, LineChart, Zap, Share2, Brain, Sparkles } from 'lucide-react';
import '../../styles/pages/platform.css';

const AIAnalytics = () => {
  return (
    <div className="platform-page ai-analytics">
      {/* Decorative shapes */}
      <div className="platform-shape platform-shape-1"></div>
      <div className="platform-shape platform-shape-2"></div>
      
      <div className="platform-container">
        <div className="platform-header">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain size={32} className="text-[var(--ai-primary)]" />
            <div className="px-3 py-1 rounded-full bg-[var(--ai-primary)]/10 text-[var(--ai-primary)] text-sm font-medium">
              AI-Powered Insights
            </div>
          </div>
          <h1 className="platform-title">AI Analytics Engine</h1>
          <p className="platform-subtitle">
            Our advanced AI analytics engine transforms your content data into actionable insights, 
            helping you understand audience behavior, optimize performance, and stay ahead of trends.
          </p>
        </div>
        
        <div className="platform-grid">
          <div className="platform-card">
            <h2 className="platform-card-title">Performance Analysis</h2>
            <p className="platform-card-content">
              Gain deep insights into your content performance with our AI-powered analytics suite.
            </p>
            
            <ul className="platform-feature-list">
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <strong>Engagement Tracking</strong>
                  <p className="platform-feature-text">
                    Monitor likes, comments, shares, and watch time across all your content platforms in real-time.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Users size={20} />
                </div>
                <div>
                  <strong>Audience Demographics</strong>
                  <p className="platform-feature-text">
                    Understand who your audience is with detailed demographic breakdowns and behavioral patterns.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <strong>Content Performance</strong>
                  <p className="platform-feature-text">
                    Compare performance across different content types, topics, and posting times.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <LineChart size={20} />
                </div>
                <div>
                  <strong>Trend Prediction</strong>
                  <p className="platform-feature-text">
                    Anticipate upcoming trends in your niche with our predictive AI algorithms.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="platform-card">
            <h2 className="platform-card-title">AI-Powered Insights</h2>
            <p className="platform-card-content">
              Our neural networks analyze your content to provide actionable recommendations.
            </p>
            
            <ul className="platform-feature-list">
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Sparkles size={20} />
                </div>
                <div>
                  <strong>Content Optimization</strong>
                  <p className="platform-feature-text">
                    Get AI-generated suggestions to improve your content's performance and engagement.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Zap size={20} />
                </div>
                <div>
                  <strong>Performance Prediction</strong>
                  <p className="platform-feature-text">
                    Predict how well your content will perform before you publish it.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Share2 size={20} />
                </div>
                <div>
                  <strong>Audience Growth Strategies</strong>
                  <p className="platform-feature-text">
                    Receive tailored strategies to grow your audience based on your content and niche.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;