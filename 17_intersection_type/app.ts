// Define type A
type Person = {
	name: string;
};

// Define type B
type Employee = {
	employeeId: number;
};

// Intersection type
type Staff = Person & Employee;

// Now, any Staff must have BOTH name and employeeId
const staffMember: Staff = {
	name: 'Alice',
	employeeId: 1234,
};

interface A {
	a: string;
}

interface B {
	b: number;
}

type AB = A & B;

const example: AB = {
	a: 'hello',
	b: 42,
};
