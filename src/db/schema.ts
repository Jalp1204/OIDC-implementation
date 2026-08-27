import {
  boolean,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id")
    .primaryKey()
    .defaultRandom(),

  firstName: varchar("first_name", {
    length: 50,
  }),

  lastName: varchar("last_name", {
    length: 50,
  }),

  email: varchar("email", {
    length: 320,
  })
    .notNull()
    .unique(),

  emailVerified: boolean("email_verified")
    .notNull()
    .default(false),

  passwordHash: text("password_hash"),

  profileImageUrl: text("profile_image_url"),

  createdAt: timestamp("created_at")
    .notNull()
    .defaultNow(),

  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow(),
});