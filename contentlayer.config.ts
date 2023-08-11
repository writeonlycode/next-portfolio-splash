import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";

export const Menu = defineDocumentType(() => ({
  name: "Menu",
  description: "",
  contentType: "data",
  filePathPattern: "/config/menu.yaml",
  isSingleton: true,
  fields: {
    entries: { type: "list", of: Link, required: true },
  },
}));

export const Link = defineNestedType(() => ({
  name: "Link",
  description: "",
  fields: {
    label: { type: "string", required: true },
    link: { type: "string", required: true },
  },
}));

export const Hero = defineDocumentType(() => ({
  name: "Hero",
  description: "",
  contentType: "data",
  filePathPattern: "/data/hero.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    social: { type: "list", of: IconLink, required: true },
  },
}));

export const IconLink = defineNestedType(() => ({
  name: "IconLink",
  description: "",
  fields: {
    label: { type: "string", required: true },
    icon: { type: "string", required: true },
    link: { type: "string", required: true },
  },
}));

export default makeSource({ contentDirPath: "content", documentTypes: [Menu, Hero] });
