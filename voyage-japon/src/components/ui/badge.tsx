import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "secondary",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: "secondary" | "default" }) {
  const styles =
    variant === "secondary"
      ? "rounded-full bg-neutral-100/70 dark:bg-neutral-800/70 px-2.5 py-1 text-xs"
      : "rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-2.5 py-1 text-xs";
  return <div className={cn(styles, className)} {...props} />;
}