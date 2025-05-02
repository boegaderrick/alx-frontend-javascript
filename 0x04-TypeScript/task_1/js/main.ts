interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any,
}

interface Director extends Teacher {
    numberOfReports: number,
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string,
}

interface Student {
    firstName: string,
    lastName: string,
    workOnHomeWork(): string,
    displayName(): string,
}

interface StudentConstructor {
    new (firstName: string, lastName: string): Student
}

class StudentClass implements Student {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomeWork() {
        return 'Currently working';
    } 
    displayName() {
        return this.firstName;
    }
}



const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

const director: Director = {
    firstName: 'Jane',
    lastName: 'Doe',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'Here',
    contract: true,
    gender: 'male',
    numberOfReports: 17,
};

console.log(printTeacher(director.firstName, director.lastName));
