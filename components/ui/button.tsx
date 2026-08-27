import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center border border-gold px-8 py-3 font-sans text-sm font-medium tracking-wide text-gold uppercase transition-colors hover:bg-gold hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function ButtonLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, className)}>
      {children}
    </Link>
  );
}
