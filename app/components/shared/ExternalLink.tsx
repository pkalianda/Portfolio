import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent inline-flex items-center gap-0.5 hover:underline decoration-accent/50 underline-offset-2 transition-all"
    >
      {children}
      <ExternalLinkIcon className="text-primary-muted h-3.5 w-3.5" />
    </Link>
  );
}

