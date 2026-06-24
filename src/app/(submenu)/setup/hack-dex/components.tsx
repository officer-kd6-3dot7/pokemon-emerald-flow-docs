import { ExternalLink } from "~/components/external-link";
import { TitleMdx } from "~/components/title-mdx";
import { pages } from "~/lib/menu-items";

export const Title = () => <TitleMdx title={pages.setup["hack-dex"].title} />;

export const HackDexLink = () => (
  <ExternalLink href="https://www.hackdex.app/hack/pokemon-emerald-flow">
    Hack Dex
  </ExternalLink>
);
