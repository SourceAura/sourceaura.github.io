import type { Socials } from "@types";

interface Metadata {
  TITLE: string;
  DESCRIPTION: string;
  GITHUB?: string; // Make GITHUB optional
  TWITTER?: string; // Make TWITTER optional
  MASTODON?: string; // Make MASTODON optional
}

export const SITE = {
  TITLE: "sourceaura",
  ALIAS: "nagareboshi",
  DESCRIPTION: "euthymia [ eu·​thy·​mia] (noun): ",
  DEFINITION: "a normal, tranquil mental state or mood.",
  SEO_DESCRIPTION:
    "sourceaura: a sandbox of poetry and programming. Interactive experiments, notes, and projects, built with Astro.",
  NUM_POSTS_ON_HOMEPAGE: 7,
  NUM_PROJECTS_ON_HOMEPAGE: 7,
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
  DESCRIPTION: SITE.SEO_DESCRIPTION,
  GITHUB: "github.com/sourceaura",
  TWITTER: "twitter.com/sourceaura",
  MASTODON: "mastodon.social/@SourceAura",
};

export const PETALS: Metadata = {
  TITLE: "petals",
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
