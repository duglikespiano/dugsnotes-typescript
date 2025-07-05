/**
 * TypeScript Optional Properties and Parameters:
 *
 * - You can mark a property or parameter as "optional" using `?`.
 * - It means the value can be present or `undefined`.
 *
 * Example: Optional object properties
 */
type User = {
	id: number;
	name?: string; // `name` is optional (string | undefined)
};

const user1: User = { id: 1 };
const user2: User = { id: 2, name: 'Alice' };

/**
 * Example: Optional function parameter
 */
function greet(name?: string) {
	if (name) {
		console.log(`Hello, ${name}`);
	} else {
		console.log('Hello, guest');
	}
}

greet('Bob'); // Hello, Bob
greet(); // Hello, guest

/**
 * Summary:
 * - `?` after a property or parameter makes it optional.
 * - The type becomes: <type> | undefined.
 * - You should check if the value is defined before using it.
 */
