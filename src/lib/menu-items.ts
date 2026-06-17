const separatorIn = " " as const;
const separatorOut = "-" as const;
const urlPrefix = "#" as const;
const sections = [
  ["Introduction", ["Welcome", "Goals"]],
  ["Installation", ["Rom Patcher JS", "Hack Dex"]],
  [
    "Features",
    [
      "Permanent Repel",
      "Running",
      "Level Cap",
      "Better Summary",
      "Physical-Special split",
      "Pocket Tutor",
      "Better Evolutions",
      "Adopt Eggs",
      "Pocket PC",
      "Pocket Heal",
      "Forget HMs",
      "Infinite TMs",
      "Pocket Mart",
      "1$ Items",
      "Pocket Bikes",
      "Auto Blend",
      "Custom Blend",
      "Badge Boost",
      "EV Training",
      "Catch Rate",
      "Fast Eggs",
      "Instant Fishing",
      "Always Feebas",
      "Better Safari",
      "No Fleeing Mons",
      "Instant Text",
      "Music",
    ],
  ],
  ["Credits", ["pret-pokeemerald", "Code", "Ideas"]],
] as const satisfies Sections;

const getUrl = <T extends string>(str: T) =>
  `${urlPrefix}${str.toLowerCase().replaceAll(separatorIn, separatorOut)}` as `${typeof urlPrefix}${KebabCase<T>}`;

const getMenuItems = <T extends Sections>(sections: T) =>
  sections.map(([section, subSections]) => ({
    title: section,
    url: getUrl(section),
    items: subSections.map((subSection) => ({
      title: subSection,
      url: getUrl(subSection),
    })),
  })) as MenuData<T>;

export const menuItems = getMenuItems(sections);

type Prettify<T> = {
  [k in keyof T]: T[k];
} & {};

type Section = [string, string[]];

type Sections = Section[];

type KebabCase<
  T extends string,
  U extends string = "",
> = T extends `${infer R extends string}${infer Rest}`
  ? R extends typeof separatorIn
    ? KebabCase<Rest, `${U}${typeof separatorOut}`>
    : KebabCase<Rest, `${U}${Lowercase<R>}`>
  : U;

type MenuItemContent<T extends string = string> = {
  title: T;
  url: `${typeof urlPrefix}${KebabCase<T>}`;
};

type MenuSubItems<
  T extends string[] = string[],
  U extends MenuItemContent[] = [],
> = T extends [infer R extends string, ...infer Rest extends string[]]
  ? MenuSubItems<Rest, [...U, Prettify<MenuItemContent<R>>]>
  : U;

type MenuItem<T extends Section, U extends unknown[] = []> = T extends [
  infer R extends string,
  infer S extends string[],
]
  ? [...U, Prettify<MenuItemContent<R> & { items: MenuSubItems<S> }>]
  : U;

type MenuData<T extends Sections, U extends unknown[] = []> = T extends [
  infer R extends Section,
  ...infer S extends Sections,
]
  ? MenuData<S, [...U, ...MenuItem<R>]>
  : U;
