### How to Use

- [Initial Setup](./tutorials/For%20Developers.md#_initial-setup_)
- [Installation](./tutorials/For%20Developers.md#installation)

### Creating a new ObjectAccumulator

**Description**: Initialize a new empty accumulator to start collecting object properties.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

// Create a new empty accumulator
const accumulator = new ObjectAccumulator<{}>();

// Or with type inference
const typedAccumulator = new ObjectAccumulator<{ initialType: string }>();
```

### Accumulating Objects

**Description**: Add properties from objects to the accumulator while maintaining type information.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator();

// Add a single object
const withUser = accumulator.accumulate({ name: "John", age: 30 });
console.log(withUser.name); // "John"
console.log(withUser.age); // 30

// Chain multiple accumulations
const fullData = accumulator
  .accumulate({ name: "John", age: 30 })
  .accumulate({ city: "New York", country: "USA" })
  .accumulate({ isActive: true, score: 95.5 });

// All properties are now available with type safety
console.log(fullData.name); // "John"
console.log(fullData.city); // "New York"
console.log(fullData.isActive); // true
```

### Retrieving Values

**Description**: Get a value from the accumulator using a key.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator()
  .accumulate({ name: "John", age: 30 });

// Get values using the get method
const name = accumulator.get("name"); // "John"
const age = accumulator.get("age"); // 30
const unknown = accumulator.get("unknown"); // undefined

// Or access directly with type safety
console.log(accumulator.name); // "John"
```

### Checking if a Key Exists

**Description**: Verify if a specific key is present in the accumulator.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator()
  .accumulate({ name: "John", age: 30 });

// Check if keys exist
const hasName = accumulator.has("name"); // true
const hasEmail = accumulator.has("email"); // false
```

### Removing Properties

**Description**: Remove a property from the accumulator.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator()
  .accumulate({ name: "John", age: 30, city: "New York" });

// Remove a property
const withoutAge = accumulator.remove("age");

console.log(withoutAge.has("age")); // false
console.log(withoutAge.has("name")); // true
console.log(withoutAge.has("city")); // true
```

### Getting All Keys

**Description**: Retrieve an array of all keys in the accumulator.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator()
  .accumulate({ name: "John", age: 30 })
  .accumulate({ city: "New York" });

// Get all keys
const keys = accumulator.keys(); // ["name", "age", "city"]
```

### Getting All Values

**Description**: Retrieve an array of all values in the accumulator.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator()
  .accumulate({ name: "John", age: 30 });

// Get all values
const values = accumulator.values(); // ["John", 30]
```

### Getting the Size

**Description**: Get the number of key-value pairs in the accumulator.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator();
console.log(accumulator.size()); // 0

const withData = accumulator.accumulate({ name: "John", age: 30 });
console.log(withData.size()); // 2

const moreData = withData.accumulate({ city: "New York", country: "USA" });
console.log(moreData.size()); // 4
```

### Clearing the Accumulator

**Description**: Remove all properties and return a new empty accumulator.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator()
  .accumulate({ name: "John", age: 30 });

// Clear all properties
const emptyAccumulator = accumulator.clear();
console.log(emptyAccumulator.size()); // 0
console.log(emptyAccumulator.keys()); // []
```

### Iterating with forEach

**Description**: Execute a callback function for each key-value pair in the accumulator.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator()
  .accumulate({ a: 1, b: 2, c: 3 });

// Iterate over all entries
accumulator.forEach((value, key, index) => {
  console.log(`${index}: ${key} = ${value}`);
});
// Output:
// 0: a = 1
// 1: b = 2
// 2: c = 3
```

### Mapping Values

**Description**: Create a new array by applying a function to each key-value pair.

```typescript
import { ObjectAccumulator } from 'typed-object-accumulator';

const accumulator = new ObjectAccumulator()
  .accumulate({ name: "John", age: 30, city: "New York" });

// Map entries to a new format
const formattedEntries = accumulator.map((value, key) => `${key}: ${value}`);
// ["name: John", "age: 30", "city: New York"]
```

## VERSION Constant

**Description**: Access the current version of the library.

```typescript
import { VERSION } from 'typed-object-accumulator';

console.log(`Using typed-object-accumulator version: ${VERSION}`);
```
