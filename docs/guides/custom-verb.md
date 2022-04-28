# Custom Verb

## Create GraphQL Spec

Add `.sdl` file in `src` directory. For example, `src/verbs/createUserWithCart`.

```graphql
extend type Mutation {
  CreateUserWithCart (
    data: UserCreateWithoutCartInput!,
  ): User!,
}
```

## Run Generator

Then run `npx prisma generate`.

## Implement resolver

`npm run todo`

```typescript
import { Context, Resolvers } from "./utils";

// resolver functions

export async function CreateUserWithCart(
  parent: any,
  args: any,
  context: Context,
  info: any,
): Promise<User> {
  const { prisma } = context;
  // TODO: Implement resolver 'CreateUserWithCart'
  // [Prisma Transactions](https://www.prisma.io/docs/guides/performance-and-optimization/prisma-client-transactions-guide)
  return undefined as unknown as User;
}

// resolver type exports

const Mutation = {
  CreateUserWithCart,
};

export const resolvers: Resolvers = {
  Mutation,
};
```

import `User`.

See `src/schema.ts`.
