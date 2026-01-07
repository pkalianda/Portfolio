interface HeroBlockProps {
  src: string;
  alt: string;
}

export default function HeroBlock({ src, alt }: HeroBlockProps) {
  return (
    <div className="w-full aspect-video rounded-[16px] overflow-hidden bg-secondary">
      {/* Placeholder for now - will be replaced with Image component later */}
      <div className="w-full h-full flex items-center justify-center text-primary-muted text-sm">
        Hero Image: {alt}
      </div>
    </div>
  );
}
