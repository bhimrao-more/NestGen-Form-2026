import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-secondary-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-secondary-300 uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}
