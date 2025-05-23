import { PortableTextBlock } from "next-sanity";

export type Page = {
  id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
