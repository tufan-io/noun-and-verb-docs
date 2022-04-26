# Custom Mocker

It is possible to create custom mocker functions for data types not supported,
by using the mocker prefix, like so:

```
/// @mock mocker.title
title    String
```

When using a custom `mocker`, a typescript file is generated in
`src/__tests__/fixtures/seeder/mocker/${modelName}/title.ts`.

An additional nuance is that `faker` mocks are considered Independent mocks, in
that they do not rely on the field values of other fields to determine their
mock value.

All `mocker.*` mocks are treated as Dependent mocks, in that they _can_ depend
on mock values of other independent fields. This permits the example below,
where the firstName and lastName use regular `faker` functions, but a fullName
field can use a custom mock that depends upon these previously computed values.

The custom mocker functions are a single function that allow creation of
dependent values.

```
  /// @mock faker.name.firstName
  firstName String

  /// @mock faker.name.lastName
  lastName String

  /// @mock mocker.fullName
  fullName String
```

would generate a mocker function as shown below:

```ts
// src/__tests__/fixtures/seeder/mocker/${modelName}/fullName.ts

import * as Faker from "faker";
import { Independent } from "./${model}Generator";

export default async function (
  faker: Faker.FakerStatic,
  fields?: Independent,
  args?: string,
) {
  // TODO: implement mock data generator for '${model}.${name}'
  // The next line is what would have to be added by you, dear developer.
  return `${fields.firstname} ${fields.lastName}`;
}
```
