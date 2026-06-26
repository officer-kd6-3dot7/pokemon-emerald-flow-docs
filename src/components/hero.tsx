import Image from "next/image";
import type { ComponentProps, PropsWithChildren } from "react";
import { cn } from "~/lib/utils";
import type { TailwindColor } from "~/lib/types";

export function Hero({
  children,
  alt,
  src,
  className,
  ...blob
}: PropsWithChildren<
  Pick<ComponentProps<typeof Image>, "src" | "alt" | "className"> &
    ComponentProps<typeof HeroBackground>
>) {
  return (
    <section className="my-6 flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-0">
      <div className="flex flex-1 flex-col">{children}</div>
      <div className="relative shrink-0 self-center">
        <HeroBackground {...blob} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          src={src}
          alt={alt}
          width={180}
          height={180}
          className={cn("relative mx-auto", className)}
          unoptimized
          priority
        />
      </div>
    </section>
  );
}

function HeroBackground({
  blobBgColor,
  blobTranslateX,
  blobTranslateY,
  blobSize,
}: {
  blobBgColor?: `bg-${TailwindColor}-500`;
  blobTranslateX?: `translate-x-[calc(-50%-${number}px)]`;
  blobTranslateY?: `translate-y-[calc(-50%-${number}px)]`;
  blobSize?: `size-[${number}px]`;
}) {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 size-50 translate-x-[calc(-50%-0px)] translate-y-[calc(-50%-0px)] rounded-full bg-green-500 opacity-60 blur-[48px] dark:opacity-20",
        blobBgColor,
        blobTranslateX,
        blobTranslateY,
        blobSize,
      )}
    />
  );
}
