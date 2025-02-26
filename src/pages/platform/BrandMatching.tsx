import React from 'react';
import { Users, Search, Handshake, Award, BarChart3, Briefcase, Star, Shuffle } from 'lucide-react';
import '../../styles/pages/platform.css';

const BrandMatching = () => {
  return (
    <div className="platform-page brand-matching">
      {/* Decorative shapes */}
      <div className="platform-shape platform-shape-1"></div>
      <div className="platform-shape platform-shape-2"></div>
      
      <div className="platform-container">
        <div className="platform-header">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake size={32} className="text-[var(--brand-primary)]" />
            <div className="px-3 py-1 rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] text-sm font-medium">
              Perfect Partnerships
            </div>
          </div>
          <h1 className="platform-title">Brand Matching</h1>
          <p className="platform-subtitle">
            Our intelligent brand matching system connects you with the perfect brand partners 
            based on your audience, content style, and collaboration goals.
          </p>
        </div>
        
        <div className="platform-grid">
          <div className="platform-card">
            <h2 className="platform-card-title">Smart Brand Matching</h2>
            <p className="platform-card-content">
              Our AI-powered system finds the perfect brand partners for authentic collaborations.
            </p>
            
            <ul className="platform-feature-list">
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Search size={20} />
                </div>
                <div>
                  <strong>Intelligent Matching</strong>
                  <p className="platform-feature-text">
                    Our AI analyzes your content, audience, and brand preferences to find ideal partnership opportunities.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Users size={20} />
                </div>
                <div>
                  <strong>Audience Alignment</strong>
                  <p className="platform-feature-text">
                    Connect with brands that resonate with your audience demographics and interests.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Award size={20} />
                </div>
                <div>
                  <strong>Quality Partnerships</strong>
                  <p className="platform-feature-text">
                    Access vetted brands committed to fair compensation and authentic collaborations.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="platform-card">
            <h2 className="platform-card-title">Collaboration Management</h2>
            <p className="platform-card-content">
              Streamline your brand partnerships from initial contact to successful completion.
            </p>
            
            <ul className="platform-feature-list">
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Briefcase size={20} />
                </div>
                <div>
                  <strong>Deal Management</strong>
                  <p className="platform-feature-text">
                    Manage contracts, deliverables, and payment terms in one secure platform.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <strong>Performance Tracking</strong>
                  <p className="platform-feature-text">
                    Measure the success of brand collaborations with detailed analytics and reporting.
                  </p>
                </div>
              </li>
              <li className="platform-feature-item">
                <div className="platform-feature-icon">
                  <Star size={20} />
                </div>
                <div>
                  <strong>Portfolio Building</strong>
                  <p className="platform-feature-text">
                    Showcase your successful brand collaborations to attract premium partnership opportunities.
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

export default BrandMatching;