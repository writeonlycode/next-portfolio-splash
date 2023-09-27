export default function ProgressBar({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div>
      <div
        className="flex items-center justify-center text-sm mb-1 rounded-full"
        style={{
          width: 100,
          height: 100,
          background: `radial-gradient(closest-side, white 70%, transparent 0% 100%), conic-gradient(#000D24 ${value}%, #D6D6D6 0);`,
        }}
      >
        {value}%
      </div>
      <div className="flex items-center justify-center text-sm font-medium">
        {label}
      </div>
    </div>
  );
}
