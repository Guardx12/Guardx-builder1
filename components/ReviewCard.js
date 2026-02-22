import StarRow from "./StarRow";

export default function ReviewCard({ name, role, quote }) {
  const initials = name.split(" ").map(s => s[0]).slice(0,2).join("");
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-zinc-950/60 text-sm font-semibold">
            {initials}
          </div>
          <div className="leading-tight">
            <div className="text-sm font-medium">{name}</div>
            <div className="text-xs text-zinc-400">{role}</div>
          </div>
        </div>
        <StarRow />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-200">
        “{quote}”
      </p>
      <div className="mt-4 text-xs text-zinc-400">Verified customer (demo)</div>
    </div>
  );
}
