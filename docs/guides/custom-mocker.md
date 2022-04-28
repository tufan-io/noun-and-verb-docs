# Custom Mocker

?>This is useful when you **can't find one you need** in the
[List of supported faker properties](data/supported-faker).

## Independent / Dependent Mocker

?> All built-in mockers are **independent**, and custom mockers are
**dependent**

**Independent mockers can not use data of other fields, but dependent mocker
can.** For example, this is useful if you have `firstName`, `lastName` and
`fullName` field. `fullName` should be computed from `firstName` and `lastName`
field.

## Add mocker to Schema

?> Built-in mockers use **'faker' perfix**, and custom mockers use **'mock'
prefix**

```prisma
/// @mock faker.name.firstName
firstName String
/// @mock faker.name.lastName
lastName String
/// @mock mocker.fullName
fullName String
```

## Run Generator

?> Boilerplate code for custom mocker function will be generated with
`npx prisma generate`

Run `npm run todo` to check find out file you need to fill in.

## Implement mocker

```ts
// src/__tests__/fixtures/seeder/mocker/${modelName}/${fullName}.ts

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
