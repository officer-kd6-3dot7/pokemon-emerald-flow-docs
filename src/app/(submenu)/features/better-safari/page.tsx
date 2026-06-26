import { Hero } from "~/components/hero";
import { pages } from "~/lib/menu-items";

export default function Page() {
  return (
    <>
      <h2>{pages.features["better-safari"].title}</h2>
      <Hero
        src="/birch.webp"
        alt="Professor Birch introduction screen sprite"
        blobBgColor="bg-amber-500"
        className="w-48 md:w-56"
      >
        <p>
          <strong>Pokemon Emerald Flow</strong> is an enhancement project built
          for and on top of <em>Pokémon Emerald</em>. Its goal is simple:
          respect player choices, reduce friction, modernize when necessary, and
          retain the core experience.
        </p>
        <p>Just classic Emerald, but you set the flow of the game.</p>
      </Hero>
    </>
  );
}
