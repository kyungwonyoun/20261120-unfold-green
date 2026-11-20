import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProtectedImage } from './ProtectedImage';

interface LightboxModalProps {
  src: string | null;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export function LightboxModal({ src, alt, caption, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!src) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#383515]/90 backdrop-blur-sm p-4 md:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="이미지 닫기"
        className="fixed top-5 right-5 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-[#F7F8F6] text-[#383515] hover:bg-[#778732] hover:text-[#F7F8F6] transition-colors focus-visible:outline-2 focus-visible:outline-[#F7F8F6]"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="max-w-5xl w-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ProtectedImage
          src={src}
          alt={alt}
          loading="eager"
          containerClassName="max-h-[80vh] w-auto rounded-sm"
          className="max-h-[80vh] w-auto object-contain"
        />
        {(caption || alt) && (
          <p className="text-xs md:text-sm text-[#F7F8F6]/85 text-center max-w-2xl leading-relaxed">
            {caption || alt}
          </p>
        )}
      </div>
    </div>
  );
}
