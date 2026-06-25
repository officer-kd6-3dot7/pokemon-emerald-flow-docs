import { NotebookPen } from "lucide-react";
import Image from "next/image";
import type { ComponentProps, PropsWithChildren } from "react";
import type { TailwindColor } from "~/lib/types";

import { cn } from "~/lib/utils";

export const FeatureNoteItem = ({
  children,
  alt,
  src,
  className,
}: PropsWithChildren<
  Pick<ComponentProps<typeof Image>, "src" | "alt" | "className">
>) => {
  return (
    <div className="mt-4 flex flex-1 flex-row items-center gap-4">
      <Image
        src={src}
        alt={alt}
        unoptimized
        priority
        sizes="100vw"
        width={0}
        height={0}
        // Make the image display full width
        // and preserve its aspect ratio
        className={cn("size-12", className)}
      />
      <div className="[&>strong]:text-primary flex flex-1 flex-col text-sm">
        {children}
      </div>
    </div>
  );
};

export const FeatureNotes = <T extends TailwindColor>({
  className,
  children,
  bgColor,
  borderColor,
  textColor,
}: PropsWithChildren<{
  className?: string;
  bgColor: `bg-${T}-800`;
  borderColor: `border-${NoInfer<T>}-600`;
  textColor: `text-${NoInfer<T>}-600`;
}>) => {
  return (
    <div
      className={cn("mb-4 w-full rounded-md", bgColor, borderColor, className)}
    >
      <div className="bg-background/90 flex flex-1 flex-col rounded-md p-4 [&>p]:mt-2!">
        <div
          className={cn(
            "flex items-center gap-2 text-sm font-bold tracking-wide uppercase",
            textColor,
          )}
        >
          <NotebookPen /> FEATURE NOTES
        </div>
        {children}
      </div>
    </div>
  );
};
FeatureNotes.Note = FeatureNoteItem;
