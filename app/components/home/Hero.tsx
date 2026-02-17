import Image from "next/image";
import ExternalLink from "../shared/ExternalLink";

export default function Hero() {
  return (
    <section className="flex w-full flex-col gap-6 max-w-[680px]">
      {/* Header */}
      <div className="flex flex-col gap-0.5 text-sm leading-5">
        <h1 className="text-primary font-semibold">Prayag Kalianda</h1>
        <p className="text-primary-muted font-medium">Vancouver, BC</p>
      </div>

      {/* Bio Text */}
      <div className="relative text-sm text-primary">
        <div className="relative z-10 space-y-5.5">
          <p className="leading-[22px]">
            I am a product designer with 2+ years of experience currently
            working at{" "}
            <ExternalLink href="https://textlayer.ai">TextLayer</ExternalLink>
          </p>
          <p className="leading-[22px]">
            I excel in lean and agile teams at the intersection of AI and SaaS.
            I also love working with friends to design and build solutions to
            problems we come across. Currently, we&apos;re building{" "}
            <ExternalLink href="https://www.getglide.fit/">Glide.fit</ExternalLink>
          </p>
          <p className="leading-[22px]">
            I spend most of my free time playing football, going on runs, and
            taking photos.
          </p>
        </div>
      </div>
    </section>
  );
}

