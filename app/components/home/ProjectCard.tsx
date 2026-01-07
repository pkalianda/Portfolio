import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  slug: string;
}

export default function ProjectCard({ title, subtitle, imageSrc, slug }: ProjectCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="flex flex-col gap-[18px] w-full group">
      <div className="relative w-full aspect-[330/224] rounded-[4px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-0.5 text-sm font-medium leading-5">
        <h3 className="text-primary group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-primary-muted">{subtitle}</p>
      </div>
    </Link>
  );
}

