import React from 'react';
import { LineChart, BarChart3, PieChart, TrendingUp, Zap, Clock, BarChart, Activity } from 'lucide-react';
import '../../styles/pages/platform.css';

const PerformanceTracking = () => {
  return (
    <div className="platform-page performance-tracking">
      {/* Decorative shapes */}
      <div className="platform-shape platform-shape-1"></div>
      <div className="platform-shape platform-shape-2"></div>
      
      <div className="platform-container">
        <div className="platform-header">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity size={32} className="text-[var(--tracking-primary)]" />
            <div className="px-3 py-1 rounded-full bg-[var(--tracking-primary)]/10 text-[var(--tracking-primary)] text-sm font-medium">
              Real-time Metrics
            </div>
          </div>
          <h1 className="platform-title">Performance Tracking</h1>
          <p className="platform-subtitle">
            Our comprehensive performance tracking system provides real-time insights into your content's 
            performance, audience engagement, and revenue metrics across all platforms.
          </p>
        </div>
        
        <div className="platform-grid">
          <div className="platform-card">
            <h2 className="platform-card-title">Content Analytics</h2>
            <p className="platform-card-content">
              Track every aspect of your content performance with our advanced analytics dashboard.
            </p>
            
            <ul className="platform-feature-list">
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <LineChart size={20} />
                </div>
                <div>
                  <strong>Growth Metrics</strong>
                  <p className="platform-feature-text">
                    Monitor followers, subscribers, and audience growth across all your platforms.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <strong>Engagement Analytics</strong>
                  <p className="platform-feature-text">
                    Track likes, comments, shares, and watch time with detailed breakdowns.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <PieChart size={20} />
                </div>
                <div>
                  <strong>Content Distribution</strong>
                  <p className="platform-feature-text">
                    Analyze which content types and topics perform best with your audience.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="platform-card">
            <h2 className="platform-card-title">Performance Optimization</h2>
            <p className="platform-card-content">
              Use data-driven insights to continuously improve your content strategy and audience growth.
            </p>
            
            <ul className="platform-feature-list">
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <strong>Trend Analysis</strong>
                  <p className="platform-feature-text">
                    Identify emerging trends in your niche and optimize your content accordingly.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <strong>Posting Schedule Optimization</strong>
                  <p className="platform-feature-text">
                    Determine the best times to post based on your audience's activity patterns.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Zap size={20} />
                </div>
                <div>
                  <strong>Performance Alerts</strong>
                  <p className="platform-feature-text">
                    Receive real-time notifications about significant changes in your metrics.
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

export default PerformanceTracking;