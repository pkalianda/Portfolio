interface MetadataBlockProps {
  role: string;
  timeline: string;
  outcome: string;
}

export default function MetadataBlock({
  role,
  timeline,
  outcome,
}: MetadataBlockProps) {
  return (
    <div className="grid grid-cols-3 gap-6 py-8 border-y border-secondary">
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-muted text-sm font-medium">Role</h3>
        <p className="text-primary text-sm">{role}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-muted text-sm font-medium">Timeline</h3>
        <p className="text-primary text-sm">{timeline}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-primary-muted text-sm font-medium">Outcome</h3>
        <p className="text-primary text-sm">{outcome}</p>
      </div>
    </div>
  );
}
