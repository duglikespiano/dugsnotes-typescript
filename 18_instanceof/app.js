// Example: Type guard using 'instanceof' in TypeScript
// Define two classes
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log('Woof!');
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log('Meow!');
    };
    return Cat;
}());
// Function using 'instanceof' to determine the type at runtime
function makeSound(animal) {
    if (animal instanceof Dog) {
        // TypeScript now knows 'animal' is a Dog
        animal.bark();
    }
    else if (animal instanceof Cat) {
        // TypeScript now knows 'animal' is a Cat
        animal.meow();
    }
}
// Usage
var myDog = new Dog();
var myCat = new Cat();
makeSound(myDog); // Woof!
makeSound(myCat); // Meow!
// Summary:
// - 'instanceof' checks if an object is an instance of a particular class.
// - Helps TypeScript narrow down the type in a union type.
// - Works only with class-based types (not interfaces or type aliases).
