import 'dotenv/config'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  // Use process.env here so `prisma generate` doesn't fail when DATABASE_URL
  // is not set (e.g., local type generation during `npm install`).
  datasource: {
    url: process.env.DATABASE_URL ?? '',
    // shadowDatabaseUrl: process.env.SHADOW_DATABASE_URL ?? undefined,
  },
})
