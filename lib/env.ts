import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  SITE_URL: z.string().url().default('https://moverz.fr'),
  PORT: z.string().optional().default('3040').transform(val => parseInt(val, 10)),
  OPENAI_API_KEY: z.string().optional(),
  NEXT_TELEMETRY_DISABLED: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

export const env = parsed.data;

