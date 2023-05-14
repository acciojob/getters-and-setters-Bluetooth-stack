//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	get _name(){
		return this.name;
	}
	set _age(newAge){
		this.age = newAge;
	}
}

class Student extends Person {
	constructor(name, age){
	    super(name, age);
	}
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name, age){
	    super(name, age);
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

const person = new Person("John", 25);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
