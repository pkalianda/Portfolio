import Image from "next/image";
import ExternalLink from "../shared/ExternalLink";

export default function Hero() {
  return (
    <section className="flex w-full flex-col gap-6 pt-[180px] max-w-[680px]">
      {/* Header */}
      <div className="flex flex-col gap-0.5 text-sm leading-5">
        <h1 className="text-primary font-semibold">Prayag Kalianda</h1>
        <p className="text-primary-muted font-medium">Vancouver, BC</p>
      </div>

      {/* Bio Text */}
      <div className="relative text-sm text-primary">
        <div className="relative z-10 space-y-5.5">
          <p className="leading-[22px]">
            I am a Product Designer who loves working in lean and agile teams at
            the intersection of AI and SaaS.
          </p>
          <p className="leading-[22px]">
            My first experience with design was creating posters of my favourite
            football players and convincing them to repost them on their
            Instagram. Fast forward many years, I graduated from BDes Interaction
            Design at Emily Carr University in 2025. During my time at uni I
            reshaped core user flows at{" "}
            <ExternalLink href="https://www.thecoachessite.com/">TCS</ExternalLink> and
            designed new features for{" "}
            <ExternalLink href="https://crosswordr.com">
              Crosswordr
            </ExternalLink>
          </p>
          <p className="leading-[22px]">
            Currently I am designing agentic workflows and interfaces with{" "}
            <ExternalLink href="https://textlayer.ai">TextLayer</ExternalLink>{" "}
            while building my own mini products as practice
          </p>
        </div>
      </div>
    </section>
  );
}

