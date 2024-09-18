import type { Socials } from "@types";

// export type Metadata = {
//   TITLE: string;
//   ICON: string;
//   DESCRIPTION: string;
//   GITHUB?: string; // Add the GITHUB property with an optional modifier
//   TWITTER?: string;
//   MASTODON?: string;
// };

interface Metadata {
  TITLE: string;
  DESCRIPTION: string;
  GITHUB: string; // Add the GITHUB property with an optional modifier
  TWITTER: string;
  MASTODON: string;
}

export const SITE = {
  TITLE: "sourceaura",
  ALIAS: "nagerboshi",
  DESCRIPTION: "euthymia [ eu·​thy·​mia] (noun): ",
  DEFINITION: "a normal, tranquil mental state or mood.",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  EMAIL: "sourceaura@proton.me",
};

export const HERO: Metadata = {
  TITLE: "no:body",
  DESCRIPTION: "...no:body.",
  GITHUB: "github.com/sourceaura",
  TWITTER: "twitter.com/sourceaura",
  MASTODON: "mastodon.social/@SourceAura",
};

export const HOME: Metadata = {
  TITLE: "home",
  DESCRIPTION: "An accessible theme for Astro.",
  GITHUB: "github.com/sourceaura",
  TWITTER: "twitter.com/sourceaura",
  MASTODON: "mastodon.social/@SourceAura",
};

export const PETALS: Metadata = {
  TITLE: "petals",
  // TIMESTAMP: "2022-12-01",
  DESCRIPTION: "A collection of particles I am passionate about.",
  GITHUB: "github.com/sourceaura",
  TWITTER: "twitter.com/sourceaura",
  MASTODON: "mastodon.social/@SourceAura",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/sourceaura",
  },
  {
    NAME: "x",
    HREF: "https://twitter.com/sourceaura",
  },
  {
    NAME: "mastodon",
    HREF: "https://mastodon.social/@SourceAura",
  },
  {
    NAME: "email",
    HREF: "mailto:sourceaura@proton.me",
  },
];
