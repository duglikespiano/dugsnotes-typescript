// Example: Type guard using 'instanceof' in TypeScript

// Define two classes
class Dog {
	bark() {
		console.log('Woof!');
	}
}

class Cat {
	meow() {
		console.log('Meow!');
	}
}

// Function using 'instanceof' to determine the type at runtime
function makeSound(animal: Dog | Cat) {
	if (animal instanceof Dog) {
		// TypeScript now knows 'animal' is a Dog
		animal.bark();
	} else if (animal instanceof Cat) {
		// TypeScript now knows 'animal' is a Cat
		animal.meow();
	}
}

// Usage
const myDog = new Dog();
const myCat = new Cat();

makeSound(myDog); // Woof!
makeSound(myCat); // Meow!

// Summary:
// - 'instanceof' checks if an object is an instance of a particular class.
// - Helps TypeScript narrow down the type in a union type.
// - Works only with class-based types (not interfaces or type aliases).
