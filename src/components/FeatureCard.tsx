import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  benefit: string;
}

export const FeatureCard = ({ title, description, icon, benefit }: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-4 sm:p-6 glass-panel hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 space-y-3 sm:space-y-4">
        <div className="text-primary/80 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-primary/10">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
        <div className="pt-2 sm:pt-4">
          <span className="text-sm font-medium text-primary">{benefit}</span>
        </div>
      </div>
    </div>
  );
};
