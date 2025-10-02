import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-[#66A8C2] to-[#0EA4C4] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}