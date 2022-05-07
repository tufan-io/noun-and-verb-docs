# Envelop Plugins

We currently use [`envelop`](https://github.com/dotansimha/envelop) for `@oneOf`
support.

## @oneOf

```typescript
// @prisma/client
export type CartCreateArgs = {
  select?: CartSelect | null;
  include?: CartInclude | null;
  data: XOR<CartCreateInput, CartUncheckedCreateInput>;
};
```

```graphql
input CartCreateInput @oneOf {
  nested: CartNestedCreateInput,
  relational: CartUnnestedCreateInput,
}
```

```typescript
const getEnveloped = envelop({
  plugins: [
    useExtendedValidation({
      rules: [OneOfInputObjectsRule],
    }),
    useSchema(schema),
  ],
});
```

## Using Other Plugins

?> You can add [plugins](https://www.envelop.dev/plugins) easily by modifying
`getEnveloped` in `src/server.ts`

For example, if you want to add
[@envelop/sentry](https://www.envelop.dev/plugins/use-sentry), your
`genEnveloped` should be modified like below.

```typescript
const getEnveloped = envelop({
  plugins: [
    ...,
    useSentry({
      ...
    }),
  ],
});
```
