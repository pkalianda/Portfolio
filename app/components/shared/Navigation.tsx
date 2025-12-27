import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="absolute left-1/2 top-[30px] w-full max-w-[680px] -translate-x-1/2">
      <div className="bg-secondary w-fit flex items-center justify-start gap-4 rounded-full px-5 py-3">
        {/* Logo / Breadcrumb Area */}
        <div className="flex items-center gap-1">
          <div className="logo flex items-center gap-1">
            <div className="bg-accent h-3 w-3 shrink-0" />
            <span className="text-[12.8px] font-medium text-xs">PKALIANDA</span>
          </div>
          <span className="text-primary-muted text-[12.8px] font-normal">/</span>
          <span className="text-primary-muted text-[12.8px] font-normal">HOME</span>
        </div>

        {/* Links */}
        <div className="text-primary-muted flex items-center gap-4 text-[12.8px] font-normal">
          <Link href="/projects" className="hover:text-primary transition-colors">
            PROJECTS
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            ABOUT
          </Link>
          <Link href="/lab" className="hover:text-primary transition-colors">
            LAB
          </Link>
        </div>
      </div>
    </nav>
  );
}

