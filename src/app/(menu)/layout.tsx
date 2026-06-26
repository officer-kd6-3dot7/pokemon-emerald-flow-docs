import type { PropsWithChildren } from "react";
import { PageWrapper } from "~/components/page-wrapper";

export default function Layout(props: PropsWithChildren) {
  return (
    <PageWrapper className="mt-7 md:mt-17 md:min-h-[calc(100dvh-12rem)]">
      {props.children}
    </PageWrapper>
  );
}
