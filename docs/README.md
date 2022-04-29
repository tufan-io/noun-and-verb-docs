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

?> All theses features are enabled by **adding**
[8 annotations](guides/annotations.md) on `Prisma Schema`.

`Noun & Verb` does not own the code. It generates code for you.

**These are 3 things we currently generate.**

## Generate GraphQL API

- Out of box
  - **Fully functioning** CRUD `GraphQL API`
  - Wide range of `GraphQL Scalars` via
    [`validator.js`](https://github.com/validatorjs/validator.js)
- Extensible
  - **Generate boilerplate code** for custom `GraphQL` operations
  - Support for custom scalars

## Generate Test Cases

- **Fully functioning**, 100% test coverage
- All CRUD `GraphQL` operations are tested against **actual database**

## Generare Seeders

- Entire database can be seeded **without writing seed scripts manually**
- Out of box support for [`faker.js`](https://github.com/Marak/Faker.js) for
  field level mock data
- Support for custom mock functions

?> You might want to check out our [Philosophy](/philosophy.md),
[Roadmap](/roadmap.md) and [Technical Explanation](/technical-explanation.md).
