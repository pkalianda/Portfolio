interface TextBlockProps {
  heading?: string;
  content: React.ReactNode;
  id?: string;
}

export default function TextBlock({ heading, content, id }: TextBlockProps) {
  return (
    <div className="flex flex-col gap-4" id={id}>
      {heading && (
        <h2 className="text-primary text-base font-semibold">{heading}</h2>
      )}
      <div className="prose">{content}</div>
    </div>
  );
}
