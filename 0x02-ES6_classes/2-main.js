import ALXCourse from './2-hbtn_course';

const c1 = new ALXCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

try {
  /* eslint-disable no-unused-vars */
  const c2 = new ALXCourse('ES6', '1', ['Bob', 'Jane']);
} catch (err) {
  console.log(err);
}

try {
  const c3 = new ALXCourse('JS', 50, 2);
} catch (error) {
  console.log(error);
}

try {
  const c3 = new ALXCourse('JS', 50, [2]);
} catch (error) {
  console.log(error);
}
