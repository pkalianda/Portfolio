import { GlobeIcon } from "@radix-ui/react-icons";

export default function Writing() {
  return (
    <div className="flex w-full min-h-[200px] items-center justify-center text-primary-muted">
      <div className="flex items-center gap-1">
        <GlobeIcon width={15} height={15} />
        <span className="text-sm font-normal">New stuff coming soon!</span>
      </div>
    </div>
  );
}
