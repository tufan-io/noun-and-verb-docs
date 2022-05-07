# Tutorials

?> This will walk you through building `GraphQL API` from scratch using
`Noun & Verb`!

## Shopping Cart

We are going to make simple `GraphQL API` for `E-commerce`. I use `Supabase`
here to get free `PostgreSQL` database.

### Prepare database

Make new project, copy connection string from
`Setting - Database - Connection string - Nodejs`, and past it to
`schema.prisma` or `.env`. Make sure you replace `[YOUR-PASSWORD]` of connection
string.

### Prepare Prisma Schema

?> If you are new to `Prisma`,
[Start from scratch](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch)
or
[Add to existing project](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project)
might be helpful.

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Level {
  Normal
  Vip
}

model User {
  id        String   @id @default(cuid())
  name      String
  email     String
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
  level     Level    @default(Normal)
  cart      Cart?
}

model Cart {
  id        String    @id @default(cuid())
  createdAt DateTime  @default(now())
  updatedAt DateTime  @default(now())
  user      User      @relation(fields: [userId], references: [id])
  userId    String    @unique
  items     Product[]
  coupon    String?
}

model Product {
  id        String   @id @default(cuid())
  name      String
  price     Int
  image     String
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
  carts     Cart[]
}
```

Let check we are coonnected to database properly by running
`npx prisma db push`. If everything goes well, you'll see tables are created in
`Supabase - table editor`. You can run `npx prisma studio` instead.

### Install `Noun & Verb`

```
npm i -D noun-and-verb
```

```prisma
generator noun_and_verb {
  provider = "noun_and_verb"
}
```

### Add Annotations

```prisma
/// @seed
model User {
  /// @readOnly
  id        String   @id @default(cuid())
  /// @mock faker.name.firstName
  name      String
  /// @scalar Email
  email     String
  /// @writeOnly
  password  String
  /// @readOnly
  createdAt DateTime @default(now())
  /// @readOnly
  updatedAt DateTime @default(now())
  level     Level    @default(Normal)
  cart      Cart?
}
```

```prisma
model Cart {
  /// @readOnly
  id        String    @id @default(cuid())
  /// @readOnly
  createdAt DateTime  @default(now())
  /// @readOnly
  updatedAt DateTime  @default(now())
  user      User      @relation(fields: [userId], references: [id])
  userId    String    @unique
  items     Product[]
  coupon    String?
}
```

```prisma
model Product {
  /// @readOnly
  id        String   @id @default(cuid())
  name      String
  price     Int
  image     String
  /// @readOnly
  createdAt DateTime @default(now())
  /// @readOnly
  updatedAt DateTime @default(now())
  carts     Cart[]
}
```

### Seeding

Note that database seeding is also happeneds with `npx prisma migrate dev` and
`npx prisma migrate reset`. You can learn about it in
[Integrated seeding with Prisma Migrate](https://www.prisma.io/docs/guides/database/seed-database#integrated-seeding-with-prisma-migrate).

?> [`Prisma Studio`](https://www.prisma.io/studio) is great way to check if the
database is properly seeded.

## Next

`Noun & Verb` is not only for initialization. In the process of development, you
will run `npx prisma generate` multiple times to generate boilerplate codes. If
you are interested, see [custom verb](guides/custom-verb) and
[custom mocker](guides/custom-mocker).
