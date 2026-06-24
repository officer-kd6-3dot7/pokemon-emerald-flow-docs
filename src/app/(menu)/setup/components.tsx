import type { PropsWithChildren } from "react";
import { PageHero } from "~/components/page-hero";
import { MutedLink } from "~/components/muted-link";
import { TitleMdx } from "~/components/title-mdx";
import { pages } from "~/lib/menu-items";

export const Title = () => <TitleMdx title={pages.setup.title} />;

export const Hero = (props: PropsWithChildren) => (
  <PageHero
    src="/setup.webp"
    alt="Brendan infront of Professor Birch's Bag Sprite"
  >
    {props.children}
  </PageHero>
);

export const RomsPatcherJSPageLink = () => (
  <MutedLink
    link={{ href: pages.setup["rom-patcher-js"].url }}
    muted={{ size: "medium" }}
  >
    {pages.setup["rom-patcher-js"].title}
  </MutedLink>
);

export const HackDexPageLink = () => (
  <MutedLink
    link={{ href: pages.setup["hack-dex"].url }}
    muted={{ size: "medium" }}
  >
    {pages.setup["hack-dex"].title}
  </MutedLink>
);
