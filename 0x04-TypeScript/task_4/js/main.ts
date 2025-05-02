/// <reference path='subjects/Teacher.ts' />
/// <reference path='subjects/Subject.ts' />
/// <reference path='subjects/Cpp.ts' />
/// <reference path='subjects/React.ts' />
/// <reference path='subjects/Java.ts' />

{
    const cpp: Subjects.Cpp = new Subjects.Cpp();
    const java: Subjects.Java = new Subjects.Java();
    const react: Subjects.React = new Subjects.React();
    const cTeacher: Subjects.Teacher = {
        firstName: 'Jane',
        lastName: 'Doe',
        experienceTeachingC: 10
    }
    
    for ( const [ key, val ] of Object.entries({ cpp, java, react }) ) {
        val.setTeacher = cTeacher;
        console.log(key === 'cpp' ? 'C++' : `\n${key.slice(0, 1).toUpperCase()}${key.slice(1)}`);
        console.log(val.getRequirements());
        console.log(val.getAvailableTeacher());
    }
}
