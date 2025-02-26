import React from 'react';

const ForBrands = () => {
  return (
    <div className="container mx-auto py-20 px-4 mt-16">
      <h1 className="text-4xl font-bold mb-8">For Brands</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Access Verified Creators</h2>
            <p className="text-gray-600">
              Connect with pre-verified creators who have proven track records and engaged audiences.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Platform Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-gray-600">Verified Creators</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">25M+</p>
                  <p className="text-sm text-gray-600">Combined Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-background rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Campaign Management</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Automated Matching</h4>
                <p className="text-sm text-gray-600">AI-powered creator recommendations</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Performance Tracking</h4>
                <p className="text-sm text-gray-600">Real-time campaign analytics</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Contract Management</h4>
                <p className="text-sm text-gray-600">Automated agreements and payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForBrands; 