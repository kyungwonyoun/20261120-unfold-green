import { siteSettings } from '../data/site';

interface WordmarkProps {
  tone?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Wordmark({ tone = 'dark', size = 'md', className = '' }: WordmarkProps) {
  const sizeClasses = {
    sm: 'text-[17px]',
    md: 'text-[19px]',
    lg: 'text-[26px] md:text-[32px]',
    xl: 'text-[34px] sm:text-[42px] md:text-[50px]',
  }[size];

  const firstColor = tone === 'light' ? 'text-[#F7F8F6]' : 'text-[#383515]';
  const secondColor = tone === 'light' ? 'text-[#F7F8F6]/80' : 'text-[#778732]';

  return (
    <span
      className={`inline-flex items-baseline gap-[0.28em] font-medium tracking-[-0.02em] leading-none whitespace-nowrap shrink-0 ${sizeClasses} ${className}`}
    >
      <span className={firstColor}>{siteSettings.wordmarkFirst}</span>
      <span className={`font-semibold ${secondColor}`}>{siteSettings.wordmarkSecond}</span>
    </span>
  );
}
