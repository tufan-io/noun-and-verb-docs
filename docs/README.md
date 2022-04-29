- If you think there's something to be improved, please leave an issue
  [here](https://github.com/tufan-io/noun-and-verb-docs).

# What is `Noun & Verb`?

?> **TL;DR** : Code generator that bridges `Prisma ORM` and `GraphQL API`.

`Noun & Verb` is
[`Prisma generator`](https://www.prisma.io/docs/concepts/components/prisma-schema/generators)
which provides a workflow for developers to write less code for developing
`GraphQL API` without adding an extra abstraction layer. It can scale from quick
prototyping to enterprise scale software development.

TODO what is Noun and Verb

# Why `Noun & Verb`?

> Is `Noun & Verb` some tool like `Nexus` or `TypeGraphQL`?

We considered enterprise-scale users from day one.

# Features

?> Uses [8 annotations](guides/annotations.md) on `Prisma Schema`.

## GraphQL API

- Fully functionomg CRUD GraphQL API
- Custom GraphQL queries and mutations

## Wide range of Scalars with extensibility

- A wide range of `scalars` via
  [`validator.js`](https://github.com/validatorjs/validator.js)
- Custom scalars (beyond those provided by
  [`validator.js`](https://github.com/validatorjs/validator.js))

## Seeding (TODO fancy words)

- Field level mock data via [`faker.js`](https://github.com/Marak/Faker.js)
- Custom mock functions

?> You might want to check out our [Philosophy](/philosophy.md),
[Roadmap](/roadmap.md) and [Technical Explanation](/technical-explanation.md).
