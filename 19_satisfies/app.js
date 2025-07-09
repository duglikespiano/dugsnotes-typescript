// // Example: Using the 'satisfies' keyword in TypeScript
// // Define a type for a user
// type User = {
//   id: number;
//   name: string;
//   isAdmin?: boolean;
// };
// // Create a user object and use 'satisfies' to ensure it matches the 'User' type
// const user = {
//   id: 1,
//   name: "Alice",
//   // Extra properties are allowed as long as they don’t violate the target type
//   email: "alice@example.com"
// } satisfies User;
// // Notes:
// // - The 'satisfies' keyword is used to validate that an object meets a specific type or interface.
// // - Unlike type assertions (`as Type`), it preserves the exact type of the value on the right-hand side.
// // - It gives you full type inference, **while ensuring** the object conforms to the specified type.
// // - It's great for catching typos or missing properties, without forcing the object into the narrower type.
// // For example, this would cause a type error:
// // const badUser = {
// //   id: "wrong", // ❌ should be number
// //   name: "Bob"
// // } satisfies User; // Error: Type 'string' is not assignable to type 'number'.
// // Another example: Ensuring keys match exactly
// const roles = {
//   admin: 1,
//   user: 2,
//   guest: 3
// } satisfies Record<"admin" | "user" | "guest", number>;
// // Summary:
// // - 'satisfies' checks that a value conforms to a type **without changing** its inferred type.
// // - Useful for validating constant objects, enums, configs, etc.
// // - Helps prevent silent type mismatches while retaining full type precision.
