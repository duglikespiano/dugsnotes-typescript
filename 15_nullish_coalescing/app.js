/**
 * TypeScript Nullish Coalescing (`??`):
 *
 * - The `??` operator returns the right-hand value **only if the left-hand value is `null` or `undefined`.**
 * - It does NOT consider other falsy values (e.g., 0, '', false) as nullish.
 *
 * Syntax:
 *   const result = value ?? defaultValue;
 *
 * Example:
 */
// const a = null ?? 'default'; // "default"
// const b = undefined ?? 'default'; // "default"
// const c = 0 ?? 42; // 0 (because 0 is NOT nullish)
// const d = '' ?? 'fallback'; // "" (empty string is NOT nullish)
// const e = false ?? true; // false (false is NOT nullish)
/**
 * Common Use Case:
 * Providing a fallback value only if the variable is truly "missing".
 */
function getUsername(name) {
    return name !== null && name !== void 0 ? name : 'Anonymous';
}
console.log(getUsername('Alice')); // "Alice"
console.log(getUsername('')); // "" (empty string preserved)
console.log(getUsername(undefined)); // "Anonymous"
console.log(getUsername(null)); // "Anonymous"
/**
 * Comparison with `||`:
 * - `||` treats ALL falsy values as needing the default.
 *   Example:
 *     0 || 10          // 10
 * - `??` treats only null/undefined as needing the default.
 *   Example:
 *     0 ?? 10          // 0
 */
