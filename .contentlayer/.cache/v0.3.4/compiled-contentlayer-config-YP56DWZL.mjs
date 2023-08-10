// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
var Hero = defineDocumentType(() => ({
  name: "Hero",
  description: "",
  contentType: "data",
  filePathPattern: "/data/hero.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    social: { type: "list", of: IconLink, required: true }
  },
  computedFields: {}
}));
var IconLink = defineNestedType(() => ({
  name: "IconLink",
  description: "",
  fields: {
    label: { type: "string", required: true },
    icon: { type: "string", required: true },
    link: { type: "string", required: true }
  },
  computedFields: {}
}));
var contentlayer_config_default = makeSource({ contentDirPath: "content", documentTypes: [Hero] });
export {
  Hero,
  IconLink,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YP56DWZL.mjs.map
