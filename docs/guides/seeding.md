# Seeding

!> You should add [@seed](guides/annotations?id=seed) before running
`npx prisma generate` to generate seeders.

```prisma
model User {
  id        String   @id @default(cuid())
  cart      Cart?
}

model Cart {
  id        String    @id @default(cuid())
  user      User      @relation(fields: [userId], references: [id])
  userId    String    @unique
  items     Product[]
}

model Product {
  id        String   @id @default(cuid())
  carts     Cart[]
}
```

![shopping](../image/seed/shopping.svg)

```prisma
model Post {
  id         Int        @id @default(autoincrement())
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  posts Post[]
}
```

![many-to-many](../image/seed/many-to-many.svg)

```shell
npx prisma studio
```
