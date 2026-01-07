import { ContentBlock } from "./types";
import HeroBlock from "./HeroBlock";
import MetadataBlock from "./MetadataBlock";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import ImageGridBlock from "./ImageGridBlock";
import DividerBlock from "./DividerBlock";

interface BlockRendererProps {
  block: ContentBlock;
}

export default function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case "hero":
      return <HeroBlock src={block.src} alt={block.alt} />;
    case "metadata":
      return (
        <MetadataBlock
          role={block.role}
          timeline={block.timeline}
          outcome={block.outcome}
        />
      );
    case "text":
      return (
        <TextBlock
          heading={block.heading}
          content={block.content}
          id={block.id}
        />
      );
    case "image":
      return (
        <ImageBlock src={block.src} alt={block.alt} caption={block.caption} />
      );
    case "imageGrid":
      return (
        <ImageGridBlock images={block.images} columns={block.columns} />
      );
    case "divider":
      return <DividerBlock />;
    default:
      return null;
  }
}
