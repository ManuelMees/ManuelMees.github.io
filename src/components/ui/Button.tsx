import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center px-6 py-3 rounded-md font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-[#66A8C2] hover:bg-[#66A8C2]/80 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-[#0EA4C4] hover:bg-[#0EA4C4]/80 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#66A8C2] text-[#66A8C2] hover:bg-[#66A8C2] hover:text-white'
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}