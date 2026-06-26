import { Hero } from "~/components/hero";
import { pages } from "~/lib/menu-items";
import { FeatureNotes } from "~/components/feature-notes";

export default function Page() {
  return (
    <>
      <h2>{pages.features["permanent-repel"].title}</h2>
      <Hero src="/repel.webp" alt="Repel item sprite" blobSize="size-[200px]">
        <p>
          <strong>Permanent Repel</strong> lets you toggle Repel effects on or
          off without repeatedly using any Repel items.
        </p>
        <p>
          It behaves just like a standard Repel, but stays active until you
          choose otherwise.
        </p>
      </Hero>
      <FeatureNotes
        bgColor="bg-emerald-800"
        borderColor="border-emerald-600"
        textColor="text-emerald-600"
      >
        <FeatureNotes.Note src="/pokeball.webp" alt="Pokeball item sprite">
          <strong>Encounters</strong> Wild Pokémon with a higher level than your
          lead Pokémon can still appear.
        </FeatureNotes.Note>
      </FeatureNotes>
    </>
  );
}
