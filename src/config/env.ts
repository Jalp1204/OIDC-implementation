import "dotenv/config";

function requiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",

  PORT: Number(process.env.PORT ?? 8000),

  DATABASE_URL: requiredEnv("DATABASE_URL"),

  OIDC_ISSUER: requiredEnv("OIDC_ISSUER"),
};