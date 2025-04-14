import { cn } from "@/lib/utils";

interface ProductImageProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function ProductImage({
  aspectRatio = "square",
  width,
  height,
  className,
  ...props
}: ProductImageProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-gradient-to-br from-baby-pink/20 via-baby-blue/20 to-baby-pink/20",
        aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
        className
      )}
      {...props}
    >
      <div className="h-full w-full animate-pulse" />
    </div>
  );
}
