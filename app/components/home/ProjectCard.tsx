import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

export default function ProjectCard({ title, subtitle, imageSrc }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-[18px] w-full">
      <div className="relative w-full aspect-[330/224] rounded-[4px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-0.5 text-sm font-medium leading-5">
        <h3 className="text-primary">{title}</h3>
        <p className="text-primary-muted">{subtitle}</p>
      </div>
    </div>
  );
}

