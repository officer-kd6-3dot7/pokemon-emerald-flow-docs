import { ExternalLink } from "~/components/external-link";

import { pages } from "~/lib/menu-items";

export default function Page() {
  return (
    <>
      <h2>{pages.setup["rom-patcher-js"].title}</h2>
      <p>
        Rom Patcher JS is an online web-based ROM patcher. Here&apos;s a
        step-by-step process to patch your game with Rom Patcher JS.
      </p>
      <ul>
        <li>
          <strong>Step 1</strong>: Head to Pokemon Emerald Flow&apos;s Github
          repository by using the link mentioned below.
        </li>
        <ExternalLink href="https://www.github.com/officer-kd6-3dot7/pokemon-emerald-flow">
          Pokemon Emerald Flow
        </ExternalLink>
        <li>
          <strong>Step 2</strong>: Head for the latest release in the
          <strong>Releases</strong> section.
        </li>
        <li>
          <strong>Step 3</strong>: Scroll down and under <strong>Assets</strong>{" "}
          download the latest released
          <strong>&ldquo;pokemon-emerald-flow.ips&rdquo;</strong>
          file.
        </li>
        <li>
          <strong>Step 4</strong>: Head to Rom Patcher JS&apos; website by using
          the link mentioned below.
        </li>
        <ExternalLink href="https://www.marcrobledo.com/RomPatcher.js">
          ROM Patcher JS
        </ExternalLink>
        <li>
          <strong>Step 5</strong>: Submit your
          <strong>Official Pokémon Emerald</strong>
          ROM as the ROM file.
        </li>
        <li>
          <strong>Step 6</strong>: Submit the
          <strong>&ldquo;pokemon-emerald-flow.ips&rdquo;</strong> file as the
          Patch file.
        </li>
        <li>
          <strong>Step 7</strong>: Click on &ldquo;Apply patch&rdquo; and
          you&apos;re done!
        </li>
      </ul>
    </>
  );
}
