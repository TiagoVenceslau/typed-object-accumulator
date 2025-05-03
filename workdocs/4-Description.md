### Description

Typed Object Accumulator is a specialized TypeScript utility library designed to solve the common challenge of building complex objects incrementally while maintaining full type safety. Unlike traditional object manipulation in JavaScript, which often sacrifices type information when combining objects, this library preserves and evolves type definitions as you add properties.

#### Core Features

- **Type-Safe Property Accumulation**: The `ObjectAccumulator` class allows you to progressively add properties from multiple objects while TypeScript tracks the combined type information.

- **Immutable Design**: Each operation returns a new accumulator instance with updated type information, ensuring your data remains predictable and side-effect free.

- **Chainable API**: Methods can be chained together for a fluent, readable coding style when building complex objects.

- **Comprehensive Property Management**: Beyond simple accumulation, the library provides methods for checking property existence, removing properties, retrieving values, and iterating over accumulated data.

- **Full TypeScript Integration**: The library leverages TypeScript's advanced type system to provide autocompletion and type checking for all accumulated properties.

#### Key Components

The library consists of a single primary class, `ObjectAccumulator<T>`, which manages the accumulation of object properties and maintains type information. It provides methods for:

- Adding properties with `accumulate()`
- Retrieving values with `get()` or direct property access
- Checking property existence with `has()`
- Removing properties with `remove()`
- Getting all keys with `keys()`
- Getting all values with `values()`
- Getting the size with `size()`
- Clearing all properties with `clear()`
- Iterating over properties with `forEach()`
- Transforming properties with `map()`

#### Use Cases

Typed Object Accumulator is particularly useful for:

- Building configuration objects incrementally
- Combining data from multiple sources with type safety
- Creating complex state objects in a functional programming style
- Managing form data with evolving structure
- Implementing builder patterns with full type information

By using Typed Object Accumulator, developers can enjoy the flexibility of dynamic object manipulation without sacrificing the benefits of TypeScript's static type checking.
