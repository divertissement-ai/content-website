import React from 'react';

import { MessageSquare, Clock, BarChart3, RefreshCw, Mail, ThumbsUp, Zap, Send } from 'lucide-react';
import '../../styles/pages/platform.css';

const AutomatedOutreach = () => {
  return (
      <div className="platform-page automated-outreach">
        {/* Decorative shapes */}
        <div className="platform-shape platform-shape-1"></div>
        <div className="platform-shape platform-shape-2"></div>
        
        <div className="platform-container">
          <div className="platform-header">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Send size={32} className="text-[var(--outreach-primary)]" />
              <div className="px-3 py-1 rounded-full bg-[var(--outreach-primary)]/10 text-[var(--outreach-primary)] text-sm font-medium">
                Smart Communication
              </div>
            </div>
            <h1 className="platform-title">Automated Outreach</h1>
            <p className="platform-subtitle">
              Our AI-powered outreach system streamlines brand communications, optimizes response rates, 
              and helps you close deals faster with personalized, data-driven messaging.
            </p>
          </div>
          
          <div className="platform-grid">
            <div className="platform-card">
              <h2 className="platform-card-title">AI-Driven Communication</h2>
              <p className="platform-card-content">
                Our intelligent system handles every aspect of brand outreach with precision and personalization.
              </p>
              
              <ul className="platform-feature-list">
                <li className="platform-feature-item">
                  <div className="platform-feature-icon">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <strong>Smart Personalization</strong>
                    <p className="platform-feature-text">
                      AI generates customized messages based on brand profiles, past interactions, and collaboration goals.
                    </p>
                  </div>
                </li>
                <li className="platform-feature-item">
                  <div className="platform-feature-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong>Optimal Timing</strong>
                    <p className="platform-feature-text">
                      System identifies the best times to send messages based on recipient engagement patterns.
                    </p>
                  </div>
                </li>
                <li className="platform-feature-item">
                  <div className="platform-feature-icon">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <strong>Response Optimization</strong>
                    <p className="platform-feature-text">
                      Continuous learning algorithm refines messaging based on response data and success rates.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="platform-card">
              <h2 className="platform-card-title">Outreach Automation</h2>
              <p className="platform-card-content">
                Scale your brand collaborations with powerful automation tools that save time and increase effectiveness.
              </p>
              
              <ul className="platform-feature-list">
                <li className="platform-feature-item">
                  <div className="platform-feature-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong>Multi-Channel Campaigns</strong>
                    <p className="platform-feature-text">
                      Create and manage outreach campaigns across email, social media, and messaging platforms.
                    </p>
                  </div>
                </li>
                <li className="platform-feature-item">
                  <div className="platform-feature-icon">
                    <RefreshCw size={20} />
                  </div>
                  <div>
                    <strong>Automated Follow-ups</strong>
                    <p className="platform-feature-text">
                      Schedule intelligent follow-ups that adapt based on recipient actions and engagement.
                    </p>
                  </div>
                </li>
                <li className="platform-feature-item">
                  <div className="platform-feature-icon">
                    <ThumbsUp size={20} />
                  </div>
                  <div>
                    <strong>Success Tracking</strong>
                    <p className="platform-feature-text">
                      Monitor campaign performance with detailed analytics on open rates, responses, and conversions.
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

export default AutomatedOutreach;