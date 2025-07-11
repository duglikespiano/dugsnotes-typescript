// Define the expected type
// type User = {
// 	id: number;
// 	name: string;
// 	isAdmin?: boolean;
// };

// // Raw object with more info, marked as readonly with 'as const'
// const rawUser = {
// 	id: 1,
// 	name: 'Alice',
// 	email: 'alice@example.com',
// 	isAdmin: true,
// } as const;

// // Build the object that conforms strictly to 'User'
// const user = {
// 	id: rawUser.id,
// 	name: rawUser.name,
// 	isAdmin: rawUser.isAdmin,
// } satisfies User;

// ✅ No error: 'user' contains only keys in 'User'
// ✅ 'rawUser' is deeply immutable due to 'as const'
// ✅ 'satisfies' checks types strictly without losing literal value types

// --- Using 'as const' with 'satisfies' ---
//
// 'as const' freezes the object:
//   - All properties become readonly
//   - All literal values (like string "Alice") stay as-is (not widened to string)
//
// 'satisfies' ensures the final object:
//   - Includes only properties defined in the type
//   - Has the correct value types (e.g., number, string, etc.)
//   - Rejects extra properties (which is why we extract only what we need)
//
// Good pattern:
// - Use 'as const' on a larger config or data object
// - Use 'satisfies' to extract and validate a clean, typed object
