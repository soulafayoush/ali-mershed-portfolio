export default function Loading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-[#0A192F] z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-14 h-14 rounded-lg overflow-hidden grid place-items-center"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(10,25,47,0.6))",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            boxShadow: "0 0 20px -4px rgba(212, 175, 55, 0.6)",
          }}>
          <div className="w-6 h-6 rounded-full border-2 border-gold-accent/30 border-t-gold-accent animate-spin" />
        </div>
        <div className="text-xs uppercase tracking-[0.3em] text-gold-accent font-medium">Loading</div>
      </div>
    </div>
  );
}
