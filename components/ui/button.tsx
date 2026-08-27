import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center border border-gold bg-gold px-8 py-3 font-sans text-sm font-bold tracking-wide text-surface uppercase transition-colors hover:bg-surface hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function ButtonLink({
  href,
  className,
  children,
  target,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  target?: "_blank";
}) {
  return (
    <Link
      href={href}
      className={cn(base, className)}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
