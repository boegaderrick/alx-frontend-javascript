interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface {
    workFromHome() { return 'Working from home'; }
    getCoffeeBreak() { return 'Getting a coffee break'; }
    workDirectorTasks() { return 'Getting to director tasks'; }
}

class Teacher implements TeacherInterface {
    workFromHome() { return 'Cannot work from home'; }
    getCoffeeBreak() { return 'Cannot have a break'; }
    workTeacherTasks() { return 'Getting to work'; }
}

interface CreateEmployeeFunction {
    (salary: string | number): Teacher | Director
}

const createEmployee: CreateEmployeeFunction = (salary) => Number(salary) >= 500 ? new Director() : new Teacher();

console.log(createEmployee(499));
console.log(createEmployee('300'));
console.log(createEmployee('500'));
console.log(createEmployee(1000));


/* *********************************************************************** */
interface IsDirectorFunction {
    (employee: Teacher | Director): boolean
}

interface ExecuteWorkFunction {
    (employee: Teacher | Director): string
}

const isDirector: IsDirectorFunction = (employee) => employee instanceof Director;

// @ts-expect-error
const executeWork: ExecuteWorkFunction = (employee) => isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks()

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(500)));


/* *********************************************************************** */
type Subjects = 'Math' | 'History';

interface TeachClassFunction {
    (todayClass: Subjects): string
}

const teachClass: TeachClassFunction = (todayClass) => todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';

console.log(teachClass('Math'));
console.log(teachClass('History'));
