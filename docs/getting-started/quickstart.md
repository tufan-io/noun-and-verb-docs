# Quick start

?> This will give you idea of how using `Noun & Verb` feels like. For detailed
example, go to [`tutorial`](getting-started/tutorials.md).

## Write Schema

```
npx prisma init
```

- [Prisma schema](https://www.prisma.io/docs/concepts/components/prisma-schema)
- [Data sources](https://www.prisma.io/docs/concepts/components/prisma-schema/data-sources)
- [Supported databases](https://www.prisma.io/docs/reference/database-reference/supported-databases)
- [Choosing db push or Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push#choosing-db-push-or-prisma-migrate)

## Add annotations to Schema

See [annotations guide](../guides/annotations.md).

## Run generator

```
npx prisma generate
```

This takes some time at first, but it is much faster after the first run.

## Seeding Database

```
npx prisma db seed
```

```
npx prisma studio
```

- [Integrated seeding with Prisma Migrate](https://www.prisma.io/docs/guides/database/seed-database#integrated-seeding-with-prisma-migrate)
- [Prisma Studio](https://www.prisma.io/studio)

## Run Server

```
npm run dev
```

```
npm run start
```
