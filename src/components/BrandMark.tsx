import { IMAGES } from '../data/siteData';

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = 'h-12 w-auto' }: BrandMarkProps) {
  return (
    <img
      src={IMAGES.logo}
      alt="I Collect Solutions"
      className={`object-contain object-left shrink-0 ${className}`}
      draggable={false}
    />
  );
}
