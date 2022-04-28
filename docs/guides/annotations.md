# Annotations

!> To add `Noun & Verb`'s annotations to `Prisma schema`, you should use
[`///` instead of `//`](https://www.prisma.io/docs/concepts/components/prisma-schema#comments)

`Noun & Verb` works by adding 8 annotations to
[`Prisma schema`](https://www.prisma.io/docs/concepts/components/prisma-schema).

```prisma
// Possible position : Enum / Enum value / Model / Field

// Enum
enum Type {
    // Enum value
    Buyer
    // Enum value
    Seller
}

// Model
model User {
    // Field
    id        String   @id @default(cuid())
    // Field
    type      Type
```

## @readOnly

?> **Position: Field / No arguments**

Extends SQL semantics, designates the field as readOnly. Which means this field
does not appear in the Create and Update input type definitions in the GraphQL
schema.

This annotation is useful to mark server generated fields - id, timestamps and
such.

```prisma
/// @readOnly
createdAt DateTime @default(now())
```

## @createOnly

?> **Position: Field / No arguments**

Extends SQL semantics, designates the field as createOnly. This field only shows
up in the Create input type

This annotation is useful to mark fields that are creational in nature. Fields
that can only be modified by deleting and recreating the database row.

```prisma
/// @createOnly
id        String   @id @default(cuid())
```

## @writeOnly

?> **Position: Field / No arguments**

Extends SQL semantics, designates the field as writeOnly. This field only shows
up in the Create and Update input types, but missing from the Read types.

```prisma
/// @writeOnly
password  String
```

## @mock

?> **Position: Field / 1 required argument**

`Noun & Verb` uses [faker.js](https://fakerjs.dev/) for built-in mock data
generation. Currently, it supports
[155 data values](../data/supported-faker.md).

The supported faker values are specified as

```prisma
/// @mock faker.name.firstname
firstName String
```

You can create [custom mocker](guides/custom-mocker.md) too.

## @seed

?> **Position: Model / 1 optional argument**

!> We recommend reading [seeding guide](guides/seeding.md) before using it

Since relational databases cannot be guaranteed to be directed-acyclic-graphs,
we use the `@seed` annotation on models, to define which models to use as roots
of the seeding tree for mock data. A depth first, cycle avoiding walk is
performed of from each seed node. Field level `@mock` annotations are used to
generate the actual mock data.

The `@seed` implementation means that for many-to-many relations, mock data is
generated as one-to-many. One should provide `@seed` annotations to trigger mock
data generation in both directions.

`@seed` typically assumes that root level models have 100 items per table and
relationships have between 0/1-20 elements. This is done to create sufficient
data to trigger pagination examples in API usage, without overwhelming the mock
database. This is however controllable. `@seed` is the only annotations that
takes a JSON5 string as an argument to enable this.

```prisma
/// @seed {count: 100, min: 1, max: 100}
model User {
```

If count is specified, it overrides. Else a random number between min and max is
used to generate a number of mock instances.

## @scalar

?> **Position: Field / 1 required argument**

Designates a "format" for the field, per GraphQL specifications. Defines the
serialization/de-serialization/validation criteria for the field values.

```prisma
/// @scalar Email
email     String
```

`Noun & Verb` supports [76 scalar types](../data/supported-scalars.md)
out-of-the-box. Using any of these values for the scalar, will generate an
appropriate scalar file properly wired up to use
[validator.js](https://www.npmjs.com/package/validator) for validating value.

## @directive

?> **Position: Field, Enum / User define arguments**

!> This is still experimental. Use at your own risk

TBD

## @default

?> **Position: Field / No arguments**

!> Working in process. Do not use.
