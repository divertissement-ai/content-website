
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  stats: string;
}

export const FeatureCard = ({ title, description, icon, stats }: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-6 glass-panel hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 space-y-4">
        <div className="text-primary/80 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="pt-4">
          <span className="text-2xl font-bold text-gradient">{stats}</span>
        </div>
      </div>
    </div>
  );
};
