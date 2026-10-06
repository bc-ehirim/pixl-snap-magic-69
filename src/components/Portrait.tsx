import { profile } from "@/data/portfolio";

export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      {profile.portrait ? (
        <img src={profile.portrait} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
      ) : (
        <div className="placeholder-art flex h-full w-full flex-col items-center justify-center gap-2">
          <span className="font-display text-6xl">{profile.initials}</span>
          <span className="eyebrow">Photo to come</span>
        </div>
      )}
    </div>
  );
}
