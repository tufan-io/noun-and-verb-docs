# Tutorials

?> This will walk you through building GraphQL API server from scratch using
`Noun & Verb`!

## Shopping Cart

### `Prisma Schema` + `Annotations`

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./db.sqlite"
}

generator client {
  provider = "prisma-client-js"
}

generator noun_and_verb {
  provider = "noun_and_verb"
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

```
npm run todo
```
