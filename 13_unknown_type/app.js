/**
 * TypeScript `unknown` type:
 *
 * - `unknown` is a **safe counterpart to `any`**.
 * - It means: "I don't know the type yet."
 * - You **must** perform some type checking or type assertion before you can use it.
 *
 * Example usage:
 */
var value;
value = 123;
value = 'hello';
value = { x: 42 };
// Direct access is NOT allowed:
// console.log(value.toUpperCase()); // ❌ Error
// You must narrow the type first:
if (typeof value === 'string') {
    console.log(value.toUpperCase()); // ✅ Safe
}
// Or use a type assertion:
console.log(value.toUpperCase()); // ✅ But be careful
/**
 * Summary:
 * - `any`: You can do anything, no checks (unsafe).
 * - `unknown`: You must check the type before using (safer).
 */
