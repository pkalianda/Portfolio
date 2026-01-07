interface ImageGridBlockProps {
  images: Array<{ src: string; alt: string; caption?: string }>;
  columns?: 2 | 3;
}

export default function ImageGridBlock({
  images,
  columns = 2,
}: ImageGridBlockProps) {
  return (
    <div
      className={`grid gap-5 ${
        columns === 2 ? "grid-cols-2" : "grid-cols-3"
      }`}
    >
      {images.map((image, index) => (
        <figure key={index} className="flex flex-col gap-3">
          <div className="w-full aspect-video rounded-[4px] overflow-hidden bg-secondary">
            {/* Placeholder for now - will be replaced with Image component later */}
            <div className="w-full h-full flex items-center justify-center text-primary-muted text-sm">
              {image.alt}
            </div>
          </div>
          {image.caption && (
            <figcaption className="text-primary-muted text-xs">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
