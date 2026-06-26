import { Alert } from "~/components/alerts";
import { Hero } from "~/components/hero";
import { MutedLink } from "~/components/muted-link";

import { pages } from "~/lib/menu-items";

export default function Page() {
  return (
    <>
      <h2>{pages.setup.title}</h2>
      <Hero
        src="/setup.webp"
        alt="Brendan infront of Professor Birch's Bag Sprite"
        blobBgColor="bg-green-500"
      >
        <p>
          <strong>Pokemon Emerald Flow</strong> is designed to be reverse
          compatible with the original <em>Pokémon Emerald</em>.
        </p>
        <p>
          However, save data is valuable, and mistakes happen. Make regular
          backups of your save files and always create one before moving an
          existing game to Emerald Flow.
        </p>
      </Hero>
      <Alert variant="important">
        Since Pokemon Emerald Flow is distributed as a patch, you&apos;ll need
        <strong>
          &ldquo;LEGALLY OBTAINED COPY OF AN ORIGINAL POKÉMON EMERALD ROM&rdquo;
        </strong>
        .
      </Alert>
      <Alert variant="caution">
        <strong>
          DO NOT ATTEMPT TO PATCH AN ALREADY MODIFIED OR PATCHED ROM.
        </strong>
      </Alert>
      <Alert>
        When launching Pokemon Emerald Flow for the first time, all game options
        will be <strong>RESET</strong> to their <strong>DEFAULT VALUES</strong>.
        This only happens <strong>ONCE</strong>. If you&apos;re curious about
        the default settings, head over to the Features section for a complete
        overview.
      </Alert>
      <p>The following pages cover two ways to set up your game:</p>
      <ul>
        <li>
          <MutedLink
            link={{ href: pages.setup["rom-patcher-js"].url }}
            muted={{ size: "medium" }}
          >
            {pages.setup["rom-patcher-js"].title}
          </MutedLink>
        </li>
        <li>
          <MutedLink
            link={{ href: pages.setup["hack-dex"].url }}
            muted={{ size: "medium" }}
          >
            {pages.setup["hack-dex"].title}
          </MutedLink>
        </li>
      </ul>
    </>
  );
}
