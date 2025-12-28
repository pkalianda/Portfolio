"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const getPageName = (path: string) => {
    if (path.includes("projects")) return "PROJECTS";
    if (path.includes("about")) return "ABOUT";
    if (path.includes("lab")) return "LAB";
    return "";
  };

  const pageName = getPageName(pathname);

  return (
    <nav className="absolute left-1/2 top-[30px] w-full max-w-[680px] -translate-x-1/2">
      <div className="bg-secondary w-fit flex items-center justify-start gap-4 rounded-full px-5 py-3">
        {/* Logo / Breadcrumb Area */}
        <div className="flex items-center gap-1">
          <Link href="/" className="logo flex items-center gap-1">
            <div className="bg-accent h-3 w-3 shrink-0" />
            <span className="text-[12.8px] font-medium text-xs">PKALIANDA</span>
          </Link>
          <span className="text-primary-muted text-[12.8px] font-normal">/</span>
          {isHome ? (
            <Link href="/" className="text-primary-muted text-[12.8px] font-normal">
              HOME
            </Link>
          ) : (
            <span className="text-primary-muted text-[12.8px] font-normal">
              {pageName}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="text-primary-muted flex items-center gap-4 text-[12.8px] font-normal">
          {isHome ? (
            <div className="flex items-center gap-4">
              <Link
                href="/projects"
                className="hover:text-primary transition-colors"
              >
                PROJECTS
              </Link>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                ABOUT
              </Link>
              <Link href="/lab" className="hover:text-primary transition-colors">
                LAB
              </Link>
            </div>
          ) : (
            <Link href="/" className="hover:text-primary transition-colors">
              EXIT
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
