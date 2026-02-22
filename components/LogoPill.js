export default function LogoPill({ title, subtitle }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-zinc-950/60">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
          <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="text-xs text-zinc-400">{subtitle}</div>
      </div>
    </div>
  );
}
