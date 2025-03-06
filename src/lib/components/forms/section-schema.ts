import { z } from "zod";
// import { zfd } from "zod-form-data";

export const sectionSchema = z.object({
	id:z.string(),
    title: z.string().min(8).max(256),
	parentSectionId: z.string(),
	// parentSection: z.number(),
	description: z.string().optional(),
	sectionIdentifier: z.string().optional(),
	// sequence: z.string().optional(),
});

export type SectionSchema = typeof sectionSchema;