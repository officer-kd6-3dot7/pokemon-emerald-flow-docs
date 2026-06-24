import { ExternalLink } from "~/components/external-link";
import { TitleMdx } from "~/components/title-mdx";
import { pages } from "~/lib/menu-items";

export const Title = () => (
  <TitleMdx title={pages.setup["rom-patcher-js"].title} />
);

export const RepositoryLink = () => (
  <ExternalLink href="https://www.github.com/officer-kd6-3dot7/pokemon-emerald-flow">
    Pokemon Emerald Flow
  </ExternalLink>
);

export const RomPatcherJSLink = () => (
  <ExternalLink href="https://www.marcrobledo.com/RomPatcher.js">
    ROM Patcher JS
  </ExternalLink>
);
