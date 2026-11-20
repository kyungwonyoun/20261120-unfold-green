import { useState } from 'react';
import { Sprout } from 'lucide-react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

export function ProtectedImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  loading = 'lazy',
  onClick,
}: ProtectedImageProps) {
  const [hasError, setHasError] = useState(false);

  const hasCustomPosition = /\b(absolute|fixed|sticky)\b/.test(containerClassName);

  return (
    <div
      className={`${hasCustomPosition ? '' : 'relative '}overflow-hidden bg-[#E9ECE6] ${onClick ? 'cursor-zoom-in' : ''} ${containerClassName}`}
      onContextMenu={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          draggable={false}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          onDragStart={(e) => e.preventDefault()}
          className={`protected-media ${className}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="w-full h-full min-h-[180px] flex flex-col items-center justify-center gap-3 p-6 text-center bg-gradient-to-br from-[#F7F8F6] via-[#EAECE6] to-[#86A2B1]/20 text-[#6B6665]"
        >
          <Sprout className="w-6 h-6 text-[#778732]/70" strokeWidth={1.5} />
          <span className="text-xs leading-relaxed max-w-[24ch]">{alt}</span>
        </div>
      )}
    </div>
  );
}
