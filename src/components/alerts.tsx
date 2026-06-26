import {
  CircleAlert,
  Lightbulb,
  MessageSquareWarning,
  OctagonAlert,
} from "lucide-react";
import type { PropsWithChildren } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const defaultVariant = "note" as const satisfies keyof AlertToColor;

type AlertToColor = {
  note: "blue";
  tip: "green";
  important: "purple";
  warning: "yellow";
  caution: "red";
};
const backgroundVariants = cva("border w-full mt-8 rounded-md", {
  variants: {
    variant: {
      caution: "bg-red-800 border-red-600",
      important: "bg-purple-800 border-purple-600",
      note: "bg-yellow-800 border-yellow-600",
      tip: "bg-green-800 border-green-600",
    },
  },
  defaultVariants: {
    variant: defaultVariant,
  },
});

const textVariant = cva(
  "flex items-center gap-2 text-sm font-bold tracking-wide uppercase",
  {
    variants: {
      variant: {
        caution: "text-red-600",
        important: "text-purple-600",
        note: "text-yellow-600",
        tip: "text-green-600",
      },
    },
    defaultVariants: {
      variant: defaultVariant,
    },
  },
);

type Props = VariantProps<typeof backgroundVariants> & { className?: string };

const VariantIcon = ({ variant }: Props) => {
  switch (variant) {
    case "note":
      return <CircleAlert />;
    case "important":
      return <MessageSquareWarning />;
    case "caution":
      return <OctagonAlert />;
    case "tip":
      return <Lightbulb />;
    default:
      variant satisfies null | undefined;
      throw new Error(`Unhandled variant: ${variant}`);
  }
};

export const Alert = ({
  variant = defaultVariant,
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={cn(backgroundVariants({ variant, className }))}>
      <div className="bg-background/90 rounded-md p-4">
        <div className={cn("pb-2", textVariant({ variant }))}>
          <VariantIcon variant={variant} />
          {variant}
        </div>
        {children}
      </div>
    </div>
  );
};
