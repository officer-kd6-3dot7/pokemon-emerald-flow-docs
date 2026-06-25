import type { TailwindColor } from "~/lib/types";
import { cn } from "~/lib/utils";

export function HeroBackground({
  blobBgColor = "bg-green-500",
  blobTranslateX = "translate-x-[calc(-50%-0px)]",
  blobTranslateY = "translate-y-[calc(-50%-0px)]",
  blobSize = `size-[180px]`,
}: {
  blobBgColor?: `bg-${TailwindColor}-500`;
  blobTranslateX?: `translate-x-[calc(-50%-${number}px)]`;
  blobTranslateY?: `translate-y-[calc(-50%-${number}px)]`;
  blobSize?: `size-[${number}px]`;
}) {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 size-50 translate-x-[calc(-50%-0px)] translate-y-[calc(-50%-0px)] rounded-full bg-green-500 opacity-70 blur-[100px] dark:opacity-30",
        blobBgColor,
        blobTranslateX,
        blobTranslateY,
        blobSize,
      )}
    />
  );
}
