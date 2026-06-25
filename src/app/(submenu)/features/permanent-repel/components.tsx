import { TitleMdx } from "~/components/title-mdx";
import { PageHero } from "~/components/page-hero";
import { pages } from "~/lib/menu-items";
import type { PropsWithChildren } from "react";
import { FeatureNotes } from "~/components/feature-notes";

export const Title = () => (
  <TitleMdx title={pages.features["permanent-repel"].title} />
);

export const Hero = (props: PropsWithChildren) => (
  <PageHero src="/repel.webp" alt="Repel item sprite" blobSize="size-[200px]">
    {props.children}
  </PageHero>
);

export const Notes = (props: PropsWithChildren) => (
  <FeatureNotes
    bgColor="bg-emerald-800"
    borderColor="border-emerald-600"
    textColor="text-emerald-600"
  >
    {props.children}
  </FeatureNotes>
);

export const Encounters = (props: PropsWithChildren) => (
  <FeatureNotes.Note src="/pokeball.webp" alt="Pokeball item sprite">
    {props.children}
  </FeatureNotes.Note>
);
