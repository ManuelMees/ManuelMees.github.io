import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl p-6 ${className}`}>
      {children}
    </div>
  );
}