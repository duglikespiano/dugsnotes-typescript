var user1 = { id: 1 };
var user2 = { id: 2, name: 'Alice' };
/**
 * Example: Optional function parameter
 */
function greet(name) {
    if (name) {
        console.log("Hello, ".concat(name));
    }
    else {
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
