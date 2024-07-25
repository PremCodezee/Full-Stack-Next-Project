import { z } from "zod";

export const MessageSchema = z.object({
  content: z
    .string()
    .min(1, { message: "Message is required" })
    .max(255, { message: "Message must be less than 255 characters" }),
});
