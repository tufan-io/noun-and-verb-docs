# Tutorials

?> This will walk you through building `GraphQL API` from scratch using
`Noun & Verb`!

## Shopping Cart

We are going to make simple `GraphQL API` for `E-commerce`.

### Prepare Prisma Schema

?> If you are new to `Prisma`,
[Start from scratch](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch)
or
[Add to existing project](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project)
might be helpful.

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./db.sqlite"
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(cuid())
  name      String
  email     String
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
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
  /// @createOnly
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

### .

```
npm run todo
```
