import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

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
    link: { type: "string", required: false },
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

export const About = defineDocumentType(() => ({
  name: "About",
  description: "",
  contentType: "data",
  filePathPattern: "/data/about.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    text: { type: "string", required: true },
    buttons: { type: "list", of: Link, required: true },
    image: { type: "string", required: true },
  },
}));

export const Skills = defineDocumentType(() => ({
  name: "Skills",
  description: "",
  contentType: "data",
  filePathPattern: "/data/skills.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    text: { type: "string", required: true },
    entries: { type: "list", of: SkillEntry, required: true },
    image: { type: "string", required: true },
  },
}));

export const SkillEntry = defineNestedType(() => ({
  name: "Skill",
  description: "",
  fields: {
    label: { type: "string", required: true },
    value: { type: "number", required: true },
  },
}));

export const Projects = defineDocumentType(() => ({
  name: "Projects",
  description: "",
  contentType: "data",
  filePathPattern: "/data/projects.yaml",
  isSingleton: true,
  fields: {
    entries: { type: "list", of: Project, required: true },
  },
}));

export const Project = defineNestedType(() => ({
  name: "Project",
  description: "",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: true },
    text: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    links: { type: "list", of: IconLink, required: true },
    image: { type: "string", required: true },
  },
}));

export const Contact = defineDocumentType(() => ({
  name: "Contact",
  description: "",
  contentType: "data",
  filePathPattern: "/data/contact.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    lead: { type: "string", required: true },
    button: { type: "string", required: true },
  },
}));

export const Site = defineDocumentType(() => ({
  name: "Site",
  description: "",
  contentType: "data",
  filePathPattern: "/config/site.yaml",
  isSingleton: true,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    social: { type: "list", of: IconLink, required: true },
    copyright: { type: "list", of: Link, required: true },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Site, Menu, Hero, About, Skills, Projects, Contact],
});
