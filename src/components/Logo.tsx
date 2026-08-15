import { cn } from "@/lib/utils";
import headerLogo from "@/assets/Movara_header.png";
import footerLogo from "@/assets/Movara_footer.png";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  const src = inverted ? footerLogo : headerLogo;
  return (
    <img
      src={src}
      alt="Movara Movers"
      className={cn("h-14 w-auto object-contain", className)}
    />
  );
}
