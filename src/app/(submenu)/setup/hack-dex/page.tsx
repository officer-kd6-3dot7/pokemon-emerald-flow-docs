import { ExternalLink } from "~/components/external-link";

import { pages } from "~/lib/menu-items";

export default function Page() {
  return (
    <>
      <h2>{pages.setup["hack-dex"].title}</h2>
      <p>
        Hack Dex is an online web-based ROM hack patch hosting and patching
        platform. Here&apos;s a step-by-step process to patch your game with
        Hack Dex.
      </p>
      <ul>
        <li>
          <strong>Step 1</strong> : Head to Pokemon Emerald Flow&apso;s Hack Dex
          page by using the link mentioned below.
        </li>
        <ExternalLink href="https://www.hackdex.app/hack/pokemon-emerald-flow">
          Hack Dex
        </ExternalLink>
        <li>
          <strong>Step 2</strong>: On the main banner, click on &ldquo;Select
          Pokémon Emerald ROM&rdquo;.
        </li>
        <li>
          <strong>Step 3</strong>: Submit your
          <strong>Official Pokémon Emerald</strong> ROM as the ROM file.
        </li>
        <li>
          <strong>Step 4</strong>: On the main banner, click on &ldquo;Agree and
          Download&rdquo;.
        </li>
        <li>
          <strong>Step 5</strong>: On the main banner, click on &ldquo;Patch
          Now&rdquo; and you&apso;re done!
        </li>
      </ul>
    </>
  );
}
