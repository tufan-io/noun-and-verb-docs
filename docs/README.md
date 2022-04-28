- If you think there's something to be improved, please leave an issue
  [here](https://github.com/tufan-io/noun-and-verb-docs).

# What is `Noun & Verb`?

?> **TL;DR** : Code generator that bridges `Prisma ORM` and `GraphQL API`.

TODO what is Noun and Verb

`Noun & Verb` is
[`Prisma generator`](https://www.prisma.io/docs/concepts/components/prisma-schema/generators)
which provides a workflow for developers to write less code for developing
GraphQL API without adding an extra abstraction layer. It can scale from quick
prototyping to enterprise scale software development.

- Uses 8 annotations on `Prisma Schema` to generate a CRUD GraphQL API server
- Out of the Box support for:
  - Basic CRUD GraphQL API (generates fully functional resolvers)
  - A wide range of `scalars` via
    [`validator.js`](https://github.com/validatorjs/validator.js)
  - Field level mock data via [`faker.js`](https://github.com/Marak/Faker.js)
- Supports extensibility (by generated scaffolding code)
  - Custom GraphQL queries and mutations
  - Custom scalars (beyond those provided by
    [`validator.js`](https://github.com/validatorjs/validator.js))
  - Custom directives
  - Custom mock functions

# FAQs

> Is `Noun & Verb` some tool like `Nexus` or `TypeGraphQL`?

TBD

> Who should use `Noun & Verb`?

Anyone.

We considered enterprise-scale users from day one.

TBD

# Philosophy

## Minimal specification

The user should have to use the smallest number of key-strokes to specify their
intent.

## No black magic

All generated code that wires things together should be visible in plain sight
and as minimal as possible.

There aren't any `Noun & And` specific code in the generated code.

## Customization

Every possible customization provided by the underlying libraries, should be
made available to the user. Where possible, `Noun & Verb` will generate the
appropriate boiler-plate code, making it a fill-in-the-blanks exercise.

# Technical Explanation

`Noun & Verb` builds upon battle tested open-source modules, and outside the
annotations in the prisma schema, does not introduce any code artifacts. It
builds upon leading battle-tested libraries in the open source and wires them
together.

## Prisma

Used for `GraphQL` resolver.

## Apollo Server + Micro

Current default. Might support others in future.

## [Envelop](https://www.envelop.dev)

For `@oneOf`. You can apply [other plugins](guides/plugins.md).

## Validator

For `GraphQL` scalar.

## Faker

To creating mock data.

## Leasot

Todo

# Roadmap

- Generate UI
- Generate State machine (Xstate)
- Studio app including schema visualization
