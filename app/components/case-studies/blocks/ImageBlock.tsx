interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="w-full aspect-video rounded-[4px] overflow-hidden bg-secondary">
        {/* Placeholder for now - will be replaced with Image component later */}
        <div className="w-full h-full flex items-center justify-center text-primary-muted text-sm">
          Image: {alt}
        </div>
      </div>
      {caption && (
        <figcaption className="text-primary-muted text-xs">{caption}</figcaption>
      )}
    </figure>
  );
}
