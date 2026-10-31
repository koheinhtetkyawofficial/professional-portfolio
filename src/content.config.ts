import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const projects = defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/projects'}),schema:z.object({title:z.string(),category:z.string(),summary:z.string(),date:z.string().optional(),image:z.string().optional(),featured:z.boolean().default(false)})});
const experience = defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/experience'}),schema:z.object({title:z.string(),company:z.string(),period:z.string(),category:z.string(),order:z.number().default(0)})});
const services = defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/services'}),schema:z.object({title:z.string(),summary:z.string(),order:z.number().default(0)})});
export const collections={projects,experience,services};
