# Quick start

?> This will give you idea of how using `Noun & Verb` feels like. For detailed
example, go to [`tutorial`](getting-started/tutorials.md).

## Installation

`Noun & Verb` can be installed from `npm`.

```
npm i -D noun-and-verb
```

After you install it, you need to add this to schema.

```prisma
generator noun_and_verb {
  provider = "noun_and_verb"
}
```

?> If you are new to `Prisma`,
[Start from scratch](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch)
or
[Add to existing project](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project)
might be helpful.

## Add Annotations

To see bigger example, see [tutorials](getting-started/tutorials.md). To learn
about **8 annotations**, see [Annotations Guide](guides/annotations.md).

```prisma
/// @seed
model User {
  /// @readOnly
  id      Int      @id @default(autoincrement())
  profile Profile?
}

model Profile {
  /// @readOnly
  id     Int  @id @default(autoincrement())
  user   User @relation(fields: [userId], references: [id])
  userId Int 
}
```

## Run generator

```
npx prisma generate
```

This takes some time at first to install dependencies. but it is **much faster
after the first run.**

## Seed Database

```
npx prisma db seed
```

When you run `npx prisma generate`, `Noun & Verb` generates seed scripts
alongside with API server and test cases. You can run seed scripts by
`npx prisma db seed`.

Note that database seeding is also happeneds with `npx prisma migrate dev` and
`npx prisma migrate reset`. You can learn about it in
[Integrated seeding with Prisma Migrate](https://www.prisma.io/docs/guides/database/seed-database#integrated-seeding-with-prisma-migrate).

?> [`Prisma Studio`](https://www.prisma.io/studio) is great way to check if the
database is properly seeded.

## Run Server

```
npm run dev
```

Now go to `http://localhost:1234` to play with it!
