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
    <div className="flex flex-col">
      <div className="flex justify-between items-center py-6 border-b border-secondary">
        <h3 className="text-primary-muted text-sm">Role</h3>
        <p className="text-primary text-sm text-right">{role}</p>
      </div>
      <div className="flex justify-between items-center py-6 border-b border-secondary">
        <h3 className="text-primary-muted text-sm">Timeline</h3>
        <p className="text-primary text-sm text-right">{timeline}</p>
      </div>
      <div className="flex justify-between items-center py-6 border-b border-secondary">
        <h3 className="text-primary-muted text-sm">Outcome</h3>
        <p className="text-primary text-sm text-right">{outcome}</p>
      </div>
    </div>
  );
}
