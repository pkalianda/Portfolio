import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  slug: string;
}

export default function ProjectCard({ title, subtitle, description, imageSrc, slug }: ProjectCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="flex flex-col gap-[18px] w-full group">
      <div className="relative w-full aspect-[330/224] rounded-[4px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-0.5 text-sm font-medium leading-5">
        <h3 className="text-primary group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-primary-muted font-normal line-clamp-2">{subtitle}</p>
      </div>
    </Link>
  );
}

