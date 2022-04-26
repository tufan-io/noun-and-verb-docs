# Quick start

## Write `Prisma schema`

```
npx prisma init
```

## Add annotations to `Prisma schema`

See [annotations guide](../guides/annotations.md).

## Prepare Database

[Supported databases](https://www.prisma.io/docs/reference/database-reference/supported-databases)

```
npx prisma db push
```

```
npx prisma migrate dev
```

[Choosing db push or Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push#choosing-db-push-or-prisma-migrate)

## Run generator

```
npx prisma generates
```

This takes some time at first, but it is much faster after the first run.

## Seeding Database

```
npx prisma db seed
```

## (Optional) Run `Prisma Studio`

## Run

```
npm run dev
```

```
npm run start
```
