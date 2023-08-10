import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";

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
  computedFields: {},
}));

export const IconLink = defineNestedType(() => ({
  name: "IconLink",
  description: "",
  fields: {
    label: { type: "string", required: true },
    icon: { type: "string", required: true },
    link: { type: "string", required: true },
  },
  computedFields: {},
}));

export default makeSource({ contentDirPath: "content", documentTypes: [Hero] });
