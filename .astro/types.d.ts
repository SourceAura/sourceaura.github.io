declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"petals": {
"00-nemo/index.mdx": {
	id: "00-nemo/index.mdx";
  slug: "00-nemo";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".mdx"] };
"01-spot-eye-see/index.md": {
	id: "01-spot-eye-see/index.md";
  slug: "01-spot-eye-see";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"02-golang/index.md": {
	id: "02-golang/index.md";
  slug: "02-golang";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"03-supremacy/index.md": {
	id: "03-supremacy/index.md";
  slug: "03-supremacy";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"04-dream-vs-reality/index.md": {
	id: "04-dream-vs-reality/index.md";
  slug: "04-dream-vs-reality";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"05-web-dev/index.mdx": {
	id: "05-web-dev/index.mdx";
  slug: "05-web-dev";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".mdx"] };
"06-learning-astro-lua/index.md": {
	id: "06-learning-astro-lua/index.md";
  slug: "06-learning-astro-lua";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"07-axols/index.md": {
	id: "07-axols/index.md";
  slug: "07-axols";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"08-project-1/index.md": {
	id: "08-project-1/index.md";
  slug: "08-project-1";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"09-project-2/index.md": {
	id: "09-project-2/index.md";
  slug: "09-project-2";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"10-project-3/index.md": {
	id: "10-project-3/index.md";
  slug: "10-project-3";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"11-project-4/index.md": {
	id: "11-project-4/index.md";
  slug: "11-project-4";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"12-project-5/index.md": {
	id: "12-project-5/index.md";
  slug: "12-project-5";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"77-whoami/index.md": {
	id: "77-whoami/index.md";
  slug: "77-whoami";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
"99-draft/index.md": {
	id: "99-draft/index.md";
  slug: "99-draft";
  body: string;
  collection: "petals";
  data: InferEntrySchema<"petals">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
